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


/*Router.go('launch', function () {
 this.render('launch');
 });*/
VideosController = RouteController.extend({
	onBeforeAction:function () {
		Session.set('videoId',null);
		video.set();

		/*var k1=[Session.get('k1'),Session.get('v1')];
		var k2=[Session.get('k2'),Session.get('v2')];
		var k3=[Session.get('k3'),Session.get('v3')];
		var k4=[Session.get('k4'),Session.get('v4')];*/

		Meteor.call('getVideos', Session.get('channel'),"youtube" ,function (error, result) {
			Session.set('videoId', result[0].id.videoId);
			video.set(result);
		});
		this.next();
	}
});

VimeoController = RouteController.extend({
	onBeforeAction:function () {
		Session.set('videoId',null);
		video.set();
		/*var k1=[Session.get('k1'),Session.get('v1')];
		var k2=[Session.get('k2'),Session.get('v2')];
		var k3=[Session.get('k3'),Session.get('v3')];
		var k4=[Session.get('k4'),Session.get('v4')];*/

		Meteor.call('getVideos',Session.get('channel'),"vimeo" ,function (error, result) {
			var temp=result[0].uri.split('/');
			Session.set('videoId', temp[2]);
			//console.log(result);
			video.set(result);
		});
		this.next();
	}
});

Router.route('videos', function () {
	this.render('videos');
});

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
	this.render('launch');
});

Router.route('logout', function () {
	Meteor.logout();
	Router.go('launch');
});









