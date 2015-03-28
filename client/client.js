
Meteor.startup(function(){
	Session.set("channel","Movies");
});


if ( Meteor.isClient ) {
	window.fbAsyncInit = function () {
		FB.init({
			appId: '1576864782598720',
			status: true,
			xfbml: true,
			version: 'v2.2'
		});
	};
}

/*Template.navbar.onRendered(function(){
	Template.navbar.events({
		'click a#movies': function () {
			console.log("movies");
		}
	});
	});*/


Template.videos.onRendered(function () {

	var fixmeTop = $('.fixme').offset().top;
	$(window).scroll(function () {

		var currentScroll = $(window).scrollTop();
		if ( currentScroll >= fixmeTop ) {

			$('.fixme').css({
				position: 'fixed',
				top: '0',
				left: '0',
				width: '100%'
			});
		} else {

			$('.fixme').css({
				position: 'static'
			});
		}
	});

});

Template.vimeo.onRendered(function () {

	var fixmeTop = $('.fixme').offset().top;
	$(window).scroll(function () {

		var currentScroll = $(window).scrollTop();
		if ( currentScroll >= fixmeTop ) {

			$('.fixme').css({
				position: 'fixed',
				top: '0',
				left: '0',
				width: '100%'
			});
		} else {

			$('.fixme').css({
				position: 'static'
			});
		}
	});

});

Template.navbar.rendered = function () {
	$(document).ready(function () {
		$('.menu-navbar').sidr({
			name: 'respNav',
			source: '.nav-collapse',
			renaming: false
		});
	});

	//this code is close sidr menu if clicked outside  {optional}
	$(document).bind("click", function () {
		$.sidr('close', 'respNav');
	});

	/*$(selector).sidr( {renaming: false} );*/
	/*$(".fa-youtube").sidr( {renaming: false} );*/
	$('.sidr-inner #movies').on('click',function(e){
		e.preventDefault();
		Session.set("channel","Movies");
	});
	$('.sidr-inner #tv').on('click',function(e){
		e.preventDefault();
		Session.set("channel","TV Shows");
	});
	$('.sidr-inner #music').on('click',function(e){
		e.preventDefault();
		Session.set("channel","Music");
	});
	$('.sidr-inner #sports').on('click',function(e){
		e.preventDefault();
		Session.set("channel","Sports");
	});
	$('.sidr-inner #news').on('click',function(e){
		e.preventDefault();
		Session.set("channel","News");
	});
	$('.sidr-inner #books').on('click',function(e){
		e.preventDefault();
		Session.set("channel","Books");
	});
};

Accounts.onLogin(function () {

	Meteor.call('userToken', Meteor.userId(), function (error, result) {

		FB.api('/me/likes?fields=category,name,likes&limit=100&access_token=' + result, 'get', function (response) {

			console.log(response);
			Meteor.call('category',response);

		});
	});
});

Template.launch.events({
	'click #fb': function (e) {
		e.preventDefault();

		Meteor.loginWithFacebook({
			requestPermissions: ['email', 'user_likes'],
			loginStyle: "redirect"
		}, function () {

			Router.go('keys');
		});
	},

	'click #tw': function (e) {
		e.preventDefault();

		Meteor.loginWithTwitter({
			loginStyle: "redirect"
		}, function () {

			Router.go('keys');
		});
	}
});

Template.layout.helpers({
	'k1': function () {
		var temp = Session.get('k1');
		return (temp);
	},
	'k2': function () {
		var temp = Session.get('k2');
		return (temp);
	},
	'k3': function () {
		var temp = Session.get('k3');
		return (temp);
	},
	'k4': function () {
		var temp = Session.get('k4');
		return (temp);
	},
	'v1': function () {
		var temp = Session.get('v1');
		return (temp);
	},
	'v2': function () {
		var temp = Session.get('v2');
		return (temp);
	},
	'v3': function () {
		var temp = Session.get('v3');
		return (temp);
	},
	'v4': function () {
		var temp = Session.get('v4');
		return (temp);
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
		return video.get().map(function (video, index) {
			video.createdtime = time_ago(video.created_time);
			video.pic = video.pictures.sizes[2].link;
			return video;
		});
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

Template.keys.helpers({
	'k1': function () {
		var temp = Session.get('k1');
		return (temp);
	},
	'k2': function () {
		var temp = Session.get('k2');
		return (temp);
	},
	'k3': function () {
		var temp = Session.get('k3');
		return (temp);
	},
	'k4': function () {
		var temp = Session.get('k4');
		return (temp);
	},
	'v1': function () {
		var temp = Session.get('v1');
		return (temp);
	},
	'v2': function () {
		var temp = Session.get('v2');
		return (temp);
	},
	'v3': function () {
		var temp = Session.get('v3');
		return (temp);
	},
	'v4': function () {
		var temp = Session.get('v4');
		return (temp);
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

Template.keys.events({
	'click #submit': function (e, t) {
		/*key1 = [$('#k1').val(), parseInt($('#v1').val())];
		 key2 = [$('#k2').val(), parseInt($('#v2').val())];
		 key3 = [$('#k3').val(), parseInt($('#v3').val())];
		 key4 = [$('#k4').val(), parseInt($('#v4').val())];*/

		Session.set('k1', $('#k1').val());
		Session.set('k2', $('#k2').val());
		Session.set('k3', $('#k3').val());
		Session.set('k4', $('#k4').val());

		Session.set('v1', parseInt($('#v1').val()));
		Session.set('v2', parseInt($('#v2').val()));
		Session.set('v3', parseInt($('#v3').val()));
		Session.set('v4', parseInt($('#v4').val()));

		Router.go('videos');
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
