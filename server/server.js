/**
 * Created by idris on 14/3/15.
 */


Meteor.methods({

	getVideos: function (channel, type) {

		var channelData=Category.find({uid:Meteor.userId(),category:channel}).fetch();

		var temp = channelData[0].data;
		temp = temp.sort(function (a, b) {
			if ( a[2] > b[2] )return -1;
			if ( a[2] < b[2] )return 1;
			return 0
		});

		var keyArray=percentile(temp);

		var items = [];
		_.each(temp, function (key,index) {
			if ( type === "youtube" ) {
				var result = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key.name + "&maxResults=" + maxResults(keyArray[index]) + "&key=AIzaSyC03h-Mb85Lg2XuC3AldOaIygB4balUcNg"});
				items = items.concat(result.data.items);
			}
			else {
				var result = HTTP.get("https://api.vimeo.com/videos", {
					query: "per_page=" + maxResults(keyArray[index]) + "&query=" + key.name + "&sort=relevant&direction=desc",
					headers: {"Authorization": "bearer 77378a3af5827ca695b3d0c4155e62f1"}
				});

				var json = JSON.parse(result.content);
				items = items.concat(json.data);
			}
		});


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

		Category.upsert({uid:Meteor.userId(),category:'Books'},{$set:{data:[]}});
		Category.upsert({uid:Meteor.userId(),category:'News'},{$set:{data:[]}});
		Category.upsert({uid:Meteor.userId(),category:'Movies'},{$set:{data:[]}});
		Category.upsert({uid:Meteor.userId(),category:'TV Shows'},{$set:{data:[]}});
		Category.upsert({uid:Meteor.userId(),category:'Sports'},{$set:{data:[]}});
		Category.upsert({uid:Meteor.userId(),category:'Music'},{$set:{data:[]}});

		for ( var i = 0; i < response.data.length; i++ ) {

			switch ( response.data[i].category ) {
				case "Book":
					Category.update({uid: Meteor.userId(), category: 'Books'}, {$addToSet: {data: response.data[i]}});
					break;
				case "Tv show":
					Category.update({uid: Meteor.userId(), category: 'TV Shows'}, {$addToSet: {data: response.data[i]}});
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

percentile=function(array){
	var temp=[];
	for(var i=0;i<array.length;i++){
		var percentile=(array.length-i)/(array.length)*100;
		temp.push(percentile);
	}
	return temp;
};







