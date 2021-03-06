/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/server_rendering.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./app/javascript/components sync ^\.\/.*$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/packs/server_rendering.js":
/*!**************************************************!*\
  !*** ./app/javascript/packs/server_rendering.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");

var ReactRailsUJS = __webpack_require__(/*! react_ujs */ "./node_modules/react_ujs/react_ujs/index.js");

ReactRailsUJS.useContext(componentRequireContext);

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ReactDOMServer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom/server'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _detectEvents = __webpack_require__(/*! ./src/events/detect */ "./node_modules/react_ujs/react_ujs/src/events/detect.js");

var constructorFromGlobal = __webpack_require__(/*! ./src/getConstructor/fromGlobal */ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromGlobal.js");

var constructorFromRequireContextWithGlobalFallback = __webpack_require__(/*! ./src/getConstructor/fromRequireContextWithGlobalFallback */ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContextWithGlobalFallback.js");

var ReactRailsUJS = {
  // This attribute holds the name of component which should be mounted
  // example: `data-react-class="MyApp.Items.EditForm"`
  CLASS_NAME_ATTR: 'data-react-class',
  // This attribute holds JSON stringified props for initializing the component
  // example: `data-react-props="{\"item\": { \"id\": 1, \"name\": \"My Item\"} }"`
  PROPS_ATTR: 'data-react-props',
  // This attribute holds which method to use between: ReactDOM.hydrate, ReactDOM.render
  RENDER_ATTR: 'data-hydrate',
  // A unique identifier to identify a node
  CACHE_ID_ATTR: "data-react-cache-id",
  TURBOLINKS_PERMANENT_ATTR: "data-turbolinks-permanent",
  // If jQuery is detected, save a reference to it for event handlers
  jQuery: typeof window !== 'undefined' && typeof window.jQuery !== 'undefined' && window.jQuery,
  components: {},
  // helper method for the mount and unmount methods to find the
  // `data-react-class` DOM elements
  findDOMNodes: function findDOMNodes(searchSelector) {
    var classNameAttr = ReactRailsUJS.CLASS_NAME_ATTR; // we will use fully qualified paths as we do not bind the callbacks

    var selector, parent;

    switch (_typeof(searchSelector)) {
      case 'undefined':
        selector = '[' + classNameAttr + ']';
        parent = document;
        break;

      case 'object':
        selector = '[' + classNameAttr + ']';
        parent = searchSelector;
        break;

      case 'string':
        selector = searchSelector + '[' + classNameAttr + '], ' + searchSelector + ' [' + classNameAttr + ']';
        parent = document;
        break;

      default:
        break;
    }

    if (ReactRailsUJS.jQuery) {
      return ReactRailsUJS.jQuery(selector, parent);
    } else {
      return parent.querySelectorAll(selector);
    }
  },
  // Get the constructor for a className (returns a React class)
  // Override this function to lookup classes in a custom way,
  // the default is ReactRailsUJS.ComponentGlobal
  getConstructor: constructorFromGlobal,
  // Given a Webpack `require.context`,
  // try finding components with `require`,
  // then falling back to global lookup.
  useContext: function useContext(requireContext) {
    this.getConstructor = constructorFromRequireContextWithGlobalFallback(requireContext);
  },
  // Render `componentName` with `props` to a string,
  // using the specified `renderFunction` from `react-dom/server`.
  serverRender: function serverRender(renderFunction, componentName, props) {
    var componentClass = this.getConstructor(componentName);
    var element = React.createElement(componentClass, props);
    return ReactDOMServer[renderFunction](element);
  },
  // Within `searchSelector`, find nodes which should have React components
  // inside them, and mount them with their props.
  mountComponents: function mountComponents(searchSelector) {
    var ujs = ReactRailsUJS;
    var nodes = ujs.findDOMNodes(searchSelector);

    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i];
      var className = node.getAttribute(ujs.CLASS_NAME_ATTR);
      var constructor = ujs.getConstructor(className);
      var propsJson = node.getAttribute(ujs.PROPS_ATTR);
      var props = propsJson && JSON.parse(propsJson);
      var hydrate = node.getAttribute(ujs.RENDER_ATTR);
      var cacheId = node.getAttribute(ujs.CACHE_ID_ATTR);
      var turbolinksPermanent = node.hasAttribute(ujs.TURBOLINKS_PERMANENT_ATTR);

      if (!constructor) {
        var message = "Cannot find component: '" + className + "'";

        if (console && console.log) {
          console.log("%c[react-rails] %c" + message + " for element", "font-weight: bold", "", node);
        }

        throw new Error(message + ". Make sure your component is available to render.");
      } else {
        var component = this.components[cacheId];

        if (component === undefined) {
          component = React.createElement(constructor, props);

          if (turbolinksPermanent) {
            this.components[cacheId] = component;
          }
        }

        if (hydrate && typeof ReactDOM.hydrate === "function") {
          component = ReactDOM.hydrate(component, node);
        } else {
          component = ReactDOM.render(component, node);
        }
      }
    }
  },
  // Within `searchSelector`, find nodes which have React components
  // inside them, and unmount those components.
  unmountComponents: function unmountComponents(searchSelector) {
    var nodes = ReactRailsUJS.findDOMNodes(searchSelector);

    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i];
      ReactDOM.unmountComponentAtNode(node);
    }
  },
  // Check the global context for installed libraries
  // and figure out which library to hook up to (pjax, Turbolinks, jQuery)
  // This is called on load, but you can call it again if needed
  // (It will unmount itself)
  detectEvents: function detectEvents() {
    _detectEvents(this);
  }
}; // These stable references are so that handlers can be added and removed:

