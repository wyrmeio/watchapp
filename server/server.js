/**
 * Created by idris on 14/3/15.
 */


Meteor.methods({

	getVideos: function (channel, type, order, vidDef, vidDur, safeSearch, location) { // jshint ignore:line

		var youtubeCategory=[];
		youtubeCategory["Movies"]=30;
		youtubeCategory["Music"]=10;
		youtubeCategory["Sports"]=17;
		youtubeCategory["TV Shows"]=43;
		youtubeCategory["Books"]=27;
		youtubeCategory["News"]=25;

		var dailymotionCategory=[];
		dailymotionCategory["Movies"]="shortfilms";
		dailymotionCategory["Music"]="music";
		dailymotionCategory["Sports"]="sport";
		dailymotionCategory["TV Shows"]="tv";
		dailymotionCategory["Books"]="school";
		dailymotionCategory["News"]="news";

		var vimeoCategory=[];
		vimeoCategory["Movies"]="shortfilms";
		vimeoCategory["Music"]="music";
		vimeoCategory["Sports"]="sport";
		vimeoCategory["TV Shows"]="tv";
		vimeoCategory["Books"]="school";
		vimeoCategory["News"]="news";

		var channelData = Category.find({uid: Meteor.userId(), category: channel}).fetch();
		var temp = channelData[0].data;

		var items = [];
		if ( temp.length > 0 ) {
			temp = temp.sort(function (a, b) {
				if ( a.likes > b.likes )return -1;
				if ( a.likes < b.likes )return 1;
				return 0
			});

			var keyArray = percentile(temp);
			_.each(temp, function (key, index) {
				if ( type === "youtube" ) {

					//maxResults(keyArray[index])
					var result = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key.name + "&maxResults=20&type=video&order=" + order + "&safeSearch=" + safeSearch + "&videoDefinition=" + vidDef + "&videoDuration=" + vidDur + "&videoSyndicated=true&videoCategoryId="+youtubeCategory[channel]+"key=AIzaSyDN1qT_tTDoQbxmuP0A5QRveOnFsPSqhT8"});
					var item = youtubeAnalysis(result.data.items);
					for ( var i = 0; i < maxResults(keyArray[index]); i++ ) {
						items = items.concat(item[i]);
					}
				}
				else if ( type === "vimeo" ) {
					var result = HTTP.get("https://api.vimeo.com/videos", {
						query: "per_page=20&query=" + key.name + "&sort=relevant&direction=desc",
						headers: {"Authorization": "bearer 77378a3af5827ca695b3d0c4155e62f1"}
					});

					var json = JSON.parse(result.content);

					var item = vimeoAnalysis(json.data);

					for ( var i = 0; i < maxResults(keyArray[index]); i++ ) {
						items = items.concat(item[i]);
					}
					//items = items.concat(json.data);
				}
				else {
					var result = HTTP.get("https://api.dailymotion.com/videos", {query: "fields=id,thumbnail_360_url,title,views_total,comments_total,bookmarks_total,created_time,&search=" + key.name + "&channel="+dailymotionCategory[channel]+"&sort=relevance&limit=30"});
					/*maxResults(keyArray[index]);*/
					//items = items.concat(result.data.list);
					var item = dailyMotionAnalysis(result.data.list);
					for ( var i = 0; i < maxResults(keyArray[index]); i++ ) {
						items = items.concat(item[i]);
					}
				}
			});
		}

		else {

			if ( type === "youtube" ) {
				var latlng;
				if(location==="none") {
					var loc_Result = HTTP.get("https://maps.googleapis.com/maps/api/geocode/json", {query: "address=" + location});
					console.log(loc_Result);
					latlng = loc_Result.data.results[0].geometry.location.lat + ',' + loc_Result.data.results[0].geometry.location.lng;
				}else{
					latlng="37.42307,-122.08427";
				}

				var result = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + channel + "&maxResults=50&type=video&order=" + order + "&safeSearch=" + safeSearch + "&videoDefinition=" + vidDef + "&videoDuration=" + vidDur + "&location="+latlng+"&locationRadius=200km&videoCategoryId="+youtubeCategory[channel]+"&relevanceLanguage=en&videoSyndicated=true&key=AIzaSyDN1qT_tTDoQbxmuP0A5QRveOnFsPSqhT8"});
				var item = youtubeAnalysis(result.data.items);

				items = item;

			}
			else if ( type === "vimeo" ) {
				var result = HTTP.get("https://api.vimeo.com/tags/"+channel+"/videos", {
					query: "per_page=50&query=" + channel + "&sort=duration&direction=desc",
					headers: {"Authorization": "bearer 77378a3af5827ca695b3d0c4155e62f1"}
				});

				var json = JSON.parse(result.content);
				var item = vimeoAnalysis(json.data);
				items = item;

			} else {
				var result = HTTP.get("https://api.dailymotion.com/videos", {query: "fields=id,thumbnail_360_url,title,views_total,comments_total,bookmarks_total,created_time,&channel="+dailymotionCategory[channel]+"&limit=100"});

				var item = dailyMotionAnalysis(result.data.list);
				items=item;

			}
		}

		console.log(items);
		return items;
		/*if ( result.statusCode == 200 ) {
		 return result.data.items;
		 } else {
		 console.log("Response issue: ", result.statusCode);
		 var errorJson = JSON.parse(result.content);
		 throw new Meteor.Error(result.statusCode, errorJson.error);
		 }*/
	},

	userToken: function (id) {
		var token = Meteor.users.find({_id: id}).fetch();
		//console.log(token);
		return token[0].services.facebook.accessToken;
	},

	category: function (response) {

		Category.upsert({uid: Meteor.userId(), category: 'Books'}, {$set: {data: []}});
		Category.upsert({uid: Meteor.userId(), category: 'News'}, {$set: {data: []}});
		Category.upsert({uid: Meteor.userId(), category: 'Movies'}, {$set: {data: []}});
		Category.upsert({uid: Meteor.userId(), category: 'TV Shows'}, {$set: {data: []}});
		Category.upsert({uid: Meteor.userId(), category: 'Sports'}, {$set: {data: []}});
		Category.upsert({uid: Meteor.userId(), category: 'Music'}, {$set: {data: []}});

		for ( var i = 0; i < response.data.length; i++ ) {

			switch ( response.data[i].category ) {
				case "Book":
					Category.update({uid: Meteor.userId(), category: 'Books'}, {$addToSet: {data: response.data[i]}});
					break;
				case "Tv show":
					Category.update({
						uid: Meteor.userId(),
						category: 'TV Shows'
					}, {$addToSet: {data: response.data[i]}});
					break;
				case "Movie":
					Category.update({uid: Meteor.userId(), category: 'Movies'}, {$addToSet: {data: response.data[i]}});
					break;
				case "News/media website":
					Category.update({uid: Meteor.userId(), category: 'News'}, {$addToSet: {data: response.data[i]}});
					break;
				case "Sports team":
					Category.update({uid: Meteor.userId(), category: 'Sports'}, {$addToSet: {data: response.data[i]}});
					break;
				case "Musician/band":
					Category.update({uid: Meteor.userId(), category: 'Music'}, {$addToSet: {data: response.data[i]}});
					break;
			}

		}
	}

});

