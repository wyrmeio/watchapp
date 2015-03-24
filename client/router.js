/**
 * Created by idris on 16/3/15.
 */

Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
	if ( Meteor.userId() ) {
		this.render('keys');
	} else {
		this.render('launch');
	}
});

/*Router.go('launch', function () {
	this.render('launch');
});*/

Router.onBeforeAction(function () {
	Meteor.call('getVideos', key1,key2,key3,key4, function (error, result) {
		video.set(result);
	});
	this.next();
}, {
	only: ['videos']
});

Router.route('videos', function () {
	this.render('videos');
});

Router.route('keys', function () {
	this.render('keys');
});

Router.route('play', function () {
	this.render('play');
});
/*
 Router.route('/mod',function(){
 this.render('mod');
 });
 */








