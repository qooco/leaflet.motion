/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Group = L.FeatureGroup.extend ({
	options: {
		pane: L.Motion.Animate.defaultOptions.pane,
		attribution: L.Motion.Animate.defaultOptions.attribution,
	},
    initialize: function (motionMoves, options) {
		var items =  motionMoves.map(function(f){ return L.motion.polyline(f.points, f.options); });
        L.FeatureGroup.prototype.initialize.call(this, items, options);
    },
	startMotion: function () {
		this.fire(L.Motion.Event.GroupStarted);
		this.invoke("startMotion");
		return this;
	},
	stopMotion: function () {
		this.invoke("stopMotion");
		this.fire(L.Motion.Event.GroupEnded);
		return this;
	},
	pauseMotion: function () {
		this.invoke("pauseMotion");
		this.fire(L.Motion.Event.GroupPaused);
		return this;
	},
	resumeMotion: function () {
		this.invoke("resumeMotion");
		this.fire(L.Motion.Event.GroupResumed);
		return this;
	},
	toggleMotion: function () {
		this.invoke("toggleMotion");
		return this;
	},
});

L.motion.group = function(motionMove, options){
    return new L.Motion.Group(motionMove, options);
};