maxResults = function (value) {
	if ( value >= 70 )
		return 4;
	else if ( value >= 36 && value <= 69 )
		return 3;
	else if ( value >= 11 && value <= 35 )
		return 2;
	else return 1;
}

var inProduction = function () {
	return process.env.NODE_ENV === "production";
};

if ( inProduction() ) {
	//Production App
	ServiceConfiguration.configurations.upsert(
		{service: "facebook"},
		{
			$set: {
				appId: "1576864782598720",
				loginStyle: "redirect",
				secret: "d88ed0765c82df8acf8a0eb272b92a80"
			}
		}
	);

	ServiceConfiguration.configurations.upsert(
		{service: "twitter"},
		{
			$set: {
				consumerKey: "SPWwEMQgwLz84m3ZhXHiBHLUu",
				secret: "UIdlH3QErTxDCqe5S2dzQb6VdD6fRr5ywfWuGzbvOVJJ4zbEAe"

			}
		}
	);

}
else {

	//Development App
	ServiceConfiguration.configurations.upsert(
		{service: "facebook"},
		{
			$set: {
				appId: "1576877225930809",
				loginStyle: "redirect",
				secret: "7b263275031b169521c61900280e3fee"
			}
		}
	);

	ServiceConfiguration.configurations.upsert(
		{service: "twitter"},
		{
			$set: {
				consumerKey: "4WluwwMjFDKSTxQrsfSTPhXiY",
				secret: "lJvXoBpfKxTlkxjqE40P66sDHvDJF5TGBGMq4PYfdN4WIyBpmA"

			}
		}
	);
}

