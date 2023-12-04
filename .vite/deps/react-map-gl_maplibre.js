import {
  require_react_dom
} from "./chunk-HNHD5ZHX.js";
import {
  require_react
} from "./chunk-UOIPVTYB.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/react-map-gl/dist/esm/exports-maplibre.js
var React5 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/map.js
var React2 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/use-map.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var MountedMapsContext = React.createContext(null);
var MapProvider = (props) => {
  const [maps, setMaps] = (0, import_react.useState)({});
  const onMapMount = (0, import_react.useCallback)((map, id = "default") => {
    setMaps((currMaps) => {
      if (id === "current") {
        throw new Error("'current' cannot be used as map id");
      }
      if (currMaps[id]) {
        throw new Error(`Multiple maps with the same id: ${id}`);
      }
      return { ...currMaps, [id]: map };
    });
  }, []);
  const onMapUnmount = (0, import_react.useCallback)((id = "default") => {
    setMaps((currMaps) => {
      if (currMaps[id]) {
        const nextMaps = { ...currMaps };
        delete nextMaps[id];
        return nextMaps;
      }
      return currMaps;
    });
  }, []);
  return React.createElement(MountedMapsContext.Provider, { value: {
    maps,
    onMapMount,
    onMapUnmount
  } }, props.children);
};
function useMap() {
  var _a;
  const maps = (_a = (0, import_react.useContext)(MountedMapsContext)) === null || _a === void 0 ? void 0 : _a.maps;
  const currentMap = (0, import_react.useContext)(MapContext);
  const mapsWithCurrent = (0, import_react.useMemo)(() => {
    return { ...maps, current: currentMap === null || currentMap === void 0 ? void 0 : currentMap.map };
  }, [maps, currentMap]);
  return mapsWithCurrent;
}

