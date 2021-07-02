// import {Server} from './Server';

// const nodemon = require('nodemon');// eslint

// import {GeoJSON} from './layer';

import {Polygon} from './dist/out-tsc/src/layer/vector/Polygon';

// const polygonsFile = Record<string, unknown> require('./polygons.geojson')

function newFunction(): null | Polygon[] {

	let polygons = null;

	try {
			const vetor:typeof 'GeoJSON' = (typeof 'GeoJSON') require('./polygons.geojson');
	
	for (let i in vetor.length) {

		if (vetor[i]['type'] === 'Polygon') {
			
			polygons[i] = vetor[i]['type'];
			
		}

	}
	} catch (ex) {

		// nodemon('nodemon require polygons fail');
		
		console.log(' require polygons.geojson fail ');

		return null;
		
	} finally {

		console.log('nodemon require polygons end');

		// nodemon('nodemon require polygons end'); // eslint nodemon
	}

	return polygons;
}

// @ts-ignore
const PoligonosAppDemoClass = L.Class.extend({

	// A property with initial value = 42
	myDemoProperty: newFunction(),

	// A method
	myDemoMethod: function(): null | Polygon[] {

		// const s = new Server();

		// ui

		return this.myDemoProperty;
	}

});

const PoligonosAppDemoInstance = new PoligonosAppDemoClass();

// This will output "42" to the development console
console.log( PoligonosAppDemoInstance.myDemoMethod() );

// include

PoligonosAppDemoClass.include({

	// Adding a new property to the class
	_myPrivateProperty: 78,

	// Redefining a method
	myDemoMethod: function() { return this._myPrivateProperty; }

});

const poligonosAppSecondDemoInstance = new PoligonosAppDemoClass();

// This will output "78"
console.log( poligonosAppSecondDemoInstance.myDemoMethod() );

// However, properties and methods from before still exist
// This will output "42"
console.log( poligonosAppSecondDemoInstance.myDemoProperty );

// initialize
const MyBoxClass = L.Class.extend({

	options: {
		width: 1,
		height: 1
	},

	initialize: function(name : string, options : []) {
		this.name = name;
		L.setOptions(this, options);
	}

});

function instanceRed(){
	const instance = new MyBoxClass('Red', {width: 10});

	console.log(instance.name); // Outputs "Red"
	console.log(instance.options.width); // Outputs "10"
	console.log(instance.options.height); // Outputs "1", the default
}

// initialize cube
const MyCubeClass = MyBoxClass.extend({
	options: {
		depth: 1
	}
});

function instanceBlue(){
	const instance = new MyCubeClass('Blue');

	console.log(instance.options.width); // Outputs "1", parent class default
	console.log(instance.options.height); // Outputs "1", parent class default
	console.log(instance.options.depth); // Outputs "1"
}

// initialize hook
MyBoxClass.addInitHook(function(){
	this._area = this.options.width * this.options.length;
});

// initialize include
MyCubeClass.include({
	_calculateVolume: function(arg1, arg2) {
		this._volume = this.options.width * this.options.length * this.options.depth;
	}
});

MyCubeClass.addInitHook('_calculateVolume', argValue1, argValue2);

// initialize parent class
L.FeatureGroup = L.LayerGroup.extend({

	addLayer: function (layer) {
        L.LayerGroup.prototype.addLayer.call(this, layer);
	},

	removeLayer: function (layer) {
        L.LayerGroup.prototype.removeLayer.call(this, layer);
	},
});

// initialize factories
function myBoxClass(name, options) {
	return new MyBoxClass(name, options);
}


