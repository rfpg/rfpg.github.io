(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"plus_slider_atlas_1", frames: [[768,0,594,605],[768,607,594,605],[0,1119,594,605],[596,1214,594,605],[1192,1214,594,605],[1364,0,594,605],[1364,607,594,605],[0,0,766,1117]]},
		{name:"plus_slider_atlas_2", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_3", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_4", frames: [[0,0,594,605],[596,0,594,605],[1192,0,594,605],[0,607,594,605],[596,607,594,605],[1192,607,594,605],[287,1214,285,130],[0,1214,285,142],[574,1214,32,32]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_1040 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1038 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1036 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1034 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1032 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1030 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1028 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1026 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1024 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1022 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1020 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1018 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1016 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1014 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1012 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1010 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1008 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1006 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1004 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1002 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1000 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_998 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_996 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_994 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_992 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_990 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_988 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_986 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_984 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_982 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_980 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1039 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_978 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_977 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_976 = function() {
	this.initialize(img.CachedBmp_976);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2223,1738);


(lib.fd_3e80f03755dbb1490fe273fec23bd613cac1c42084e72a74df3a009fIMAGEIMAGE = function() {
	this.initialize(img.fd_3e80f03755dbb1490fe273fec23bd613cac1c42084e72a74df3a009fIMAGEIMAGE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2890,373);


(lib.TextInput = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
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


(lib.y_marker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(-0.7,177.7).curveTo(-1,177.4,-1,177).lineTo(-1,171).curveTo(-1,170.6,-0.7,170.3).curveTo(-0.4,170,0,170).curveTo(0.4,170,0.7,170.3).curveTo(1,170.6,1,171).lineTo(1,177).curveTo(1,177.4,0.7,177.7).curveTo(0.4,178,0,178).curveTo(-0.4,178,-0.7,177.7).closePath().moveTo(-0.7,165.7).curveTo(-1,165.4,-1,165).lineTo(-1,159).curveTo(-1,158.6,-0.7,158.3).curveTo(-0.4,158,0,158).curveTo(0.4,158,0.7,158.3).curveTo(1,158.6,1,159).lineTo(1,165).curveTo(1,165.4,0.7,165.7).curveTo(0.4,166,0,166).curveTo(-0.4,166,-0.7,165.7).closePath().moveTo(-0.7,153.7).curveTo(-1,153.4,-1,153).lineTo(-1,147).curveTo(-1,146.6,-0.7,146.3).curveTo(-0.4,146,0,146).curveTo(0.4,146,0.7,146.3).curveTo(1,146.6,1,147).lineTo(1,153).curveTo(1,153.4,0.7,153.7).curveTo(0.4,154,0,154).curveTo(-0.4,154,-0.7,153.7).closePath().moveTo(-0.7,141.7).curveTo(-1,141.4,-1,141).lineTo(-1,135).curveTo(-1,134.6,-0.7,134.3).curveTo(-0.4,134,0,134).curveTo(0.4,134,0.7,134.3).curveTo(1,134.6,1,135).lineTo(1,141).curveTo(1,141.4,0.7,141.7).curveTo(0.4,142,0,142).curveTo(-0.4,142,-0.7,141.7).closePath().moveTo(-0.7,129.7).curveTo(-1,129.4,-1,129).lineTo(-1,123).curveTo(-1,122.6,-0.7,122.3).curveTo(-0.4,122,0,122).curveTo(0.4,122,0.7,122.3).curveTo(1,122.6,1,123).lineTo(1,129).curveTo(1,129.4,0.7,129.7).curveTo(0.4,130,0,130).curveTo(-0.4,130,-0.7,129.7).closePath().moveTo(-0.7,117.7).curveTo(-1,117.4,-1,117).lineTo(-1,111).curveTo(-1,110.6,-0.7,110.3).curveTo(-0.4,110,0,110).curveTo(0.4,110,0.7,110.3).curveTo(1,110.6,1,111).lineTo(1,117).curveTo(1,117.4,0.7,117.7).curveTo(0.4,118,0,118).curveTo(-0.4,118,-0.7,117.7).closePath().moveTo(-0.7,105.7).curveTo(-1,105.4,-1,105).lineTo(-1,99).curveTo(-1,98.6,-0.7,98.3).curveTo(-0.4,98,0,98).curveTo(0.4,98,0.7,98.3).curveTo(1,98.6,1,99).lineTo(1,105).curveTo(1,105.4,0.7,105.7).curveTo(0.4,106,0,106).curveTo(-0.4,106,-0.7,105.7).closePath().moveTo(-0.7,93.7).curveTo(-1,93.4,-1,93).lineTo(-1,87).curveTo(-1,86.6,-0.7,86.3).curveTo(-0.4,86,0,86).curveTo(0.4,86,0.7,86.3).curveTo(1,86.6,1,87).lineTo(1,93).curveTo(1,93.4,0.7,93.7).curveTo(0.4,94,0,94).curveTo(-0.4,94,-0.7,93.7).closePath().moveTo(-0.7,81.7).curveTo(-1,81.4,-1,81).lineTo(-1,75).curveTo(-1,74.6,-0.7,74.3).curveTo(-0.4,74,0,74).curveTo(0.4,74,0.7,74.3).curveTo(1,74.6,1,75).lineTo(1,81).curveTo(1,81.4,0.7,81.7).curveTo(0.4,82,0,82).curveTo(-0.4,82,-0.7,81.7).closePath().moveTo(-0.7,69.7).curveTo(-1,69.4,-1,69).lineTo(-1,63).curveTo(-1,62.6,-0.7,62.3).curveTo(-0.4,62,0,62).curveTo(0.4,62,0.7,62.3).curveTo(1,62.6,1,63).lineTo(1,69).curveTo(1,69.4,0.7,69.7).curveTo(0.4,70,0,70).curveTo(-0.4,70,-0.7,69.7).closePath().moveTo(-0.7,57.7).curveTo(-1,57.4,-1,57).lineTo(-1,51).curveTo(-1,50.6,-0.7,50.3).curveTo(-0.4,50,0,50).curveTo(0.4,50,0.7,50.3).curveTo(1,50.6,1,51).lineTo(1,57).curveTo(1,57.4,0.7,57.7).curveTo(0.4,58,0,58).curveTo(-0.4,58,-0.7,57.7).closePath().moveTo(-0.7,45.7).curveTo(-1,45.4,-1,45).lineTo(-1,39).curveTo(-1,38.6,-0.7,38.3).curveTo(-0.4,38,0,38).curveTo(0.4,38,0.7,38.3).curveTo(1,38.6,1,39).lineTo(1,45).curveTo(1,45.4,0.7,45.7).curveTo(0.4,46,0,46).curveTo(-0.4,46,-0.7,45.7).closePath().moveTo(-0.7,33.7).curveTo(-1,33.4,-1,33).lineTo(-1,27).curveTo(-1,26.6,-0.7,26.3).curveTo(-0.4,26,0,26).curveTo(0.4,26,0.7,26.3).curveTo(1,26.6,1,27).lineTo(1,33).curveTo(1,33.4,0.7,33.7).curveTo(0.4,34,0,34).curveTo(-0.4,34,-0.7,33.7).closePath().moveTo(-0.7,21.7).curveTo(-1,21.4,-1,21).lineTo(-1,15).curveTo(-1,14.6,-0.7,14.3).curveTo(-0.4,14,0,14).curveTo(0.4,14,0.7,14.3).curveTo(1,14.6,1,15).lineTo(1,21).curveTo(1,21.4,0.7,21.7).curveTo(0.4,22,0,22).curveTo(-0.4,22,-0.7,21.7).closePath().moveTo(-0.7,9.7).curveTo(-1,9.4,-1,9).lineTo(-1,3).curveTo(-1,2.6,-0.7,2.3).curveTo(-0.4,2,0,2).curveTo(0.4,2,0.7,2.3).curveTo(1,2.6,1,3).lineTo(1,9).curveTo(1,9.4,0.7,9.7).curveTo(0.4,10,0,10).curveTo(-0.4,10,-0.7,9.7).closePath().moveTo(-0.7,-2.3).curveTo(-1,-2.6,-1,-3).lineTo(-1,-9).curveTo(-1,-9.4,-0.7,-9.7).curveTo(-0.4,-10,0,-10).curveTo(0.4,-10,0.7,-9.7).curveTo(1,-9.4,1,-9).lineTo(1,-3).curveTo(1,-2.6,0.7,-2.3).curveTo(0.4,-2,0,-2).curveTo(-0.4,-2,-0.7,-2.3).closePath().moveTo(-0.7,-14.3).curveTo(-1,-14.6,-1,-15).lineTo(-1,-21).curveTo(-1,-21.4,-0.7,-21.7).curveTo(-0.4,-22,0,-22).curveTo(0.4,-22,0.7,-21.7).curveTo(1,-21.4,1,-21).lineTo(1,-15).curveTo(1,-14.6,0.7,-14.3).curveTo(0.4,-14,0,-14).curveTo(-0.4,-14,-0.7,-14.3).closePath().moveTo(-0.7,-26.3).curveTo(-1,-26.6,-1,-27).lineTo(-1,-33).curveTo(-1,-33.4,-0.7,-33.7).curveTo(-0.4,-34,0,-34).curveTo(0.4,-34,0.7,-33.7).curveTo(1,-33.4,1,-33).lineTo(1,-27).curveTo(1,-26.6,0.7,-26.3).curveTo(0.4,-26,0,-26).curveTo(-0.4,-26,-0.7,-26.3).closePath().moveTo(-0.7,-38.3).curveTo(-1,-38.6,-1,-39).lineTo(-1,-45).curveTo(-1,-45.4,-0.7,-45.7).curveTo(-0.4,-46,0,-46).curveTo(0.4,-46,0.7,-45.7).curveTo(1,-45.4,1,-45).lineTo(1,-39).curveTo(1,-38.6,0.7,-38.3).curveTo(0.4,-38,0,-38).curveTo(-0.4,-38,-0.7,-38.3).closePath().moveTo(-0.7,-50.3).curveTo(-1,-50.6,-1,-51).lineTo(-1,-57).curveTo(-1,-57.4,-0.7,-57.7).curveTo(-0.4,-58,0,-58).curveTo(0.4,-58,0.7,-57.7).curveTo(1,-57.4,1,-57).lineTo(1,-51).curveTo(1,-50.6,0.7,-50.3).curveTo(0.4,-50,0,-50).curveTo(-0.4,-50,-0.7,-50.3).closePath().moveTo(-0.7,-62.3).curveTo(-1,-62.6,-1,-63).lineTo(-1,-69).curveTo(-1,-69.4,-0.7,-69.7).curveTo(-0.4,-70,0,-70).curveTo(0.4,-70,0.7,-69.7).curveTo(1,-69.4,1,-69).lineTo(1,-63).curveTo(1,-62.6,0.7,-62.3).curveTo(0.4,-62,0,-62).curveTo(-0.4,-62,-0.7,-62.3).closePath().moveTo(-0.7,-74.3).curveTo(-1,-74.6,-1,-75).lineTo(-1,-81).curveTo(-1,-81.4,-0.7,-81.7).curveTo(-0.4,-82,0,-82).curveTo(0.4,-82,0.7,-81.7).curveTo(1,-81.4,1,-81).lineTo(1,-75).curveTo(1,-74.6,0.7,-74.3).curveTo(0.4,-74,0,-74).curveTo(-0.4,-74,-0.7,-74.3).closePath().moveTo(-0.7,-86.3).curveTo(-1,-86.6,-1,-87).lineTo(-1,-93).curveTo(-1,-93.4,-0.7,-93.7).curveTo(-0.4,-94,0,-94).curveTo(0.4,-94,0.7,-93.7).curveTo(1,-93.4,1,-93).lineTo(1,-87).curveTo(1,-86.6,0.7,-86.3).curveTo(0.4,-86,0,-86).curveTo(-0.4,-86,-0.7,-86.3).closePath().moveTo(-0.7,-98.3).curveTo(-1,-98.6,-1,-99).lineTo(-1,-105).curveTo(-1,-105.4,-0.7,-105.7).curveTo(-0.4,-106,0,-106).curveTo(0.4,-106,0.7,-105.7).curveTo(1,-105.4,1,-105).lineTo(1,-99).curveTo(1,-98.6,0.7,-98.3).curveTo(0.4,-98,0,-98).curveTo(-0.4,-98,-0.7,-98.3).closePath().moveTo(-0.7,-110.3).curveTo(-1,-110.6,-1,-111).lineTo(-1,-117).curveTo(-1,-117.4,-0.7,-117.7).curveTo(-0.4,-118,0,-118).curveTo(0.4,-118,0.7,-117.7).curveTo(1,-117.4,1,-117).lineTo(1,-111).curveTo(1,-110.6,0.7,-110.3).curveTo(0.4,-110,0,-110).curveTo(-0.4,-110,-0.7,-110.3).closePath().moveTo(-0.7,-122.3).curveTo(-1,-122.6,-1,-123).lineTo(-1,-129).curveTo(-1,-129.4,-0.7,-129.7).curveTo(-0.4,-130,0,-130).curveTo(0.4,-130,0.7,-129.7).curveTo(1,-129.4,1,-129).lineTo(1,-123).curveTo(1,-122.6,0.7,-122.3).curveTo(0.4,-122,0,-122).curveTo(-0.4,-122,-0.7,-122.3).closePath().moveTo(-0.7,-134.3).curveTo(-1,-134.6,-1,-135).lineTo(-1,-141).curveTo(-1,-141.4,-0.7,-141.7).curveTo(-0.4,-142,0,-142).curveTo(0.4,-142,0.7,-141.7).curveTo(1,-141.4,1,-141).lineTo(1,-135).curveTo(1,-134.6,0.7,-134.3).curveTo(0.4,-134,0,-134).curveTo(-0.4,-134,-0.7,-134.3).closePath().moveTo(-0.7,-146.3).curveTo(-1,-146.6,-1,-147).lineTo(-1,-153).curveTo(-1,-153.4,-0.7,-153.7).curveTo(-0.4,-154,0,-154).curveTo(0.4,-154,0.7,-153.7).curveTo(1,-153.4,1,-153).lineTo(1,-147).curveTo(1,-146.6,0.7,-146.3).curveTo(0.4,-146,0,-146).curveTo(-0.4,-146,-0.7,-146.3).closePath().moveTo(-0.7,-158.3).curveTo(-1,-158.6,-1,-159).lineTo(-1,-165).curveTo(-1,-165.4,-0.7,-165.7).curveTo(-0.4,-166,0,-166).curveTo(0.4,-166,0.7,-165.7).curveTo(1,-165.4,1,-165).lineTo(1,-159).curveTo(1,-158.6,0.7,-158.3).curveTo(0.4,-158,0,-158).curveTo(-0.4,-158,-0.7,-158.3).closePath().moveTo(-0.7,-170.3).curveTo(-1,-170.6,-1,-171).lineTo(-1,-177).curveTo(-1,-177.4,-0.7,-177.7).curveTo(-0.4,-178,0,-178).curveTo(0.4,-178,0.7,-177.7).curveTo(1,-177.4,1,-177).lineTo(1,-171).curveTo(1,-170.6,0.7,-170.3).curveTo(0.4,-170,0,-170).curveTo(-0.4,-170,-0.7,-170.3).closePath();
	this.shape.setTransform(0,177);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.y_marker, new cjs.Rectangle(-1,-1,2,356), null);


(lib.y_axis = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#4A494A").setStrokeStyle(20,2,0,4).moveTo(-499.9,0).lineTo(214.5,0).lineTo(394.6,0).lineTo(454.6,0).lineTo(499.9,0);
	this.shape.setTransform(499.875,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,1019.8,20);


(lib.x_marker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(231.5,1).curveTo(231.1,1,230.8,0.7).curveTo(230.5,0.4,230.5,0).curveTo(230.5,-0.4,230.8,-0.7).curveTo(231.1,-1,231.5,-1).lineTo(236.5,-1).curveTo(236.9,-1,237.2,-0.7).curveTo(237.5,-0.4,237.5,0).curveTo(237.5,0.4,237.2,0.7).curveTo(236.9,1,236.5,1).closePath().moveTo(219.5,1).curveTo(219.1,1,218.8,0.7).curveTo(218.5,0.4,218.5,0).curveTo(218.5,-0.4,218.8,-0.7).curveTo(219.1,-1,219.5,-1).lineTo(225.5,-1).curveTo(225.9,-1,226.2,-0.7).curveTo(226.5,-0.4,226.5,0).curveTo(226.5,0.4,226.2,0.7).curveTo(225.9,1,225.5,1).closePath().moveTo(207.5,1).curveTo(207.1,1,206.8,0.7).curveTo(206.5,0.4,206.5,0).curveTo(206.5,-0.4,206.8,-0.7).curveTo(207.1,-1,207.5,-1).lineTo(213.5,-1).curveTo(213.9,-1,214.2,-0.7).curveTo(214.5,-0.4,214.5,0).curveTo(214.5,0.4,214.2,0.7).curveTo(213.9,1,213.5,1).closePath().moveTo(195.5,1).curveTo(195.1,1,194.8,0.7).curveTo(194.5,0.4,194.5,0).curveTo(194.5,-0.4,194.8,-0.7).curveTo(195.1,-1,195.5,-1).lineTo(201.5,-1).curveTo(201.9,-1,202.2,-0.7).curveTo(202.5,-0.4,202.5,0).curveTo(202.5,0.4,202.2,0.7).curveTo(201.9,1,201.5,1).closePath().moveTo(183.5,1).curveTo(183.1,1,182.8,0.7).curveTo(182.5,0.4,182.5,0).curveTo(182.5,-0.4,182.8,-0.7).curveTo(183.1,-1,183.5,-1).lineTo(189.5,-1).curveTo(189.9,-1,190.2,-0.7).curveTo(190.5,-0.4,190.5,0).curveTo(190.5,0.4,190.2,0.7).curveTo(189.9,1,189.5,1).closePath().moveTo(171.5,1).curveTo(171.1,1,170.8,0.7).curveTo(170.5,0.4,170.5,0).curveTo(170.5,-0.4,170.8,-0.7).curveTo(171.1,-1,171.5,-1).lineTo(177.5,-1).curveTo(177.9,-1,178.2,-0.7).curveTo(178.5,-0.4,178.5,0).curveTo(178.5,0.4,178.2,0.7).curveTo(177.9,1,177.5,1).closePath().moveTo(159.5,1).curveTo(159.1,1,158.8,0.7).curveTo(158.5,0.4,158.5,0).curveTo(158.5,-0.4,158.8,-0.7).curveTo(159.1,-1,159.5,-1).lineTo(165.5,-1).curveTo(165.9,-1,166.2,-0.7).curveTo(166.5,-0.4,166.5,0).curveTo(166.5,0.4,166.2,0.7).curveTo(165.9,1,165.5,1).closePath().moveTo(147.5,1).curveTo(147.1,1,146.8,0.7).curveTo(146.5,0.4,146.5,0).curveTo(146.5,-0.4,146.8,-0.7).curveTo(147.1,-1,147.5,-1).lineTo(153.5,-1).curveTo(153.9,-1,154.2,-0.7).curveTo(154.5,-0.4,154.5,0).curveTo(154.5,0.4,154.2,0.7).curveTo(153.9,1,153.5,1).closePath().moveTo(135.5,1).curveTo(135.1,1,134.8,0.7).curveTo(134.5,0.4,134.5,0).curveTo(134.5,-0.4,134.8,-0.7).curveTo(135.1,-1,135.5,-1).lineTo(141.5,-1).curveTo(141.9,-1,142.2,-0.7).curveTo(142.5,-0.4,142.5,0).curveTo(142.5,0.4,142.2,0.7).curveTo(141.9,1,141.5,1).closePath().moveTo(123.5,1).curveTo(123.1,1,122.8,0.7).curveTo(122.5,0.4,122.5,0).curveTo(122.5,-0.4,122.8,-0.7).curveTo(123.1,-1,123.5,-1).lineTo(129.5,-1).curveTo(129.9,-1,130.2,-0.7).curveTo(130.5,-0.4,130.5,0).curveTo(130.5,0.4,130.2,0.7).curveTo(129.9,1,129.5,1).closePath().moveTo(111.5,1).curveTo(111.1,1,110.8,0.7).curveTo(110.5,0.4,110.5,0).curveTo(110.5,-0.4,110.8,-0.7).curveTo(111.1,-1,111.5,-1).lineTo(117.5,-1).curveTo(117.9,-1,118.2,-0.7).curveTo(118.5,-0.4,118.5,0).curveTo(118.5,0.4,118.2,0.7).curveTo(117.9,1,117.5,1).closePath().moveTo(99.5,1).curveTo(99.1,1,98.8,0.7).curveTo(98.5,0.4,98.5,0).curveTo(98.5,-0.4,98.8,-0.7).curveTo(99.1,-1,99.5,-1).lineTo(105.5,-1).curveTo(105.9,-1,106.2,-0.7).curveTo(106.5,-0.4,106.5,0).curveTo(106.5,0.4,106.2,0.7).curveTo(105.9,1,105.5,1).closePath().moveTo(87.5,1).curveTo(87.1,1,86.8,0.7).curveTo(86.5,0.4,86.5,0).curveTo(86.5,-0.4,86.8,-0.7).curveTo(87.1,-1,87.5,-1).lineTo(93.5,-1).curveTo(93.9,-1,94.2,-0.7).curveTo(94.5,-0.4,94.5,0).curveTo(94.5,0.4,94.2,0.7).curveTo(93.9,1,93.5,1).closePath().moveTo(75.5,1).curveTo(75.1,1,74.8,0.7).curveTo(74.5,0.4,74.5,0).curveTo(74.5,-0.4,74.8,-0.7).curveTo(75.1,-1,75.5,-1).lineTo(81.5,-1).curveTo(81.9,-1,82.2,-0.7).curveTo(82.5,-0.4,82.5,0).curveTo(82.5,0.4,82.2,0.7).curveTo(81.9,1,81.5,1).closePath().moveTo(63.5,1).curveTo(63.1,1,62.8,0.7).curveTo(62.5,0.4,62.5,0).curveTo(62.5,-0.4,62.8,-0.7).curveTo(63.1,-1,63.5,-1).lineTo(69.5,-1).curveTo(69.9,-1,70.2,-0.7).curveTo(70.5,-0.4,70.5,0).curveTo(70.5,0.4,70.2,0.7).curveTo(69.9,1,69.5,1).closePath().moveTo(51.5,1).curveTo(51.1,1,50.8,0.7).curveTo(50.5,0.4,50.5,0).curveTo(50.5,-0.4,50.8,-0.7).curveTo(51.1,-1,51.5,-1).lineTo(57.5,-1).curveTo(57.9,-1,58.2,-0.7).curveTo(58.5,-0.4,58.5,0).curveTo(58.5,0.4,58.2,0.7).curveTo(57.9,1,57.5,1).closePath().moveTo(39.5,1).curveTo(39.1,1,38.8,0.7).curveTo(38.5,0.4,38.5,0).curveTo(38.5,-0.4,38.8,-0.7).curveTo(39.1,-1,39.5,-1).lineTo(45.5,-1).curveTo(45.9,-1,46.2,-0.7).curveTo(46.5,-0.4,46.5,0).curveTo(46.5,0.4,46.2,0.7).curveTo(45.9,1,45.5,1).closePath().moveTo(27.5,1).curveTo(27.1,1,26.8,0.7).curveTo(26.5,0.4,26.5,0).curveTo(26.5,-0.4,26.8,-0.7).curveTo(27.1,-1,27.5,-1).lineTo(33.5,-1).curveTo(33.9,-1,34.2,-0.7).curveTo(34.5,-0.4,34.5,0).curveTo(34.5,0.4,34.2,0.7).curveTo(33.9,1,33.5,1).closePath().moveTo(15.5,1).curveTo(15.1,1,14.8,0.7).curveTo(14.5,0.4,14.5,0).curveTo(14.5,-0.4,14.8,-0.7).curveTo(15.1,-1,15.5,-1).lineTo(21.5,-1).curveTo(21.9,-1,22.2,-0.7).curveTo(22.5,-0.4,22.5,0).curveTo(22.5,0.4,22.2,0.7).curveTo(21.9,1,21.5,1).closePath().moveTo(3.5,1).curveTo(3.1,1,2.8,0.7).curveTo(2.5,0.4,2.5,0).curveTo(2.5,-0.4,2.8,-0.7).curveTo(3.1,-1,3.5,-1).lineTo(9.5,-1).curveTo(9.9,-1,10.2,-0.7).curveTo(10.5,-0.4,10.5,0).curveTo(10.5,0.4,10.2,0.7).curveTo(9.9,1,9.5,1).closePath().moveTo(-8.5,1).curveTo(-8.9,1,-9.2,0.7).curveTo(-9.5,0.4,-9.5,0).curveTo(-9.5,-0.4,-9.2,-0.7).curveTo(-8.9,-1,-8.5,-1).lineTo(-2.5,-1).curveTo(-2.1,-1,-1.8,-0.7).curveTo(-1.5,-0.4,-1.5,0).curveTo(-1.5,0.4,-1.8,0.7).curveTo(-2.1,1,-2.5,1).closePath().moveTo(-20.5,1).curveTo(-20.9,1,-21.2,0.7).curveTo(-21.5,0.4,-21.5,0).curveTo(-21.5,-0.4,-21.2,-0.7).curveTo(-20.9,-1,-20.5,-1).lineTo(-14.5,-1).curveTo(-14.1,-1,-13.8,-0.7).curveTo(-13.5,-0.4,-13.5,0).curveTo(-13.5,0.4,-13.8,0.7).curveTo(-14.1,1,-14.5,1).closePath().moveTo(-32.5,1).curveTo(-32.9,1,-33.2,0.7).curveTo(-33.5,0.4,-33.5,0).curveTo(-33.5,-0.4,-33.2,-0.7).curveTo(-32.9,-1,-32.5,-1).lineTo(-26.5,-1).curveTo(-26.1,-1,-25.8,-0.7).curveTo(-25.5,-0.4,-25.5,0).curveTo(-25.5,0.4,-25.8,0.7).curveTo(-26.1,1,-26.5,1).closePath().moveTo(-44.5,1).curveTo(-44.9,1,-45.2,0.7).curveTo(-45.5,0.4,-45.5,0).curveTo(-45.5,-0.4,-45.2,-0.7).curveTo(-44.9,-1,-44.5,-1).lineTo(-38.5,-1).curveTo(-38.1,-1,-37.8,-0.7).curveTo(-37.5,-0.4,-37.5,0).curveTo(-37.5,0.4,-37.8,0.7).curveTo(-38.1,1,-38.5,1).closePath().moveTo(-56.5,1).curveTo(-56.9,1,-57.2,0.7).curveTo(-57.5,0.4,-57.5,0).curveTo(-57.5,-0.4,-57.2,-0.7).curveTo(-56.9,-1,-56.5,-1).lineTo(-50.5,-1).curveTo(-50.1,-1,-49.8,-0.7).curveTo(-49.5,-0.4,-49.5,0).curveTo(-49.5,0.4,-49.8,0.7).curveTo(-50.1,1,-50.5,1).closePath().moveTo(-68.5,1).curveTo(-68.9,1,-69.2,0.7).curveTo(-69.5,0.4,-69.5,0).curveTo(-69.5,-0.4,-69.2,-0.7).curveTo(-68.9,-1,-68.5,-1).lineTo(-62.5,-1).curveTo(-62.1,-1,-61.8,-0.7).curveTo(-61.5,-0.4,-61.5,0).curveTo(-61.5,0.4,-61.8,0.7).curveTo(-62.1,1,-62.5,1).closePath().moveTo(-80.5,1).curveTo(-80.9,1,-81.2,0.7).curveTo(-81.5,0.4,-81.5,0).curveTo(-81.5,-0.4,-81.2,-0.7).curveTo(-80.9,-1,-80.5,-1).lineTo(-74.5,-1).curveTo(-74.1,-1,-73.8,-0.7).curveTo(-73.5,-0.4,-73.5,0).curveTo(-73.5,0.4,-73.8,0.7).curveTo(-74.1,1,-74.5,1).closePath().moveTo(-92.5,1).curveTo(-92.9,1,-93.2,0.7).curveTo(-93.5,0.4,-93.5,0).curveTo(-93.5,-0.4,-93.2,-0.7).curveTo(-92.9,-1,-92.5,-1).lineTo(-86.5,-1).curveTo(-86.1,-1,-85.8,-0.7).curveTo(-85.5,-0.4,-85.5,0).curveTo(-85.5,0.4,-85.8,0.7).curveTo(-86.1,1,-86.5,1).closePath().moveTo(-104.5,1).curveTo(-104.9,1,-105.2,0.7).curveTo(-105.5,0.4,-105.5,0).curveTo(-105.5,-0.4,-105.2,-0.7).curveTo(-104.9,-1,-104.5,-1).lineTo(-98.5,-1).curveTo(-98.1,-1,-97.8,-0.7).curveTo(-97.5,-0.4,-97.5,0).curveTo(-97.5,0.4,-97.8,0.7).curveTo(-98.1,1,-98.5,1).closePath().moveTo(-116.5,1).curveTo(-116.9,1,-117.2,0.7).curveTo(-117.5,0.4,-117.5,0).curveTo(-117.5,-0.4,-117.2,-0.7).curveTo(-116.9,-1,-116.5,-1).lineTo(-110.5,-1).curveTo(-110.1,-1,-109.8,-0.7).curveTo(-109.5,-0.4,-109.5,0).curveTo(-109.5,0.4,-109.8,0.7).curveTo(-110.1,1,-110.5,1).closePath().moveTo(-128.5,1).curveTo(-128.9,1,-129.2,0.7).curveTo(-129.5,0.4,-129.5,0).curveTo(-129.5,-0.4,-129.2,-0.7).curveTo(-128.9,-1,-128.5,-1).lineTo(-122.5,-1).curveTo(-122.1,-1,-121.8,-0.7).curveTo(-121.5,-0.4,-121.5,0).curveTo(-121.5,0.4,-121.8,0.7).curveTo(-122.1,1,-122.5,1).closePath().moveTo(-140.5,1).curveTo(-140.9,1,-141.2,0.7).curveTo(-141.5,0.4,-141.5,0).curveTo(-141.5,-0.4,-141.2,-0.7).curveTo(-140.9,-1,-140.5,-1).lineTo(-134.5,-1).curveTo(-134.1,-1,-133.8,-0.7).curveTo(-133.5,-0.4,-133.5,0).curveTo(-133.5,0.4,-133.8,0.7).curveTo(-134.1,1,-134.5,1).closePath().moveTo(-152.5,1).curveTo(-152.9,1,-153.2,0.7).curveTo(-153.5,0.4,-153.5,0).curveTo(-153.5,-0.4,-153.2,-0.7).curveTo(-152.9,-1,-152.5,-1).lineTo(-146.5,-1).curveTo(-146.1,-1,-145.8,-0.7).curveTo(-145.5,-0.4,-145.5,0).curveTo(-145.5,0.4,-145.8,0.7).curveTo(-146.1,1,-146.5,1).closePath().moveTo(-164.5,1).curveTo(-164.9,1,-165.2,0.7).curveTo(-165.5,0.4,-165.5,0).curveTo(-165.5,-0.4,-165.2,-0.7).curveTo(-164.9,-1,-164.5,-1).lineTo(-158.5,-1).curveTo(-158.1,-1,-157.8,-0.7).curveTo(-157.5,-0.4,-157.5,0).curveTo(-157.5,0.4,-157.8,0.7).curveTo(-158.1,1,-158.5,1).closePath().moveTo(-176.5,1).curveTo(-176.9,1,-177.2,0.7).curveTo(-177.5,0.4,-177.5,0).curveTo(-177.5,-0.4,-177.2,-0.7).curveTo(-176.9,-1,-176.5,-1).lineTo(-170.5,-1).curveTo(-170.1,-1,-169.8,-0.7).curveTo(-169.5,-0.4,-169.5,0).curveTo(-169.5,0.4,-169.8,0.7).curveTo(-170.1,1,-170.5,1).closePath().moveTo(-188.5,1).curveTo(-188.9,1,-189.2,0.7).curveTo(-189.5,0.4,-189.5,0).curveTo(-189.5,-0.4,-189.2,-0.7).curveTo(-188.9,-1,-188.5,-1).lineTo(-182.5,-1).curveTo(-182.1,-1,-181.8,-0.7).curveTo(-181.5,-0.4,-181.5,0).curveTo(-181.5,0.4,-181.8,0.7).curveTo(-182.1,1,-182.5,1).closePath().moveTo(-200.5,1).curveTo(-200.9,1,-201.2,0.7).curveTo(-201.5,0.4,-201.5,0).curveTo(-201.5,-0.4,-201.2,-0.7).curveTo(-200.9,-1,-200.5,-1).lineTo(-194.5,-1).curveTo(-194.1,-1,-193.8,-0.7).curveTo(-193.5,-0.4,-193.5,0).curveTo(-193.5,0.4,-193.8,0.7).curveTo(-194.1,1,-194.5,1).closePath().moveTo(-212.5,1).curveTo(-212.9,1,-213.2,0.7).curveTo(-213.5,0.4,-213.5,0).curveTo(-213.5,-0.4,-213.2,-0.7).curveTo(-212.9,-1,-212.5,-1).lineTo(-206.5,-1).curveTo(-206.1,-1,-205.8,-0.7).curveTo(-205.5,-0.4,-205.5,0).curveTo(-205.5,0.4,-205.8,0.7).curveTo(-206.1,1,-206.5,1).closePath().moveTo(-224.5,1).curveTo(-224.9,1,-225.2,0.7).curveTo(-225.5,0.4,-225.5,0).curveTo(-225.5,-0.4,-225.2,-0.7).curveTo(-224.9,-1,-224.5,-1).lineTo(-218.5,-1).curveTo(-218.1,-1,-217.8,-0.7).curveTo(-217.5,-0.4,-217.5,0).curveTo(-217.5,0.4,-217.8,0.7).curveTo(-218.1,1,-218.5,1).closePath().moveTo(-236.5,1).curveTo(-236.9,1,-237.2,0.7).curveTo(-237.5,0.4,-237.5,0).curveTo(-237.5,-0.4,-237.2,-0.7).curveTo(-236.9,-1,-236.5,-1).lineTo(-230.5,-1).curveTo(-230.1,-1,-229.8,-0.7).curveTo(-229.5,-0.4,-229.5,0).curveTo(-229.5,0.4,-229.8,0.7).curveTo(-230.1,1,-230.5,1).closePath();
	this.shape.setTransform(236.475,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.x_marker, new cjs.Rectangle(-1,-1,475,2), null);


(lib.x_axis = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#4A494A").setStrokeStyle(20,2,0,4).moveTo(0.6,-500).lineTo(-0.4,303.7).lineTo(-0.6,500);
	this.shape.setTransform(0.6249,500.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,21.3,1020);


(lib.SliderMarkers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SliderMarker = function(mode,startPosition,loop,reversed) {
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
	this.txt = new cjs.Text("999", "14px 'Helvetica'", "#5E5D5B");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 18;
	this.txt.lineWidth = 76;
	this.txt.parent = this;
	this.txt.setTransform(0,19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#8F9B9F").setStrokeStyle(0.1,1,1).moveTo(0,6).lineTo(0,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderMarker, new cjs.Rectangle(-40,-7,80,44.5), null);


(lib.SliderHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-160,12).lineTo(-160,-12).lineTo(160,-12).lineTo(160,12).closePath();
	this.shape.setTransform(160,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,320,24);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).curveTo(12,5,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.5,8.5).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#4395DE").setStrokeStyle(1,1,1).moveTo(12,0).curveTo(12,5,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.4,8.5).curveTo(-12,5,-12,0).curveTo(-12,-5,-8.4,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).closePath();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#4395DE").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).curveTo(12,5,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.5,8.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.349)").beginStroke().moveTo(-8.5,8.5).curveTo(-12,4.9,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,4.9,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_3.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,26,26.2);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#4395DE").setStrokeStyle(1,2,1).moveTo(-160,0).lineTo(160,0);
	this.shape.setTransform(160,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(-1,-1,322,2), null);


(lib.plot = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("plot", "63px 'Verdana'");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 179;
	this.text.parent = this;
	this.text.setTransform(109.15,1.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#4A494A").setStrokeStyle(4,1,0,4).moveTo(-114,-46).lineTo(114,-46).lineTo(114,46).lineTo(-114,46).closePath();
	this.shape.setTransform(114.05,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-114,46).lineTo(-114,-46).lineTo(114,-46).lineTo(114,46).closePath();
	this.shape_1.setTransform(114.05,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,232.1,96);


(lib.phscaleimage = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fd_3e80f03755dbb1490fe273fec23bd613cac1c42084e72a74df3a009fIMAGEIMAGE();
	this.instance.setTransform(10,45,0.2678,0.2678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phscaleimage, new cjs.Rectangle(10,45,774,99.9), null);


(lib.phpkapopup = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("ph == pKa", "33px 'Palatino'");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(84.25,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.5,48.9);


(lib.node = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#330066").setStrokeStyle(7,1,1).moveTo(6.2,0).curveTo(6.2,2.6,4.4,4.4).curveTo(2.6,6.2,0,6.2).curveTo(-2.6,6.2,-4.5,4.4).curveTo(-6.2,2.6,-6.2,0).curveTo(-6.2,-2.6,-4.5,-4.5).curveTo(-2.6,-6.2,0,-6.2).curveTo(2.6,-6.2,4.4,-4.5).curveTo(6.2,-2.6,6.2,0).closePath();
	this.shape.setTransform(6.25,6.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#990000").beginStroke().moveTo(-4.5,4.4).curveTo(-6.2,2.6,-6.2,-0).curveTo(-6.2,-2.6,-4.5,-4.5).curveTo(-2.6,-6.2,-0,-6.2).curveTo(2.6,-6.2,4.4,-4.5).curveTo(6.3,-2.6,6.3,-0).curveTo(6.3,2.6,4.4,4.4).curveTo(2.6,6.3,-0,6.3).curveTo(-2.6,6.3,-4.5,4.4).closePath();
	this.shape_1.setTransform(6.25,6.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.node, new cjs.Rectangle(-3.5,-3.5,19.5,19.5), null);


(lib.mask_y = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-492.1,710.2).lineTo(-492.1,-710.2).lineTo(492.1,-710.2).lineTo(492.1,430.1).lineTo(300.1,430.1).lineTo(300.1,710.2).closePath();
	this.shape.setTransform(492.125,710.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,984.3,1420.4);


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



(lib.bubble_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.2,12.2).curveTo(-17.2,7.1,-17.2,0).curveTo(-17.2,-7.1,-12.2,-12.2).curveTo(-7.1,-17.2,0,-17.2).curveTo(7.1,-17.2,12.2,-12.2).curveTo(17.2,-7.1,17.2,0).curveTo(17.2,7.1,12.2,12.2).curveTo(7.1,17.2,0,17.2).curveTo(-7.1,17.2,-12.2,12.2).closePath().moveTo(-7.9,-7.9).curveTo(-11.2,-4.7,-11.2,0).curveTo(-11.2,4.7,-7.9,7.9).curveTo(-4.7,11.2,0,11.2).curveTo(4.7,11.2,7.9,7.9).curveTo(11.2,4.7,11.2,0).curveTo(11.2,-4.7,7.9,-7.9).curveTo(4.7,-11.2,0,-11.2).lineTo(-0,-11.2).curveTo(-4.7,-11.2,-7.9,-7.9).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFBFB").beginStroke().moveTo(6.8,21.9).curveTo(5.5,20.5,5.5,18.5).curveTo(5.5,16.6,6.8,15.2).curveTo(8.2,13.8,10.2,13.8).curveTo(12.1,13.8,13.5,15.2).curveTo(14.9,16.6,14.9,18.5).curveTo(14.9,20.5,13.5,21.9).curveTo(12.1,23.3,10.2,23.3).curveTo(8.2,23.3,6.8,21.9).closePath().moveTo(-4.6,21.4).curveTo(-5.5,20.5,-5.5,19.3).curveTo(-5.5,18.1,-4.6,17.3).curveTo(-3.8,16.4,-2.6,16.4).curveTo(-1.3,16.4,-0.5,17.3).curveTo(0.4,18.1,0.4,19.3).curveTo(0.4,20.5,-0.5,21.4).curveTo(-1.3,22.3,-2.6,22.2).curveTo(-3.8,22.3,-4.6,21.4).closePath().moveTo(-13.3,21.1).curveTo(-13.9,20.6,-13.9,19.8).curveTo(-13.9,19,-13.3,18.4).curveTo(-12.8,17.9,-12,17.9).curveTo(-11.2,17.9,-10.6,18.4).curveTo(-10.1,19,-10.1,19.8).curveTo(-10.1,20.6,-10.6,21.1).curveTo(-11.2,21.7,-12,21.7).curveTo(-12.8,21.7,-13.3,21.1).closePath().moveTo(-16.9,13.6).curveTo(-17.5,13,-17.5,12.2).curveTo(-17.5,11.4,-16.9,10.9).curveTo(-16.3,10.3,-15.5,10.3).curveTo(-14.7,10.3,-14.2,10.9).curveTo(-13.6,11.4,-13.6,12.2).curveTo(-13.6,13,-14.2,13.6).curveTo(-14.7,14.1,-15.5,14.1).curveTo(-16.3,14.1,-16.9,13.6).closePath().moveTo(19.1,11.9).curveTo(18.4,11.2,18.4,10.2).curveTo(18.4,9.2,19.1,8.4).curveTo(19.8,7.8,20.8,7.7).curveTo(21.8,7.8,22.5,8.4).curveTo(23.3,9.2,23.3,10.2).curveTo(23.3,11.2,22.5,11.9).curveTo(21.8,12.6,20.8,12.6).curveTo(19.8,12.6,19.1,11.9).closePath().moveTo(-21.7,8.6).curveTo(-23.5,6.8,-23.5,4.2).curveTo(-23.5,1.7,-21.7,-0.1).curveTo(-19.9,-1.9,-17.4,-1.9).curveTo(-14.9,-1.9,-13.1,-0.1).curveTo(-11.3,1.7,-11.3,4.2).curveTo(-11.3,6.8,-13.1,8.6).curveTo(-14.9,10.4,-17.4,10.4).curveTo(-19.9,10.4,-21.7,8.6).closePath().moveTo(15.7,0.5).curveTo(14.3,-0.7,14.3,-2.7).curveTo(14.3,-4.6,15.7,-6).curveTo(17,-7.3,18.9,-7.3).curveTo(20.8,-7.3,22.2,-6).curveTo(23.5,-4.6,23.5,-2.7).curveTo(23.5,-0.7,22.2,0.5).curveTo(20.8,1.9,18.9,1.9).curveTo(17,1.9,15.7,0.5).closePath().moveTo(-18.4,-7).curveTo(-19.3,-7.9,-19.3,-9.1).curveTo(-19.3,-10.3,-18.4,-11.3).curveTo(-17.5,-12.1,-16.3,-12.1).curveTo(-15.1,-12.1,-14.2,-11.3).curveTo(-13.4,-10.3,-13.4,-9.1).curveTo(-13.4,-7.9,-14.2,-7).curveTo(-15.1,-6.2,-16.3,-6.2).curveTo(-17.5,-6.2,-18.4,-7).closePath().moveTo(17.5,-13.4).curveTo(17.1,-13.8,17.1,-14.3).curveTo(17.1,-14.9,17.5,-15.3).curveTo(17.9,-15.7,18.4,-15.7).curveTo(18.9,-15.7,19.3,-15.3).curveTo(19.7,-14.9,19.7,-14.3).curveTo(19.7,-13.8,19.3,-13.4).curveTo(18.9,-13.1,18.4,-13.1).curveTo(17.9,-13.1,17.5,-13.4).closePath().moveTo(-7,-15.7).curveTo(-8.3,-16.9,-8.3,-18.8).curveTo(-8.3,-20.7,-7,-22).curveTo(-5.7,-23.3,-3.8,-23.2).curveTo(-2,-23.3,-0.7,-22).curveTo(0.6,-20.7,0.6,-18.8).curveTo(0.6,-16.9,-0.7,-15.7).curveTo(-2,-14.4,-3.8,-14.3).curveTo(-5.7,-14.4,-7,-15.7).closePath().moveTo(8.1,-16.3).curveTo(7.2,-17.2,7.2,-18.6).curveTo(7.2,-19.9,8.1,-20.8).curveTo(9.1,-21.7,10.4,-21.7).curveTo(11.7,-21.7,12.6,-20.8).curveTo(13.5,-19.9,13.5,-18.6).curveTo(13.5,-17.3,12.6,-16.3).curveTo(11.7,-15.4,10.4,-15.4).curveTo(9.1,-15.4,8.1,-16.3).closePath();
	this.shape_1.setTransform(0.225,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFBFB").beginStroke().moveTo(12.5,26.1).curveTo(11.5,25.1,11.5,23.6).curveTo(11.5,22.2,12.5,21.2).curveTo(13.5,20.2,14.8,20.2).curveTo(16.3,20.2,17.3,21.2).curveTo(18.3,22.2,18.3,23.7).curveTo(18.3,25.1,17.3,26.1).curveTo(16.3,27.1,14.8,27.1).curveTo(13.5,27.1,12.5,26.1).closePath().moveTo(-3.3,24).curveTo(-3.8,23.5,-3.8,22.7).curveTo(-3.8,22,-3.3,21.5).curveTo(-2.8,21,-2,21).curveTo(-1.3,21,-0.8,21.5).curveTo(-0.3,22,-0.3,22.8).curveTo(-0.3,23.5,-0.8,24).curveTo(-1.3,24.5,-2,24.5).curveTo(-2.8,24.5,-3.3,24).closePath().moveTo(-13.3,24.1).curveTo(-13.7,23.7,-13.7,23.1).curveTo(-13.7,22.6,-13.3,22.1).curveTo(-12.9,21.7,-12.4,21.7).curveTo(-11.7,21.7,-11.4,22.1).curveTo(-10.9,22.6,-10.9,23.1).curveTo(-10.9,23.7,-11.4,24.1).curveTo(-11.7,24.5,-12.4,24.5).curveTo(-12.9,24.5,-13.3,24.1).closePath().moveTo(25.3,12.7).curveTo(24.9,12.3,24.9,11.7).curveTo(24.9,11.1,25.3,10.7).curveTo(25.7,10.3,26.2,10.3).curveTo(26.9,10.3,27.2,10.7).curveTo(27.7,11.1,27.7,11.7).curveTo(27.7,12.3,27.2,12.7).curveTo(26.9,13.1,26.2,13.1).curveTo(25.7,13.1,25.3,12.7).closePath().moveTo(-27.2,10.8).curveTo(-28.5,9.5,-28.5,7.6).curveTo(-28.5,5.8,-27.2,4.5).curveTo(-25.9,3.2,-24.1,3.2).curveTo(-22.1,3.2,-20.8,4.5).curveTo(-19.5,5.8,-19.6,7.6).curveTo(-19.5,9.5,-20.8,10.8).curveTo(-22.1,12.1,-24.1,12.1).curveTo(-25.9,12.1,-27.2,10.8).closePath().moveTo(23.7,-0.9).curveTo(22.9,-1.7,22.9,-2.9).curveTo(22.9,-4.1,23.7,-4.9).curveTo(24.5,-5.7,25.6,-5.7).curveTo(26.8,-5.7,27.7,-4.9).curveTo(28.5,-4.1,28.5,-2.9).curveTo(28.5,-1.7,27.7,-0.9).curveTo(26.8,-0.1,25.6,-0.1).curveTo(24.5,-0.1,23.7,-0.9).closePath().moveTo(-20.3,-9.3).curveTo(-20.9,-9.9,-20.9,-10.8).curveTo(-20.9,-11.6,-20.3,-12.2).curveTo(-19.7,-12.8,-18.9,-12.8).curveTo(-18,-12.8,-17.3,-12.2).curveTo(-16.8,-11.6,-16.8,-10.8).curveTo(-16.8,-9.9,-17.3,-9.3).curveTo(-18,-8.7,-18.9,-8.7).curveTo(-19.7,-8.7,-20.3,-9.3).closePath().moveTo(12.7,-21.5).curveTo(12.3,-22,12.3,-22.7).curveTo(12.3,-23.5,12.7,-24).curveTo(13.2,-24.5,14,-24.5).curveTo(14.8,-24.5,15.3,-24).curveTo(15.8,-23.5,15.8,-22.7).curveTo(15.8,-22,15.3,-21.5).curveTo(14.8,-21,14,-21).curveTo(13.2,-21,12.7,-21.5).closePath().moveTo(-6.1,-22.3).curveTo(-6.9,-23.1,-6.9,-24.3).curveTo(-6.9,-25.4,-6.1,-26.3).curveTo(-5.3,-27.1,-4.1,-27.1).curveTo(-2.9,-27.1,-2.1,-26.3).curveTo(-1.3,-25.4,-1.3,-24.3).curveTo(-1.3,-23.1,-2.1,-22.3).curveTo(-2.9,-21.5,-4.1,-21.5).curveTo(-5.3,-21.5,-6.1,-22.3).closePath();
	this.shape_2.setTransform(-0.95,-2.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFBFB").beginStroke().moveTo(16.5,27.5).curveTo(15.9,26.9,15.9,25.9).curveTo(15.9,25,16.5,24.3).curveTo(17.3,23.7,18.2,23.6).curveTo(19.1,23.7,19.8,24.3).curveTo(20.4,25,20.4,25.9).curveTo(20.4,26.9,19.8,27.5).curveTo(19.1,28.1,18.2,28.1).curveTo(17.3,28.1,16.5,27.5).closePath().moveTo(-13.2,24.7).curveTo(-13.2,24.7,-13.2,24.7).curveTo(-13.2,24.7,-13.3,24.6).curveTo(-13.3,24.6,-13.3,24.5).curveTo(-13.3,24.5,-13.3,24.4).curveTo(-13.3,24.4,-13.3,24.4).curveTo(-13.3,24.3,-13.3,24.3).curveTo(-13.2,24.2,-13.2,24.2).curveTo(-13.2,24.1,-13.2,24.1).curveTo(-13.1,24.1,-13.1,24).curveTo(-13,24,-13,24).curveTo(-12.9,24,-12.9,24).curveTo(-12.8,24,-12.8,24).curveTo(-12.8,24,-12.7,24).curveTo(-12.7,24,-12.6,24).curveTo(-12.6,24,-12.6,24).curveTo(-12.5,24.1,-12.5,24.1).curveTo(-12.5,24.1,-12.4,24.2).curveTo(-12.4,24.2,-12.4,24.3).curveTo(-12.4,24.3,-12.4,24.4).curveTo(-12.4,24.4,-12.4,24.4).curveTo(-12.4,24.5,-12.4,24.5).curveTo(-12.4,24.6,-12.4,24.6).curveTo(-12.4,24.7,-12.4,24.7).curveTo(-12.5,24.7,-12.5,24.7).curveTo(-12.5,24.8,-12.6,24.8).curveTo(-12.6,24.8,-12.6,24.9).curveTo(-12.7,24.9,-12.7,24.9).curveTo(-12.8,24.9,-12.8,24.9).curveTo(-12.8,24.9,-12.9,24.9).curveTo(-12.9,24.9,-13,24.9).curveTo(-13,24.8,-13.1,24.8).curveTo(-13.1,24.8,-13.2,24.7).closePath().moveTo(-2.5,24.5).curveTo(-2.7,24.3,-2.7,24).curveTo(-2.7,23.7,-2.5,23.5).curveTo(-2.2,23.3,-1.9,23.3).curveTo(-1.6,23.3,-1.4,23.5).curveTo(-1.2,23.7,-1.2,24.1).curveTo(-1.2,24.3,-1.4,24.5).curveTo(-1.6,24.8,-1.9,24.8).curveTo(-2.2,24.8,-2.5,24.5).closePath().moveTo(-29.9,11.7).curveTo(-30.7,10.9,-30.7,9.8).curveTo(-30.7,8.6,-29.9,7.9).curveTo(-29.1,7,-27.9,7.1).curveTo(-26.8,7,-26,7.9).curveTo(-25.2,8.6,-25.2,9.8).curveTo(-25.2,10.9,-26,11.7).curveTo(-26.8,12.5,-27.9,12.5).curveTo(-29.1,12.5,-29.9,11.7).closePath().moveTo(27.8,11.6).curveTo(27.8,11.6,27.7,11.5).curveTo(27.7,11.5,27.7,11.4).curveTo(27.7,11.4,27.7,11.3).curveTo(27.6,11.2,27.6,11.1).curveTo(27.6,11.1,27.7,11).curveTo(27.7,11,27.7,10.9).curveTo(27.7,10.9,27.7,10.8).curveTo(27.8,10.7,27.8,10.7).curveTo(27.8,10.7,27.9,10.6).curveTo(28,10.6,28,10.6).curveTo(28.1,10.6,28.1,10.6).curveTo(28.2,10.6,28.2,10.6).curveTo(28.3,10.6,28.4,10.6).curveTo(28.4,10.6,28.5,10.6).curveTo(28.5,10.6,28.6,10.6).curveTo(28.6,10.7,28.7,10.7).curveTo(28.7,10.7,28.7,10.8).curveTo(28.8,10.9,28.8,10.9).curveTo(28.8,11,28.8,11).curveTo(28.9,11.1,28.9,11.1).curveTo(28.9,11.2,28.8,11.3).curveTo(28.8,11.4,28.8,11.4).curveTo(28.8,11.5,28.7,11.5).curveTo(28.7,11.6,28.7,11.6).curveTo(28.6,11.6,28.6,11.7).curveTo(28.5,11.7,28.5,11.7).curveTo(28.4,11.7,28.4,11.7).curveTo(28.3,11.7,28.2,11.7).curveTo(28.2,11.7,28.1,11.7).curveTo(28.1,11.7,28,11.7).curveTo(28,11.7,27.9,11.7).curveTo(27.8,11.6,27.8,11.6).closePath().moveTo(27.8,-3.6).curveTo(27.3,-4.1,27.3,-4.8).curveTo(27.3,-5.5,27.8,-6).curveTo(28.3,-6.5,29,-6.5).curveTo(29.7,-6.5,30.2,-6).curveTo(30.7,-5.5,30.7,-4.8).curveTo(30.7,-4.1,30.2,-3.6).curveTo(29.7,-3.1,29,-3.1).curveTo(28.3,-3.1,27.8,-3.6).closePath().moveTo(-21.2,-11.7).curveTo(-21.5,-12,-21.5,-12.5).curveTo(-21.5,-12.8,-21.2,-13.2).curveTo(-20.9,-13.5,-20.5,-13.5).curveTo(-20,-13.5,-19.7,-13.2).curveTo(-19.5,-12.8,-19.5,-12.5).curveTo(-19.5,-12,-19.7,-11.7).curveTo(-20,-11.4,-20.5,-11.4).curveTo(-20.9,-11.4,-21.2,-11.7).closePath().moveTo(14.8,-24.2).curveTo(14.5,-24.5,14.5,-24.9).curveTo(14.5,-25.2,14.8,-25.5).curveTo(15.1,-25.9,15.5,-25.9).curveTo(15.9,-25.9,16.2,-25.5).curveTo(16.5,-25.2,16.5,-24.9).curveTo(16.5,-24.5,16.2,-24.2).curveTo(15.9,-23.9,15.5,-23.9).curveTo(15.1,-23.9,14.8,-24.2).closePath().moveTo(-5.7,-25.6).curveTo(-6.1,-26.1,-6.1,-26.7).curveTo(-6.1,-27.3,-5.7,-27.8).curveTo(-5.2,-28.1,-4.6,-28.1).curveTo(-4,-28.1,-3.5,-27.8).curveTo(-3.1,-27.3,-3.1,-26.7).curveTo(-3.1,-26,-3.5,-25.6).curveTo(-4,-25.2,-4.6,-25.2).curveTo(-5.2,-25.2,-5.7,-25.6).closePath();
	this.shape_3.setTransform(-1.15,-1.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFBFB").beginStroke().moveTo(19,28).curveTo(18.8,27.7,18.8,27.3).curveTo(18.8,26.9,19,26.7).curveTo(19.3,26.4,19.7,26.4).curveTo(20.1,26.4,20.4,26.7).curveTo(20.7,26.9,20.7,27.3).curveTo(20.7,27.7,20.4,28).curveTo(20.1,28.3,19.7,28.3).curveTo(19.3,28.3,19,28).closePath().moveTo(-31.1,12.9).curveTo(-31.5,12.5,-31.5,11.9).curveTo(-31.5,11.3,-31.1,10.9).curveTo(-30.7,10.5,-30.2,10.5).curveTo(-29.6,10.5,-29.2,10.9).curveTo(-28.8,11.3,-28.8,11.9).curveTo(-28.8,12.5,-29.2,12.9).curveTo(-29.6,13.3,-30.2,13.3).curveTo(-30.7,13.3,-31.1,12.9).closePath().moveTo(30.7,-5.3).curveTo(30.7,-5.3,30.7,-5.3).curveTo(30.6,-5.4,30.6,-5.4).curveTo(30.6,-5.4,30.6,-5.5).curveTo(30.6,-5.5,30.6,-5.6).curveTo(30.6,-5.6,30.6,-5.7).curveTo(30.6,-5.7,30.6,-5.8).curveTo(30.6,-5.8,30.7,-5.8).curveTo(30.7,-5.9,30.7,-5.9).curveTo(30.8,-6,30.8,-6).curveTo(30.8,-6,30.9,-6).curveTo(30.9,-6.1,31,-6.1).curveTo(31,-6.1,31.1,-6.1).curveTo(31.1,-6.1,31.2,-6.1).curveTo(31.2,-6.1,31.3,-6).curveTo(31.3,-6,31.3,-6).curveTo(31.4,-6,31.4,-5.9).curveTo(31.4,-5.9,31.4,-5.8).curveTo(31.5,-5.8,31.5,-5.8).curveTo(31.5,-5.7,31.5,-5.7).curveTo(31.5,-5.6,31.5,-5.6).curveTo(31.5,-5.5,31.5,-5.5).curveTo(31.5,-5.4,31.5,-5.4).curveTo(31.5,-5.4,31.4,-5.3).curveTo(31.4,-5.3,31.4,-5.3).curveTo(31.4,-5.2,31.3,-5.2).curveTo(31.3,-5.2,31.3,-5.2).curveTo(31.2,-5.1,31.2,-5.1).curveTo(31.1,-5.1,31.1,-5.1).curveTo(31,-5.1,31,-5.1).curveTo(30.9,-5.1,30.9,-5.2).curveTo(30.8,-5.2,30.8,-5.2).curveTo(30.8,-5.2,30.7,-5.3).closePath().moveTo(-5.1,-27.3).curveTo(-5.1,-27.4,-5.1,-27.4).curveTo(-5.2,-27.4,-5.2,-27.5).curveTo(-5.2,-27.5,-5.2,-27.6).curveTo(-5.2,-27.7,-5.2,-27.7).lineTo(-5.1,-28.1).lineTo(-4.7,-28.3).curveTo(-4.6,-28.3,-4.6,-28.3).curveTo(-4.5,-28.3,-4.4,-28.2).curveTo(-4.4,-28.2,-4.4,-28.2).curveTo(-4.3,-28.2,-4.3,-28.1).curveTo(-4.2,-28.1,-4.2,-28).curveTo(-4.1,-28,-4.1,-27.9).curveTo(-4.1,-27.9,-4.1,-27.8).curveTo(-4.1,-27.7,-4.1,-27.7).curveTo(-4.1,-27.6,-4.1,-27.6).curveTo(-4.1,-27.5,-4.1,-27.5).curveTo(-4.1,-27.4,-4.2,-27.4).curveTo(-4.2,-27.4,-4.3,-27.3).curveTo(-4.3,-27.3,-4.4,-27.2).curveTo(-4.4,-27.2,-4.4,-27.2).curveTo(-4.5,-27.2,-4.6,-27.1).curveTo(-4.6,-27.1,-4.7,-27.1).curveTo(-4.7,-27.1,-4.8,-27.1).curveTo(-4.8,-27.2,-4.9,-27.2).curveTo(-4.9,-27.2,-5,-27.2).curveTo(-5,-27.3,-5.1,-27.3).closePath();
	this.shape_4.setTransform(-1.425,-2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-30.3,63,56.6);


(lib.Boiler = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#C4D4FC").beginStroke().moveTo(-9.8,9.7).curveTo(-13.8,5.7,-13.8,0).curveTo(-13.8,-5.7,-9.8,-9.7).curveTo(-5.7,-13.8,-0,-13.8).curveTo(5.7,-13.8,9.8,-9.7).curveTo(13.8,-5.7,13.8,0).curveTo(13.8,5.7,9.8,9.7).curveTo(5.7,13.8,-0,13.8).curveTo(-5.7,13.8,-9.8,9.7).closePath();
	this.shape.setTransform(0.0165,0.0175,0.8293,0.8293);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-11.4,22.9,22.9);


(lib.arrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#393939").beginStroke().moveTo(0.9,0.1).lineTo(-1.2,0.1).lineTo(-1.2,-0.2).lineTo(1.2,0).lineTo(1.2,0.1).lineTo(0.9,0.1).closePath();
	this.shape.setTransform(104.675,124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4C4C4C").beginStroke().moveTo(5.9,0.1).lineTo(-6.2,0.1).lineTo(-6.2,-0.2).lineTo(5.9,-0.2).lineTo(6.2,-0.2).lineTo(6.2,0.1).lineTo(5.9,0.1).closePath();
	this.shape_1.setTransform(115.275,124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CFCFCF").beginStroke().moveTo(-1.3,0.3).curveTo(-1.8,0.2,-1.9,-0.3).lineTo(1.6,-0.3).lineTo(1.9,-0.3).lineTo(1.9,-0.2).lineTo(-1,0).lineTo(-1,0.3).lineTo(-1.3,0.3).closePath();
	this.shape_2.setTransform(83.875,124.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#9A9A9A").beginStroke().moveTo(2.9,0.1).lineTo(-3.3,0.1).lineTo(-3.3,-0.2).lineTo(2.9,-0.2).lineTo(3.3,-0.2).lineTo(3.3,0.1).lineTo(2.9,0.1).closePath();
	this.shape_3.setTransform(148,124);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#767676").beginStroke().moveTo(11.3,0.1).lineTo(-11.7,0.1).lineTo(-11.7,-0.2).lineTo(11.3,-0.2).lineTo(11.6,-0.2).lineTo(11.6,0.1).lineTo(11.3,0.1).closePath();
	this.shape_4.setTransform(133.1,124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#464646").beginStroke().moveTo(-1.6,-0.1).lineTo(0.4,-0.1).lineTo(0.7,-0.1).lineTo(1.3,-0.1).lineTo(1.6,-0.1).lineTo(1.6,0).curveTo(-0,0.2,-1.6,0.1).lineTo(-1.6,-0.1).closePath();
	this.shape_5.setTransform(7.525,99.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-0.4,0.1).lineTo(-0.7,0.1).lineTo(-1.3,0.1).lineTo(-1.3,-0.2).lineTo(1,-0.2).lineTo(1.3,-0.2).lineTo(1.3,0.1).lineTo(1,0.1).lineTo(0.3,0.2).lineTo(-0.4,0.1).closePath();
	this.shape_6.setTransform(9.575,99.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#9C9C9C").beginStroke().moveTo(1.9,0.2).lineTo(-2.2,0.2).lineTo(-2.2,-0.1).lineTo(1.9,-0.1).lineTo(2.2,-0.1).lineTo(2.2,0.2).lineTo(1.9,0.2).closePath();
	this.shape_7.setTransform(13.1,99.2375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#7A7A7A").beginStroke().moveTo(3.5,0.1).lineTo(-3.8,0.1).lineTo(-3.8,-0.2).lineTo(3.5,-0.2).lineTo(3.9,-0.2).lineTo(3.9,0.1).lineTo(3.5,0.1).closePath();
	this.shape_8.setTransform(19.15,99.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#525252").beginStroke().moveTo(5.1,0.2).lineTo(-5.4,0.2).lineTo(-5.4,-0.1).lineTo(-2.8,-0.1).lineTo(-2.5,-0.1).lineTo(5.1,-0.1).lineTo(5.5,-0.1).lineTo(5.5,0.2).lineTo(5.1,0.2).closePath();
	this.shape_9.setTransform(28.45,99.2375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E3E3E").beginStroke().moveTo(-1.5,-0.2).lineTo(1.2,-0.2).lineTo(1.5,-0.2).lineTo(1.5,0).curveTo(0,0.1,-1.5,0.1).lineTo(-1.5,-0.2).closePath();
	this.shape_10.setTransform(35.375,99.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CBCBCB").beginStroke().moveTo(9.9,0.1).lineTo(0.7,0.1).lineTo(0.4,0.1).lineTo(-2.2,0.1).lineTo(-2.5,0.1).lineTo(-10.2,0.1).lineTo(-10.2,-0.1).lineTo(9.9,-0.1).lineTo(10.2,-0.1).lineTo(10.2,0.1).lineTo(9.9,0.1).closePath();
	this.shape_11.setTransform(36.125,98.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#818181").beginStroke().moveTo(16.6,0.2).lineTo(-16.9,0.2).lineTo(-16.9,-0.2).lineTo(16.6,-0.2).lineTo(17,-0.2).lineTo(17,0.2).lineTo(16.6,0.2).closePath();
	this.shape_12.setTransform(16.95,49.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#636363").beginStroke().moveTo(4.3,0.2).lineTo(-4.6,0.2).lineTo(-4.6,-0.2).lineTo(4.3,-0.2).lineTo(4.6,-0.2).lineTo(4.6,0.2).lineTo(4.3,0.2).closePath();
	this.shape_13.setTransform(38.475,49.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#D9D9D9").beginStroke().moveTo(7.8,0.1).lineTo(2.2,0.1).lineTo(2.2,-0.1).curveTo(5.2,-0.2,8.1,0).lineTo(8.1,0.1).lineTo(7.8,0.1).closePath().moveTo(-4,0.1).lineTo(-8.1,0.1).lineTo(-8.1,-0.1).lineTo(-3.7,0).lineTo(-3.7,0.1).lineTo(-4,0.1).closePath();
	this.shape_14.setTransform(67.95,49.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#434343").beginStroke().moveTo(-17.4,-0.2).lineTo(-0.9,-0.2).lineTo(-0.6,-0.2).lineTo(3.5,-0.2).lineTo(3.8,-0.2).lineTo(9.4,-0.2).lineTo(9.7,-0.2).lineTo(15.3,-0.2).lineTo(15.6,-0.2).lineTo(17.1,-0.2).lineTo(17.4,-0.2).lineTo(17.4,0).curveTo(-0,0.2,-17.4,0.2).lineTo(-17.4,-0.2).closePath();
	this.shape_15.setTransform(60.45,49.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#696969").beginStroke().moveTo(-77.1,-0.2).lineTo(-24.1,-0.2).lineTo(29,-0.2).lineTo(77.1,-0.2).lineTo(77.1,0.1).lineTo(28.7,0.1).lineTo(-24.4,0.2).lineTo(-33.2,0.2).curveTo(-55.4,0.2,-77.1,-0.2).closePath();
	this.shape_16.setTransform(77.1,74.2083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CDCDCD").beginStroke().moveTo(5.9,0.1).lineTo(-6.2,0.1).lineTo(-6.2,-0.1).lineTo(5.9,-0.1).lineTo(6.2,-0.1).lineTo(6.2,0.1).lineTo(5.9,0.1).closePath();
	this.shape_17.setTransform(108.8,49.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#D1D1D1").beginStroke().moveTo(2.7,0.1).lineTo(-2.9,0.1).lineTo(-2.9,-0.1).curveTo(0,-0.2,2.9,0).lineTo(2.9,0.1).lineTo(2.7,0.1).closePath();
	this.shape_18.setTransform(96.7,49.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#D5D5D5").beginStroke().moveTo(2.7,0.1).lineTo(-2.9,0.1).lineTo(-2.9,-0.1).curveTo(0,-0.2,2.9,0).lineTo(2.9,0.1).lineTo(2.7,0.1).closePath();
	this.shape_19.setTransform(84.9,49.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#868686").beginStroke().moveTo(-68.7,25.3).lineTo(-70.8,25.3).lineTo(-70.8,25.1).lineTo(-68.7,25.1).lineTo(-68.4,25.1).lineTo(-68.4,25.3).lineTo(-68.7,25.3).closePath().moveTo(70.5,-25.1).lineTo(52.8,-25.1).lineTo(52.8,-25.3).lineTo(70.5,-25.3).lineTo(70.8,-25.3).lineTo(70.8,-25.1).lineTo(70.5,-25.1).closePath();
	this.shape_20.setTransform(74.275,74.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#ABABAB").beginStroke().moveTo(5.8,0.1).lineTo(-6,0.1).lineTo(-6,-0.1).lineTo(5.8,-0.1).lineTo(6,-0.1).lineTo(6,0.1).lineTo(5.8,0.1).closePath();
	this.shape_21.setTransform(121.05,49.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#808080").beginStroke().moveTo(0.6,0.5).curveTo(-0.3,0.2,-0.9,-0.6).curveTo(0.2,-0.4,0.8,0.4).lineTo(0.9,0.6).lineTo(0.6,0.5).closePath();
	this.shape_22.setTransform(141.525,3.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#9E9E9E").beginStroke().moveTo(59.2,0.2).lineTo(6.2,0.2).lineTo(-46.9,0.2).lineTo(-100,0.2).lineTo(-100,-0.1).lineTo(-46.9,-0.1).lineTo(6.2,-0.1).curveTo(32.7,-0.1,59.2,-0.2).curveTo(80,-0.3,100,0.2).lineTo(59.2,0.2).closePath();
	this.shape_23.setTransform(146.25,98.8673);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#B7B7B7").beginStroke().moveTo(9.7,0.1).lineTo(-10,0.1).lineTo(-10,-0.2).lineTo(9.7,-0.2).lineTo(10,-0.2).lineTo(10,0.1).lineTo(9.7,0.1).closePath();
	this.shape_24.setTransform(161.275,124);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#444444").beginStroke().moveTo(-6.3,-0.1).lineTo(6,-0.1).lineTo(6.3,-0.1).lineTo(6.3,-0).curveTo(0,0.2,-6.3,0.1).lineTo(-6.3,-0.1).closePath();
	this.shape_25.setTransform(239.875,123.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-23.8,24.8).lineTo(-14.9,24.8).lineTo(-14.6,24.8).lineTo(-14.6,24.9).lineTo(-23.8,25.1).lineTo(-23.8,24.8).closePath().moveTo(15.7,-24.8).lineTo(15.7,-25.1).lineTo(20.8,-25.1).lineTo(21.1,-25.1).lineTo(23.5,-25.1).lineTo(23.7,-25.1).lineTo(23.7,-24.9).curveTo(20.5,-24.8,17.3,-24.8).lineTo(15.7,-24.8).closePath();
	this.shape_26.setTransform(195.05,99.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#353535").beginStroke().moveTo(-6.8,0.1).lineTo(-6.8,-0.2).lineTo(6.5,-0.2).lineTo(6.8,-0.2).lineTo(6.8,0.1).lineTo(6.5,0.1).lineTo(1.4,0.1).lineTo(1.2,0.1).lineTo(-2.8,0.2).lineTo(-6.8,0.1).closePath();
	this.shape_27.setTransform(209.35,73.8625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#2F2F2F").beginStroke().moveTo(2.2,0.1).lineTo(-2.5,0.1).lineTo(-2.5,-0.1).lineTo(2.2,-0.1).lineTo(2.5,-0.1).lineTo(2.5,0.1).lineTo(2.2,0.1).closePath();
	this.shape_28.setTransform(240.15,73.5625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#8C8C8C").beginStroke().moveTo(3.2,0.1).lineTo(-3.5,0.1).lineTo(-3.5,-0.1).lineTo(3.2,-0.1).lineTo(3.6,-0.1).lineTo(3.6,0.1).lineTo(3.2,0.1).closePath();
	this.shape_29.setTransform(229.7,73.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#606060").beginStroke().moveTo(4.7,0.1).lineTo(-2.4,0.1).lineTo(-2.6,0.1).lineTo(-5,0.1).lineTo(-5,-0.1).lineTo(4.7,-0.1).lineTo(5,-0.1).lineTo(5,0.1).lineTo(4.7,0.1).closePath();
	this.shape_30.setTransform(221.15,73.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#949494").beginStroke().moveTo(12.2,0.2).lineTo(-12.5,0.2).lineTo(-12.5,-0.2).lineTo(12.2,-0.2).lineTo(12.5,-0.2).lineTo(12.5,0.2).lineTo(12.2,0.2).closePath();
	this.shape_31.setTransform(166.725,74.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#C2C2C2").beginStroke().moveTo(15.5,0.2).lineTo(-15.8,0.2).lineTo(-15.8,-0.2).lineTo(7.2,-0.2).lineTo(7.5,-0.2).lineTo(15.5,-0.2).lineTo(15.8,-0.2).lineTo(15.8,0.2).lineTo(15.5,0.2).closePath();
	this.shape_32.setTransform(195.025,74.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#575757").beginStroke().moveTo(-9.6,0).lineTo(7.3,-0.1).curveTo(-1.2,0.3,-9.6,0.3).lineTo(-9.6,0).closePath().moveTo(9.3,-0.3).curveTo(9.4,-0.3,9.5,-0.3).curveTo(9.6,-0.3,9.6,-0.3).curveTo(9.6,-0.3,9.6,-0.3).curveTo(9.6,-0.3,9.5,-0.3).lineTo(9.3,-0.2).closePath();
	this.shape_33.setTransform(154.6667,48.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7B7B7B").beginStroke().moveTo(0.6,0.5).curveTo(-0.3,0.2,-0.9,-0.6).curveTo(0.2,-0.3,0.8,0.4).lineTo(0.9,0.6).lineTo(0.6,0.5).closePath();
	this.shape_34.setTransform(176.925,27.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#B1B1B1").beginStroke().moveTo(-5.1,-0.1).lineTo(-1.1,-0.1).lineTo(-0.7,-0.1).lineTo(4,-0.1).lineTo(4.2,-0.1).lineTo(4.9,-0.1).lineTo(5.1,-0.1).lineTo(5.1,0).curveTo(-0,0.2,-5.1,0.1).lineTo(-5.1,-0.1).closePath();
	this.shape_35.setTransform(238.4,73.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#585858").beginStroke().moveTo(-0.1,0.2).lineTo(-0.4,0.2).lineTo(-1,0.2).lineTo(-1,-0).lineTo(0.8,-0.2).lineTo(0.8,-0.3).lineTo(1,-0.3).curveTo(1.1,0.3,0.5,0.3).lineTo(-0.1,0.2).closePath();
	this.shape_36.setTransform(243.6333,73.474);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("rgba(64,64,64,0.686)").beginStroke().moveTo(-26.4,77.5).lineTo(-58.2,56.2).curveTo(-74.1,45.5,-90.1,35).curveTo(-101.3,27.5,-112.1,19.8).lineTo(-121.4,13.1).lineTo(-119.9,13.2).lineTo(-119.6,13.1).lineTo(-117.5,13.1).lineTo(-117.2,13.1).curveTo(-115.6,13.1,-114,13).lineTo(-113.9,12.8).lineTo(-112.5,12.8).lineTo(-112.2,12.8).lineTo(-108.1,12.8).lineTo(-107.8,12.8).lineTo(-100.4,12.8).lineTo(-100.1,12.8).lineTo(-89.5,12.8).lineTo(-89.2,12.8).curveTo(-87.7,12.8,-86.3,12.7).lineTo(-86.3,12.5).lineTo(-77.1,12.5).lineTo(-76.8,12.5).lineTo(-23.7,12.5).lineTo(29.4,12.5).lineTo(82.4,12.5).lineTo(123.1,12.5).lineTo(123.1,19.8).lineTo(123.1,36.7).lineTo(123.1,37).lineTo(122.8,37).lineTo(110.5,37).lineTo(110.5,37.3).lineTo(110.2,37.3).lineTo(57.3,37.3).lineTo(57.1,37.3).lineTo(48.2,37.3).lineTo(47.9,37.3).lineTo(28.2,37.3).lineTo(27.8,37.3).lineTo(21.6,37.3).lineTo(21.3,37.3).lineTo(-1.7,37.3).lineTo(-1.9,37.3).lineTo(-14,37.3).lineTo(-14,37.6).lineTo(-14.3,37.6).lineTo(-17.3,37.6).lineTo(-17.3,37.5).lineTo(-19.6,37.3).lineTo(-19.6,37.6).lineTo(-19.9,37.6).lineTo(-37.3,37.6).lineTo(-37.6,37.6).lineTo(-41.1,37.6).curveTo(-41,38.1,-40.6,38.2).lineTo(-40.2,38.2).curveTo(-35.2,41.7,-30.1,45.1).curveTo(-14,55.6,1.3,66.8).lineTo(1.3,67.1).curveTo(-5.1,77.5,-12.8,86.5).lineTo(-26.4,77.5).closePath().moveTo(79.1,-12.6).lineTo(56.2,-12.6).lineTo(55.8,-12.6).lineTo(31.1,-12.6).lineTo(-17,-12.6).lineTo(-70.1,-12.6).lineTo(-123.1,-12.6).lineTo(-123.1,-12.8).lineTo(-123.1,-37).lineTo(-89.5,-37).lineTo(-89.2,-37).lineTo(-80.3,-37).lineTo(-80.1,-37).curveTo(-62.7,-37,-45.3,-37.1).lineTo(-45.3,-37.3).lineTo(-41.5,-37.3).lineTo(-41.1,-37.3).lineTo(-35.5,-37.3).lineTo(-35.3,-37.3).lineTo(-29.7,-37.3).lineTo(-29.3,-37.3).lineTo(-23.7,-37.3).lineTo(-23.5,-37.3).lineTo(-20.8,-37.3).lineTo(-20.5,-37.3).lineTo(-8.4,-37.3).lineTo(-8.1,-37.3).lineTo(3.7,-37.3).lineTo(4,-37.3).lineTo(21.6,-37.3).lineTo(22,-37.3).curveTo(30.4,-37.3,38.8,-37.7).lineTo(40.9,-37.8).lineTo(40.9,-37.8).lineTo(41.1,-37.9).curveTo(41.2,-37.9,41.2,-37.9).curveTo(41.2,-37.9,41.2,-37.9).curveTo(41.1,-37.9,41.1,-37.9).curveTo(41,-37.9,40.9,-37.9).lineTo(30.2,-44.9).curveTo(13.9,-55.2,-1.3,-66.5).curveTo(5.7,-76.2,12.3,-86.5).lineTo(12.5,-86.5).curveTo(15.2,-85.2,17.3,-83.4).lineTo(17.6,-83.3).curveTo(18.1,-82.5,19,-82.2).lineTo(19.3,-82.1).lineTo(51.1,-61).curveTo(52.2,-60.2,52.9,-59.4).curveTo(53.6,-58.6,54.4,-58.3).lineTo(54.7,-58.3).curveTo(70.5,-47.6,86.5,-36.9).lineTo(118.3,-15.8).curveTo(119.9,-14.7,121.3,-13.4).lineTo(121.3,-13.3).lineTo(119.5,-13.1).lineTo(119.3,-13.1).lineTo(114.6,-13.1).lineTo(114.6,-12.8).lineTo(114.2,-12.8).lineTo(110.2,-12.8).lineTo(109.8,-12.8).lineTo(103.1,-12.8).lineTo(102.7,-12.8).lineTo(93.1,-12.8).lineTo(92.7,-12.8).lineTo(79.5,-12.8).lineTo(79.5,-12.6).lineTo(79.1,-12.6).closePath();
	this.shape_37.setTransform(123.1,86.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.2,173.1);


(lib.akaline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#832876").setStrokeStyle(7,1,1).moveTo(70,0).curveTo(70,29,49.5,49.5).curveTo(29,70,0,70).curveTo(-29,70,-49.5,49.5).curveTo(-70,29,-70,0).curveTo(-70,-29,-49.5,-49.5).curveTo(-29,-70,0,-70).curveTo(29,-70,49.5,-49.5).curveTo(70,-29,70,0).closePath();
	this.shape.setTransform(70,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.akaline, new cjs.Rectangle(-3.5,-3.5,147,147), null);


(lib.acid = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#B82025").setStrokeStyle(7,1,1).moveTo(70,0).curveTo(70,29,49.5,49.5).curveTo(29,70,0,70).curveTo(-29,70,-49.5,49.5).curveTo(-70,29,-70,0).curveTo(-70,-29,-49.5,-49.5).curveTo(-29,-70,0,-70).curveTo(29,-70,49.5,-49.5).curveTo(70,-29,70,0).closePath();
	this.shape.setTransform(70,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acid, new cjs.Rectangle(-3.5,-3.5,147,147), null);


(lib.Slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(0,0,1.0417,0.9921);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// hit
	this.hit = new lib.SliderHit();
	this.hit.name = "hit";
	this.hit.setTransform(0,-0.45,1,1,0,0,0,0,-0.4);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.SliderHit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	// text
	this.txt = new lib.an_TextInput({'id': 'txt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txt.name = "txt";
	this.txt.setTransform(-1,21.25,0.9998,1.2933,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// bar
	this.bar = new lib.SliderBar();
	this.bar.name = "bar";

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#8F9B9F").setStrokeStyle(0.1,2,1).moveTo(-160,0).lineTo(160,0);
	this.shape.setTransform(160,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// markers
	this.markers = new lib.SliderMarkers();
	this.markers.name = "markers";

	this.timeline.addTween(cjs.Tween.get(this.markers).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slider, new cjs.Rectangle(-12.5,-12,333.5,62.5), null);


(lib.ph_scale = function(mode,startPosition,loop,reversed) {
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
		this.play();
		this.play();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.phscaleimage("synched",0);
	this.instance.setTransform(71.85,19.8,0.0511,1.437,-90,0,0,397,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:396.2,scaleX:0.8053,y:-283.7},14).to({regX:395.8,regY:94.9,scaleX:1.3424,x:71.7,y:-486.85},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1007.9,143.7,1047.5);


(lib.mask_x = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arrows("synched",0);
	this.instance.setTransform(652.6,320.6,0.4021,0.4018,0,0,0,124.1,87.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-714.2,298.1).lineTo(-714.2,-298.1).lineTo(714.2,-298.1).lineTo(714.2,298.1).closePath();
	this.shape.setTransform(714.175,298.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1428.4,596.2);


(lib.Bubbles = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bubble_3("single",0);
	this.instance.setTransform(0.5,126.75,0.7166,0.7166);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.254,scaleY:1.254,guide:{path:[0.6,126.8,-6.2,80.4,6.4,43.1,20.6,0.7,22.2,-33.8,23.8,-68.5,8,-97.2,-4,-118.9,0.7,-150.3]},mode:"synched",loop:false},19,cjs.Ease.get(1)).wait(11));

	// Layer_3
	this.instance_1 = new lib.bubble_3("single",0);
	this.instance_1.setTransform(4.4,113.2,0.7166,0.7166);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:0.1,scaleX:1.8289,scaleY:1.8289,rotation:-104.9995,guide:{path:[4.6,113.2,13.4,45.8,5.1,9.9,-4.9,-32.6,4.7,-65.3,14.2,-98.2,19.1,-138.6,23.3,-172.9,14.2,-195.5]},mode:"synched",loop:false},19,cjs.Ease.get(1)).wait(2));

	// Layer_4
	this.instance_2 = new lib.bubble_3("single",0);
	this.instance_2.setTransform(-1.5,-121.65,1.661,1.661,83.2312);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-1.4,regY:-2,scaleX:1.7092,scaleY:1.7092,rotation:87.399,x:3.6,y:-136.1},0).wait(1).to({scaleX:1.7509,scaleY:1.7509,rotation:91.011,x:5.4,y:-146.3},0).wait(1).to({scaleX:1.7862,scaleY:1.7862,rotation:94.0674,x:6.95,y:-154.9},0).wait(1).to({scaleX:1.8151,scaleY:1.8151,rotation:96.568,x:8.2,y:-161.9},0).wait(1).to({scaleX:1.8375,scaleY:1.8375,rotation:98.513,x:9.2,y:-167.4},0).wait(1).to({scaleX:1.8536,scaleY:1.8536,rotation:99.9023,x:9.85,y:-171.25},0).wait(1).to({scaleX:1.8632,scaleY:1.8632,rotation:100.7358,x:10.25,y:-173.6},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.8664,scaleY:1.8664,rotation:101.0137,x:6.2,y:-172.75,mode:"synched",loop:false},0).to({_off:true},6).wait(5).to({_off:false,regX:0,regY:0,scaleX:0.7166,scaleY:0.7166,rotation:0,x:7.05,y:112.5,mode:"single"},0).wait(1).to({regX:-1.4,regY:-2,scaleX:0.8343,scaleY:0.8343,rotation:10.3673,x:5.9,y:79.5},0).wait(1).to({scaleX:0.9456,scaleY:0.9456,rotation:20.1742,x:2.4,y:49.8},0).wait(1).to({scaleX:1.0506,scaleY:1.0506,rotation:29.4207,x:2,y:24},0).wait(1).to({scaleX:1.1492,scaleY:1.1492,rotation:38.1068,x:5.75,y:0.1},0).wait(1).to({scaleX:1.2415,scaleY:1.2415,rotation:46.2325,x:11.9,y:-22.7},0).wait(1).to({scaleX:1.3274,scaleY:1.3274,rotation:53.7978,x:11.5,y:-43.95},0).wait(1).to({scaleX:1.4069,scaleY:1.4069,rotation:60.8028,x:3.75,y:-63.7},0).wait(1).to({scaleX:1.4801,scaleY:1.4801,rotation:67.2473,x:-4.55,y:-80.2},0).wait(1).to({scaleX:1.5469,scaleY:1.5469,rotation:73.1314,x:-7.1,y:-95.95},0).wait(1).to({regX:0,regY:0,scaleX:1.6073,scaleY:1.6073,rotation:78.4552,y:-108.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-241.1,112.4,380.2);


(lib.BoilingBubble = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boiler("synched",0);
	this.instance.setTransform(7.85,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.6,y:-274.9},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-286.3,41.6,438);


(lib.BoilingBubbles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.BoilingBubble("synched",14);
	this.instance.setTransform(86.45,78.1,0.3717,0.3717,0,0,180);

	this.instance_1 = new lib.BoilingBubble("synched",14);
	this.instance_1.setTransform(0.75,-31.7,0.3717,0.3717,0,0,180);

	this.instance_2 = new lib.BoilingBubble("synched",14);
	this.instance_2.setTransform(-39.75,23.65,0.3717,0.3717,0,0,180);

	this.instance_3 = new lib.BoilingBubble("synched",14);
	this.instance_3.setTransform(-138.25,23.65,0.3717,0.3717,0,0,180);

	this.instance_4 = new lib.BoilingBubble("synched",14);
	this.instance_4.setTransform(-104.2,67.7,0.531,0.531,0,0,180,-0.1,-0.1);

	this.instance_5 = new lib.BoilingBubble("synched",14);
	this.instance_5.setTransform(-53.15,59.4,0.531,0.531,0,0,180,-0.1,-0.1);

	this.instance_6 = new lib.BoilingBubble("synched",14);
	this.instance_6.setTransform(57.05,2.85,0.531,0.531,0,0,180,-0.1,-0.1);

	this.instance_7 = new lib.BoilingBubble("synched",14);
	this.instance_7.setTransform(22.65,39.9,0.6638,0.6638,0,0,180,0,-0.1);

	this.instance_8 = new lib.BoilingBubble("synched",14);
	this.instance_8.setTransform(4.1,103.05,0.6638,0.6638,0,0,180,0,-0.1);

	this.instance_9 = new lib.BoilingBubble("synched",14);
	this.instance_9.setTransform(-141.6,-76.7,0.6638,0.6638,0,0,180,0,-0.1);

	this.instance_10 = new lib.BoilingBubble("synched",14);
	this.instance_10.setTransform(122.85,8.1,0.9869,0.9869,0,0,180);

	this.instance_11 = new lib.BoilingBubble("synched",14);
	this.instance_11.setTransform(96.75,-65.25,0.9869,0.9869,0,0,180);

	this.instance_12 = new lib.BoilingBubble("synched",14);
	this.instance_12.setTransform(-86.7,-16,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(60));

	// Layer_1
	this.instance_13 = new lib.BoilingBubble("synched",0);
	this.instance_13.setTransform(-90.65,39.1,0.3717,0.3717);

	this.instance_14 = new lib.BoilingBubble("synched",0);
	this.instance_14.setTransform(-4.95,-70.7,0.3717,0.3717);

	this.instance_15 = new lib.BoilingBubble("synched",0);
	this.instance_15.setTransform(35.55,-15.35,0.3717,0.3717);

	this.instance_16 = new lib.BoilingBubble("synched",0);
	this.instance_16.setTransform(134.05,-15.35,0.3717,0.3717);

	this.instance_17 = new lib.BoilingBubble("synched",0);
	this.instance_17.setTransform(100,28.7,0.531,0.531,0,0,0,-0.1,-0.1);

	this.instance_18 = new lib.BoilingBubble("synched",0);
	this.instance_18.setTransform(48.95,20.4,0.531,0.531,0,0,0,-0.1,-0.1);

	this.instance_19 = new lib.BoilingBubble("synched",0);
	this.instance_19.setTransform(-61.25,-36.15,0.531,0.531,0,0,0,-0.1,-0.1);

	this.instance_20 = new lib.BoilingBubble("synched",0);
	this.instance_20.setTransform(-26.85,0.9,0.6638,0.6638,0,0,0,0,-0.1);

	this.instance_21 = new lib.BoilingBubble("synched",0);
	this.instance_21.setTransform(-8.3,64.05,0.6638,0.6638,0,0,0,0,-0.1);

	this.instance_22 = new lib.BoilingBubble("synched",0);
	this.instance_22.setTransform(137.4,-115.7,0.6638,0.6638,0,0,0,0,-0.1);

	this.instance_23 = new lib.BoilingBubble("synched",0);
	this.instance_23.setTransform(-127.05,-30.9,0.9869,0.9869);

	this.instance_24 = new lib.BoilingBubble("synched",0);
	this.instance_24.setTransform(-100.95,-104.25,0.9869,0.9869);

	this.instance_25 = new lib.BoilingBubble("synched",0);
	this.instance_25.setTransform(82.5,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-386.7,310.8,590.5);


(lib.flask_root = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ph1:0,"0":13,ph2:14,ph3:24,ph4:34,ph5:44,ph6:54,ph7:64,ph8:74,ph9:84,ph10:94,ph11:104,ph12:114,ph13:124,ph14:134,ph15:144};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_13 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_14 = function() {
		this.play();
	}
	this.frame_23 = function() {
		this.gotoAndPlay(15);
	}
	this.frame_24 = function() {
		this.play();
	}
	this.frame_33 = function() {
		this.gotoAndPlay(25);
	}
	this.frame_34 = function() {
		this.play();
	}
	this.frame_43 = function() {
		this.gotoAndPlay(35);
	}
	this.frame_44 = function() {
		this.play();
	}
	this.frame_53 = function() {
		this.gotoAndPlay(45);
	}
	this.frame_54 = function() {
		this.play();
	}
	this.frame_63 = function() {
		this.gotoAndPlay(55);
	}
	this.frame_64 = function() {
		this.play();
	}
	this.frame_73 = function() {
		this.gotoAndPlay(65);
	}
	this.frame_74 = function() {
		this.play();
	}
	this.frame_83 = function() {
		this.gotoAndPlay(75);
	}
	this.frame_84 = function() {
		this.play();
	}
	this.frame_93 = function() {
		this.gotoAndPlay(85);
	}
	this.frame_94 = function() {
		this.play();
	}
	this.frame_103 = function() {
		this.gotoAndPlay(95);
	}
	this.frame_104 = function() {
		this.play();
	}
	this.frame_113 = function() {
		this.gotoAndPlay(105);
	}
	this.frame_114 = function() {
		this.play();
	}
	this.frame_123 = function() {
		this.gotoAndPlay(115);
	}
	this.frame_124 = function() {
		this.play();
	}
	this.frame_133 = function() {
		this.gotoAndPlay(125);
	}
	this.frame_134 = function() {
		this.play();
	}
	this.frame_143 = function() {
		this.gotoAndPlay(135);
	}
	this.frame_144 = function() {
		this.play();
	}
	this.frame_154 = function() {
		this.gotoAndPlay(145);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1).call(this.frame_14).wait(9).call(this.frame_23).wait(1).call(this.frame_24).wait(9).call(this.frame_33).wait(1).call(this.frame_34).wait(9).call(this.frame_43).wait(1).call(this.frame_44).wait(9).call(this.frame_53).wait(1).call(this.frame_54).wait(9).call(this.frame_63).wait(1).call(this.frame_64).wait(9).call(this.frame_73).wait(1).call(this.frame_74).wait(9).call(this.frame_83).wait(1).call(this.frame_84).wait(9).call(this.frame_93).wait(1).call(this.frame_94).wait(9).call(this.frame_103).wait(1).call(this.frame_104).wait(9).call(this.frame_113).wait(1).call(this.frame_114).wait(9).call(this.frame_123).wait(1).call(this.frame_124).wait(9).call(this.frame_133).wait(1).call(this.frame_134).wait(9).call(this.frame_143).wait(1).call(this.frame_144).wait(10).call(this.frame_154).wait(1));

	// bubbles
	this.instance = new lib.BoilingBubbles("synched",16);
	this.instance.setTransform(32.25,81,0.1069,0.1069,0,0,0,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// ph_colors
	this.instance_1 = new lib.CachedBmp_980();
	this.instance_1.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_2 = new lib.Bubbles("synched",16);
	this.instance_2.setTransform(31.75,17.65,0.1069,0.1069,0,0,0,1,0.5);

	this.instance_3 = new lib.CachedBmp_1039();
	this.instance_3.setTransform(0,14.45,0.1275,0.1275);

	this.instance_4 = new lib.CachedBmp_982();
	this.instance_4.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_5 = new lib.CachedBmp_984();
	this.instance_5.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_6 = new lib.CachedBmp_986();
	this.instance_6.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_7 = new lib.CachedBmp_988();
	this.instance_7.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_8 = new lib.CachedBmp_990();
	this.instance_8.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_9 = new lib.CachedBmp_992();
	this.instance_9.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_10 = new lib.CachedBmp_994();
	this.instance_10.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_11 = new lib.CachedBmp_996();
	this.instance_11.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_12 = new lib.CachedBmp_998();
	this.instance_12.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_13 = new lib.CachedBmp_1000();
	this.instance_13.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_14 = new lib.CachedBmp_1002();
	this.instance_14.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_15 = new lib.CachedBmp_1004();
	this.instance_15.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_16 = new lib.CachedBmp_1006();
	this.instance_16.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_17 = new lib.CachedBmp_1008();
	this.instance_17.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_18 = new lib.CachedBmp_1010();
	this.instance_18.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_19 = new lib.CachedBmp_1012();
	this.instance_19.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_20 = new lib.CachedBmp_1014();
	this.instance_20.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_21 = new lib.CachedBmp_1016();
	this.instance_21.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_22 = new lib.CachedBmp_1018();
	this.instance_22.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_23 = new lib.CachedBmp_1020();
	this.instance_23.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_24 = new lib.CachedBmp_1022();
	this.instance_24.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_25 = new lib.CachedBmp_1024();
	this.instance_25.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_26 = new lib.CachedBmp_1026();
	this.instance_26.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_27 = new lib.CachedBmp_1028();
	this.instance_27.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_28 = new lib.CachedBmp_1030();
	this.instance_28.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_29 = new lib.CachedBmp_1032();
	this.instance_29.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_30 = new lib.CachedBmp_1034();
	this.instance_30.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_31 = new lib.CachedBmp_1036();
	this.instance_31.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_32 = new lib.CachedBmp_1038();
	this.instance_32.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_33 = new lib.CachedBmp_1040();
	this.instance_33.setTransform(10.5,32.85,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:16}},{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:16}},{t:this.instance_4}]},13).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:20}},{t:this.instance_5}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:29}},{t:this.instance_6}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:25}},{t:this.instance_7}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:4}},{t:this.instance_8}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_9}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:9}},{t:this.instance_10}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:5}},{t:this.instance_11}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:14}},{t:this.instance_12}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:10}},{t:this.instance_13}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:19}},{t:this.instance_14}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:15}},{t:this.instance_15}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:24}},{t:this.instance_16}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:20}},{t:this.instance_17}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:29}},{t:this.instance_18}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:25}},{t:this.instance_19}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:4}},{t:this.instance_20}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_21}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:9}},{t:this.instance_22}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:5}},{t:this.instance_23}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:14}},{t:this.instance_24}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:10}},{t:this.instance_25}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:11}},{t:this.instance_26}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:19}},{t:this.instance_27}]},8).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:15}},{t:this.instance_28}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:24}},{t:this.instance_29}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:20}},{t:this.instance_30}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:29}},{t:this.instance_31}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:26}},{t:this.instance_32}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_33}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.1,97.7,165);