ReactRailsUJS.handleMount = function (e) {
  var target = undefined;

  if (e && e.target) {
    target = e.target;
  }

  ReactRailsUJS.mountComponents(target);
};

ReactRailsUJS.handleUnmount = function (e) {
  var target = undefined;

  if (e && e.target) {
    target = e.target;
  }

  ReactRailsUJS.unmountComponents(target);
};

if (typeof window !== "undefined") {
  // Only setup events for browser (not server-rendering)
  ReactRailsUJS.detectEvents();
} // It's a bit of a no-no to populate the global namespace,
// but we really need it!
// We need access to this object for server rendering, and
// we can't do a dynamic `require`, so we'll grab it from here:


self.ReactRailsUJS = ReactRailsUJS;
module.exports = ReactRailsUJS;

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/detect.js":
/*!***************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/detect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeEvents = __webpack_require__(/*! ./native */ "./node_modules/react_ujs/react_ujs/src/events/native.js");

var pjaxEvents = __webpack_require__(/*! ./pjax */ "./node_modules/react_ujs/react_ujs/src/events/pjax.js");

var turbolinksEvents = __webpack_require__(/*! ./turbolinks */ "./node_modules/react_ujs/react_ujs/src/events/turbolinks.js");

var turbolinksClassicDeprecatedEvents = __webpack_require__(/*! ./turbolinksClassicDeprecated */ "./node_modules/react_ujs/react_ujs/src/events/turbolinksClassicDeprecated.js");

var turbolinksClassicEvents = __webpack_require__(/*! ./turbolinksClassic */ "./node_modules/react_ujs/react_ujs/src/events/turbolinksClassic.js"); // see what things are globally available
// and setup event handlers to those things


