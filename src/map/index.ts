/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Map} from './Map';
import {BoxZoom} from './handler/Map.BoxZoom';
Map.BoxZoom = BoxZoom;
import {DoubleClickZoom} from './handler/Map.DoubleClickZoom';
Map.DoubleClickZoom = DoubleClickZoom;
import {Drag} from './handler/Map.Drag';
Map.Drag = Drag;
import {Keyboard} from './handler/Map.Keyboard';
Map.Keyboard = Keyboard;
import {ScrollWheelZoom} from './handler/Map.ScrollWheelZoom';
Map.ScrollWheelZoom = ScrollWheelZoom;
import {Tap} from './handler/Map.Tap';
Map.Tap = Tap;
import {TouchZoom} from './handler/Map.TouchZoom';
Map.TouchZoom = TouchZoom;

export {Map, createMap as map} from './Map';
