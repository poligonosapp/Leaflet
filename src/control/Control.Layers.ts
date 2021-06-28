
import {Control} from './Control';
import * as Util from '../core/Util';
import * as Browser from '../core/Browser';
import * as DomEvent from '../dom/DomEvent';
import * as DomUtil from '../dom/DomUtil';

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```tsc
 * const baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * const overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```tsc
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```tsc
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

export class LayersHelper implements HTMLElement{
	constructor() {
		super(this);
	}

	readonly ATTRIBUTE_NODE: number;
	readonly CDATA_SECTION_NODE: number;
	readonly COMMENT_NODE: number;
	readonly DOCUMENT_FRAGMENT_NODE: number;
	readonly DOCUMENT_NODE: number;
	readonly DOCUMENT_POSITION_CONTAINED_BY: number;
	readonly DOCUMENT_POSITION_CONTAINS: number;
	readonly DOCUMENT_POSITION_DISCONNECTED: number;
	readonly DOCUMENT_POSITION_FOLLOWING: number;
	readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
	readonly DOCUMENT_POSITION_PRECEDING: number;
	readonly DOCUMENT_TYPE_NODE: number;
	readonly ELEMENT_NODE: number;
	readonly ENTITY_NODE: number;
	readonly ENTITY_REFERENCE_NODE: number;
	readonly NOTATION_NODE: number;
	readonly PROCESSING_INSTRUCTION_NODE: number;
	readonly TEXT_NODE: number;
	accessKey: string;
	readonly accessKeyLabel: string;
	readonly assignedSlot: HTMLSlotElement | null;
	readonly attributes: NamedNodeMap;
	autocapitalize: string;
	autofocus: boolean;
	readonly baseURI: string;
	readonly childElementCount: number;
	readonly childNodes: NodeListOf<ChildNode>;
	readonly children: HTMLCollection;
	readonly classList: DOMTokenList;
	className: string;
	readonly clientHeight: number;
	readonly clientLeft: number;
	readonly clientTop: number;
	readonly clientWidth: number;
	contentEditable: string;
	readonly dataset: DOMStringMap;
	dir: string;
	draggable: boolean;
	enterKeyHint: string;
	readonly firstChild: ChildNode | null;
	readonly firstElementChild: Element | null;
	hidden: boolean;
	id: string;
	innerHTML: string;
	innerText: string;
	inputMode: string;
	readonly isConnected: boolean;
	readonly isContentEditable: boolean;
	lang: string;
	readonly lastChild: ChildNode | null;
	readonly lastElementChild: Element | null;
	readonly localName: string;
	readonly namespaceURI: string | null;
	readonly nextElementSibling: Element | null;
	readonly nextSibling: ChildNode | null;
	readonly nodeName: string;
	readonly nodeType: number;
	nodeValue: string | null;
	readonly offsetHeight: number;
	readonly offsetLeft: number;
	readonly offsetParent: Element | null;
	readonly offsetTop: number;
	readonly offsetWidth: number;
	onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
	onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
	onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
	onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
	onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
	onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
	oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
	oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
	ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
	ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onerror: OnErrorEventHandler;
	onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
	onfullscreenchange: ((this: Element, ev: Event) => any) | null;
	onfullscreenerror: ((this: Element, ev: Event) => any) | null;
	ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
	onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
	onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
	onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
	onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
	onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
	onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
	onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
	onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
	onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
	ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
	ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
	ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
	onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
	onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
	outerHTML: string;
	readonly ownerDocument: Document;
	readonly parentElement: HTMLElement | null;
	readonly parentNode: (Node & ParentNode) | null;
	readonly prefix: string | null;
	readonly previousElementSibling: Element | null;
	readonly previousSibling: ChildNode | null;
	readonly scrollHeight: number;
	scrollLeft: number;
	scrollTop: number;
	readonly scrollWidth: number;
	readonly shadowRoot: ShadowRoot | null;
	slot: string;
	spellcheck: boolean;
	readonly style: CSSStyleDeclaration;
	tabIndex: number;
	readonly tagName: string;
	textContent: string | null;
	title: string;
	translate: boolean;

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
	addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type, listener, options?: boolean | AddEventListenerOptions): void {
	}

	after(...nodes: (Node | string)[]): void {
	}

	animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation {
		return undefined;
	}

	append(...nodes: (Node | string)[]): void {
	}

	appendChild<T extends Node>(newChild: T): T {
		return undefined;
	}

	attachShadow(init: ShadowRootInit): ShadowRoot {
		return undefined;
	}

	before(...nodes: (Node | string)[]): void {
	}

	blur(): void {
	}

	click(): void {
	}

	cloneNode(deep?: boolean): Node {
		return undefined;
	}

	closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
	closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
	closest<E = Element extends Element>(selector: string): E | null;
	closest(selector): any {
	}

	compareDocumentPosition(other: Node): number {
		return 0;
	}

	contains(other: Node | null): boolean {
		return false;
	}

	dispatchEvent(event: Event): boolean {
		return false;
	}

	focus(options?: FocusOptions): void {
	}

	getAnimations(): Animation[] {
		return [];
	}

	getAttribute(qualifiedName: string): string | null {
		return undefined;
	}

	getAttributeNS(namespace: string | null, localName: string): string | null {
		return undefined;
	}

	getAttributeNames(): string[] {
		return [];
	}

	getAttributeNode(qualifiedName: string): Attr | null {
		return undefined;
	}

	getAttributeNodeNS(namespace: string | null, localName: string): Attr | null {
		return undefined;
	}

	getBoundingClientRect(): DOMRect {
		return undefined;
	}

	getClientRects(): DOMRectList {
		return undefined;
	}

	getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
		return undefined;
	}

	getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
	getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
	getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
	getElementsByTagName(qualifiedName): any {
	}

	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
	getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | string, localName: string): HTMLCollectionOf<HTMLElement> | HTMLCollectionOf<SVGElement> | HTMLCollectionOf<Element> {
		return undefined;
	}

	getRootNode(options?: GetRootNodeOptions): Node {
		return undefined;
	}

	hasAttribute(qualifiedName: string): boolean {
		return false;
	}

	hasAttributeNS(namespace: string | null, localName: string): boolean {
		return false;
	}

	hasAttributes(): boolean {
		return false;
	}

	hasChildNodes(): boolean {
		return false;
	}

	hasPointerCapture(pointerId: number): boolean {
		return false;
	}

	insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null {
		return undefined;
	}

	insertAdjacentHTML(where: InsertPosition, html: string): void {
	}

	insertAdjacentText(where: InsertPosition, text: string): void {
	}

	insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
		return undefined;
	}

	isDefaultNamespace(namespace: string | null): boolean {
		return false;
	}

	isEqualNode(otherNode: Node | null): boolean {
		return false;
	}

	isSameNode(otherNode: Node | null): boolean {
		return false;
	}

	lookupNamespaceURI(prefix: string | null): string | null {
		return undefined;
	}

	lookupPrefix(namespace: string | null): string | null {
		return undefined;
	}

	matches(selectors: string): boolean {
		return false;
	}

	msGetRegionContent(): any {
	}

	normalize(): void {
	}

	prepend(...nodes: (Node | string)[]): void {
	}

	querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
	querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
	querySelector<E = Element extends Element>(selectors: string): E | null;
	querySelector(selectors): any {
	}

	querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
	querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
	querySelectorAll<E = Element extends Element>(selectors: string): NodeListOf<E>;
	querySelectorAll(selectors): any {
	}

	releasePointerCapture(pointerId: number): void {
	}

	remove(): void {
	}

	removeAttribute(qualifiedName: string): void {
	}

	removeAttributeNS(namespace: string | null, localName: string): void {
	}

	removeAttributeNode(attr: Attr): Attr {
		return undefined;
	}

	removeChild<T extends Node>(oldChild: T): T {
		return undefined;
	}

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
	removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type, listener, options?: boolean | EventListenerOptions): void {
	}

	replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
		return undefined;
	}

	replaceWith(...nodes: (Node | string)[]): void {
	}

	requestFullscreen(options?: FullscreenOptions): Promise<void> {
		return Promise.resolve(undefined);
	}

	requestPointerLock(): void {
	}

	scroll(options?: ScrollToOptions): void;
	scroll(x: number, y: number): void;
	scroll(options?: ScrollToOptions | number, y?: number): void {
	}

	scrollBy(options?: ScrollToOptions): void;
	scrollBy(x: number, y: number): void;
	scrollBy(options?: ScrollToOptions | number, y?: number): void {
	}

	scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
	}

	scrollTo(options?: ScrollToOptions): void;
	scrollTo(x: number, y: number): void;
	scrollTo(options?: ScrollToOptions | number, y?: number): void {
	}

	setAttribute(qualifiedName: string, value: string): void {
	}

	setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
	}

	setAttributeNode(attr: Attr): Attr | null {
		return undefined;
	}

	setAttributeNodeNS(attr: Attr): Attr | null {
		return undefined;
	}

	setPointerCapture(pointerId: number): void {
	}

	toggleAttribute(qualifiedName: string, force?: boolean): boolean {
		return false;
	}

	webkitMatchesSelector(selectors: string): boolean {
		return false;
	}
}

export class Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers:LayersHelper, overlays, options):Layers {
		Util.setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (const i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (const i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map:Map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (const i in this._layers.length) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (const i in this._layers.length) {
            this._layers[i].layer.off('add remove', this._onLayerChange, this)
        }
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		const obj = this._getLayer(Util.stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
		this._section.style.height = null;
		const acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._section.clientHeight) {
			DomUtil.addClass(this._section, 'leaflet-control-layers-scrollbar');
			this._section.style.height = acceptableHeight + 'px';
		} else {
			DomUtil.removeClass(this._section, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		DomUtil.removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		const className = 'leaflet-control-layers',
		    container = this._container = DomUtil.create('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		DomEvent.disableClickPropagation(container);
		DomEvent.disableScrollPropagation(container);

		const section = this._section = DomUtil.create('section', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!Browser.android) {
				DomEvent.on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		const link = this._layersLink = DomUtil.create('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (Browser.touch) {
			DomEvent.on(link, 'click', DomEvent.stop);
			DomEvent.on(link, 'click', this.expand, this);
		} else {
			DomEvent.on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = DomUtil.create('div', className + '-base', section);
		this._separator = DomUtil.create('div', className + '-separator', section);
		this._overlaysList = DomUtil.create('div', className + '-overlays', section);

		container.appendChild(section);
	},

	_getLayer: function (id:number) {
		for (const i in this._layers.length) {
            if (this._layers[i] && Util.stamp(this._layers[i].layer) === id) {
                return this._layers[i]
            }
        }
	},

	_addLayer: function (layer:LayersHelper, name:string, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(Util.bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		DomUtil.empty(this._baseLayersList);
		DomUtil.empty(this._overlaysList);

		this._layerControlInputs = [];
		const baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (const i in this._layers.length) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		const obj = this._getLayer(Util.stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layers control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layers control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layers control](#control-layers).
		// @namespace Control.Layers
		const type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
	_createRadioElement: function (name : string, checked : boolean) {

		const radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		const radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj : Record<string, number>) {

		const label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers_' + Util.stamp(this), checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = Util.stamp(obj.layer);

		DomEvent.on(input, 'click', this._onInputClick, this);

		const name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		const holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		const container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		const inputs = this._layerControlInputs,
		    input, layer: typeof LayersHelper;
		const addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (const i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (const i in removedLayers.length) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (const i in addedLayers.length) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		const inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (const i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
export const layers = function (baseLayers:Layers, overlays, options):Layers {
	return new Layers(baseLayers, overlays, options);
};
