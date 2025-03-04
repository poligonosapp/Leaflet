/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
import * as Util from './Util';
import {GeoJSONClass} from "src/layer/GeoJSONClass";
import {GeoJSONFunction} from "src/layer/GeoJSONFunction";
// @ts-ignore
import {ReturnType} from "typescript";
// import {LatLng} from "../geo";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type LatLngReturnType = ReturnType<typeof LatLng>;
export type GeoJSONReturnType = ReturnType<typeof GeoJSONClass|typeof GeoJSONFunction>;
export type GeoJSONOptionsReturnType = ReturnType<typeof String | typeof Boolean | typeof Number>;

// polyfill only stable `core-js` features - ES and web standards:
// import "core-js/stable";

// commonjs vscode es6
import { v4 as uuidv4 } from 'uuid';

uuidv4();

// import * as L from './src/Leaflet';

// Class.prototype._method = function (){}
// Class rename AbstractClass
// Class is a typescript keyword
export abstract class GeoJSONAbstractClass {
	// @typescript-eslint/no-unsafe-call warning before user input @typescript-eslint/no-unsafe-call warning before user input https://github.com/poligonosapp/programming-typescript-answers/blob/master/src/ch04/exercises.ts
	// null unknown undefined https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html
	static options : GeoJSONOptionsReturnType[];
	static extend: GeoJSONReturnType;
	static include: GeoJSONReturnType;
	static initialize: GeoJSONReturnType;
}

