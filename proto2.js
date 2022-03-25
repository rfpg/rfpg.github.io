(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,102,255,0.549)").s().p("ACJDzIgBgBIAAAAIAAgBIAxgiIABgBIABABIAAABIAAABIgxAiIgBAAIAAAAgAByDSIgBgBIAAgBIAAAAIAxgiIABgBIABABIAAABIAAABIgxAiIgBAAIAAAAgABaCyIgBAAIAAgBIAAgBIAxgjIABAAIABABIAAAAIAAABIgxAjIgBABIAAgBgABDCSIgBAAIAAgBIAAgBIAxgjIABAAIABAAIAAABIAAABIgxAjIgBABIAAgBgAAsBzIgBgBIAAgBIAAgBIAxgjIABAAIABABIAAABIAAAAIgxAjIgBABIAAAAgAAVBSIgBAAIAAgBIAAgBIAxgjIABAAIABAAIAAABIAAABIgxAjIgBABIAAgBgAgBAzIgBgBIAAgBIAAgBIAwgjIABAAIABABIAAABIAAAAIgwAjIgBABIAAAAgAgYASIgBAAIAAgBIAAgBIAwgiIABAAIABAAIAAABIAAABIgwAiIgBABIAAgBgAgvgMIgBgBIAAgBIAAgBIAwgjIABAAIABABIAAABIAAAAIgwAjIgBABIAAAAgAhGgtIgBAAIAAgBIAAgBIAxgjIABAAIABABIAAAAIAAABIgxAjIgBABIAAgBgAhdhMIgBgBIAAgBIAAgBIAxgjIABAAIABAAIAAACIAAAAIgxAjIgBABIAAAAgAh0htIgBAAIAAgBIAAgBIAxgjIABAAIABABIAAAAIAAABIgxAjIgBABIAAgBgAiLiNIgBAAIAAgBIAAgBIAxgjIABAAIABAAIAAABIAAABIgxAjIgBABIAAgBgAiiisIgBgBIAAgBIAAgBIAxgjIABAAIABABIAAABIAAAAIgxAjIgBABIAAAAgAi5jNIgBAAIAAgBIAAgBIAxgjIABAAIABAAIAAABIAAABIgxAjIgBABIAAgBg");
	this.shape.setTransform(16.15,22.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-2.6,-1.9,37.5,48.699999999999996), null);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,102,255,0.91)").s().p("ACCDQIgBgBIAAgBIAAgBIA8g1IABAAIABABIAAAAIAAABIg8A1IgBABIAAAAgABnCxIgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgABMCTIgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgAAxB2IgBgBIAAgBIAAgBIA8g1IABAAIABABIAAAAIAAABIg8A1IgBABIAAAAgAAWBXIgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgAgDA5IgBAAIAAgBIAAgBIA7g1IABAAIABAAIAAABIAAABIg7A1IgBABIAAgBgAgdAcIgBgBIAAgBIAAgBIA7g0IABAAIABABIAAAAIAAABIg7A0IgBABIAAAAgAg4gCIgBAAIAAgBIAAgBIA7g1IABAAIABAAIAAABIAAABIg7A1IgBABIAAgBgAhTggIgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgAhtg9IgBgBIAAgBIAAgBIA8g1IABAAIABABIAAAAIAAABIg8A1IgBABIAAAAgAiIhcIgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgAiih6IgBAAIAAgBIAAgBIA8g1IABAAIABAAIAAABIAAABIg8A1IgBABIAAgBgAi9iYIgBAAIAAgBIAAgBIA8g0IABAAIABAAIAAABIAAABIg8A0IgBAAIAAAAg");
	this.shape.setTransform(146.2,305.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ASBSAQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgFgEgASBQIQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgEgFgASAOQQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgEgFgAR/MYQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgEgEgAR+KgQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgEgFgAR8IoQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgFgFgAR7GwQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgFgEgAR6E4QgEgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgFgFgAR5DAQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgFgFgAR4BIQgEgEAAgGIgBg8QAAgFAEgFQAFgEAGgBQAGAAAEAFQAFAEAAAFIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgFgEgAR4gvQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgEgFgAR3inQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgEgFgAR2kfQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgEgEgAR1mXQgFgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgEgFgARzoPQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAFAFQAEAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgFgFgARxqHQgEgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgFgEgARwr/QgFgEAAgGIgBg8QAAgGAEgFQAFgEAGAAQAGgBAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGABIAAAAQgGAAgEgFgARut3QgFgEAAgGIgBg8QAAgGAEgFQAFgEAGgBQAGAAAEAFQAFAEAAAGIABA8QAAAGgEAFQgFAEgGAAIAAAAQgGABgEgFgARsvvQgFgEAAgGIgBg8IAAgCQAAgFAEgEQAFgEAGgBQAGAAAFAFQADAEABAFIAAABIABA8QAAAGgEAFQgFAEgGAAIAAABQgGgBgEgEgAQexgIg6AAQgGAAgFgFQgEgEAAgGIAAgBQAAgFAEgFQAFgEAGAAIA6AAIAEAAIALAAIABAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgDADgEACIAAAAIgDAAIgDAAIgBABIgDAAIAAAAIgKgBgAn3xgIg8AAQgGgBgFgEQgEgFAAgGQAAgGAFgEQAEgFAGABIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAIAAAAgAN/xgIgTAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGIgBAFIgDAFQgFAFgGAAgAL0xgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAJ8xgQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAIExgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAGMxgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAEUxgQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgACcxgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAAkxgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAhTxgQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAjLxgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAlDxgQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAm7xgQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgApvxgIg8gBQgGgBgFgEQgEgFAAgGQAAgGAFgEQAEgFAGAAIA8ACQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAIAAAAgArnxhIg8gBQgGgBgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8ABQAGABAFAEQAEAFAAAGQAAAGgFAEQgEAFgGAAIAAAAgAtfxiIg8gBQgGgBgFgEQgEgFAAgGQAAgGAFgEQAEgFAGAAIA8ABQAGABAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAIAAAAgAvXxjIg8gCQgGAAgFgEQgEgFAAgGQAAgGAFgEQAEgFAGAAIA8ABQAGABAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAIAAAAgAxPxlIg8gBQgEAAgDgBIgEgDQgEgFAAgGQAAgGAEgEIAEgDQADgCAEAAIA8ABQAGABAFAEQAEAFAAAGQAAAGgFAEQgEAEgGAAIAAAAg");
	this.shape_1.setTransform(168.6,331.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("A/5fFIgEgBQgEgBgCgDQgEgFAAgFIAAgCQAKhJAMhHQCVtsJDo8QDTjREMioIABgBQCdhMCmg2QChg2ClglIgBAAQBpgYBogUIApAAQAGAAAEgEIAEgGIAfgFIAAAAQAAAGAEAFQAFAEAGAAIA6AAIAKABQi7Aei4AqIAAABQijAkifA1QikA2iaBLQkJCmjRDPQpqJjh7PDIAAABQgBAFgEAEQgEADgFAAIgCAAgAFSkgQgFgEAAgGQAAgGAEgFQADgDAEgBIABAAIACgBQHvgYHmhKIAAAAQBzgQBPhZQEclEBNmyQA+lYBOlVIADgQQACgHAFgDQADgCAEAAIABAAIADAAQAGACAEAFQADAFgCAGIgCALQhPFXg9FbQhPG6kiFKQhWBhh+ARQnnBLnwAYIgBAAIAAAAQgGAAgEgEg");
	this.shape_2.setTransform(254.9203,245.4694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Egg0Ag3QgVgUAAgeQAAgeAVgUQAOgPASgEIAAgCMAAAg9YQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAZ5IgEADQgEAEAAAGQAAAGAEAFIAEADMAAAAgxQgMBIgKBJIAAACQAAAFADAEQADAEAEABIAEABQAGABAEgEQAFgEABgGQARAFAOAOQAPAPAEAUIACAAMA9UAAAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAMg9UAAAIgCAAQgEAUgPAPQgVAWgegBQgdABgVgWgADdjqQgKgKgFgLQADgCADgDQAFgEAAgGQAAgGgFgFQgEgEgGAAIgCAAQABgdAUgVQAIgHAIgFQAHgEAIgCQAIgCAIAAIAEAAIAFAAQAaABATATQANANAFAQIgBAAQgEACgDADQgEAFAAAGQAAAGAFAEQAEAEAGAAQgCAYgTASQgPAQgTAEQgBgFgEgEQgEgFgHAAQgGABgEAEQgEAEAAAFQgVgEgQgQgEAgCgeqQACgGgDgGQgEgFgGgBIgDgBQAXABARgRQAQgRAAgXIAAgHIAAAAQgCgTgOgOQgRgRgXABQgYgBgQARQgRARAAAXQAAAXARARQAOAOASACIgBAAIAIAAQgEABgDACQgFADgCAGIgEARQgYgFgSgTQgagZAAgkQAAgkAagZQAZgZAkgBQAjABAaAZQAWAWADAdIAAAKQAAAkgZAZQgVAVgcAEIACgLg");
	this.shape_3.setTransform(255.4252,244.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


(lib.compute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSBTQgigjgBgwQABgvAigjQAjgiAvgBQAwABAjAiQAiAjAAAvQAAAwgiAjQgjAigwAAQgvAAgjgig");
	this.shape.setTransform(11.75,11.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,23.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-251,502,502);


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.compute = new lib.compute();
	this.compute.name = "compute";
	this.compute.setTransform(220.8,147.85,1,1,0,0,0,11.8,11.8);
	new cjs.ButtonHelper(this.compute, 0, 1, 1);

	this.text = new cjs.Text("< compute pH", "14px 'Verdana'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(244,136.35);

	this.text_1 = new cjs.Text("pKa", "14px 'Verdana'");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 96;
	this.text_1.parent = this;
	this.text_1.setTransform(287,63.7);

	this.pKa = new lib.an_TextInput({'id': 'pKa', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.pKa.name = "pKa";
	this.pKa.setTransform(335,93.75,1,1,0,0,0,50,11);

	this.text_2 = new cjs.Text("H", "14px 'Verdana'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 96;
	this.text_2.parent = this;
	this.text_2.setTransform(179,63.7);

	this.text_3 = new cjs.Text("OH", "14px 'Verdana'");
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 100;
	this.text_3.parent = this;
	this.text_3.setTransform(71.7,63.7);

	this.h = new lib.an_TextInput({'id': 'h', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.h.name = "h";
	this.h.setTransform(225.6,93.75,1,1,0,0,0,50,11);

	this.oh = new lib.an_TextInput({'id': 'oh', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.oh.name = "oh";
	this.oh.setTransform(119.7,93.75,1,1,0,0,0,50,11);

	this.text_4 = new cjs.Text("Equivalence Point", "14px 'Verdana'");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 108;
	this.text_4.parent = this;
	this.text_4.setTransform(319.6,266.25);

	this.text_5 = new cjs.Text("Buffering Region", "14px 'Verdana'");
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 108;
	this.text_5.parent = this;
	this.text_5.setTransform(164.2,332.5);

	this.text_6 = new cjs.Text("-log[H+]", "10px 'Verdana'");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 64;
	this.text_6.parent = this;
	this.text_6.setTransform(3.7,254.85);

	this.text_7 = new cjs.Text("3.5", "14px 'Verdana'");
	this.text_7.lineHeight = 19;
	this.text_7.parent = this;
	this.text_7.setTransform(27,234.75);

	this.ph = new cjs.Text("pH:", "14px 'Verdana'");
	this.ph.name = "ph";
	this.ph.lineHeight = 19;
	this.ph.lineWidth = 71;
	this.ph.parent = this;
	this.ph.setTransform(71.7,136.35);

	this.text_8 = new cjs.Text("14", "14px 'Verdana'");
	this.text_8.lineHeight = 19;
	this.text_8.parent = this;
	this.text_8.setTransform(27,52);

	this.text_9 = new cjs.Text("1", "14px 'Times'");
	this.text_9.lineHeight = 16;
	this.text_9.parent = this;
	this.text_9.setTransform(34,444.85);

	this.text_10 = new cjs.Text("pH", "14px 'Verdana'");
	this.text_10.lineHeight = 19;
	this.text_10.parent = this;
	this.text_10.setTransform(5.7,234.75);

	this.text_11 = new cjs.Text("Titrant Volume on X Axis", "14px 'Verdana'");
	this.text_11.lineHeight = 19;
	this.text_11.lineWidth = 184;
	this.text_11.parent = this;
	this.text_11.setTransform(177,468);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3333").ss(3,1,1).p("AB2AAQAAAwgjAjQgjAjgwAAQgvAAgjgjQgjgjAAgwQAAgwAjgiQAjgjAvAAQAwAAAjAjQAjAiAAAwg");
	this.shape.setTransform(220.75,147.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.ph},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.oh},{t:this.h},{t:this.text_3},{t:this.text_2},{t:this.pKa},{t:this.text_1},{t:this.text},{t:this.compute}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_3, null, null);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(301.3,246.05,1,1,0,0,0,16.3,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_2, null, null);


// stage content:
(lib.proto2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.ph = this.Layer_3.ph;
		this.oh = this.Layer_3.oh;
		this.h = this.Layer_3.h;
		this.pKa = this.Layer_3.pKa;
		this.compute = this.Layer_3.compute;
		stage.enableMouseOver(30);
		var _this = this;
		
		//Canvas = 500 * 500
		//Grid = 400 * 400
		
		//x needs to be scaled 0 to 1
		//y need to be the -log (1-14)
		
		//pH = pKa + log(OH/H)
		
		function hendersonHasselBalch(x) {
			return 0;
		}
		
		function getpH(pKa, oh, h) {
			
			var ph = 0;
			ph = pKa + Math.log10(oh/h);
			return ph;
		}
		
		
		stage.on('stagemousemove', function(e){
			
			var oh = document.getElementById("oh").value;
			var h = document.getElementById("h").value;
			var h = document.getElementById("pKa").value;
			
			console.log("oh: " + oh);
			console.log("h: " + h);
			
				_this.compute.on('click', function(){
				 console.log("compute pH");	
				result = getpH(pKa, oh, h);
				_this.ph.text = result;
					
				});
			
		});
		
		
		stage.enableMouseOver(30);
		var _this = this;
		
		//Canvas = 500 * 500
		//Grid = 400 * 400
		
		//x needs to be scaled 0 to 1
		//y need to be the -log (1-14)
		
		//pH = pKa + log(OH/H)
		
		function hendersonHasselBalch(x) {
			return 0;
		}
		
		function getpH(pKa, oh, h) {
			
			var ph = 0;
			ph = pKa + Math.log10(oh/h);
			return ph;
		}
		
		
		stage.on('stagemousemove', function(e){
			
			var oh = document.getElementById("oh").value;
			var h = document.getElementById("h").value;
			var h = document.getElementById("pKa").value;
			
			console.log("oh: " + oh);
			console.log("h: " + h);
			
				_this.compute.on('click', function(){
				 console.log("compute pH");	
				_this.ph.text = getpH(pKa, oh, h);
					
				});
			
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(250,250);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.setTransform(215.7,278.1,1,1,0,0,0,215.7,278.1);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.setTransform(301.2,245.8,1,1,0,0,0,301.2,245.8);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.setTransform(255.4,244.7,1,1,0,0,0,255.4,244.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 2
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(249,249,252,257.1);
// library properties:
lib.properties = {
	id: '556BC73A582F4833A5232888C8A48120',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1648178607664", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1648178607664", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1648178607664", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['556BC73A582F4833A5232888C8A48120'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;