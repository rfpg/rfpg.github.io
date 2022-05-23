(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"plus_slider_atlas_1", frames: [[0,0,766,1117],[768,0,766,1117]]},
		{name:"plus_slider_atlas_2", frames: [[768,0,594,605],[768,607,594,605],[0,1119,594,605],[596,1214,594,605],[1192,1214,594,605],[1364,0,594,605],[1364,607,594,605],[0,0,766,1117]]},
		{name:"plus_slider_atlas_3", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_4", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_5", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_6", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_7", frames: [[0,0,594,605],[0,607,594,605],[0,1214,594,605],[596,0,594,605],[1192,0,594,605],[596,607,594,605],[596,1214,594,605],[1192,607,594,605],[1192,1214,594,605]]},
		{name:"plus_slider_atlas_8", frames: [[1192,1408,268,137],[1462,1408,268,137],[1192,1214,464,192],[0,0,594,605],[596,0,594,605],[1192,0,594,605],[0,607,594,605],[596,607,594,605],[1192,607,594,605],[0,1214,594,605],[596,1214,594,605],[1658,1214,148,130],[1658,1346,6,45]]}
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



(lib.CachedBmp_632 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_631 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_630 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_628 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_629 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_626 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_624 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_622 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_620 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_618 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_616 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_614 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_612 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_610 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_608 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_606 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_604 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_602 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_600 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_598 = function() {
	this.initialize(ss["plus_slider_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_596 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_594 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_592 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_590 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_588 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_586 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_584 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_582 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_580 = function() {
	this.initialize(ss["plus_slider_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_578 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_576 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_574 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_573 = function() {
	this.initialize(ss["plus_slider_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_572 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_570 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_568 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_566 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_564 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_562 = function() {
	this.initialize(ss["plus_slider_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_560 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_558 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_556 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_554 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_552 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_550 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_548 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_546 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_544 = function() {
	this.initialize(ss["plus_slider_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_542 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_540 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_538 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_536 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_534 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_532 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_530 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_528 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_526 = function() {
	this.initialize(ss["plus_slider_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_524 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_522 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_520 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_518 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_516 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_514 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_512 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_510 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_625 = function() {
	this.initialize(ss["plus_slider_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_508 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_507 = function() {
	this.initialize(img.CachedBmp_507);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2223,1774);


(lib.Bitmap1 = function() {
	this.initialize(ss["plus_slider_atlas_8"]);
	this.gotoAndStop(12);
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
	this.shape.graphics.beginFill().beginStroke("#4A494A").setStrokeStyle(20,2,0,4).moveTo(0.6,-500).lineTo(0.4,-319.7).lineTo(-0.1,84.9).lineTo(-0.4,303.7).lineTo(-0.6,500);
	this.shape.setTransform(0.6249,500.0001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,21.3,1020);


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

	// Shape
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,15.3).lineTo(0,-15.3).lineTo(4.9,15.3).closePath();
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF0000").beginStroke().moveTo(-22,22).lineTo(-22,-22).lineTo(22,-22).lineTo(22,22).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.proton = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,7.3).lineTo(-4.5,0.2).lineTo(-11.7,0.2).lineTo(-11.7,7.3).lineTo(-13.7,7.3).lineTo(-13.7,-7.3).lineTo(-11.7,-7.3).lineTo(-11.7,-1.6).lineTo(-4.5,-1.6).lineTo(-4.5,-7.3).lineTo(-2.5,-7.3).lineTo(-2.5,7.3).closePath().moveTo(6.7,7).lineTo(6.7,1.7).lineTo(1.4,1.7).lineTo(1.4,0.1).lineTo(6.7,0.1).lineTo(6.7,-5.2).lineTo(8.4,-5.2).lineTo(8.4,0.1).lineTo(13.7,0.1).lineTo(13.7,1.7).lineTo(8.4,1.7).lineTo(8.4,7).closePath();
	this.shape.setTransform(0.475,0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#990000").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-4,0.8).lineTo(-4,7.9).lineTo(-2.1,7.9).lineTo(-2.1,-6.7).lineTo(-4,-6.7).lineTo(-4,-1).lineTo(-11.3,-1).lineTo(-11.3,-6.7).lineTo(-13.2,-6.7).lineTo(-13.2,7.9).lineTo(-11.3,7.9).lineTo(-11.3,0.8).closePath().moveTo(1.9,2.3).lineTo(7.2,2.3).lineTo(7.2,7.7).lineTo(8.8,7.7).lineTo(8.8,2.3).lineTo(14.1,2.3).lineTo(14.1,0.7).lineTo(8.8,0.7).lineTo(8.8,-4.6).lineTo(7.2,-4.6).lineTo(7.2,0.7).lineTo(1.9,0.7).closePath();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDFBFE").beginStroke().moveTo(-13.6,7.6).lineTo(-13.8,2.7).curveTo(-13.9,-2.1,-13.9,-7.2).lineTo(-12,-7.2).lineTo(-11.9,-1.8).lineTo(-9.9,-1.9).lineTo(-4.6,-2).lineTo(-4.4,-6.3).lineTo(-4.3,-7.6).lineTo(-2.3,-7.6).lineTo(-2.1,-1.3).lineTo(-2,7.1).lineTo(-3.4,7.1).curveTo(-3.9,3.9,-4,0.5).lineTo(-5.9,0.6).lineTo(-11.3,0.7).lineTo(-11.5,4.9).lineTo(-11.6,7.7).lineTo(-13.6,7.6).closePath().moveTo(6.6,7.4).lineTo(6.6,7.3).lineTo(6.3,2).lineTo(5.5,2).lineTo(0.9,1.7).lineTo(0.9,0.1).lineTo(6.2,-0.2).lineTo(6.5,-5.6).lineTo(8.2,-5.6).lineTo(8.6,-0.2).lineTo(9.4,-0.2).lineTo(13.9,0).lineTo(13.9,1.6).lineTo(13.8,1.6).lineTo(8.6,1.9).lineTo(8.6,2.9).lineTo(8.3,7.4).lineTo(6.6,7.4).closePath();
	this.shape_2.setTransform(7.075,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#990003").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-13.4,-6.6).curveTo(-13.5,-1.5,-13.3,3.3).lineTo(-13.2,8.2).lineTo(-11.2,8.3).lineTo(-11,5.5).lineTo(-10.8,1.3).lineTo(-5.4,1.2).lineTo(-3.5,1.1).curveTo(-3.4,4.5,-2.9,7.7).lineTo(-1.5,7.7).lineTo(-1.7,-0.7).lineTo(-1.8,-7).lineTo(-3.8,-7).lineTo(-3.9,-5.7).lineTo(-4.1,-1.4).lineTo(-9.5,-1.3).lineTo(-11.5,-1.2).lineTo(-11.6,-6.6).lineTo(-13.4,-6.6).closePath().moveTo(6.7,0.4).lineTo(1.4,0.7).lineTo(1.4,2.3).lineTo(5.9,2.6).lineTo(6.8,2.6).lineTo(7.1,7.9).lineTo(7.1,8).lineTo(8.8,8).lineTo(9.1,3.5).lineTo(9.1,2.5).lineTo(14.3,2.2).lineTo(14.4,2.2).lineTo(14.4,0.6).lineTo(9.9,0.4).lineTo(9.1,0.4).lineTo(8.7,-5).lineTo(7,-5).lineTo(6.7,0.4).closePath();
	this.shape_3.setTransform(6.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FCF6FD").beginStroke().moveTo(-13.6,8).lineTo(-13.9,3.1).curveTo(-14.2,-1.9,-14.2,-7).lineTo(-12.3,-7.2).curveTo(-12.3,-4.7,-12.2,-2.1).lineTo(-10.2,-2.2).lineTo(-4.7,-2.5).lineTo(-4.3,-6.6).lineTo(-4.3,-8).lineTo(-2.2,-8).lineTo(-1.7,-1.7).curveTo(-1.5,2.6,-1.5,6.9).lineTo(-2.8,7.1).curveTo(-3.3,3.9,-3.5,0.8).lineTo(-5.5,0.8).curveTo(-8.2,1,-11,1.1).lineTo(-11.4,5.3).lineTo(-11.5,8).lineTo(-13.6,8).closePath().moveTo(6.5,7.8).lineTo(5.8,2.4).lineTo(5,2.3).lineTo(0.4,1.8).lineTo(0.4,0.1).lineTo(0.4,0.1).lineTo(5.7,-0.5).lineTo(6.3,-5.9).lineTo(8.1,-6).lineTo(8.7,-0.7).lineTo(9.5,-0.5).lineTo(14.1,-0.1).lineTo(14.2,1.6).lineTo(14.1,1.6).lineTo(8.9,2.3).lineTo(8.7,3.2).lineTo(8.3,7.8).lineTo(6.5,7.8).closePath();
	this.shape_4.setTransform(13.7,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#990007").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-13.8,-6.4).curveTo(-13.7,-1.3,-13.4,3.7).lineTo(-13.2,8.6).lineTo(-11.1,8.6).lineTo(-10.9,5.9).lineTo(-10.5,1.7).curveTo(-7.8,1.6,-5.1,1.4).lineTo(-3.1,1.4).curveTo(-2.9,4.5,-2.4,7.7).lineTo(-1,7.5).curveTo(-1.1,3.2,-1.3,-1.1).lineTo(-1.7,-7.4).lineTo(-3.8,-7.4).lineTo(-3.9,-6).lineTo(-4.2,-1.9).lineTo(-9.7,-1.6).lineTo(-11.7,-1.5).curveTo(-11.8,-4.1,-11.8,-6.6).lineTo(-13.8,-6.4).closePath().moveTo(6.7,-5.3).lineTo(6.2,0.1).lineTo(0.9,0.7).lineTo(0.9,0.7).lineTo(0.9,2.4).lineTo(5.5,2.9).lineTo(6.3,3).lineTo(6.9,8.4).lineTo(8.7,8.4).lineTo(9.2,3.8).lineTo(9.3,2.9).lineTo(14.6,2.2).lineTo(14.6,2.2).lineTo(14.6,0.5).lineTo(10,0.1).lineTo(9.2,-0.1).lineTo(8.5,-5.4).lineTo(6.7,-5.3).closePath();
	this.shape_5.setTransform(13.25,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FAF2FC").beginStroke().moveTo(-13.6,8.3).lineTo(-14.1,3.4).curveTo(-14.4,-1.7,-14.5,-6.9).lineTo(-12.6,-7.1).lineTo(-12.4,-2.3).lineTo(-10.3,-2.5).curveTo(-7.6,-2.8,-4.7,-2.9).lineTo(-4.3,-7).lineTo(-4.1,-8.4).lineTo(-2,-8.3).lineTo(-1.3,-1.9).curveTo(-1,2.4,-0.9,6.8).lineTo(-2.2,6.9).curveTo(-2.8,4.1,-3,1.1).lineTo(-5,1.2).curveTo(-7.8,1.5,-10.7,1.6).lineTo(-11.1,5.7).lineTo(-11.5,8.4).lineTo(-13.6,8.3).closePath().moveTo(6.3,8.1).lineTo(5.4,2.8).lineTo(4.5,2.7).lineTo(-0.1,1.9).lineTo(-0.1,0.2).lineTo(-0.1,0.1).lineTo(5.3,-0.8).curveTo(5.6,-4.1,6.1,-6.3).lineTo(8,-6.4).curveTo(8.5,-3.9,8.9,-1).lineTo(9.8,-0.9).lineTo(14.4,-0.2).lineTo(14.4,1.6).lineTo(14.3,1.6).curveTo(11.9,2.1,9.1,2.5).lineTo(9,3.5).lineTo(8.2,8.1).lineTo(6.4,8.2).closePath();
	this.shape_6.setTransform(20.3,0.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#99000A").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-14,-6.3).curveTo(-14,-1.1,-13.6,4).lineTo(-13.1,8.8).lineTo(-11,8.9).lineTo(-10.7,6.3).lineTo(-10.2,2.2).curveTo(-7.3,2,-4.5,1.8).lineTo(-2.6,1.6).curveTo(-2.4,4.7,-1.8,7.5).lineTo(-0.5,7.4).curveTo(-0.5,2.9,-0.9,-1.4).lineTo(-1.6,-7.7).lineTo(-3.7,-7.8).lineTo(-3.8,-6.5).lineTo(-4.3,-2.3).curveTo(-7.1,-2.2,-9.9,-2).lineTo(-11.9,-1.7).lineTo(-12.1,-6.6).lineTo(-14,-6.3).closePath().moveTo(6.5,-5.8).curveTo(6.1,-3.6,5.7,-0.2).lineTo(0.3,0.7).lineTo(0.3,0.7).lineTo(0.3,2.5).lineTo(5,3.2).lineTo(5.9,3.3).lineTo(6.8,8.7).lineTo(6.9,8.7).lineTo(8.7,8.7).lineTo(9.5,4.1).lineTo(9.6,3.1).curveTo(12.3,2.7,14.8,2.2).lineTo(14.9,2.2).lineTo(14.9,0.4).lineTo(10.2,-0.4).lineTo(9.3,-0.5).curveTo(8.9,-3.3,8.4,-5.8).lineTo(6.5,-5.8).closePath();
	this.shape_7.setTransform(19.85,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F8EEFC").beginStroke().moveTo(-13.5,8.6).lineTo(-14.1,3.7).curveTo(-14.7,-1.4,-14.7,-6.8).lineTo(-12.9,-7.1).lineTo(-12.6,-2.6).lineTo(-10.5,-2.9).curveTo(-7.7,-3.2,-4.9,-3.3).lineTo(-4.2,-7.4).lineTo(-4,-8.7).lineTo(-1.9,-8.7).lineTo(-1,-2.3).lineTo(-0.6,1).lineTo(-0.6,0.6).lineTo(-0.6,0.1).curveTo(1.9,-0.6,4.8,-1.1).curveTo(5.3,-4.5,5.9,-6.7).lineTo(7.8,-6.8).curveTo(8.5,-4.3,9,-1.4).lineTo(9.9,-1.3).curveTo(12.4,-0.8,14.7,-0.3).lineTo(14.7,1.5).lineTo(14.6,1.6).curveTo(12.2,2.3,9.4,2.8).lineTo(9.2,3.8).curveTo(8.8,6.3,8.3,8.5).lineTo(6.3,8.5).lineTo(6.2,8.5).curveTo(5.5,6,5.1,3.1).lineTo(4.1,3).curveTo(1.6,2.5,-0.6,2).lineTo(-0.4,6.6).lineTo(-1.7,6.8).curveTo(-2.2,4.2,-2.6,1.3).lineTo(-4.6,1.6).curveTo(-7.4,1.9,-10.3,2).lineTo(-11,6.1).lineTo(-11.4,8.7).lineTo(-13.5,8.6).closePath();
	this.shape_8.setTransform(26.9,0.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#99000E").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-14.2,-6.2).curveTo(-14.3,-0.9,-13.7,4.2).lineTo(-13,9.2).lineTo(-11,9.3).lineTo(-10.5,6.7).lineTo(-9.8,2.6).curveTo(-6.9,2.5,-4.1,2.2).lineTo(-2.2,1.9).curveTo(-1.8,4.7,-1.3,7.4).lineTo(0,7.1).lineTo(-0.1,2.5).curveTo(2.1,3.1,4.6,3.5).lineTo(5.5,3.7).curveTo(6,6.6,6.7,9.1).lineTo(6.8,9.1).lineTo(8.7,9.1).curveTo(9.3,6.9,9.6,4.3).lineTo(9.8,3.3).curveTo(12.6,2.8,15,2.2).lineTo(15.1,2.1).lineTo(15.1,0.3).curveTo(12.9,-0.2,10.4,-0.7).lineTo(9.5,-0.8).curveTo(8.9,-3.8,8.3,-6.2).lineTo(6.3,-6.1).curveTo(5.7,-4,5.2,-0.5).curveTo(2.3,-0,-0.2,0.7).lineTo(-0.2,1.2).lineTo(-0.2,1.6).lineTo(-0.5,-1.7).lineTo(-1.4,-8.1).lineTo(-3.5,-8.2).lineTo(-3.8,-6.8).lineTo(-4.4,-2.8).curveTo(-7.3,-2.6,-10.1,-2.3).lineTo(-12.1,-2.1).lineTo(-12.4,-6.5).lineTo(-14.2,-6.2).closePath();
	this.shape_9.setTransform(26.45,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#F6E9FB").beginStroke().moveTo(-13.5,9).lineTo(-14.3,4).curveTo(-15,-1.2,-15,-6.7).lineTo(-13.2,-7).curveTo(-13.1,-5,-12.7,-2.9).lineTo(-10.7,-3.2).curveTo(-7.9,-3.5,-5,-3.8).lineTo(-4.1,-7.8).lineTo(-3.8,-9.1).lineTo(-1.7,-9).lineTo(-0.6,-2.6).lineTo(-0.3,-0.2).curveTo(1.8,-0.9,4.2,-1.4).curveTo(4.9,-4.9,5.6,-7.1).lineTo(7.6,-7.1).curveTo(8.5,-4.8,9.2,-1.7).lineTo(10.1,-1.6).curveTo(12.7,-1,14.9,-0.4).lineTo(15,1.5).lineTo(14.9,1.5).curveTo(12.5,2.4,9.6,3.1).lineTo(9.4,4.1).curveTo(8.9,6.7,8.2,8.8).lineTo(6.2,8.9).lineTo(6.1,8.8).curveTo(5.2,6.5,4.6,3.4).lineTo(3.7,3.3).lineTo(-0.1,2.4).lineTo(0.1,6.4).lineTo(-1.2,6.7).lineTo(-2.1,1.6).lineTo(-4.1,1.9).curveTo(-6.9,2.3,-9.9,2.5).curveTo(-10.3,4.6,-10.8,6.6).lineTo(-11.3,9.1).lineTo(-13.5,9).closePath();
	this.shape_10.setTransform(33.525,0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#990011").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-14.5,-6.1).curveTo(-14.5,-0.7,-13.8,4.6).lineTo(-13,9.5).lineTo(-10.8,9.6).lineTo(-10.3,7.1).curveTo(-9.8,5.1,-9.5,3.1).curveTo(-6.5,2.9,-3.6,2.4).lineTo(-1.6,2.2).lineTo(-0.7,7.3).lineTo(0.6,6.9).lineTo(0.4,3).lineTo(4.1,3.9).lineTo(5,4).curveTo(5.7,7,6.6,9.4).lineTo(6.6,9.4).lineTo(8.6,9.4).curveTo(9.3,7.3,9.9,4.7).lineTo(10.1,3.7).curveTo(12.9,3,15.4,2.1).lineTo(15.5,2.1).lineTo(15.4,0.2).curveTo(13.2,-0.5,10.6,-1.1).lineTo(9.6,-1.2).curveTo(9,-4.2,8.1,-6.6).lineTo(6.1,-6.6).curveTo(5.4,-4.3,4.7,-0.8).curveTo(2.3,-0.3,0.2,0.4).lineTo(-0.1,-2.1).lineTo(-1.2,-8.5).lineTo(-3.4,-8.6).lineTo(-3.6,-7.3).lineTo(-4.5,-3.2).curveTo(-7.4,-3,-10.3,-2.6).lineTo(-12.3,-2.3).curveTo(-12.6,-4.4,-12.7,-6.5).lineTo(-14.5,-6.1).closePath();
	this.shape_11.setTransform(33.05,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#F5E5FA").beginStroke().moveTo(-13.4,9.3).lineTo(-14.4,4.3).curveTo(-15.2,-0.9,-15.2,-6.5).lineTo(-13.5,-7).curveTo(-13.4,-5.1,-12.9,-3.1).lineTo(-10.9,-3.5).curveTo(-8,-3.9,-5.1,-4.1).lineTo(-4,-8.2).lineTo(-3.7,-9.4).lineTo(-1.5,-9.3).curveTo(-0.8,-6.3,-0.2,-2.9).lineTo(0.1,-0.6).curveTo(1.8,-1.2,3.7,-1.7).curveTo(4.6,-5.3,5.4,-7.5).lineTo(7.5,-7.6).curveTo(8.6,-5.2,9.4,-2.1).lineTo(10.3,-1.9).curveTo(13,-1.3,15.2,-0.5).lineTo(15.2,1.5).lineTo(15.1,1.5).curveTo(12.8,2.6,9.8,3.4).lineTo(9.6,4.4).curveTo(9,7.1,8.1,9.2).lineTo(6.1,9.3).lineTo(6,9.3).curveTo(5,6.9,4.2,3.8).lineTo(3.2,3.6).lineTo(0.5,2.9).lineTo(0.7,6.2).lineTo(-0.6,6.6).lineTo(-1.6,2.2).lineTo(-1.6,2.2).lineTo(-1.6,1.9).lineTo(-3.7,2.3).curveTo(-6.5,2.8,-9.5,3).lineTo(-10.5,7).lineTo(-11.2,9.4).lineTo(-13.4,9.3).closePath();
	this.shape_12.setTransform(40.125,0.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#990015").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-14.8,-5.9).curveTo(-14.8,-0.4,-14,4.8).lineTo(-13,9.8).lineTo(-10.8,10).lineTo(-10.1,7.6).lineTo(-9.1,3.5).curveTo(-6.1,3.3,-3.2,2.8).lineTo(-1.2,2.4).lineTo(-1.2,2.7).lineTo(-1.2,2.7).lineTo(-0.2,7.1).lineTo(1.1,6.8).lineTo(0.9,3.4).lineTo(3.7,4.1).lineTo(4.6,4.3).curveTo(5.4,7.4,6.5,9.8).lineTo(6.5,9.8).lineTo(8.5,9.7).curveTo(9.4,7.6,10,4.9).lineTo(10.3,3.9).curveTo(13.2,3.1,15.6,2.1).lineTo(15.6,2.1).lineTo(15.6,0.1).curveTo(13.4,-0.8,10.8,-1.4).lineTo(9.8,-1.6).curveTo(9,-4.7,7.9,-7).lineTo(5.8,-7).curveTo(5,-4.8,4.1,-1.2).curveTo(2.2,-0.7,0.6,-0.1).lineTo(0.3,-2.4).curveTo(-0.4,-5.8,-1.1,-8.8).lineTo(-3.3,-8.9).lineTo(-3.6,-7.7).lineTo(-4.7,-3.6).curveTo(-7.6,-3.4,-10.5,-3).lineTo(-12.5,-2.6).curveTo(-12.9,-4.5,-13.1,-6.5).lineTo(-14.8,-5.9).closePath();
	this.shape_13.setTransform(39.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#F3E1F9").beginStroke().moveTo(-13.3,9.7).curveTo(-13.9,7.3,-14.5,4.6).curveTo(-15.5,-0.7,-15.5,-6.4).lineTo(-13.8,-6.9).curveTo(-13.6,-5.2,-13.1,-3.4).lineTo(-11.1,-3.7).curveTo(-8.2,-4.3,-5.1,-4.6).curveTo(-4.6,-6.7,-4,-8.5).lineTo(-3.6,-9.8).lineTo(-1.3,-9.7).curveTo(-0.4,-6.7,0.2,-3.3).lineTo(0.6,-1.1).lineTo(3.3,-2).curveTo(4.3,-5.7,5.2,-7.9).lineTo(7.4,-8).curveTo(8.6,-5.6,9.5,-2.5).lineTo(10.5,-2.2).curveTo(13.2,-1.5,15.5,-0.6).lineTo(15.5,1.5).lineTo(15.4,1.6).curveTo(13.1,2.7,10.1,3.6).lineTo(9.8,4.7).curveTo(9.1,7.5,8.1,9.6).lineTo(5.9,9.7).lineTo(5.9,9.7).curveTo(4.7,7.3,3.8,4.2).lineTo(2.8,3.9).lineTo(1.1,3.4).lineTo(1.2,6.1).lineTo(0,6.4).lineTo(-1,2.7).lineTo(-1.6,2.5).lineTo(-1.8,2.4).lineTo(-3.2,2.6).curveTo(-6,3.2,-9.2,3.5).lineTo(-10.3,7.4).lineTo(-11.1,9.8).lineTo(-13.3,9.7).closePath();
	this.shape_14.setTransform(46.7,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#990018").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-15.1,-5.9).curveTo(-15.1,-0.2,-14.1,5.1).curveTo(-13.5,7.8,-12.9,10.2).lineTo(-10.7,10.3).lineTo(-9.9,7.9).lineTo(-8.8,4).curveTo(-5.6,3.7,-2.8,3.1).lineTo(-1.4,2.9).lineTo(-1.2,3).lineTo(-0.6,3.2).lineTo(0.4,6.9).lineTo(1.6,6.6).lineTo(1.5,3.9).lineTo(3.2,4.4).lineTo(4.2,4.7).curveTo(5.1,7.8,6.3,10.2).lineTo(6.3,10.2).lineTo(8.5,10.1).curveTo(9.5,8,10.2,5.2).lineTo(10.5,4.1).curveTo(13.5,3.2,15.8,2.1).lineTo(15.9,2).lineTo(15.9,-0.1).curveTo(13.6,-1,10.9,-1.7).lineTo(10,-2).curveTo(9,-5.1,7.8,-7.5).lineTo(5.6,-7.4).curveTo(4.7,-5.2,3.7,-1.5).lineTo(1,-0.6).lineTo(0.6,-2.8).curveTo(-0,-6.2,-0.9,-9.2).lineTo(-3.2,-9.3).lineTo(-3.5,-8).curveTo(-4.2,-6.2,-4.7,-4.1).curveTo(-7.8,-3.8,-10.7,-3.2).lineTo(-12.7,-2.9).curveTo(-13.2,-4.7,-13.4,-6.4).lineTo(-15.1,-5.9).closePath();
	this.shape_15.setTransform(46.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#F1DCF8").beginStroke().moveTo(-13.3,10).curveTo(-14,7.6,-14.6,4.9).curveTo(-15.8,-0.5,-15.8,-6.3).lineTo(-14,-6.9).curveTo(-13.8,-5.3,-13.3,-3.6).lineTo(-11.2,-4.1).curveTo(-8.3,-4.7,-5.2,-5).curveTo(-4.6,-7.1,-3.9,-9).lineTo(-3.4,-10.1).lineTo(-1.1,-10).curveTo(-0.2,-7.1,0.6,-3.6).lineTo(1,-1.7).lineTo(2.8,-2.4).curveTo(3.9,-6.1,5,-8.3).lineTo(7.3,-8.3).curveTo(8.7,-6.1,9.8,-2.9).lineTo(10.8,-2.7).curveTo(13.5,-1.8,15.7,-0.7).lineTo(15.7,1.5).lineTo(15.7,1.5).curveTo(13.5,2.9,10.3,3.9).lineTo(10.1,5.1).curveTo(9.2,7.8,8.1,9.9).lineTo(5.8,10).lineTo(5.8,10).curveTo(4.4,7.7,3.3,4.5).lineTo(2.3,4.3).lineTo(2.2,4.2).lineTo(1.7,4.1).lineTo(1.8,5.9).lineTo(0.5,6.3).lineTo(-0.4,3.3).lineTo(-1.2,2.9).lineTo(-1.7,2.7).lineTo(-2.7,2.9).curveTo(-5.7,3.6,-8.8,3.9).lineTo(-10.1,7.9).lineTo(-11,10.1).lineTo(-13.3,10).closePath();
	this.shape_16.setTransform(53.3,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#99001C").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-15.4,-5.8).curveTo(-15.4,0,-14.2,5.4).curveTo(-13.6,8.1,-12.9,10.5).lineTo(-10.6,10.6).lineTo(-9.7,8.4).lineTo(-8.4,4.4).curveTo(-5.3,4.1,-2.3,3.4).lineTo(-1.3,3.2).lineTo(-0.8,3.4).lineTo(0,3.8).lineTo(0.9,6.8).lineTo(2.2,6.4).lineTo(2.1,4.6).lineTo(2.6,4.7).lineTo(2.7,4.8).lineTo(3.7,5).curveTo(4.8,8.2,6.2,10.5).lineTo(6.2,10.5).lineTo(8.5,10.4).curveTo(9.6,8.3,10.5,5.6).lineTo(10.7,4.4).curveTo(13.9,3.4,16.1,2).lineTo(16.1,2).lineTo(16.1,-0.2).curveTo(13.9,-1.3,11.2,-2.2).lineTo(10.2,-2.4).curveTo(9.1,-5.6,7.7,-7.8).lineTo(5.4,-7.8).curveTo(4.3,-5.6,3.2,-1.9).lineTo(1.4,-1.2).lineTo(1,-3.1).curveTo(0.2,-6.6,-0.7,-9.5).lineTo(-3,-9.6).lineTo(-3.5,-8.5).curveTo(-4.2,-6.6,-4.8,-4.5).curveTo(-7.9,-4.2,-10.8,-3.6).lineTo(-12.9,-3.1).curveTo(-13.4,-4.8,-13.6,-6.4).lineTo(-15.4,-5.8).closePath();
	this.shape_17.setTransform(52.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#EFD8F7").beginStroke().moveTo(-13.3,10.3).curveTo(-14.1,8,-14.7,5.2).curveTo(-16,-0.2,-16,-6.1).lineTo(-14.3,-6.8).curveTo(-14.2,-5.4,-13.5,-3.9).lineTo(-11.4,-4.4).curveTo(-8.5,-5.1,-5.3,-5.4).curveTo(-4.6,-7.5,-3.8,-9.3).lineTo(-3.3,-10.5).lineTo(-1,-10.4).curveTo(0.1,-7.4,1,-3.9).lineTo(1.3,-2.3).lineTo(2.3,-2.6).curveTo(3.5,-6.5,4.8,-8.7).lineTo(7.1,-8.8).curveTo(8.7,-6.5,9.9,-3.3).lineTo(10.9,-3).curveTo(13.8,-2,15.9,-0.8).lineTo(16,1.4).lineTo(15.9,1.5).curveTo(13.7,3,10.6,4.2).lineTo(10.2,5.4).curveTo(9.3,8.2,8.1,10.3).lineTo(5.7,10.4).lineTo(5.7,10.4).curveTo(4.1,8.1,2.9,4.9).lineTo(2.2,4.7).lineTo(2.3,5.7).lineTo(1.1,6.2).lineTo(0.2,4).lineTo(-1.7,3.2).lineTo(-2.3,3.3).curveTo(-5.2,4,-8.4,4.4).curveTo(-9.1,6.4,-9.9,8.3).lineTo(-10.9,10.5).lineTo(-13.3,10.3).closePath();
	this.shape_18.setTransform(59.925,0.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#99001F").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-15.6,-5.7).curveTo(-15.6,0.3,-14.3,5.7).curveTo(-13.6,8.4,-12.9,10.8).lineTo(-10.5,11).lineTo(-9.5,8.7).curveTo(-8.7,6.9,-8,4.9).curveTo(-4.8,4.5,-1.8,3.8).lineTo(-1.3,3.7).lineTo(0.7,4.5).lineTo(1.5,6.7).lineTo(2.7,6.2).lineTo(2.7,5.2).lineTo(3.3,5.4).curveTo(4.6,8.6,6.1,10.9).lineTo(6.1,10.9).lineTo(8.5,10.8).curveTo(9.7,8.7,10.6,5.8).lineTo(11,4.7).curveTo(14.2,3.5,16.4,2).lineTo(16.5,1.9).lineTo(16.4,-0.3).curveTo(14.2,-1.5,11.3,-2.5).lineTo(10.3,-2.8).curveTo(9.1,-6.1,7.5,-8.3).lineTo(5.2,-8.2).curveTo(3.9,-6.1,2.7,-2.2).lineTo(1.8,-1.8).lineTo(1.4,-3.4).curveTo(0.6,-6.9,-0.5,-9.9).lineTo(-2.9,-10.1).lineTo(-3.3,-8.8).curveTo(-4.2,-7.1,-4.9,-5).curveTo(-8.1,-4.6,-11,-4).lineTo(-13.1,-3.4).curveTo(-13.8,-5,-13.9,-6.4).lineTo(-15.6,-5.7).closePath();
	this.shape_19.setTransform(59.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#EED4F6").beginStroke().moveTo(-13.2,10.7).curveTo(-14.1,8.3,-14.8,5.5).curveTo(-16.3,0.1,-16.3,-6).lineTo(-14.6,-6.8).curveTo(-14.4,-5.6,-13.7,-4.1).lineTo(-11.6,-4.7).curveTo(-8.6,-5.5,-5.4,-5.9).curveTo(-4.6,-8,-3.7,-9.8).lineTo(-3.2,-10.9).lineTo(-0.8,-10.7).curveTo(0.4,-7.8,1.4,-4.2).lineTo(1.7,-2.9).lineTo(1.8,-2.9).curveTo(3.2,-6.9,4.5,-9.1).lineTo(6.9,-9.2).curveTo(8.7,-7,10.1,-3.7).lineTo(11.1,-3.3).curveTo(14,-2.3,16.2,-0.9).lineTo(16.3,1.4).lineTo(16.2,1.4).curveTo(14,3.2,10.8,4.5).lineTo(10.4,5.7).curveTo(9.4,8.6,8,10.7).lineTo(5.6,10.8).lineTo(5.6,10.8).curveTo(3.9,8.7,2.6,5.6).lineTo(1.7,6.1).lineTo(1.1,4.8).curveTo(-0.4,4.2,-1.6,3.6).lineTo(-1.8,3.7).curveTo(-4.8,4.5,-8,4.8).curveTo(-8.8,6.9,-9.7,8.7).lineTo(-10.8,10.9).lineTo(-13.2,10.7).closePath();
	this.shape_20.setTransform(66.525,0.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#990023").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-15.9,-5.5).curveTo(-15.9,0.5,-14.5,6).curveTo(-13.7,8.8,-12.8,11.2).lineTo(-10.4,11.3).lineTo(-9.4,9.2).curveTo(-8.5,7.3,-7.7,5.3).curveTo(-4.5,5,-1.4,4.1).lineTo(-1.3,4.1).curveTo(0,4.7,1.4,5.2).lineTo(2.1,6.6).lineTo(3,6.1).curveTo(4.3,9.2,5.9,11.2).lineTo(6,11.2).lineTo(8.4,11.2).curveTo(9.7,9,10.8,6.1).lineTo(11.2,4.9).curveTo(14.4,3.6,16.6,1.9).lineTo(16.6,1.9).lineTo(16.6,-0.4).curveTo(14.4,-1.8,11.5,-2.9).lineTo(10.4,-3.2).curveTo(9.1,-6.5,7.3,-8.7).lineTo(4.9,-8.6).curveTo(3.5,-6.4,2.2,-2.4).lineTo(2.1,-2.4).lineTo(1.7,-3.8).curveTo(0.8,-7.3,-0.4,-10.3).lineTo(-2.8,-10.4).lineTo(-3.3,-9.3).curveTo(-4.3,-7.5,-5,-5.4).curveTo(-8.2,-5.1,-11.2,-4.2).lineTo(-13.3,-3.7).curveTo(-14.1,-5.1,-14.2,-6.3).lineTo(-15.9,-5.5).closePath();
	this.shape_21.setTransform(66.15,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#ECCFF5").beginStroke().moveTo(-13.1,11).curveTo(-14.1,8.6,-14.9,5.8).curveTo(-16.5,0.3,-16.5,-5.9).lineTo(-14.9,-6.7).curveTo(-14.7,-5.7,-13.9,-4.4).lineTo(-11.8,-5).curveTo(-8.7,-5.9,-5.5,-6.3).curveTo(-4.6,-8.4,-3.6,-10.2).lineTo(-3,-11.3).lineTo(-0.6,-11.1).curveTo(0.7,-8.1,1.8,-4.6).lineTo(1.8,-4.5).curveTo(3.1,-7.7,4.3,-9.5).lineTo(6.8,-9.5).curveTo(8.8,-7.4,10.2,-4.1).lineTo(11.3,-3.7).curveTo(14.3,-2.5,16.4,-1).lineTo(16.5,1.3).lineTo(16.5,1.4).curveTo(14.3,3.3,11.1,4.8).lineTo(10.6,6).curveTo(9.5,8.9,8,11.1).lineTo(5.5,11.2).lineTo(5.5,11.2).curveTo(3.6,9.1,2.2,6).lineTo(2.1,5.7).lineTo(1.4,5.4).lineTo(1,5.2).curveTo(-0.4,4.7,-1.6,4.1).curveTo(-4.5,4.9,-7.7,5.3).curveTo(-8.5,7.3,-9.5,9.1).lineTo(-10.7,11.2).lineTo(-13.1,11).closePath();
	this.shape_22.setTransform(73.125,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#990026").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-16.1,-5.4).curveTo(-16.2,0.8,-14.5,6.3).curveTo(-13.8,9.1,-12.7,11.4).lineTo(-10.4,11.7).lineTo(-9.1,9.5).curveTo(-8.2,7.8,-7.3,5.8).curveTo(-4.1,5.4,-1.3,4.5).curveTo(-0,5.2,1.4,5.7).lineTo(1.8,5.8).lineTo(2.4,6.1).lineTo(2.6,6.5).curveTo(4,9.6,5.8,11.6).lineTo(5.9,11.6).lineTo(8.4,11.5).curveTo(9.9,9.4,11,6.5).lineTo(11.5,5.2).curveTo(14.7,3.8,16.9,1.9).lineTo(16.9,1.8).lineTo(16.8,-0.5).curveTo(14.6,-2,11.7,-3.2).lineTo(10.6,-3.6).curveTo(9.2,-7,7.2,-9.1).lineTo(4.7,-9).curveTo(3.4,-7.2,2.1,-4.1).lineTo(2.1,-4.1).curveTo(1.1,-7.7,-0.2,-10.6).lineTo(-2.6,-10.8).lineTo(-3.3,-9.7).curveTo(-4.3,-7.9,-5.2,-5.9).curveTo(-8.3,-5.5,-11.4,-4.6).lineTo(-13.5,-4).curveTo(-14.3,-5.2,-14.5,-6.2).lineTo(-16.1,-5.4).closePath();
	this.shape_23.setTransform(72.75,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#EACBF5").beginStroke().moveTo(-13.1,11.3).curveTo(-14.2,9,-15,6.1).curveTo(-16.8,0.6,-16.8,-5.8).lineTo(-15.2,-6.7).curveTo(-15,-5.8,-14.1,-4.7).lineTo(-12,-5.4).curveTo(-8.9,-6.3,-5.7,-6.8).curveTo(-4.7,-8.8,-3.6,-10.5).lineTo(-3,-11.6).lineTo(-0.5,-11.4).curveTo(0.8,-9,1.8,-5.9).curveTo(3,-8.4,4.1,-9.8).lineTo(6.7,-10).curveTo(8.8,-7.9,10.4,-4.4).lineTo(11.4,-4).curveTo(14.6,-2.8,16.6,-1.1).lineTo(16.8,1.3).lineTo(16.7,1.4).curveTo(14.6,3.5,11.3,5).lineTo(10.9,6.2).curveTo(9.6,9.3,7.9,11.4).curveTo(6.7,11.5,5.4,11.5).lineTo(5.4,11.5).curveTo(3.2,9.4,1.6,5.9).lineTo(0.5,5.6).lineTo(-1.1,4.8).lineTo(-1.6,4.6).curveTo(-4.4,5.4,-7.3,5.8).curveTo(-8.3,7.8,-9.4,9.5).lineTo(-10.7,11.6).lineTo(-13.1,11.3).closePath();
	this.shape_24.setTransform(79.75,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#990029").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-16.4,-5.3).curveTo(-16.4,1,-14.6,6.6).curveTo(-13.8,9.4,-12.7,11.8).lineTo(-10.3,12.1).lineTo(-9,10).curveTo(-7.9,8.2,-6.9,6.2).curveTo(-4,5.8,-1.2,5).lineTo(-0.7,5.3).lineTo(0.9,6).lineTo(2,6.4).curveTo(3.6,9.9,5.8,12).lineTo(5.8,12).curveTo(7.1,12,8.3,11.9).curveTo(10,9.8,11.3,6.7).lineTo(11.7,5.5).curveTo(15,3.9,17.1,1.9).lineTo(17.2,1.7).lineTo(17,-0.6).curveTo(15,-2.3,11.8,-3.5).lineTo(10.8,-4).curveTo(9.2,-7.4,7.1,-9.5).lineTo(4.5,-9.4).curveTo(3.4,-7.9,2.2,-5.5).curveTo(1.2,-8.5,-0.1,-11).lineTo(-2.6,-11.2).lineTo(-3.2,-10.1).curveTo(-4.3,-8.4,-5.3,-6.3).curveTo(-8.5,-5.9,-11.6,-5).lineTo(-13.7,-4.2).curveTo(-14.6,-5.4,-14.8,-6.2).lineTo(-16.4,-5.3).closePath();
	this.shape_25.setTransform(79.35,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#E9C7F4").beginStroke().moveTo(-13.1,11.7).curveTo(-14.2,9.3,-15.2,6.5).curveTo(-17.1,0.8,-17.1,-5.6).lineTo(-15.4,-6.6).curveTo(-15.3,-5.9,-14.3,-4.9).lineTo(-12.2,-5.7).curveTo(-9,-6.7,-5.7,-7.2).curveTo(-4.7,-9.2,-3.5,-10.9).lineTo(-2.8,-12).lineTo(-0.2,-11.8).curveTo(0.9,-9.7,1.8,-7.2).curveTo(2.9,-9,3.9,-10.2).curveTo(5.2,-10.4,6.5,-10.4).curveTo(8.8,-8.3,10.6,-4.8).lineTo(11.7,-4.4).curveTo(14.8,-3,16.9,-1.2).curveTo(17,0,17.1,1.3).lineTo(17,1.4).curveTo(14.9,3.6,11.6,5.3).lineTo(11,6.6).curveTo(9.7,9.7,7.9,11.8).curveTo(6.6,11.9,5.3,11.9).lineTo(5.3,11.9).curveTo(2.9,9.8,1.2,6.3).lineTo(0.1,5.9).lineTo(-0,5.8).lineTo(-1,5.4).lineTo(-1.6,5.1).curveTo(-4.2,5.9,-7,6.2).curveTo(-8,8.3,-9.1,9.9).lineTo(-10.6,12).lineTo(-13.1,11.7).closePath();
	this.shape_26.setTransform(86.35,0.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#99002D").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-16.7,-5.2).curveTo(-16.7,1.2,-14.8,6.9).curveTo(-13.8,9.8,-12.7,12.1).lineTo(-10.2,12.4).lineTo(-8.8,10.3).curveTo(-7.6,8.7,-6.6,6.7).curveTo(-3.8,6.3,-1.2,5.5).lineTo(-0.7,5.8).lineTo(0.3,6.2).lineTo(0.5,6.3).lineTo(1.6,6.8).curveTo(3.3,10.3,5.6,12.3).lineTo(5.6,12.3).curveTo(7,12.4,8.2,12.2).curveTo(10.1,10.1,11.4,7).lineTo(11.9,5.8).curveTo(15.3,4.1,17.3,1.8).lineTo(17.4,1.7).curveTo(17.4,0.5,17.2,-0.7).curveTo(15.2,-2.6,12,-4).lineTo(10.9,-4.3).curveTo(9.2,-7.9,6.9,-10).curveTo(5.6,-10,4.3,-9.8).curveTo(3.2,-8.6,2.2,-6.8).curveTo(1.2,-9.3,0.1,-11.3).lineTo(-2.5,-11.5).lineTo(-3.1,-10.5).curveTo(-4.4,-8.8,-5.4,-6.8).curveTo(-8.7,-6.3,-11.8,-5.2).lineTo(-14,-4.5).curveTo(-14.9,-5.4,-15.1,-6.2).lineTo(-16.7,-5.2).closePath();
	this.shape_27.setTransform(86,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#E7C2F3").beginStroke().moveTo(-13,12).curveTo(-14.2,9.7,-15.3,6.8).curveTo(-17.3,1,-17.3,-5.5).lineTo(-15.7,-6.6).curveTo(-15.5,-6,-14.6,-5.2).lineTo(-12.3,-6).curveTo(-9.2,-7.1,-5.8,-7.6).curveTo(-4.7,-9.7,-3.4,-11.3).lineTo(-2.7,-12.3).lineTo(-0.1,-12.1).curveTo(1,-10.3,1.9,-8.2).curveTo(2.8,-9.7,3.6,-10.6).curveTo(5,-10.8,6.3,-10.8).curveTo(8.9,-8.8,10.7,-5.2).lineTo(11.8,-4.7).curveTo(15.1,-3.2,17.1,-1.3).lineTo(17.3,1.2).lineTo(17.2,1.3).curveTo(15.2,3.8,11.8,5.6).lineTo(11.3,6.9).curveTo(9.8,10.1,7.9,12.1).curveTo(6.6,12.3,5.2,12.3).lineTo(5.1,12.3).curveTo(2.6,10.2,0.8,6.7).lineTo(-0.3,6.2).lineTo(-1.6,5.6).curveTo(-4,6.3,-6.5,6.7).curveTo(-7.7,8.7,-9,10.3).lineTo(-10.5,12.3).lineTo(-13,12).closePath();
	this.shape_28.setTransform(92.95,0.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#990030").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-16.9,-5).curveTo(-17,1.5,-14.9,7.2).curveTo(-13.9,10.1,-12.7,12.4).lineTo(-10.2,12.8).lineTo(-8.6,10.7).curveTo(-7.3,9.1,-6.2,7.1).curveTo(-3.7,6.7,-1.3,6).lineTo(0,6.6).lineTo(1.2,7.1).curveTo(3,10.7,5.5,12.7).lineTo(5.6,12.7).curveTo(7,12.7,8.3,12.5).curveTo(10.2,10.5,11.6,7.3).lineTo(12.2,6).curveTo(15.6,4.2,17.6,1.7).lineTo(17.7,1.6).lineTo(17.5,-0.9).curveTo(15.4,-2.8,12.2,-4.3).lineTo(11.1,-4.8).curveTo(9.3,-8.3,6.7,-10.4).curveTo(5.3,-10.3,4,-10.2).curveTo(3.1,-9.2,2.3,-7.8).curveTo(1.3,-9.9,0.3,-11.7).lineTo(-2.3,-11.9).lineTo(-3.1,-10.9).curveTo(-4.4,-9.3,-5.5,-7.2).curveTo(-8.9,-6.7,-12,-5.6).lineTo(-14.2,-4.8).curveTo(-15.2,-5.6,-15.4,-6.1).lineTo(-16.9,-5).closePath();
	this.shape_29.setTransform(92.6,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#E5BEF2").beginStroke().moveTo(5,12.7).curveTo(2.3,10.6,0.4,7.1).lineTo(-0.8,6.5).lineTo(-1.3,6.4).lineTo(-1.7,6.1).curveTo(-3.9,6.8,-6.2,7.2).curveTo(-7.4,9.1,-8.8,10.8).lineTo(-10.4,12.7).lineTo(-13,12.4).curveTo(-14.3,10,-15.4,7.1).curveTo(-17.6,1.3,-17.6,-5.4).lineTo(-16.1,-6.5).curveTo(-15.8,-6.2,-14.7,-5.4).lineTo(-12.5,-6.3).curveTo(-9.4,-7.5,-5.9,-8.1).curveTo(-4.7,-10.1,-3.4,-11.7).lineTo(-2.5,-12.7).lineTo(0.1,-12.5).curveTo(1,-11,1.9,-9.1).lineTo(3.2,-10.7).lineTo(3.4,-11).curveTo(4.8,-11.1,6.2,-11.1).curveTo(8.9,-9.2,10.9,-5.5).lineTo(12,-5.1).curveTo(15.3,-3.4,17.4,-1.4).lineTo(17.6,1.2).lineTo(17.5,1.3).curveTo(15.5,4,12,5.9).lineTo(11.4,7.2).curveTo(9.9,10.5,7.8,12.5).lineTo(5.1,12.7).lineTo(5,12.7).closePath();
	this.shape_30.setTransform(99.575,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#990034").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-0.9,6.8).lineTo(-0.5,6.9).lineTo(0.8,7.5).curveTo(2.7,11,5.4,13.1).lineTo(5.5,13.1).lineTo(8.2,12.9).curveTo(10.3,10.9,11.8,7.6).lineTo(12.4,6.3).curveTo(15.9,4.4,17.9,1.7).lineTo(18,1.6).lineTo(17.8,-1).curveTo(15.7,-3,12.4,-4.7).lineTo(11.2,-5.1).curveTo(9.3,-8.8,6.6,-10.7).curveTo(5.2,-10.7,3.8,-10.6).lineTo(3.6,-10.3).lineTo(2.3,-8.7).curveTo(1.4,-10.6,0.4,-12.1).lineTo(-2.2,-12.3).lineTo(-3,-11.3).curveTo(-4.4,-9.7,-5.5,-7.7).curveTo(-9,-7.1,-12.2,-5.9).lineTo(-14.3,-5).curveTo(-15.5,-5.8,-15.7,-6.1).lineTo(-17.2,-5).curveTo(-17.2,1.7,-15,7.5).curveTo(-13.9,10.4,-12.6,12.8).lineTo(-10,13.1).lineTo(-8.4,11.2).curveTo(-7,9.5,-5.9,7.6).curveTo(-3.5,7.2,-1.3,6.5).lineTo(-0.9,6.8).closePath();
	this.shape_31.setTransform(99.2,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#E3BAF1").beginStroke().moveTo(4.9,13).curveTo(2.1,11,-0.1,7.4).lineTo(-1.3,6.9).lineTo(-1.7,6.6).curveTo(-3.7,7.2,-5.8,7.6).curveTo(-7.1,9.6,-8.6,11.2).lineTo(-10.3,13).lineTo(-12.9,12.7).curveTo(-14.4,10.3,-15.5,7.4).curveTo(-17.8,1.5,-17.8,-5.3).lineTo(-16.3,-6.5).curveTo(-16.1,-6.3,-14.9,-5.7).lineTo(-12.7,-6.6).curveTo(-9.5,-7.9,-6,-8.5).curveTo(-4.8,-10.5,-3.3,-12.1).lineTo(-2.4,-13.1).lineTo(0.2,-12.8).curveTo(1.1,-11.5,2,-10).lineTo(3.2,-11.4).curveTo(4.6,-11.6,6.1,-11.6).curveTo(8.9,-9.6,11.1,-6).lineTo(12.2,-5.4).curveTo(15.6,-3.7,17.7,-1.5).curveTo(17.8,-0.2,17.8,1.1).lineTo(17.7,1.3).curveTo(15.8,4,12.3,6.2).lineTo(11.6,7.5).curveTo(10,10.8,7.8,12.8).curveTo(6.4,13,5,13).lineTo(4.9,13).closePath();
	this.shape_32.setTransform(106.175,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#990037").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-0.9,7.3).lineTo(0.3,7.8).curveTo(2.4,11.4,5.3,13.4).lineTo(5.4,13.4).curveTo(6.8,13.4,8.1,13.2).curveTo(10.4,11.2,12,7.9).lineTo(12.6,6.6).curveTo(16.2,4.4,18.1,1.7).lineTo(18.2,1.5).curveTo(18.2,0.2,18,-1.1).curveTo(16,-3.3,12.6,-5).lineTo(11.5,-5.6).curveTo(9.3,-9.2,6.4,-11.2).curveTo(5,-11.2,3.6,-11).lineTo(2.3,-9.6).curveTo(1.5,-11.1,0.6,-12.4).lineTo(-2,-12.7).lineTo(-2.9,-11.7).curveTo(-4.4,-10.1,-5.6,-8.1).curveTo(-9.2,-7.5,-12.3,-6.2).lineTo(-14.5,-5.3).curveTo(-15.7,-5.9,-16,-6.1).lineTo(-17.4,-4.9).curveTo(-17.4,1.9,-15.2,7.8).curveTo(-14,10.7,-12.6,13.1).lineTo(-10,13.4).lineTo(-8.2,11.6).curveTo(-6.7,10,-5.5,8).curveTo(-3.3,7.6,-1.3,7).lineTo(-0.9,7.3).closePath();
	this.shape_33.setTransform(105.8,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#E2B6F0").beginStroke().moveTo(4.8,13.4).curveTo(1.8,11.5,-0.5,7.8).lineTo(-1.2,7.4).lineTo(-1.7,7.2).curveTo(-3.5,7.7,-5.5,8.1).curveTo(-6.8,10.1,-8.4,11.6).lineTo(-10.2,13.4).lineTo(-12.9,13).curveTo(-14.4,10.7,-15.6,7.7).curveTo(-18.1,1.8,-18.1,-5.1).lineTo(-16.6,-6.4).lineTo(-15.1,-5.9).lineTo(-12.9,-7).curveTo(-9.6,-8.3,-6.1,-8.9).curveTo(-4.8,-10.9,-3.2,-12.5).lineTo(-2.3,-13.4).lineTo(0.4,-13.2).lineTo(2,-10.8).lineTo(3,-11.8).curveTo(4.4,-12,5.9,-12).curveTo(9,-10.1,11.2,-6.3).lineTo(12.4,-5.7).curveTo(15.8,-3.9,17.9,-1.6).curveTo(18.1,-0.3,18.1,1.1).lineTo(18,1.3).curveTo(16.2,4.2,12.5,6.4).lineTo(11.9,7.8).curveTo(10.1,11.2,7.8,13.2).curveTo(6.4,13.4,4.9,13.4).lineTo(4.8,13.4).closePath();
	this.shape_34.setTransform(112.775,0.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#99003B").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-0.9,7.8).lineTo(-0.1,8.2).curveTo(2.1,11.9,5.1,13.8).lineTo(5.2,13.8).curveTo(6.7,13.8,8.1,13.6).curveTo(10.4,11.6,12.2,8.2).lineTo(12.8,6.8).curveTo(16.5,4.6,18.3,1.6).lineTo(18.4,1.5).curveTo(18.4,0.1,18.2,-1.3).curveTo(16.2,-3.6,12.7,-5.3).lineTo(11.6,-5.9).curveTo(9.3,-9.7,6.3,-11.6).curveTo(4.8,-11.6,3.4,-11.4).lineTo(2.3,-10.4).lineTo(0.8,-12.8).lineTo(-1.9,-13.1).lineTo(-2.8,-12.1).curveTo(-4.4,-10.5,-5.8,-8.6).curveTo(-9.3,-7.9,-12.5,-6.6).lineTo(-14.8,-5.6).lineTo(-16.3,-6).lineTo(-17.8,-4.8).curveTo(-17.7,2.2,-15.3,8.1).curveTo(-14.1,11.1,-12.5,13.4).lineTo(-9.9,13.8).lineTo(-8,12).curveTo(-6.5,10.4,-5.2,8.5).curveTo(-3.2,8.1,-1.3,7.6).lineTo(-0.9,7.8).closePath();
	this.shape_35.setTransform(112.45,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#E0B1EF").beginStroke().moveTo(4.7,13.8).curveTo(1.5,11.9,-0.8,8.1).lineTo(-1.3,7.9).lineTo(-1.7,7.7).curveTo(-3.3,8.2,-5.1,8.5).curveTo(-6.5,10.5,-8.1,12).lineTo(-10.1,13.7).lineTo(-12.8,13.3).curveTo(-14.4,11,-15.8,8).curveTo(-18.4,2,-18.4,-5).lineTo(-16.9,-6.4).curveTo(-16.5,-6.5,-15.3,-6.2).lineTo(-13,-7.3).curveTo(-9.7,-8.7,-6.2,-9.3).curveTo(-4.8,-11.4,-3.1,-12.9).lineTo(-2.1,-13.8).curveTo(-0.7,-13.7,0.6,-13.5).lineTo(2.1,-11.5).lineTo(2.8,-12.2).curveTo(4.3,-12.4,5.8,-12.4).curveTo(9.1,-10.5,11.4,-6.7).lineTo(12.7,-6.1).curveTo(16.1,-4.2,18.2,-1.7).curveTo(18.3,-0.3,18.3,1.1).lineTo(18.3,1.2).curveTo(16.5,4.4,12.8,6.7).lineTo(12.1,8.1).curveTo(10.2,11.5,7.7,13.6).curveTo(6.4,13.8,4.8,13.8).lineTo(4.7,13.8).closePath();
	this.shape_36.setTransform(119.35,0.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#99003E").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1,8.3).lineTo(-0.5,8.5).curveTo(1.8,12.3,5,14.1).lineTo(5.1,14.1).curveTo(6.7,14.1,8,13.9).curveTo(10.5,11.9,12.4,8.5).lineTo(13.1,7.1).curveTo(16.8,4.7,18.6,1.6).lineTo(18.6,1.5).curveTo(18.6,0.1,18.5,-1.4).curveTo(16.4,-3.8,13,-5.8).lineTo(11.7,-6.4).curveTo(9.4,-10.1,6.1,-12).curveTo(4.6,-12,3.1,-11.9).lineTo(2.4,-11.2).lineTo(0.9,-13.1).curveTo(-0.4,-13.3,-1.8,-13.4).lineTo(-2.8,-12.5).curveTo(-4.5,-11,-5.9,-8.9).curveTo(-9.4,-8.4,-12.7,-6.9).lineTo(-15,-5.9).curveTo(-16.2,-6.1,-16.6,-6).lineTo(-18.1,-4.6).curveTo(-18.1,2.4,-15.5,8.4).curveTo(-14.1,11.4,-12.5,13.7).lineTo(-9.8,14.1).lineTo(-7.8,12.4).curveTo(-6.2,10.9,-4.8,8.9).curveTo(-3,8.6,-1.4,8.1).lineTo(-1,8.3).closePath();
	this.shape_37.setTransform(119.05,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#DEADEF").beginStroke().moveTo(4.6,14.1).curveTo(1.2,12.3,-1.3,8.4).lineTo(-1.7,8.2).curveTo(-3.2,8.7,-4.7,9).curveTo(-6.2,11,-7.9,12.4).curveTo(-9,13.4,-10.1,14.1).lineTo(-12.8,13.7).curveTo(-14.5,11.4,-15.9,8.3).curveTo(-18.6,2.3,-18.6,-4.9).lineTo(-17.2,-6.3).curveTo(-16.9,-6.6,-15.5,-6.5).lineTo(-13.2,-7.6).curveTo(-9.9,-9.1,-6.3,-9.8).curveTo(-4.8,-11.8,-3,-13.3).lineTo(-2,-14.2).lineTo(0.8,-13.9).lineTo(2.1,-12.2).lineTo(2.6,-12.6).curveTo(4.1,-12.8,5.7,-12.8).curveTo(9.1,-11,11.6,-7.1).lineTo(12.8,-6.5).curveTo(16.4,-4.5,18.4,-1.8).lineTo(18.6,1.1).lineTo(18.5,1.2).curveTo(16.8,4.5,13,7).lineTo(12.3,8.4).curveTo(10.3,11.9,7.7,13.9).curveTo(6.2,14.1,4.7,14.2).lineTo(4.6,14.1).closePath();
	this.shape_38.setTransform(125.975,0.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#990042").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1,8.8).curveTo(1.5,12.7,4.9,14.5).lineTo(5,14.6).curveTo(6.5,14.5,8.1,14.3).curveTo(10.6,12.3,12.6,8.7).lineTo(13.3,7.4).curveTo(17.1,4.9,18.9,1.5).lineTo(19,1.4).lineTo(18.7,-1.4).curveTo(16.7,-4.1,13.1,-6.1).lineTo(11.9,-6.8).curveTo(9.4,-10.6,6,-12.4).curveTo(4.4,-12.4,2.9,-12.2).lineTo(2.4,-11.8).lineTo(1.1,-13.6).lineTo(-1.6,-13.8).lineTo(-2.7,-12.9).curveTo(-4.4,-11.5,-6,-9.4).curveTo(-9.6,-8.8,-12.9,-7.3).lineTo(-15.2,-6.1).curveTo(-16.6,-6.2,-16.8,-5.9).lineTo(-18.3,-4.5).curveTo(-18.3,2.7,-15.6,8.6).curveTo(-14.1,11.7,-12.4,14).lineTo(-9.7,14.5).curveTo(-8.7,13.7,-7.6,12.8).curveTo(-5.9,11.3,-4.4,9.4).curveTo(-2.8,9.1,-1.4,8.6).lineTo(-1,8.8).closePath();
	this.shape_39.setTransform(125.65,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#DCA9EE").beginStroke().moveTo(4.5,14.5).lineTo(4.4,14.4).lineTo(4.2,14.3).lineTo(3.7,14.1).lineTo(3.5,14).lineTo(3.4,13.9).curveTo(1.1,12.5,-0.9,10).lineTo(-1.7,8.8).lineTo(-4.3,9.5).curveTo(-5.9,11.4,-7.7,12.9).curveTo(-8.9,13.8,-10,14.4).lineTo(-12.7,14).curveTo(-14.5,11.7,-16,8.6).curveTo(-18.9,2.6,-18.9,-4.8).lineTo(-17.5,-6.3).curveTo(-17.1,-6.7,-15.7,-6.7).lineTo(-13.4,-7.9).curveTo(-10.1,-9.5,-6.4,-10.2).curveTo(-4.8,-12.3,-2.9,-13.7).lineTo(-1.9,-14.6).lineTo(1,-14.2).lineTo(2.1,-12.8).lineTo(2.4,-13).curveTo(3.9,-13.2,5.5,-13.2).curveTo(9.1,-11.4,11.8,-7.5).lineTo(13,-6.8).curveTo(16.6,-4.7,18.7,-2).curveTo(18.9,-0.5,18.9,1.1).lineTo(18.8,1.2).curveTo(17.1,4.7,13.3,7.2).lineTo(12.5,8.7).curveTo(10.4,12.3,7.7,14.3).curveTo(6.2,14.5,4.6,14.6).lineTo(4.5,14.5).closePath();
	this.shape_40.setTransform(132.575,0.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#990045").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-0.5,10.4).curveTo(1.4,12.8,3.7,14.2).lineTo(3.8,14.3).lineTo(4,14.4).lineTo(4.5,14.7).lineTo(4.7,14.8).lineTo(4.8,14.8).lineTo(4.9,14.9).curveTo(6.5,14.9,8,14.7).curveTo(10.7,12.6,12.8,9.1).lineTo(13.6,7.6).curveTo(17.4,5,19.1,1.5).lineTo(19.2,1.4).curveTo(19.2,-0.2,19,-1.6).curveTo(16.9,-4.3,13.4,-6.5).lineTo(12.1,-7.1).curveTo(9.5,-11.1,5.8,-12.9).curveTo(4.3,-12.9,2.7,-12.7).lineTo(2.5,-12.5).lineTo(1.3,-13.9).lineTo(-1.6,-14.2).lineTo(-2.6,-13.3).curveTo(-4.5,-11.9,-6.1,-9.8).curveTo(-9.8,-9.2,-13.1,-7.6).lineTo(-15.4,-6.4).curveTo(-16.8,-6.4,-17.1,-5.9).lineTo(-18.6,-4.4).curveTo(-18.6,2.9,-15.6,8.9).curveTo(-14.2,12.1,-12.4,14.3).lineTo(-9.7,14.8).curveTo(-8.6,14.1,-7.4,13.2).curveTo(-5.6,11.8,-4,9.8).lineTo(-1.4,9.2).lineTo(-0.5,10.4).closePath();
	this.shape_41.setTransform(132.25,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#DBA4ED").beginStroke().moveTo(4.3,14.9).curveTo(0.8,13.2,-2,9.4).lineTo(-4,9.9).curveTo(-5.6,11.8,-7.5,13.2).curveTo(-8.7,14.2,-9.9,14.8).curveTo(-11.3,14.7,-12.7,14.3).curveTo(-14.5,12.1,-16.1,8.9).curveTo(-19.1,2.8,-19.1,-4.7).lineTo(-17.8,-6.3).curveTo(-17.4,-6.9,-15.9,-7).lineTo(-13.6,-8.3).curveTo(-10.2,-9.9,-6.5,-10.6).curveTo(-4.8,-12.7,-2.9,-14).lineTo(-1.7,-14.9).lineTo(1.1,-14.6).lineTo(2.2,-13.4).curveTo(3.7,-13.6,5.4,-13.6).curveTo(9.1,-11.9,11.9,-7.9).lineTo(13.2,-7.2).curveTo(16.9,-4.9,18.9,-2.1).curveTo(19.1,-0.6,19.1,1).lineTo(19.1,1.2).curveTo(17.4,4.8,13.5,7.6).lineTo(12.7,9).curveTo(10.5,12.7,7.6,14.7).curveTo(6.1,14.9,4.5,14.9).lineTo(4.3,14.9).closePath();
	this.shape_42.setTransform(139.175,0.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#990049").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(4.6,15.2).lineTo(4.7,15.2).curveTo(6.4,15.2,7.9,15).curveTo(10.8,13,13,9.4).lineTo(13.8,7.9).curveTo(17.7,5.1,19.3,1.5).lineTo(19.4,1.4).curveTo(19.4,-0.2,19.2,-1.7).curveTo(17.1,-4.6,13.5,-6.8).lineTo(12.2,-7.6).curveTo(9.4,-11.6,5.6,-13.2).curveTo(4,-13.2,2.5,-13.1).lineTo(1.4,-14.2).lineTo(-1.5,-14.6).lineTo(-2.6,-13.7).curveTo(-4.5,-12.3,-6.2,-10.3).curveTo(-9.9,-9.6,-13.3,-7.9).lineTo(-15.7,-6.7).curveTo(-17.1,-6.5,-17.5,-5.9).lineTo(-18.8,-4.3).curveTo(-18.8,3.1,-15.8,9.3).curveTo(-14.3,12.4,-12.4,14.7).curveTo(-11,15,-9.6,15.1).curveTo(-8.4,14.5,-7.2,13.6).curveTo(-5.4,12.2,-3.7,10.3).lineTo(-1.7,9.8).curveTo(1,13.6,4.6,15.2).closePath();
	this.shape_43.setTransform(138.9,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#D9A0EC").beginStroke().moveTo(4.2,15.3).curveTo(0.6,13.7,-2.2,10.1).lineTo(-3.7,10.4).curveTo(-5.3,12.3,-7.4,13.7).curveTo(-8.7,14.6,-9.8,15.2).lineTo(-12.7,14.7).curveTo(-14.6,12.4,-16.2,9.2).curveTo(-19.4,3,-19.4,-4.5).lineTo(-18.1,-6.2).curveTo(-17.7,-7,-16.1,-7.2).lineTo(-13.8,-8.6).curveTo(-10.4,-10.3,-6.6,-11.1).curveTo(-4.9,-13.1,-2.8,-14.4).lineTo(-1.6,-15.3).curveTo(-0.1,-15.2,1.3,-14.9).lineTo(2.3,-13.8).curveTo(3.8,-14,5.2,-14).curveTo(9.2,-12.3,12.1,-8.2).lineTo(13.4,-7.5).curveTo(17.1,-5.2,19.2,-2.1).curveTo(19.4,-0.6,19.4,1).lineTo(19.3,1.1).curveTo(17.7,5,13.8,7.8).lineTo(12.9,9.3).curveTo(10.6,13,7.6,15).curveTo(6,15.3,4.3,15.3).lineTo(4.2,15.3).closePath();
	this.shape_44.setTransform(145.8,0.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#99004C").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(4.5,15.6).lineTo(4.6,15.6).curveTo(6.3,15.6,7.9,15.4).curveTo(10.9,13.3,13.2,9.6).lineTo(14.1,8.2).curveTo(18,5.3,19.6,1.4).lineTo(19.7,1.3).curveTo(19.7,-0.3,19.5,-1.8).curveTo(17.4,-4.9,13.7,-7.1).lineTo(12.4,-7.9).curveTo(9.5,-12,5.5,-13.7).curveTo(4.1,-13.7,2.6,-13.5).lineTo(1.6,-14.6).curveTo(0.2,-14.8,-1.3,-14.9).lineTo(-2.5,-14.1).curveTo(-4.6,-12.8,-6.3,-10.7).curveTo(-10.1,-10,-13.5,-8.3).lineTo(-15.8,-6.9).curveTo(-17.4,-6.6,-17.8,-5.9).lineTo(-19.1,-4.1).curveTo(-19.1,3.4,-15.9,9.5).curveTo(-14.3,12.7,-12.4,15).lineTo(-9.5,15.5).curveTo(-8.4,14.9,-7.1,14).curveTo(-5,12.6,-3.4,10.7).lineTo(-1.9,10.4).curveTo(0.9,14,4.5,15.6).closePath();
	this.shape_45.setTransform(145.5,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#D79CEB").beginStroke().moveTo(4.1,15.6).curveTo(0.4,14.2,-2.4,10.6).lineTo(-3.3,10.8).curveTo(-5.1,12.8,-7.1,14.1).lineTo(-9.7,15.5).lineTo(-12.6,15).curveTo(-14.6,12.7,-16.3,9.5).curveTo(-19.7,3.3,-19.7,-4.4).lineTo(-18.4,-6.2).curveTo(-18,-7.1,-16.3,-7.5).lineTo(-14,-8.9).curveTo(-10.5,-10.7,-6.7,-11.5).curveTo(-4.9,-13.5,-2.7,-14.8).lineTo(-1.5,-15.6).curveTo(0.1,-15.5,1.5,-15.3).lineTo(2.5,-14.3).curveTo(3.7,-14.4,5,-14.4).curveTo(9.2,-12.8,12.2,-8.6).lineTo(13.6,-7.9).curveTo(17.4,-5.4,19.4,-2.3).curveTo(19.7,-0.7,19.7,0.9).lineTo(19.6,1.1).curveTo(18,5.1,14,8.1).lineTo(13.1,9.6).curveTo(10.7,13.4,7.5,15.4).curveTo(5.9,15.6,4.2,15.6).lineTo(4.1,15.6).closePath();
	this.shape_46.setTransform(152.4,0.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#990050").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(4.4,15.9).lineTo(4.5,15.9).curveTo(6.2,16,7.8,15.7).curveTo(11,13.7,13.4,10).lineTo(14.3,8.4).curveTo(18.3,5.4,19.9,1.4).lineTo(20,1.3).curveTo(20,-0.4,19.7,-2).curveTo(17.7,-5.1,13.9,-7.6).lineTo(12.5,-8.3).curveTo(9.5,-12.4,5.3,-14.1).curveTo(4,-14.1,2.8,-14).lineTo(1.8,-14.9).curveTo(0.4,-15.2,-1.2,-15.3).lineTo(-2.4,-14.5).curveTo(-4.6,-13.2,-6.4,-11.2).curveTo(-10.2,-10.4,-13.7,-8.6).lineTo(-16,-7.2).curveTo(-17.7,-6.8,-18.1,-5.9).lineTo(-19.3,-4.1).curveTo(-19.4,3.6,-16,9.8).curveTo(-14.3,13.1,-12.3,15.4).lineTo(-9.4,15.8).lineTo(-6.8,14.4).curveTo(-4.8,13.1,-3,11.2).lineTo(-2.1,11).curveTo(0.7,14.5,4.4,15.9).closePath();
	this.shape_47.setTransform(152.1,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#D697EA").beginStroke().moveTo(4,16).lineTo(3.9,15.9).curveTo(0.2,14.6,-2.7,11.2).lineTo(-2.9,11.3).curveTo(-4.7,13.2,-7,14.5).curveTo(-8.4,15.3,-9.6,15.9).curveTo(-11.1,15.7,-12.6,15.3).curveTo(-14.6,13,-16.4,9.8).curveTo(-19.9,3.5,-19.9,-4.3).lineTo(-18.6,-6.1).curveTo(-18.2,-7.2,-16.5,-7.8).lineTo(-14.2,-9.2).curveTo(-10.6,-11.1,-6.7,-12).curveTo(-4.8,-14,-2.7,-15.2).lineTo(-1.3,-16).curveTo(0.2,-15.9,1.6,-15.7).lineTo(2.6,-14.7).lineTo(5,-14.8).curveTo(9.3,-13.2,12.4,-9).lineTo(13.8,-8.2).curveTo(17.7,-5.7,19.6,-2.4).curveTo(19.9,-0.8,19.9,0.9).lineTo(19.8,1).curveTo(18.3,5.2,14.2,8.4).lineTo(13.3,9.9).curveTo(10.8,13.7,7.6,15.7).curveTo(5.9,16,4.1,16).lineTo(4,16).closePath();
	this.shape_48.setTransform(159,0.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#990053").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(4.1,16.3).lineTo(4.2,16.3).lineTo(4.3,16.4).curveTo(6.2,16.3,7.8,16).curveTo(11.1,14.1,13.5,10.3).lineTo(14.5,8.7).curveTo(18.5,5.5,20.1,1.4).lineTo(20.2,1.2).curveTo(20.1,-0.5,19.9,-2.1).curveTo(17.9,-5.3,14.1,-7.9).lineTo(12.7,-8.7).curveTo(9.5,-12.9,5.2,-14.5).lineTo(2.9,-14.4).lineTo(1.9,-15.4).curveTo(0.5,-15.6,-1.1,-15.7).lineTo(-2.4,-14.9).curveTo(-4.6,-13.7,-6.5,-11.6).curveTo(-10.4,-10.8,-13.9,-8.9).lineTo(-16.3,-7.5).curveTo(-17.9,-6.9,-18.4,-5.8).lineTo(-19.6,-4).curveTo(-19.7,3.8,-16.2,10.2).curveTo(-14.4,13.3,-12.3,15.7).curveTo(-10.9,16,-9.4,16.2).curveTo(-8.1,15.7,-6.7,14.8).curveTo(-4.5,13.6,-2.7,11.6).lineTo(-2.4,11.5).curveTo(0.5,14.9,4.1,16.3).closePath();
	this.shape_49.setTransform(158.75,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#D493E9").beginStroke().moveTo(3.9,16.3).lineTo(3.7,16.3).lineTo(3.6,16.2).lineTo(3.3,16.1).lineTo(3.1,16).curveTo(-0.1,14.7,-2.7,11.9).curveTo(-4.6,13.7,-6.8,14.9).curveTo(-8.2,15.7,-9.5,16.2).curveTo(-11,16,-12.5,15.6).curveTo(-14.7,13.4,-16.6,10.1).curveTo(-20.2,3.7,-20.2,-4.2).curveTo(-19.6,-5.2,-18.9,-6.1).curveTo(-18.5,-7.3,-16.8,-8.1).lineTo(-14.3,-9.6).curveTo(-10.8,-11.5,-6.9,-12.4).curveTo(-4.9,-14.4,-2.6,-15.6).lineTo(-1.2,-16.4).curveTo(0.3,-16.3,1.8,-16).lineTo(2.8,-15.1).lineTo(4.8,-15.2).curveTo(9.3,-13.7,12.6,-9.4).lineTo(14,-8.6).curveTo(17.9,-5.9,19.9,-2.5).curveTo(20.1,-0.9,20.2,0.8).lineTo(20.1,1).curveTo(18.6,5.4,14.5,8.6).lineTo(13.5,10.2).curveTo(10.9,14.1,7.5,16.1).curveTo(5.8,16.4,4,16.4).lineTo(3.9,16.3).closePath();
	this.shape_50.setTransform(165.625,0.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#990056").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.4,16.4).lineTo(3.6,16.5).lineTo(3.9,16.6).lineTo(4,16.6).lineTo(4.1,16.6).lineTo(4.2,16.7).curveTo(6.1,16.7,7.7,16.4).curveTo(11.2,14.5,13.7,10.5).lineTo(14.7,8.9).curveTo(18.8,5.7,20.3,1.4).lineTo(20.4,1.2).curveTo(20.4,-0.5,20.1,-2.2).curveTo(18.2,-5.6,14.3,-8.3).lineTo(12.8,-9.1).curveTo(9.6,-13.4,5,-14.9).lineTo(3,-14.8).lineTo(2.1,-15.7).curveTo(0.6,-16,-0.9,-16).lineTo(-2.3,-15.3).curveTo(-4.7,-14.1,-6.6,-12.1).curveTo(-10.5,-11.2,-14.1,-9.3).lineTo(-16.5,-7.7).curveTo(-18.2,-7,-18.7,-5.8).curveTo(-19.3,-4.9,-19.9,-3.9).curveTo(-19.9,4,-16.3,10.4).curveTo(-14.5,13.7,-12.3,15.9).curveTo(-10.8,16.4,-9.3,16.6).curveTo(-8,16.1,-6.5,15.2).curveTo(-4.4,14.1,-2.5,12.2).curveTo(0.1,15.1,3.4,16.4).closePath();
	this.shape_51.setTransform(165.35,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#D28FE9").beginStroke().moveTo(3.8,16.7).curveTo(0.2,15.6,-2.7,12.7).curveTo(-4.5,14.3,-6.6,15.4).curveTo(-8.1,16.1,-9.5,16.6).lineTo(-12.5,16).curveTo(-14.8,13.7,-16.7,10.4).curveTo(-20.4,4,-20.4,-4).lineTo(-19.2,-6).curveTo(-18.8,-7.4,-16.9,-8.3).lineTo(-14.5,-9.8).curveTo(-11,-11.9,-7,-12.8).curveTo(-4.9,-14.8,-2.5,-16).lineTo(-1.1,-16.8).lineTo(2,-16.3).lineTo(2.9,-15.5).lineTo(4.6,-15.6).curveTo(9.3,-14.2,12.8,-9.8).lineTo(14.2,-8.9).curveTo(18.2,-6.2,20.2,-2.6).curveTo(20.4,-0.9,20.4,0.8).lineTo(20.4,1).curveTo(18.9,5.6,14.7,8.9).lineTo(13.7,10.5).curveTo(11,14.5,7.5,16.4).curveTo(5.7,16.7,3.9,16.7).lineTo(3.8,16.7).closePath();
	this.shape_52.setTransform(172.225,0.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#99005A").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(4.1,17).lineTo(4.2,17).curveTo(6,17,7.8,16.7).curveTo(11.2,14.8,14,10.8).lineTo(15,9.2).curveTo(19.2,5.9,20.6,1.3).lineTo(20.7,1.1).curveTo(20.7,-0.6,20.5,-2.3).curveTo(18.4,-5.9,14.4,-8.6).lineTo(13.1,-9.5).curveTo(9.6,-13.9,4.9,-15.3).lineTo(3.2,-15.2).lineTo(2.3,-16).lineTo(-0.9,-16.5).lineTo(-2.2,-15.7).curveTo(-4.6,-14.5,-6.7,-12.5).curveTo(-10.7,-11.6,-14.3,-9.5).lineTo(-16.6,-8).curveTo(-18.5,-7.1,-18.9,-5.7).lineTo(-20.1,-3.7).curveTo(-20.1,4.3,-16.4,10.7).curveTo(-14.5,14,-12.2,16.3).lineTo(-9.2,16.9).curveTo(-7.8,16.4,-6.3,15.7).curveTo(-4.3,14.6,-2.4,13).curveTo(0.4,15.9,4.1,17).closePath();
	this.shape_53.setTransform(171.95,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#D08AE8").beginStroke().moveTo(3.6,17.1).curveTo(0.2,16,-2.7,13.4).curveTo(-4.4,14.8,-6.4,15.7).curveTo(-7.9,16.5,-9.4,17).curveTo(-10.9,16.7,-12.4,16.3).curveTo(-14.8,14.1,-16.8,10.8).curveTo(-20.7,4.2,-20.7,-3.9).lineTo(-19.5,-6).curveTo(-19,-7.6,-17.1,-8.6).lineTo(-14.7,-10.2).curveTo(-11.1,-12.3,-7.1,-13.3).curveTo(-4.9,-15.3,-2.4,-16.4).lineTo(-1,-17.1).curveTo(0.7,-17,2.2,-16.7).lineTo(3,-16).lineTo(4.5,-16.1).curveTo(9.3,-14.6,12.9,-10.2).lineTo(14.4,-9.2).curveTo(18.4,-6.4,20.4,-2.7).curveTo(20.7,-1,20.7,0.8).lineTo(20.6,1).curveTo(19.2,5.6,15,9.2).lineTo(13.9,10.8).curveTo(11.1,14.9,7.4,16.8).curveTo(5.7,17.1,3.8,17.1).lineTo(3.6,17.1).closePath();
	this.shape_54.setTransform(178.825,0.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#99005D").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.9,17.4).lineTo(4.1,17.4).curveTo(5.9,17.4,7.7,17.1).curveTo(11.4,15.2,14.2,11.1).lineTo(15.2,9.5).curveTo(19.5,5.9,20.9,1.3).lineTo(21,1.1).curveTo(21,-0.7,20.7,-2.4).curveTo(18.7,-6.1,14.7,-8.9).lineTo(13.2,-9.9).curveTo(9.6,-14.3,4.8,-15.8).lineTo(3.3,-15.7).lineTo(2.4,-16.4).curveTo(0.9,-16.7,-0.7,-16.8).lineTo(-2.2,-16.1).curveTo(-4.6,-15,-6.8,-13).curveTo(-10.8,-12,-14.4,-9.9).lineTo(-16.8,-8.3).curveTo(-18.8,-7.3,-19.2,-5.7).lineTo(-20.4,-3.6).curveTo(-20.4,4.5,-16.5,11.1).curveTo(-14.6,14.4,-12.1,16.6).curveTo(-10.6,17,-9.1,17.3).curveTo(-7.6,16.8,-6.1,16).curveTo(-4.2,15.1,-2.4,13.7).curveTo(0.4,16.3,3.9,17.4).closePath();
	this.shape_55.setTransform(178.55,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#CF86E7").beginStroke().moveTo(3.5,17.4).curveTo(0.1,16.5,-2.7,14.1).curveTo(-4.4,15.3,-6.2,16.2).curveTo(-7.8,16.9,-9.3,17.3).lineTo(-12.4,16.6).curveTo(-14.8,14.4,-17,11).curveTo(-21,4.4,-20.9,-3.8).curveTo(-20.5,-4.9,-19.8,-6).curveTo(-19.4,-7.7,-17.3,-8.9).lineTo(-14.9,-10.6).curveTo(-11.3,-12.8,-7.2,-13.7).curveTo(-4.9,-15.7,-2.4,-16.8).lineTo(-0.9,-17.5).lineTo(2.4,-17.1).lineTo(3.2,-16.4).lineTo(4.4,-16.4).curveTo(9.4,-15.1,13.1,-10.6).lineTo(14.5,-9.7).curveTo(18.7,-6.7,20.6,-2.8).curveTo(20.9,-1.1,20.9,0.7).lineTo(20.9,0.9).curveTo(19.5,5.8,15.2,9.4).lineTo(14.1,11.1).curveTo(11.2,15.2,7.3,17.2).curveTo(5.6,17.5,3.6,17.5).lineTo(3.5,17.4).closePath();
	this.shape_56.setTransform(185.45,0.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#990061").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.7,17.7).lineTo(3.9,17.8).curveTo(5.8,17.8,7.6,17.5).curveTo(11.4,15.5,14.3,11.4).lineTo(15.4,9.7).curveTo(19.8,6.1,21.2,1.2).lineTo(21.2,1).curveTo(21.1,-0.8,20.9,-2.5).curveTo(19,-6.4,14.8,-9.4).lineTo(13.3,-10.3).curveTo(9.6,-14.8,4.6,-16.1).lineTo(3.4,-16.1).lineTo(2.6,-16.8).lineTo(-0.6,-17.2).lineTo(-2.1,-16.5).curveTo(-4.7,-15.4,-6.9,-13.4).curveTo(-11,-12.5,-14.6,-10.3).lineTo(-17.1,-8.6).curveTo(-19.1,-7.4,-19.5,-5.7).curveTo(-20.2,-4.6,-20.7,-3.5).curveTo(-20.7,4.7,-16.7,11.3).curveTo(-14.6,14.7,-12.1,16.9).lineTo(-9.1,17.6).curveTo(-7.6,17.2,-5.9,16.5).curveTo(-4.1,15.6,-2.4,14.4).curveTo(0.4,16.8,3.7,17.7).closePath();
	this.shape_57.setTransform(185.2,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#CD82E6").beginStroke().moveTo(3.4,17.8).curveTo(0.1,16.9,-2.7,14.7).curveTo(-4.2,15.8,-5.9,16.5).curveTo(-7.6,17.3,-9.2,17.6).curveTo(-10.8,17.4,-12.3,17).curveTo(-14.9,14.7,-17.1,11.3).curveTo(-21.2,4.7,-21.2,-3.7).lineTo(-20.1,-5.9).curveTo(-19.6,-7.9,-17.5,-9.1).curveTo(-16.4,-10,-15,-10.8).curveTo(-11.5,-13.2,-7.3,-14.2).curveTo(-4.9,-16.2,-2.3,-17.2).lineTo(-0.7,-17.9).curveTo(1,-17.8,2.5,-17.5).lineTo(3.3,-16.8).lineTo(4.2,-16.9).curveTo(9.4,-15.5,13.2,-11).lineTo(14.8,-10).curveTo(19,-6.9,20.9,-2.9).curveTo(21.1,-1.2,21.2,0.7).lineTo(21.2,0.9).curveTo(19.8,6,15.5,9.7).lineTo(14.3,11.4).curveTo(11.3,15.5,7.4,17.5).curveTo(5.5,17.8,3.5,17.9).lineTo(3.4,17.8).closePath();
	this.shape_58.setTransform(192.05,0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#990064").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.7,18.1).lineTo(3.8,18.2).curveTo(5.7,18.1,7.6,17.8).curveTo(11.5,15.8,14.6,11.7).lineTo(15.7,10).curveTo(20.1,6.3,21.4,1.2).lineTo(21.4,1).curveTo(21.4,-0.9,21.1,-2.6).curveTo(19.2,-6.6,15,-9.7).lineTo(13.5,-10.7).curveTo(9.6,-15.2,4.5,-16.6).lineTo(3.6,-16.5).lineTo(2.8,-17.2).curveTo(1.2,-17.5,-0.5,-17.6).lineTo(-2.1,-16.9).curveTo(-4.7,-15.9,-7,-13.9).curveTo(-11.2,-12.9,-14.8,-10.5).curveTo(-16.1,-9.7,-17.3,-8.8).curveTo(-19.4,-7.6,-19.8,-5.6).lineTo(-21,-3.4).curveTo(-21,5,-16.8,11.6).curveTo(-14.7,15,-12.1,17.3).curveTo(-10.6,17.7,-8.9,17.9).curveTo(-7.4,17.6,-5.7,16.8).curveTo(-4,16.1,-2.4,15).curveTo(0.3,17.2,3.7,18.1).closePath();
	this.shape_59.setTransform(191.8,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#CB7DE5").beginStroke().moveTo(3.3,18.2).lineTo(3.2,18.2).curveTo(0,17.4,-2.7,15.4).curveTo(-4.1,16.4,-5.8,17).curveTo(-7.5,17.7,-9.1,18).lineTo(-12.3,17.3).curveTo(-14.9,15.1,-17.1,11.6).curveTo(-21.5,4.9,-21.5,-3.5).curveTo(-21,-4.7,-20.3,-5.9).curveTo(-19.8,-7.9,-17.7,-9.4).lineTo(-15.2,-11.2).curveTo(-11.5,-13.5,-7.3,-14.6).curveTo(-5,-16.5,-2.2,-17.6).lineTo(-0.6,-18.2).curveTo(1.1,-18.1,2.7,-17.8).lineTo(3.4,-17.3).lineTo(4.1,-17.3).curveTo(9.5,-16,13.5,-11.3).lineTo(14.9,-10.3).curveTo(19.2,-7.2,21.2,-3).curveTo(21.5,-1.2,21.5,0.7).lineTo(21.4,0.9).curveTo(20.2,6.1,15.7,10).lineTo(14.6,11.7).curveTo(11.4,16,7.3,17.9).curveTo(5.5,18.2,3.5,18.2).lineTo(3.3,18.2).closePath();
	this.shape_60.setTransform(198.625,0.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#990068").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.4,18.5).lineTo(3.6,18.5).lineTo(3.7,18.5).curveTo(5.7,18.5,7.5,18.2).curveTo(11.7,16.2,14.8,12).lineTo(15.9,10.3).curveTo(20.4,6.4,21.7,1.2).lineTo(21.7,1).curveTo(21.7,-0.9,21.4,-2.8).curveTo(19.5,-6.9,15.2,-10.1).lineTo(13.7,-11.1).curveTo(9.7,-15.7,4.3,-17).lineTo(3.7,-17).lineTo(2.9,-17.5).curveTo(1.4,-17.8,-0.3,-17.9).lineTo(-1.9,-17.4).curveTo(-4.8,-16.2,-7.1,-14.3).curveTo(-11.3,-13.3,-15,-10.9).lineTo(-17.5,-9.1).curveTo(-19.6,-7.7,-20.1,-5.6).curveTo(-20.7,-4.4,-21.3,-3.2).curveTo(-21.3,5.2,-16.9,11.9).curveTo(-14.7,15.4,-12,17.6).lineTo(-8.9,18.3).curveTo(-7.2,18,-5.5,17.3).curveTo(-3.9,16.6,-2.4,15.7).curveTo(0.3,17.7,3.4,18.5).closePath();
	this.shape_61.setTransform(198.4,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#C979E4").beginStroke().moveTo(3.2,18.6).curveTo(0.1,17.9,-2.6,16).curveTo(-4,16.8,-5.5,17.4).curveTo(-7.3,18,-9,18.3).curveTo(-10.6,18.1,-12.2,17.6).curveTo(-15,15.4,-17.2,11.9).curveTo(-21.7,5.2,-21.7,-3.4).lineTo(-20.6,-5.8).curveTo(-20.1,-8.1,-17.9,-9.6).curveTo(-16.7,-10.6,-15.4,-11.5).curveTo(-11.7,-13.9,-7.4,-15).curveTo(-5,-17,-2.1,-18).lineTo(-0.4,-18.6).curveTo(1.3,-18.5,2.9,-18.1).lineTo(3.5,-17.7).lineTo(3.9,-17.7).curveTo(9.5,-16.4,13.6,-11.7).lineTo(15.1,-10.7).curveTo(19.5,-7.4,21.4,-3.2).curveTo(21.7,-1.3,21.7,0.6).lineTo(21.7,0.8).curveTo(20.5,6.2,15.9,10.3).lineTo(14.8,12).curveTo(11.5,16.3,7.3,18.3).curveTo(5.4,18.6,3.4,18.6).lineTo(3.2,18.6).closePath();
	this.shape_62.setTransform(205.225,0.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#99006B").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.4,18.8).lineTo(3.6,18.8).curveTo(5.6,18.8,7.6,18.5).curveTo(11.8,16.6,15,12.3).lineTo(16.1,10.5).curveTo(20.7,6.5,21.9,1.1).lineTo(22,0.9).curveTo(22,-1,21.6,-2.9).curveTo(19.7,-7.1,15.3,-10.4).lineTo(13.9,-11.4).curveTo(9.8,-16.2,4.2,-17.4).lineTo(3.7,-17.4).lineTo(3.1,-17.8).curveTo(1.5,-18.2,-0.2,-18.3).lineTo(-1.9,-17.7).curveTo(-4.7,-16.7,-7.2,-14.8).curveTo(-11.4,-13.6,-15.2,-11.2).curveTo(-16.5,-10.4,-17.7,-9.4).curveTo(-19.8,-7.8,-20.4,-5.6).lineTo(-21.5,-3.2).curveTo(-21.5,5.4,-17,12.2).curveTo(-14.7,15.6,-11.9,17.9).curveTo(-10.4,18.3,-8.7,18.6).curveTo(-7.1,18.3,-5.3,17.6).curveTo(-3.8,17.1,-2.4,16.3).curveTo(0.3,18.1,3.4,18.8).closePath();
	this.shape_63.setTransform(205,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#C875E3").beginStroke().moveTo(3.1,18.9).curveTo(0,18.3,-2.6,16.6).curveTo(-3.9,17.3,-5.4,17.8).curveTo(-7.2,18.4,-8.9,18.7).curveTo(-10.5,18.4,-12.1,18).curveTo(-15,15.7,-17.4,12.2).curveTo(-22,5.4,-22,-3.3).curveTo(-21.5,-4.6,-21,-5.8).curveTo(-20.4,-8.2,-18.2,-9.9).curveTo(-16.9,-10.9,-15.6,-11.8).curveTo(-11.9,-14.4,-7.5,-15.5).curveTo(-5,-17.4,-2.1,-18.4).lineTo(-0.3,-19).curveTo(1.4,-18.8,3.1,-18.5).lineTo(3.7,-18.1).lineTo(3.8,-18.1).curveTo(9.5,-16.9,13.8,-12.1).lineTo(15.3,-11.1).curveTo(19.7,-7.7,21.6,-3.3).curveTo(22,-1.4,22,0.6).lineTo(22,0.8).curveTo(20.8,6.4,16.1,10.5).lineTo(15,12.3).curveTo(11.6,16.7,7.2,18.6).curveTo(5.3,18.9,3.2,19).lineTo(3.1,18.9).closePath();
	this.shape_64.setTransform(211.85,0.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#99006F").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.3,19.2).lineTo(3.4,19.3).curveTo(5.5,19.2,7.4,18.9).curveTo(11.8,17,15.2,12.6).lineTo(16.3,10.8).curveTo(21,6.7,22.2,1.1).lineTo(22.2,0.8).curveTo(22.2,-1.1,21.8,-3).curveTo(19.9,-7.4,15.5,-10.8).lineTo(14,-11.9).curveTo(9.7,-16.6,4,-17.8).lineTo(3.9,-17.8).lineTo(3.3,-18.3).curveTo(1.6,-18.6,-0.1,-18.7).lineTo(-1.9,-18.2).curveTo(-4.8,-17.1,-7.3,-15.2).curveTo(-11.7,-14.1,-15.4,-11.5).curveTo(-16.7,-10.7,-18,-9.6).curveTo(-20.2,-7.9,-20.8,-5.5).curveTo(-21.3,-4.3,-21.8,-3.1).curveTo(-21.8,5.7,-17.2,12.5).curveTo(-14.8,16,-11.9,18.3).curveTo(-10.3,18.7,-8.7,19).curveTo(-7,18.7,-5.2,18.1).curveTo(-3.7,17.6,-2.4,16.9).curveTo(0.2,18.6,3.3,19.2).closePath();
	this.shape_65.setTransform(211.65,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C670E2").beginStroke().moveTo(2.9,19.3).curveTo(-0,18.7,-2.6,17.2).curveTo(-3.8,17.8,-5.1,18.2).curveTo(-7,18.8,-8.8,19).curveTo(-10.5,18.8,-12.1,18.3).curveTo(-15,16,-17.5,12.5).curveTo(-22.3,5.6,-22.3,-3.2).curveTo(-21.8,-4.5,-21.2,-5.8).curveTo(-20.6,-8.3,-18.4,-10.2).curveTo(-17.2,-11.2,-15.8,-12.2).curveTo(-12,-14.8,-7.7,-15.9).curveTo(-5,-17.9,-1.9,-18.8).lineTo(-0.1,-19.3).curveTo(1.6,-19.2,3.2,-18.9).lineTo(3.9,-18.5).curveTo(9.6,-17.2,13.9,-12.5).lineTo(15.5,-11.4).curveTo(20,-7.9,21.9,-3.4).curveTo(22.2,-1.5,22.2,0.5).lineTo(22.2,0.7).curveTo(21.1,6.5,16.4,10.8).lineTo(15.2,12.6).curveTo(11.8,17,7.2,19).curveTo(5.3,19.3,3.1,19.3).lineTo(2.9,19.3).closePath();
	this.shape_66.setTransform(218.45,0.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#990072").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3.1,19.5).lineTo(3.3,19.6).curveTo(5.5,19.6,7.4,19.3).curveTo(12,17.3,15.4,12.9).lineTo(16.6,11.1).curveTo(21.3,6.7,22.4,1).lineTo(22.4,0.8).curveTo(22.4,-1.2,22.1,-3.1).curveTo(20.2,-7.7,15.7,-11.2).lineTo(14.1,-12.2).curveTo(9.8,-17,4.1,-18.2).lineTo(3.4,-18.6).curveTo(1.8,-19,0.1,-19.1).lineTo(-1.7,-18.5).curveTo(-4.8,-17.6,-7.5,-15.7).curveTo(-11.8,-14.5,-15.6,-11.9).curveTo(-17,-11,-18.2,-9.9).curveTo(-20.4,-8.1,-21,-5.5).curveTo(-21.6,-4.3,-22.1,-3).curveTo(-22.1,5.9,-17.3,12.8).curveTo(-14.8,16.3,-11.9,18.5).curveTo(-10.3,19,-8.6,19.3).curveTo(-6.8,19.1,-4.9,18.4).curveTo(-3.6,18,-2.4,17.5).curveTo(0.2,19,3.1,19.5).closePath();
	this.shape_67.setTransform(218.25,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#C46CE2").beginStroke().moveTo(2.8,19.7).curveTo(-0,19.1,-2.6,17.7).curveTo(-3.7,18.2,-4.9,18.6).curveTo(-6.9,19.2,-8.8,19.4).curveTo(-10.4,19.1,-12,18.6).curveTo(-15.1,16.4,-17.6,12.9).curveTo(-22.5,5.9,-22.5,-3).lineTo(-21.5,-5.7).curveTo(-20.9,-8.4,-18.5,-10.4).curveTo(-17.3,-11.5,-16,-12.5).curveTo(-12.2,-15.2,-7.8,-16.4).curveTo(-5,-18.3,-1.9,-19.2).lineTo(-0.1,-19.7).curveTo(1.7,-19.6,3.4,-19.2).lineTo(4.1,-18.8).lineTo(4.1,-18.8).curveTo(9,-17.7,12.9,-14.1).lineTo(14.2,-12.9).lineTo(15.7,-11.8).curveTo(20.2,-8.2,22.2,-3.5).curveTo(22.5,-1.6,22.5,0.5).lineTo(22.5,0.7).curveTo(21.4,6.7,16.7,11.1).lineTo(15.4,12.9).curveTo(11.8,17.4,7.2,19.4).curveTo(5.2,19.7,3,19.7).lineTo(2.8,19.7).closePath();
	this.shape_68.setTransform(225.05,0.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#990076").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(3,20).lineTo(3.2,20).curveTo(5.4,19.9,7.4,19.6).curveTo(12,17.6,15.6,13.1).lineTo(16.9,11.3).curveTo(21.6,6.9,22.7,1).lineTo(22.7,0.7).curveTo(22.7,-1.3,22.4,-3.2).curveTo(20.4,-7.9,15.9,-11.5).lineTo(14.4,-12.7).lineTo(13.1,-13.9).curveTo(9.2,-17.4,4.3,-18.5).lineTo(4.3,-18.5).lineTo(3.6,-19).curveTo(1.9,-19.3,0.2,-19.4).lineTo(-1.7,-19).curveTo(-4.8,-18,-7.6,-16.1).curveTo(-12,-14.9,-15.8,-12.2).curveTo(-17.1,-11.3,-18.3,-10.2).curveTo(-20.7,-8.2,-21.3,-5.5).lineTo(-22.3,-2.8).curveTo(-22.3,6.1,-17.4,13.1).curveTo(-14.9,16.6,-11.8,18.9).curveTo(-10.2,19.3,-8.6,19.6).curveTo(-6.7,19.5,-4.7,18.8).curveTo(-3.5,18.5,-2.4,18).curveTo(0.2,19.4,3,20).closePath();
	this.shape_69.setTransform(224.85,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#C268E1").beginStroke().moveTo(2.7,20.1).curveTo(-0.1,19.6,-2.6,18.3).lineTo(-4.8,19).curveTo(-6.8,19.6,-8.7,19.7).curveTo(-10.4,19.5,-12,18.9).curveTo(-15.2,16.8,-17.7,13.2).curveTo(-22.8,6.2,-22.8,-3).curveTo(-22.4,-4.3,-21.8,-5.7).curveTo(-21.2,-8.6,-18.7,-10.7).curveTo(-17.5,-11.8,-16.1,-12.8).curveTo(-12.3,-15.5,-7.9,-16.8).curveTo(-5.1,-18.7,-1.8,-19.6).lineTo(0.1,-20.1).curveTo(1.9,-19.9,3.6,-19.5).lineTo(4.3,-19.1).lineTo(4.3,-19.1).curveTo(10,-17.9,14.3,-13.3).lineTo(15.9,-12.1).curveTo(20.5,-8.4,22.4,-3.6).curveTo(22.7,-1.7,22.8,0.5).lineTo(22.7,0.7).curveTo(21.7,6.8,16.9,11.4).lineTo(15.6,13.2).curveTo(11.9,17.8,7.1,19.7).curveTo(5.1,20.1,2.9,20.1).lineTo(2.7,20.1).closePath();
	this.shape_70.setTransform(231.675,0.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#990079").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(2.9,20.3).lineTo(3.2,20.3).curveTo(5.3,20.3,7.3,20).curveTo(12.2,18,15.8,13.4).lineTo(17.1,11.6).curveTo(21.9,7.1,23,1).lineTo(23,0.7).curveTo(23,-1.4,22.6,-3.3).curveTo(20.8,-8.2,16.1,-11.9).lineTo(14.5,-13.1).curveTo(10.2,-17.6,4.5,-18.8).lineTo(4.5,-18.8).lineTo(3.8,-19.3).curveTo(2.1,-19.7,0.3,-19.8).lineTo(-1.6,-19.4).curveTo(-4.9,-18.4,-7.6,-16.6).curveTo(-12.1,-15.3,-15.9,-12.5).curveTo(-17.3,-11.6,-18.5,-10.4).curveTo(-21,-8.3,-21.6,-5.4).curveTo(-22.2,-4.1,-22.6,-2.7).curveTo(-22.6,6.4,-17.5,13.4).curveTo(-15,17,-11.8,19.2).curveTo(-10.1,19.7,-8.4,20).curveTo(-6.5,19.9,-4.6,19.3).lineTo(-2.3,18.5).curveTo(0.1,19.8,2.9,20.3).closePath();
	this.shape_71.setTransform(231.45,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C163E0").beginStroke().moveTo(2.6,20.4).curveTo(-0.1,20,-2.5,18.8).lineTo(-4.6,19.5).curveTo(-6.6,20,-8.6,20.1).curveTo(-10.3,19.8,-12,19.3).curveTo(-15.2,17.1,-17.8,13.4).curveTo(-23,6.4,-23,-2.9).curveTo(-22.6,-4.3,-22.1,-5.6).curveTo(-21.5,-8.7,-18.9,-11).curveTo(-17.7,-12.1,-16.3,-13.1).curveTo(-12.5,-15.9,-7.9,-17.3).curveTo(-5.1,-19.2,-1.7,-20).lineTo(0.2,-20.4).curveTo(2,-20.3,3.7,-20).lineTo(4.6,-19.4).curveTo(10.2,-18.2,14.5,-13.7).lineTo(16.1,-12.5).curveTo(20.8,-8.7,22.7,-3.7).curveTo(23,-1.7,23,0.4).lineTo(23,0.6).curveTo(22,7,17.1,11.6).lineTo(15.8,13.5).curveTo(12,18.1,7.1,20.1).curveTo(5,20.4,2.8,20.4).lineTo(2.6,20.4).closePath();
	this.shape_72.setTransform(238.275,0.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#99007C").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(2.8,20.6).lineTo(3,20.7).curveTo(5.2,20.7,7.3,20.3).curveTo(12.2,18.4,16,13.8).lineTo(17.3,11.9).curveTo(22.1,7.2,23.2,0.9).lineTo(23.2,0.6).curveTo(23.2,-1.4,22.8,-3.4).curveTo(21,-8.4,16.2,-12.2).lineTo(14.6,-13.4).curveTo(10.4,-17.9,4.8,-19.2).lineTo(3.9,-19.7).curveTo(2.2,-20,0.4,-20.2).lineTo(-1.6,-19.7).curveTo(-4.9,-18.9,-7.8,-17).curveTo(-12.3,-15.7,-16.2,-12.9).curveTo(-17.6,-11.9,-18.8,-10.7).curveTo(-21.3,-8.5,-21.9,-5.3).curveTo(-22.4,-4,-22.8,-2.6).curveTo(-22.8,6.6,-17.7,13.7).curveTo(-15,17.3,-11.8,19.5).curveTo(-10.1,20,-8.4,20.3).curveTo(-6.4,20.2,-4.4,19.7).lineTo(-2.4,19.1).curveTo(0.1,20.2,2.8,20.6).closePath();
	this.shape_73.setTransform(238.1,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#BF5FDF").beginStroke().moveTo(2.5,20.7).curveTo(0.2,20.4,-1.9,19.5).lineTo(-2.5,19.3).lineTo(-4.4,19.8).curveTo(-6.5,20.4,-8.5,20.4).curveTo(-10.2,20.2,-11.9,19.6).curveTo(-15.2,17.4,-18,13.8).curveTo(-23.3,6.6,-23.3,-2.8).curveTo(-22.9,-4.2,-22.4,-5.6).curveTo(-21.7,-8.8,-19.1,-11.2).curveTo(-17.9,-12.4,-16.5,-13.5).curveTo(-12.6,-16.4,-8,-17.7).curveTo(-5.1,-19.6,-1.7,-20.4).lineTo(0.3,-20.8).curveTo(2.2,-20.6,3.9,-20.3).lineTo(4.8,-19.8).curveTo(10.4,-18.5,14.6,-14.1).lineTo(16.3,-12.9).curveTo(21,-8.9,22.9,-3.9).curveTo(23.3,-1.8,23.3,0.4).lineTo(23.3,0.6).curveTo(22.3,7,17.4,11.9).lineTo(16,13.8).curveTo(12.1,18.5,7.1,20.4).curveTo(5,20.8,2.7,20.8).lineTo(2.5,20.7).closePath();
	this.shape_74.setTransform(244.875,0.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#990080").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.7,19.8).curveTo(0.4,20.7,2.7,21).lineTo(2.9,21.1).curveTo(5.2,21,7.2,20.6).curveTo(12.3,18.8,16.1,14).lineTo(17.6,12.1).curveTo(22.5,7.3,23.4,0.8).lineTo(23.4,0.6).curveTo(23.4,-1.5,23.1,-3.6).curveTo(21.2,-8.7,16.5,-12.6).lineTo(14.8,-13.9).curveTo(10.5,-18.2,5,-19.6).lineTo(4.1,-20.1).curveTo(2.4,-20.4,0.5,-20.5).lineTo(-1.5,-20.2).curveTo(-4.9,-19.3,-7.8,-17.5).curveTo(-12.4,-16.2,-16.3,-13.2).curveTo(-17.7,-12.2,-19,-11).curveTo(-21.5,-8.6,-22.2,-5.3).curveTo(-22.8,-3.9,-23.1,-2.5).curveTo(-23.1,6.8,-17.8,14).curveTo(-15,17.6,-11.8,19.9).curveTo(-10,20.4,-8.3,20.7).curveTo(-6.3,20.6,-4.2,20.1).lineTo(-2.3,19.5).lineTo(-1.7,19.8).closePath();
	this.shape_75.setTransform(244.7,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#BD5BDE").beginStroke().moveTo(2.4,21.2).lineTo(2.2,21.1).lineTo(2,21.1).lineTo(-2,20.1).lineTo(-2.6,19.8).lineTo(-4.2,20.3).curveTo(-6.4,20.8,-8.4,20.8).curveTo(-10.2,20.5,-11.9,19.9).curveTo(-15.3,17.7,-18.1,14.1).curveTo(-23.6,6.9,-23.5,-2.6).curveTo(-23.2,-4.1,-22.6,-5.5).curveTo(-22.1,-8.9,-19.4,-11.5).curveTo(-18.2,-12.7,-16.7,-13.8).curveTo(-12.8,-16.8,-8.1,-18.1).curveTo(-5.1,-20,-1.6,-20.8).lineTo(0.4,-21.2).curveTo(2.3,-21,4.1,-20.6).lineTo(5.1,-20.1).lineTo(5.8,-19.9).lineTo(14.7,-14.6).lineTo(14.8,-14.4).lineTo(16.4,-13.2).curveTo(21.3,-9.1,23.2,-3.9).curveTo(23.5,-1.9,23.5,0.3).lineTo(23.5,0.6).curveTo(22.6,7.2,17.6,12.2).lineTo(16.2,14.1).curveTo(12.2,18.9,7.1,20.8).curveTo(4.8,21.1,2.6,21.2).lineTo(2.4,21.2).closePath();
	this.shape_76.setTransform(251.5,0.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#990083").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.8,20.3).lineTo(2.2,21.3).lineTo(2.4,21.4).lineTo(2.6,21.4).lineTo(2.8,21.4).curveTo(5,21.4,7.3,21).curveTo(12.4,19.1,16.4,14.3).lineTo(17.8,12.4).curveTo(22.8,7.4,23.7,0.8).lineTo(23.7,0.5).curveTo(23.7,-1.7,23.4,-3.7).curveTo(21.5,-8.9,16.6,-13).lineTo(15,-14.2).lineTo(14.9,-14.3).lineTo(6,-19.7).lineTo(5.3,-19.9).lineTo(4.3,-20.4).curveTo(2.5,-20.8,0.6,-21).lineTo(-1.4,-20.5).curveTo(-4.9,-19.8,-7.9,-17.9).curveTo(-12.6,-16.6,-16.5,-13.6).curveTo(-18,-12.5,-19.2,-11.3).curveTo(-21.9,-8.7,-22.4,-5.3).curveTo(-23,-3.9,-23.3,-2.3).curveTo(-23.4,7.1,-17.9,14.3).curveTo(-15.1,18,-11.7,20.2).curveTo(-10,20.7,-8.2,21.1).curveTo(-6.2,21,-4,20.5).lineTo(-2.4,20.1).lineTo(-1.8,20.3).closePath();
	this.shape_77.setTransform(251.3,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#BC56DD").beginStroke().moveTo(2.3,21.5).lineTo(-2,20.5).lineTo(-2.6,20.3).lineTo(-4,20.7).curveTo(-6.2,21.1,-8.3,21.2).curveTo(-10.2,20.8,-11.9,20.3).curveTo(-15.3,18.1,-18.2,14.4).curveTo(-23.8,7.1,-23.8,-2.5).curveTo(-23.5,-4,-22.9,-5.5).curveTo(-22.3,-9,-19.5,-11.8).curveTo(-18.3,-13,-16.9,-14.1).curveTo(-12.9,-17.2,-8.3,-18.6).curveTo(-5.2,-20.4,-1.5,-21.2).lineTo(0.6,-21.5).curveTo(2.5,-21.4,4.3,-21).lineTo(5.3,-20.4).curveTo(10.7,-19.1,15,-14.8).lineTo(16.7,-13.5).curveTo(21.5,-9.4,23.4,-4).curveTo(23.7,-1.9,23.8,0.3).lineTo(23.8,0.6).curveTo(22.9,7.4,17.8,12.5).lineTo(16.4,14.4).curveTo(12.3,19.2,7,21.1).curveTo(4.8,21.5,2.4,21.5).lineTo(2.3,21.5).closePath();
	this.shape_78.setTransform(258.1,0.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#990087").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.8,20.8).lineTo(2.4,21.8).lineTo(2.6,21.8).curveTo(5,21.8,7.2,21.3).curveTo(12.4,19.4,16.6,14.7).lineTo(18,12.7).curveTo(23.1,7.6,23.9,0.8).lineTo(23.9,0.5).curveTo(23.9,-1.7,23.6,-3.8).curveTo(21.7,-9.2,16.8,-13.3).lineTo(15.1,-14.6).curveTo(10.9,-18.8,5.4,-20.2).lineTo(4.4,-20.8).curveTo(2.7,-21.2,0.7,-21.3).lineTo(-1.4,-21).curveTo(-5,-20.2,-8.1,-18.4).curveTo(-12.7,-16.9,-16.8,-13.9).curveTo(-18.2,-12.7,-19.4,-11.5).curveTo(-22.1,-8.8,-22.8,-5.2).curveTo(-23.3,-3.8,-23.7,-2.3).curveTo(-23.7,7.3,-18,14.6).curveTo(-15.1,18.3,-11.7,20.5).curveTo(-10,21.1,-8.1,21.4).curveTo(-6.1,21.4,-3.9,20.9).lineTo(-2.4,20.5).lineTo(-1.8,20.8).closePath();
	this.shape_79.setTransform(257.95,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#BA52DC").beginStroke().moveTo(2.2,21.9).curveTo(-0.3,21.6,-2.5,20.8).lineTo(-3.8,21.1).curveTo(-6.1,21.6,-8.2,21.6).curveTo(-10,21.2,-11.8,20.6).curveTo(-15.4,18.4,-18.3,14.7).curveTo(-24,7.3,-24,-2.4).curveTo(-23.8,-3.9,-23.2,-5.4).curveTo(-22.6,-9.2,-19.7,-12).curveTo(-18.5,-13.3,-17,-14.4).curveTo(-13,-17.5,-8.4,-19).curveTo(-5.1,-20.9,-1.4,-21.5).lineTo(0.7,-21.9).curveTo(2.6,-21.8,4.5,-21.3).lineTo(5.4,-20.8).lineTo(6.4,-20.5).lineTo(12.7,-17.3).curveTo(14,-16.4,15.1,-15.2).lineTo(16.8,-13.9).curveTo(21.8,-9.6,23.7,-4.2).curveTo(24,-2,24,0.2).lineTo(24,0.5).curveTo(23.2,7.5,18.1,12.8).lineTo(16.6,14.7).curveTo(12.4,19.6,6.9,21.5).curveTo(4.8,21.9,2.3,21.9).lineTo(2.2,21.9).closePath();
	this.shape_80.setTransform(264.7,0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#99008A").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(2.3,22.1).lineTo(2.5,22.1).curveTo(4.9,22.1,7.1,21.7).curveTo(12.5,19.8,16.8,14.9).lineTo(18.2,13).curveTo(23.4,7.7,24.2,0.7).lineTo(24.2,0.4).curveTo(24.2,-1.8,23.8,-4).curveTo(22,-9.4,17,-13.7).lineTo(15.3,-15).curveTo(14.1,-16.2,12.8,-17.1).lineTo(6.5,-20.3).lineTo(5.5,-20.6).lineTo(4.6,-21.1).curveTo(2.8,-21.6,0.9,-21.7).lineTo(-1.3,-21.3).curveTo(-5,-20.7,-8.2,-18.8).curveTo(-12.9,-17.3,-16.9,-14.2).curveTo(-18.3,-13.1,-19.6,-11.8).curveTo(-22.4,-9,-23.1,-5.2).curveTo(-23.6,-3.7,-23.9,-2.2).curveTo(-23.9,7.5,-18.1,14.9).curveTo(-15.2,18.6,-11.7,20.8).curveTo(-9.9,21.4,-8.1,21.8).curveTo(-5.9,21.8,-3.6,21.3).lineTo(-2.3,21).curveTo(-0.1,21.8,2.3,22.1).closePath();
	this.shape_81.setTransform(264.55,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#B84EDC").beginStroke().moveTo(2,22.2).curveTo(-0.3,22,-2.4,21.3).lineTo(-3.6,21.5).curveTo(-6,21.9,-8.2,21.9).curveTo(-10,21.5,-11.8,20.9).curveTo(-15.4,18.7,-18.4,15).curveTo(-24.3,7.6,-24.3,-2.3).curveTo(-24,-3.9,-23.5,-5.4).curveTo(-22.9,-9.3,-20,-12.3).curveTo(-18.7,-13.6,-17.3,-14.8).curveTo(-13.2,-18,-8.4,-19.5).curveTo(-5.2,-21.3,-1.4,-22).lineTo(0.8,-22.3).curveTo(2.8,-22.1,4.6,-21.7).lineTo(5.7,-21.2).curveTo(11,-19.8,15.3,-15.6).lineTo(17,-14.2).curveTo(22.1,-9.8,23.9,-4.3).curveTo(24.3,-2.1,24.3,0.2).lineTo(24.3,0.5).curveTo(23.5,7.7,18.3,13).curveTo(17.6,14,16.8,15).curveTo(12.5,20,6.9,21.8).curveTo(4.6,22.2,2.2,22.3).lineTo(2,22.2).closePath();
	this.shape_82.setTransform(271.325,0.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#99008E").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(2.2,22.4).lineTo(2.4,22.5).curveTo(4.8,22.4,7.1,22).curveTo(12.7,20.2,16.9,15.2).curveTo(17.8,14.2,18.5,13.2).curveTo(23.7,7.9,24.4,0.7).lineTo(24.5,0.4).curveTo(24.4,-1.9,24,-4.1).curveTo(22.3,-9.6,17.2,-14).lineTo(15.4,-15.4).curveTo(11.2,-19.6,5.8,-21).lineTo(4.8,-21.5).curveTo(2.9,-21.9,1,-22.1).lineTo(-1.2,-21.8).curveTo(-5,-21.1,-8.3,-19.3).curveTo(-13,-17.8,-17.1,-14.6).curveTo(-18.5,-13.4,-19.8,-12.1).curveTo(-22.7,-9.1,-23.4,-5.2).curveTo(-23.8,-3.7,-24.2,-2.1).curveTo(-24.1,7.8,-18.3,15.2).curveTo(-15.3,18.9,-11.6,21.1).curveTo(-9.8,21.7,-8,22.1).curveTo(-5.8,22.1,-3.5,21.7).lineTo(-2.3,21.5).curveTo(-0.1,22.2,2.2,22.4).closePath();
	this.shape_83.setTransform(271.15,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#B649DB").beginStroke().moveTo(1.9,22.7).lineTo(1.7,22.6).curveTo(-0.2,22.4,-1.9,21.9).lineTo(-2.4,21.7).lineTo(-3.3,21.9).curveTo(-5.8,22.3,-8.1,22.2).curveTo(-9.9,21.9,-11.7,21.2).curveTo(-15.5,19,-18.5,15.3).curveTo(-24.6,7.8,-24.6,-2.1).curveTo(-24.3,-3.8,-23.8,-5.3).curveTo(-23.1,-9.4,-20.1,-12.5).curveTo(-18.9,-13.8,-17.4,-15.1).curveTo(-13.3,-18.4,-8.5,-19.8).curveTo(-5.2,-21.8,-1.3,-22.3).lineTo(1,-22.6).curveTo(2.9,-22.5,4.8,-22.1).lineTo(6,-21.5).curveTo(11.3,-20.1,15.5,-16).lineTo(17.2,-14.6).curveTo(22.4,-10.1,24.1,-4.3).curveTo(24.5,-2.1,24.6,0.2).lineTo(24.6,0.4).curveTo(23.8,7.8,18.6,13.3).lineTo(17,15.3).curveTo(12.6,20.4,6.9,22.2).curveTo(4.6,22.6,2.2,22.7).lineTo(1.9,22.7).closePath();
	this.shape_84.setTransform(277.9,0.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#990091").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.8,22.1).curveTo(-0,22.6,1.9,22.8).lineTo(2.1,22.9).lineTo(2.3,22.9).curveTo(4.7,22.8,7,22.4).curveTo(12.8,20.6,17.2,15.5).lineTo(18.7,13.5).curveTo(23.9,8,24.7,0.6).lineTo(24.7,0.4).curveTo(24.7,-1.9,24.3,-4.1).curveTo(22.5,-9.9,17.4,-14.4).lineTo(15.6,-15.8).curveTo(11.4,-19.9,6.1,-21.3).lineTo(4.9,-21.9).curveTo(3.1,-22.3,1.2,-22.4).lineTo(-1.2,-22.1).curveTo(-5,-21.6,-8.4,-19.6).curveTo(-13.2,-18.2,-17.3,-14.9).curveTo(-18.8,-13.6,-20,-12.3).curveTo(-22.9,-9.2,-23.7,-5.1).curveTo(-24.1,-3.6,-24.5,-1.9).curveTo(-24.5,8,-18.4,15.5).curveTo(-15.3,19.2,-11.5,21.4).curveTo(-9.8,22.1,-7.9,22.4).curveTo(-5.6,22.5,-3.2,22.1).lineTo(-2.3,21.9).lineTo(-1.8,22.1).closePath();
	this.shape_85.setTransform(277.75,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#B545DA").beginStroke().moveTo(1.9,23).lineTo(1.7,23).curveTo(0.1,22.8,-1.4,22.5).lineTo(-2.4,22.2).lineTo(-3.2,22.3).curveTo(-5.7,22.7,-7.9,22.6).curveTo(-9.9,22.2,-11.6,21.6).curveTo(-15.5,19.4,-18.6,15.6).curveTo(-24.9,8.1,-24.9,-2).curveTo(-24.6,-3.7,-24.1,-5.3).curveTo(-23.3,-9.5,-20.4,-12.8).curveTo(-19.1,-14.1,-17.6,-15.4).curveTo(-13.4,-18.8,-8.6,-20.3).curveTo(-5.2,-22.2,-1.2,-22.7).lineTo(1.2,-23).curveTo(3.1,-22.8,5,-22.4).lineTo(6.1,-21.8).lineTo(7,-21.6).curveTo(11,-20.3,14.4,-17.5).lineTo(15.1,-16.9).lineTo(15.6,-16.4).lineTo(17.4,-14.9).curveTo(22.6,-10.4,24.4,-4.5).curveTo(24.8,-2.2,24.8,0.2).lineTo(24.8,0.4).curveTo(24.1,8,18.9,13.6).lineTo(17.3,15.6).curveTo(12.7,20.7,6.9,22.6).curveTo(4.6,23,2.1,23).lineTo(1.9,23).closePath();
	this.shape_86.setTransform(284.5,0.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#990095").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.3,22.7).curveTo(0.2,23,1.8,23.2).lineTo(2,23.2).lineTo(2.2,23.2).curveTo(4.7,23.2,7,22.8).curveTo(12.8,20.9,17.4,15.8).lineTo(19,13.8).curveTo(24.2,8.1,24.9,0.6).lineTo(24.9,0.4).curveTo(24.9,-2,24.5,-4.3).curveTo(22.7,-10.2,17.5,-14.8).lineTo(15.7,-16.2).lineTo(15.2,-16.7).lineTo(14.5,-17.4).curveTo(11.1,-20.1,7.1,-21.4).lineTo(6.2,-21.7).lineTo(5.1,-22.2).curveTo(3.2,-22.7,1.3,-22.9).lineTo(-1.1,-22.6).curveTo(-5.1,-22,-8.5,-20.1).curveTo(-13.3,-18.6,-17.5,-15.2).curveTo(-19,-14,-20.3,-12.6).curveTo(-23.2,-9.4,-24,-5.1).curveTo(-24.5,-3.5,-24.8,-1.8).curveTo(-24.8,8.2,-18.5,15.8).curveTo(-15.4,19.6,-11.5,21.8).curveTo(-9.8,22.4,-7.8,22.8).curveTo(-5.6,22.9,-3.1,22.5).lineTo(-2.3,22.4).lineTo(-1.3,22.7).closePath();
	this.shape_87.setTransform(284.4,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#B341D9").beginStroke().moveTo(1.8,23.4).curveTo(-0.4,23.2,-2.4,22.6).lineTo(-2.9,22.7).curveTo(-5.5,23.1,-7.9,22.9).curveTo(-9.7,22.6,-11.6,21.9).curveTo(-15.5,19.8,-18.8,15.9).curveTo(-25.1,8.3,-25.1,-1.9).curveTo(-24.9,-3.6,-24.3,-5.3).curveTo(-23.6,-9.6,-20.6,-13.1).curveTo(-19.3,-14.4,-17.8,-15.7).curveTo(-13.6,-19.2,-8.7,-20.7).curveTo(-5.2,-22.6,-1.1,-23.1).lineTo(1.2,-23.4).curveTo(3.2,-23.2,5.2,-22.7).lineTo(6.3,-22.2).curveTo(11.6,-20.8,15.9,-16.8).lineTo(17.7,-15.3).curveTo(22.8,-10.6,24.6,-4.6).curveTo(25.1,-2.3,25.1,0.1).lineTo(25.1,0.4).curveTo(24.5,8.1,19.1,13.8).curveTo(18.3,14.9,17.4,15.9).curveTo(12.9,21.1,6.9,22.9).curveTo(4.5,23.4,1.9,23.4).lineTo(1.8,23.4).closePath();
	this.shape_88.setTransform(291.1,0.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#990098").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(1.9,23.6).lineTo(2,23.6).curveTo(4.6,23.6,7,23.1).curveTo(13,21.2,17.5,16.1).curveTo(18.4,15.1,19.2,14).curveTo(24.6,8.2,25.2,0.6).lineTo(25.2,0.3).curveTo(25.2,-2.1,24.7,-4.4).curveTo(22.9,-10.4,17.8,-15.1).lineTo(16,-16.6).curveTo(11.7,-20.6,6.4,-22.1).lineTo(5.3,-22.6).curveTo(3.3,-23,1.3,-23.2).lineTo(-1,-23).curveTo(-5.1,-22.4,-8.6,-20.5).curveTo(-13.5,-19,-17.7,-15.6).curveTo(-19.2,-14.2,-20.5,-12.9).curveTo(-23.5,-9.5,-24.2,-5.1).curveTo(-24.8,-3.4,-25,-1.7).curveTo(-25,8.5,-18.7,16).curveTo(-15.4,19.9,-11.5,22.1).curveTo(-9.6,22.7,-7.8,23.1).curveTo(-5.4,23.3,-2.8,22.9).lineTo(-2.3,22.8).curveTo(-0.3,23.4,1.9,23.6).closePath();
	this.shape_89.setTransform(291,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#B13DD8").beginStroke().moveTo(1.6,23.7).curveTo(-0.4,23.6,-2.3,23.1).lineTo(-2.3,23.1).lineTo(-2.8,23.2).curveTo(-5.4,23.5,-7.8,23.3).curveTo(-9.7,22.9,-11.6,22.3).curveTo(-15.6,20.1,-18.9,16.2).curveTo(-25.4,8.6,-25.4,-1.8).curveTo(-25.1,-3.5,-24.7,-5.2).curveTo(-23.9,-9.8,-20.7,-13.3).curveTo(-19.5,-14.7,-18,-16).curveTo(-13.8,-19.6,-8.8,-21.2).curveTo(-5.2,-23,-1.1,-23.5).lineTo(1.4,-23.8).curveTo(3.4,-23.6,5.3,-23.1).lineTo(6.8,-22.5).lineTo(8,-22.1).curveTo(9.7,-21.5,11.4,-20.6).lineTo(12.3,-20).curveTo(13.7,-19.1,15,-18).lineTo(16,-17.2).lineTo(17.8,-15.6).curveTo(23.1,-10.9,24.9,-4.7).curveTo(25.3,-2.4,25.4,0.1).lineTo(25.3,0.4).curveTo(24.7,8.2,19.3,14.1).lineTo(17.6,16.2).curveTo(12.9,21.4,6.8,23.3).curveTo(4.4,23.7,1.8,23.8).lineTo(1.6,23.7).closePath();
	this.shape_90.setTransform(297.725,0.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#99009C").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-2.2,23.3).curveTo(-0.3,23.7,1.7,23.9).lineTo(1.9,23.9).curveTo(4.5,23.9,6.9,23.5).curveTo(13,21.6,17.8,16.4).lineTo(19.5,14.2).curveTo(24.9,8.4,25.4,0.5).lineTo(25.5,0.3).curveTo(25.4,-2.2,25,-4.5).curveTo(23.3,-10.7,17.9,-15.5).lineTo(16.1,-17).lineTo(15.1,-17.8).curveTo(13.8,-19,12.4,-19.9).lineTo(11.5,-20.4).curveTo(9.9,-21.3,8.1,-21.9).lineTo(6.9,-22.3).lineTo(5.4,-23).curveTo(3.6,-23.4,1.5,-23.6).lineTo(-1,-23.3).curveTo(-5.1,-22.9,-8.7,-21).curveTo(-13.7,-19.4,-17.9,-15.8).curveTo(-19.3,-14.5,-20.6,-13.1).curveTo(-23.8,-9.6,-24.5,-5).curveTo(-25,-3.4,-25.3,-1.6).curveTo(-25.2,8.8,-18.8,16.4).curveTo(-15.5,20.3,-11.5,22.4).curveTo(-9.6,23.1,-7.6,23.5).curveTo(-5.3,23.7,-2.7,23.3).lineTo(-2.2,23.3).closePath();
	this.shape_91.setTransform(297.6,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#AF38D7").beginStroke().moveTo(1.5,24.1).curveTo(-0.5,24,-2.3,23.5).lineTo(-2.6,23.6).curveTo(-5.2,23.9,-7.7,23.6).curveTo(-9.6,23.2,-11.5,22.6).curveTo(-15.6,20.4,-19,16.5).curveTo(-25.6,8.8,-25.6,-1.6).curveTo(-25.4,-3.5,-25,-5.2).curveTo(-24.2,-9.9,-20.9,-13.6).curveTo(-19.7,-15,-18.1,-16.4).curveTo(-13.9,-20,-8.9,-21.6).curveTo(-5.2,-23.5,-1,-23.9).lineTo(1.5,-24.1).curveTo(3.6,-23.9,5.5,-23.5).lineTo(6.8,-22.9).curveTo(12,-21.4,16.2,-17.6).lineTo(18,-16).curveTo(23.4,-11.1,25.2,-4.8).curveTo(25.6,-2.5,25.6,0).lineTo(25.6,0.3).curveTo(25,8.4,19.6,14.4).lineTo(17.8,16.5).curveTo(13,21.8,6.8,23.6).curveTo(4.3,24.1,1.7,24.1).lineTo(1.5,24.1).closePath();
	this.shape_92.setTransform(304.325,0.175);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#99009F").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(1.6,24.3).lineTo(1.9,24.3).curveTo(4.4,24.3,6.9,23.8).curveTo(13.1,22,17.9,16.7).lineTo(19.7,14.6).curveTo(25.2,8.5,25.7,0.5).lineTo(25.7,0.2).curveTo(25.7,-2.3,25.3,-4.7).curveTo(23.5,-10.9,18.2,-15.8).lineTo(16.3,-17.4).curveTo(12.1,-21.3,6.9,-22.8).lineTo(5.6,-23.3).curveTo(3.7,-23.7,1.6,-23.9).lineTo(-0.8,-23.8).curveTo(-5.1,-23.3,-8.7,-21.4).curveTo(-13.8,-19.8,-18,-16.2).curveTo(-19.5,-14.9,-20.8,-13.4).curveTo(-24.1,-9.7,-24.8,-5).curveTo(-25.2,-3.3,-25.5,-1.4).curveTo(-25.5,9,-18.8,16.6).curveTo(-15.5,20.6,-11.4,22.8).curveTo(-9.5,23.4,-7.6,23.8).curveTo(-5.1,24.1,-2.4,23.8).lineTo(-2.2,23.7).curveTo(-0.4,24.2,1.6,24.3).closePath();
	this.shape_93.setTransform(304.2,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#AE34D6").beginStroke().moveTo(1.4,24.5).curveTo(-0.5,24.4,-2.3,24).lineTo(-2.3,24).lineTo(-2.4,24).curveTo(-5.1,24.3,-7.6,24).curveTo(-9.6,23.6,-11.5,23).curveTo(-15.6,20.7,-19.1,16.8).curveTo(-25.9,9.1,-25.9,-1.5).curveTo(-25.7,-3.3,-25.2,-5.2).curveTo(-24.4,-10,-21.1,-13.8).curveTo(-19.9,-15.3,-18.3,-16.6).curveTo(-14.1,-20.4,-9,-22).curveTo(-5.2,-23.9,-0.9,-24.3).lineTo(1.7,-24.5).curveTo(3.7,-24.3,5.7,-23.8).lineTo(6.9,-23.3).curveTo(12.1,-21.8,16.3,-17.9).lineTo(18.2,-16.4).curveTo(23.6,-11.4,25.4,-4.9).curveTo(25.9,-2.5,25.9,0).lineTo(25.9,0.3).curveTo(25.3,8.5,19.8,14.6).curveTo(19,15.8,18,16.9).curveTo(13.1,22.2,6.7,24).curveTo(4.3,24.5,1.6,24.5).lineTo(1.4,24.5).closePath();
	this.shape_94.setTransform(310.925,0.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#9900A3").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-2.2,24.1).lineTo(-2.2,24.1).curveTo(-0.4,24.5,1.4,24.7).lineTo(1.7,24.7).curveTo(4.4,24.6,6.8,24.1).curveTo(13.2,22.4,18.1,17).curveTo(19.1,15.9,19.9,14.8).curveTo(25.4,8.7,25.9,0.4).lineTo(25.9,0.2).curveTo(26,-2.4,25.5,-4.8).curveTo(23.7,-11.2,18.3,-16.2).lineTo(16.4,-17.7).curveTo(12.2,-21.6,7,-23.1).lineTo(5.8,-23.7).curveTo(3.8,-24.1,1.7,-24.4).lineTo(-0.8,-24.1).curveTo(-5.1,-23.8,-8.9,-21.9).curveTo(-14,-20.3,-18.3,-16.5).curveTo(-19.8,-15.1,-21.1,-13.7).curveTo(-24.3,-9.8,-25.2,-5).curveTo(-25.6,-3.2,-25.8,-1.4).curveTo(-25.8,9.2,-19.1,16.9).curveTo(-15.5,20.9,-11.4,23.1).curveTo(-9.5,23.7,-7.5,24.1).curveTo(-5,24.4,-2.3,24.1).lineTo(-2.3,24.1).lineTo(-2.2,24.1).closePath();
	this.shape_95.setTransform(310.85,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#AC30D6").beginStroke().moveTo(1.2,24.9).curveTo(-0.5,24.7,-2.3,24.4).curveTo(-5,24.6,-7.6,24.3).curveTo(-9.5,24,-11.5,23.2).curveTo(-15.7,21.1,-19.3,17.1).curveTo(-26.2,9.3,-26.1,-1.4).curveTo(-26,-3.3,-25.6,-5.1).curveTo(-24.7,-10.2,-21.4,-14.1).curveTo(-20,-15.6,-18.5,-17).curveTo(-14.3,-20.8,-9.1,-22.5).curveTo(-5.3,-24.3,-0.8,-24.7).lineTo(1.8,-24.8).curveTo(3.8,-24.6,5.8,-24.2).lineTo(7.1,-23.6).lineTo(8.3,-23.3).curveTo(12.2,-21.9,15.5,-19.2).lineTo(16.5,-18.3).lineTo(18.4,-16.7).curveTo(23.9,-11.6,25.6,-5).curveTo(26.1,-2.6,26.2,-0.1).lineTo(26.1,0.3).curveTo(25.6,8.7,20,14.9).lineTo(18.2,17.1).curveTo(13.2,22.6,6.6,24.3).curveTo(4.1,24.9,1.5,24.9).lineTo(1.2,24.9).closePath();
	this.shape_96.setTransform(317.55,0.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#9900A6").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(1.3,25).lineTo(1.6,25).curveTo(4.2,25,6.7,24.5).curveTo(13.3,22.7,18.3,17.3).lineTo(20.1,15).curveTo(25.7,8.8,26.2,0.4).lineTo(26.3,0.1).curveTo(26.2,-2.5,25.7,-4.9).curveTo(24,-11.5,18.5,-16.6).lineTo(16.6,-18.2).lineTo(15.6,-19).curveTo(12.3,-21.7,8.4,-23.1).lineTo(7.2,-23.5).lineTo(5.9,-24).curveTo(3.9,-24.5,1.9,-24.7).lineTo(-0.7,-24.6).curveTo(-5.2,-24.1,-9,-22.3).curveTo(-14.2,-20.7,-18.4,-16.8).curveTo(-19.9,-15.4,-21.3,-14).curveTo(-24.6,-10,-25.5,-5).curveTo(-25.9,-3.2,-26,-1.3).curveTo(-26.1,9.4,-19.2,17.3).curveTo(-15.6,21.2,-11.4,23.4).curveTo(-9.4,24.1,-7.5,24.5).curveTo(-4.9,24.8,-2.2,24.6).curveTo(-0.4,24.9,1.3,25).closePath();
	this.shape_97.setTransform(317.45,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#AA2BD5").beginStroke().moveTo(1.1,25.2).curveTo(-0.5,25.1,-2.1,24.8).lineTo(-2.2,24.8).curveTo(-4.9,25,-7.4,24.7).curveTo(-9.5,24.3,-11.4,23.5).curveTo(-15.8,21.4,-19.3,17.4).curveTo(-26.4,9.5,-26.4,-1.3).curveTo(-26.3,-3.2,-25.9,-5).curveTo(-25,-10.2,-21.6,-14.4).curveTo(-20.2,-15.9,-18.7,-17.3).curveTo(-14.4,-21.2,-9.2,-22.9).curveTo(-5.3,-24.8,-0.8,-25.1).lineTo(1.9,-25.3).curveTo(4,-25,6,-24.5).lineTo(7.6,-23.9).curveTo(12.6,-22.4,16.7,-18.7).lineTo(18.6,-17.1).curveTo(24.1,-11.9,25.9,-5.2).curveTo(26.4,-2.7,26.4,-0.1).lineTo(26.4,0.2).curveTo(25.9,8.8,20.3,15.2).curveTo(19.4,16.3,18.5,17.4).curveTo(13.4,22.9,6.7,24.7).curveTo(4.1,25.2,1.4,25.2).lineTo(1.1,25.2).closePath();
	this.shape_98.setTransform(324.15,0.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#9900A9").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-2,25).curveTo(-0.4,25.3,1.2,25.4).lineTo(1.5,25.4).curveTo(4.2,25.3,6.8,24.8).curveTo(13.5,23.1,18.6,17.5).curveTo(19.5,16.5,20.4,15.4).curveTo(26,9,26.5,0.4).lineTo(26.5,0.1).curveTo(26.5,-2.5,26,-5).curveTo(24.2,-11.7,18.7,-16.9).lineTo(16.8,-18.5).curveTo(12.7,-22.2,7.7,-23.8).lineTo(6.1,-24.4).curveTo(4.1,-24.9,2,-25.1).lineTo(-0.7,-24.9).curveTo(-5.2,-24.6,-9.1,-22.8).curveTo(-14.3,-21.1,-18.6,-17.2).curveTo(-20.1,-15.7,-21.5,-14.2).curveTo(-24.9,-10.1,-25.8,-4.9).curveTo(-26.2,-3.1,-26.3,-1.2).curveTo(-26.3,9.6,-19.2,17.5).curveTo(-15.7,21.6,-11.3,23.7).curveTo(-9.4,24.5,-7.3,24.8).curveTo(-4.8,25.2,-2.1,25).closePath();
	this.shape_99.setTransform(324.05,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#A927D4").beginStroke().moveTo(1.1,25.6).curveTo(-0.7,25.5,-2.3,25.2).curveTo(-4.9,25.4,-7.4,25.1).curveTo(-9.4,24.6,-11.3,23.9).curveTo(-15.7,21.8,-19.4,17.7).curveTo(-26.6,9.8,-26.6,-1.1).curveTo(-26.5,-3.1,-26.1,-5).curveTo(-25.2,-10.4,-21.8,-14.6).curveTo(-20.5,-16.2,-18.8,-17.6).curveTo(-14.5,-21.6,-9.3,-23.4).curveTo(-5.3,-25.2,-0.7,-25.5).lineTo(2.1,-25.6).curveTo(4.1,-25.4,6.2,-24.9).lineTo(7.9,-24.2).curveTo(12.8,-22.7,16.8,-19.1).lineTo(18.7,-17.4).curveTo(24.4,-12.1,26.2,-5.2).curveTo(26.6,-2.8,26.6,-0.1).lineTo(26.6,0.2).curveTo(26.3,9,20.5,15.5).curveTo(19.7,16.7,18.6,17.7).curveTo(13.4,23.3,6.6,25.1).curveTo(4,25.6,1.3,25.6).lineTo(1.1,25.6).closePath();
	this.shape_100.setTransform(330.75,0.1417);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#9900AD").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(1.1,25.7).lineTo(1.3,25.7).curveTo(4.1,25.7,6.6,25.2).curveTo(13.5,23.4,18.7,17.8).curveTo(19.7,16.8,20.6,15.6).curveTo(26.3,9.1,26.7,0.4).lineTo(26.7,0).curveTo(26.6,-2.7,26.2,-5.1).curveTo(24.5,-12,18.8,-17.3).lineTo(16.9,-19).curveTo(12.9,-22.5,7.9,-24.1).lineTo(6.3,-24.8).curveTo(4.2,-25.2,2.1,-25.5).lineTo(-0.7,-25.4).curveTo(-5.2,-25.1,-9.2,-23.2).curveTo(-14.4,-21.4,-18.8,-17.5).curveTo(-20.4,-16.1,-21.7,-14.5).curveTo(-25.2,-10.3,-26.1,-4.9).curveTo(-26.4,-3,-26.6,-1).curveTo(-26.6,9.9,-19.4,17.8).curveTo(-15.7,21.9,-11.3,24).curveTo(-9.3,24.8,-7.3,25.2).curveTo(-4.9,25.5,-2.3,25.4).curveTo(-0.6,25.7,1.1,25.7).closePath();
	this.shape_101.setTransform(330.7,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#A723D3").beginStroke().moveTo(0.9,26).lineTo(0.5,25.9).lineTo(-1.6,25.8).lineTo(-2.3,25.7).curveTo(-4.9,25.8,-7.3,25.4).curveTo(-9.3,25,-11.3,24.2).curveTo(-15.8,22.1,-19.6,18).curveTo(-26.9,10,-26.9,-1).curveTo(-26.8,-3.1,-26.4,-5).curveTo(-25.6,-10.5,-22,-14.9).curveTo(-20.7,-16.5,-19.1,-18).curveTo(-14.7,-22,-9.4,-23.8).curveTo(-5.3,-25.6,-0.6,-25.9).lineTo(2.1,-26).curveTo(4.3,-25.7,6.3,-25.2).lineTo(7.7,-24.7).curveTo(12.8,-23.2,17,-19.5).lineTo(18.9,-17.7).curveTo(24.7,-12.3,26.4,-5.3).curveTo(26.9,-2.9,26.9,-0.2).lineTo(26.9,0.2).curveTo(26.5,9.1,20.8,15.7).curveTo(19.9,16.9,18.8,18).curveTo(13.5,23.7,6.6,25.4).curveTo(3.9,25.9,1.2,26).lineTo(0.9,26).closePath();
	this.shape_102.setTransform(337.375,0.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#9900B0").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.5,25.9).lineTo(0.6,26.1).lineTo(0.9,26.1).lineTo(1.3,26.1).curveTo(4,26,6.7,25.6).curveTo(13.6,23.8,18.9,18.2).curveTo(20,17.1,20.8,15.8).curveTo(26.6,9.2,26.9,0.3).lineTo(27,-0.1).curveTo(27,-2.8,26.5,-5.2).curveTo(24.7,-12.2,19,-17.6).lineTo(17,-19.4).curveTo(12.9,-23.1,7.8,-24.6).lineTo(6.4,-25.1).curveTo(4.4,-25.6,2.2,-25.8).lineTo(-0.5,-25.8).curveTo(-5.3,-25.5,-9.3,-23.7).curveTo(-14.6,-21.8,-19,-17.8).curveTo(-20.6,-16.4,-21.9,-14.8).curveTo(-25.5,-10.4,-26.4,-4.9).curveTo(-26.7,-2.9,-26.9,-0.9).curveTo(-26.8,10.1,-19.5,18.2).curveTo(-15.7,22.3,-11.2,24.4).curveTo(-9.2,25.1,-7.2,25.6).curveTo(-4.8,25.9,-2.2,25.8).lineTo(-1.5,25.9).closePath();
	this.shape_103.setTransform(337.3,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#A51ED2").beginStroke().moveTo(0.8,26.3).lineTo(-1.8,26.1).lineTo(-2.2,26.1).lineTo(-2.2,26.1).curveTo(-4.8,26.2,-7.2,25.8).curveTo(-9.3,25.3,-11.2,24.6).curveTo(-15.9,22.4,-19.7,18.3).curveTo(-27.2,10.2,-27.2,-0.9).curveTo(-27.1,-3,-26.7,-4.9).curveTo(-25.8,-10.6,-22.2,-15.2).curveTo(-20.8,-16.8,-19.2,-18.3).curveTo(-14.8,-22.4,-9.5,-24.3).curveTo(-5.3,-26.1,-0.5,-26.3).lineTo(2.3,-26.3).curveTo(4.5,-26.1,6.5,-25.6).lineTo(7.9,-25.1).curveTo(13,-23.5,17.2,-19.9).lineTo(19.1,-18.1).curveTo(24.9,-12.6,26.6,-5.5).curveTo(27.1,-2.9,27.2,-0.2).lineTo(27.2,0.1).curveTo(26.9,9.2,21,16).curveTo(20.1,17.2,19.1,18.3).curveTo(13.6,24,6.5,25.8).curveTo(3.9,26.3,1.1,26.3).lineTo(0.8,26.3).closePath();
	this.shape_104.setTransform(343.975,0.1125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#9900B4").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-2.1,26.2).lineTo(-1.7,26.3).lineTo(0.9,26.5).lineTo(1.2,26.5).curveTo(3.9,26.4,6.6,25.9).curveTo(13.7,24.1,19.2,18.4).curveTo(20.2,17.3,21.1,16.1).curveTo(27,9.4,27.3,0.3).lineTo(27.3,-0.1).curveTo(27.2,-2.8,26.7,-5.3).curveTo(25,-12.5,19.2,-18).lineTo(17.3,-19.7).curveTo(13,-23.4,7.9,-25).lineTo(6.6,-25.5).curveTo(4.6,-26,2.3,-26.2).lineTo(-0.5,-26.2).curveTo(-5.2,-26,-9.4,-24.1).curveTo(-14.7,-22.3,-19.2,-18.2).curveTo(-20.7,-16.7,-22.1,-15).curveTo(-25.8,-10.5,-26.6,-4.8).curveTo(-27,-2.8,-27.1,-0.8).curveTo(-27.1,10.3,-19.6,18.4).curveTo(-15.8,22.6,-11.2,24.7).curveTo(-9.2,25.4,-7.1,25.9).curveTo(-4.7,26.3,-2.2,26.2).closePath();
	this.shape_105.setTransform(343.9,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#A31AD1").beginStroke().moveTo(0.7,26.7).lineTo(0.4,26.7).lineTo(-0.9,26.6).lineTo(-2.3,26.5).curveTo(-4.7,26.5,-7,26.1).curveTo(-9.2,25.7,-11.2,24.9).curveTo(-15.9,22.8,-19.8,18.6).curveTo(-27.5,10.5,-27.4,-0.8).curveTo(-27.3,-2.9,-26.9,-4.9).curveTo(-26.1,-10.8,-22.3,-15.4).curveTo(-21,-17.1,-19.4,-18.6).curveTo(-14.9,-22.8,-9.5,-24.7).curveTo(-5.4,-26.5,-0.4,-26.7).lineTo(2.4,-26.7).curveTo(4.7,-26.5,6.7,-26).lineTo(8.4,-25.4).lineTo(10.5,-24.6).lineTo(16,-21.3).lineTo(16.3,-21.2).lineTo(17.4,-20.3).lineTo(19.3,-18.5).curveTo(25.2,-12.8,26.9,-5.6).curveTo(27.4,-3,27.4,-0.3).lineTo(27.4,0.1).curveTo(27.2,9.4,21.3,16.3).lineTo(19.3,18.6).curveTo(13.7,24.4,6.6,26.1).curveTo(3.9,26.7,1,26.7).lineTo(0.7,26.7).closePath();
	this.shape_106.setTransform(350.55,0.1125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#9900B7").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(0.8,26.8).lineTo(1,26.8).curveTo(3.9,26.8,6.6,26.3).curveTo(13.8,24.5,19.3,18.7).lineTo(21.4,16.4).curveTo(27.3,9.5,27.5,0.3).lineTo(27.5,-0.2).curveTo(27.4,-2.9,27,-5.5).curveTo(25.2,-12.7,19.4,-18.4).lineTo(17.4,-20.2).lineTo(16.3,-21.1).lineTo(16.1,-21.2).lineTo(10.6,-24.5).lineTo(8.4,-25.3).lineTo(6.7,-25.8).curveTo(4.7,-26.3,2.5,-26.6).lineTo(-0.4,-26.6).curveTo(-5.3,-26.3,-9.5,-24.6).curveTo(-14.9,-22.7,-19.4,-18.5).curveTo(-20.9,-17,-22.3,-15.3).curveTo(-26,-10.7,-26.9,-4.8).curveTo(-27.3,-2.8,-27.4,-0.7).curveTo(-27.4,10.6,-19.8,18.7).curveTo(-15.8,22.9,-11.1,25).curveTo(-9.1,25.8,-7,26.3).curveTo(-4.7,26.6,-2.2,26.6).lineTo(-0.9,26.7).lineTo(0.4,26.8).lineTo(0.6,26.8).lineTo(0.8,26.8).closePath();
	this.shape_107.setTransform(350.5,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#A216D0").beginStroke().moveTo(0.6,27.1).lineTo(-1.9,26.9).lineTo(-2.4,26.9).curveTo(-4.7,26.9,-7,26.5).curveTo(-9.1,26,-11.1,25.3).curveTo(-15.9,23.1,-19.9,18.9).curveTo(-27.7,10.8,-27.7,-0.6).curveTo(-27.6,-2.8,-27.2,-4.8).curveTo(-26.3,-10.8,-22.5,-15.7).curveTo(-21.2,-17.4,-19.6,-18.9).curveTo(-15.1,-23.2,-9.7,-25.1).curveTo(-5.3,-26.9,-0.4,-27.1).curveTo(1.2,-27.1,2.6,-27).curveTo(4.8,-26.8,6.9,-26.3).lineTo(8.2,-25.8).lineTo(9.5,-25.4).curveTo(12.9,-24.1,16,-21.9).lineTo(16.1,-21.8).lineTo(16.2,-21.7).lineTo(17.5,-20.6).lineTo(19.6,-18.8).curveTo(25.5,-13.1,27.1,-5.6).curveTo(27.7,-3.1,27.7,-0.2).lineTo(27.7,0.1).curveTo(27.5,9.5,21.6,16.6).curveTo(20.6,17.8,19.5,19).curveTo(13.9,24.8,6.5,26.5).curveTo(3.8,27.1,0.9,27.1).lineTo(0.6,27.1).closePath();
	this.shape_108.setTransform(357.15,0.0917);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#9900BB").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-1.9,27).lineTo(0.6,27.2).lineTo(0.9,27.2).curveTo(3.8,27.1,6.5,26.6).curveTo(13.9,24.8,19.5,19.1).curveTo(20.6,17.9,21.6,16.6).curveTo(27.5,9.6,27.7,0.2).lineTo(27.7,-0.2).curveTo(27.7,-3,27.1,-5.6).curveTo(25.5,-13,19.6,-18.7).lineTo(17.5,-20.5).lineTo(16.2,-21.6).lineTo(16.1,-21.8).lineTo(16,-21.8).curveTo(12.9,-24.1,9.5,-25.3).lineTo(8.2,-25.7).lineTo(6.9,-26.2).curveTo(4.8,-26.8,2.6,-26.9).curveTo(1.2,-27.1,-0.4,-27).curveTo(-5.3,-26.8,-9.7,-25).curveTo(-15.1,-23.1,-19.6,-18.8).curveTo(-21.2,-17.3,-22.5,-15.6).curveTo(-26.3,-10.8,-27.2,-4.8).curveTo(-27.6,-2.7,-27.7,-0.5).curveTo(-27.7,10.8,-19.9,19).curveTo(-15.9,23.2,-11.1,25.4).curveTo(-9.1,26.1,-7,26.5).curveTo(-4.7,27,-2.4,27).lineTo(-1.9,27).closePath();
	this.shape_109.setTransform(357.15,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#A011CF").beginStroke().moveTo(0.5,27.5).lineTo(-2,27.3).curveTo(-4.5,27.3,-6.9,26.8).curveTo(-9.1,26.4,-11.1,25.6).curveTo(-16,23.5,-20,19.2).curveTo(-28,11,-28,-0.5).curveTo(-27.9,-2.7,-27.5,-4.8).curveTo(-26.6,-11,-22.7,-15.9).curveTo(-21.4,-17.7,-19.8,-19.2).curveTo(-15.3,-23.6,-9.8,-25.5).curveTo(-5.4,-27.3,-0.3,-27.5).curveTo(1.2,-27.5,2.7,-27.4).curveTo(4.9,-27.2,7.1,-26.6).lineTo(8.8,-26).lineTo(9,-26).lineTo(9.2,-25.9).curveTo(12,-24.9,14.4,-23.4).curveTo(15.8,-22.5,17.2,-21.4).lineTo(17.7,-21).lineTo(19.7,-19.1).curveTo(25.7,-13.3,27.4,-5.8).curveTo(27.9,-3.1,28,-0.3).lineTo(28,0.1).curveTo(27.8,9.7,21.8,16.9).curveTo(20.8,18.1,19.7,19.3).curveTo(13.9,25.1,6.4,26.9).curveTo(3.7,27.4,0.7,27.5).lineTo(0.5,27.5).closePath();
	this.shape_110.setTransform(363.775,0.0667);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#9900BE").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-0.2,-27.4).curveTo(-5.3,-27.2,-9.8,-25.5).curveTo(-15.2,-23.5,-19.8,-19.2).curveTo(-21.4,-17.6,-22.7,-15.8).curveTo(-26.6,-10.9,-27.5,-4.7).curveTo(-27.8,-2.7,-28,-0.5).curveTo(-27.9,11.1,-20,19.3).curveTo(-16,23.6,-11,25.6).curveTo(-9.1,26.5,-6.8,26.9).curveTo(-4.5,27.3,-2,27.4).lineTo(0.5,27.5).lineTo(0.8,27.5).curveTo(3.7,27.5,6.4,26.9).curveTo(13.9,25.2,19.7,19.4).curveTo(20.8,18.2,21.8,16.9).curveTo(27.8,9.8,28,0.2).lineTo(28,-0.2).curveTo(28,-3,27.5,-5.7).curveTo(25.7,-13.2,19.7,-19.1).lineTo(17.7,-20.9).lineTo(17.2,-21.3).curveTo(15.9,-22.4,14.4,-23.3).curveTo(12,-24.9,9.3,-25.8).lineTo(9,-25.9).lineTo(8.8,-26).lineTo(7.1,-26.6).curveTo(4.9,-27.1,2.7,-27.4).lineTo(0.8,-27.4).lineTo(-0.2,-27.4).closePath();
	this.shape_111.setTransform(363.75,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#9E0DCF").beginStroke().moveTo(0.4,27.9).lineTo(0.1,27.9).lineTo(-1.9,27.8).curveTo(-4.4,27.7,-6.8,27.2).curveTo(-9,26.8,-11,26).curveTo(-16,23.8,-20.1,19.6).curveTo(-28.2,11.3,-28.2,-0.4).curveTo(-28.2,-2.6,-27.8,-4.7).curveTo(-26.9,-11,-22.9,-16.2).curveTo(-21.6,-17.9,-19.9,-19.5).curveTo(-15.4,-23.9,-9.9,-25.9).curveTo(-5.4,-27.7,-0.2,-27.8).curveTo(1.3,-27.9,2.8,-27.7).curveTo(5.1,-27.5,7.2,-26.9).lineTo(8.8,-26.4).curveTo(13.7,-24.8,17.9,-21.3).lineTo(19.9,-19.4).curveTo(26,-13.5,27.7,-5.8).curveTo(28.2,-3.2,28.2,-0.3).lineTo(28.2,0.1).curveTo(28.1,9.9,22,17.2).curveTo(21,18.4,19.9,19.6).curveTo(14.1,25.5,6.4,27.3).curveTo(3.6,27.8,0.6,27.9).lineTo(0.4,27.9).closePath();
	this.shape_112.setTransform(370.375,0.0438);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#9900C2").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(0.4,27.9).lineTo(0.6,27.9).curveTo(3.6,27.9,6.5,27.3).curveTo(14.1,25.5,19.9,19.6).curveTo(21,18.4,22,17.2).curveTo(28.1,9.9,28.3,0.1).lineTo(28.3,-0.3).curveTo(28.2,-3.1,27.7,-5.8).curveTo(26,-13.5,20,-19.4).lineTo(17.9,-21.3).curveTo(13.8,-24.8,8.8,-26.4).lineTo(7.3,-26.9).curveTo(5.1,-27.5,2.9,-27.7).curveTo(1.4,-27.9,-0.2,-27.8).curveTo(-5.4,-27.7,-9.8,-25.9).curveTo(-15.4,-23.9,-19.9,-19.5).curveTo(-21.6,-17.9,-22.9,-16.1).curveTo(-26.8,-11,-27.8,-4.7).curveTo(-28.1,-2.6,-28.2,-0.4).curveTo(-28.2,11.3,-20.1,19.6).curveTo(-16,23.8,-11,26).curveTo(-9,26.8,-6.8,27.3).curveTo(-4.4,27.7,-1.9,27.8).lineTo(0.1,27.9).lineTo(0.3,27.9).lineTo(0.4,27.9).closePath();
	this.shape_113.setTransform(370.35,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#9C09CE").beginStroke().moveTo(0.2,28.2).lineTo(-1.5,28.1).curveTo(-4.2,28.1,-6.7,27.6).curveTo(-8.9,27.1,-11,26.2).curveTo(-16.1,24.2,-20.3,19.8).curveTo(-28.5,11.5,-28.5,-0.3).curveTo(-28.4,-2.5,-28.1,-4.6).curveTo(-27.1,-11.2,-23.1,-16.4).curveTo(-21.8,-18.3,-20.1,-19.9).curveTo(-15.5,-24.4,-9.9,-26.4).curveTo(-8.3,-27.1,-6.5,-27.5).lineTo(-6,-27.6).lineTo(-5.7,-27.7).lineTo(-5.4,-27.7).lineTo(-5,-27.8).lineTo(-2.6,-28.1).lineTo(-0.1,-28.2).lineTo(3,-28.1).curveTo(5.3,-27.9,7.4,-27.3).lineTo(10,-26.5).curveTo(14.2,-24.9,17.8,-22).lineTo(18,-21.7).lineTo(20.1,-19.9).curveTo(26.2,-13.8,27.9,-6).curveTo(28.4,-3.3,28.5,-0.3).lineTo(28.5,0).curveTo(28.4,10,22.3,17.4).curveTo(21.3,18.7,20.1,19.8).curveTo(14.2,25.9,6.4,27.6).curveTo(3.6,28.2,0.5,28.2).lineTo(0.2,28.2).closePath();
	this.shape_114.setTransform(376.975,0.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#9900C5").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-2.6,-28.1).lineTo(-5,-27.7).lineTo(-5.4,-27.6).lineTo(-5.7,-27.6).lineTo(-6,-27.5).lineTo(-6.4,-27.4).curveTo(-8.2,-27,-9.9,-26.4).curveTo(-15.5,-24.3,-20.1,-19.9).curveTo(-21.7,-18.2,-23.1,-16.4).curveTo(-27.1,-11.1,-28.1,-4.6).curveTo(-28.4,-2.5,-28.5,-0.3).curveTo(-28.5,11.6,-20.3,19.9).curveTo(-16.1,24.2,-10.9,26.3).curveTo(-8.9,27.1,-6.7,27.6).curveTo(-4.1,28.1,-1.4,28.2).lineTo(0.2,28.3).lineTo(0.5,28.3).curveTo(3.6,28.3,6.4,27.6).curveTo(14.2,26,20.1,19.9).curveTo(21.3,18.7,22.3,17.5).curveTo(28.5,10,28.5,0.1).lineTo(28.5,-0.3).curveTo(28.4,-3.3,28,-5.9).curveTo(26.3,-13.7,20.1,-19.8).lineTo(18.1,-21.7).lineTo(17.8,-21.9).curveTo(14.2,-24.9,10.1,-26.4).lineTo(7.4,-27.3).curveTo(5.3,-27.9,3,-28.1).lineTo(-0.1,-28.2).lineTo(-2.6,-28.1).closePath();
	this.shape_115.setTransform(376.95,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#9B04CD").beginStroke().moveTo(0.1,28.6).curveTo(-1.5,28.6,-3.1,28.5).curveTo(-4.9,28.3,-6.7,27.9).curveTo(-8.8,27.4,-10.9,26.6).curveTo(-16.1,24.5,-20.4,20.2).curveTo(-28.8,11.7,-28.7,-0.1).curveTo(-28.8,-2.4,-28.4,-4.6).curveTo(-27.5,-11.3,-23.3,-16.7).curveTo(-22,-18.5,-20.4,-20.2).curveTo(-15.7,-24.8,-10,-26.8).lineTo(-7.8,-27.6).lineTo(-7,-27.8).lineTo(-6.4,-27.9).lineTo(-6,-28).curveTo(-3.3,-28.6,-0.4,-28.6).lineTo(-0.2,-28.6).lineTo(-0.1,-28.6).lineTo(0.1,-28.6).lineTo(3,-28.5).curveTo(5.4,-28.3,7.5,-27.7).lineTo(8.1,-27.5).curveTo(10.7,-26.8,13,-25.5).curveTo(15.4,-24.3,17.5,-22.7).lineTo(18.2,-22.1).lineTo(20.3,-20.2).curveTo(26.5,-14,28.1,-6.1).curveTo(28.7,-3.3,28.8,-0.4).lineTo(28.8,0).curveTo(28.7,10.1,22.5,17.7).lineTo(20.3,20.2).curveTo(14.2,26.3,6.4,28).curveTo(3.5,28.6,0.4,28.6).lineTo(0.1,28.6).closePath();
	this.shape_116.setTransform(383.6,0.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#9900C9").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,-0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,-0,29).curveTo(-12,29,-20.5,20.5).closePath().moveTo(-6,-28).lineTo(-6.4,-27.9).lineTo(-7,-27.8).lineTo(-7.8,-27.5).lineTo(-10,-26.8).curveTo(-15.7,-24.7,-20.4,-20.2).curveTo(-22,-18.5,-23.3,-16.7).curveTo(-27.5,-11.3,-28.4,-4.6).curveTo(-28.8,-2.4,-28.7,-0.1).curveTo(-28.8,11.8,-20.4,20.2).curveTo(-16.1,24.5,-10.9,26.6).curveTo(-8.8,27.4,-6.7,28).curveTo(-4.9,28.3,-3.1,28.5).curveTo(-1.5,28.6,0.1,28.6).lineTo(0.4,28.6).curveTo(3.5,28.6,6.4,28).curveTo(14.2,26.3,20.3,20.2).lineTo(22.5,17.7).curveTo(28.7,10.2,28.8,0.1).lineTo(28.8,-0.4).curveTo(28.7,-3.3,28.1,-6).curveTo(26.5,-14,20.3,-20.2).lineTo(18.2,-22.1).lineTo(17.5,-22.6).curveTo(15.4,-24.3,13,-25.5).curveTo(10.7,-26.7,8.1,-27.5).lineTo(7.5,-27.6).curveTo(5.4,-28.3,3,-28.4).lineTo(0.1,-28.6).lineTo(-0.1,-28.6).lineTo(-0.2,-28.6).lineTo(-0.4,-28.6).curveTo(-3.3,-28.5,-6,-28).closePath();
	this.shape_117.setTransform(383.6,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#9900CC").beginStroke().moveTo(-20.5,20.5).curveTo(-29,12,-29,0).curveTo(-29,-12,-20.5,-20.5).curveTo(-12,-29,0,-29).curveTo(12,-29,20.5,-20.5).curveTo(29,-12,29,0).curveTo(29,12,20.5,20.5).curveTo(12,29,0,29).curveTo(-12,29,-20.5,20.5).closePath();
	this.shape_118.setTransform(390.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_118}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,448.2,58);


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
	this.instance = new lib.CachedBmp_628();
	this.instance.setTransform(43.9,9.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_629();
	this.instance_1.setTransform(-2,-2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_630();
	this.instance_2.setTransform(46,9.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,232,96);


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


(lib.line_lo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(7,1,1).moveTo(-100,0).lineTo(100,0);
	this.shape.setTransform(100.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line_lo, new cjs.Rectangle(-3.5,-3.5,207.1,7), null);


(lib.X = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(4,1,1).moveTo(12.4,12.4).lineTo(0,0).lineTo(12.4,-12.4).moveTo(-12.4,12.4).lineTo(0,0).lineTo(-12.4,-12.4);
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-14.4,28.9,28.8);


(lib.PopUpRec = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#B1B1B1").setStrokeStyle(1,1,1).moveTo(-230.6,-129.7).lineTo(230.6,-129.7).lineTo(230.6,129.7).lineTo(-230.6,129.7).closePath();
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-230.6,129.7).lineTo(-230.6,-129.7).lineTo(230.6,-129.7).lineTo(230.6,129.7).closePath();
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.5,-130.6,463.1,261.29999999999995);


(lib.Circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#8DDCF6").setStrokeStyle(5,1,1).moveTo(34.5,0).curveTo(34.5,14.2,24.4,24.4).curveTo(14.2,34.5,0,34.5).curveTo(-14.2,34.5,-24.4,24.4).curveTo(-34.5,14.2,-34.5,0).curveTo(-34.5,-14.2,-24.4,-24.4).curveTo(-14.2,-34.5,0,-34.5).curveTo(14.2,-34.5,24.4,-24.4).curveTo(34.5,-14.2,34.5,0).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#5DB8D7").beginStroke().moveTo(-24.4,24.4).curveTo(-34.4,14.3,-34.5,0).curveTo(-34.4,-14.3,-24.4,-24.4).curveTo(-14.3,-34.4,0,-34.5).curveTo(14.3,-34.4,24.4,-24.4).curveTo(34.4,-14.3,34.5,0).curveTo(34.4,14.3,24.4,24.4).curveTo(14.3,34.4,0,34.5).curveTo(-14.3,34.4,-24.4,24.4).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


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


(lib.bar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-224.1,26).lineTo(-224.1,-26).lineTo(224.1,-26).lineTo(224.1,26).closePath();
	this.shape.setTransform(224.05,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,0,448.1,52), null);


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
	this.shape.setTransform(238.475,-199.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4C4C4C").beginStroke().moveTo(5.9,0.1).lineTo(-6.2,0.1).lineTo(-6.2,-0.2).lineTo(5.9,-0.2).lineTo(6.2,-0.2).lineTo(6.2,0.1).lineTo(5.9,0.1).closePath();
	this.shape_1.setTransform(249.075,-199.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CFCFCF").beginStroke().moveTo(-1.3,0.3).curveTo(-1.8,0.2,-1.9,-0.3).lineTo(1.6,-0.3).lineTo(1.9,-0.3).lineTo(1.9,-0.2).lineTo(-1,0).lineTo(-1,0.3).lineTo(-1.3,0.3).closePath();
	this.shape_2.setTransform(217.675,-199.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#9A9A9A").beginStroke().moveTo(3,0.1).lineTo(-3.3,0.1).lineTo(-3.3,-0.2).lineTo(3,-0.2).lineTo(3.2,-0.2).lineTo(3.2,0.1).lineTo(3,0.1).closePath();
	this.shape_3.setTransform(281.8,-199.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#767676").beginStroke().moveTo(11.4,0.1).lineTo(-11.7,0.1).lineTo(-11.7,-0.2).lineTo(11.4,-0.2).lineTo(11.6,-0.2).lineTo(11.6,0.1).lineTo(11.4,0.1).closePath();
	this.shape_4.setTransform(266.9,-199.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#464646").beginStroke().moveTo(-1.6,-0.1).lineTo(0.4,-0.1).lineTo(0.7,-0.1).lineTo(1.3,-0.1).lineTo(1.6,-0.1).lineTo(1.6,0).curveTo(-0,0.2,-1.6,0.1).lineTo(-1.6,-0.1).closePath();
	this.shape_5.setTransform(141.325,-224.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-0.4,0.1).lineTo(-0.7,0.1).lineTo(-1.3,0.1).lineTo(-1.3,-0.2).lineTo(1,-0.2).lineTo(1.3,-0.2).lineTo(1.3,0.1).lineTo(1,0.1).lineTo(0.3,0.2).lineTo(-0.4,0.1).closePath();
	this.shape_6.setTransform(143.375,-224.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#9C9C9C").beginStroke().moveTo(1.9,0.2).lineTo(-2.2,0.2).lineTo(-2.2,-0.1).lineTo(1.9,-0.1).lineTo(2.2,-0.1).lineTo(2.2,0.2).lineTo(1.9,0.2).closePath();
	this.shape_7.setTransform(146.9,-224.3125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#7A7A7A").beginStroke().moveTo(3.6,0.1).lineTo(-3.8,0.1).lineTo(-3.8,-0.2).lineTo(3.6,-0.2).lineTo(3.8,-0.2).lineTo(3.8,0.1).lineTo(3.6,0.1).closePath();
	this.shape_8.setTransform(152.95,-224.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#525252").beginStroke().moveTo(5.1,0.2).lineTo(-5.5,0.2).lineTo(-5.5,-0.1).lineTo(-2.8,-0.1).lineTo(-2.5,-0.1).lineTo(5.1,-0.1).lineTo(5.4,-0.1).lineTo(5.4,0.2).lineTo(5.1,0.2).closePath();
	this.shape_9.setTransform(162.25,-224.3125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E3E3E").beginStroke().moveTo(-1.5,-0.2).lineTo(1.2,-0.2).lineTo(1.5,-0.2).lineTo(1.5,0).curveTo(0,0.1,-1.5,0.1).lineTo(-1.5,-0.2).closePath();
	this.shape_10.setTransform(169.175,-224.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CBCBCB").beginStroke().moveTo(9.9,0.1).lineTo(0.7,0.1).lineTo(0.4,0.1).lineTo(-2.2,0.1).lineTo(-2.5,0.1).lineTo(-10.2,0.1).lineTo(-10.2,-0.1).lineTo(9.9,-0.1).lineTo(10.2,-0.1).lineTo(10.2,0.1).lineTo(9.9,0.1).closePath();
	this.shape_11.setTransform(169.925,-224.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#818181").beginStroke().moveTo(16.6,0.2).lineTo(-16.9,0.2).lineTo(-16.9,-0.2).lineTo(16.6,-0.2).lineTo(16.9,-0.2).lineTo(16.9,0.2).lineTo(16.6,0.2).closePath();
	this.shape_12.setTransform(150.75,-274.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#636363").beginStroke().moveTo(4.3,0.2).lineTo(-4.6,0.2).lineTo(-4.6,-0.2).lineTo(4.3,-0.2).lineTo(4.6,-0.2).lineTo(4.6,0.2).lineTo(4.3,0.2).closePath();
	this.shape_13.setTransform(172.275,-274.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#D9D9D9").beginStroke().moveTo(7.8,0.1).lineTo(2.2,0.1).lineTo(2.2,-0.1).curveTo(5.1,-0.2,8.1,0).lineTo(8.1,0.1).lineTo(7.8,0.1).closePath().moveTo(-4,0.1).lineTo(-8.1,0.1).lineTo(-8.1,-0.1).lineTo(-3.7,0).lineTo(-3.7,0.1).lineTo(-4,0.1).closePath();
	this.shape_14.setTransform(201.75,-274.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#434343").beginStroke().moveTo(-17.4,-0.2).lineTo(-0.9,-0.2).lineTo(-0.6,-0.2).lineTo(3.5,-0.2).lineTo(3.8,-0.2).lineTo(9.4,-0.2).lineTo(9.7,-0.2).lineTo(15.3,-0.2).lineTo(15.6,-0.2).lineTo(17.1,-0.2).lineTo(17.4,-0.2).lineTo(17.4,0).curveTo(0,0.2,-17.4,0.2).lineTo(-17.4,-0.2).closePath();
	this.shape_15.setTransform(194.25,-274.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#696969").beginStroke().moveTo(-77.1,-0.2).lineTo(-24.1,-0.2).lineTo(29,-0.2).lineTo(77.1,-0.2).lineTo(77.1,0.1).lineTo(28.8,0.1).lineTo(-24.3,0.2).lineTo(-33.2,0.2).curveTo(-55.4,0.2,-77.1,-0.2).closePath();
	this.shape_16.setTransform(210.9,-249.3417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CDCDCD").beginStroke().moveTo(5.9,0.1).lineTo(-6.2,0.1).lineTo(-6.2,-0.1).lineTo(5.9,-0.1).lineTo(6.2,-0.1).lineTo(6.2,0.1).lineTo(5.9,0.1).closePath();
	this.shape_17.setTransform(242.6,-274.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#D1D1D1").beginStroke().moveTo(2.7,0.1).lineTo(-3,0.1).lineTo(-3,-0.1).curveTo(0,-0.2,3,0).lineTo(3,0.1).lineTo(2.7,0.1).closePath();
	this.shape_18.setTransform(230.5,-274.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#D5D5D5").beginStroke().moveTo(2.6,0.1).lineTo(-3,0.1).lineTo(-3,-0.1).curveTo(-0,-0.2,3,0).lineTo(3,0.1).lineTo(2.6,0.1).closePath();
	this.shape_19.setTransform(218.7,-274.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#868686").beginStroke().moveTo(-68.7,25.3).lineTo(-70.8,25.3).lineTo(-70.8,25.1).lineTo(-68.7,25.1).lineTo(-68.4,25.1).lineTo(-68.4,25.3).lineTo(-68.7,25.3).closePath().moveTo(70.5,-25.1).lineTo(52.8,-25.1).lineTo(52.8,-25.3).lineTo(70.5,-25.3).lineTo(70.8,-25.3).lineTo(70.8,-25.1).lineTo(70.5,-25.1).closePath();
	this.shape_20.setTransform(208.075,-249.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#ABABAB").beginStroke().moveTo(5.8,0.1).lineTo(-6.1,0.1).lineTo(-6.1,-0.1).lineTo(5.8,-0.1).lineTo(6.1,-0.1).lineTo(6.1,0.1).lineTo(5.8,0.1).closePath();
	this.shape_21.setTransform(254.85,-274.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#808080").beginStroke().moveTo(0.6,0.5).curveTo(-0.3,0.2,-0.9,-0.6).curveTo(0.2,-0.4,0.8,0.4).lineTo(0.9,0.6).lineTo(0.6,0.5).closePath();
	this.shape_22.setTransform(275.325,-319.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#9E9E9E").beginStroke().moveTo(59.2,0.2).lineTo(6.2,0.2).lineTo(-46.9,0.2).lineTo(-100,0.2).lineTo(-100,-0.1).lineTo(-46.9,-0.1).lineTo(6.2,-0.1).curveTo(32.7,-0.1,59.2,-0.2).curveTo(80,-0.3,99.9,0.2).lineTo(59.2,0.2).closePath();
	this.shape_23.setTransform(280.05,-224.6827);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#B7B7B7").beginStroke().moveTo(9.7,0.1).lineTo(-10,0.1).lineTo(-10,-0.2).lineTo(9.7,-0.2).lineTo(10,-0.2).lineTo(10,0.1).lineTo(9.7,0.1).closePath();
	this.shape_24.setTransform(295.075,-199.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#444444").beginStroke().moveTo(-6.3,-0.1).lineTo(6,-0.1).lineTo(6.3,-0.1).lineTo(6.3,-0).curveTo(0,0.2,-6.3,0.1).lineTo(-6.3,-0.1).closePath();
	this.shape_25.setTransform(373.675,-199.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-23.7,24.8).lineTo(-14.9,24.8).lineTo(-14.6,24.8).lineTo(-14.6,24.9).lineTo(-23.7,25.1).lineTo(-23.7,24.8).closePath().moveTo(15.8,-24.8).lineTo(15.8,-25.1).lineTo(20.8,-25.1).lineTo(21.1,-25.1).lineTo(23.4,-25.1).lineTo(23.8,-25.1).lineTo(23.8,-24.9).curveTo(20.5,-24.8,17.3,-24.8).lineTo(15.8,-24.8).closePath();
	this.shape_26.setTransform(328.85,-224.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#353535").beginStroke().moveTo(-6.8,0.1).lineTo(-6.8,-0.2).lineTo(6.5,-0.2).lineTo(6.8,-0.2).lineTo(6.8,0.1).lineTo(6.5,0.1).lineTo(1.5,0.1).lineTo(1.2,0.1).lineTo(-2.8,0.2).lineTo(-6.8,0.1).closePath();
	this.shape_27.setTransform(343.15,-249.6875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#2F2F2F").beginStroke().moveTo(2.2,0.1).lineTo(-2.5,0.1).lineTo(-2.5,-0.1).lineTo(2.2,-0.1).lineTo(2.5,-0.1).lineTo(2.5,0.1).lineTo(2.2,0.1).closePath();
	this.shape_28.setTransform(373.95,-249.9875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#8C8C8C").beginStroke().moveTo(3.2,0.1).lineTo(-3.6,0.1).lineTo(-3.6,-0.1).lineTo(3.2,-0.1).lineTo(3.5,-0.1).lineTo(3.5,0.1).lineTo(3.2,0.1).closePath();
	this.shape_29.setTransform(363.5,-249.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#606060").beginStroke().moveTo(4.7,0.1).lineTo(-2.3,0.1).lineTo(-2.7,0.1).lineTo(-5,0.1).lineTo(-5,-0.1).lineTo(4.7,-0.1).lineTo(5,-0.1).lineTo(5,0.1).lineTo(4.7,0.1).closePath();
	this.shape_30.setTransform(354.95,-249.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#949494").beginStroke().moveTo(12.2,0.2).lineTo(-12.5,0.2).lineTo(-12.5,-0.2).lineTo(12.2,-0.2).lineTo(12.5,-0.2).lineTo(12.5,0.2).lineTo(12.2,0.2).closePath();
	this.shape_31.setTransform(300.525,-249.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#C2C2C2").beginStroke().moveTo(15.5,0.2).lineTo(-15.8,0.2).lineTo(-15.8,-0.2).lineTo(7.2,-0.2).lineTo(7.5,-0.2).lineTo(15.5,-0.2).lineTo(15.8,-0.2).lineTo(15.8,0.2).lineTo(15.5,0.2).closePath();
	this.shape_32.setTransform(328.825,-249.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#575757").beginStroke().moveTo(-9.6,0).lineTo(7.3,-0.1).curveTo(-1.2,0.3,-9.6,0.3).lineTo(-9.6,0).closePath().moveTo(9.3,-0.3).curveTo(9.4,-0.3,9.5,-0.3).curveTo(9.6,-0.3,9.6,-0.3).curveTo(9.6,-0.3,9.6,-0.3).curveTo(9.6,-0.3,9.5,-0.3).lineTo(9.3,-0.2).closePath();
	this.shape_33.setTransform(288.4667,-274.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7B7B7B").beginStroke().moveTo(0.6,0.5).curveTo(-0.3,0.2,-0.9,-0.6).curveTo(0.2,-0.3,0.8,0.4).lineTo(0.9,0.6).lineTo(0.6,0.5).closePath();
	this.shape_34.setTransform(310.725,-295.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#B1B1B1").beginStroke().moveTo(-5.2,-0.1).lineTo(-1,-0.1).lineTo(-0.8,-0.1).lineTo(3.9,-0.1).lineTo(4.3,-0.1).lineTo(4.8,-0.1).lineTo(5.2,-0.1).lineTo(5.2,0).curveTo(-0,0.2,-5.2,0.1).lineTo(-5.2,-0.1).closePath();
	this.shape_35.setTransform(372.2,-249.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#585858").beginStroke().moveTo(-0.1,0.2).lineTo(-0.4,0.2).lineTo(-1,0.2).lineTo(-1,-0).lineTo(0.8,-0.2).lineTo(0.8,-0.3).lineTo(1,-0.3).curveTo(1.1,0.3,0.5,0.3).lineTo(-0.1,0.2).closePath();
	this.shape_36.setTransform(377.4333,-250.076);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("rgba(64,64,64,0.686)").beginStroke().moveTo(-26.4,77.5).lineTo(-58.3,56.2).curveTo(-74.1,45.5,-90.1,34.9).curveTo(-101.3,27.5,-112.2,19.8).lineTo(-121.4,13.1).lineTo(-119.8,13.2).lineTo(-119.6,13.1).lineTo(-117.5,13.1).lineTo(-117.2,13.1).curveTo(-115.6,13.1,-114,13).lineTo(-114,12.8).lineTo(-112.5,12.8).lineTo(-112.2,12.8).lineTo(-108.1,12.8).lineTo(-107.8,12.8).lineTo(-100.4,12.8).lineTo(-100.1,12.8).lineTo(-89.5,12.8).lineTo(-89.2,12.8).curveTo(-87.7,12.8,-86.3,12.7).lineTo(-86.3,12.5).lineTo(-77.1,12.5).lineTo(-76.8,12.5).lineTo(-23.7,12.5).lineTo(29.4,12.5).lineTo(82.4,12.5).lineTo(123.1,12.5).lineTo(123.1,19.8).lineTo(123.1,36.7).lineTo(123.1,37).lineTo(122.8,37).lineTo(110.5,37).lineTo(110.5,37.3).lineTo(110.1,37.3).lineTo(57.4,37.3).lineTo(57,37.3).lineTo(48.2,37.3).lineTo(47.9,37.3).lineTo(28.1,37.3).lineTo(27.9,37.3).lineTo(21.6,37.3).lineTo(21.4,37.3).lineTo(-1.7,37.3).lineTo(-1.9,37.3).lineTo(-14,37.3).lineTo(-14,37.6).lineTo(-14.3,37.6).lineTo(-17.2,37.6).lineTo(-17.2,37.5).lineTo(-19.6,37.3).lineTo(-19.6,37.6).lineTo(-19.9,37.6).lineTo(-37.3,37.6).lineTo(-37.6,37.6).lineTo(-41.2,37.6).curveTo(-41,38.1,-40.5,38.2).lineTo(-40.3,38.2).curveTo(-35.3,41.7,-30.1,45.1).curveTo(-14,55.6,1.3,66.8).lineTo(1.2,67.1).curveTo(-5.1,77.5,-12.8,86.5).lineTo(-26.4,77.5).closePath().moveTo(79.2,-12.6).lineTo(56.1,-12.6).lineTo(55.9,-12.6).lineTo(31.1,-12.6).lineTo(-17,-12.6).lineTo(-70.1,-12.6).lineTo(-123.1,-12.6).lineTo(-123.1,-12.8).lineTo(-123.1,-37).lineTo(-89.5,-37).lineTo(-89.2,-37).lineTo(-80.3,-37).lineTo(-80.1,-37).curveTo(-62.6,-37,-45.2,-37.1).lineTo(-45.2,-37.3).lineTo(-41.4,-37.3).lineTo(-41.2,-37.3).lineTo(-35.6,-37.3).lineTo(-35.2,-37.3).lineTo(-29.6,-37.3).lineTo(-29.4,-37.3).lineTo(-23.7,-37.3).lineTo(-23.4,-37.3).lineTo(-20.8,-37.3).lineTo(-20.5,-37.3).lineTo(-8.4,-37.3).lineTo(-8.1,-37.3).lineTo(3.7,-37.3).lineTo(4,-37.3).lineTo(21.6,-37.3).lineTo(21.9,-37.3).curveTo(30.4,-37.3,38.8,-37.7).lineTo(40.8,-37.8).lineTo(40.8,-37.8).lineTo(41.1,-37.9).curveTo(41.2,-37.9,41.2,-37.9).curveTo(41.2,-37.9,41.2,-37.9).curveTo(41.1,-37.9,41.1,-37.9).curveTo(41,-37.9,40.8,-37.9).lineTo(30.1,-44.9).curveTo(14,-55.2,-1.4,-66.5).curveTo(5.7,-76.2,12.4,-86.5).lineTo(12.6,-86.6).curveTo(15.2,-85.2,17.3,-83.4).lineTo(17.5,-83.3).curveTo(18.1,-82.5,19,-82.2).lineTo(19.3,-82.1).lineTo(51.1,-61).curveTo(52.1,-60.3,53,-59.4).curveTo(53.5,-58.7,54.4,-58.3).lineTo(54.7,-58.3).curveTo(70.5,-47.6,86.5,-36.9).lineTo(118.3,-15.8).curveTo(120,-14.7,121.4,-13.4).lineTo(121.3,-13.3).lineTo(119.6,-13.1).lineTo(119.2,-13.1).lineTo(114.5,-13.1).lineTo(114.5,-12.8).lineTo(114.3,-12.8).lineTo(110.1,-12.8).lineTo(109.9,-12.8).lineTo(103,-12.8).lineTo(102.7,-12.8).lineTo(93,-12.8).lineTo(92.7,-12.8).lineTo(79.4,-12.8).lineTo(79.4,-12.6).lineTo(79.2,-12.6).closePath();
	this.shape_37.setTransform(256.9,-237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.8,-323.5,246.2,173.1);


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
	this.text = new cjs.Text(" A-", "normal 700 38px 'Lato'", "#4A494A");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(69.5,48.1);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#832876").setStrokeStyle(7,1,1).moveTo(70,0).curveTo(70,29,49.5,49.5).curveTo(29,70,0,70).curveTo(-29,70,-49.5,49.5).curveTo(-70,29,-70,0).curveTo(-70,-29,-49.5,-49.5).curveTo(-29,-70,0,-70).curveTo(29,-70,49.5,-49.5).curveTo(70,-29,70,0).closePath();
	this.shape.setTransform(70,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

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
	this.text = new cjs.Text("HA", "normal 700 38px 'Lato'", "#4A494A");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(69.05,48.3);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#B82025").setStrokeStyle(7,1,1).moveTo(70,0).curveTo(70,29,49.5,49.5).curveTo(29,70,0,70).curveTo(-29,70,-49.5,49.5).curveTo(-70,29,-70,0).curveTo(-70,-27.9,-51,-48).curveTo(-50.3,-48.7,-49.5,-49.5).curveTo(-45,-54,-40,-57.6).curveTo(-22.6,-70,0,-70).curveTo(29,-70,49.5,-49.5).curveTo(70,-29,70,0).closePath();
	this.shape.setTransform(70,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acid, new cjs.Rectangle(-3.5,-3.5,147,147), null);


(lib.PersonButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circles
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#5DB8D7").beginStroke().moveTo(-24.4,24.4).curveTo(-34.4,14.3,-34.5,0).curveTo(-34.4,-14.3,-24.4,-24.4).curveTo(-14.3,-34.4,0,-34.5).curveTo(14.3,-34.4,24.4,-24.4).curveTo(34.4,-14.3,34.5,0).curveTo(34.4,14.3,24.4,24.4).curveTo(14.3,34.4,0,34.5).curveTo(-14.3,34.4,-24.4,24.4).closePath();

	this.instance = new lib.Circle("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.9,scaleY:0.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


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
	this.instance.setTransform(639.6,299.4,0.1725,0.1724,0,0,0,124.4,87.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-714.2,298.1).lineTo(-714.2,-298.1).lineTo(714.2,-298.1).lineTo(714.2,298.1).closePath();
	this.shape.setTransform(714.175,298.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1428.4,596.2);


(lib.CloseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// x
	this.instance = new lib.X("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-19.4,19.4).curveTo(-27.5,11.4,-27.5,0).curveTo(-27.5,-11.4,-19.4,-19.4).curveTo(-11.4,-27.5,0,-27.5).curveTo(11.4,-27.5,19.4,-19.4).curveTo(27.5,-11.4,27.5,0).curveTo(27.5,11.4,19.4,19.4).curveTo(11.4,27.5,0,27.5).curveTo(-11.4,27.5,-19.4,19.4).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D10B0B").beginStroke().moveTo(-19.4,19.4).curveTo(-27.5,11.4,-27.5,0).curveTo(-27.5,-11.4,-19.4,-19.4).curveTo(-11.4,-27.5,0,-27.5).curveTo(11.4,-27.5,19.4,-19.4).curveTo(27.5,-11.4,27.5,0).curveTo(27.5,11.4,19.4,19.4).curveTo(11.4,27.5,0,27.5).curveTo(-11.4,27.5,-19.4,19.4).closePath();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#D10B0B").beginStroke().moveTo(-17.5,17.5).curveTo(-24.8,10.3,-24.8,0).curveTo(-24.8,-10.3,-17.5,-17.5).curveTo(-10.3,-24.8,0,-24.8).curveTo(10.3,-24.8,17.5,-17.5).curveTo(24.8,-10.3,24.8,0).curveTo(24.8,10.3,17.5,17.5).curveTo(10.3,24.8,0,24.8).curveTo(-10.3,24.8,-17.5,17.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


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
	this.instance = new lib.CachedBmp_632();
	this.instance.setTransform(10.5,41.7,0.1275,0.1275);

	this.instance_1 = new lib.Bubbles("synched",29);
	this.instance_1.setTransform(31.75,26.5,0.1069,0.1069,0,0,0,1,0.5);

	this.instance_2 = new lib.CachedBmp_631();
	this.instance_2.setTransform(0,23.25,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0.7,97.7,165), null);


(lib.flask_root = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ph3:73,ph4:104,ph1:0,"0":40,ph2:43,"ph3":73,"ph4":104,ph5:135,ph6:166,ph7:197,ph8:228,ph9:259,ph10:290,ph11:321,ph12:352,ph13:383,ph14:414,ph15:445};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_40 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.play();
	}
	this.frame_70 = function() {
		this.gotoAndPlay(44);
	}
	this.frame_73 = function() {
		this.play();
	}
	this.frame_101 = function() {
		this.gotoAndPlay(74);
	}
	this.frame_104 = function() {
		this.play();
	}
	this.frame_132 = function() {
		this.gotoAndPlay(105);
	}
	this.frame_135 = function() {
		this.play();
	}
	this.frame_163 = function() {
		this.gotoAndPlay(136);
	}
	this.frame_166 = function() {
		this.play();
	}
	this.frame_194 = function() {
		this.gotoAndPlay(167);
	}
	this.frame_197 = function() {
		this.play();
	}
	this.frame_225 = function() {
		this.gotoAndPlay(198);
	}
	this.frame_228 = function() {
		this.play();
	}
	this.frame_256 = function() {
		this.gotoAndPlay(229);
	}
	this.frame_259 = function() {
		this.play();
	}
	this.frame_287 = function() {
		this.gotoAndPlay(260);
	}
	this.frame_290 = function() {
		this.play();
	}
	this.frame_318 = function() {
		this.gotoAndPlay(291);
	}
	this.frame_321 = function() {
		this.play();
	}
	this.frame_349 = function() {
		this.gotoAndPlay(322);
	}
	this.frame_352 = function() {
		this.play();
	}
	this.frame_380 = function() {
		this.gotoAndPlay(353);
	}
	this.frame_383 = function() {
		this.play();
	}
	this.frame_411 = function() {
		this.gotoAndPlay(384);
	}
	this.frame_414 = function() {
		this.play();
	}
	this.frame_442 = function() {
		this.gotoAndPlay(415);
	}
	this.frame_445 = function() {
		this.play();
	}
	this.frame_476 = function() {
		this.gotoAndPlay(446);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(3).call(this.frame_43).wait(27).call(this.frame_70).wait(3).call(this.frame_73).wait(28).call(this.frame_101).wait(3).call(this.frame_104).wait(28).call(this.frame_132).wait(3).call(this.frame_135).wait(28).call(this.frame_163).wait(3).call(this.frame_166).wait(28).call(this.frame_194).wait(3).call(this.frame_197).wait(28).call(this.frame_225).wait(3).call(this.frame_228).wait(28).call(this.frame_256).wait(3).call(this.frame_259).wait(28).call(this.frame_287).wait(3).call(this.frame_290).wait(28).call(this.frame_318).wait(3).call(this.frame_321).wait(28).call(this.frame_349).wait(3).call(this.frame_352).wait(28).call(this.frame_380).wait(3).call(this.frame_383).wait(28).call(this.frame_411).wait(3).call(this.frame_414).wait(28).call(this.frame_442).wait(3).call(this.frame_445).wait(31).call(this.frame_476).wait(3));

	// code
	this.instance = new lib.CachedBmp_510();
	this.instance.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_1 = new lib.Bubbles("synched",16);
	this.instance_1.setTransform(31.75,17.65,0.1069,0.1069,0,0,0,1,0.5);

	this.instance_2 = new lib.CachedBmp_625();
	this.instance_2.setTransform(0,14.45,0.1275,0.1275);

	this.instance_3 = new lib.CachedBmp_512();
	this.instance_3.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_4 = new lib.CachedBmp_514();
	this.instance_4.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(48.9,74.05,1,1,0,0,0,48.9,82.9);

	this.instance_6 = new lib.CachedBmp_516();
	this.instance_6.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_7 = new lib.CachedBmp_518();
	this.instance_7.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_8 = new lib.CachedBmp_520();
	this.instance_8.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_9 = new lib.CachedBmp_522();
	this.instance_9.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_10 = new lib.CachedBmp_524();
	this.instance_10.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_11 = new lib.CachedBmp_526();
	this.instance_11.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_12 = new lib.CachedBmp_528();
	this.instance_12.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_13 = new lib.CachedBmp_530();
	this.instance_13.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_14 = new lib.CachedBmp_532();
	this.instance_14.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_15 = new lib.CachedBmp_534();
	this.instance_15.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_16 = new lib.CachedBmp_536();
	this.instance_16.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_17 = new lib.CachedBmp_538();
	this.instance_17.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_18 = new lib.CachedBmp_540();
	this.instance_18.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_19 = new lib.CachedBmp_542();
	this.instance_19.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_20 = new lib.CachedBmp_544();
	this.instance_20.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_21 = new lib.CachedBmp_546();
	this.instance_21.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_22 = new lib.CachedBmp_548();
	this.instance_22.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_23 = new lib.CachedBmp_550();
	this.instance_23.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_24 = new lib.CachedBmp_552();
	this.instance_24.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_25 = new lib.CachedBmp_554();
	this.instance_25.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_26 = new lib.CachedBmp_556();
	this.instance_26.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_27 = new lib.CachedBmp_558();
	this.instance_27.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_28 = new lib.CachedBmp_560();
	this.instance_28.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_29 = new lib.CachedBmp_562();
	this.instance_29.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_30 = new lib.CachedBmp_564();
	this.instance_30.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_31 = new lib.CachedBmp_566();
	this.instance_31.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_32 = new lib.CachedBmp_568();
	this.instance_32.setTransform(10.5,32.85,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:16}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:16}},{t:this.instance_3}]},40).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:20}},{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},27).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:25}},{t:this.instance_6}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:4}},{t:this.instance_7}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:0}},{t:this.instance_8}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:9}},{t:this.instance_9}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:14}},{t:this.instance_11}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:10}},{t:this.instance_12}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:19}},{t:this.instance_13}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:15}},{t:this.instance_14}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:24}},{t:this.instance_15}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:20}},{t:this.instance_16}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:29}},{t:this.instance_17}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:25}},{t:this.instance_18}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:4}},{t:this.instance_19}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:0}},{t:this.instance_20}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:9}},{t:this.instance_21}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:5}},{t:this.instance_22}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:14}},{t:this.instance_23}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:10}},{t:this.instance_24}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:11}},{t:this.instance_25}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:19}},{t:this.instance_26}]},25).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:15}},{t:this.instance_27}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:24}},{t:this.instance_28}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:20}},{t:this.instance_29}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:29}},{t:this.instance_30}]},28).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:26}},{t:this.instance_31}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:6}},{t:this.instance_32}]},31).wait(3));

	// ph_colors
	this.instance_33 = new lib.CachedBmp_570();
	this.instance_33.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_34 = new lib.Bubbles("synched",16);
	this.instance_34.setTransform(31.75,17.65,0.1069,0.1069,0,0,0,1,0.5);

	this.instance_35 = new lib.CachedBmp_625();
	this.instance_35.setTransform(0,14.45,0.1275,0.1275);

	this.instance_36 = new lib.CachedBmp_572();
	this.instance_36.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_37 = new lib.CachedBmp_574();
	this.instance_37.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_38 = new lib.CachedBmp_573();
	this.instance_38.setTransform(0,14.45,0.1275,0.1275);

	this.instance_39 = new lib.Symbol1();
	this.instance_39.setTransform(48.9,74.05,1,1,0,0,0,48.9,82.9);

	this.instance_40 = new lib.CachedBmp_576();
	this.instance_40.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_41 = new lib.CachedBmp_578();
	this.instance_41.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_42 = new lib.CachedBmp_580();
	this.instance_42.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_43 = new lib.CachedBmp_582();
	this.instance_43.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_44 = new lib.CachedBmp_584();
	this.instance_44.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_45 = new lib.CachedBmp_586();
	this.instance_45.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_46 = new lib.CachedBmp_588();
	this.instance_46.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_47 = new lib.CachedBmp_590();
	this.instance_47.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_48 = new lib.CachedBmp_592();
	this.instance_48.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_49 = new lib.CachedBmp_594();
	this.instance_49.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_50 = new lib.CachedBmp_596();
	this.instance_50.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_51 = new lib.CachedBmp_598();
	this.instance_51.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_52 = new lib.CachedBmp_600();
	this.instance_52.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_53 = new lib.CachedBmp_602();
	this.instance_53.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_54 = new lib.CachedBmp_604();
	this.instance_54.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_55 = new lib.CachedBmp_606();
	this.instance_55.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_56 = new lib.CachedBmp_608();
	this.instance_56.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_57 = new lib.CachedBmp_610();
	this.instance_57.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_58 = new lib.CachedBmp_612();
	this.instance_58.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_59 = new lib.CachedBmp_614();
	this.instance_59.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_60 = new lib.CachedBmp_616();
	this.instance_60.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_61 = new lib.CachedBmp_618();
	this.instance_61.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_62 = new lib.CachedBmp_620();
	this.instance_62.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_63 = new lib.CachedBmp_622();
	this.instance_63.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_64 = new lib.CachedBmp_624();
	this.instance_64.setTransform(10.5,32.85,0.1275,0.1275);

	this.instance_65 = new lib.CachedBmp_626();
	this.instance_65.setTransform(10.5,32.85,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:16}},{t:this.instance_33}]}).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:16}},{t:this.instance_36}]},40).to({state:[{t:this.instance_38},{t:this.instance_34,p:{startPosition:20}},{t:this.instance_37}]},3).to({state:[{t:this.instance_39}]},27).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:25}},{t:this.instance_40}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:4}},{t:this.instance_41}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:0}},{t:this.instance_42}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:9}},{t:this.instance_43}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:5}},{t:this.instance_44}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:14}},{t:this.instance_45}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:10}},{t:this.instance_46}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:19}},{t:this.instance_47}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:15}},{t:this.instance_48}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:24}},{t:this.instance_49}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:20}},{t:this.instance_50}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:29}},{t:this.instance_51}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:25}},{t:this.instance_52}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:4}},{t:this.instance_53}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:0}},{t:this.instance_54}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:9}},{t:this.instance_55}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:5}},{t:this.instance_56}]},3).to({state:[]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:10}},{t:this.instance_57}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:11}},{t:this.instance_58}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:19}},{t:this.instance_59}]},25).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:15}},{t:this.instance_60}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:24}},{t:this.instance_61}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:20}},{t:this.instance_62}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:29}},{t:this.instance_63}]},28).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:26}},{t:this.instance_64}]},3).to({state:[{t:this.instance_35},{t:this.instance_34,p:{startPosition:6}},{t:this.instance_65}]},31).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.1,97.7,165);


(lib.PopUps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {person0:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// close
	this.closeButton = new lib.CloseButton();
	this.closeButton.name = "closeButton";
	this.closeButton.setTransform(1862.45,374.2);
	this.closeButton._off = true;
	new cjs.ButtonHelper(this.closeButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1).to({_off:false},0).wait(1));

	// recs
	this.text = new cjs.Text("Learning Objectives", "normal 700 39px 'Open Sans'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 444;
	this.text.parent = this;
	this.text.setTransform(1352.3,401.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("\n1. Comprehend the titration graph of a monoprotic (HA) weak acid.\n\n2. Determine the pKa value and buffering capacity of a weak acid.\n\n3. Identify how the pKa value of a weak acid influences the position of a titration curve.\n\n4. Develop an intuitive understanding of the Hendersen-Hasselbalch equation.\n", "normal 400 20px 'Open Sans'");
	this.text_1.lineHeight = 34;
	this.text_1.lineWidth = 517;
	this.text_1.parent = this;
	this.text_1.setTransform(1352.25,465.2,0.9632,1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.instance = new lib.PopUpRec("single",0);
	this.instance.setTransform(1610.15,703.05,1.2561,2.8508,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1900.9,1073.6);


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
		//slider
		var root = this;
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		root.handle.on("mousedown", function (e)
		{
			e.currentTarget.offsetX = (stage.mouseX / stage.scaleX) - e.currentTarget.x;
			root.setProportion();
		});
		
		root.handle.on("pressmove", function(e)
		{
		     e.currentTarget.x = root.clamp((stage.mouseX / stage.scaleX) - e.currentTarget.offsetX, root.bar.x, root.bar.x + root.bar.nominalBounds.width);
		     root.setProportion();
		});
		
		root.setProportion = function ()
		{
			var prop = (root.handle.x - root.bar.x) / root.bar.nominalBounds.width;
		
			root.amount.x = root.handle.x;
			root.amount.text = Number(2.5 + prop * 12.0 * .75).toFixed(2);
			root.bar.gotoAndStop(Math.floor(root.bar.timeline.duration * prop));
			pka = Number.parseFloat(root.amount.text);
		};
		
		root.clamp = function (value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
		
			return value;
		};
		
		
		//combobox
		root.makeDropDown = function(dropDown, callBack, useHit)
		{
			if (!dropDown.started)
			{
				dropDown.addHit = function()
				{
					exportRoot.dropDownHit = new createjs.Shape();
					exportRoot.dropDownHit.graphics.beginFill("rgba(0,0,0,0.01)");
					exportRoot.dropDownHit.graphics.drawRect(0, 0, canvas.width, canvas.height);
					exportRoot.dropDownHit.graphics.endFill();
					exportRoot.addChildAt(exportRoot.dropDownHit, 0);
					
					exportRoot.dropDownHit.on("mousedown", function(e)
					{
						dropDown.closeAll();
					});
				};
				
				dropDown.open = function()
				{
					dropDown.toggled = true;
					dropDown.gotoAndStop(1);
				};
				
				dropDown.close = function()
				{
					dropDown.toggled = false;
					dropDown.gotoAndStop(0);
				};
				
				dropDown.closeAllOthers = function(e)
				{
					for (var i = exportRoot.dropDowns.length - 1; i >= 0; i--)
						if (exportRoot.dropDowns[i] !== e.currentTarget)
							exportRoot.dropDowns[i].close();
				};
				
				dropDown.closeAll = function(e)
				{
					for (var i = exportRoot.dropDowns.length - 1; i >= 0; i--)
						exportRoot.dropDowns[i].close();
				};
				
				dropDown.register = function()
				{
					if (!exportRoot.dropDowns)
						exportRoot.dropDowns = [];
					
					if (exportRoot.dropDowns.indexOf(dropDown) === -1)
						exportRoot.dropDowns.push(dropDown);
				};
				
				dropDown.on("mousedown", function(e)
				{
					dropDown.closeAllOthers(e);
					
					if (e.currentTarget.currentFrame === 0) {
						e.currentTarget.open();
					} else {
						e.currentTarget.close();
					
					}
					if (callBack !== null)
						callBack(e, e.currentTarget);		
				});
				
				if (useHit && !exportRoot.dropDownHit)
					dropDown.addHit();
				
				if (!exportRoot.dropDownEsc)
				{
					window.addEventListener("keydown", function(e)
					{
						if (e.keyCode === 27)
							dropDown.closeAll();
					});
					
					exportRoot.dropDownEsc = true;
				}
				
				dropDown.register();
				dropDown.stop();
				dropDown.toggled = false;				
				dropDown.started = true;
			}
		};
		
		root.stop();
		root.setProportion();
		//plot titration curve for pka + log(OH/H) at a constant titration of 0.02.
		
		var _this = this;
		
		var constant_titration = 0.0002; //could be a button press that increments - titrating burrette
		var previous_titration = 0.000;
		var graph_resolution = 500.0;
		
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
		
		
		//for future use
		function pushAcids() {
			acids.push(["Oxalic", "H2C2O4", "HC2O4-", Number(1.23).toFixed(2)]);
			acids.push(["Sulfurous", "H2SO3", "HSO3-", Number(1.81).toFixed(2)]);
			acids.push(["Phosphoric", "H3PO4", "H2PO4-", Number(2.12).toFixed(2)]);
			acids.push(["Arsenic", "H3AsO4", "H2AsO4-", Number(2.30).toFixed(2)]);
			acids.push(["Citric", "H2AsO4-", "H2C6H5O7-", Number(3.08).toFixed(2)]);
			acids.push(["Ascorbic", "H2C6H6O6", "HC6H6O6-", Number(4.10).toFixed(2)]);
			acids.push(["Carbonic", "H2CO3", "HCO3-", Number(6.37).toFixed(2)]);
			acids.push(["Boric", "H3BO3", "H3BO3-", Number(9.23).toFixed(2)]);
		}
		
		pushAcids();
		
		
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
		
			for (let i = 0; i < graph_resolution; i++) {
		
				base += constant_titration; //column b
				acid_moles = 0.1 - previous_titration; //column a
		
				//compute ph
				var ph = getpH(pka, base, acid_moles);
				//console.log("acid moles: " , acid_moles);
		
				//avoid NaNs - show 0 or last pH in this case
				if (isNaN(ph)) ph = 0; //or last_ph but this tends to plot an erroneous point
		
				//create the curve shape object - set name so it can be cleared
				var titration_curve = new createjs.Shape().set({
					name: "curve"
				});
		
				titration_curve.graphics.beginFill("black").drawCircle(0, 0, 4);
		
				_this.addChild(titration_curve);
		
				titration_curve.alpha = 0.5;
				titration_curve.x = 1020 + base * 10000; //10000 to account for base scaling
				titration_curve.y = 350 + getScaledValue(ph, 0, 14, 1000, 0); //assuming 800 x 800 canvas for graph
		
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
		//vars
		var _this = this;
		var ph_frame_number;
		
		//init
		this.buffering.visible = false;
		
		
		//listeners
		this.nodule.addEventListener("pressmove", playBeaker);
		this.plotbutton.addEventListener("click", drawCurve);
		
		
		//methods
		function updatepKa() {
			_this.pka.text = "pKa: " + Number(pka).toFixed(2);
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
		
		////popup
		_this.callPopUp = function(e)
		{
			_this.popUps.gotoAndStop(e.target.name); //goto frame labeled as such in symbol internal timeline
		};
		
		_this.dismissPopUp = function(e)
		{
			if (e.target.name === "closeButton" || e.target.name === "hit")
				_this.popUps.gotoAndStop(0);
		};
		
		_this.person0.on("click", _this.callPopUp);
		_this.popUps.on("click", _this.dismissPopUp);
		
		//node interactions
		stage.on('stagemousemove', function (e) {
			
			//console.log(this);
			console.log("print combopka ", combo_pka);
			
		
			//always update pka value for this version
			_this.nodule.on("pressmove", function () {
		
				//add dynamic scaling for slider
				//console.log("Available Width="+window.screen.availWidth);
				//console.log("Available Height="+window.screen.availHeight);
		
				/*_this.nodule.x = coords[e.localX];
				_this.nodule.y = coords[e.localY];*/
		
				_this.ph.text = "   pH: " + Number(getScaledValue(_this.x_marker.y, 350, 1350, 14, 0)).toFixed(2);
		
				//snap pH text to node
				_this.ph.setTransform(_this.nodule.x, _this.nodule.y);
		
				//use the dashed red line to determine position for OH
				var scale_factor = Number(getScaledValue(_this.y_marker.x, 1020, 2020, 0, 1)).toFixed(2);
				var inverse_scale_factor = 1 - scale_factor;
		
				var temp_ph = Number(getScaledValue(_this.x_marker.y, 350, 1350, 14, 0)).toFixed(2);
			
				//are we buffering?
				if (temp_ph > (pka - 1) && temp_ph < (pka + 1)) {
					_this.buffering.visible = true;
				} else {
					_this.buffering.visible = false;
				}
		
				//show/hide important moments 
				if (scale_factor > .49 && scale_factor < .52) {
					_this.infobox.visible = true;
					_this.infobox.text = "You've reached the midpoint where there are equal parts HA and A-."
				} else if (scale_factor > .95) {
					_this.infobox.visible = true;
					_this.infobox.text = "You've reached the equivalence or end point where pH will change as a function of base because HA has been converted to A-."
					
		/*
		Objectives:
		1. Comprehend the titration graph of a monoprotic (HA) weak acid
		2. Determine the pKa value and buffering capacity of a weak acid
		3. Identify how the pKa value of a weak acid influence the position of the titration curve
		4. Develop an intuitive understanding of the Hendersen-Hasselbalch equation
		*/
					
		
				} else if (scale_factor < 0.1) {
					_this.infobox.text = "The initial state is predominately a protonated weak acid."
					_this.infobox.visible = true;
				} else {
					_this.infobox.visible = false;
				}
		
				_this.oh.text = "OH: " + scale_factor;
		
				//scale acid and akaline symbols or objects
				_this.acid_one.scaleX = Number(inverse_scale_factor);
				_this.acid_one.scaleY = Number(inverse_scale_factor);
				_this.akaline_one.scaleX = Number(scale_factor);
				_this.akaline_one.scaleY = Number(scale_factor);
		
				_this.proton.gotoAndStop(scale_factor * 60);
				_this.proton.scaleX = Number(inverse_scale_factor);
				_this.proton.scaleY = Number(inverse_scale_factor);
		
				//Update molecule structure text boxes for HA and A-
				_this.ha.text = acids[0][1];
				_this.aminus.text = acids[0][2];
				//pka = Number(acids[6][3]).toFixed(2);
		
				//set slider amount to pka from drop-down chooser
				//_this.amount.text = pka;
				//console.log(pka);
		
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

	// UI
	this.handle = new lib.SliderButton();
	this.handle.name = "handle";
	this.handle.setTransform(384.75,1167.4,1,2.2778,0,0,0,0,0.1);
	var handleFilter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.handle.filters = [handleFilter_1];
	this.handle.cache(-24,-24,48,48);
	new cjs.ButtonHelper(this.handle, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.handle).wait(1));
	this.timeline.addTween(cjs.Tween.get(handleFilter_1).wait(1));

	// Curve
	this.akaline_one = new lib.akaline("synched",0);
	this.akaline_one.name = "akaline_one";
	this.akaline_one.setTransform(1708.4,1615,1,1,0,0,0,70,70);

	this.plotbutton = new lib.plot();
	this.plotbutton.name = "plotbutton";
	this.plotbutton.setTransform(304.05,1310.8,0.6653,0.7338,0,0,0,114.1,46.1);
	new cjs.ButtonHelper(this.plotbutton, 0, 1, 2, false, new lib.plot(), 3);

	this.text = new cjs.Text("3", "22px 'Times'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 13;
	this.text.parent = this;
	this.text.setTransform(969.55,1131.15);

	this.text_1 = new cjs.Text("7", "normal 700 22px 'Lato'");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 13;
	this.text_1.parent = this;
	this.text_1.setTransform(970.95,834.45);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("10", "normal 700 22px 'Lato'");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 27;
	this.text_2.parent = this;
	this.text_2.setTransform(958.05,612.45);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("12", "normal 700 22px 'Lato'");
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 29;
	this.text_3.parent = this;
	this.text_3.setTransform(957.9,461.95);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("13", "normal 700 22px 'Lato'");
	this.text_4.lineHeight = 27;
	this.text_4.lineWidth = 29;
	this.text_4.parent = this;
	this.text_4.setTransform(957.9,389.5);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("1", "normal 700 22px 'Lato'");
	this.text_5.lineHeight = 27;
	this.text_5.lineWidth = 14;
	this.text_5.parent = this;
	this.text_5.setTransform(969.55,1278.95);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("14", "normal 700 22px 'Lato'");
	this.text_6.lineHeight = 27;
	this.text_6.lineWidth = 29;
	this.text_6.parent = this;
	this.text_6.setTransform(956.1,319.5);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("11", "normal 700 22px 'Lato'");
	this.text_7.lineHeight = 27;
	this.text_7.lineWidth = 29;
	this.text_7.parent = this;
	this.text_7.setTransform(958.05,538.85);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("9", "normal 700 22px 'Lato'");
	this.text_8.lineHeight = 27;
	this.text_8.lineWidth = 13;
	this.text_8.parent = this;
	this.text_8.setTransform(971.25,689.95);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("8", "normal 700 22px 'Lato'");
	this.text_9.lineHeight = 27;
	this.text_9.lineWidth = 13;
	this.text_9.parent = this;
	this.text_9.setTransform(970.95,760.75);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("6", "normal 700 22px 'Lato'");
	this.text_10.lineHeight = 27;
	this.text_10.lineWidth = 13;
	this.text_10.parent = this;
	this.text_10.setTransform(971.25,910);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("5", "normal 700 22px 'Lato'");
	this.text_11.lineHeight = 27;
	this.text_11.lineWidth = 13;
	this.text_11.parent = this;
	this.text_11.setTransform(971.85,987.25);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("4", "normal 700 22px 'Lato'");
	this.text_12.lineHeight = 27;
	this.text_12.lineWidth = 13;
	this.text_12.parent = this;
	this.text_12.setTransform(970.55,1056.1);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("2", "normal 700 22px 'Lato'");
	this.text_13.lineHeight = 27;
	this.text_13.lineWidth = 13;
	this.text_13.parent = this;
	this.text_13.setTransform(970.55,1205.75);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("0", "normal 700 22px 'Lato'");
	this.text_14.lineHeight = 27;
	this.text_14.lineWidth = 13;
	this.text_14.parent = this;
	this.text_14.setTransform(968.25,1344.3);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_14);
	}

	this.popUps = new lib.PopUps();
	this.popUps.name = "popUps";

	this.text_15 = new cjs.Text("pKa", "normal 300 44px 'Lato'");
	this.text_15.lineHeight = 50;
	this.text_15.lineWidth = 74;
	this.text_15.parent = this;
	this.text_15.setTransform(599.65,1152.4094,0.9798,0.9798);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("Molecules and pKa", "normal 700 44px 'Lato'");
	this.text_16.lineHeight = 51;
	this.text_16.lineWidth = 490;
	this.text_16.parent = this;
	this.text_16.setTransform(228.05,344.75);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_16);
	}

	this.buffering = new cjs.Text("We're buffering. The pH value is plus or minus one of the pKa value.", "normal 700 32px 'Lato'");
	this.buffering.name = "buffering";
	this.buffering.lineHeight = 38;
	this.buffering.lineWidth = 235;
	this.buffering.parent = this;
	this.buffering.setTransform(2513.55,1053.5);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.buffering);
	}

	this.amount = new cjs.Text("", "normal 700 31px 'Lato'", "#990000");
	this.amount.name = "amount";
	this.amount.lineHeight = 37;
	this.amount.lineWidth = 64;
	this.amount.parent = this;
	this.amount.setTransform(449,1205.75);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.amount);
	}

	this.bar = new lib.bar();
	this.bar.name = "bar";
	this.bar.setTransform(226.05,1128.75,1,1.4423);

	this.infobox = new cjs.Text("", "normal 700 32px 'Lato'");
	this.infobox.name = "infobox";
	this.infobox.lineHeight = 38;
	this.infobox.lineWidth = 443;
	this.infobox.parent = this;
	this.infobox.setTransform(231.05,803.5);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.infobox);
	}

	this.instance = new lib.x_axis("synched",0);
	this.instance.setTransform(1022,350);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(1033.5,325,2.5,1.0556,90);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(1032,399,1,1,90);

	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(1032,474,1,1,90);

	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(1031,548,1,1,90);

	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(1031,622,1,1,90);

	this.instance_6 = new lib.Bitmap1();
	this.instance_6.setTransform(1031,696,1,1,90);

	this.instance_7 = new lib.Bitmap1();
	this.instance_7.setTransform(1031,770,1,1,90);

	this.instance_8 = new lib.Bitmap1();
	this.instance_8.setTransform(1031,845,1,1,90);

	this.instance_9 = new lib.Bitmap1();
	this.instance_9.setTransform(1031,919,1,1,90);

	this.instance_10 = new lib.Bitmap1();
	this.instance_10.setTransform(1031,993,1,1,90);

	this.instance_11 = new lib.Bitmap1();
	this.instance_11.setTransform(1031,1067,1,1,90);

	this.instance_12 = new lib.Bitmap1();
	this.instance_12.setTransform(1031,1141,1,1,90);

	this.instance_13 = new lib.Bitmap1();
	this.instance_13.setTransform(1031,1216,1,1,90);

	this.instance_14 = new lib.Bitmap1();
	this.instance_14.setTransform(1030,1290,1,1,90);

	this.instance_15 = new lib.Bitmap1();
	this.instance_15.setTransform(1027,1354,1,1,90);

	this.instance_16 = new lib.y_axis("synched",0);
	this.instance_16.setTransform(1522,1350,1.0002,1,0,0,0,499.9,0);

	this.instance_17 = new lib.Bitmap1();
	this.instance_17.setTransform(1270,1340);

	this.proton = new lib.proton();
	this.proton.name = "proton";
	this.proton.setTransform(1393,1533,1,1,0,0,0,18,18);

	this.instance_18 = new lib.Bitmap1();
	this.instance_18.setTransform(1770,1341);

	this.instance_19 = new lib.Bitmap1();
	this.instance_19.setTransform(1520,1340,1,1.0457);

	this.instance_20 = new lib.Bitmap1();
	this.instance_20.setTransform(1020,1350);

	this.instance_21 = new lib.Bitmap1();
	this.instance_21.setTransform(2020,1341);

	this.instance_22 = new lib.CachedBmp_508();
	this.instance_22.setTransform(868.15,809.5,0.5,0.5);

	this.acid_one = new lib.acid("synched",0);
	this.acid_one.name = "acid_one";
	this.acid_one.setTransform(1375.4,1615,1,1,0,0,0,70,70);

	this.text_17 = new cjs.Text("Circle Size Represents Concentration", "normal 400 38px 'Lato'", "#4A494A");
	this.text_17.lineHeight = 44;
	this.text_17.lineWidth = 630;
	this.text_17.parent = this;
	this.text_17.setTransform(1235.65,1745.8);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_17);
	}

	this.text_18 = new cjs.Text("Modify the pKa value for HA using the slider or dropdown menu below.\n\nThen, click on the plot button to plot the titration curve and drag the node to see how pKa impacts how a pH value can change over the course of a titration experiment.", "normal 400 32px 'Lato'", "#666666");
	this.text_18.lineHeight = 37;
	this.text_18.lineWidth = 449;
	this.text_18.parent = this;
	this.text_18.setTransform(229,397.95);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_18);
	}

	this.text_19 = new cjs.Text("Plotting a titration of a base being added to a weak acid.", "normal 400 32px 'Lato'", "#666666");
	this.text_19.lineHeight = 37;
	this.text_19.lineWidth = 769;
	this.text_19.parent = this;
	this.text_19.setTransform(229,204.85);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_19);
	}

	this.text_20 = new cjs.Text("pKa and Weak Acid", "normal 700 76px 'Lato'");
	this.text_20.lineHeight = 87;
	this.text_20.lineWidth = 809;
	this.text_20.parent = this;
	this.text_20.setTransform(229,102.05);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_20);
	}

	this.oh = new cjs.Text("OH: ", "50px 'Verdana'", "#4A494A");
	this.oh.name = "oh";
	this.oh.lineHeight = 63;
	this.oh.lineWidth = 249;
	this.oh.parent = this;
	this.oh.setTransform(1405.8,1408);

	this.beaker = new lib.flask_root();
	this.beaker.name = "beaker";
	this.beaker.setTransform(2415.15,1077.15,3.9199,3.9192,0,0,0,49,78.6);

	this.ph = new cjs.Text("", "50px 'Verdana'", "#4A494A");
	this.ph.name = "ph";
	this.ph.lineHeight = 63;
	this.ph.lineWidth = 438;
	this.ph.parent = this;
	this.ph.setTransform(1135.95,1131.15);

	this.nodule = new lib.node("synched",0);
	this.nodule.name = "nodule";
	this.nodule.setTransform(1082.8,1294,3.9996,3.9996,0,0,0,6,6.2);

	this.instance_23 = new lib.mask_x("synched",0);
	this.instance_23.setTransform(1594.35,1679.65,1,1.0738,0,0,0,714.3,298.3);

	this.x_marker = new lib.y_marker();
	this.x_marker.name = "x_marker";
	this.x_marker.setTransform(1084.65,1294.4,1,2.7854,0,0,0,0.1,0.1);
	this.x_marker.alpha = 0.4297;

	this.aminus = new cjs.Text("", "normal 700 38px 'Lato'");
	this.aminus.name = "aminus";
	this.aminus.textAlign = "center";
	this.aminus.lineHeight = 44;
	this.aminus.lineWidth = 411;
	this.aminus.parent = this;
	this.aminus.setTransform(2016.05,1572.4);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.aminus);
	}

	this.ha = new cjs.Text("", "normal 700 38px 'Lato'");
	this.ha.name = "ha";
	this.ha.textAlign = "center";
	this.ha.lineHeight = 44;
	this.ha.lineWidth = 392;
	this.ha.parent = this;
	this.ha.setTransform(1183.8,1593.4);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.ha);
	}

	this.instance_24 = new lib.mask_y("synched",0);
	this.instance_24.setTransform(520.45,993.75,1,1,0,0,0,492.1,710.1);

	this.y_marker = new lib.x_marker();
	this.y_marker.name = "y_marker";
	this.y_marker.setTransform(1085.8,1310.2,2.1143,1,0,0,0,472.6,0.1);
	this.y_marker.alpha = 0.4297;

	this.person0 = new lib.PersonButton();
	this.person0.name = "person0";
	this.person0.setTransform(696.05,1437.25,0.7006,0.7006);
	new cjs.ButtonHelper(this.person0, 0, 1, 2);

	this.instance_25 = new lib.line_lo();
	this.instance_25.setTransform(664.4,1439.35,0.3004,1,0,0,0,100,0);

	this.text_21 = new cjs.Text("Learning Objectives", "44px 'Times'");
	this.text_21.lineHeight = 46;
	this.text_21.lineWidth = 490;
	this.text_21.parent = this;
	this.text_21.setTransform(229,1410.2);

	this.instance_26 = new lib.CachedBmp_507();
	this.instance_26.setTransform(3.5,41.5,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(0.5,1,1).moveTo(463.9,-237.7).lineTo(453.9,-232.7).lineTo(453.9,-268.7).lineTo(489.9,-250.7).lineTo(470.9,-241.2).moveTo(-153,-417.1).lineTo(-377.1,-417.1).lineTo(-377.1,-443.1).lineTo(-153,-443.1).moveTo(-555.1,-104.1).lineTo(-555.1,-143.1).lineTo(-411.6,-143.1).lineTo(-411.6,-104.1).closePath().moveTo(-555.1,-143.1).lineTo(-555.1,-375.1).lineTo(-63,-375.1).moveTo(-555.1,-29.8).lineTo(-555.1,-42).moveTo(-77,193.1).lineTo(-75,193.1).moveTo(-159,285.1).lineTo(-207,285.1).moveTo(-159,285.1).lineTo(-159,195.1).lineTo(-77,195.1).moveTo(-73,197.1).lineTo(-71,197.1).moveTo(-59,196.1).lineTo(-57.5,196.1).moveTo(-61,200.1).lineTo(-59,200.1).moveTo(-62,202.1).lineTo(-60,202.1).moveTo(-59.5,198.1).lineTo(-59,198.1).moveTo(-71,194.1).lineTo(-63,194.1).moveTo(-75,195.1).lineTo(-73,195.1).moveTo(-555.1,-81).lineTo(-555.1,-104.1).moveTo(-207,335.1).lineTo(-555.1,335.1).lineTo(-555.1,9.2).moveTo(-57,195.1).lineTo(555.1,195.1).lineTo(555.1,443.1).lineTo(-159,443.1).lineTo(-159,285.1);
	this.shape.setTransform(559.15,485.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#990000").beginStroke().moveTo(-10.2,10.2).curveTo(-14.5,6,-14.5,-0).curveTo(-14.5,-6,-10.2,-10.2).curveTo(-6,-14.5,0,-14.5).curveTo(6,-14.5,10.3,-10.2).curveTo(14.5,-6,14.5,-0).curveTo(14.5,6,10.3,10.2).curveTo(6,14.5,0,14.5).curveTo(-6,14.5,-10.2,10.2).closePath().moveTo(-2,0.4).lineTo(-2,3.9).lineTo(-1,3.9).lineTo(-1,-3.3).lineTo(-2,-3.3).lineTo(-2,-0.5).lineTo(-5.6,-0.5).lineTo(-5.6,-3.3).lineTo(-6.6,-3.3).lineTo(-6.6,3.9).lineTo(-5.6,3.9).lineTo(-5.6,0.4).closePath().moveTo(0.9,1.1).lineTo(3.6,1.1).lineTo(3.6,3.8).lineTo(4.4,3.8).lineTo(4.4,1.1).lineTo(7.1,1.1).lineTo(7.1,0.4).lineTo(4.4,0.4).lineTo(4.4,-2.3).lineTo(3.6,-2.3).lineTo(3.6,0.4).lineTo(0.9,0.4).closePath();
	this.shape_1.setTransform(690,753.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_26},{t:this.text_21},{t:this.instance_25},{t:this.person0},{t:this.y_marker},{t:this.instance_24},{t:this.ha},{t:this.aminus},{t:this.x_marker},{t:this.instance_23},{t:this.nodule},{t:this.ph},{t:this.beaker},{t:this.oh},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.acid_one},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.proton},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.infobox},{t:this.bar},{t:this.amount},{t:this.buffering},{t:this.text_16},{t:this.text_15},{t:this.popUps},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.plotbutton},{t:this.akaline_one}]}).wait(1));

	// Node
	this.aminus_1 = new cjs.Text("HA", "normal 400 20px 'Lato'", "#990000");
	this.aminus_1.name = "aminus_1";
	this.aminus_1.lineHeight = 24;
	this.aminus_1.lineWidth = 254;
	this.aminus_1.parent = this;
	this.aminus_1.setTransform(1849.4,1569.85);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.aminus_1);
	}

	this.text_22 = new cjs.Text("HA", "normal 400 20px 'Lato'", "#990000");
	this.text_22.lineHeight = 24;
	this.text_22.lineWidth = 254;
	this.text_22.parent = this;
	this.text_22.setTransform(1013.55,1569.85);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.text_22);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_22},{t:this.aminus_1}]}).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.handle, startFrame:0, endFrame:1, x:-24, y:-24, w:48, h:48});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1503,1041.1,1247.6999999999998,1241.8000000000002);
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
		{src:"images/CachedBmp_507.png", id:"CachedBmp_507"},
		{src:"images/plus_slider_atlas_1.png", id:"plus_slider_atlas_1"},
		{src:"images/plus_slider_atlas_2.png", id:"plus_slider_atlas_2"},
		{src:"images/plus_slider_atlas_3.png", id:"plus_slider_atlas_3"},
		{src:"images/plus_slider_atlas_4.png", id:"plus_slider_atlas_4"},
		{src:"images/plus_slider_atlas_5.png", id:"plus_slider_atlas_5"},
		{src:"images/plus_slider_atlas_6.png", id:"plus_slider_atlas_6"},
		{src:"images/plus_slider_atlas_7.png", id:"plus_slider_atlas_7"},
		{src:"images/plus_slider_atlas_8.png", id:"plus_slider_atlas_8"}
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