Meteor.startup(function () {

});

Template.layout.rendered = function () {
	$(document).ready(function () {
		$('.menu-navbar').sidr({
			name: 'respNav',
			source: '.nav-collapse'
		});
	});

	//this code is close sidr menu if clicked outside  {optional}
	$(document).bind("click", function () {
		$.sidr('close', 'respNav');
	});
}

Template.layout.events({
	'click #logout': function (e) {
		console.log("logout");
		e.preventDefault();
		Meteor.logout(function () {
			//Router.go('launch');
		});
	}
});


Template.launch.events({
	'click #fb': function (e) {
		e.preventDefault();
		//Router.go('keys');
		//console.log("I am working");
		Meteor.loginWithFacebook({
			requestPermissions: ['email'],
			loginStyle: "redirect"
		}, function () {
			Router.go('keys');
		});
	},

	'click #tw': function (e) {
		e.preventDefault();
		//Router.go('keys');
		//console.log("I am working");
		Meteor.loginWithTwitter({
			//requestPermissions: ['email'],
			loginStyle: "redirect"
		}, function () {
			Router.go('keys');
		});
	}
});

Template.videos.helpers({
	videoList: function () {
		return video.get();
	}
});

Template.videos.events({
	'click .panel': function (e) {
		e.preventDefault();
		var self = this;
		Session.set('videoId', self.id.videoId);
		Session.set('title', self.snippet.title);
		Router.go('play')
	}
});

Template.play.helpers({
	id: function () {
		return Session.get('videoId');
	},
	title: function () {
		return Session.get('title');
	}
});


Template.keys.events({
	'click #submit': function (e, t) {
		key1 = [$('#k1').val(), $('#v1').val()];
		key2= [$('#k2').val(), $('#v2').val()];
		key3= [$('#k3').val(), $('#v3').val()];
		key4 = [$('#k4').val(), $('#v4').val()];

		Router.go('videos');
	}
});