module.exports = function (ujs) {
  if (ujs.handleEvent) {
    // We're calling this a second time -- remove previous handlers
    if (typeof Turbolinks !== "undefined" && typeof Turbolinks.EVENTS !== "undefined") {
      turbolinksClassicEvents.teardown(ujs);
    }

    turbolinksEvents.teardown(ujs);
    turbolinksClassicDeprecatedEvents.teardown(ujs);
    pjaxEvents.teardown(ujs);
    nativeEvents.teardown(ujs);
  }

  if ('addEventListener' in window) {
    ujs.handleEvent = function (eventName, callback) {
      document.addEventListener(eventName, callback);
    };

    ujs.removeEvent = function (eventName, callback) {
      document.removeEventListener(eventName, callback);
    };
  } else {
    ujs.handleEvent = function (eventName, callback) {
      window.attachEvent(eventName, callback);
    };

    ujs.removeEvent = function (eventName, callback) {
      window.detachEvent(eventName, callback);
    };
  } // Detect which kind of events to set up:


  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
    if (typeof Turbolinks.EVENTS !== 'undefined') {
      // Turbolinks.EVENTS is in classic version 2.4.0+
      turbolinksClassicEvents.setup(ujs);
    } else if (typeof Turbolinks.controller !== "undefined") {
      // Turbolinks.controller is in version 5+
      turbolinksEvents.setup(ujs);
    } else {
      turbolinksClassicDeprecatedEvents.setup(ujs);
    }
  } else if (typeof $ !== "undefined" && typeof $.pjax === 'function') {
    pjaxEvents.setup(ujs);
  } else {
    nativeEvents.setup(ujs);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/native.js":
/*!***************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/native.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // Attach handlers to browser events to mount
  // (There are no unmount handlers since the page is destroyed on navigation)
  setup: function setup(ujs) {
    if ('addEventListener' in window) {
      ujs.handleEvent('DOMContentLoaded', ujs.handleMount);
    } else {
      // add support to IE8 without jQuery
      ujs.handleEvent('onload', ujs.handleMount);
    }
  },
  teardown: function teardown(ujs) {
    ujs.removeEvent('DOMContentLoaded', ujs.handleMount);
    ujs.removeEvent('onload', ujs.handleMount);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/pjax.js":
/*!*************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/pjax.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // pjax support
  setup: function setup(ujs) {
    ujs.handleEvent('ready', ujs.handleMount);
    ujs.handleEvent('pjax:end', ujs.handleMount);
    ujs.handleEvent('pjax:beforeReplace', ujs.handleUnmount);
  },
  teardown: function teardown(ujs) {
    ujs.removeEvent('ready', ujs.handleMount);
    ujs.removeEvent('pjax:end', ujs.handleMount);
    ujs.removeEvent('pjax:beforeReplace', ujs.handleUnmount);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/turbolinks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/turbolinks.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // Turbolinks 5+ got rid of named events (?!)
  setup: function setup(ujs) {
    ujs.handleEvent('turbolinks:load', ujs.handleMount);
    ujs.handleEvent('turbolinks:before-render', ujs.handleUnmount);
  },
  teardown: function teardown(ujs) {
    ujs.removeEvent('turbolinks:load', ujs.handleMount);
    ujs.removeEvent('turbolinks:before-render', ujs.handleUnmount);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/turbolinksClassic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/turbolinksClassic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // Attach handlers to Turbolinks-Classic events
  // for mounting and unmounting components
  setup: function setup(ujs) {
    ujs.handleEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
    ujs.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
  },
  teardown: function teardown(ujs) {
    ujs.removeEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
    ujs.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/events/turbolinksClassicDeprecated.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/events/turbolinksClassicDeprecated.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // Before Turbolinks 2.4.0, Turbolinks didn't
  // have named events and didn't have a before-unload event.
  // Also, it didn't work with the Turbolinks cache, see
  // https://github.com/reactjs/react-rails/issues/87
  setup: function setup(ujs) {
    Turbolinks.pagesCached(0);
    ujs.handleEvent('page:change', ujs.handleMount);
    ujs.handleEvent('page:receive', ujs.handleUnmount);
  },
  teardown: function teardown(ujs) {
    ujs.removeEvent('page:change', ujs.handleMount);
    ujs.removeEvent('page:receive', ujs.handleUnmount);
  }
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromGlobal.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/getConstructor/fromGlobal.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Assume className is simple and can be found at top-level (window).
// Fallback to eval to handle cases like 'My.React.ComponentName'.
// Also, try to gracefully import Babel 6 style default exports
var topLevel = typeof window === "undefined" ? this : window;

module.exports = function (className) {
  var constructor; // Try to access the class globally first

  constructor = topLevel[className]; // If that didn't work, try eval

  if (!constructor) {
    constructor = eval(className);
  } // Lastly, if there is a default attribute try that


  if (constructor && constructor['default']) {
    constructor = constructor['default'];
  }

  return constructor;
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContext.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContext.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Load React components by requiring them from "components/", for example:
//
// - "pages/index" -> `require("components/pages/index")`
// - "pages/show.Header" -> `require("components/pages/show").Header`
// - "pages/show.Body.Content" -> `require("components/pages/show").Body.Content`
//
module.exports = function (reqctx) {
  return function (className) {
    var parts = className.split(".");
    var filename = parts.shift();
    var keys = parts; // Load the module:

    var component = reqctx("./" + filename); // Then access each key:

    keys.forEach(function (k) {
      component = component[k];
    }); // support `export default`

    if (component.__esModule) {
      component = component["default"];
    }

    return component;
  };
};

/***/ }),

/***/ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContextWithGlobalFallback.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContextWithGlobalFallback.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Make a function which:
// - First tries to require the name
// - Then falls back to global lookup
var fromGlobal = __webpack_require__(/*! ./fromGlobal */ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromGlobal.js");

var fromRequireContext = __webpack_require__(/*! ./fromRequireContext */ "./node_modules/react_ujs/react_ujs/src/getConstructor/fromRequireContext.js");

module.exports = function (reqctx) {
  var fromCtx = fromRequireContext(reqctx);
  return function (className) {
    var component;

    try {
      // `require` will raise an error if this className isn't found:
      component = fromCtx(className);
    } catch (firstErr) {
      // fallback to global:
      try {
        component = fromGlobal(className);
      } catch (secondErr) {
        console.error(firstErr);
        console.error(secondErr);
      }
    }

    return component;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=server_rendering-51b257c1223e7f2f0534.js.map