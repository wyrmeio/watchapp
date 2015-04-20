Meteor.startup(function () {
	Session.set("channel", "Movies");

	Session.set("order", "relevance");
	Session.set("vidDef", "any");
	Session.set("vidDur", "any");
	Session.set("safeSearch", "none");

	Session.set("location", "none");
});


if ( Meteor.isClient ) {
	window.fbAsyncInit = function () {
		FB.init({
			appId: '1576864782598720',//appId: '1576877225930809',
			status: true,
			xfbml: true,
			version: 'v2.2'
		});
	};
}


Template.settings.onRendered(function () {
	$("select#order").on("change", function () {
		Session.set('order', $("#order").val());
	});
	$("select#vidDef").on("change", function () {
		Session.set('vidDef', $("#vidDef").val());
	});
	$("select#vidDur").on("change", function () {
		Session.set('vidDur', $("#vidDur").val());
	});
	$("select#safeSearch").on("change", function () {
		Session.set('safeSearch', $("#safeSearch").val());
	});
});

Template.videos.onRendered(function () {
	/*$(window).scroll(function () {
		if ( $(window).scrollTop() + $(window).height() > $(document).height() - 100 ) {
			console.log("reached bottom");
		}
	});*/
});

Template.settings.events({
	'click #applySettings': function () {
		Router.go('videos');
	}
});

Template.navbar.rendered = function () {
	$(document).ready(function () {
		$('.menu-navbar').sidr({
			name: 'respNav',
			source: '.nav-collapse',
			renaming: false,
			onOpen: function () {
				$(".navbar").animate({'left': '140px'}, "fast");
			},
			onClose: function () {
				$(".navbar").animate({'left': '0px'}, "fast");
			}
		});
	});

	//this code is close sidr menu if clicked outside  {optional}
	$(document).bind("click", function () {
		$.sidr('close', 'respNav');
	});

	$('.sidr-inner #movies').on('click', function (e) {
		e.preventDefault();

		Session.set("channel", "Movies");
	});
	$('.sidr-inner #tv').on('click', function (e) {
		e.preventDefault();
		Session.set("channel", "TV Shows");
	});
	$('.sidr-inner #music').on('click', function (e) {
		e.preventDefault();
		Session.set("channel", "Music");
	});
	$('.sidr-inner #sports').on('click', function (e) {
		e.preventDefault();
		Session.set("channel", "Sports");
	});
	$('.sidr-inner #news').on('click', function (e) {
		e.preventDefault();
		Session.set("channel", "News");
	});
	$('.sidr-inner #books').on('click', function (e) {
		e.preventDefault();
		Session.set("channel", "Books");
	});

};

Template.navbar.helpers({
	channel: function () {
		return Session.get("channel");
	}
});

Accounts.onLogin(function () {

	Meteor.call('userToken', Meteor.userId(), function (error, result) {
		Session.set("token", result);

		FB.api('/me?fields=location,likes.limit(100){category,name,likes}&access_token=' + result, 'get',function (response) {
			Meteor.call('category', response.likes);

			var temp = (typeof response.location.name);
			if ( temp != undefined ) {
				/*HTTP.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + response.location.name,function(error,res){

					var loc_Json = JSON.parse(res.content);
					var loc=loc_Json.results[0].geometry.location.lat+','+loc_Json.results[0].geometry.location.lng;
					Session.set("location", loc);
					console.log(loc);

				});*/

				Session.set("location", response.location.name);
			}

		});
	});
});

Template.launch.events({
	'click #fb': function (e) {
		e.preventDefault();

		Meteor.loginWithFacebook({
			requestPermissions: ['email', 'user_likes', 'user_posts', 'user_videos', 'user_location'],
			loginStyle: "redirect"
		}, function () {
			Router.go('videos');
		});
	},

	'click #tw': function (e) {
		e.preventDefault();

		Meteor.loginWithTwitter({
			loginStyle: "redirect"
		}, function () {

			Router.go('videos');
		});
	}
});