// stage content:
(lib.plus_slider = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var slider = root.slider;
		
		slider.snapping = true;
		slider.min = 0;
		slider.max = 10;
		slider.currentValue = 4.75;
		slider.steps = 100;
		slider.precision = 2; //to two decimal points
		slider.fontSizeRatio = 1.0;
		slider.scaleX = 1.0;
		
		root.start = function()
		{
			slider.textInput = dom_overlay_container.children["txt"];
			
			slider.keyUpHandler = function(e)
			{
				e.preventDefault();
				
				//add new pka value from text box by pressing enter/return
				if (e.keyCode === 13)
					slider.positionFromCurrentValue(slider.textInput.value);
					pka = slider.currentValue;
					root.pka.text = "pKa: " + Number(slider.currentValue).toFixed(2);		
			};
			
			slider.setFontSize = function(e)
			{
				slider.textInput.style.fontSize = Math.round(slider.hit.nominalBounds.height * slider.stage.scaleY * slider.fontSizeRatio) + "px";
			};
			
			slider.setSteps = function()
			{		
				for (var i = 0; i <= this.steps; i++)
				{
					var marker = new lib.SliderMarker();
					marker.txt.text = (i * ((this.max - this.min) / this.steps) + this.min).toFixed(this.precision);
					marker.x = i * (this.hit.nominalBounds.width / this.steps);
					//this.markers.addChild(marker);
				}
			};
			
			slider.positionFromCurrentValue = function(value)
			{
				if (isNaN(value))
					return;
				
				var hitWidth = this.hit.nominalBounds.width;
				var posX;
				
				this.currentValue = root.clamp(value, this.min, this.max);
			
				posX = root.clamp(((this.currentValue - this.min) / (this.max - this.min)) * hitWidth, 0, hitWidth)
				
				if (this.snapping)
				{
					var stepWidth = hitWidth / this.steps;
					this.button.x = root.clamp(stepWidth * Math.round(posX / stepWidth), 0, hitWidth);
				}			
				else
					this.button.x = posX;
				
				this.bar.scaleX = (this.button.x / hitWidth);
				this.textInput.value = this.currentValue.toFixed(this.precision);
			};
			
		
			//this needs to be adjusted when rescaling slider - don't factor entire stage - just 165 px 
			slider.positionFromMouseX = function()
			{
				var hitWidth = this.hit.nominalBounds.width;
				
				//var posX = (this.stage.mouseX / this.stage.scaleX) - this.x;
				
				var posX = this.stage.mouseX - 200; //getScaledValue()?;
					
				//console.log("size of slider: ", this.nominalBounds.width);
				
				if (this.snapping)
				{
					var stepWidth = hitWidth / this.steps;
					this.button.x = root.clamp(stepWidth * Math.round(posX / stepWidth), 0, hitWidth);
				}
			
				else
					this.button.x = root.clamp(posX, 0, hitWidth);
				
				this.bar.scaleX = (this.button.x / hitWidth);
				this.currentValue = (this.button.x / hitWidth) * (this.max - this.min) + this.min;
				this.textInput.value = this.currentValue.toFixed(this.precision);
			};
			
			slider.mouseDownHandler = function(e)
			{
				this.button.gotoAndStop(1);
				this.positionFromMouseX();		
				this.stage.stageMouseMove = this.stage.on("stagemousemove", this.stage.stageMouseMoveHandler);
				this.stage.stageMouseUp = this.stage.on("stagemouseup", this.stage.stageMouseUpHandler);
			};
		
			stage.stageMouseMoveHandler = function(e)
			{
				slider.positionFromMouseX();	
				pka = slider.currentValue;
				root.pka.text = "pKa: " + Number(slider.currentValue).toFixed(2);
			};
		
			stage.stageMouseUpHandler = function(e)
			{
				slider.button.gotoAndStop(0);
				
				this.off("stagemousemove", this.stageMouseMove);
				this.off("stagemouseup", this.stageMouseUp);
			};
			
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			stage.preventSelection = true;
			slider.setSteps();
			slider.positionFromCurrentValue(slider.currentValue);
			slider.button.mouseChildren = false;
			slider.hit.cursor = "default";
			slider.setFontSize();
			window.addEventListener("resize", slider.setFontSize);
			window.addEventListener("keyup", slider.keyUpHandler);
			slider.mouseDown = slider.on("mousedown", slider.mouseDownHandler);		
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			return value;
		};
				
		setTimeout(root.start, 0); //this delays the start time of the slider by n ms
		//plot titration curve for pka + log(OH/H) at a constant titration of 0.02.
		
		var _this = this;
		
		var constant_titration = 0.0002; //could be a button press that increments - titrating burrette
		var previous_titration = 0.000;
		var log_products = 0.0;
		var graph_resolution = 500.0; //why is this the limit?
		
		function storeCoordinate(xVal, yVal, array) {
			array.push({
				x: xVal,
				y: yVal
			});
		}
		
		
		function storeDict(xVal, yVal, dictionary) {
			dictionary.push({
				key: xVal,
				value: yVal
			});
		}
		
		
		function storeMap(xVal, yVal) {
			map1.set(Number(xVal).toFixed(), Number(yVal).toFixed());
		}
		
		
		//methods
		function getKa(pka) {
			return Math.pow(10, -pka);
		}
		
		function getpKa(ka) {
			return 1 / Math.LOG10E(ka)
		}
		
		function getpH(pka, oh, h) {
			var log_product = oh / h;
			return pka + Math.log10(log_product);
		}
		
		
		function removeCurve() {
			for (var i = _this.numChildren - 1; i >= 0; i--) {
				var child = _this.getChildAt(i)
				if (child.name == "curve") {
					_this.removeChild(child);
				}
			}
		}
		
		
		function drawCurve() {
		
			if (plot_flag) {
				removeCurve();
			}
			//base = document.getElementById("oh").value;
			//acid_moles = document.getElementById("h").value;
			//pka = document.getElementById("pka").value;
			var base = 0.0;
			var acid_moles = 0.1;
		
			pka = _this.slider.currentValue;
		
			for (let i = 0; i < graph_resolution; i++) {
		
				base += constant_titration; //column b
				acid_moles = 0.1 - previous_titration; //column a
		
				//compute ph
				var ph = getpH(pka, base, acid_moles);
				//console.log("current ph: " , ph);
		
				//avoid NaNs - show last pH in this case
				if (isNaN(ph)) ph = 0; //or last_ph but this tends to plot an erroneous point
		
				//create the curve shape object - set name so it can be cleared
				var titration_curve = new createjs.Shape().set({
					name: "curve"
				});
		
				//use a specific shape and color based on current computer ph
				//if (ph > 7) {
					titration_curve.graphics.beginFill("red").drawCircle(0, 0, 4);
				//} else {
				//	titration_curve.graphics.beginFill("red").drawRect(0, 0, 10, 10);
				//}
		
				_this.addChild(titration_curve);
		
		
				titration_curve.alpha = 0.5;
				titration_curve.x = 1020 + base * 10000; //10000 to account for base scaling
				titration_curve.y = 1350 - (getScaledValue(ph, 0, 14, 350, 1350)); //assuming 800 x 800 canvas for graph
		
				plot_flag = 1; //set flag to remove previous plot if you run again
		
				storeCoordinate(titration_curve.x, titration_curve.y, coords);
				storeDict(String(titration_curve.x), String(titration_curve.y), dict);
				storeMap(Number(titration_curve.x).toFixed(), Number(titration_curve.y).toFixed());
		
				//console.info(coords);
		
				previous_titration = base;
		
				//snap nodule to the last plotted point
				_this.nodule.setBounds(titration_curve.x, titration_curve.x, 40, 40);
				_this.nodule.x = titration_curve.x;
				_this.nodule.y = titration_curve.y;
				_this.x_marker.x = titration_curve.x;
				_this.x_marker.y = titration_curve.y;
				_this.y_marker.x = titration_curve.x;
				_this.y_marker.y = titration_curve.y;
				
				last_ph = ph;
		
			}
		}
		var _this = this;
		
		var ph_frame_number;
		
		this.nodule.addEventListener("pressmove", playBeaker);
		
		this.plot.addEventListener("click", drawCurve);
		
		//visible when ph == pka
		this.equalpopup.visible = false;
		
		//this.slider.addEventListener("pressmove", updatepKa);
		
		function updatepKa() {
			pka = _this.slider.currentValue;
		}
		
		function playBeaker() {
			_this.beaker.gotoAndPlay(framePicker());
		}
		
		function framePicker() {
			var num = getScaledValue(_this.x_marker.y, 350, 1350, 14, 1) - 1;
			num = num.toFixed();
			var ph_label_prefix = "ph"
			return ph_label_prefix.concat(num.toString());
		}
		
		
		
		//node currently updates text boxes
		stage.on('stagemousemove', function (e) {
		
			//always update pka value for this version
			_this.nodule.on("pressmove", function () {
				
				
				//the scaling is still off because pH != pKa EVER.
				
				if(last_ph == pka) {
					_this.equalpopup.visible = true;
				} else {
					_this.equalpopup.visible = false;
				}
			
				/*_this.nodule.x = coords[e.localX];
				_this.nodule.y = coords[e.localY];*/
				
				_this.pka.text = "pKa: " + Number(pka).toFixed(2);
			
				_this.ph.text = " pH: " + Number(getScaledValue(_this.x_marker.y, 350, 1350, 14, 0)).toFixed(2);
		
				//Snap pH text to node
				_this.ph.setTransform(_this.nodule.x, _this.nodule.y);
				
				_this.oh.text = "OH: " + Number(getScaledValue(_this.y_marker.x, 1020, 2020, 0, 1)).toFixed(2);
				
				//use the dashed red line to determine position for OH
				var scale_factor = Number(getScaledValue(_this.y_marker.x, 1020, 2020, 0, 1)).toFixed(2);		
				
				var inverse_scale_factor = 1 - scale_factor;
			
				//scale acid and akaline symbols or objects
				_this.acid_one.scaleX = Number(inverse_scale_factor);
				_this.acid_one.scaleY = Number(inverse_scale_factor);
				_this.akaline_one.scaleX = Number(scale_factor);
				_this.akaline_one.scaleY = Number(scale_factor);
		
				if (map1.has(Number(e.localX).toFixed())) {
					_this.nodule.x = Number(e.localX).toFixed();
					_this.nodule.y = map1.get(Number(e.localX).toFixed());
		
					//grid - uses mouse coordinates
					_this.x_marker.x = Number(e.localX).toFixed();
					_this.x_marker.y = map1.get(Number(e.localX).toFixed());
					_this.y_marker.x = Number(e.localX).toFixed();
					_this.y_marker.y = map1.get(Number(e.localX).toFixed());
		
				
		
				}
		
			});
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Draw_Curve
	this.text = new cjs.Text("Step 1:", "normal 700 38px 'Lato'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 390;
	this.text.parent = this;
	this.text.setTransform(163,580.4);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text);
	}

	this.text_1 = new cjs.Text("Modify the pKa value using the slider below and plot the titration curve  to see how pKa impacts how a pH value can change over the course of a titration experiment.", "normal 400 32px 'Lato'", "#666666");
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 490;
	this.text_1.parent = this;
	this.text_1.setTransform(163,660.15);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("This demo plots a titration curve of a base being added to a weak acid.", "normal 400 32px 'Lato'", "#666666");
	this.text_2.lineHeight = 37;
	this.text_2.lineWidth = 490;
	this.text_2.parent = this;
	this.text_2.setTransform(163,449.95);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("pKa and Weak Acid", "normal 700 44px 'Lato'");
	this.text_3.lineHeight = 51;
	this.text_3.lineWidth = 390;
	this.text_3.parent = this;
	this.text_3.setTransform(163,381.45);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_3);
	}

	this.instance = new lib.ph_scale();
	this.instance.setTransform(2700.9,1321.2);

	this.instance_1 = new lib.CachedBmp_978();
	this.instance_1.setTransform(1427.1,965.1,0.5,0.5);

	this.akaline_one = new lib.akaline("synched",0);
	this.akaline_one.name = "akaline_one";
	this.akaline_one.setTransform(1713.95,1737.5,1,1,0,0,0,70,70);

	this.acid_one = new lib.acid("synched",0);
	this.acid_one.name = "acid_one";
	this.acid_one.setTransform(1374.95,1739,1,1,0,0,0,70,70);

	this.equalpopup = new lib.phpkapopup("synched",0);
	this.equalpopup.name = "equalpopup";
	this.equalpopup.setTransform(1619.15,682.55,1,1,0,0,0,84.2,24.4);

	this.instance_2 = new lib.CachedBmp_977();
	this.instance_2.setTransform(835.95,761.1,0.5,0.5);

	this.oh = new cjs.Text("OH: ", "50px 'Verdana'", "#4A494A");
	this.oh.name = "oh";
	this.oh.lineHeight = 63;
	this.oh.lineWidth = 249;
	this.oh.parent = this;
	this.oh.setTransform(1405.8,1394);

	this.pka = new cjs.Text("pKa: ", "normal 700 31px 'Lato'");
	this.pka.name = "pka";
	this.pka.lineHeight = 37;
	this.pka.lineWidth = 259;
	this.pka.parent = this;
	this.pka.setTransform(163.05,895.3,1.0255,1);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.pka);
	}

	this.plot = new lib.plot();
	this.plot.name = "plot";
	this.plot.setTransform(213,1068,0.4384,0.4038,0,0,0,114,46);
	new cjs.ButtonHelper(this.plot, 0, 1, 1);

	this.slider = new lib.Slider();
	this.slider.name = "slider";
	this.slider.setTransform(382.05,974.9,0.9623,0.9056,0,0,0,217.2,-0.2);

	this.beaker = new lib.flask_root();
	this.beaker.name = "beaker";
	this.beaker.setTransform(2420.15,1069.15,3.9199,3.9192,0,0,0,49,78.6);

	this.ph = new cjs.Text("", "50px 'Verdana'", "#4A494A");
	this.ph.name = "ph";
	this.ph.lineHeight = 63;
	this.ph.lineWidth = 246;
	this.ph.parent = this;
	this.ph.setTransform(1118.8,1147.15);

	this.instance_3 = new lib.mask_x("synched",0);
	this.instance_3.setTransform(1606.3,1709.95,1,1.1746,0,0,0,714.1,298.1);

	this.instance_4 = new lib.mask_y("synched",0);
	this.instance_4.setTransform(519.05,941.15,1,1,0,0,0,492.1,710.1);

	this.x_marker = new lib.y_marker();
	this.x_marker.name = "x_marker";
	this.x_marker.setTransform(1084.65,1294.4,1,2.7854,0,0,0,0.1,0.1);
	this.x_marker.alpha = 0.4297;

	this.y_marker = new lib.x_marker();
	this.y_marker.name = "y_marker";
	this.y_marker.setTransform(1083.8,1294.2,2.1143,1,0,0,0,472.6,0.1);
	this.y_marker.alpha = 0.4297;

	this.instance_5 = new lib.CachedBmp_976();
	this.instance_5.setTransform(3.5,109.5,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(0.5,1,1).moveTo(-159,276.1).lineTo(-159,136.1).lineTo(-63,136.1).moveTo(-159,276.1).lineTo(-555.1,276.1).lineTo(-555.1,-434.1).lineTo(-63,-434.1).lineTo(-63,136.1).lineTo(555.1,136.1).lineTo(555.1,434.1).lineTo(-159,434.1).closePath();
	this.shape.setTransform(559.15,544.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.y_marker},{t:this.x_marker},{t:this.instance_4},{t:this.instance_3},{t:this.ph},{t:this.beaker},{t:this.slider},{t:this.plot},{t:this.pka},{t:this.oh},{t:this.instance_2},{t:this.equalpopup},{t:this.acid_one},{t:this.akaline_one},{t:this.instance_1},{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Node_Animation
	this.instance_6 = new lib.y_axis("synched",0);
	this.instance_6.setTransform(1520,1350,1.0002,1,0,0,0,499.9,0);

	this.instance_7 = new lib.x_axis("synched",0);
	this.instance_7.setTransform(1020.6,850,1,1,0,0,0,0.6,500);

	this.nodule = new lib.node("synched",0);
	this.nodule.name = "nodule";
	this.nodule.setTransform(1082.8,1294,3.9996,3.9996,0,0,0,6,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nodule},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1503,1109.1,1341.5,1173.8000000000002);
// library properties:
lib.properties = {
	id: 'B3C897D70ADC42149E183D9D099C24FD',
	width: 3000,
	height: 2000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_976.png?1651774725169", id:"CachedBmp_976"},
		{src:"images/fd_3e80f03755dbb1490fe273fec23bd613cac1c42084e72a74df3a009fIMAGEIMAGE.png?1651774725169", id:"fd_3e80f03755dbb1490fe273fec23bd613cac1c42084e72a74df3a009fIMAGEIMAGE"},
		{src:"images/plus_slider_atlas_1.png?1651774725114", id:"plus_slider_atlas_1"},
		{src:"images/plus_slider_atlas_2.png?1651774725115", id:"plus_slider_atlas_2"},
		{src:"images/plus_slider_atlas_3.png?1651774725115", id:"plus_slider_atlas_3"},
		{src:"images/plus_slider_atlas_4.png?1651774725115", id:"plus_slider_atlas_4"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1651774725169", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1651774725169", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1651774725169", id:"an.TextInput"}
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
an.compositions['B3C897D70ADC42149E183D9D099C24FD'] = {
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