// node_modules/react-map-gl/dist/esm/utils/deep-equal.js
function arePointsEqual(a, b) {
  const ax = Array.isArray(a) ? a[0] : a ? a.x : 0;
  const ay = Array.isArray(a) ? a[1] : a ? a.y : 0;
  const bx = Array.isArray(b) ? b[0] : b ? b.x : 0;
  const by = Array.isArray(b) ? b[1] : b ? b.y : 0;
  return ax === bx && ay === by;
}
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (Array.isArray(b)) {
    return false;
  }
  if (typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (!b.hasOwnProperty(key)) {
        return false;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// node_modules/react-map-gl/dist/esm/utils/transform.js
function cloneTransform(tr) {
  const newTransform = tr.clone();
  newTransform.pixelsToGLUnits = tr.pixelsToGLUnits;
  return newTransform;
}
function syncProjection(src, dest) {
  if (!src.getProjection) {
    return;
  }
  const srcProjection = src.getProjection();
  const destProjection = dest.getProjection();
  if (!deepEqual(srcProjection, destProjection)) {
    dest.setProjection(srcProjection);
  }
}
function transformToViewState(tr) {
  return {
    longitude: tr.center.lng,
    latitude: tr.center.lat,
    zoom: tr.zoom,
    pitch: tr.pitch,
    bearing: tr.bearing,
    padding: tr.padding
  };
}
function applyViewStateToTransform(tr, props) {
  const v = props.viewState || props;
  let changed = false;
  if ("longitude" in v && "latitude" in v) {
    const center = tr.center;
    tr.center = new center.constructor(v.longitude, v.latitude);
    changed = changed || center !== tr.center;
  }
  if ("zoom" in v) {
    const zoom = tr.zoom;
    tr.zoom = v.zoom;
    changed = changed || zoom !== tr.zoom;
  }
  if ("bearing" in v) {
    const bearing = tr.bearing;
    tr.bearing = v.bearing;
    changed = changed || bearing !== tr.bearing;
  }
  if ("pitch" in v) {
    const pitch = tr.pitch;
    tr.pitch = v.pitch;
    changed = changed || pitch !== tr.pitch;
  }
  if (v.padding && !tr.isPaddingEqual(v.padding)) {
    changed = true;
    tr.padding = v.padding;
  }
  return changed;
}

// node_modules/react-map-gl/dist/esm/utils/style-utils.js
var refProps = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
function normalizeStyle(style) {
  if (!style) {
    return null;
  }
  if (typeof style === "string") {
    return style;
  }
  if ("toJS" in style) {
    style = style.toJS();
  }
  if (!style.layers) {
    return style;
  }
  const layerIndex = {};
  for (const layer of style.layers) {
    layerIndex[layer.id] = layer;
  }
  const layers = style.layers.map((layer) => {
    let normalizedLayer = null;
    if ("interactive" in layer) {
      normalizedLayer = Object.assign({}, layer);
      delete normalizedLayer.interactive;
    }
    const layerRef = layerIndex[layer.ref];
    if (layerRef) {
      normalizedLayer = normalizedLayer || Object.assign({}, layer);
      delete normalizedLayer.ref;
      for (const propName of refProps) {
        if (propName in layerRef) {
          normalizedLayer[propName] = layerRef[propName];
        }
      }
    }
    return normalizedLayer || layer;
  });
  return { ...style, layers };
}

// node_modules/react-map-gl/dist/esm/mapbox/mapbox.js
var DEFAULT_STYLE = { version: 8, sources: {}, layers: [] };
var pointerEvents = {
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  click: "onClick",
  dblclick: "onDblClick",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mouseout: "onMouseOut",
  contextmenu: "onContextMenu",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchcancel: "onTouchCancel"
};
var cameraEvents = {
  movestart: "onMoveStart",
  move: "onMove",
  moveend: "onMoveEnd",
  dragstart: "onDragStart",
  drag: "onDrag",
  dragend: "onDragEnd",
  zoomstart: "onZoomStart",
  zoom: "onZoom",
  zoomend: "onZoomEnd",
  rotatestart: "onRotateStart",
  rotate: "onRotate",
  rotateend: "onRotateEnd",
  pitchstart: "onPitchStart",
  pitch: "onPitch",
  pitchend: "onPitchEnd"
};
var otherEvents = {
  wheel: "onWheel",
  boxzoomstart: "onBoxZoomStart",
  boxzoomend: "onBoxZoomEnd",
  boxzoomcancel: "onBoxZoomCancel",
  resize: "onResize",
  load: "onLoad",
  render: "onRender",
  idle: "onIdle",
  remove: "onRemove",
  data: "onData",
  styledata: "onStyleData",
  sourcedata: "onSourceData",
  error: "onError"
};
var settingNames = [
  "minZoom",
  "maxZoom",
  "minPitch",
  "maxPitch",
  "maxBounds",
  "projection",
  "renderWorldCopies"
];
var handlerNames = [
  "scrollZoom",
  "boxZoom",
  "dragRotate",
  "dragPan",
  "keyboard",
  "doubleClickZoom",
  "touchZoomRotate",
  "touchPitch"
];
var Mapbox = class _Mapbox {
  constructor(MapClass, props, container) {
    this._map = null;
    this._internalUpdate = false;
    this._inRender = false;
    this._hoveredFeatures = null;
    this._deferredEvents = {
      move: false,
      zoom: false,
      pitch: false,
      rotate: false
    };
    this._onEvent = (e) => {
      const cb = this.props[otherEvents[e.type]];
      if (cb) {
        cb(e);
      } else if (e.type === "error") {
        console.error(e.error);
      }
    };
    this._onPointerEvent = (e) => {
      if (e.type === "mousemove" || e.type === "mouseout") {
        this._updateHover(e);
      }
      const cb = this.props[pointerEvents[e.type]];
      if (cb) {
        if (this.props.interactiveLayerIds && e.type !== "mouseover" && e.type !== "mouseout") {
          e.features = this._hoveredFeatures || this._queryRenderedFeatures(e.point);
        }
        cb(e);
        delete e.features;
      }
    };
    this._onCameraEvent = (e) => {
      if (!this._internalUpdate) {
        const cb = this.props[cameraEvents[e.type]];
        if (cb) {
          cb(e);
        }
      }
      if (e.type in this._deferredEvents) {
        this._deferredEvents[e.type] = false;
      }
    };
    this._MapClass = MapClass;
    this.props = props;
    this._initialize(container);
  }
  get map() {
    return this._map;
  }
  get transform() {
    return this._renderTransform;
  }
  setProps(props) {
    const oldProps = this.props;
    this.props = props;
    const settingsChanged = this._updateSettings(props, oldProps);
    if (settingsChanged) {
      this._createShadowTransform(this._map);
    }
    const sizeChanged = this._updateSize(props);
    const viewStateChanged = this._updateViewState(props, true);
    this._updateStyle(props, oldProps);
    this._updateStyleComponents(props, oldProps);
    this._updateHandlers(props, oldProps);
    if (settingsChanged || sizeChanged || viewStateChanged && !this._map.isMoving()) {
      this.redraw();
    }
  }
  static reuse(props, container) {
    const that = _Mapbox.savedMaps.pop();
    if (!that) {
      return null;
    }
    const map = that.map;
    const oldContainer = map.getContainer();
    container.className = oldContainer.className;
    while (oldContainer.childNodes.length > 0) {
      container.appendChild(oldContainer.childNodes[0]);
    }
    map._container = container;
    const resizeObserver = map._resizeObserver;
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver.observe(container);
    }
    that.setProps({ ...props, styleDiffing: false });
    map.resize();
    const { initialViewState } = props;
    if (initialViewState) {
      if (initialViewState.bounds) {
        map.fitBounds(initialViewState.bounds, { ...initialViewState.fitBoundsOptions, duration: 0 });
      } else {
        that._updateViewState(initialViewState, false);
      }
    }
    if (map.isStyleLoaded()) {
      map.fire("load");
    } else {
      map.once("styledata", () => map.fire("load"));
    }
    map._update();
    return that;
  }
  /* eslint-disable complexity,max-statements */
  _initialize(container) {
    const { props } = this;
    const { mapStyle = DEFAULT_STYLE } = props;
    const mapOptions = {
      ...props,
      ...props.initialViewState,
      accessToken: props.mapboxAccessToken || getAccessTokenFromEnv() || null,
      container,
      style: normalizeStyle(mapStyle)
    };
    const viewState = mapOptions.initialViewState || mapOptions.viewState || mapOptions;
    Object.assign(mapOptions, {
      center: [viewState.longitude || 0, viewState.latitude || 0],
      zoom: viewState.zoom || 0,
      pitch: viewState.pitch || 0,
      bearing: viewState.bearing || 0
    });
    if (props.gl) {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = () => {
        HTMLCanvasElement.prototype.getContext = getContext;
        return props.gl;
      };
    }
    const map = new this._MapClass(mapOptions);
    if (viewState.padding) {
      map.setPadding(viewState.padding);
    }
    if (props.cursor) {
      map.getCanvas().style.cursor = props.cursor;
    }
    this._createShadowTransform(map);
    const renderMap = map._render;
    map._render = (arg) => {
      this._inRender = true;
      renderMap.call(map, arg);
      this._inRender = false;
    };
    const runRenderTaskQueue = map._renderTaskQueue.run;
    map._renderTaskQueue.run = (arg) => {
      runRenderTaskQueue.call(map._renderTaskQueue, arg);
      this._onBeforeRepaint();
    };
    map.on("render", () => this._onAfterRepaint());
    const fireEvent = map.fire;
    map.fire = this._fireEvent.bind(this, fireEvent);
    map.on("resize", () => {
      this._renderTransform.resize(map.transform.width, map.transform.height);
    });
    map.on("styledata", () => {
      this._updateStyleComponents(this.props, {});
      syncProjection(map.transform, this._renderTransform);
    });
    map.on("sourcedata", () => this._updateStyleComponents(this.props, {}));
    for (const eventName in pointerEvents) {
      map.on(eventName, this._onPointerEvent);
    }
    for (const eventName in cameraEvents) {
      map.on(eventName, this._onCameraEvent);
    }
    for (const eventName in otherEvents) {
      map.on(eventName, this._onEvent);
    }
    this._map = map;
  }
  /* eslint-enable complexity,max-statements */
  recycle() {
    const container = this.map.getContainer();
    const children = container.querySelector("[mapboxgl-children]");
    children === null || children === void 0 ? void 0 : children.remove();
    _Mapbox.savedMaps.push(this);
  }
  destroy() {
    this._map.remove();
  }
  // Force redraw the map now. Typically resize() and jumpTo() is reflected in the next
  // render cycle, which is managed by Mapbox's animation loop.
  // This removes the synchronization issue caused by requestAnimationFrame.
  redraw() {
    const map = this._map;
    if (!this._inRender && map.style) {
      if (map._frame) {
        map._frame.cancel();
        map._frame = null;
      }
      map._render();
    }
  }
  _createShadowTransform(map) {
    const renderTransform = cloneTransform(map.transform);
    map.painter.transform = renderTransform;
    this._renderTransform = renderTransform;
  }
  /* Trigger map resize if size is controlled
     @param {object} nextProps
     @returns {bool} true if size has changed
   */
  _updateSize(nextProps) {
    const { viewState } = nextProps;
    if (viewState) {
      const map = this._map;
      if (viewState.width !== map.transform.width || viewState.height !== map.transform.height) {
        map.resize();
        return true;
      }
    }
    return false;
  }
  // Adapted from map.jumpTo
  /* Update camera to match props
     @param {object} nextProps
     @param {bool} triggerEvents - should fire camera events
     @returns {bool} true if anything is changed
   */
  _updateViewState(nextProps, triggerEvents) {
    if (this._internalUpdate) {
      return false;
    }
    const map = this._map;
    const tr = this._renderTransform;
    const { zoom, pitch, bearing } = tr;
    const isMoving = map.isMoving();
    if (isMoving) {
      tr.cameraElevationReference = "sea";
    }
    const changed = applyViewStateToTransform(tr, {
      ...transformToViewState(map.transform),
      ...nextProps
    });
    if (isMoving) {
      tr.cameraElevationReference = "ground";
    }
    if (changed && triggerEvents) {
      const deferredEvents = this._deferredEvents;
      deferredEvents.move = true;
      deferredEvents.zoom || (deferredEvents.zoom = zoom !== tr.zoom);
      deferredEvents.rotate || (deferredEvents.rotate = bearing !== tr.bearing);
      deferredEvents.pitch || (deferredEvents.pitch = pitch !== tr.pitch);
    }
    if (!isMoving) {
      applyViewStateToTransform(map.transform, nextProps);
    }
    return changed;
  }
  /* Update camera constraints and projection settings to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateSettings(nextProps, currProps) {
    const map = this._map;
    let changed = false;
    for (const propName of settingNames) {
      if (propName in nextProps && !deepEqual(nextProps[propName], currProps[propName])) {
        changed = true;
        const setter = map[`set${propName[0].toUpperCase()}${propName.slice(1)}`];
        setter === null || setter === void 0 ? void 0 : setter.call(map, nextProps[propName]);
      }
    }
    return changed;
  }
  /* Update map style to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if style is changed
   */
  _updateStyle(nextProps, currProps) {
    if (nextProps.cursor !== currProps.cursor) {
      this._map.getCanvas().style.cursor = nextProps.cursor;
    }
    if (nextProps.mapStyle !== currProps.mapStyle) {
      const { mapStyle = DEFAULT_STYLE, styleDiffing = true } = nextProps;
      const options = {
        diff: styleDiffing
      };
      if ("localIdeographFontFamily" in nextProps) {
        options.localIdeographFontFamily = nextProps.localIdeographFontFamily;
      }
      this._map.setStyle(normalizeStyle(mapStyle), options);
      return true;
    }
    return false;
  }
  /* Update fog, light and terrain to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateStyleComponents(nextProps, currProps) {
    const map = this._map;
    let changed = false;
    if (map.isStyleLoaded()) {
      if ("light" in nextProps && map.setLight && !deepEqual(nextProps.light, currProps.light)) {
        changed = true;
        map.setLight(nextProps.light);
      }
      if ("fog" in nextProps && map.setFog && !deepEqual(nextProps.fog, currProps.fog)) {
        changed = true;
        map.setFog(nextProps.fog);
      }
      if ("terrain" in nextProps && map.setTerrain && !deepEqual(nextProps.terrain, currProps.terrain)) {
        if (!nextProps.terrain || map.getSource(nextProps.terrain.source)) {
          changed = true;
          map.setTerrain(nextProps.terrain);
        }
      }
    }
    return changed;
  }
  /* Update interaction handlers to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateHandlers(nextProps, currProps) {
    var _a, _b;
    const map = this._map;
    let changed = false;
    for (const propName of handlerNames) {
      const newValue = (_a = nextProps[propName]) !== null && _a !== void 0 ? _a : true;
      const oldValue = (_b = currProps[propName]) !== null && _b !== void 0 ? _b : true;
      if (!deepEqual(newValue, oldValue)) {
        changed = true;
        if (newValue) {
          map[propName].enable(newValue);
        } else {
          map[propName].disable();
        }
      }
    }
    return changed;
  }
  _queryRenderedFeatures(point) {
    const map = this._map;
    const { interactiveLayerIds = [] } = this.props;
    try {
      return map.queryRenderedFeatures(point, {
        layers: interactiveLayerIds.filter(map.getLayer.bind(map))
      });
    } catch (_a) {
      return [];
    }
  }
  _updateHover(e) {
    var _a;
    const { props } = this;
    const shouldTrackHoveredFeatures = props.interactiveLayerIds && (props.onMouseMove || props.onMouseEnter || props.onMouseLeave);
    if (shouldTrackHoveredFeatures) {
      const eventType = e.type;
      const wasHovering = ((_a = this._hoveredFeatures) === null || _a === void 0 ? void 0 : _a.length) > 0;
      const features = this._queryRenderedFeatures(e.point);
      const isHovering = features.length > 0;
      if (!isHovering && wasHovering) {
        e.type = "mouseleave";
        this._onPointerEvent(e);
      }
      this._hoveredFeatures = features;
      if (isHovering && !wasHovering) {
        e.type = "mouseenter";
        this._onPointerEvent(e);
      }
      e.type = eventType;
    } else {
      this._hoveredFeatures = null;
    }
  }
  _fireEvent(baseFire, event, properties) {
    const map = this._map;
    const tr = map.transform;
    const eventType = typeof event === "string" ? event : event.type;
    if (eventType === "move") {
      this._updateViewState(this.props, false);
    }
    if (eventType in cameraEvents) {
      if (typeof event === "object") {
        event.viewState = transformToViewState(tr);
      }
      if (this._map.isMoving()) {
        map.transform = this._renderTransform;
        baseFire.call(map, event, properties);
        map.transform = tr;
        return map;
      }
    }
    baseFire.call(map, event, properties);
    return map;
  }
  // All camera manipulations are complete, ready to repaint
  _onBeforeRepaint() {
    const map = this._map;
    this._internalUpdate = true;
    for (const eventType in this._deferredEvents) {
      if (this._deferredEvents[eventType]) {
        map.fire(eventType);
      }
    }
    this._internalUpdate = false;
    const tr = this._map.transform;
    map.transform = this._renderTransform;
    this._onAfterRepaint = () => {
      syncProjection(this._renderTransform, tr);
      map.transform = tr;
    };
  }
};
Mapbox.savedMaps = [];
function getAccessTokenFromEnv() {
  let accessToken = null;
  if (typeof location !== "undefined") {
    const match = /access_token=([^&\/]*)/.exec(location.search);
    accessToken = match && match[1];
  }
  try {
    accessToken = accessToken || process.env.MapboxAccessToken;
  } catch (_a) {
  }
  try {
    accessToken = accessToken || process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  } catch (_b) {
  }
  return accessToken;
}

// node_modules/react-map-gl/dist/esm/mapbox/create-ref.js
var skipMethods = [
  "setMaxBounds",
  "setMinZoom",
  "setMaxZoom",
  "setMinPitch",
  "setMaxPitch",
  "setRenderWorldCopies",
  "setProjection",
  "setStyle",
  "addSource",
  "removeSource",
  "addLayer",
  "removeLayer",
  "setLayerZoomRange",
  "setFilter",
  "setPaintProperty",
  "setLayoutProperty",
  "setLight",
  "setTerrain",
  "setFog",
  "remove"
];
function createRef(mapInstance) {
  if (!mapInstance) {
    return null;
  }
  const map = mapInstance.map;
  const result = {
    getMap: () => map,
    // Overwrite getters to use our shadow transform
    getCenter: () => mapInstance.transform.center,
    getZoom: () => mapInstance.transform.zoom,
    getBearing: () => mapInstance.transform.bearing,
    getPitch: () => mapInstance.transform.pitch,
    getPadding: () => mapInstance.transform.padding,
    getBounds: () => mapInstance.transform.getBounds(),
    project: (lnglat) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.project(lnglat);
      map.transform = tr;
      return result2;
    },
    unproject: (point) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.unproject(point);
      map.transform = tr;
      return result2;
    },
    // options diverge between mapbox and maplibre
    queryTerrainElevation: (lnglat, options) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.queryTerrainElevation(lnglat, options);
      map.transform = tr;
      return result2;
    }
  };
  for (const key of getMethodNames(map)) {
    if (!(key in result) && !skipMethods.includes(key)) {
      result[key] = map[key].bind(map);
    }
  }
  return result;
}
function getMethodNames(obj) {
  const result = /* @__PURE__ */ new Set();
  let proto = obj;
  while (proto) {
    for (const key of Object.getOwnPropertyNames(proto)) {
      if (key[0] !== "_" && typeof obj[key] === "function" && key !== "fire" && key !== "setEventedParent") {
        result.add(key);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return Array.from(result);
}

// node_modules/react-map-gl/dist/esm/utils/use-isomorphic-layout-effect.js
var import_react2 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
var use_isomorphic_layout_effect_default = useIsomorphicLayoutEffect;

// node_modules/react-map-gl/dist/esm/utils/set-globals.js
var globalSettings = [
  "baseApiUrl",
  "maxParallelImageRequests",
  "workerClass",
  "workerCount",
  "workerUrl"
];
function setGlobals(mapLib2, props) {
  for (const key of globalSettings) {
    if (key in props) {
      mapLib2[key] = props[key];
    }
  }
  const { RTLTextPlugin = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js" } = props;
  if (RTLTextPlugin && mapLib2.getRTLTextPluginStatus && mapLib2.getRTLTextPluginStatus() === "unavailable") {
    mapLib2.setRTLTextPlugin(RTLTextPlugin, (error) => {
      if (error) {
        console.error(error);
      }
    }, false);
  }
}

// node_modules/react-map-gl/dist/esm/components/map.js
var MapContext = React2.createContext(null);
function Map(props, ref, defaultLib) {
  const mountedMapsContext = (0, import_react3.useContext)(MountedMapsContext);
  const [mapInstance, setMapInstance] = (0, import_react3.useState)(null);
  const containerRef = (0, import_react3.useRef)();
  const { current: contextValue } = (0, import_react3.useRef)({ mapLib: null, map: null });
  (0, import_react3.useEffect)(() => {
    const mapLib2 = props.mapLib;
    let isMounted = true;
    let mapbox;
    Promise.resolve(mapLib2 || defaultLib).then((module) => {
      if (!isMounted) {
        return;
      }
      if (!module) {
        throw new Error("Invalid mapLib");
      }
      const mapboxgl = "Map" in module ? module : module.default;
      if (!mapboxgl.Map) {
        throw new Error("Invalid mapLib");
      }
      setGlobals(mapboxgl, props);
      if (!mapboxgl.supported || mapboxgl.supported(props)) {
        if (props.reuseMaps) {
          mapbox = Mapbox.reuse(props, containerRef.current);
        }
        if (!mapbox) {
          mapbox = new Mapbox(mapboxgl.Map, props, containerRef.current);
        }
        contextValue.map = createRef(mapbox);
        contextValue.mapLib = mapboxgl;
        setMapInstance(mapbox);
        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapMount(contextValue.map, props.id);
      } else {
        throw new Error("Map is not supported by this browser");
      }
    }).catch((error) => {
      const { onError } = props;
      if (onError) {
        onError({
          type: "error",
          target: null,
          originalEvent: null,
          error
        });
      } else {
        console.error(error);
      }
    });
    return () => {
      isMounted = false;
      if (mapbox) {
        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapUnmount(props.id);
        if (props.reuseMaps) {
          mapbox.recycle();
        } else {
          mapbox.destroy();
        }
      }
    };
  }, []);
  use_isomorphic_layout_effect_default(() => {
    if (mapInstance) {
      mapInstance.setProps(props);
    }
  });
  (0, import_react3.useImperativeHandle)(ref, () => contextValue.map, [mapInstance]);
  const style = (0, import_react3.useMemo)(() => ({
    position: "relative",
    width: "100%",
    height: "100%",
    ...props.style
  }), [props.style]);
  const CHILD_CONTAINER_STYLE = {
    height: "100%"
  };
  return React2.createElement("div", { id: props.id, ref: containerRef, style }, mapInstance && React2.createElement(
    MapContext.Provider,
    { value: contextValue },
    React2.createElement("div", { "mapboxgl-children": "", style: CHILD_CONTAINER_STYLE }, props.children)
  ));
}

// node_modules/react-map-gl/dist/esm/components/marker.js
var React3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react4 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/utils/apply-react-style.js
var unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function applyReactStyle(element, styles) {
  if (!element || !styles) {
    return;
  }
  const style = element.style;
  for (const key in styles) {
    const value = styles[key];
    if (Number.isFinite(value) && !unitlessNumber.test(key)) {
      style[key] = `${value}px`;
    } else {
      style[key] = value;
    }
  }
}

// node_modules/react-map-gl/dist/esm/components/marker.js
function Marker(props, ref) {
  const { map, mapLib: mapLib2 } = (0, import_react4.useContext)(MapContext);
  const thisRef = (0, import_react4.useRef)({ props });
  thisRef.current.props = props;
  const marker = (0, import_react4.useMemo)(() => {
    let hasChildren = false;
    React3.Children.forEach(props.children, (el) => {
      if (el) {
        hasChildren = true;
      }
    });
    const options = {
      ...props,
      element: hasChildren ? document.createElement("div") : null
    };
    const mk = new mapLib2.Marker(options);
    mk.setLngLat([props.longitude, props.latitude]);
    mk.getElement().addEventListener("click", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, {
        type: "click",
        target: mk,
        originalEvent: e
      });
    });
    mk.on("dragstart", (e) => {
      var _a, _b;
      const evt = e;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    mk.on("drag", (e) => {
      var _a, _b;
      const evt = e;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDrag) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    mk.on("dragend", (e) => {
      var _a, _b;
      const evt = e;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    return mk;
  }, []);
  (0, import_react4.useEffect)(() => {
    marker.addTo(map.getMap());
    return () => {
      marker.remove();
    };
  }, []);
  const { longitude, latitude, offset, style, draggable = false, popup = null, rotation = 0, rotationAlignment = "auto", pitchAlignment = "auto" } = props;
  (0, import_react4.useEffect)(() => {
    applyReactStyle(marker.getElement(), style);
  }, [style]);
  (0, import_react4.useImperativeHandle)(ref, () => marker, []);
  if (marker.getLngLat().lng !== longitude || marker.getLngLat().lat !== latitude) {
    marker.setLngLat([longitude, latitude]);
  }
  if (offset && !arePointsEqual(marker.getOffset(), offset)) {
    marker.setOffset(offset);
  }
  if (marker.isDraggable() !== draggable) {
    marker.setDraggable(draggable);
  }
  if (marker.getRotation() !== rotation) {
    marker.setRotation(rotation);
  }
  if (marker.getRotationAlignment() !== rotationAlignment) {
    marker.setRotationAlignment(rotationAlignment);
  }
  if (marker.getPitchAlignment() !== pitchAlignment) {
    marker.setPitchAlignment(pitchAlignment);
  }
  if (marker.getPopup() !== popup) {
    marker.setPopup(popup);
  }
  return (0, import_react_dom.createPortal)(props.children, marker.getElement());
}
var marker_default = (0, import_react4.memo)((0, import_react4.forwardRef)(Marker));

// node_modules/react-map-gl/dist/esm/components/popup.js
var import_react_dom2 = __toESM(require_react_dom());
var import_react5 = __toESM(require_react());
function getClassList(className) {
  return new Set(className ? className.trim().split(/\s+/) : []);
}
function Popup(props, ref) {
  const { map, mapLib: mapLib2 } = (0, import_react5.useContext)(MapContext);
  const container = (0, import_react5.useMemo)(() => {
    return document.createElement("div");
  }, []);
  const thisRef = (0, import_react5.useRef)({ props });
  thisRef.current.props = props;
  const popup = (0, import_react5.useMemo)(() => {
    const options = { ...props };
    const pp = new mapLib2.Popup(options);
    pp.setLngLat([props.longitude, props.latitude]);
    pp.once("open", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    return pp;
  }, []);
  (0, import_react5.useEffect)(() => {
    const onClose = (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };
    popup.on("close", onClose);
    popup.setDOMContent(container).addTo(map.getMap());
    return () => {
      popup.off("close", onClose);
      if (popup.isOpen()) {
        popup.remove();
      }
    };
  }, []);
  (0, import_react5.useEffect)(() => {
    applyReactStyle(popup.getElement(), props.style);
  }, [props.style]);
  (0, import_react5.useImperativeHandle)(ref, () => popup, []);
  if (popup.isOpen()) {
    if (popup.getLngLat().lng !== props.longitude || popup.getLngLat().lat !== props.latitude) {
      popup.setLngLat([props.longitude, props.latitude]);
    }
    if (props.offset && !deepEqual(popup.options.offset, props.offset)) {
      popup.setOffset(props.offset);
    }
    if (popup.options.anchor !== props.anchor || popup.options.maxWidth !== props.maxWidth) {
      popup.options.anchor = props.anchor;
      popup.setMaxWidth(props.maxWidth);
    }
    if (popup.options.className !== props.className) {
      const prevClassList = getClassList(popup.options.className);
      const nextClassList = getClassList(props.className);
      for (const c of prevClassList) {
        if (!nextClassList.has(c)) {
          popup.removeClassName(c);
        }
      }
      for (const c of nextClassList) {
        if (!prevClassList.has(c)) {
          popup.addClassName(c);
        }
      }
      popup.options.className = props.className;
    }
  }
  return (0, import_react_dom2.createPortal)(props.children, container);
}
var popup_default = (0, import_react5.memo)((0, import_react5.forwardRef)(Popup));

// node_modules/react-map-gl/dist/esm/components/attribution-control.js
var import_react7 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/use-control.js
var import_react6 = __toESM(require_react());
function useControl(onCreate, arg1, arg2, arg3) {
  const context = (0, import_react6.useContext)(MapContext);
  const ctrl = (0, import_react6.useMemo)(() => onCreate(context), []);
  (0, import_react6.useEffect)(() => {
    const opts = arg3 || arg2 || arg1;
    const onAdd = typeof arg1 === "function" && typeof arg2 === "function" ? arg1 : null;
    const onRemove = typeof arg2 === "function" ? arg2 : typeof arg1 === "function" ? arg1 : null;
    const { map } = context;
    if (!map.hasControl(ctrl)) {
      map.addControl(ctrl, opts === null || opts === void 0 ? void 0 : opts.position);
      if (onAdd) {
        onAdd(context);
      }
    }
    return () => {
      if (onRemove) {
        onRemove(context);
      }
      if (map.hasControl(ctrl)) {
        map.removeControl(ctrl);
      }
    };
  }, []);
  return ctrl;
}
var use_control_default = useControl;

// node_modules/react-map-gl/dist/esm/components/attribution-control.js
function AttributionControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.AttributionControl(props), {
    position: props.position
  });
  (0, import_react7.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var attribution_control_default = (0, import_react7.memo)(AttributionControl);

// node_modules/react-map-gl/dist/esm/components/fullscreen-control.js
var import_react8 = __toESM(require_react());
function FullscreenControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.FullscreenControl({
    container: props.containerId && document.getElementById(props.containerId)
  }), { position: props.position });
  (0, import_react8.useEffect)(() => {
    applyReactStyle(ctrl._controlContainer, props.style);
  }, [props.style]);
  return null;
}
var fullscreen_control_default = (0, import_react8.memo)(FullscreenControl);

// node_modules/react-map-gl/dist/esm/components/geolocate-control.js
var import_react9 = __toESM(require_react());
function GeolocateControl(props, ref) {
  const thisRef = (0, import_react9.useRef)({ props });
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => {
    const gc = new mapLib2.GeolocateControl(props);
    const setupUI = gc._setupUI;
    gc._setupUI = (args) => {
      if (!gc._container.hasChildNodes()) {
        setupUI(args);
      }
    };
    gc.on("geolocate", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onGeolocate) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    gc.on("error", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onError) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    gc.on("outofmaxbounds", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onOutOfMaxBounds) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    gc.on("trackuserlocationstart", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onTrackUserLocationStart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    gc.on("trackuserlocationend", (e) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onTrackUserLocationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    });
    return gc;
  }, { position: props.position });
  thisRef.current.props = props;
  (0, import_react9.useImperativeHandle)(ref, () => ctrl, []);
  (0, import_react9.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var geolocate_control_default = (0, import_react9.memo)((0, import_react9.forwardRef)(GeolocateControl));

// node_modules/react-map-gl/dist/esm/components/navigation-control.js
var import_react10 = __toESM(require_react());
function NavigationControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.NavigationControl(props), {
    position: props.position
  });
  (0, import_react10.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var navigation_control_default = (0, import_react10.memo)(NavigationControl);

// node_modules/react-map-gl/dist/esm/components/scale-control.js
var import_react11 = __toESM(require_react());
function ScaleControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.ScaleControl(props), {
    position: props.position
  });
  const propsRef = (0, import_react11.useRef)(props);
  const prevProps = propsRef.current;
  propsRef.current = props;
  const { style } = props;
  if (props.maxWidth !== void 0 && props.maxWidth !== prevProps.maxWidth) {
    ctrl.options.maxWidth = props.maxWidth;
  }
  if (props.unit !== void 0 && props.unit !== prevProps.unit) {
    ctrl.setUnit(props.unit);
  }
  (0, import_react11.useEffect)(() => {
    applyReactStyle(ctrl._container, style);
  }, [style]);
  return null;
}
var scale_control_default = (0, import_react11.memo)(ScaleControl);

// node_modules/react-map-gl/dist/esm/components/source.js
var React4 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/utils/assert.js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

// node_modules/react-map-gl/dist/esm/components/source.js
var sourceCounter = 0;
function createSource(map, id, props) {
  if (map.style && map.style._loaded) {
    const options = { ...props };
    delete options.id;
    delete options.children;
    map.addSource(id, options);
    return map.getSource(id);
  }
  return null;
}
function updateSource(source, props, prevProps) {
  assert(props.id === prevProps.id, "source id changed");
  assert(props.type === prevProps.type, "source type changed");
  let changedKey = "";
  let changedKeyCount = 0;
  for (const key in props) {
    if (key !== "children" && key !== "id" && !deepEqual(prevProps[key], props[key])) {
      changedKey = key;
      changedKeyCount++;
    }
  }
  if (!changedKeyCount) {
    return;
  }
  const type = props.type;
  if (type === "geojson") {
    source.setData(props.data);
  } else if (type === "image") {
    source.updateImage({
      url: props.url,
      coordinates: props.coordinates
    });
  } else if ("setCoordinates" in source && changedKeyCount === 1 && changedKey === "coordinates") {
    source.setCoordinates(props.coordinates);
  } else if ("setUrl" in source) {
    switch (changedKey) {
      case "url":
        source.setUrl(props.url);
        break;
      case "tiles":
        source.setTiles(props.tiles);
        break;
      default:
    }
  } else {
    console.warn(`Unable to update <Source> prop: ${changedKey}`);
  }
}
function Source(props) {
  const map = (0, import_react12.useContext)(MapContext).map.getMap();
  const propsRef = (0, import_react12.useRef)(props);
  const [, setStyleLoaded] = (0, import_react12.useState)(0);
  const id = (0, import_react12.useMemo)(() => props.id || `jsx-source-${sourceCounter++}`, []);
  (0, import_react12.useEffect)(() => {
    if (map) {
      const forceUpdate = () => setTimeout(() => setStyleLoaded((version) => version + 1), 0);
      map.on("styledata", forceUpdate);
      forceUpdate();
      return () => {
        var _a;
        map.off("styledata", forceUpdate);
        if (map.style && map.style._loaded && map.getSource(id)) {
          const allLayers = (_a = map.getStyle()) === null || _a === void 0 ? void 0 : _a.layers;
          if (allLayers) {
            for (const layer of allLayers) {
              if (layer.source === id) {
                map.removeLayer(layer.id);
              }
            }
          }
          map.removeSource(id);
        }
      };
    }
    return void 0;
  }, [map]);
  let source = map && map.style && map.getSource(id);
  if (source) {
    updateSource(source, props, propsRef.current);
  } else {
    source = createSource(map, id, props);
  }
  propsRef.current = props;
  return source && React4.Children.map(props.children, (child) => child && (0, import_react13.cloneElement)(child, {
    source: id
  })) || null;
}
var source_default = Source;

// node_modules/react-map-gl/dist/esm/components/layer.js
var import_react14 = __toESM(require_react());
function updateLayer(map, id, props, prevProps) {
  assert(props.id === prevProps.id, "layer id changed");
  assert(props.type === prevProps.type, "layer type changed");
  if (props.type === "custom" || prevProps.type === "custom") {
    return;
  }
  const {
    layout = {},
    paint = {},
    // @ts-expect-error filter is not defined on some layer types
    filter,
    minzoom,
    maxzoom,
    beforeId
  } = props;
  if (beforeId !== prevProps.beforeId) {
    map.moveLayer(id, beforeId);
  }
  if (layout !== prevProps.layout) {
    const prevLayout = prevProps.layout || {};
    for (const key in layout) {
      if (!deepEqual(layout[key], prevLayout[key])) {
        map.setLayoutProperty(id, key, layout[key]);
      }
    }
    for (const key in prevLayout) {
      if (!layout.hasOwnProperty(key)) {
        map.setLayoutProperty(id, key, void 0);
      }
    }
  }
  if (paint !== prevProps.paint) {
    const prevPaint = prevProps.paint || {};
    for (const key in paint) {
      if (!deepEqual(paint[key], prevPaint[key])) {
        map.setPaintProperty(id, key, paint[key]);
      }
    }
    for (const key in prevPaint) {
      if (!paint.hasOwnProperty(key)) {
        map.setPaintProperty(id, key, void 0);
      }
    }
  }
  if (!deepEqual(filter, prevProps.filter)) {
    map.setFilter(id, filter);
  }
  if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
    map.setLayerZoomRange(id, minzoom, maxzoom);
  }
}
function createLayer(map, id, props) {
  if (map.style && map.style._loaded && (!("source" in props) || map.getSource(props.source))) {
    const options = { ...props, id };
    delete options.beforeId;
    map.addLayer(options, props.beforeId);
  }
}
var layerCounter = 0;
function Layer(props) {
  const map = (0, import_react14.useContext)(MapContext).map.getMap();
  const propsRef = (0, import_react14.useRef)(props);
  const [, setStyleLoaded] = (0, import_react14.useState)(0);
  const id = (0, import_react14.useMemo)(() => props.id || `jsx-layer-${layerCounter++}`, []);
  (0, import_react14.useEffect)(() => {
    if (map) {
      const forceUpdate = () => setStyleLoaded((version) => version + 1);
      map.on("styledata", forceUpdate);
      forceUpdate();
      return () => {
        map.off("styledata", forceUpdate);
        if (map.style && map.style._loaded && map.getLayer(id)) {
          map.removeLayer(id);
        }
      };
    }
    return void 0;
  }, [map]);
  const layer = map && map.style && map.getLayer(id);
  if (layer) {
    try {
      updateLayer(map, id, props, propsRef.current);
    } catch (error) {
      console.warn(error);
    }
  } else {
    createLayer(map, id, props);
  }
  propsRef.current = props;
  return null;
}
var layer_default = Layer;

// node_modules/react-map-gl/dist/esm/exports-maplibre.js
function useMap2() {
  return useMap();
}
var mapLib = import("./maplibre-gl.js");
var Map2 = (() => {
  return React5.forwardRef(function Map3(props, ref) {
    return Map(props, ref, mapLib);
  });
})();
var Marker2 = marker_default;
var Popup2 = popup_default;
var AttributionControl2 = attribution_control_default;
var FullscreenControl2 = fullscreen_control_default;
var NavigationControl2 = navigation_control_default;
var GeolocateControl2 = geolocate_control_default;
var ScaleControl2 = scale_control_default;
var exports_maplibre_default = Map2;
export {
  AttributionControl2 as AttributionControl,
  FullscreenControl2 as FullscreenControl,
  GeolocateControl2 as GeolocateControl,
  layer_default as Layer,
  Map2 as Map,
  MapProvider,
  Marker2 as Marker,
  NavigationControl2 as NavigationControl,
  Popup2 as Popup,
  ScaleControl2 as ScaleControl,
  source_default as Source,
  exports_maplibre_default as default,
  use_control_default as useControl,
  useMap2 as useMap
};
//# sourceMappingURL=react-map-gl_maplibre.js.map