percentile = function (array) {
	var temp = [];

	for ( var i = 0; i < array.length; i++ ) {
		var percentile = (array[i].likes) / (array[0].likes) * 100;
		temp.push(percentile);
	}
	return temp;
};

youtubeAnalysis = function (result) {

	var keys = "";
	_.each(result, function (key, index) {
		keys = key.id.videoId + "," + keys;
	});

	var stats = HTTP.get("https://www.googleapis.com/youtube/v3/videos", {query: "part=statistics&id=" + keys.substring(0, keys.length - 1) + "&maxResults=50&key=AIzaSyDN1qT_tTDoQbxmuP0A5QRveOnFsPSqhT8"});

	var statistics = stats.data.items;

	_.each(statistics, function (key, index) {
		var sentiment = (key.statistics.likeCount - key.statistics.dislikeCount) * 100 / key.statistics.viewCount;
		var days = Math.ceil(((+new Date()) - (+new Date(result[index].snippet.publishedAt))) / (24 * 60 * 60 * 1000));
		var frequency = (key.statistics.viewCount - days) * 100 / key.statistics.viewCount;

		/*var engagement=(key.statistics.likeCount+key.statistics.favoriteCount+key.statistics.commentCount - key.statistics.dislikeCount);
		 var viewsPerDay=parseInt(key.statistics.viewCount)/days;*/

		var average = (sentiment + frequency) / 2;
		result[index].kind = (average);
	});

	result = result.sort(function (a, b) {
		if ( a.kind > b.kind )return -1;
		if ( a.kind < b.kind )return 1;
		return 0
	});
	/*console.log(result);*/
	return result;
};

dailyMotionAnalysis=function(result){

	_.each(result, function (key, index) {
		var sentiment = (key.bookmarks_total) * 100 / key.views_total;
		var days = Math.ceil(((+new Date()) - (key.created_time)) / (24 * 60 * 60 * 1000));
		var frequency = (key.views_total - days) * 100 / key.views_total;

		var average = (sentiment + frequency) / 2;
		result[index].bookmarks_total = (average);

	});

	result = result.sort(function (a, b) {
		if ( a.bookmarks_total > b.bookmarks_total )return -1;
		if ( a.bookmarks_total < b.bookmarks_total )return 1;
		return 0
	});
	/*console.log(result);*/
	return result;
};

vimeoAnalysis=function(result){

	_.each(result, function (key, index) {
		var sentiment = (key.metadata.connections.likes.total) * 100 / key.stats.plays;
		var days = Math.ceil(((+new Date()) - (+new Date(key.created_time))) / (24 * 60 * 60 * 1000));
		var frequency = (key.stats.plays - days) * 100 / key.stats.plays;

		var average = (sentiment + frequency) / 2;
		result[index].duration = (average);

	});

	result = result.sort(function (a, b) {
		if ( a.duration > b.duration )return -1;
		if ( a.duration < b.duration )return 1;
		return 0
	});
	/*console.log(result);*/
	return result;
};