/*selected = [];


 if ( Meteor.isClient ) {
 //jQuery.noConflict();

 var SpringTransition = famous.transitions.SpringTransition;
 var SnapTransition = famous.transitions.SnapTransition;
 var WallTransition = famous.transitions.WallTransition;

 var Transitionable = famous.transitions.Transitionable;

 Transitionable.registerMethod('spring', SpringTransition);
 Transitionable.registerMethod('snap', SnapTransition);
 Transitionable.registerMethod('wall', WallTransition);

 MySuperTransitionIn = function (duration, curve) {
 return function (stateModifier, done) {
 stateModifier.halt();
 stateModifier.setTransform(Transform.translate(3, 3),
 {method: "spring", period: 200, dampingRatio: 0.9, velocity: 0.1}, done);

 };
 };

 MySuperTransitionOut = function (duration, curve) {
 return function (stateModifier, done) {
 stateModifier.setOpacity(1);
 stateModifier.setOpacity(0, {duration: 300, curve: 'easeInOut'}, done);
 }
 };

 FView.registerTransition('in:super.slow', MySuperTransitionIn(5000, 'easeOut'));
 FView.registerTransition('out:super.slow', MySuperTransitionOut(5000, 'easeOut'));

 var queue = new ReactiveVar();
 var q = [];

 var layoutOptions = {
 ListLayout: ['itemSize', 'margins', 'spacing'],
 CollectionLayout: ['itemSize', 'justify', 'margins', 'spacing']
 };

 Session.setDefault('margins', [3, 3, 3, 3]);
 Session.set('itemSize', 190);
 Session.set('spacing', 3);


 *//* Meteor.startup(function () {*//*
 Session.set('level', 1);

 Meteor.call('categoryData', null, 1, null, function (error, result) {
 // var _ref = Category.find({level: 1, parent: null}).fetch();
 var _ref = result;

 for ( var i = 0; i < _ref.length; i++ ) {
 Category._collection.insert({
 _id: _ref[i]._id,
 name: _ref[i].name,
 level: _ref[i].level,
 class: _ref[i].class,
 order: i,
 style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
 parent: _ref[i].parent
 });
 }
 count[1] = 30;

 *//*if ( Category.find({level:1,name:"Load more",parent:null}).count() === 0 ) {
 Category._collection.insert({
 //_id: 1,
 level: 1,
 name: "Load more",
 parent: null,
 order: count[1],
 style: "background:#fff"
 });
 }
 *//*
 q[0] = Category.find({level: 1}, {sort: {order: 0}});

 queue.set(q);
 });
 //  });

 Template.body.rendered = function () {

 };

 getScrollingData = function () {
 Meteor.call('categoryData', null, 1, count[1], function (error, result) {


 if ( result.length != 0 ) {
 console.log(count[1]);
 console.log(result);

 var _ref = result;
 var i = count[1];
 for ( var j = 0; j < _ref.length; i++, j++ ) {
 Category._collection.insert({
 _id: _ref[j]._id,
 name: _ref[j].name,
 level: _ref[j].level,
 class: _ref[j].class,
 order: i,
 style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
 parent: _ref[j].parent
 });

 }

 count[1] = count[1] + 30;

 // Category._collection.update({_id: level}, {$set: {order: count[level]}});

 q[0] = Category.find({level: 1, parent: null}, {sort: {order: 0}});
 queue.set(q);
 Session.set('isLoading', false);
 }
 else {
 Session.set('isLoading', true);
 }
 });

 };

 Template.listItems.events({
 'dblclick div': function (e, t) {

 selected.push(self.name);
 Router.go('/videos');
 *//*Popups.show({
 template: "popup",
 modal_class: "modal-lg"
 });*//*
 },
 'contextmenu div.item': function (e) {
 e.preventDefault();

 selected.push(self.name);
 Router.go('/videos');
 },

 'click div': function (e, t) {

 if ( this.name === "Load more" ) {
 //Load More Data
 var self = this;
 Meteor.call('categoryData', this.parent, this.level, count[this.level], function (error, result) {

 Category._collection.remove({level: self.level, name: "Load more", parent: self.parent});

 var _ref = result;
 var i = count[self.level] + 1;
 for ( var j = 0; j < _ref.length; i++, j++ ) {
 Category._collection.insert({
 _id: _ref[j]._id,
 name: _ref[j].name,
 level: _ref[j].level,
 class: _ref[j].class,
 order: i,
 style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
 parent: _ref[j].parent
 });

 }

 *//*Category._collection.insert({
 //_id: self.level,
 level: self.level,
 name: "Load more",
 parent: self.parent,
 order: count[self.level]+1,
 style: "background:#fff"
 });*//*

 count[self.level] = count[self.level] + 30;

 // Category._collection.update({_id: level}, {$set: {order: count[level]}});

 q[(self.level - 1)] = Category.find({level: self.level, parent: self.parent}, {sort: {order: 0}});
 queue.set(q);

 });

 }

 else {

 //Get other categories
 var level = this.level;
 var self = this;

 Category._collection.update({parent: self.parent, level: level}, {$set: {class: " "}}, {multi: true});
 Category._collection.update({_id: self._id}, {$set: {class: "selected"}});

 if ( Session.get('level') != level ) {
 for ( var i = Session.get('level'); i > level; i-- ) {
 q.pop();
 selected.pop();
 }
 }
 queue.set(q);
 selected.push(self.name);

 if ( Category.find({level: (level + 1), parent: self._id}).count() === 0 ) {
 Meteor.subscribe('category-data', self._id, (level + 1), function () {

 var _ref = Category.find({level: (level + 1), parent: self._id}).fetch();

 for ( var j = 0; j < _ref.length; j++ ) {
 Category._collection.update({_id: _ref[j]._id}, {
 $set: {
 order: j,
 style: "background: hsl(" + (j * 360 / 60) + ", 100%, 50%)"
 }
 });

 }


 *//*	if ( Category.find({name:"Load more",level: (level+1),parent:self._id}).count() === 0 ) {
 Category._collection.insert({

 level:(level+1),
 name: "Load more",
 parent: self._id,
 order: 31,
 style: "background:#fff"
 });

 count[(level+1)]=30;
 }*//*

 q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
 queue.set(q);
 });
 }
 else {

 q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
 queue.set(q);

 }


 Session.set('level', (level + 1));
 }
 }
 });

 Template.home.helpers({

 gridItem: function () {

 return queue.get();
 },
 layoutOptions: function () {
 var out = {};
 _.each(layoutOptions['ListLayout'], function (option) {
 out[option] = Session.get(option);
 });
 return out;
 }
 });

 Session.setDefault('order', 1);

 Template.header.helpers({
 level: function () {
 return Session.get('level');
 }
 });

 Template.header.events({
 'click #google': function (e) {
 e.preventDefault();
 //console.log("I am working");
 Meteor.loginWithFacebook({
 requestPermissions: ['email'],
 loginStyle: "redirect"
 }, function () {
 *//*Router.go('mod');*//*
 });
 },
 'click #logout': function (e) {
 e.preventDefault();
 Meteor.logout();
 },
 'click #create': function (e) {
 e.preventDefault();
 Router.go('mod');
 }
 });

 Template.videos.helpers({
 videoList: function () {
 return video.get();
 },

 layoutOptions: function () {
 return {itemSize: [300, 230], justify: [0, 0], margins: [10, 10, 10, 10], spacing: [10, 10]};
 }
 });

 Template.play.helpers({
 id: function () {
 return Session.get('videoId');
 }
 });

 Template.playList.events({
 'click a': function () {
 var self = this;

 Session.set('videoId', self.id.videoId);
 Router.go('play');
 }
 });

 Logger.setLevel("famous-views", "info");

 Template.mod.helpers({
 gridItem: function () {

 return queue.get();
 },
 layoutOptions: function () {
 var out = {};
 _.each(layoutOptions['ListLayout'], function (option) {
 out[option] = Session.get(option);
 });
 return out;
 }
 });

 Template.editItems.events({
 'click div': function (e, t) {

 if ( this.name === "Load more" ) {
 //Load More Data
 var self = this;
 Meteor.call('categoryData', this.parent, this.level, count[this.level], function (error, result) {

 Category._collection.remove({level: self.level, name: "Load more", parent: self.parent});

 var _ref = result;
 var i = count[self.level] + 1;
 for ( var j = 0; j < _ref.length; i++, j++ ) {
 Category._collection.insert({
 _id: _ref[j]._id,
 name: _ref[j].name,
 level: _ref[j].level,
 class: _ref[j].class,
 order: i,
 style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
 parent: _ref[j].parent
 });

 }

 *//*Category._collection.insert({
 //_id: self.level,
 level: self.level,
 name: "Load more",
 parent: self.parent,
 order: count[self.level]+1,
 style: "background:#fff"
 });*//*

 count[self.level] = count[self.level] + 30;

 // Category._collection.update({_id: level}, {$set: {order: count[level]}});

 q[(self.level - 1)] = Category.find({level: self.level, parent: self.parent}, {sort: {order: 0}});
 queue.set(q);

 });

 }

 else {

 //Get other categories
 var level = this.level;
 var self = this;

 Category._collection.update({parent: self.parent, level: level}, {$set: {class: " "}}, {multi: true});
 Category._collection.update({_id: self._id}, {$set: {class: "selected"}});

 if ( Session.get('level') != level ) {
 for ( var i = Session.get('level'); i > level; i-- ) {
 q.pop();
 selected.pop();
 }
 }
 queue.set(q);
 selected.push(self.name);

 if ( Category.find({level: (level + 1), parent: self._id}).count() === 0 ) {
 Meteor.subscribe('category-data', self._id, (level + 1), function () {

 var _ref = Category.find({level: (level + 1), parent: self._id}).fetch();

 for ( var j = 0; j < _ref.length; j++ ) {
 Category._collection.update({_id: _ref[j]._id}, {
 $set: {
 order: j,
 style: "background: hsl(" + (j * 360 / 60) + ", 100%, 50%)"
 }
 });

 }


 *//*	if ( Category.find({name:"Load more",level: (level+1),parent:self._id}).count() === 0 ) {
 Category._collection.insert({

 level:(level+1),
 name: "Load more",
 parent: self._id,
 order: 31,
 style: "background:#fff"
 });

 count[(level+1)]=30;
 }*//*

 q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
 queue.set(q);
 });
 }
 else {

 q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
 queue.set(q);

 }


 Session.set('level', (level + 1));
 }
 }
 });

 }*/