Template.videos.helpers({
	id: function () {
		/*if(Session.get('videoId')!==null)*/
		return Session.get('videoId');

	},
	videoList: function () {

		return video.get().map(function (video, index) {
			video.createdtime = time_ago(video.snippet.publishedAt);
			return video;
		});
	}
});

Template.vimeo.helpers({
	id: function () {
		if ( Session.get('videoId') !== null )
			return Session.get('videoId');
		else return false;
	},
	videoList: function () {
		return video.get().map(function (video) {
			video.createdtime = time_ago(video.created_time);
			video.pic = video.pictures.sizes[2].link;
			return video;
		});
	}
});

Template.dailymotion.helpers({
	id: function () {
		if ( Session.get('videoId') !== null )
			return Session.get('videoId');
		else return false;
	},
	videoList: function () {
		return video.get();
	}
});

Template.videos.events({
	'click .panel': function (e) {
		e.preventDefault();
		var self = this;
		Session.set('videoId', self.id.videoId);
		/*Session.set('title', self.snippet.title);
		 Router.go('play')*/
	}
});

Template.vimeo.events({
	'click .panel': function (e) {
		e.preventDefault();
		var self = this;
		var temp = self.uri.split('/');
		Session.set('videoId', temp[2]);
	}
});

Template.dailymotion.events({
	'click .panel': function (e) {
		e.preventDefault();
		var self = this;
		var temp = self.id;
		Session.set('videoId', temp);
	}
});

Template.facebook.helpers({
	id: function () {
		if ( Session.get('videoId') !== null )
			return Session.get('videoId');
		else return false;
	},
	videoType: function () {
		return Session.get('videoType');
	},
	videoList: function () {
		return video.get();
	}
});

Template.facebook.events({
	'click .panel': function (e) {
		e.preventDefault();
		var self = this;

		/*	if ( self.link.indexOf("facebook") > -1 ) {
		 Session.set("videoType", true);
		 Session.set('videoId', self.link);
		 }
		 else {*/
		Session.set("videoType", false);
		Session.set('videoId', self.source);
		//}
	}
});


function time_ago(time) {

	switch ( typeof time ) {
		case 'number':
			break;
		case 'string':
			time = +new Date(time);
			break;
		case 'object':
			if ( time.constructor === Date ) time = time.getTime();
			break;
		default:
			time = +new Date();
	}
	var time_formats = [
		[60, 'seconds', 1], // 60
		[120, '1 minute ago', '1 minute from now'], // 60*2
		[3600, 'minutes', 60], // 60*60, 60
		[7200, '1 hour ago', '1 hour from now'], // 60*60*2
		[86400, 'hours', 3600], // 60*60*24, 60*60
		[172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
		[604800, 'days', 86400], // 60*60*24*7, 60*60*24
		[1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
		[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
		[4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
		[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
		[58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
		[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
		[5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
		[58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
	];
	var seconds = (+new Date() - time) / 1000,
	    token = 'ago', list_choice = 1;

	if ( seconds == 0 ) {
		return 'Just now'
	}
	if ( seconds < 0 ) {
		seconds = Math.abs(seconds);
		token = 'from now';
		list_choice = 2;
	}
	var i = 0, format;
	while ( format = time_formats[i++] )
		if ( seconds < format[0] ) {
			if ( typeof format[2] == 'string' )
				return format[list_choice];
			else
				return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
		}
	return time;
}


/*Template.test.onRendered(function(){
 videojs('vid2', { "techOrder": ["vimeo"], "src": "https://vimeo.com/70705404" }).ready(function() {
 // You can use the video.js events even though we use the vimeo controls
 // As you can see here, we change the background to red when the video is paused and set it back when unpaused
 this.on('pause', function() {
 document.body.style.backgroundColor = 'red';
 });

 this.on('play', function() {
 document.body.style.backgroundColor = '';
 });

 // You can also change the video when you want
 // Here we cue a second video once the first is done
 this.one('ended', function() {
 this.src('http://vimeo.com/79380715');
 this.play();
 });
 });
 });*/
