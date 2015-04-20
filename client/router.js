/**
 * Created by idris on 16/3/15.
 */

Router.configure({
	layoutTemplate: 'layout'
	/*progressSpinner : false*/
});

Router.route('home', {
	path: '/',
	action: function () {
		if ( Meteor.userId() ) {
			Router.go('videos');
		} else {
			this.render('launch');
		}
	}
});

Router.route('videos', {
	path: '/videos',
	action: function () {

			if ( Meteor.userId() ) {
				this.render('videos');
			} else {
					this.render('launch');
			}

	}
});


VideosController = RouteController.extend({
	onBeforeAction: function () {
		/*console.log("called meteor method");*/
		Session.set('videoId', null);
		video.set();

		/*var loc;
		 if ( Session.get("location") === "none" ) {
		 Tracker.autorun(function (c) {
		 var temp = Geolocation.latLng();
		 console.log(temp);
		 loc = temp.lat + ',' + temp.lng;
		 Session.set("location", loc);
		 c.stop();
		 });
		 }
		 else {
		 loc = Session.get("location");
		 }*/

			Meteor.call('getVideos', Session.get('channel'), "youtube", Session.get('order'), Session.get('vidDef'), Session.get('vidDur'), Session.get('safeSearch'), Session.get("location"), function (error, result) {
				Session.set('videoId', result[0].id.videoId);
				video.set(result);
			});

		this.next();

	}
});

VimeoController = RouteController.extend({
	onBeforeAction: function () {
		Session.set('videoId', null);
		video.set();
		/*var k1=[Session.get('k1'),Session.get('v1')];
		 var k2=[Session.get('k2'),Session.get('v2')];
		 var k3=[Session.get('k3'),Session.get('v3')];
		 var k4=[Session.get('k4'),Session.get('v4')];*/

		Meteor.call('getVideos', Session.get('channel'), "vimeo", null, null, null, null, null, function (error, result) {
			var temp = result[0].uri.split('/');
			Session.set('videoId', temp[2]);
			//console.log(result);
			video.set(result);
		});
		this.next();
	}
});


/*Router.route('videos', function () {
 this.render('videos');
 });*/

Router.route('vimeo', function () {
	this.render('vimeo');
});

Router.route('keys', function () {
	this.render('keys');
});

Router.route('play', function () {
	this.render('play');
});

Router.route('test', function () {
	this.render('test');
});

Router.route('settings', function () {
	this.render('settings');
});

Router.route('launch', function () {
	if ( Meteor.userId() ) {
		this.render('videos');
	} else {
		this.render('launch');
	}
});

Router.route('logout', function () {
	Meteor.logout();
	Router.go('launch');
});

Router.route('facebook', function () {
	this.render('facebook');
});

Router.route('dailymotion', function () {
	this.render('dailymotion');
});

FacebookController = RouteController.extend({
	onBeforeAction: function () {
		Session.set("channel", "Facebook Videos");
		Session.set('videoId', null);
		video.set();

		FB.api('/me/posts?limit=100&access_token=' + Session.get("token"), 'get', function (response) {

			var temp = [];

			if ( response.data.length > 0 ) {
				for ( var i = 0; i < response.data.length; i++ ) {
					if ( response.data[i].type === "video" )
						temp.push(response.data[i]);
				}


				/*if ( temp[0].link.indexOf("facebook") > -1 ) {
				 Session.set("videoType", true);
				 Session.set('videoId', temp[0].link);
				 }
				 else {*/
				Session.set("videoType", false);
				Session.set('videoId', temp[0].source);
				//}

				video.set(temp);
			}
			else {
				alert("Oops!! You dont have any facebook video. Try uploading one");
			}

		});

		this.next();
	}
});

DailymotionController = RouteController.extend({
	onBeforeAction: function () {
		Session.set('videoId', null);
		video.set();

		Meteor.call('getVideos', Session.get('channel'), "dailymotion", null, null, null, null, null, function (error, result) {

			Session.set('videoId', result[0].id);
			video.set(result);
		});
		this.next();
	}
});









