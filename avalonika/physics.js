/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./engine/src/physics/PhysicsEngine.js":
/*!*********************************************!*\
  !*** ./engine/src/physics/PhysicsEngine.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicsEngine": () => (/* binding */ PhysicsEngine)
/* harmony export */ });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);

// https://github.com/liabru/matter-js/wiki/Getting-started

const Engine = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine);
const Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies);
const Composite = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite);

class PhysicsEngine {
    constructor() {
        console.log( "🎳 Physics start." );
        this.engine = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine.create();
        this.updateFPS = 60;
        this.ground = {};
    }

    get world() {
        return this.engine.world;
    }

    setStageBound( width,height,bottom,walls,ceil ) {
        const addBody = ( name,flag,x,y,w,h )=>{
            if ( this.ground[name] ) {
                Composite.remove( this.world,this.ground[name] );
                this.ground[name] = null;
            }
            if ( flag ) {
                this.ground[name] = Bodies.rectangle( x,y,w, h, { isStatic: true } );
                Composite.add( this.world,this.ground[name] );
            }
        };

        addBody( "bottom",bottom,0,height,width,100 );
        addBody( "ceil",ceil,0,-100,width,100 );
        addBody( "left",walls,-100,0,100,height );
        addBody( "right",walls,width,0,100,height );
    }

    update() {
        Engine.update( this.engine,this.updateFPS );
    }

    addRectable( x,y,w,h ) {
        
    }
}



/***/ }),

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * matter-js 0.17.1 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1787__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
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
/******/ 	__nested_webpack_require_1787__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1787__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1787__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1787__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1787__.r = function(exports) {
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
/******/ 	__nested_webpack_require_1787__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1787__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1787__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1787__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1787__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1787__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1787__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());
    Common._warnedOnce = {};
    Common._decomp = null;
    
    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */
    Common.now = function() {
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        if (Date.now) {
            return Date.now();
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */
    Common.warnOnce = function() {
        var message = Array.prototype.slice.call(arguments).join(' ');

        if (!Common._warnedOnce[message]) {
            Common.warn(message);
            Common._warnedOnce[message] = true;
        }
    };

    /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */
    Common.deprecated = function(obj, prop, warning) {
        obj[prop] = Common.chain(function() {
            Common.warnOnce('🔅 deprecated 🔅', warning);
        }, obj[prop]);
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */
    Common.setDecomp = function(decomp) {
        Common._decomp = decomp;
    };

    /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */
    Common.getDecomp = function() {
        // get user provided decomp if set
        var decomp = Common._decomp;

        try {
            // otherwise from window global
            if (!decomp && typeof window !== 'undefined') {
                decomp = window.decomp;
            }
    
            // otherwise from node global
            if (!decomp && typeof __webpack_require__.g !== 'undefined') {
                decomp = __webpack_require__.g.decomp;
            }
        } catch (e) {
            // decomp not available
            decomp = null;
        }

        return decomp;
    };
})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_35378__) {

/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = __nested_webpack_require_35378__(2);
var Common = __nested_webpack_require_35378__(0);

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        var i;
        if (scalar) {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x * scalar;
                vertices[i].y += vector.y * scalar;
            }
        } else {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x;
                vertices[i].y += vector.y;
            }
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                dx = vertice.x - point.x,
                dy = vertice.y - point.y;
                
            vertice.x = point.x + (dx * cos - dy * sin);
            vertice.y = point.y + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                nextVertice = vertices[(i + 1) % vertices.length];
            if ((point.x - vertice.x) * (nextVertice.y - vertice.y) + (point.y - vertice.y) * (vertice.x - nextVertice.x) > 0) {
                return false;
            }
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_49241__) {

/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = __nested_webpack_require_49241__(0);

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        var events = object.events;
        
        if (events && Common.keys(events).length > 0) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_52439__) {

/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = __nested_webpack_require_52439__(4);
var Common = __nested_webpack_require_52439__(0);
var Bounds = __nested_webpack_require_52439__(1);
var Body = __nested_webpack_require_52439__(6);

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {}
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for(var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
            Composite.setModified(compositeA, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
            Composite.setModified(composite, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;
        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
            .concat(Composite.allConstraints(composite))
            .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * Most `Matter.Composite` methods will automatically set this flag to `true` to inform the engine of changes to be handled.
     * If you need to change it manually, you should use the `Composite.setModified` method.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_75389__) {

/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = __nested_webpack_require_75389__(3);
var Vector = __nested_webpack_require_75389__(2);
var Sleeping = __nested_webpack_require_75389__(7);
var Render = __nested_webpack_require_75389__(16);
var Common = __nested_webpack_require_75389__(0);
var Bounds = __nested_webpack_require_75389__(1);
var Axes = __nested_webpack_require_75389__(10);

(function() {

    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                }
            },
            events: null,
            bounds: null,
            chamfer: null,
            circleRadius: 0,
            positionPrev: null,
            anglePrev: 0,
            parent: null,
            axes: null,
            area: 0,
            mass: 0,
            inertia: 0,
            _original: null
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;

            value = settings[property];
            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            case 'centre':
                Body.setCentre(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                part._original = null;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */
    Body.setCentre = function(body, centre, relative) {
        if (!relative) {
            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
            body.position.x = centre.x;
            body.position.y = centre.y;
        } else {
            body.positionPrev.x += centre.x;
            body.positionPrev.y += centre.y;
            body.position.x += centre.x;
            body.position.y += centre.y;
        }
    };

    /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */
    Body.setPosition = function(body, position) {
        var delta = Vector.sub(position, body.position);
        body.positionPrev.x += delta.x;
        body.positionPrev.y += delta.y;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */
    Body.setAngle = function(body, angle) {
        var delta = angle - body.angle;
        body.anglePrev += delta;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        body.positionPrev.x = body.position.x - velocity.x;
        body.positionPrev.y = body.position.y - velocity.y;
        body.velocity.x = velocity.x;
        body.velocity.y = velocity.y;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        body.anglePrev = body.angle - velocity;
        body.angularVelocity = velocity;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */
    Body.translate = function(body, translation) {
        Body.setPosition(body, Vector.add(body.position, translation));
    };

    /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */
    Body.rotate = function(body, rotation, point) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.setAngle(body, body.angle + rotation);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */
    Body.update = function(body, deltaTime, timeScale, correction) {
        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

        // from the previous step
        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
            velocityPrevX = body.position.x - body.positionPrev.x,
            velocityPrevY = body.position.y - body.positionPrev.y;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // track speed and acceleration
        body.speed = Vector.magnitude(body.velocity);
        body.angularSpeed = Math.abs(body.angularVelocity);

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        body.force.x += force.x;
        body.force.y += force.y;
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */

    /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */

    /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */

    /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */

    /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

    /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

    /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */
     
    /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_118711__) {

/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Events = __nested_webpack_require_118711__(4);

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */
    Sleeping.update = function(bodies, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
            
            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Sleeping.afterCollisions = function(pairs, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_122803__) {

/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = __nested_webpack_require_122803__(3);
var Vector = __nested_webpack_require_122803__(2);
var Sleeping = __nested_webpack_require_122803__(7);
var Bounds = __nested_webpack_require_122803__(1);
var Axes = __nested_webpack_require_122803__(10);
var Common = __nested_webpack_require_122803__(0);

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */
    Constraint.solveAll = function(constraints, timeScale) {
        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;

        if (constraint.damping) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointAWorld = function(constraint) {
        return {
            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + constraint.pointA.x,
            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + constraint.pointA.y
        };
    };

    /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointBWorld = function(constraint) {
        return {
            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + constraint.pointB.x,
            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + constraint.pointB.y
        };
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_139220__) {

/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = __nested_webpack_require_139220__(17);

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB,
            parentA = collision.parentA,
            parentB = collision.parentB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            contacts: {},
            activeContacts: [],
            separation: 0,
            isActive: true,
            confirmedActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: parentA.inverseMass + parentB.inverseMass,
            friction: Math.min(parentA.friction, parentB.friction),
            frictionStatic: Math.max(parentA.frictionStatic, parentB.frictionStatic),
            restitution: Math.max(parentA.restitution, parentB.restitution),
            slop: Math.max(parentA.slop, parentB.slop)
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB;
        
        pair.collision = collision;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = Math.min(parentA.friction, parentB.friction);
        pair.frictionStatic = Math.max(parentA.frictionStatic, parentB.frictionStatic);
        pair.restitution = Math.max(parentA.restitution, parentB.restitution);
        pair.slop = Math.max(parentA.slop, parentB.slop);
        activeContacts.length = 0;
        
        if (collision.collided) {
            for (var i = 0; i < supports.length; i++) {
                var support = supports[i],
                    contactId = Contact.id(support),
                    contact = contacts[contactId];

                if (contact) {
                    activeContacts.push(contact);
                } else {
                    activeContacts.push(contacts[contactId] = Contact.create(support));
                }
            }

            pair.separation = collision.depth;
            Pair.setActive(pair, true, timestamp);
        } else {
            if (pair.isActive === true)
                Pair.setActive(pair, false, timestamp);
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_143139__) {

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = __nested_webpack_require_143139__(2);
var Common = __nested_webpack_require_143139__(0);

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_144880__) {

/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = __nested_webpack_require_144880__(3);
var Common = __nested_webpack_require_144880__(0);
var Body = __nested_webpack_require_144880__(6);
var Bounds = __nested_webpack_require_144880__(1);
var Vector = __nested_webpack_require_144880__(2);

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
        var decomp = Common.getDecomp(),
            canDecomp,
            body,
            parts,
            isConvex,
            isConcave,
            vertices,
            i,
            j,
            k,
            v,
            z;

        // check decomp is as expected
        canDecomp = Boolean(decomp && decomp.quickDecomp);

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);
            isConcave = !isConvex;

            if (isConcave && !canDecomp) {
                Common.warnOnce(
                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
                );
            }

            if (isConvex || !canDecomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

            // offset such that body.position is at the centre off mass
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_158880__) {

/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = __nested_webpack_require_158880__(0);

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_165884__) {

/**
* The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
*
* @class Detector
*/

// TODO: speculative contacts

var Detector = {};

module.exports = Detector;

var SAT = __nested_webpack_require_165884__(14);
var Pair = __nested_webpack_require_165884__(9);
var Bounds = __nested_webpack_require_165884__(1);

(function() {

    /**
     * Finds all collisions given a list of pairs.
     * @method collisions
     * @param {pair[]} broadphasePairs
     * @param {engine} engine
     * @return {array} collisions
     */
    Detector.collisions = function(broadphasePairs, engine) {
        var collisions = [],
            pairsTable = engine.pairs.table;

        for (var i = 0; i < broadphasePairs.length; i++) {
            var bodyA = broadphasePairs[i][0], 
                bodyB = broadphasePairs[i][1];

            if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping))
                continue;
            
            if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter))
                continue;

            // mid phase
            if (Bounds.overlaps(bodyA.bounds, bodyB.bounds)) {
                for (var j = bodyA.parts.length > 1 ? 1 : 0; j < bodyA.parts.length; j++) {
                    var partA = bodyA.parts[j];

                    for (var k = bodyB.parts.length > 1 ? 1 : 0; k < bodyB.parts.length; k++) {
                        var partB = bodyB.parts[k];

                        if ((partA === bodyA && partB === bodyB) || Bounds.overlaps(partA.bounds, partB.bounds)) {
                            // find a previous collision we could reuse
                            var pairId = Pair.id(partA, partB),
                                pair = pairsTable[pairId],
                                previousCollision;

                            if (pair && pair.isActive) {
                                previousCollision = pair.collision;
                            } else {
                                previousCollision = null;
                            }

                            // narrow phase
                            var collision = SAT.collides(partA, partB, previousCollision);

                            if (collision.collided) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_168981__) {

/**
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
*/

// TODO: true circles and curves

var SAT = {};

module.exports = SAT;

var Vertices = __nested_webpack_require_168981__(3);
var Vector = __nested_webpack_require_168981__(2);

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {collision} previousCollision
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB, previousCollision) {
        var overlapAB,
            overlapBA, 
            minOverlap,
            collision,
            canReusePrevCol = false;

        if (previousCollision) {
            // estimate total motion
            var parentA = bodyA.parent,
                parentB = bodyB.parent,
                motion = parentA.speed * parentA.speed + parentA.angularSpeed * parentA.angularSpeed
                       + parentB.speed * parentB.speed + parentB.angularSpeed * parentB.angularSpeed;

            // we may be able to (partially) reuse collision result 
            // but only safe if collision was resting
            canReusePrevCol = previousCollision && previousCollision.collided && motion < 0.2;

            // reuse collision object
            collision = previousCollision;
        } else {
            collision = { collided: false, bodyA: bodyA, bodyB: bodyB };
        }

        if (previousCollision && canReusePrevCol) {
            // if we can reuse the collision result
            // we only need to test the previously found axis
            var axisBodyA = collision.axisBody,
                axisBodyB = axisBodyA === bodyA ? bodyB : bodyA,
                axes = [axisBodyA.axes[previousCollision.axisNumber]];

            minOverlap = SAT._overlapAxes(axisBodyA.vertices, axisBodyB.vertices, axes);
            collision.reused = true;

            if (minOverlap.overlap <= 0) {
                collision.collided = false;
                return collision;
            }
        } else {
            // if we can't reuse a result, perform a full SAT test

            overlapAB = SAT._overlapAxes(bodyA.vertices, bodyB.vertices, bodyA.axes);

            if (overlapAB.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            overlapBA = SAT._overlapAxes(bodyB.vertices, bodyA.vertices, bodyB.axes);

            if (overlapBA.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            if (overlapAB.overlap < overlapBA.overlap) {
                minOverlap = overlapAB;
                collision.axisBody = bodyA;
            } else {
                minOverlap = overlapBA;
                collision.axisBody = bodyB;
            }

            // important for reuse later
            collision.axisNumber = minOverlap.axisNumber;
        }

        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
        collision.collided = true;
        collision.depth = minOverlap.overlap;
        collision.parentA = collision.bodyA.parent;
        collision.parentB = collision.bodyB.parent;
        
        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        // ensure normal is facing away from bodyA
        if (Vector.dot(minOverlap.axis, Vector.sub(bodyB.position, bodyA.position)) < 0) {
            collision.normal = {
                x: minOverlap.axis.x,
                y: minOverlap.axis.y
            };
        } else {
            collision.normal = {
                x: -minOverlap.axis.x,
                y: -minOverlap.axis.y
            };
        }

        collision.tangent = Vector.perp(collision.normal);

        collision.penetration = collision.penetration || {};
        collision.penetration.x = collision.normal.x * collision.depth;
        collision.penetration.y = collision.normal.y * collision.depth; 

        // find support points, there is always either exactly one or two
        var verticesB = SAT._findSupports(bodyA, bodyB, collision.normal),
            supports = [];

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, verticesB[0]))
            supports.push(verticesB[0]);

        if (Vertices.contains(bodyA.vertices, verticesB[1]))
            supports.push(verticesB[1]);

        // find the supports from bodyA that are inside bodyB
        if (supports.length < 2) {
            var verticesA = SAT._findSupports(bodyB, bodyA, Vector.neg(collision.normal));
                
            if (Vertices.contains(bodyB.vertices, verticesA[0]))
                supports.push(verticesA[0]);

            if (supports.length < 2 && Vertices.contains(bodyB.vertices, verticesA[1]))
                supports.push(verticesA[1]);
        }

        // account for the edge case of overlapping but no vertex containment
        if (supports.length < 1)
            supports = [verticesB[0]];
        
        collision.supports = supports;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {} verticesA
     * @param {} verticesB
     * @param {} axes
     * @return result
     */
    SAT._overlapAxes = function(verticesA, verticesB, axes) {
        var projectionA = Vector._temp[0], 
            projectionB = Vector._temp[1],
            result = { overlap: Number.MAX_VALUE },
            overlap,
            axis;

        for (var i = 0; i < axes.length; i++) {
            axis = axes[i];

            SAT._projectToAxis(projectionA, verticesA, axis);
            SAT._projectToAxis(projectionB, verticesB, axis);

            overlap = Math.min(projectionA.max - projectionB.min, projectionB.max - projectionA.min);

            if (overlap <= 0) {
                result.overlap = overlap;
                return result;
            }

            if (overlap < result.overlap) {
                result.overlap = overlap;
                result.axis = axis;
                result.axisNumber = i;
            }
        }

        return result;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    SAT._projectToAxis = function(projection, vertices, axis) {
        var min = Vector.dot(vertices[0], axis),
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = Vector.dot(vertices[i], axis);

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };
    
    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {} bodyA
     * @param {} bodyB
     * @param {} normal
     * @return [vector]
     */
    SAT._findSupports = function(bodyA, bodyB, normal) {
        var nearestDistance = Number.MAX_VALUE,
            vertexToBody = Vector._temp[0],
            vertices = bodyB.vertices,
            bodyAPosition = bodyA.position,
            distance,
            vertex,
            vertexA,
            vertexB;

        // find closest vertex on bodyB
        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            vertexToBody.x = vertex.x - bodyAPosition.x;
            vertexToBody.y = vertex.y - bodyAPosition.y;
            distance = -Vector.dot(normal, vertexToBody);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertex;
            }
        }

        // find next closest vertex using the two connected to it
        var prevIndex = vertexA.index - 1 >= 0 ? vertexA.index - 1 : vertices.length - 1;
        vertex = vertices[prevIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        nearestDistance = -Vector.dot(normal, vertexToBody);
        vertexB = vertex;

        var nextIndex = (vertexA.index + 1) % vertices.length;
        vertex = vertices[nextIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        distance = -Vector.dot(normal, vertexToBody);
        if (distance < nearestDistance) {
            vertexB = vertex;
        }

        return [vertexA, vertexB];
    };

})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_177831__) {

/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = __nested_webpack_require_177831__(0);

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var parts = pattern.exec(range);
        var major = Number(parts[4]);
        var minor = Number(parts[5]);
        var patch = Number(parts[6]);

        return {
            isRange: Boolean(parts[1] || parts[2]),
            version: parts[3],
            range: range,
            operator: parts[1] || parts[2] || '',
            major: major,
            minor: minor,
            patch: patch,
            parts: [major, minor, patch],
            prerelease: parts[7],
            number: major * 1e8 + minor * 1e4 + patch
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var r = Plugin.versionParse(range),
            v = Plugin.versionParse(version);

        if (r.isRange) {
            if (r.operator === '*' || version === '*') {
                return true;
            }

            if (r.operator === '>') {
                return v.number > r.number;
            }

            if (r.operator === '>=') {
                return v.number >= r.number;
            }

            if (r.operator === '~') {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
            }

            if (r.operator === '^') {
                if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                }

                if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                }

                return v.patch === r.patch;
            }
        }

        return version === range || version === '*';
    };

})();


/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_191184__) {

/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Common = __nested_webpack_require_191184__(0);
var Composite = __nested_webpack_require_191184__(5);
var Bounds = __nested_webpack_require_191184__(1);
var Events = __nested_webpack_require_191184__(4);
var Vector = __nested_webpack_require_191184__(2);
var Mouse = __nested_webpack_require_191184__(12);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render._goodFps = 30;
    Render._goodDelta = 1000 / 60;

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            controller: Render,
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
            },
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#14151f',
                wireframeBackground: '#14151f',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else if (!render.canvas.parentNode) {
            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            
            _updateTiming(render, time);

            Render.world(render, time);

            if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
            }

            if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
            }
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.setTransform(
            render.options.pixelRatio / boundsScaleX, 0, 0, 
            render.options.pixelRatio / boundsScaleY, 0, 0
        );
        
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render, time) {
        var startTime = Common.now(),
            engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            timing = render.timing;

        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;

            if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            }
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.showBroadphase)
            Render.grid(render, engine.grid, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);

        // log the time elapsed computing this update
        timing.lastElapsed = Common.now() - startTime;
    };

    /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */
    Render.stats = function(render, context, time) {
        var engine = render.engine,
            world = engine.world,
            bodies = Composite.allBodies(world),
            parts = 0,
            width = 55,
            height = 44,
            x = 0,
            y = 0;
        
        // count parts
        for (var i = 0; i < bodies.length; i += 1) {
            parts += bodies[i].parts.length;
        }

        // sections
        var sections = {
            'Part': parts,
            'Body': bodies.length,
            'Cons': Composite.allConstraints(world).length,
            'Comp': Composite.allComposites(world).length,
            'Pair': engine.pairs.list.length
        };

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(x, y, width * 5.5, height);

        context.font = '12px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'right';

        // sections
        for (var key in sections) {
            var section = sections[key];
            // label
            context.fillStyle = '#aaa';
            context.fillText(key, x + width, y + 8);

            // value
            context.fillStyle = '#eee';
            context.fillText(section, x + width, y + 26);

            x += width;
        }
    };

    /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.performance = function(render, context) {
        var engine = render.engine,
            timing = render.timing,
            deltaHistory = timing.deltaHistory,
            elapsedHistory = timing.elapsedHistory,
            timestampElapsedHistory = timing.timestampElapsedHistory,
            engineDeltaHistory = timing.engineDeltaHistory,
            engineElapsedHistory = timing.engineElapsedHistory,
            lastEngineDelta = engine.timing.lastDelta;
        
        var deltaMean = _mean(deltaHistory),
            elapsedMean = _mean(elapsedHistory),
            engineDeltaMean = _mean(engineDeltaHistory),
            engineElapsedMean = _mean(engineElapsedHistory),
            timestampElapsedMean = _mean(timestampElapsedHistory),
            rateMean = (timestampElapsedMean / deltaMean) || 0,
            fps = (1000 / deltaMean) || 0;

        var graphHeight = 4,
            gap = 12,
            width = 60,
            height = 34,
            x = 10,
            y = 69;

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);

        // show FPS
        Render.status(
            context, x, y, width, graphHeight, deltaHistory.length, 
            Math.round(fps) + ' fps', 
            fps / Render._goodFps,
            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
        );

        // show engine delta
        Render.status(
            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
            lastEngineDelta.toFixed(2) + ' dt', 
            Render._goodDelta / lastEngineDelta,
            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
        );

        // show engine update time
        Render.status(
            context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length,
            engineElapsedMean.toFixed(2) + ' ut', 
            1 - (engineElapsedMean / Render._goodFps),
            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
        );

        // show render time
        Render.status(
            context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length,
            elapsedMean.toFixed(2) + ' rt', 
            1 - (elapsedMean / Render._goodFps),
            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
        );

        // show effective speed
        Render.status(
            context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, 
            rateMean.toFixed(2) + ' x', 
            rateMean * rateMean * rateMean,
            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
        );
    };

    /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */
    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
        // background
        context.strokeStyle = '#888';
        context.fillStyle = '#444';
        context.lineWidth = 1;
        context.fillRect(x, y + 7, width, 1);

        // chart
        context.beginPath();
        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
        for (var i = 0; i < width; i += 1) {
            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
        }
        context.stroke();

        // indicator
        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
        context.fillRect(x, y - 7, 4, 4);

        // label
        context.font = '12px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'right';
        context.fillStyle = '#eee';
        context.fillText(label, x + width, y - 5);
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method grid
     * @param {render} render
     * @param {grid} grid
     * @param {RenderingContext} context
     */
    Render.grid = function(render, grid, context) {
        var c = context,
            options = render.options;

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,180,0,0.1)';
        } else {
            c.strokeStyle = 'rgba(255,180,0,0.5)';
        }

        c.beginPath();

        var bucketKeys = Common.keys(grid.buckets);

        for (var i = 0; i < bucketKeys.length; i++) {
            var bucketId = bucketKeys[i];

            if (grid.buckets[bucketId].length < 2)
                continue;

            var region = bucketId.split(/C|R/);
            c.rect(0.5 + parseInt(region[1], 10) * grid.bucketWidth,
                0.5 + parseInt(region[2], 10) * grid.bucketHeight,
                grid.bucketWidth,
                grid.bucketHeight);
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */
    var _updateTiming = function(render, time) {
        var engine = render.engine,
            timing = render.timing,
            historySize = timing.historySize,
            timestamp = engine.timing.timestamp;

        timing.delta = time - timing.lastTime || Render._goodDelta;
        timing.lastTime = time;

        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
        timing.lastTimestamp = timestamp;

        timing.deltaHistory.unshift(timing.delta);
        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

        timing.elapsedHistory.unshift(timing.lastElapsed);
        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
    };

    /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */
    var _mean = function(values) {
        var result = 0;
        for (var i = 0; i < values.length; i += 1) {
            result += values[i];
        }
        return (result / values.length) || 0;
    };

    /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

    /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
    
    /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */

    /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */

})();


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            id: Contact.id(vertex),
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };
    
    /**
     * Generates a contact id.
     * @method id
     * @param {vertex} vertex
     * @return {string} Unique contactID
     */
    Contact.id = function(vertex) {
        return vertex.body.id + '_' + vertex.index;
    };

})();


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_250354__) {

/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var Sleeping = __nested_webpack_require_250354__(7);
var Resolver = __nested_webpack_require_250354__(19);
var Detector = __nested_webpack_require_250354__(13);
var Pairs = __nested_webpack_require_250354__(20);
var Grid = __nested_webpack_require_250354__(21);
var Events = __nested_webpack_require_250354__(4);
var Composite = __nested_webpack_require_250354__(5);
var Constraint = __nested_webpack_require_250354__(8);
var Common = __nested_webpack_require_250354__(0);
var Body = __nested_webpack_require_250354__(6);

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(options) {
        options = options || {};

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            grid: null,
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
            }
        };

        var engine = Common.extend(defaults, options);

        engine.world = options.world || Composite.create({ label: 'World' });
        engine.grid = Grid.create(options.grid || options.broadphase);
        engine.pairs = Pairs.create();

        // temporary back compatibility
        engine.world.gravity = engine.gravity;
        engine.broadphase = engine.grid;
        engine.metrics = {};
        
        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */
    Engine.update = function(engine, delta, correction) {
        var startTime = Common.now();

        delta = delta || 1000 / 60;
        correction = correction || 1;

        var world = engine.world,
            timing = engine.timing,
            grid = engine.grid,
            gridPairs = [],
            i;

        // increment timestamp
        timing.timestamp += delta * timing.timeScale;
        timing.lastDelta = delta * timing.timeScale;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get lists of all bodies and constraints, no matter what composites they are in
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);

        // if sleeping enabled, call the sleeping controller
        if (engine.enableSleeping)
            Sleeping.update(allBodies, timing.timeScale);

        // applies gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, engine.gravity);

        // update all body position and rotation by integration
        Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // broadphase pass: find potential collision pairs

        // if world is dirty, we must flush the whole grid
        if (world.isModified)
            Grid.clear(grid);

        // update the grid buckets based on current bodies
        Grid.update(grid, allBodies, engine, world.isModified);
        gridPairs = grid.pairsList;

        // clear all composite modified flags
        if (world.isModified) {
            Composite.setModified(world, false, false, true);
        }

        // narrowphase pass: find actual collisions, then create or update collision pairs
        var collisions = Detector.collisions(gridPairs, engine);

        // update collision pairs
        var pairs = engine.pairs,
            timestamp = timing.timestamp;
        Pairs.update(pairs, collisions, timestamp);
        Pairs.removeOld(pairs, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list, timing.timeScale);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, timing.timeScale);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, timing.timeScale);
        }

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        // log the time elapsed computing this update
        engine.timing.lastElapsed = Common.now() - startTime;

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine including the world, pairs and broadphase.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        var world = engine.world,
            bodies = Composite.allBodies(world);

        Pairs.clear(engine.pairs);
        Grid.clear(engine.grid);
        Grid.update(engine.grid, bodies, engine, true);
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // apply gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */
    Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, deltaTime, timeScale, correction);
        }
    };

    /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     *
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the `delta` value used in the last engine update.
     *
     * @property timing.lastDelta
     * @type number
     * @default 0
     */

    /**
     * A `Matter.Grid` instance.
     *
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated use `engine.grid`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * The gravity to apply on all bodies in `engine.world`.
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_266947__) {

/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = __nested_webpack_require_266947__(3);
var Vector = __nested_webpack_require_266947__(2);
var Common = __nested_webpack_require_266947__(0);
var Bounds = __nested_webpack_require_266947__(1);

(function() {

    Resolver._restingThresh = 4;
    Resolver._restingThreshTangent = 6;
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount;

        // find total contacts on each body
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solvePosition = function(pairs, timeScale) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            bodyBtoA,
            contactShare,
            positionImpulse,
            contactCount = {},
            tempA = Vector._temp[0],
            tempB = Vector._temp[1],
            tempC = Vector._temp[2],
            tempD = Vector._temp[3];

        // find impulses required to resolve penetration
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            bodyBtoA = Vector.sub(Vector.add(bodyB.positionImpulse, bodyB.position, tempA), 
                Vector.add(bodyA.positionImpulse, 
                    Vector.sub(bodyB.position, collision.penetration, tempB), tempC), tempD);

            pair.separation = Vector.dot(normal, bodyBtoA);
        }
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = (pair.separation - pair.slop) * timeScale;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset contact count
            body.totalContacts = 0;

            if (body.positionImpulse.x !== 0 || body.positionImpulse.y !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    Vertices.translate(part.vertices, body.positionImpulse);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                    part.position.x += body.positionImpulse.x;
                    part.position.y += body.positionImpulse.y;
                }

                // move the body without changing velocity
                body.positionPrev.x += body.positionImpulse.x;
                body.positionPrev.y += body.positionImpulse.y;

                if (Vector.dot(body.positionImpulse, body.velocity) < 0) {
                    // reset cached impulse if the body has velocity along it
                    body.positionImpulse.x = 0;
                    body.positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    body.positionImpulse.x *= Resolver._positionWarming;
                    body.positionImpulse.y *= Resolver._positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var i,
            j,
            pair,
            contacts,
            collision,
            bodyA,
            bodyB,
            normal,
            tangent,
            contact,
            contactVertex,
            normalImpulse,
            tangentImpulse,
            offset,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1];
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            contacts = pair.activeContacts;
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            tangent = collision.tangent;

            // resolve each contact
            for (j = 0; j < contacts.length; j++) {
                contact = contacts[j];
                contactVertex = contact.vertex;
                normalImpulse = contact.normalImpulse;
                tangentImpulse = contact.tangentImpulse;

                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                    impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyA.position, tempA);
                        bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                        bodyA.anglePrev += Vector.cross(offset, impulse) * bodyA.inverseInertia;
                    }

                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyB.position, tempA);
                        bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                        bodyB.anglePrev -= Vector.cross(offset, impulse) * bodyB.inverseInertia;
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solveVelocity = function(pairs, timeScale) {
        var timeScaleSquared = timeScale * timeScale,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1],
            tempB = Vector._temp[2],
            tempC = Vector._temp[3],
            tempD = Vector._temp[4],
            tempE = Vector._temp[5];
        
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent,
                contacts = pair.activeContacts,
                contactShare = 1 / contacts.length;

            // update body velocities
            bodyA.velocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyA.velocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyB.velocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyB.velocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (var j = 0; j < contacts.length; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    offsetA = Vector.sub(contactVertex, bodyA.position, tempA),
                    offsetB = Vector.sub(contactVertex, bodyB.position, tempB),
                    velocityPointA = Vector.add(bodyA.velocity, Vector.mult(Vector.perp(offsetA), bodyA.angularVelocity), tempC),
                    velocityPointB = Vector.add(bodyB.velocity, Vector.mult(Vector.perp(offsetB), bodyB.angularVelocity), tempD), 
                    relativeVelocity = Vector.sub(velocityPointA, velocityPointB, tempE),
                    normalVelocity = Vector.dot(normal, relativeVelocity);

                var tangentVelocity = Vector.dot(tangent, relativeVelocity),
                    tangentSpeed = Math.abs(tangentVelocity),
                    tangentVelocityDirection = Common.sign(tangentVelocity);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity,
                    normalForce = Common.clamp(pair.separation + normalVelocity, 0, 1) * Resolver._frictionNormalMultiplier;

                // coulomb friction
                var tangentImpulse = tangentVelocity,
                    maxFriction = Infinity;

                if (tangentSpeed > pair.friction * pair.frictionStatic * normalForce * timeScaleSquared) {
                    maxFriction = tangentSpeed;
                    tangentImpulse = Common.clamp(
                        pair.friction * tangentVelocityDirection * timeScaleSquared,
                        -maxFriction, maxFriction
                    );
                }

                // modify impulses accounting for mass, inertia and offset
                var oAcN = Vector.cross(offsetA, normal),
                    oBcN = Vector.cross(offsetB, normal),
                    share = contactShare / (bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * oAcN * oAcN  + bodyB.inverseInertia * oBcN * oBcN);

                normalImpulse *= share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity < 0 && normalVelocity * normalVelocity > Resolver._restingThresh * timeScaleSquared) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse + normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity * tangentVelocity > Resolver._restingThreshTangent * timeScaleSquared) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse = Common.clamp(contact.tangentImpulse + tangentImpulse, -maxFriction, maxFriction);
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                    bodyA.anglePrev += Vector.cross(offsetA, impulse) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                    bodyB.anglePrev -= Vector.cross(offsetB, impulse) * bodyB.inverseInertia;
                }
            }
        }
    };

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_280946__) {

/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = __nested_webpack_require_280946__(9);
var Common = __nested_webpack_require_280946__(0);

(function() {
    
    Pairs._pairMaxIdleLife = 1000;

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            collision,
            pairId,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < pairsList.length; i++) {
            pairsList[i].confirmedActive = false;
        }

        for (i = 0; i < collisions.length; i++) {
            collision = collisions[i];

            if (collision.collided) {
                pairId = Pair.id(collision.bodyA, collision.bodyB);

                pair = pairsTable[pairId];
                
                if (pair) {
                    // pair already exists (but may or may not be active)
                    if (pair.isActive) {
                        // pair exists and is active
                        collisionActive.push(pair);
                    } else {
                        // pair exists but was inactive, so a collision has just started again
                        collisionStart.push(pair);
                    }

                    // update the pair
                    Pair.update(pair, collision, timestamp);
                    pair.confirmedActive = true;
                } else {
                    // pair did not exist, create a new pair
                    pair = Pair.create(collision, timestamp);
                    pairsTable[pairId] = pair;

                    // push the new pair
                    collisionStart.push(pair);
                    pairsList.push(pair);
                }
            }
        }

        // deactivate previously active pairs that are now inactive
        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            if (pair.isActive && !pair.confirmedActive) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);
            }
        }
    };
    
    /**
     * Finds and removes pairs that have been inactive for a set amount of time.
     * @method removeOld
     * @param {object} pairs
     * @param {number} timestamp
     */
    Pairs.removeOld = function(pairs, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            indexesToRemove = [],
            pair,
            collision,
            pairIndex,
            i;

        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            collision = pair.collision;
            
            // never remove sleeping pairs
            if (collision.bodyA.isSleeping || collision.bodyB.isSleeping) {
                pair.timeUpdated = timestamp;
                continue;
            }

            // if pair is inactive for too long, mark it to be removed
            if (timestamp - pair.timeUpdated > Pairs._pairMaxIdleLife) {
                indexesToRemove.push(i);
            }
        }

        // remove marked pairs
        for (i = 0; i < indexesToRemove.length; i++) {
            pairIndex = indexesToRemove[i] - i;
            pair = pairsList[pairIndex];
            delete pairsTable[pair.id];
            pairsList.splice(pairIndex, 1);
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();


/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_285738__) {

/**
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
*/

var Grid = {};

module.exports = Grid;

var Pair = __nested_webpack_require_285738__(9);
var Common = __nested_webpack_require_285738__(0);

(function() {

    /**
     * Creates a new grid.
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // temporary back compatibility bounds check
            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    /**
     * Clears the grid.
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        // add new pairs
        for (var i = 0; i < bucket.length; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair) {
                pair[2] += 1;
            } else {
                grid.pairs[pairId] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        // update pair counts
        for (var i = 0; i < bucket.length; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var bodyB = bucket[i],
                pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pairKeys,
            pair,
            pairs = [];

        // grid.pairs is used as a hashmap
        pairKeys = Common.keys(grid.pairs);

        // iterate over grid.pairs
        for (var k = 0; k < pairKeys.length; k++) {
            pair = grid.pairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete grid.pairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_294905__) {

var Matter = module.exports = __nested_webpack_require_294905__(23);

Matter.Axes = __nested_webpack_require_294905__(10);
Matter.Bodies = __nested_webpack_require_294905__(11);
Matter.Body = __nested_webpack_require_294905__(6);
Matter.Bounds = __nested_webpack_require_294905__(1);
Matter.Common = __nested_webpack_require_294905__(0);
Matter.Composite = __nested_webpack_require_294905__(5);
Matter.Composites = __nested_webpack_require_294905__(24);
Matter.Constraint = __nested_webpack_require_294905__(8);
Matter.Contact = __nested_webpack_require_294905__(17);
Matter.Detector = __nested_webpack_require_294905__(13);
Matter.Engine = __nested_webpack_require_294905__(18);
Matter.Events = __nested_webpack_require_294905__(4);
Matter.Grid = __nested_webpack_require_294905__(21);
Matter.Mouse = __nested_webpack_require_294905__(12);
Matter.MouseConstraint = __nested_webpack_require_294905__(25);
Matter.Pair = __nested_webpack_require_294905__(9);
Matter.Pairs = __nested_webpack_require_294905__(20);
Matter.Plugin = __nested_webpack_require_294905__(15);
Matter.Query = __nested_webpack_require_294905__(26);
Matter.Render = __nested_webpack_require_294905__(16);
Matter.Resolver = __nested_webpack_require_294905__(19);
Matter.Runner = __nested_webpack_require_294905__(27);
Matter.SAT = __nested_webpack_require_294905__(14);
Matter.Sleeping = __nested_webpack_require_294905__(7);
Matter.Svg = __nested_webpack_require_294905__(28);
Matter.Vector = __nested_webpack_require_294905__(2);
Matter.Vertices = __nested_webpack_require_294905__(3);
Matter.World = __nested_webpack_require_294905__(29);

// temporary back compatibility
Matter.Engine.run = Matter.Runner.run;
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_296396__) {

/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = __nested_webpack_require_296396__(15);
var Common = __nested_webpack_require_296396__(0);

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version =   true ? "0.17.1" : 0;

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_299304__) {

/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = __nested_webpack_require_299304__(5);
var Constraint = __nested_webpack_require_299304__(8);
var Common = __nested_webpack_require_299304__(0);
var Body = __nested_webpack_require_299304__(6);
var Bodies = __nested_webpack_require_299304__(11);
var deprecated = Common.deprecated;

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };

    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
    
    /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

    /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_311913__) {

/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = __nested_webpack_require_311913__(3);
var Sleeping = __nested_webpack_require_311913__(7);
var Mouse = __nested_webpack_require_311913__(12);
var Events = __nested_webpack_require_311913__(4);
var Detector = __nested_webpack_require_311913__(13);
var Constraint = __nested_webpack_require_311913__(8);
var Composite = __nested_webpack_require_311913__(5);
var Common = __nested_webpack_require_311913__(0);
var Bounds = __nested_webpack_require_311913__(1);

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_320407__) {

/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = __nested_webpack_require_320407__(2);
var SAT = __nested_webpack_require_320407__(14);
var Bounds = __nested_webpack_require_320407__(1);
var Bodies = __nested_webpack_require_320407__(11);
var Vertices = __nested_webpack_require_320407__(3);

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {object[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [];

        for (var i = 0; i < bodies.length; i++) {
            var bodyA = bodies[i];
            
            if (Bounds.overlaps(bodyA.bounds, body.bounds)) {
                for (var j = bodyA.parts.length === 1 ? 0 : 1; j < bodyA.parts.length; j++) {
                    var part = bodyA.parts[j];

                    if (Bounds.overlaps(part.bounds, body.bounds)) {
                        var collision = SAT.collides(part, body);

                        if (collision.collided) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {object[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_324568__) {

/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = __nested_webpack_require_324568__(4);
var Engine = __nested_webpack_require_324568__(18);
var Common = __nested_webpack_require_324568__(0);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            correction: 1,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            timeScalePrev: 1,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function render(time){
            runner.frameRequestId = _requestAnimationFrame(render);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            correction = 1,
            delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);
            
            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // correction for delta
            correction = delta / runner.delta;

            // update engine timing object
            runner.delta = delta;
        }

        // time correction for time scaling
        if (runner.timeScalePrev !== 0)
            correction *= timing.timeScale / runner.timeScalePrev;

        if (timing.timeScale === 0)
            correction = 0;

        runner.timeScalePrev = timing.timeScale;
        runner.correction = correction;

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);

        // update
        Events.trigger(runner, 'beforeUpdate', event);
        Engine.update(engine, delta, correction);
        Events.trigger(runner, 'afterUpdate', event);

        Events.trigger(runner, 'afterTick', event);
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_333611__) {

/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = __nested_webpack_require_333611__(1);
var Common = __nested_webpack_require_333611__(0);

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();

/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_341072__) {

/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

var World = {};

module.exports = World;

var Composite = __nested_webpack_require_341072__(5);
var Common = __nested_webpack_require_341072__(0);

(function() {

    /**
     * See above, aliases for back compatibility only
     */
    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();


/***/ })
/******/ ]);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./engine/src/physics/physicsMain.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhysicsEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhysicsEngine */ "./engine/src/physics/PhysicsEngine.js");



/** @type {PhysicsEngine} */
let physicsEngine = new _PhysicsEngine__WEBPACK_IMPORTED_MODULE_0__.PhysicsEngine();
 
//@ts-ignore
postMessage( { msg: "ready" } );

onmessage = ( msg ) => {
    const data = msg.data;

    if ( data.msg == "update" ) {
        physicsEngine.update();         
    } else if ( data.msg == "setStageBound" ) {
        physicsEngine.setStageBound( ...data.args );
    }
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsaUNBQW1C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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUFRO0FBQ3RCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsY0FBYyxRQUFRO0FBQ3RCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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RUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsY0FBYyxRQUFRO0FBQ3RCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsQ0FBQzs7Ozs7O1VDdHRVRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDs7O0FBR2hELFdBQVcsZUFBZTtBQUMxQix3QkFBd0IseURBQWE7QUFDckM7QUFDQTtBQUNBLGVBQWUsZUFBZTs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXRmYXN0Ly4vZW5naW5lL3NyYy9waHlzaWNzL1BoeXNpY3NFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vZmxhdGZhc3QvLi9ub2RlX21vZHVsZXMvbWF0dGVyLWpzL2J1aWxkL21hdHRlci5qcyIsIndlYnBhY2s6Ly9mbGF0ZmFzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGF0ZmFzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbGF0ZmFzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxhdGZhc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mbGF0ZmFzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsYXRmYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxhdGZhc3QvLi9lbmdpbmUvc3JjL3BoeXNpY3MvcGh5c2ljc01haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdHRlciBmcm9tICdtYXR0ZXItanMnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvd2lraS9HZXR0aW5nLXN0YXJ0ZWRcblxuY29uc3QgRW5naW5lID0gTWF0dGVyLkVuZ2luZTtcbmNvbnN0IEJvZGllcyA9IE1hdHRlci5Cb2RpZXM7XG5jb25zdCBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xuXG5leHBvcnQgY2xhc3MgUGh5c2ljc0VuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIvCfjrMgUGh5c2ljcyBzdGFydC5cIiApO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IE1hdHRlci5FbmdpbmUuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRlBTID0gNjA7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0ge307XG4gICAgfVxuXG4gICAgZ2V0IHdvcmxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmUud29ybGQ7XG4gICAgfVxuXG4gICAgc2V0U3RhZ2VCb3VuZCggd2lkdGgsaGVpZ2h0LGJvdHRvbSx3YWxscyxjZWlsICkge1xuICAgICAgICBjb25zdCBhZGRCb2R5ID0gKCBuYW1lLGZsYWcseCx5LHcsaCApPT57XG4gICAgICAgICAgICBpZiAoIHRoaXMuZ3JvdW5kW25hbWVdICkge1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmUoIHRoaXMud29ybGQsdGhpcy5ncm91bmRbbmFtZV0gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZFtuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGZsYWcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRbbmFtZV0gPSBCb2RpZXMucmVjdGFuZ2xlKCB4LHksdywgaCwgeyBpc1N0YXRpYzogdHJ1ZSB9ICk7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZCggdGhpcy53b3JsZCx0aGlzLmdyb3VuZFtuYW1lXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZEJvZHkoIFwiYm90dG9tXCIsYm90dG9tLDAsaGVpZ2h0LHdpZHRoLDEwMCApO1xuICAgICAgICBhZGRCb2R5KCBcImNlaWxcIixjZWlsLDAsLTEwMCx3aWR0aCwxMDAgKTtcbiAgICAgICAgYWRkQm9keSggXCJsZWZ0XCIsd2FsbHMsLTEwMCwwLDEwMCxoZWlnaHQgKTtcbiAgICAgICAgYWRkQm9keSggXCJyaWdodFwiLHdhbGxzLHdpZHRoLDAsMTAwLGhlaWdodCApO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRW5naW5lLnVwZGF0ZSggdGhpcy5lbmdpbmUsdGhpcy51cGRhdGVGUFMgKTtcbiAgICB9XG5cbiAgICBhZGRSZWN0YWJsZSggeCx5LHcsaCApIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCIvKiFcbiAqIG1hdHRlci1qcyAwLjE3LjEgYnkgQGxpYWJydVxuICogaHR0cDovL2JybS5pby9tYXR0ZXItanMvXG4gKiBMaWNlbnNlIE1JVFxuICogXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSBMaWFtIEJydW1taXR0IGFuZCBjb250cmlidXRvcnMuXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNYXR0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWF0dGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1hdHRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tbW9uYCBtb2R1bGUgY29udGFpbnMgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBhcmUgY29tbW9uIHRvIGFsbCBtb2R1bGVzLlxuKlxuKiBAY2xhc3MgQ29tbW9uXG4qL1xuXG52YXIgQ29tbW9uID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBDb21tb24uX25leHRJZCA9IDA7XG4gICAgQ29tbW9uLl9zZWVkID0gMDtcbiAgICBDb21tb24uX25vd1N0YXJ0VGltZSA9ICsobmV3IERhdGUoKSk7XG4gICAgQ29tbW9uLl93YXJuZWRPbmNlID0ge307XG4gICAgQ29tbW9uLl9kZWNvbXAgPSBudWxsO1xuICAgIFxuICAgIC8qKlxuICAgICAqIEV4dGVuZHMgdGhlIG9iamVjdCBpbiB0aGUgZmlyc3QgYXJndW1lbnQgdXNpbmcgdGhlIG9iamVjdCBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAqIEBtZXRob2QgZXh0ZW5kXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGV4dGVuZGVkXG4gICAgICovXG4gICAgQ29tbW9uLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICB2YXIgYXJnc1N0YXJ0LFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGRlZXBDbG9uZTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlZXAgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYXJnc1N0YXJ0ID0gMjtcbiAgICAgICAgICAgIGRlZXBDbG9uZSA9IGRlZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAxO1xuICAgICAgICAgICAgZGVlcENsb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzU3RhcnQ7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcENsb25lICYmIHNvdXJjZVtwcm9wXSAmJiBzb3VyY2VbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmpbcHJvcF0gfHwgb2JqW3Byb3BdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBvYmpbcHJvcF0gfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uLmV4dGVuZChvYmpbcHJvcF0sIGRlZXBDbG9uZSwgc291cmNlW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNsb25lIG9mIHRoZSBvYmplY3QsIGlmIGRlZXAgaXMgdHJ1ZSByZWZlcmVuY2VzIHdpbGwgYWxzbyBiZSBjbG9uZWQuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGRlZXBcbiAgICAgKiBAcmV0dXJuIHt9IG9iaiBjbG9uZWRcbiAgICAgKi9cbiAgICBDb21tb24uY2xvbmUgPSBmdW5jdGlvbihvYmosIGRlZXApIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoe30sIGRlZXAsIG9iaik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2Yga2V5cyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGtleXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7c3RyaW5nW119IGtleXNcbiAgICAgKi9cbiAgICBDb21tb24ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7YXJyYXl9IEFycmF5IG9mIHRoZSBvYmplY3RzIHByb3BlcnR5IHZhbHVlc1xuICAgICAqL1xuICAgIENvbW1vbi52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5c1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gYXZvaWQgaGFzT3duUHJvcGVydHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5XSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2YWx1ZSBmcm9tIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIGdldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBUaGUgb2JqZWN0IGF0IHRoZSBnaXZlbiBwYXRoXG4gICAgICovXG4gICAgQ29tbW9uLmdldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgYmVnaW4sIGVuZCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHZhbHVlIG9uIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge30gdmFsIFRoZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBQYXNzIHRocm91Z2ggYHZhbGAgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgQ29tbW9uLnNldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgdmFsLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKS5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgICAgQ29tbW9uLmdldChvYmosIHBhdGgsIDAsIC0xKVtwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIHRoZSBnaXZlbiBhcnJheSBpbi1wbGFjZS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2Qgc2h1ZmZsZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gICAgICogQHJldHVybiB7YXJyYXl9IGFycmF5IHNodWZmbGVkIHJhbmRvbWx5XG4gICAgICovXG4gICAgQ29tbW9uLnNodWZmbGUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKENvbW1vbi5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSBjaG9vc2VzIGEgdmFsdWUgZnJvbSBhIGxpc3Qgd2l0aCBlcXVhbCBwcm9iYWJpbGl0eS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2QgY2hvb3NlXG4gICAgICogQHBhcmFtIHthcnJheX0gY2hvaWNlc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSByYW5kb20gY2hvaWNlIG9iamVjdCBmcm9tIHRoZSBhcnJheVxuICAgICAqL1xuICAgIENvbW1vbi5jaG9vc2UgPSBmdW5jdGlvbihjaG9pY2VzKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2VzW01hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqIEBtZXRob2QgaXNFbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSAmJiBvYmoubm9kZU5hbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBhcnJheS5cbiAgICAgKiBAbWV0aG9kIGlzQXJyYXlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gICAgICogQG1ldGhvZCBpc0Z1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHBsYWluIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGlzUGxhaW5PYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgaXNTdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiB2YWx1ZSBjbGFtcGVkIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlLlxuICAgICAqIEBtZXRob2QgY2xhbXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24uY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluKVxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4KVxuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAgICogQG1ldGhvZCBzaWduXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtMSBpZiBuZWdhdGl2ZSwgKzEgaWYgMCBvciBwb3NpdGl2ZVxuICAgICAqL1xuICAgIENvbW1vbi5zaWduID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgMCA/IC0xIDogMTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIHNpbmNlIHRoZSB0aW1lIG9yaWdpbiAoZS5nLiBmcm9tIHBhZ2UgbG9hZCkuXG4gICAgICogVGhlIHJlc3VsdCBpcyBpbiBtaWxsaXNlY29uZHMgYW5kIHdpbGwgdXNlIGhpZ2gtcmVzb2x1dGlvbiB0aW1pbmcgaWYgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgbm93XG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgQ29tbW9uLm5vdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm5vdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERhdGUubm93KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkgLSBDb21tb24uX25vd1N0YXJ0VGltZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByYW5kb20gdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bSB2YWx1ZSBpbmNsdXNpdmUuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIHJhbmRvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gKHR5cGVvZiBtaW4gIT09IFwidW5kZWZpbmVkXCIpID8gbWluIDogMDtcbiAgICAgICAgbWF4ID0gKHR5cGVvZiBtYXggIT09IFwidW5kZWZpbmVkXCIpID8gbWF4IDogMTtcbiAgICAgICAgcmV0dXJuIG1pbiArIF9zZWVkZWRSYW5kb20oKSAqIChtYXggLSBtaW4pO1xuICAgIH07XG5cbiAgICB2YXIgX3NlZWRlZFJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvclxuICAgICAgICBDb21tb24uX3NlZWQgPSAoQ29tbW9uLl9zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5fc2VlZCAvIDIzMzI4MDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBDU1MgaGV4IGNvbG91ciBzdHJpbmcgaW50byBhbiBpbnRlZ2VyLlxuICAgICAqIEBtZXRob2QgY29sb3JUb051bWJlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclN0cmluZ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIENTUyBoZXggc3RyaW5nXG4gICAgICovXG4gICAgQ29tbW9uLmNvbG9yVG9OdW1iZXIgPSBmdW5jdGlvbihjb2xvclN0cmluZykge1xuICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnJlcGxhY2UoJyMnLCcnKTtcblxuICAgICAgICBpZiAoY29sb3JTdHJpbmcubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuY2hhckF0KDApICsgY29sb3JTdHJpbmcuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMikgKyBjb2xvclN0cmluZy5jaGFyQXQoMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnNvbGUgbG9nZ2luZyBsZXZlbCB0byB1c2UsIHdoZXJlIGVhY2ggbGV2ZWwgaW5jbHVkZXMgYWxsIGxldmVscyBhYm92ZSBhbmQgZXhjbHVkZXMgdGhlIGxldmVscyBiZWxvdy5cbiAgICAgKiBUaGUgZGVmYXVsdCBsZXZlbCBpcyAnZGVidWcnIHdoaWNoIHNob3dzIGFsbCBjb25zb2xlIG1lc3NhZ2VzLiAgXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSBsZXZlbCB2YWx1ZXMgYXJlOlxuICAgICAqIC0gMCA9IE5vbmVcbiAgICAgKiAtIDEgPSBEZWJ1Z1xuICAgICAqIC0gMiA9IEluZm9cbiAgICAgKiAtIDMgPSBXYXJuXG4gICAgICogLSA0ID0gRXJyb3JcbiAgICAgKiBAcHJvcGVydHkgQ29tbW9uLmxvZ0xldmVsXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgQ29tbW9uLmxvZ0xldmVsID0gMTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUubG9nYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCBsb2dcbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUuaW5mb2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgaW5mb1xuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24uaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLndhcm5gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIHdhcm5cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLndhcm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlcyBgQ29tbW9uLndhcm5gIHRvIGxvZyB0aGUgZ2l2ZW4gbWVzc2FnZSBvbmUgdGltZSBvbmx5LlxuICAgICAqIEBtZXRob2Qgd2Fybk9uY2VcbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLndhcm5PbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKCFDb21tb24uX3dhcm5lZE9uY2VbbWVzc2FnZV0pIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKG1lc3NhZ2UpO1xuICAgICAgICAgICAgQ29tbW9uLl93YXJuZWRPbmNlW21lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGRlcHJlY2F0ZWQgY29uc29sZSB3YXJuaW5nIHdoZW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBvYmplY3QgaXMgY2FsbGVkLlxuICAgICAqIFRoZSB0YXJnZXQgZnVuY3Rpb24gd2lsbCBiZSByZXBsYWNlZCB3aXRoIGEgbmV3IGZ1bmN0aW9uIHRoYXQgZmlyc3Qgc2hvd3MgdGhlIHdhcm5pbmdcbiAgICAgKiBhbmQgdGhlbiBjYWxscyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gICAgICogQG1ldGhvZCBkZXByZWNhdGVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IG9yIG1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBwcm9wZXJ0eSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBvbiBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2FybmluZyBUaGUgb25lLXRpbWUgbWVzc2FnZSB0byBzaG93IGlmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcbiAgICAgKi9cbiAgICBDb21tb24uZGVwcmVjYXRlZCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCwgd2FybmluZykge1xuICAgICAgICBvYmpbcHJvcF0gPSBDb21tb24uY2hhaW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoJ/CflIUgZGVwcmVjYXRlZCDwn5SFJywgd2FybmluZyk7XG4gICAgICAgIH0sIG9ialtwcm9wXSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIHNlcXVlbnRpYWwgSUQuXG4gICAgICogQG1ldGhvZCBuZXh0SWRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBzZXF1ZW50aWFsIElEXG4gICAgICovXG4gICAgQ29tbW9uLm5leHRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLl9uZXh0SWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgaW5kZXhPZiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIGluZGV4T2ZcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBoYXlzdGFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZWVkbGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBuZWVkbGUgaW4gaGF5c3RhY2ssIG90aGVyd2lzZSAtMS5cbiAgICAgKi9cbiAgICBDb21tb24uaW5kZXhPZiA9IGZ1bmN0aW9uKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICAgICAgaWYgKGhheXN0YWNrLmluZGV4T2YpXG4gICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGF5c3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PT0gbmVlZGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBhcnJheSBtYXAgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBtYXBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge2FycmF5fSBWYWx1ZXMgZnJvbSBsaXN0IHRyYW5zZm9ybWVkIGJ5IGZ1bmMuXG4gICAgICovXG4gICAgQ29tbW9uLm1hcCA9IGZ1bmN0aW9uKGxpc3QsIGZ1bmMpIHtcbiAgICAgICAgaWYgKGxpc3QubWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5tYXAoZnVuYyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFwcGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmdW5jKGxpc3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgZGlyZWN0ZWQgZ3JhcGggYW5kIHJldHVybnMgdGhlIHBhcnRpYWxseSBvcmRlcmVkIHNldCBvZiB2ZXJ0aWNlcyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgKiBDaXJjdWxhciBkZXBlbmRlbmNpZXMgYXJlIGFsbG93ZWQuXG4gICAgICogQG1ldGhvZCB0b3BvbG9naWNhbFNvcnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JhcGhcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gUGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi50b3BvbG9naWNhbFNvcnQgPSBmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9qYXZhc2NyaXB0LWFsZ29yaXRobXNcbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBNaW5rbyBHZWNoZXYgKE1JVCBsaWNlbnNlKVxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICB2aXNpdGVkID0gW10sXG4gICAgICAgICAgICB0ZW1wID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgbm9kZSBpbiBncmFwaCkge1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW25vZGVdICYmICF0ZW1wW25vZGVdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKG5vZGUsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIG5laWdoYm9ycyA9IGdyYXBoW25vZGVdIHx8IFtdO1xuICAgICAgICB0ZW1wW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGVtcFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbmVpZ2hib3JdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobmVpZ2hib3IsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGVtcFtub2RlXSA9IGZhbHNlO1xuICAgICAgICB2aXNpdGVkW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgX25fIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgYW5kIHJldHVybnMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGVtIGluIG9yZGVyLlxuICAgICAqIFRoZSBhcmd1bWVudHMgYXBwbGllZCB3aGVuIGNhbGxpbmcgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGFsc28gYmUgYXBwbGllZCB0byBldmVyeSBmdW5jdGlvbiBwYXNzZWQuXG4gICAgICogVGhlIHZhbHVlIG9mIGB0aGlzYCByZWZlcnMgdG8gdGhlIGxhc3QgdmFsdWUgcmV0dXJuZWQgaW4gdGhlIGNoYWluIHRoYXQgd2FzIG5vdCBgdW5kZWZpbmVkYC5cbiAgICAgKiBUaGVyZWZvcmUgaWYgYSBwYXNzZWQgZnVuY3Rpb24gZG9lcyBub3QgcmV0dXJuIGEgdmFsdWUsIHRoZSBwcmV2aW91c2x5IHJldHVybmVkIHZhbHVlIGlzIG1haW50YWluZWQuXG4gICAgICogQWZ0ZXIgYWxsIHBhc3NlZCBmdW5jdGlvbnMgaGF2ZSBiZWVuIGNhbGxlZCB0aGUgbmV3IGZ1bmN0aW9uIHJldHVybnMgdGhlIGxhc3QgcmV0dXJuZWQgdmFsdWUgKGlmIGFueSkuXG4gICAgICogSWYgYW55IG9mIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGFyZSBhIGNoYWluLCB0aGVuIHRoZSBjaGFpbiB3aWxsIGJlIGZsYXR0ZW5lZC5cbiAgICAgKiBAbWV0aG9kIGNoYWluXG4gICAgICogQHBhcmFtIC4uLmZ1bmNzIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9ucyB0byBjaGFpbi5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgcGFzc2VkIGZ1bmN0aW9ucyBpbiBvcmRlci5cbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmNzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZnVuYy5fY2hhaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGZsYXR0ZW4gYWxyZWFkeSBjaGFpbmVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2guYXBwbHkoZnVuY3MsIGZ1bmMuX2NoYWluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdW5jcy5wdXNoKGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL2RldnRvb2xzLWRvY3MvaXNzdWVzLzUzI2lzc3VlY29tbWVudC01MTk0MTM1OFxuICAgICAgICAgICAgdmFyIGxhc3RSZXN1bHQsXG4gICAgICAgICAgICAgICAgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmNzW2ldLmFwcGx5KGxhc3RSZXN1bHQsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGFpbi5fY2hhaW5lZCA9IGZ1bmNzO1xuXG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGJlZm9yZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhCZWZvcmVcbiAgICAgKiBAcGFyYW0ge30gYmFzZSBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBiZWZvcmUgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEJlZm9yZSA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgZnVuYyxcbiAgICAgICAgICAgIENvbW1vbi5nZXQoYmFzZSwgcGF0aClcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBhZnRlciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhBZnRlclxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGFmdGVyIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpblBhdGhBZnRlciA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKSxcbiAgICAgICAgICAgIGZ1bmNcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSB0byBlbmFibGVcbiAgICAgKiBjb25jYXZlIHZlcnRleCBkZWNvbXBvc2l0aW9uIHN1cHBvcnQgd2hlbiB1c2luZyBgQm9kaWVzLmZyb21WZXJ0aWNlc2AgZS5nLiBgQ29tbW9uLnNldERlY29tcChyZXF1aXJlKCdwb2x5LWRlY29tcCcpKWAuXG4gICAgICogQG1ldGhvZCBzZXREZWNvbXBcbiAgICAgKiBAcGFyYW0ge30gZGVjb21wIFRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUuXG4gICAgICovXG4gICAgQ29tbW9uLnNldERlY29tcCA9IGZ1bmN0aW9uKGRlY29tcCkge1xuICAgICAgICBDb21tb24uX2RlY29tcCA9IGRlY29tcDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIHByb3ZpZGVkIHRocm91Z2ggYENvbW1vbi5zZXREZWNvbXBgLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBnbG9iYWwgYGRlY29tcGAgaWYgc2V0LlxuICAgICAqIEBtZXRob2QgZ2V0RGVjb21wXG4gICAgICogQHJldHVybiB7fSBUaGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIGlmIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIENvbW1vbi5nZXREZWNvbXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gZ2V0IHVzZXIgcHJvdmlkZWQgZGVjb21wIGlmIHNldFxuICAgICAgICB2YXIgZGVjb21wID0gQ29tbW9uLl9kZWNvbXA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmcm9tIHdpbmRvdyBnbG9iYWxcbiAgICAgICAgICAgIGlmICghZGVjb21wICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wID0gd2luZG93LmRlY29tcDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmcm9tIG5vZGUgZ2xvYmFsXG4gICAgICAgICAgICBpZiAoIWRlY29tcCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlY29tcCA9IGdsb2JhbC5kZWNvbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGRlY29tcCBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICBkZWNvbXAgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY29tcDtcbiAgICB9O1xufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvdW5kc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveGVzIChBQUJCKS5cbipcbiogQGNsYXNzIEJvdW5kc1xuKi9cblxudmFyIEJvdW5kcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBheGlzLWFsaWduZWQgYm91bmRpbmcgYm94IChBQUJCKSBmb3IgdGhlIGdpdmVuIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib3VuZHN9IEEgbmV3IGJvdW5kcyBvYmplY3RcbiAgICAgKi9cbiAgICBCb3VuZHMuY3JlYXRlID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IHsgXG4gICAgICAgICAgICBtaW46IHsgeDogMCwgeTogMCB9LCBcbiAgICAgICAgICAgIG1heDogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmVydGljZXMpXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKGJvdW5kcywgdmVydGljZXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBib3VuZHMgdXNpbmcgdGhlIGdpdmVuIHZlcnRpY2VzIGFuZCBleHRlbmRzIHRoZSBib3VuZHMgZ2l2ZW4gYSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvdW5kcy51cGRhdGUgPSBmdW5jdGlvbihib3VuZHMsIHZlcnRpY2VzLCB2ZWxvY2l0eSkge1xuICAgICAgICBib3VuZHMubWluLnggPSBJbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1heC54ID0gLUluZmluaXR5O1xuICAgICAgICBib3VuZHMubWluLnkgPSBJbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1heC55ID0gLUluZmluaXR5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA+IGJvdW5kcy5tYXgueCkgYm91bmRzLm1heC54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBpZiAodmVydGV4LnggPCBib3VuZHMubWluLngpIGJvdW5kcy5taW4ueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgaWYgKHZlcnRleC55ID4gYm91bmRzLm1heC55KSBib3VuZHMubWF4LnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueSA8IGJvdW5kcy5taW4ueSkgYm91bmRzLm1pbi55ID0gdmVydGV4Lnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh2ZWxvY2l0eSkge1xuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1heC54ICs9IHZlbG9jaXR5Lng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueCArPSB2ZWxvY2l0eS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueSA+IDApIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgKz0gdmVsb2NpdHkueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbi55ICs9IHZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBib3VuZHMgY29udGFpbnMgdGhlIGdpdmVuIHBvaW50LlxuICAgICAqIEBtZXRob2QgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYm91bmRzIGNvbnRhaW4gdGhlIHBvaW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBCb3VuZHMuY29udGFpbnMgPSBmdW5jdGlvbihib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID49IGJvdW5kcy5taW4ueCAmJiBwb2ludC54IDw9IGJvdW5kcy5tYXgueCBcbiAgICAgICAgICAgICAgICYmIHBvaW50LnkgPj0gYm91bmRzLm1pbi55ICYmIHBvaW50LnkgPD0gYm91bmRzLm1heC55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBib3VuZHMgaW50ZXJzZWN0LlxuICAgICAqIEBtZXRob2Qgb3ZlcmxhcHNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzQVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNCXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYm91bmRzIG92ZXJsYXAsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIEJvdW5kcy5vdmVybGFwcyA9IGZ1bmN0aW9uKGJvdW5kc0EsIGJvdW5kc0IpIHtcbiAgICAgICAgcmV0dXJuIChib3VuZHNBLm1pbi54IDw9IGJvdW5kc0IubWF4LnggJiYgYm91bmRzQS5tYXgueCA+PSBib3VuZHNCLm1pbi54XG4gICAgICAgICAgICAgICAgJiYgYm91bmRzQS5tYXgueSA+PSBib3VuZHNCLm1pbi55ICYmIGJvdW5kc0EubWluLnkgPD0gYm91bmRzQi5tYXgueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIGJvdW5kcyBieSB0aGUgZ2l2ZW4gdmVjdG9yLlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKi9cbiAgICBCb3VuZHMudHJhbnNsYXRlID0gZnVuY3Rpb24oYm91bmRzLCB2ZWN0b3IpIHtcbiAgICAgICAgYm91bmRzLm1pbi54ICs9IHZlY3Rvci54O1xuICAgICAgICBib3VuZHMubWF4LnggKz0gdmVjdG9yLng7XG4gICAgICAgIGJvdW5kcy5taW4ueSArPSB2ZWN0b3IueTtcbiAgICAgICAgYm91bmRzLm1heC55ICs9IHZlY3Rvci55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaGlmdHMgdGhlIGJvdW5kcyB0byB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gICAgICogQG1ldGhvZCBzaGlmdFxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb25cbiAgICAgKi9cbiAgICBCb3VuZHMuc2hpZnQgPSBmdW5jdGlvbihib3VuZHMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBkZWx0YVggPSBib3VuZHMubWF4LnggLSBib3VuZHMubWluLngsXG4gICAgICAgICAgICBkZWx0YVkgPSBib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnk7XG4gICAgICAgICAgICBcbiAgICAgICAgYm91bmRzLm1pbi54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgYm91bmRzLm1heC54ID0gcG9zaXRpb24ueCArIGRlbHRhWDtcbiAgICAgICAgYm91bmRzLm1pbi55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgYm91bmRzLm1heC55ID0gcG9zaXRpb24ueSArIGRlbHRhWTtcbiAgICB9O1xuICAgIFxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlZlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgdmVjdG9ycy5cbiogVmVjdG9ycyBhcmUgdGhlIGJhc2lzIG9mIGFsbCB0aGUgZ2VvbWV0cnkgcmVsYXRlZCBvcGVyYXRpb25zIGluIHRoZSBlbmdpbmUuXG4qIEEgYE1hdHRlci5WZWN0b3JgIG9iamVjdCBpcyBvZiB0aGUgZm9ybSBgeyB4OiAwLCB5OiAwIH1gLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVjdG9yXG4qL1xuXG4vLyBUT0RPOiBjb25zaWRlciBwYXJhbXMgZm9yIHJldXNpbmcgdmVjdG9yIG9iamVjdHNcblxudmFyIFZlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY3JlYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4geyB4OiB4IHx8IDAsIHk6IHkgfHwgMCB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IHZlY3RvciB3aXRoIGB4YCBhbmQgYHlgIGNvcGllZCBmcm9tIHRoZSBnaXZlbiBgdmVjdG9yYC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgY2xvbmVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5jbG9uZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCwgeTogdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIGEgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3RvciAodGhlcmVmb3JlIHNhdmluZyBhIGBzcXJ0YCBvcGVyYXRpb24pLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlU3F1YXJlZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzcXVhcmVkIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0ICgwLCAwKSBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgKDAsIDApXG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZSA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSB2ZWN0b3IueCAqIGNvcyAtIHZlY3Rvci55ICogc2luO1xuICAgICAgICBvdXRwdXQueSA9IHZlY3Rvci54ICogc2luICsgdmVjdG9yLnkgKiBjb3M7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0IGEgc3BlY2lmaWVkIHBvaW50IGJ5IHNwZWNpZmllZCBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZUFib3V0XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgdGhlIHBvaW50XG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZUFib3V0ID0gZnVuY3Rpb24odmVjdG9yLCBhbmdsZSwgcG9pbnQsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSBwb2ludC54ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogY29zIC0gKHZlY3Rvci55IC0gcG9pbnQueSkgKiBzaW4pO1xuICAgICAgICBvdXRwdXQueSA9IHBvaW50LnkgKyAoKHZlY3Rvci54IC0gcG9pbnQueCkgKiBzaW4gKyAodmVjdG9yLnkgLSBwb2ludC55KSAqIGNvcyk7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlcyBhIHZlY3RvciAoc3VjaCB0aGF0IGl0cyBtYWduaXR1ZGUgaXMgYDFgKS5cbiAgICAgKiBAbWV0aG9kIG5vcm1hbGlzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBub3JtYWxpc2VkXG4gICAgICovXG4gICAgVmVjdG9yLm5vcm1hbGlzZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gVmVjdG9yLm1hZ25pdHVkZSh2ZWN0b3IpO1xuICAgICAgICBpZiAobWFnbml0dWRlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAvIG1hZ25pdHVkZSwgeTogdmVjdG9yLnkgLyBtYWduaXR1ZGUgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90LXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBkb3RcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZG90IHByb2R1Y3Qgb2YgdGhlIHR3byB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmRvdCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLngpICsgKHZlY3RvckEueSAqIHZlY3RvckIueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5jcm9zcyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLnkpIC0gKHZlY3RvckEueSAqIHZlY3RvckIueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdGhyZWUgdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGNyb3NzM1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIHRocmVlIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MzID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgdmVjdG9yQykge1xuICAgICAgICByZXR1cm4gKHZlY3RvckIueCAtIHZlY3RvckEueCkgKiAodmVjdG9yQy55IC0gdmVjdG9yQS55KSAtICh2ZWN0b3JCLnkgLSB2ZWN0b3JBLnkpICogKHZlY3RvckMueCAtIHZlY3RvckEueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgYWRkZWRcbiAgICAgKi9cbiAgICBWZWN0b3IuYWRkID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggKyB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55ICsgdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2Qgc3ViXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgc3VidHJhY3RlZFxuICAgICAqL1xuICAgIFZlY3Rvci5zdWIgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCBvdXRwdXQpIHtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICBvdXRwdXQueCA9IHZlY3RvckEueCAtIHZlY3RvckIueDtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3JBLnkgLSB2ZWN0b3JCLnk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYW5kIGEgc2NhbGFyLlxuICAgICAqIEBtZXRob2QgbXVsdFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgbXVsdGlwbGllZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IubXVsdCA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54ICogc2NhbGFyLCB5OiB2ZWN0b3IueSAqIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIGRpdlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgZGl2aWRlZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IuZGl2ID0gZnVuY3Rpb24odmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBzY2FsYXIsIHk6IHZlY3Rvci55IC8gc2NhbGFyIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yLiBTZXQgYG5lZ2F0ZWAgdG8gdHJ1ZSBmb3IgdGhlIHBlcnBlbmRpY3VsYXIgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIHBlcnBcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtib29sfSBbbmVnYXRlPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLnBlcnAgPSBmdW5jdGlvbih2ZWN0b3IsIG5lZ2F0ZSkge1xuICAgICAgICBuZWdhdGUgPSBuZWdhdGUgPT09IHRydWUgPyAtMSA6IDE7XG4gICAgICAgIHJldHVybiB7IHg6IG5lZ2F0ZSAqIC12ZWN0b3IueSwgeTogbmVnYXRlICogdmVjdG9yLnggfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBib3RoIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3Igc3VjaCB0aGF0IGl0IHBvaW50cyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqIEBtZXRob2QgbmVnXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIG5lZ2F0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm5lZyA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiAtdmVjdG9yLngsIHk6IC12ZWN0b3IueSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbmdsZSBiZXR3ZWVuIHRoZSB2ZWN0b3IgYHZlY3RvckIgLSB2ZWN0b3JBYCBhbmQgdGhlIHgtYXhpcyBpbiByYWRpYW5zLlxuICAgICAqIEBtZXRob2QgYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICAgICAqL1xuICAgIFZlY3Rvci5hbmdsZSA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodmVjdG9yQi55IC0gdmVjdG9yQS55LCB2ZWN0b3JCLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgdmVjdG9yIHBvb2wgKG5vdCB0aHJlYWQtc2FmZSkuXG4gICAgICogQHByb3BlcnR5IF90ZW1wXG4gICAgICogQHR5cGUge3ZlY3RvcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgVmVjdG9yLl90ZW1wID0gW1xuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpLCBcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKClcbiAgICBdO1xuXG59KSgpO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlZlcnRpY2VzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzZXRzIG9mIHZlcnRpY2VzLlxuKiBBIHNldCBvZiB2ZXJ0aWNlcyBpcyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgd2l0aCBhZGRpdGlvbmFsIGluZGV4aW5nIHByb3BlcnRpZXMgaW5zZXJ0ZWQgYnkgYFZlcnRpY2VzLmNyZWF0ZWAuXG4qIEEgYE1hdHRlci5Cb2R5YCBtYWludGFpbnMgYSBzZXQgb2YgdmVydGljZXMgdG8gcmVwcmVzZW50IHRoZSBzaGFwZSBvZiB0aGUgb2JqZWN0IChpdHMgY29udmV4IGh1bGwpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVydGljZXNcbiovXG5cbnZhciBWZXJ0aWNlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2VzO1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNldCBvZiBgTWF0dGVyLkJvZHlgIGNvbXBhdGlibGUgdmVydGljZXMuXG4gICAgICogVGhlIGBwb2ludHNgIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHBvaW50cyBvcmllbnRhdGVkIGFyb3VuZCB0aGUgb3JpZ2luIGAoMCwgMClgLCBmb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgICBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMjUsIHk6IDUwIH0sIHsgeDogNTAsIHk6IDAgfV1cbiAgICAgKlxuICAgICAqIFRoZSBgVmVydGljZXMuY3JlYXRlYCBtZXRob2QgcmV0dXJucyBhIG5ldyBhcnJheSBvZiB2ZXJ0aWNlcywgd2hpY2ggYXJlIHNpbWlsYXIgdG8gTWF0dGVyLlZlY3RvciBvYmplY3RzLFxuICAgICAqIGJ1dCB3aXRoIHNvbWUgYWRkaXRpb25hbCByZWZlcmVuY2VzIHJlcXVpcmVkIGZvciBlZmZpY2llbnQgY29sbGlzaW9uIGRldGVjdGlvbiByb3V0aW5lcy5cbiAgICAgKlxuICAgICAqIFZlcnRpY2VzIG11c3QgYmUgc3BlY2lmaWVkIGluIGNsb2Nrd2lzZSBvcmRlci5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYGJvZHlgIGFyZ3VtZW50IGlzIG5vdCBvcHRpb25hbCwgYSBgTWF0dGVyLkJvZHlgIHJlZmVyZW5jZSBtdXN0IGJlIHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3RvcltdfSBwb2ludHNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jcmVhdGUgPSBmdW5jdGlvbihwb2ludHMsIGJvZHkpIHtcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBpc0ludGVybmFsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3JkZXJlZCB4IHkgcGFpcnMgc2VwYXJhdGVkIGJ5IHNwYWNlcyAoYW5kIG9wdGlvbmFsbHkgY29tbWFzKSwgXG4gICAgICogaW50byBhIGBNYXR0ZXIuVmVydGljZXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGBNYXR0ZXIuQm9keWAuXG4gICAgICogRm9yIHBhcnNpbmcgU1ZHIHBhdGhzLCBzZWUgYFN2Zy5wYXRoVG9WZXJ0aWNlc2AuXG4gICAgICogQG1ldGhvZCBmcm9tUGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuZnJvbVBhdGggPSBmdW5jdGlvbihwYXRoLCBib2R5KSB7XG4gICAgICAgIHZhciBwYXRoUGF0dGVybiA9IC9MP1xccyooWy1cXGQuZV0rKVtcXHMsXSooWy1cXGQuZV0rKSovaWcsXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcblxuICAgICAgICBwYXRoLnJlcGxhY2UocGF0aFBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCB4LCB5KSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHBhcnNlRmxvYXQoeCksIHk6IHBhcnNlRmxvYXQoeSkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBWZXJ0aWNlcy5jcmVhdGUocG9pbnRzLCBib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2VudHJlIChjZW50cm9pZCkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNlbnRyZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgY2VudHJlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuY2VudHJlID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGFyZWEgPSBWZXJ0aWNlcy5hcmVhKHZlcnRpY2VzLCB0cnVlKSxcbiAgICAgICAgICAgIGNlbnRyZSA9IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gVmVjdG9yLmNyb3NzKHZlcnRpY2VzW2ldLCB2ZXJ0aWNlc1tqXSk7XG4gICAgICAgICAgICB0ZW1wID0gVmVjdG9yLm11bHQoVmVjdG9yLmFkZCh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pLCBjcm9zcyk7XG4gICAgICAgICAgICBjZW50cmUgPSBWZWN0b3IuYWRkKGNlbnRyZSwgdGVtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVmVjdG9yLmRpdihjZW50cmUsIDYgKiBhcmVhKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXZlcmFnZSAobWVhbikgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lYW5cbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGF2ZXJhZ2UgcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5tZWFuID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF2ZXJhZ2UgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhdmVyYWdlLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2ZXJhZ2UueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoYXZlcmFnZSwgdmVydGljZXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXJlYSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgYXJlYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib29sfSBzaWduZWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhcmVhXG4gICAgICovXG4gICAgVmVydGljZXMuYXJlYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBzaWduZWQpIHtcbiAgICAgICAgdmFyIGFyZWEgPSAwLFxuICAgICAgICAgICAgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJlYSArPSAodmVydGljZXNbal0ueCAtIHZlcnRpY2VzW2ldLngpICogKHZlcnRpY2VzW2pdLnkgKyB2ZXJ0aWNlc1tpXS55KTtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZ25lZClcbiAgICAgICAgICAgIHJldHVybiBhcmVhIC8gMjtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYXJlYSkgLyAyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzIGdpdmVuIHRoZSB0b3RhbCBtYXNzLlxuICAgICAqIEBtZXRob2QgaW5lcnRpYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb2x5Z29uJ3MgbW9tZW50IG9mIGluZXJ0aWFcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5pbmVydGlhID0gZnVuY3Rpb24odmVydGljZXMsIG1hc3MpIHtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IDAsXG4gICAgICAgICAgICBkZW5vbWluYXRvciA9IDAsXG4gICAgICAgICAgICB2ID0gdmVydGljZXMsXG4gICAgICAgICAgICBjcm9zcyxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhLCB1c2luZyBzZWNvbmQgbW9tZW50IG9mIGFyZWFcbiAgICAgICAgLy8gZnJvbSBlcXVhdGlvbnMgYXQgaHR0cDovL3d3dy5waHlzaWNzZm9ydW1zLmNvbS9zaG93dGhyZWFkLnBocD90PTI1MjkzXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdi5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgaiA9IChuICsgMSkgJSB2Lmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gTWF0aC5hYnMoVmVjdG9yLmNyb3NzKHZbal0sIHZbbl0pKTtcbiAgICAgICAgICAgIG51bWVyYXRvciArPSBjcm9zcyAqIChWZWN0b3IuZG90KHZbal0sIHZbal0pICsgVmVjdG9yLmRvdCh2W2pdLCB2W25dKSArIFZlY3Rvci5kb3QodltuXSwgdltuXSkpO1xuICAgICAgICAgICAgZGVub21pbmF0b3IgKz0gY3Jvc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG1hc3MgLyA2KSAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy50cmFuc2xhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgdmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmIChzY2FsYXIpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdmVjdG9yLnggKiBzY2FsYXI7XG4gICAgICAgICAgICAgICAgdmVydGljZXNbaV0ueSArPSB2ZWN0b3IueSAqIHNjYWxhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdmVjdG9yLng7XG4gICAgICAgICAgICAgICAgdmVydGljZXNbaV0ueSArPSB2ZWN0b3IueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5yb3RhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgYW5nbGUsIHBvaW50KSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlID0gdmVydGljZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSB2ZXJ0aWNlLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gdmVydGljZS55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHZlcnRpY2UueCA9IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbik7XG4gICAgICAgICAgICB2ZXJ0aWNlLnkgPSBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHBvaW50YCBpcyBpbnNpZGUgdGhlIHNldCBvZiBgdmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZlcnRpY2VzIGNvbnRhaW5zIHBvaW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jb250YWlucyA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBwb2ludCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZSA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0aWNlID0gdmVydGljZXNbKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aF07XG4gICAgICAgICAgICBpZiAoKHBvaW50LnggLSB2ZXJ0aWNlLngpICogKG5leHRWZXJ0aWNlLnkgLSB2ZXJ0aWNlLnkpICsgKHBvaW50LnkgLSB2ZXJ0aWNlLnkpICogKHZlcnRpY2UueCAtIG5leHRWZXJ0aWNlLngpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIHZlcnRpY2VzIGZyb20gYSBwb2ludCAoZGVmYXVsdCBpcyBjZW50cmUpIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuc2NhbGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KSB7XG4gICAgICAgIGlmIChzY2FsZVggPT09IDEgJiYgc2NhbGVZID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgVmVydGljZXMuY2VudHJlKHZlcnRpY2VzKTtcblxuICAgICAgICB2YXIgdmVydGV4LFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkZWx0YSA9IFZlY3Rvci5zdWIodmVydGV4LCBwb2ludCk7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ID0gcG9pbnQueCArIGRlbHRhLnggKiBzY2FsZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ID0gcG9pbnQueSArIGRlbHRhLnkgKiBzY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYW1mZXJzIGEgc2V0IG9mIHZlcnRpY2VzIGJ5IGdpdmluZyB0aGVtIHJvdW5kZWQgY29ybmVycywgcmV0dXJucyBhIG5ldyBzZXQgb2YgdmVydGljZXMuXG4gICAgICogVGhlIHJhZGl1cyBwYXJhbWV0ZXIgaXMgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5IHRvIHNwZWNpZnkgdGhlIHJhZGl1cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAgICogQG1ldGhvZCBjaGFtZmVyXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNYXhcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jaGFtZmVyID0gZnVuY3Rpb24odmVydGljZXMsIHJhZGl1cywgcXVhbGl0eSwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCkge1xuICAgICAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IFtyYWRpdXNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzIHx8IFs4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHF1YWxpdHkgZGVmYXVsdHMgdG8gLTEsIHdoaWNoIGlzIGF1dG9cbiAgICAgICAgcXVhbGl0eSA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gJ3VuZGVmaW5lZCcpID8gcXVhbGl0eSA6IC0xO1xuICAgICAgICBxdWFsaXR5TWluID0gcXVhbGl0eU1pbiB8fCAyO1xuICAgICAgICBxdWFsaXR5TWF4ID0gcXVhbGl0eU1heCB8fCAxNDtcblxuICAgICAgICB2YXIgbmV3VmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJldlZlcnRleCA9IHZlcnRpY2VzW2kgLSAxID49IDAgPyBpIC0gMSA6IHZlcnRpY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1soaSArIDEpICUgdmVydGljZXMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFkaXVzID0gcmFkaXVzW2kgPCByYWRpdXMubGVuZ3RoID8gaSA6IHJhZGl1cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSYWRpdXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmV2Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC55IC0gcHJldlZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiBwcmV2VmVydGV4LnggLSB2ZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IG5leHRWZXJ0ZXgueSAtIHZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiB2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBkaWFnb25hbFJhZGl1cyA9IE1hdGguc3FydCgyICogTWF0aC5wb3coY3VycmVudFJhZGl1cywgMikpLFxuICAgICAgICAgICAgICAgIHJhZGl1c1ZlY3RvciA9IFZlY3Rvci5tdWx0KENvbW1vbi5jbG9uZShwcmV2Tm9ybWFsKSwgY3VycmVudFJhZGl1cyksXG4gICAgICAgICAgICAgICAgbWlkTm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZShWZWN0b3IubXVsdChWZWN0b3IuYWRkKHByZXZOb3JtYWwsIG5leHROb3JtYWwpLCAwLjUpKSxcbiAgICAgICAgICAgICAgICBzY2FsZWRWZXJ0ZXggPSBWZWN0b3Iuc3ViKHZlcnRleCwgVmVjdG9yLm11bHQobWlkTm9ybWFsLCBkaWFnb25hbFJhZGl1cykpO1xuXG4gICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gcXVhbGl0eTtcblxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZWNpZGUgcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gTWF0aC5wb3coY3VycmVudFJhZGl1cywgMC4zMikgKiAxLjc1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBDb21tb24uY2xhbXAocHJlY2lzaW9uLCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KTtcblxuICAgICAgICAgICAgLy8gdXNlIGFuIGV2ZW4gdmFsdWUgZm9yIHByZWNpc2lvbiwgbW9yZSBsaWtlbHkgdG8gcmVkdWNlIGF4ZXMgYnkgdXNpbmcgc3ltbWV0cnlcbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gJSAyID09PSAxKVxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiArPSAxO1xuXG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBNYXRoLmFjb3MoVmVjdG9yLmRvdChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSksXG4gICAgICAgICAgICAgICAgdGhldGEgPSBhbHBoYSAvIHByZWNpc2lvbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcmVjaXNpb247IGorKykge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2goVmVjdG9yLmFkZChWZWN0b3Iucm90YXRlKHJhZGl1c1ZlY3RvciwgdGhldGEgKiBqKSwgc2NhbGVkVmVydGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBpbnB1dCB2ZXJ0aWNlcyBpbnRvIGNsb2Nrd2lzZSBvcmRlciBpbiBwbGFjZS5cbiAgICAgKiBAbWV0aG9kIGNsb2Nrd2lzZVNvcnRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMubWVhbih2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4QSkgLSBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhCKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZlcnRpY2VzIGZvcm0gYSBjb252ZXggc2hhcGUgKHZlcnRpY2VzIG11c3QgYmUgaW4gY2xvY2t3aXNlIG9yZGVyKS5cbiAgICAgKiBAbWV0aG9kIGlzQ29udmV4XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgdGhlIGB2ZXJ0aWNlc2AgYXJlIGNvbnZleCwgYGZhbHNlYCBpZiBub3QgKG9yIGBudWxsYCBpZiBub3QgY29tcHV0YWJsZSkuXG4gICAgICovXG4gICAgVmVydGljZXMuaXNDb252ZXggPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZ2VvbWV0cnkvcG9seWdvbm1lc2gvXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgUGF1bCBCb3Vya2UgKHVzZSBwZXJtaXR0ZWQpXG5cbiAgICAgICAgdmFyIGZsYWcgPSAwLFxuICAgICAgICAgICAgbiA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgaWYgKG4gPCAzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSBuO1xuICAgICAgICAgICAgayA9IChpICsgMikgJSBuO1xuICAgICAgICAgICAgeiA9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNba10ueSAtIHZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgeiAtPSAodmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnkpICogKHZlcnRpY2VzW2tdLnggLSB2ZXJ0aWNlc1tqXS54KTtcblxuICAgICAgICAgICAgaWYgKHogPCAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZsYWcgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhZyAhPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnZleCBodWxsIG9mIHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBhIG5ldyBhcnJheSBvZiBwb2ludHMuXG4gICAgICogQG1ldGhvZCBodWxsXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIFt2ZXJ0ZXhdIHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuaHVsbCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9nZW9tYWxnb3JpdGhtcy5jb20vYTEwLV9odWxsLTEuaHRtbFxuXG4gICAgICAgIHZhciB1cHBlciA9IFtdLFxuICAgICAgICAgICAgbG93ZXIgPSBbXSwgXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHNvcnQgdmVydGljZXMgb24geC1heGlzICh5LWF4aXMgZm9yIHRpZXMpXG4gICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCk7XG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgdmFyIGR4ID0gdmVydGV4QS54IC0gdmVydGV4Qi54O1xuICAgICAgICAgICAgcmV0dXJuIGR4ICE9PSAwID8gZHggOiB2ZXJ0ZXhBLnkgLSB2ZXJ0ZXhCLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJ1aWxkIGxvd2VyIGh1bGxcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczMobG93ZXJbbG93ZXIubGVuZ3RoIC0gMl0sIGxvd2VyW2xvd2VyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBsb3dlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG93ZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVpbGQgdXBwZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSB2ZXJ0aWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlICh1cHBlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwcGVyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgdGhlIGxvd2VyIGFuZCB1cHBlciBodWxscyBnaXZlcyB0aGUgY29udmV4IGh1bGxcbiAgICAgICAgLy8gb21pdCBsYXN0IHBvaW50cyBiZWNhdXNlIHRoZXkgYXJlIHJlcGVhdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG90aGVyIGxpc3RcbiAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgIGxvd2VyLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiB1cHBlci5jb25jYXQobG93ZXIpO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5FdmVudHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIGZpcmUgYW5kIGxpc3RlbiB0byBldmVudHMgb24gb3RoZXIgb2JqZWN0cy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEV2ZW50c1xuKi9cblxudmFyIEV2ZW50cyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50cztcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAuXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9uID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBuYW1lO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHMgPSBvYmplY3QuZXZlbnRzIHx8IHt9O1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXSA9IG9iamVjdC5ldmVudHNbbmFtZV0gfHwgW107XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBldmVudCBjYWxsYmFjay4gSWYgbm8gY2FsbGJhY2ssIGNsZWFycyBhbGwgY2FsbGJhY2tzIGluIGBldmVudE5hbWVzYC4gSWYgbm8gYGV2ZW50TmFtZXNgLCBjbGVhcnMgYWxsIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9mZiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFldmVudE5hbWVzKSB7XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgRXZlbnRzLm9mZihvYmplY3QsIGNhbGxiYWNrKVxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXZlbnROYW1lcztcbiAgICAgICAgICAgIGV2ZW50TmFtZXMgPSBDb21tb24ua2V5cyhvYmplY3QuZXZlbnRzKS5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IG9iamVjdC5ldmVudHNbbmFtZXNbaV1dLFxuICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tqXSAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MucHVzaChjYWxsYmFja3Nbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lc1tpXV0gPSBuZXdDYWxsYmFja3M7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYWxsIHRoZSBjYWxsYmFja3Mgc3Vic2NyaWJlZCB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAsIGluIHRoZSBvcmRlciB0aGV5IHN1YnNjcmliZWQsIGlmIGFueS5cbiAgICAgKiBAbWV0aG9kIHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKi9cbiAgICBFdmVudHMudHJpZ2dlciA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgZXZlbnQpIHtcbiAgICAgICAgdmFyIG5hbWVzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGV2ZW50Q2xvbmU7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IG9iamVjdC5ldmVudHM7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnRzICYmIENvbW1vbi5rZXlzKGV2ZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFldmVudClcbiAgICAgICAgICAgICAgICBldmVudCA9IHt9O1xuXG4gICAgICAgICAgICBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MgPSBldmVudHNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUgPSBDb21tb24uY2xvbmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5zb3VyY2UgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tqXS5hcHBseShvYmplY3QsIFtldmVudENsb25lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogQSBjb21wb3NpdGUgaXMgYSBjb2xsZWN0aW9uIG9mIGBNYXR0ZXIuQm9keWAsIGBNYXR0ZXIuQ29uc3RyYWludGAgYW5kIG90aGVyIGBNYXR0ZXIuQ29tcG9zaXRlYCBvYmplY3RzLlxuKlxuKiBUaGV5IGFyZSBhIGNvbnRhaW5lciB0aGF0IGNhbiByZXByZXNlbnQgY29tcGxleCBvYmplY3RzIG1hZGUgb2YgbXVsdGlwbGUgcGFydHMsIGV2ZW4gaWYgdGhleSBhcmUgbm90IHBoeXNpY2FsbHkgY29ubmVjdGVkLlxuKiBBIGNvbXBvc2l0ZSBjb3VsZCBjb250YWluIGFueXRoaW5nIGZyb20gYSBzaW5nbGUgYm9keSBhbGwgdGhlIHdheSB1cCB0byBhIHdob2xlIHdvcmxkLlxuKiBcbiogV2hlbiBtYWtpbmcgYW55IGNoYW5nZXMgdG8gY29tcG9zaXRlcywgdXNlIHRoZSBpbmNsdWRlZCBmdW5jdGlvbnMgcmF0aGVyIHRoYW4gY2hhbmdpbmcgdGhlaXIgcHJvcGVydGllcyBkaXJlY3RseS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbXBvc2l0ZVxuKi9cblxudmFyIENvbXBvc2l0ZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZTtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbXBvc2l0ZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJpdGVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICBpZDogQ29tbW9uLm5leHRJZCgpLFxuICAgICAgICAgICAgdHlwZTogJ2NvbXBvc2l0ZScsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBpc01vZGlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZGllczogW10sIFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLCBcbiAgICAgICAgICAgIGNvbXBvc2l0ZXM6IFtdLFxuICAgICAgICAgICAgbGFiZWw6ICdDb21wb3NpdGUnLFxuICAgICAgICAgICAgcGx1Z2luOiB7fVxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcG9zaXRlJ3MgYGlzTW9kaWZpZWRgIGZsYWcuIFxuICAgICAqIElmIGB1cGRhdGVQYXJlbnRzYCBpcyB0cnVlLCBhbGwgcGFyZW50cyB3aWxsIGJlIHNldCAoZGVmYXVsdDogZmFsc2UpLlxuICAgICAqIElmIGB1cGRhdGVDaGlsZHJlbmAgaXMgdHJ1ZSwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgc2V0IChkZWZhdWx0OiBmYWxzZSkuXG4gICAgICogQG1ldGhvZCBzZXRNb2RpZmllZFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVQYXJlbnRzPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZUNoaWxkcmVuPWZhbHNlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY29tcG9zaXRlLmlzTW9kaWZpZWQgPSBpc01vZGlmaWVkO1xuXG4gICAgICAgIGlmICh1cGRhdGVQYXJlbnRzICYmIGNvbXBvc2l0ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUucGFyZW50LCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbXBvc2l0ZSA9IGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjaGlsZENvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgc2luZ2xlIG9yIG11bHRpLWFkZCBmdW5jdGlvbi4gQWRkcyBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVBZGRgIGFuZCBgYWZ0ZXJBZGRgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9iamVjdCBBIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIC8vIHNraXAgYWRkaW5nIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICAgICAgaWYgKG9iai5wYXJlbnQgIT09IG9iaikge1xuICAgICAgICAgICAgICAgICAgICBDb21tb24ud2FybignQ29tcG9zaXRlLmFkZDogc2tpcHBlZCBhZGRpbmcgYSBjb21wb3VuZCBib2R5IHBhcnQgKHlvdSBtdXN0IGFkZCBpdHMgcGFyZW50IGluc3RlYWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlckFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyByZW1vdmUgZnVuY3Rpb24uIFJlbW92ZXMgb25lIG9yIG1hbnkgYm9keShzKSwgY29uc3RyYWludChzKSBvciBhIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlUmVtb3ZlYCBhbmQgYGFmdGVyUmVtb3ZlYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgcmVtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QsIGRlZXApIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9zaXRlIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIG9iamVjdHMgZnJvbSBjb21wb3NpdGVCIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgY29tcG9zaXRlQS5jb21wb3NpdGVzLnB1c2goY29tcG9zaXRlQik7XG4gICAgICAgIGNvbXBvc2l0ZUIucGFyZW50ID0gY29tcG9zaXRlQTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZUEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIsIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlQS5jb21wb3NpdGVzLCBjb21wb3NpdGVCKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0KGNvbXBvc2l0ZUEsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGVBLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGVBLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlQS5jb21wb3NpdGVzW2ldLCBjb21wb3NpdGVCLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlQXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29tcG9zaXRlcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZEJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQm9keSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgYm9keSkge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5ib2RpZXMsIGJvZHkpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQm9keUF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBib2R5IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnN0cmFpbnQgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29uc3RyYWludCBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb25zdHJhaW50IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29uc3RyYWludCwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGUuY29uc3RyYWludHMsIGNvbnN0cmFpbnQpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBjb25zdHJhaW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludEF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBjb21wb3NpdGVzIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IGNsZWFyaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2VlcFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNsZWFyID0gZnVuY3Rpb24oY29tcG9zaXRlLCBrZWVwU3RhdGljLCBkZWVwKSB7XG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuY2xlYXIoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGtlZXBTdGF0aWMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoa2VlcFN0YXRpYykge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXMuZmlsdGVyKGZ1bmN0aW9uKGJvZHkpIHsgcmV0dXJuIGJvZHkuaXNTdGF0aWM7IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBib2RpZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbEJvZGllc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtib2R5W119IEFsbCB0aGUgYm9kaWVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbEJvZGllcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5ib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBib2RpZXMgPSBib2RpZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICByZXR1cm4gYm9kaWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb25zdHJhaW50cyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbnN0cmFpbnRzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50W119IEFsbCB0aGUgY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb25zdHJhaW50cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gY29uc3RyYWludHMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJhaW50cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29tcG9zaXRlcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbXBvc2l0ZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbENvbXBvc2l0ZXNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlW119IEFsbCB0aGUgY29tcG9zaXRlc1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBjb21wb3NpdGVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb21wb3NpdGVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29tcG9zaXRlcyA9IGNvbXBvc2l0ZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBjb21wb3NpdGUgcmVjdXJzaXZlbHkgZm9yIGFuIG9iamVjdCBtYXRjaGluZyB0aGUgdHlwZSBhbmQgaWQgc3VwcGxpZWQsIG51bGwgaWYgbm90IGZvdW5kLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcmVxdWVzdGVkIG9iamVjdCwgaWYgZm91bmRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuZ2V0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBpZCwgdHlwZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyxcbiAgICAgICAgICAgIG9iamVjdDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKS5jb25jYXQoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvYmplY3RzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7IFxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdC5sZW5ndGggPT09IDAgPyBudWxsIDogb2JqZWN0WzBdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgZ2l2ZW4gb2JqZWN0KHMpIGZyb20gY29tcG9zaXRlQSB0byBjb21wb3NpdGVCIChlcXVhbCB0byBhIHJlbW92ZSBmb2xsb3dlZCBieSBhbiBhZGQpLlxuICAgICAqIEBtZXRob2QgbW92ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZUJ9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlQVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5tb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgb2JqZWN0cywgY29tcG9zaXRlQikge1xuICAgICAgICBDb21wb3NpdGUucmVtb3ZlKGNvbXBvc2l0ZUEsIG9iamVjdHMpO1xuICAgICAgICBDb21wb3NpdGUuYWRkKGNvbXBvc2l0ZUIsIG9iamVjdHMpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBuZXcgaWRzIGZvciBhbGwgb2JqZWN0cyBpbiB0aGUgY29tcG9zaXRlLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIHJlYmFzZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlYmFzZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKVxuICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlKSlcbiAgICAgICAgICAgIC5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3RzW2ldLmlkID0gQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gdGhlaXIgY3VycmVudCBwb3NpdGlvbnMsIFxuICAgICAqIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUudHJhbnNsYXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCB0cmFuc2xhdGlvbiwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2RpZXNbaV0sIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIGdpdmVuIHBvaW50LCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUucm90YXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCByb3RhdGlvbiwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkucm90YXRlKGJvZHksIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUsIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50LlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2NhbGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIGR4ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyBkeSAqIHNjYWxlWVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2NhbGUoYm9keSwgc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaW9uIG9mIHRoZSBib3VuZHMgb2YgYWxsIG9mIHRoZSBjb21wb3NpdGUncyBib2RpZXMuXG4gICAgICogQG1ldGhvZCBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlIFRoZSBjb21wb3NpdGUuXG4gICAgICogQHJldHVybnMge2JvdW5kc30gVGhlIGNvbXBvc2l0ZSBib3VuZHMuXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmJvdW5kcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpLFxuICAgICAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKGJvZHkuYm91bmRzLm1pbiwgYm9keS5ib3VuZHMubWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb3VuZHMuY3JlYXRlKHZlcnRpY2VzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBDb21wb3NpdGUuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbXBvc2l0ZVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgY29tcG9zaXRlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQ29tcG9zaXRlXCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb21wb3NpdGUgaGFzIGJlZW4gbW9kaWZpZWQgZHVyaW5nIHRoZSBjdXJyZW50IHN0ZXAuXG4gICAgICogTW9zdCBgTWF0dGVyLkNvbXBvc2l0ZWAgbWV0aG9kcyB3aWxsIGF1dG9tYXRpY2FsbHkgc2V0IHRoaXMgZmxhZyB0byBgdHJ1ZWAgdG8gaW5mb3JtIHRoZSBlbmdpbmUgb2YgY2hhbmdlcyB0byBiZSBoYW5kbGVkLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIGNoYW5nZSBpdCBtYW51YWxseSwgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuc2V0TW9kaWZpZWRgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc01vZGlmaWVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbXBvc2l0ZWAgdGhhdCBpcyB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9zaXRlLiBJdCBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYnkgdGhlIGBNYXR0ZXIuQ29tcG9zaXRlYCBtZXRob2RzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBCb2R5YCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGJvZGllcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxCb2RpZXNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2RpZXNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYENvbnN0cmFpbnRgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29uc3RyYWludHMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29uc3RyYWludHNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50c1xuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29tcG9zaXRlYCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGNvbXBvc2l0ZXMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29tcG9zaXRlc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbXBvc2l0ZXNcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGJvZHkgbW9kZWxzLlxuKiBBIGBNYXR0ZXIuQm9keWAgaXMgYSByaWdpZCBib2R5IHRoYXQgY2FuIGJlIHNpbXVsYXRlZCBieSBhIGBNYXR0ZXIuRW5naW5lYC5cbiogRmFjdG9yaWVzIGZvciBjb21tb25seSB1c2VkIGJvZHkgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgcmVjdGFuZ2xlcywgY2lyY2xlcyBhbmQgb3RoZXIgcG9seWdvbnMpIGNhbiBiZSBmb3VuZCBpbiB0aGUgbW9kdWxlIGBNYXR0ZXIuQm9kaWVzYC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cblxuKiBAY2xhc3MgQm9keVxuKi9cblxudmFyIEJvZHkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIFJlbmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBBeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIEJvZHkuX2luZXJ0aWFTY2FsZSA9IDQ7XG4gICAgQm9keS5fbmV4dENvbGxpZGluZ0dyb3VwSWQgPSAxO1xuICAgIEJvZHkuX25leHROb25Db2xsaWRpbmdHcm91cElkID0gLTE7XG4gICAgQm9keS5fbmV4dENhdGVnb3J5ID0gMHgwMDAxO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFZlcnRpY2VzIG11c3QgYmUgc3BlY2lmaWVkIGluIGNsb2Nrd2lzZSBvcmRlci5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgQm9keS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGlkOiBDb21tb24ubmV4dElkKCksXG4gICAgICAgICAgICB0eXBlOiAnYm9keScsXG4gICAgICAgICAgICBsYWJlbDogJ0JvZHknLFxuICAgICAgICAgICAgcGFydHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKCdMIDAgMCBMIDQwIDAgTCA0MCA0MCBMIDAgNDAnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGZvcmNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHRvcnF1ZTogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBjb25zdHJhaW50SW1wdWxzZTogeyB4OiAwLCB5OiAwLCBhbmdsZTogMCB9LFxuICAgICAgICAgICAgdG90YWxDb250YWN0czogMCxcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgYW5ndWxhclNwZWVkOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgaXNTZW5zb3I6IGZhbHNlLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgaXNTbGVlcGluZzogZmFsc2UsXG4gICAgICAgICAgICBtb3Rpb246IDAsXG4gICAgICAgICAgICBzbGVlcFRocmVzaG9sZDogNjAsXG4gICAgICAgICAgICBkZW5zaXR5OiAwLjAwMSxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuMSxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiAwLjUsXG4gICAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsb3A6IDAuMDUsXG4gICAgICAgICAgICB0aW1lU2NhbGU6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeFNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB5U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHhPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiBudWxsLFxuICAgICAgICAgICAgYm91bmRzOiBudWxsLFxuICAgICAgICAgICAgY2hhbWZlcjogbnVsbCxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogbnVsbCxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogMCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGF4ZXM6IG51bGwsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgbWFzczogMCxcbiAgICAgICAgICAgIGluZXJ0aWE6IDAsXG4gICAgICAgICAgICBfb3JpZ2luYWw6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYm9keSA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIF9pbml0UHJvcGVydGllcyhib2R5LCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgZ3JvdXAgaW5kZXggZm9yIHdoaWNoIGJvZGllcyB3aWxsIGNvbGxpZGUuXG4gICAgICogSWYgYGlzTm9uQ29sbGlkaW5nYCBpcyBgdHJ1ZWAsIHJldHVybnMgdGhlIG5leHQgdW5pcXVlIGdyb3VwIGluZGV4IGZvciB3aGljaCBib2RpZXMgd2lsbCBfbm90XyBjb2xsaWRlLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgbmV4dEdyb3VwXG4gICAgICogQHBhcmFtIHtib29sfSBbaXNOb25Db2xsaWRpbmc9ZmFsc2VdXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgZ3JvdXAgaW5kZXhcbiAgICAgKi9cbiAgICBCb2R5Lm5leHRHcm91cCA9IGZ1bmN0aW9uKGlzTm9uQ29sbGlkaW5nKSB7XG4gICAgICAgIGlmIChpc05vbkNvbGxpZGluZylcbiAgICAgICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Tm9uQ29sbGlkaW5nR3JvdXBJZC0tO1xuXG4gICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Q29sbGlkaW5nR3JvdXBJZCsrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBjYXRlZ29yeSBiaXRmaWVsZCAoc3RhcnRpbmcgYWZ0ZXIgdGhlIGluaXRpYWwgZGVmYXVsdCBjYXRlZ29yeSBgMHgwMDAxYCkuXG4gICAgICogVGhlcmUgYXJlIDMyIGF2YWlsYWJsZS4gU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBuZXh0Q2F0ZWdvcnlcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBjYXRlZ29yeSBiaXRmaWVsZFxuICAgICAqL1xuICAgIEJvZHkubmV4dENhdGVnb3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEJvZHkuX25leHRDYXRlZ29yeSA9IEJvZHkuX25leHRDYXRlZ29yeSA8PCAxO1xuICAgICAgICByZXR1cm4gQm9keS5fbmV4dENhdGVnb3J5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBib2R5IHByb3BlcnRpZXMuXG4gICAgICogQG1ldGhvZCBfaW5pdFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7fSBbb3B0aW9uc11cbiAgICAgKi9cbiAgICB2YXIgX2luaXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24oYm9keSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAvLyBpbml0IHJlcXVpcmVkIHByb3BlcnRpZXMgKG9yZGVyIGlzIGltcG9ydGFudClcbiAgICAgICAgQm9keS5zZXQoYm9keSwge1xuICAgICAgICAgICAgYm91bmRzOiBib2R5LmJvdW5kcyB8fCBCb3VuZHMuY3JlYXRlKGJvZHkudmVydGljZXMpLFxuICAgICAgICAgICAgcG9zaXRpb25QcmV2OiBib2R5LnBvc2l0aW9uUHJldiB8fCBWZWN0b3IuY2xvbmUoYm9keS5wb3NpdGlvbiksXG4gICAgICAgICAgICBhbmdsZVByZXY6IGJvZHkuYW5nbGVQcmV2IHx8IGJvZHkuYW5nbGUsXG4gICAgICAgICAgICB2ZXJ0aWNlczogYm9keS52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHBhcnRzOiBib2R5LnBhcnRzIHx8IFtib2R5XSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBib2R5LmlzU3RhdGljLFxuICAgICAgICAgICAgaXNTbGVlcGluZzogYm9keS5pc1NsZWVwaW5nLFxuICAgICAgICAgICAgcGFyZW50OiBib2R5LnBhcmVudCB8fCBib2R5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFZlcnRpY2VzLnJvdGF0ZShib2R5LnZlcnRpY2VzLCBib2R5LmFuZ2xlLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgQXhlcy5yb3RhdGUoYm9keS5heGVzLCBib2R5LmFuZ2xlKTtcbiAgICAgICAgQm91bmRzLnVwZGF0ZShib2R5LmJvdW5kcywgYm9keS52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG5cbiAgICAgICAgLy8gYWxsb3cgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHByb3BlcnRpZXNcbiAgICAgICAgQm9keS5zZXQoYm9keSwge1xuICAgICAgICAgICAgYXhlczogb3B0aW9ucy5heGVzIHx8IGJvZHkuYXhlcyxcbiAgICAgICAgICAgIGFyZWE6IG9wdGlvbnMuYXJlYSB8fCBib2R5LmFyZWEsXG4gICAgICAgICAgICBtYXNzOiBvcHRpb25zLm1hc3MgfHwgYm9keS5tYXNzLFxuICAgICAgICAgICAgaW5lcnRpYTogb3B0aW9ucy5pbmVydGlhIHx8IGJvZHkuaW5lcnRpYVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZW5kZXIgcHJvcGVydGllc1xuICAgICAgICB2YXIgZGVmYXVsdEZpbGxTdHlsZSA9IChib2R5LmlzU3RhdGljID8gJyMxNDE1MWYnIDogQ29tbW9uLmNob29zZShbJyNmMTk2NDgnLCAnI2Y1ZDI1OScsICcjZjU1YTNjJywgJyMwNjNlN2InLCAnI2VjZWNkMSddKSksXG4gICAgICAgICAgICBkZWZhdWx0U3Ryb2tlU3R5bGUgPSBib2R5LmlzU3RhdGljID8gJyM1NTUnIDogJyNjY2MnLFxuICAgICAgICAgICAgZGVmYXVsdExpbmVXaWR0aCA9IGJvZHkuaXNTdGF0aWMgJiYgYm9keS5yZW5kZXIuZmlsbFN0eWxlID09PSBudWxsID8gMSA6IDA7XG4gICAgICAgIGJvZHkucmVuZGVyLmZpbGxTdHlsZSA9IGJvZHkucmVuZGVyLmZpbGxTdHlsZSB8fCBkZWZhdWx0RmlsbFN0eWxlO1xuICAgICAgICBib2R5LnJlbmRlci5zdHJva2VTdHlsZSA9IGJvZHkucmVuZGVyLnN0cm9rZVN0eWxlIHx8IGRlZmF1bHRTdHJva2VTdHlsZTtcbiAgICAgICAgYm9keS5yZW5kZXIubGluZVdpZHRoID0gYm9keS5yZW5kZXIubGluZVdpZHRoIHx8IGRlZmF1bHRMaW5lV2lkdGg7XG4gICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS54T2Zmc2V0ICs9IC0oYm9keS5ib3VuZHMubWluLnggLSBib2R5LnBvc2l0aW9uLngpIC8gKGJvZHkuYm91bmRzLm1heC54IC0gYm9keS5ib3VuZHMubWluLngpO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueU9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi55IC0gYm9keS5wb3NpdGlvbi55KSAvIChib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBwcm9wZXJ0eSBhbmQgYSB2YWx1ZSAob3IgbWFwIG9mKSwgc2V0cyB0aGUgcHJvcGVydHkocykgb24gdGhlIGJvZHksIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBzZXR0ZXIgZnVuY3Rpb25zIGlmIHRoZXkgZXhpc3QuXG4gICAgICogUHJlZmVyIHRvIHVzZSB0aGUgYWN0dWFsIHNldHRlciBmdW5jdGlvbnMgaW4gcGVyZm9ybWFuY2UgY3JpdGljYWwgc2l0dWF0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7fSBzZXR0aW5ncyBBIHByb3BlcnR5IG5hbWUgKG9yIG1hcCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMpIHRvIHNldCBvbiB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0ge30gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBpZiBgc2V0dGluZ3NgIGlzIGEgc2luZ2xlIHByb3BlcnR5IG5hbWUuXG4gICAgICovXG4gICAgQm9keS5zZXQgPSBmdW5jdGlvbihib2R5LCBzZXR0aW5ncywgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHNldHRpbmdzO1xuICAgICAgICAgICAgc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdzW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2V0dGluZ3MsIHByb3BlcnR5KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFsdWUgPSBzZXR0aW5nc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2lzU3RhdGljJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFN0YXRpYyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc1NsZWVwaW5nJzpcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFzcyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbnNpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0RGVuc2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmVydGlhJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVydGljZXMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVydGljZXMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zaXRpb24nOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5nbGUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5ndWxhclZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXJ0cyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQYXJ0cyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjZW50cmUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0Q2VudHJlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYm9keVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkgYXMgc3RhdGljLCBpbmNsdWRpbmcgaXNTdGF0aWMgZmxhZyBhbmQgc2V0dGluZyBtYXNzIGFuZCBpbmVydGlhIHRvIEluZmluaXR5LlxuICAgICAqIEBtZXRob2Qgc2V0U3RhdGljXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sfSBpc1N0YXRpY1xuICAgICAqL1xuICAgIEJvZHkuc2V0U3RhdGljID0gZnVuY3Rpb24oYm9keSwgaXNTdGF0aWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmlzU3RhdGljID0gaXNTdGF0aWM7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIHBhcnQuX29yaWdpbmFsID0ge1xuICAgICAgICAgICAgICAgICAgICByZXN0aXR1dGlvbjogcGFydC5yZXN0aXR1dGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJpY3Rpb246IHBhcnQuZnJpY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1hc3M6IHBhcnQubWFzcyxcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYTogcGFydC5pbmVydGlhLFxuICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiBwYXJ0LmRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VNYXNzOiBwYXJ0LmludmVyc2VNYXNzLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlSW5lcnRpYTogcGFydC5pbnZlcnNlSW5lcnRpYVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LmZyaWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1hc3MgPSBwYXJ0LmluZXJ0aWEgPSBwYXJ0LmRlbnNpdHkgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VNYXNzID0gcGFydC5pbnZlcnNlSW5lcnRpYSA9IDA7XG5cbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi54ID0gcGFydC5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb25QcmV2LnkgPSBwYXJ0LnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgcGFydC5hbmdsZVByZXYgPSBwYXJ0LmFuZ2xlO1xuICAgICAgICAgICAgICAgIHBhcnQuYW5ndWxhclZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5tb3Rpb24gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0Ll9vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgIHBhcnQucmVzdGl0dXRpb24gPSBwYXJ0Ll9vcmlnaW5hbC5yZXN0aXR1dGlvbjtcbiAgICAgICAgICAgICAgICBwYXJ0LmZyaWN0aW9uID0gcGFydC5fb3JpZ2luYWwuZnJpY3Rpb247XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5fb3JpZ2luYWwubWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmluZXJ0aWEgPSBwYXJ0Ll9vcmlnaW5hbC5pbmVydGlhO1xuICAgICAgICAgICAgICAgIHBhcnQuZGVuc2l0eSA9IHBhcnQuX29yaWdpbmFsLmRlbnNpdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuX29yaWdpbmFsLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZUluZXJ0aWEgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlSW5lcnRpYTtcblxuICAgICAgICAgICAgICAgIHBhcnQuX29yaWdpbmFsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtYXNzIG9mIHRoZSBib2R5LiBJbnZlcnNlIG1hc3MsIGRlbnNpdHkgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXRNYXNzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKi9cbiAgICBCb2R5LnNldE1hc3MgPSBmdW5jdGlvbihib2R5LCBtYXNzKSB7XG4gICAgICAgIHZhciBtb21lbnQgPSBib2R5LmluZXJ0aWEgLyAoYm9keS5tYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IG1vbWVudCAqIChtYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuXG4gICAgICAgIGJvZHkubWFzcyA9IG1hc3M7XG4gICAgICAgIGJvZHkuaW52ZXJzZU1hc3MgPSAxIC8gYm9keS5tYXNzO1xuICAgICAgICBib2R5LmRlbnNpdHkgPSBib2R5Lm1hc3MgLyBib2R5LmFyZWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHkuIE1hc3MgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXREZW5zaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbnNpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldERlbnNpdHkgPSBmdW5jdGlvbihib2R5LCBkZW5zaXR5KSB7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBkZW5zaXR5ICogYm9keS5hcmVhKTtcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKGkuZS4gc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgYm9keS4gXG4gICAgICogSW52ZXJzZSBpbmVydGlhIGlzIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuIE1hc3MgaXMgbm90IGNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRJbmVydGlhXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZXJ0aWFcbiAgICAgKi9cbiAgICBCb2R5LnNldEluZXJ0aWEgPSBmdW5jdGlvbihib2R5LCBpbmVydGlhKSB7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IGluZXJ0aWE7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5J3MgdmVydGljZXMgYW5kIHVwZGF0ZXMgYm9keSBwcm9wZXJ0aWVzIGFjY29yZGluZ2x5LCBpbmNsdWRpbmcgaW5lcnRpYSwgYXJlYSBhbmQgbWFzcyAod2l0aCByZXNwZWN0IHRvIGBib2R5LmRlbnNpdHlgKS5cbiAgICAgKiBWZXJ0aWNlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgdG8gYmUgb3JpZW50YXRlZCBhcm91bmQgdGhlaXIgY2VudHJlIG9mIG1hc3MgYXMgdGhlIG9yaWdpbi5cbiAgICAgKiBUaGV5IGFyZSB0aGVuIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlZCB0byB3b3JsZCBzcGFjZSBiYXNlZCBvbiBgYm9keS5wb3NpdGlvbmAuXG4gICAgICpcbiAgICAgKiBUaGUgYHZlcnRpY2VzYCBhcmd1bWVudCBzaG91bGQgYmUgcGFzc2VkIGFzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgKG9yIGEgYE1hdHRlci5WZXJ0aWNlc2AgYXJyYXkpLlxuICAgICAqIFZlcnRpY2VzIG11c3QgZm9ybSBhIGNvbnZleCBodWxsLCBjb25jYXZlIGh1bGxzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXRWZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yW119IHZlcnRpY2VzXG4gICAgICovXG4gICAgQm9keS5zZXRWZXJ0aWNlcyA9IGZ1bmN0aW9uKGJvZHksIHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGNoYW5nZSB2ZXJ0aWNlc1xuICAgICAgICBpZiAodmVydGljZXNbMF0uYm9keSA9PT0gYm9keSkge1xuICAgICAgICAgICAgYm9keS52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNyZWF0ZSh2ZXJ0aWNlcywgYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcHJvcGVydGllc1xuICAgICAgICBib2R5LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgYm9keS5hcmVhID0gVmVydGljZXMuYXJlYShib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIGJvZHkuZGVuc2l0eSAqIGJvZHkuYXJlYSk7XG5cbiAgICAgICAgLy8gb3JpZW50IHZlcnRpY2VzIGFyb3VuZCB0aGUgY2VudHJlIG9mIG1hc3MgYXQgb3JpZ2luICgwLCAwKVxuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMuY2VudHJlKGJvZHkudmVydGljZXMpO1xuICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgY2VudHJlLCAtMSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgd2hpbGUgdmVydGljZXMgYXJlIGF0IG9yaWdpbiAoMCwgMClcbiAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIEJvZHkuX2luZXJ0aWFTY2FsZSAqIFZlcnRpY2VzLmluZXJ0aWEoYm9keS52ZXJ0aWNlcywgYm9keS5tYXNzKSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdlb21ldHJ5XG4gICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgQm91bmRzLnVwZGF0ZShib2R5LmJvdW5kcywgYm9keS52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBhcnRzIG9mIHRoZSBgYm9keWAgYW5kIHVwZGF0ZXMgbWFzcywgaW5lcnRpYSBhbmQgY2VudHJvaWQuXG4gICAgICogRWFjaCBwYXJ0IHdpbGwgaGF2ZSBpdHMgcGFyZW50IHNldCB0byBgYm9keWAuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgY29udmV4IGh1bGwgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNvbXB1dGVkIGFuZCBzZXQgb24gYGJvZHlgLCB1bmxlc3MgYGF1dG9IdWxsYCBpcyBzZXQgdG8gYGZhbHNlLmBcbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBlbnN1cmUgdGhhdCB0aGUgZmlyc3QgcGFydCBpbiBgYm9keS5wYXJ0c2Agd2lsbCBhbHdheXMgYmUgdGhlIGBib2R5YC5cbiAgICAgKiBAbWV0aG9kIHNldFBhcnRzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIFtib2R5XSBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2F1dG9IdWxsPXRydWVdXG4gICAgICovXG4gICAgQm9keS5zZXRQYXJ0cyA9IGZ1bmN0aW9uKGJvZHksIHBhcnRzLCBhdXRvSHVsbCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICAvLyBhZGQgYWxsIHRoZSBwYXJ0cywgZW5zdXJpbmcgdGhhdCB0aGUgZmlyc3QgcGFydCBpcyBhbHdheXMgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMCk7XG4gICAgICAgIGJvZHkucGFydHMubGVuZ3RoID0gMDtcbiAgICAgICAgYm9keS5wYXJ0cy5wdXNoKGJvZHkpO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IGJvZHkpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBhcmVudCA9IGJvZHk7XG4gICAgICAgICAgICAgICAgYm9keS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGF1dG9IdWxsID0gdHlwZW9mIGF1dG9IdWxsICE9PSAndW5kZWZpbmVkJyA/IGF1dG9IdWxsIDogdHJ1ZTtcblxuICAgICAgICAvLyBmaW5kIHRoZSBjb252ZXggaHVsbCBvZiBhbGwgcGFydHMgdG8gc2V0IG9uIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYXV0b0h1bGwpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQocGFydHNbaV0udmVydGljZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcblxuICAgICAgICAgICAgdmFyIGh1bGwgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICBodWxsQ2VudHJlID0gVmVydGljZXMuY2VudHJlKGh1bGwpO1xuXG4gICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIGh1bGwpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGh1bGxDZW50cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VtIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgdmFyIHRvdGFsID0gQm9keS5fdG90YWxQcm9wZXJ0aWVzKGJvZHkpO1xuXG4gICAgICAgIGJvZHkuYXJlYSA9IHRvdGFsLmFyZWE7XG4gICAgICAgIGJvZHkucGFyZW50ID0gYm9keTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueSA9IHRvdGFsLmNlbnRyZS55O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSB0b3RhbC5jZW50cmUueTtcblxuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgdG90YWwubWFzcyk7XG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbC5pbmVydGlhKTtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB0b3RhbC5jZW50cmUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNlbnRyZSBvZiBtYXNzIG9mIHRoZSBib2R5LiBcbiAgICAgKiBUaGUgYGNlbnRyZWAgaXMgYSB2ZWN0b3IgaW4gd29ybGQtc3BhY2UgdW5sZXNzIGByZWxhdGl2ZWAgaXMgc2V0LCBpbiB3aGljaCBjYXNlIGl0IGlzIGEgdHJhbnNsYXRpb24uXG4gICAgICogVGhlIGNlbnRyZSBvZiBtYXNzIGlzIHRoZSBwb2ludCB0aGUgYm9keSByb3RhdGVzIGFib3V0IGFuZCBjYW4gYmUgdXNlZCB0byBzaW11bGF0ZSBub24tdW5pZm9ybSBkZW5zaXR5LlxuICAgICAqIFRoaXMgaXMgZXF1YWwgdG8gbW92aW5nIGBib2R5LnBvc2l0aW9uYCBidXQgbm90IHRoZSBgYm9keS52ZXJ0aWNlc2AuXG4gICAgICogSW52YWxpZCBpZiB0aGUgYGNlbnRyZWAgZmFsbHMgb3V0c2lkZSB0aGUgYm9keSdzIGNvbnZleCBodWxsLlxuICAgICAqIEBtZXRob2Qgc2V0Q2VudHJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGNlbnRyZVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gcmVsYXRpdmVcbiAgICAgKi9cbiAgICBCb2R5LnNldENlbnRyZSA9IGZ1bmN0aW9uKGJvZHksIGNlbnRyZSwgcmVsYXRpdmUpIHtcbiAgICAgICAgaWYgKCFyZWxhdGl2ZSkge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGNlbnRyZS54IC0gKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGNlbnRyZS55IC0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSBjZW50cmUueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGNlbnRyZS55O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGNlbnRyZS55O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBib2R5IGluc3RhbnRseS4gVmVsb2NpdHksIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvZHkuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvc2l0aW9uLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBkZWx0YS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGRlbHRhLnk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ2xlIG9mIHRoZSBib2R5IGluc3RhbnRseS4gQW5ndWxhciB2ZWxvY2l0eSwgcG9zaXRpb24sIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ2xlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQm9keS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGJvZHksIGFuZ2xlKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IGFuZ2xlIC0gYm9keS5hbmdsZTtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgKz0gZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmFuZ2xlICs9IGRlbHRhO1xuICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGRlbHRhLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgZGVsdGEsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpbmVhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFBvc2l0aW9uLCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBAbWV0aG9kIHNldFZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLnggLSB2ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55IC0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gdmVsb2NpdHkueDtcbiAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ3VsYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBQb3NpdGlvbiwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICogQG1ldGhvZCBzZXRBbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZSAtIHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IE1hdGguYWJzKGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uLCB3aXRob3V0IGltcGFydGluZyBhbnkgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKi9cbiAgICBCb2R5LnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgVmVjdG9yLmFkZChib2R5LnBvc2l0aW9uLCB0cmFuc2xhdGlvbikpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgYm9keSBieSBhIGdpdmVuIGFuZ2xlIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IGFuZ2xlLCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5yb3RhdGUgPSBmdW5jdGlvbihib2R5LCByb3RhdGlvbiwgcG9pbnQpIHtcbiAgICAgICAgaWYgKCFwb2ludCkge1xuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgYm9keS5hbmdsZSArIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGJvZHksIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50IChkZWZhdWx0IGlzIGJvZHkgY2VudHJlKS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqL1xuICAgIEJvZHkuc2NhbGUgPSBmdW5jdGlvbihib2R5LCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgdmFyIHRvdGFsQXJlYSA9IDAsXG4gICAgICAgICAgICB0b3RhbEluZXJ0aWEgPSAwO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgYm9keS5wb3NpdGlvbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgLy8gc2NhbGUgdmVydGljZXNcbiAgICAgICAgICAgIFZlcnRpY2VzLnNjYWxlKHBhcnQudmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBwYXJ0LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIHBhcnQuYXJlYSA9IFZlcnRpY2VzLmFyZWEocGFydC52ZXJ0aWNlcyk7XG4gICAgICAgICAgICBCb2R5LnNldE1hc3MocGFydCwgYm9keS5kZW5zaXR5ICogcGFydC5hcmVhKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgKHJlcXVpcmVzIHZlcnRpY2VzIHRvIGJlIGF0IG9yaWdpbilcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IC1wYXJ0LnBvc2l0aW9uLngsIHk6IC1wYXJ0LnBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEocGFydCwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShwYXJ0LnZlcnRpY2VzLCBwYXJ0Lm1hc3MpKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IHBhcnQucG9zaXRpb24ueCwgeTogcGFydC5wb3NpdGlvbi55IH0pO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgICAgIHRvdGFsSW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjYWxlIHBvc2l0aW9uXG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggPSBwb2ludC54ICsgKHBhcnQucG9zaXRpb24ueCAtIHBvaW50LngpICogc2NhbGVYO1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ID0gcG9pbnQueSArIChwYXJ0LnBvc2l0aW9uLnkgLSBwb2ludC55KSAqIHNjYWxlWTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvdW5kc1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYm9keS5hcmVhID0gdG90YWxBcmVhO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogdG90YWxBcmVhKTtcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWxJbmVydGlhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBjaXJjbGVzXG4gICAgICAgIGlmIChib2R5LmNpcmNsZVJhZGl1cykgeyBcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSkge1xuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzICo9IHNjYWxlWDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYm9keSBpcyBubyBsb25nZXIgYSBjaXJjbGVcbiAgICAgICAgICAgICAgICBib2R5LmNpcmNsZVJhZGl1cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzaW11bGF0aW9uIHN0ZXAgZm9yIHRoZSBnaXZlbiBgYm9keWAsIGluY2x1ZGluZyB1cGRhdGluZyBwb3NpdGlvbiBhbmQgYW5nbGUgdXNpbmcgVmVybGV0IGludGVncmF0aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvblxuICAgICAqL1xuICAgIEJvZHkudXBkYXRlID0gZnVuY3Rpb24oYm9keSwgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhVGltZVNxdWFyZWQgPSBNYXRoLnBvdyhkZWx0YVRpbWUgKiB0aW1lU2NhbGUgKiBib2R5LnRpbWVTY2FsZSwgMik7XG5cbiAgICAgICAgLy8gZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxuICAgICAgICB2YXIgZnJpY3Rpb25BaXIgPSAxIC0gYm9keS5mcmljdGlvbkFpciAqIHRpbWVTY2FsZSAqIGJvZHkudGltZVNjYWxlLFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WCA9IGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngsXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZZID0gYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueTtcblxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgd2l0aCBWZXJsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gKHZlbG9jaXR5UHJldlggKiBmcmljdGlvbkFpciAqIGNvcnJlY3Rpb24pICsgKGJvZHkuZm9yY2UueCAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAodmVsb2NpdHlQcmV2WSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS5mb3JjZS55IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG5cbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueDtcbiAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcblxuICAgICAgICAvLyB1cGRhdGUgYW5ndWxhciB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9ICgoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS50b3JxdWUgLyBib2R5LmluZXJ0aWEpICogZGVsdGFUaW1lU3F1YXJlZDtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlICs9IGJvZHkuYW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHRyYWNrIHNwZWVkIGFuZCBhY2NlbGVyYXRpb25cbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgYm9keSBnZW9tZXRyeVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2R5LmFuZ3VsYXJWZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgZm9yY2UgdG8gYSBib2R5IGZyb20gYSBnaXZlbiB3b3JsZC1zcGFjZSBwb3NpdGlvbiwgaW5jbHVkaW5nIHJlc3VsdGluZyB0b3JxdWUuXG4gICAgICogQG1ldGhvZCBhcHBseUZvcmNlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGZvcmNlXG4gICAgICovXG4gICAgQm9keS5hcHBseUZvcmNlID0gZnVuY3Rpb24oYm9keSwgcG9zaXRpb24sIGZvcmNlKSB7XG4gICAgICAgIGJvZHkuZm9yY2UueCArPSBmb3JjZS54O1xuICAgICAgICBib2R5LmZvcmNlLnkgKz0gZm9yY2UueTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHsgeDogcG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSB9O1xuICAgICAgICBib2R5LnRvcnF1ZSArPSBvZmZzZXQueCAqIGZvcmNlLnkgLSBvZmZzZXQueSAqIGZvcmNlLng7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bXMgb2YgdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keS5cbiAgICAgKiBAbWV0aG9kIF90b3RhbFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBCb2R5Ll90b3RhbFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0OlxuICAgICAgICAvLyBodHRwczovL2Vjb3Vyc2VzLm91LmVkdS9jZ2ktYmluL2Vib29rLmNnaT9kb2M9JnRvcGljPXN0JmNoYXBfc2VjPTA3LjImcGFnZT10aGVvcnlcbiAgICAgICAgLy8gaHR0cDovL291dHB1dC50by9zaWRld2F5L2RlZmF1bHQuYXNwP3Fubz0xMjExMDAwODdcblxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIG1hc3M6IDAsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIGNlbnRyZTogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBmb3IgKHZhciBpID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzID0gcGFydC5tYXNzICE9PSBJbmZpbml0eSA/IHBhcnQubWFzcyA6IDE7XG5cbiAgICAgICAgICAgIHByb3BlcnRpZXMubWFzcyArPSBtYXNzO1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcmVhICs9IHBhcnQuYXJlYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuaW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5hZGQocHJvcGVydGllcy5jZW50cmUsIFZlY3Rvci5tdWx0KHBhcnQucG9zaXRpb24sIG1hc3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmRpdihwcm9wZXJ0aWVzLmNlbnRyZSwgcHJvcGVydGllcy5tYXNzKTtcblxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgc3RhcnRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcFN0YXJ0XG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgc3RhcnRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IGVuZHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwRW5kXG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgZW5kZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYEJvZHkuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImJvZHlcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGJvZGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQm9keVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBib2RpZXMgdGhhdCBtYWtlIHVwIHRoaXMgYm9keS4gXG4gICAgICogVGhlIGZpcnN0IGJvZHkgaW4gdGhlIGFycmF5IG11c3QgYWx3YXlzIGJlIGEgc2VsZiByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgYm9keSBpbnN0YW5jZS5cbiAgICAgKiBBbGwgYm9kaWVzIGluIHRoZSBgcGFydHNgIGFycmF5IHRvZ2V0aGVyIGZvcm0gYSBzaW5nbGUgcmlnaWQgY29tcG91bmQgYm9keS5cbiAgICAgKiBQYXJ0cyBhcmUgYWxsb3dlZCB0byBvdmVybGFwLCBoYXZlIGdhcHMgb3IgaG9sZXMgb3IgZXZlbiBmb3JtIGNvbmNhdmUgYm9kaWVzLlxuICAgICAqIFBhcnRzIHRoZW1zZWx2ZXMgc2hvdWxkIG5ldmVyIGJlIGFkZGVkIHRvIGEgYFdvcmxkYCwgb25seSB0aGUgcGFyZW50IGJvZHkgc2hvdWxkIGJlLlxuICAgICAqIFVzZSBgQm9keS5zZXRQYXJ0c2Agd2hlbiBzZXR0aW5nIHBhcnRzIHRvIGVuc3VyZSBjb3JyZWN0IHVwZGF0ZXMgb2YgYWxsIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFydHNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxmIHJlZmVyZW5jZSBpZiB0aGUgYm9keSBpcyBfbm90XyBhIHBhcnQgb2YgYW5vdGhlciBib2R5LlxuICAgICAqIE90aGVyd2lzZSB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBib2R5IHRoYXQgdGhpcyBpcyBhIHBhcnQgb2YuXG4gICAgICogU2VlIGBib2R5LnBhcnRzYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHNwZWNpZnlpbmcgdGhlIGFuZ2xlIG9mIHRoZSBib2R5LCBpbiByYWRpYW5zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFuZ2xlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYFZlY3RvcmAgb2JqZWN0cyB0aGF0IHNwZWNpZnkgdGhlIGNvbnZleCBodWxsIG9mIHRoZSByaWdpZCBib2R5LlxuICAgICAqIFRoZXNlIHNob3VsZCBiZSBwcm92aWRlZCBhYm91dCB0aGUgb3JpZ2luIGAoMCwgMClgLiBFLmcuXG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBXaGVuIHBhc3NlZCB2aWEgYEJvZHkuY3JlYXRlYCwgdGhlIHZlcnRpY2VzIGFyZSB0cmFuc2xhdGVkIHJlbGF0aXZlIHRvIGBib2R5LnBvc2l0aW9uYCAoaS5lLiB3b3JsZC1zcGFjZSwgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uKS5cbiAgICAgKiBUaGUgYFZlY3RvcmAgb2JqZWN0cyBhcmUgYWxzbyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIHByb3BlcnRpZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uLiBcbiAgICAgKlxuICAgICAqIE90aGVyIHByb3BlcnRpZXMgc3VjaCBhcyBgaW5lcnRpYWAgYW5kIGBib3VuZHNgIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgcGFzc2VkIHZlcnRpY2VzICh1bmxlc3MgcHJvdmlkZWQgdmlhIGBvcHRpb25zYCkuXG4gICAgICogQ29uY2F2ZSBodWxscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuIFRoZSBtb2R1bGUgYE1hdHRlci5WZXJ0aWNlc2AgY29udGFpbnMgdXNlZnVsIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB2ZXJ0aWNlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZXJ0aWNlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIHRoZSBib2R5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGZvcmNlIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmb3JjZVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0b3JxdWUgKHR1cm5pbmcgZm9yY2UpIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRvcnF1ZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IHNwZWVkIG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlIChpdCdzIHRoZSBtYWduaXR1ZGUgb2YgYGJvZHkudmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBzcGVlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IGFuZ3VsYXIgc3BlZWQgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUgKGl0J3MgdGhlIG1hZ25pdHVkZSBvZiBgYm9keS5hbmd1bGFyVmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyU3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyB2ZWxvY2l0eSBkaXJlY3RseSwgeW91IHNob3VsZCBlaXRoZXIgYXBwbHkgYSBmb3JjZSBvciBzaW1wbHkgY2hhbmdlIHRoZSBib2R5J3MgYHBvc2l0aW9uYCAoYXMgdGhlIGVuZ2luZSB1c2VzIHBvc2l0aW9uLVZlcmxldCBpbnRlZ3JhdGlvbikuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgdmVsb2NpdHlcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyBhbmd1bGFyIHZlbG9jaXR5IGRpcmVjdGx5LCB5b3Ugc2hvdWxkIGFwcGx5IGEgdG9ycXVlIG9yIHNpbXBseSBjaGFuZ2UgdGhlIGJvZHkncyBgYW5nbGVgIChhcyB0aGUgZW5naW5lIHVzZXMgcG9zaXRpb24tVmVybGV0IGludGVncmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgY29uc2lkZXJlZCBzdGF0aWMuIEEgc3RhdGljIGJvZHkgY2FuIG5ldmVyIGNoYW5nZSBwb3NpdGlvbiBvciBhbmdsZSBhbmQgaXMgY29tcGxldGVseSBmaXhlZC5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHN0YXRpYyBhZnRlciBpdHMgY3JlYXRpb24sIHlvdSBzaG91bGQgdXNlIGBCb2R5LnNldFN0YXRpY2AgYXMgdGhpcyByZXF1aXJlcyBtb3JlIHRoYW4ganVzdCBzZXR0aW5nIHRoaXMgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1N0YXRpY1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGEgc2Vuc29yLiBTZW5zb3IgdHJpZ2dlcnMgY29sbGlzaW9uIGV2ZW50cywgYnV0IGRvZXNuJ3QgcmVhY3Qgd2l0aCBjb2xsaWRpbmcgYm9keSBwaHlzaWNhbGx5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2Vuc29yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYm9keSBpcyBjb25zaWRlcmVkIHNsZWVwaW5nLiBBIHNsZWVwaW5nIGJvZHkgYWN0cyBzaW1pbGFyIHRvIGEgc3RhdGljIGJvZHksIGV4Y2VwdCBpdCBpcyBvbmx5IHRlbXBvcmFyeSBhbmQgY2FuIGJlIGF3b2tlbi5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHNsZWVwaW5nLCB5b3Ugc2hvdWxkIHVzZSBgU2xlZXBpbmcuc2V0YCBhcyB0aGlzIHJlcXVpcmVzIG1vcmUgdGhhbiBqdXN0IHNldHRpbmcgdGhpcyBmbGFnLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQgYSBib2R5IGN1cnJlbnRseSBoYXMgKGEgY29tYmluYXRpb24gb2YgYHNwZWVkYCBhbmQgYGFuZ3VsYXJTcGVlZGApLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZS5cbiAgICAgKiBJdCBpcyB1c2VkIGFuZCB1cGRhdGVkIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgZHVyaW5nIHNpbXVsYXRpb24gdG8gZGVjaWRlIGlmIGEgYm9keSBoYXMgY29tZSB0byByZXN0LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IG1vdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgdXBkYXRlcyBpbiB3aGljaCB0aGlzIGJvZHkgbXVzdCBoYXZlIG5lYXItemVybyB2ZWxvY2l0eSBiZWZvcmUgaXQgaXMgc2V0IGFzIHNsZWVwaW5nIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgKGlmIHNsZWVwaW5nIGlzIGVuYWJsZWQgYnkgdGhlIGVuZ2luZSkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc2xlZXBUaHJlc2hvbGRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2MFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHksIHRoYXQgaXMgaXRzIG1hc3MgcGVyIHVuaXQgYXJlYS5cbiAgICAgKiBJZiB5b3UgcGFzcyB0aGUgZGVuc2l0eSB2aWEgYEJvZHkuY3JlYXRlYCB0aGUgYG1hc3NgIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmb3IgeW91IGJhc2VkIG9uIHRoZSBzaXplIChhcmVhKSBvZiB0aGUgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgZ2VuZXJhbGx5IHByZWZlcmFibGUgdG8gc2ltcGx5IHNldHRpbmcgbWFzcyBhbmQgYWxsb3dzIGZvciBtb3JlIGludHVpdGl2ZSBkZWZpbml0aW9uIG9mIG1hdGVyaWFscyAoZS5nLiByb2NrIGhhcyBhIGhpZ2hlciBkZW5zaXR5IHRoYW4gd29vZCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVuc2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbWFzcyBvZiB0aGUgYm9keSwgYWx0aG91Z2ggaXQgbWF5IGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gc3BlY2lmeSB0aGUgYGRlbnNpdHlgIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW52ZXJzZU1hc3NgIHByb3BlcnR5IChgMSAvIG1hc3NgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtYXNzIG9mIHRoZSBib2R5IChgMSAvIG1hc3NgKS5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5tYXNzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlTWFzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChpLmUuIHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIGJvZHkuXG4gICAgICogSXQgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBhbmQgZGVuc2l0eSBpbiBgQm9keS5jcmVhdGVgLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmludmVyc2VJbmVydGlhYCBwcm9wZXJ0eSAoYDEgLyBpbmVydGlhYCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkgKGAxIC8gaW5lcnRpYWApLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmluZXJ0aWFgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGludmVyc2VJbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgcmVzdGl0dXRpb24gKGVsYXN0aWNpdHkpIG9mIHRoZSBib2R5LiBUaGUgdmFsdWUgaXMgYWx3YXlzIHBvc2l0aXZlIGFuZCBpcyBpbiB0aGUgcmFuZ2UgYCgwLCAxKWAuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgY29sbGlzaW9ucyBtYXkgYmUgcGVyZmVjdGx5IGluZWxhc3RpYyBhbmQgbm8gYm91bmNpbmcgbWF5IG9jY3VyLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwLjhgIG1lYW5zIHRoZSBib2R5IG1heSBib3VuY2UgYmFjayB3aXRoIGFwcHJveGltYXRlbHkgODAlIG9mIGl0cyBraW5ldGljIGVuZXJneS5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgcmVzdGl0dXRpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1heChib2R5QS5yZXN0aXR1dGlvbiwgYm9keUIucmVzdGl0dXRpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVzdGl0dXRpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZnJpY3Rpb24gb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBib2R5IG1heSBzbGlkZSBpbmRlZmluaXRlbHkuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGJvZHkgbWF5IGNvbWUgdG8gYSBzdG9wIGFsbW9zdCBpbnN0YW50bHkgYWZ0ZXIgYSBmb3JjZSBpcyBhcHBsaWVkLlxuICAgICAqXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIG1heSBiZSBub24tbGluZWFyLiBcbiAgICAgKiBIaWdoIHZhbHVlcyBtYXkgYmUgdW5zdGFibGUgZGVwZW5kaW5nIG9uIHRoZSBib2R5LlxuICAgICAqIFRoZSBlbmdpbmUgdXNlcyBhIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwgaW5jbHVkaW5nIHN0YXRpYyBhbmQga2luZXRpYyBmcmljdGlvbi5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgZnJpY3Rpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1pbihib2R5QS5mcmljdGlvbiwgYm9keUIuZnJpY3Rpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzdGF0aWMgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGluIHRoZSBDb3Vsb21iIGZyaWN0aW9uIG1vZGVsKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciAnc3RpY2snIHdoZW4gaXQgaXMgbmVhcmx5IHN0YXRpb25hcnkgYW5kIG9ubHkgZHluYW1pYyBgZnJpY3Rpb25gIGlzIHVzZWQuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUgKGUuZy4gYDEwYCksIHRoZSBtb3JlIGZvcmNlIGl0IHdpbGwgdGFrZSB0byBpbml0aWFsbHkgZ2V0IHRoZSBib2R5IG1vdmluZyB3aGVuIG5lYXJseSBzdGF0aW9uYXJ5LlxuICAgICAqIFRoaXMgdmFsdWUgaXMgbXVsdGlwbGllZCB3aXRoIHRoZSBgZnJpY3Rpb25gIHByb3BlcnR5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNoYW5nZSBgZnJpY3Rpb25gIGFuZCBtYWludGFpbiBhbiBhcHByb3ByaWF0ZSBhbW91bnQgb2Ygc3RhdGljIGZyaWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uU3RhdGljXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC41XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgYWlyIGZyaWN0aW9uIG9mIHRoZSBib2R5IChhaXIgcmVzaXN0YW5jZSkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgc2xvdyBhcyBpdCBtb3ZlcyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgZmFzdGVyIGEgYm9keSBzbG93cyB3aGVuIG1vdmluZyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBlZmZlY3RzIG9mIHRoZSB2YWx1ZSBhcmUgbm9uLWxpbmVhci4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25BaXJcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlcmluZyBwcm9wZXJ0aWVzIG9mIHRoaXMgYm9keS5cbiAgICAgKlxuICAgICAqIENvbGxpc2lvbnMgYmV0d2VlbiB0d28gYm9kaWVzIHdpbGwgb2JleSB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSB0aGUgc2FtZSBub24temVybyB2YWx1ZSBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCxcbiAgICAgKiAgIHRoZXkgd2lsbCBhbHdheXMgY29sbGlkZSBpZiB0aGUgdmFsdWUgaXMgcG9zaXRpdmUsIGFuZCB0aGV5IHdpbGwgbmV2ZXIgY29sbGlkZVxuICAgICAqICAgaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgIG9yIGlmIG9uZVxuICAgICAqICAgKG9yIGJvdGgpIG9mIHRoZSBib2RpZXMgaGFzIGEgdmFsdWUgb2YgMCwgdGhlbiB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcyBhcHBseSBhcyBmb2xsb3dzOlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGJlbG9uZ3MgdG8gYSBjb2xsaXNpb24gY2F0ZWdvcnksIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlgLiBUaGlzXG4gICAgICogdmFsdWUgaXMgdXNlZCBhcyBhIGJpdCBmaWVsZCBhbmQgdGhlIGNhdGVnb3J5IHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIG1lYW5pbmcgdGhhdFxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgcG93ZXIgb2YgdHdvIGluIHRoZSByYW5nZSBbMSwgMl4zMV0uIFRodXMsIHRoZXJlIGFyZSAzMlxuICAgICAqIGRpZmZlcmVudCBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYWxzbyBkZWZpbmVzIGEgY29sbGlzaW9uIGJpdG1hc2ssIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIubWFza2Agd2hpY2ggc3BlY2lmaWVzXG4gICAgICogdGhlIGNhdGVnb3JpZXMgaXQgY29sbGlkZXMgd2l0aCAodGhlIHZhbHVlIGlzIHRoZSBiaXR3aXNlIEFORCB2YWx1ZSBvZiBhbGwgdGhlc2UgY2F0ZWdvcmllcykuXG4gICAgICpcbiAgICAgKiBVc2luZyB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcywgdHdvIGJvZGllcyBgQWAgYW5kIGBCYCBjb2xsaWRlIGlmIGVhY2ggaW5jbHVkZXMgdGhlIG90aGVyJ3NcbiAgICAgKiBjYXRlZ29yeSBpbiBpdHMgbWFzaywgaS5lLiBgKGNhdGVnb3J5QSAmIG1hc2tCKSAhPT0gMGAgYW5kIGAoY2F0ZWdvcnlCICYgbWFza0EpICE9PSAwYFxuICAgICAqIGFyZSBib3RoIHRydWUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBJbnRlZ2VyIGBOdW1iZXJgLCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGdyb3VwIHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5ncm91cFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IGZpZWxkIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcnkgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogVGhlIGNhdGVnb3J5IHZhbHVlIHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIGZvciBleGFtcGxlIGAweDAwMDFgLlxuICAgICAqIFRoaXMgbWVhbnMgdGhlcmUgYXJlIHVwIHRvIDMyIHVuaXF1ZSBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgbWFzayB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3JpZXMgdGhpcyBib2R5IG1heSBjb2xsaWRlIHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLm1hc2tcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAtMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyBhIHRvbGVyYW5jZSBvbiBob3cgZmFyIGEgYm9keSBpcyBhbGxvd2VkIHRvICdzaW5rJyBvciByb3RhdGUgaW50byBvdGhlciBib2RpZXMuXG4gICAgICogQXZvaWQgY2hhbmdpbmcgdGhpcyB2YWx1ZSB1bmxlc3MgeW91IHVuZGVyc3RhbmQgdGhlIHB1cnBvc2Ugb2YgYHNsb3BgIGluIHBoeXNpY3MgZW5naW5lcy5cbiAgICAgKiBUaGUgZGVmYXVsdCBzaG91bGQgZ2VuZXJhbGx5IHN1ZmZpY2UsIGFsdGhvdWdoIHZlcnkgbGFyZ2UgYm9kaWVzIG1heSByZXF1aXJlIGxhcmdlciB2YWx1ZXMgZm9yIHN0YWJsZSBzdGFja2luZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbG9wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGFsbG93cyBwZXItYm9keSB0aW1lIHNjYWxpbmcsIGUuZy4gYSBmb3JjZS1maWVsZCB3aGVyZSBib2RpZXMgaW5zaWRlIGFyZSBpbiBzbG93LW1vdGlvbiwgd2hpbGUgb3RoZXJzIGFyZSBhdCBmdWxsIHNwZWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWVTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJvZHkgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5vcGFjaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHNwcml0ZSBwcm9wZXJ0aWVzIHRvIHVzZSB3aGVuIHJlbmRlcmluZywgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGVcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gdXNlIGFzIHRoZSBzcHJpdGUgdGV4dHVyZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUudGV4dHVyZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgd2lkdGgpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgLyoqXG4gICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBvZmZzZXQgaW4gdGhlIHktYXhpcyBmb3IgdGhlIHNwcml0ZSAobm9ybWFsaXNlZCBieSB0ZXh0dXJlIGhlaWdodCkuXG4gICAgICAqXG4gICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnlPZmZzZXRcbiAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbGluZSB3aWR0aCB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgb3V0bGluZSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIG5vIG91dGxpbmUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIubGluZVdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIGZpbGwgc3R5bGUgdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5maWxsU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBzdHJva2Ugc3R5bGUgdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IG91dGxpbmUgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnN0cm9rZVN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB1bmlxdWUgYXhpcyB2ZWN0b3JzIChlZGdlIG5vcm1hbHMpIHVzZWQgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXG4gICAgICogVGhlc2UgYXJlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBnaXZlbiBjb252ZXggaHVsbCAoYHZlcnRpY2VzYCBhcnJheSkgaW4gYEJvZHkuY3JlYXRlYC5cbiAgICAgKiBUaGV5IGFyZSBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgdGhlIHNpbXVsYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYXhlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBhcmVhIG9mIHRoZSBib2R5J3MgY29udmV4IGh1bGwsIGNhbGN1bGF0ZWQgYXQgY3JlYXRpb24gYnkgYEJvZHkuY3JlYXRlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBhcmVhXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIEFBQkIgcmVnaW9uIGZvciB0aGUgYm9keS5cbiAgICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGluIGBCb2R5LmNyZWF0ZWAgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIG1hbmFnZSB0aGUgc2xlZXBpbmcgc3RhdGUgb2YgYm9kaWVzLlxuKlxuKiBAY2xhc3MgU2xlZXBpbmdcbiovXG5cbnZhciBTbGVlcGluZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsZWVwaW5nO1xuXG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgU2xlZXBpbmcuX21vdGlvbldha2VUaHJlc2hvbGQgPSAwLjE4O1xuICAgIFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZCA9IDAuMDg7XG4gICAgU2xlZXBpbmcuX21pbkJpYXMgPSAwLjk7XG5cbiAgICAvKipcbiAgICAgKiBQdXRzIGJvZGllcyB0byBzbGVlcCBvciB3YWtlcyB0aGVtIHVwIGRlcGVuZGluZyBvbiB0aGVpciBtb3Rpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFNsZWVwaW5nLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvZGllcywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lRmFjdG9yID0gdGltZVNjYWxlICogdGltZVNjYWxlICogdGltZVNjYWxlO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBib2RpZXMgc2xlZXBpbmcgc3RhdHVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBtb3Rpb24gPSBib2R5LnNwZWVkICogYm9keS5zcGVlZCArIGJvZHkuYW5ndWxhclNwZWVkICogYm9keS5hbmd1bGFyU3BlZWQ7XG5cbiAgICAgICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGlmIHRoZXkgaGF2ZSBhIGZvcmNlIGFwcGxpZWRcbiAgICAgICAgICAgIGlmIChib2R5LmZvcmNlLnggIT09IDAgfHwgYm9keS5mb3JjZS55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1pbk1vdGlvbiA9IE1hdGgubWluKGJvZHkubW90aW9uLCBtb3Rpb24pLFxuICAgICAgICAgICAgICAgIG1heE1vdGlvbiA9IE1hdGgubWF4KGJvZHkubW90aW9uLCBtb3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGJpYXNlZCBhdmVyYWdlIG1vdGlvbiBlc3RpbWF0aW9uIGJldHdlZW4gZnJhbWVzXG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IFNsZWVwaW5nLl9taW5CaWFzICogbWluTW90aW9uICsgKDEgLSBTbGVlcGluZy5fbWluQmlhcykgKiBtYXhNb3Rpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChib2R5LnNsZWVwVGhyZXNob2xkID4gMCAmJiBib2R5Lm1vdGlvbiA8IFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZCAqIHRpbWVGYWN0b3IpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2R5LnNsZWVwQ291bnRlciA+PSBib2R5LnNsZWVwVGhyZXNob2xkKVxuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvZHkuc2xlZXBDb3VudGVyID4gMCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBzZXQgb2YgY29sbGlkaW5nIHBhaXJzLCB3YWtlcyB0aGUgc2xlZXBpbmcgYm9kaWVzIGludm9sdmVkLlxuICAgICAqIEBtZXRob2QgYWZ0ZXJDb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFNsZWVwaW5nLmFmdGVyQ29sbGlzaW9ucyA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVGYWN0b3IgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBkb24ndCB3YWtlIGluYWN0aXZlIHBhaXJzXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QS5wYXJlbnQsIFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCLnBhcmVudDtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBkb24ndCB3YWtlIGlmIGF0IGxlYXN0IG9uZSBib2R5IGlzIHN0YXRpY1xuICAgICAgICAgICAgaWYgKChib2R5QS5pc1NsZWVwaW5nICYmIGJvZHlCLmlzU2xlZXBpbmcpIHx8IGJvZHlBLmlzU3RhdGljIHx8IGJvZHlCLmlzU3RhdGljKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChib2R5QS5pc1NsZWVwaW5nIHx8IGJvZHlCLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xlZXBpbmdCb2R5ID0gKGJvZHlBLmlzU2xlZXBpbmcgJiYgIWJvZHlBLmlzU3RhdGljKSA/IGJvZHlBIDogYm9keUIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0JvZHkgPSBzbGVlcGluZ0JvZHkgPT09IGJvZHlBID8gYm9keUIgOiBib2R5QTtcblxuICAgICAgICAgICAgICAgIGlmICghc2xlZXBpbmdCb2R5LmlzU3RhdGljICYmIG1vdmluZ0JvZHkubW90aW9uID4gU2xlZXBpbmcuX21vdGlvbldha2VUaHJlc2hvbGQgKiB0aW1lRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChzbGVlcGluZ0JvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBib2R5IGFzIHNsZWVwaW5nIG9yIGF3YWtlLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NsZWVwaW5nXG4gICAgICovXG4gICAgU2xlZXBpbmcuc2V0ID0gZnVuY3Rpb24oYm9keSwgaXNTbGVlcGluZykge1xuICAgICAgICB2YXIgd2FzU2xlZXBpbmcgPSBib2R5LmlzU2xlZXBpbmc7XG5cbiAgICAgICAgaWYgKGlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgIGJvZHkuaXNTbGVlcGluZyA9IHRydWU7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IGJvZHkuc2xlZXBUaHJlc2hvbGQ7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnggPSAwO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueSA9IDA7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuXG4gICAgICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgICAgICBib2R5LnNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gMDtcblxuICAgICAgICAgICAgaWYgKCF3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcFN0YXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgaWYgKHdhc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoYm9keSwgJ3NsZWVwRW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29uc3RyYWludHMuXG4qIENvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBzcGVjaWZ5aW5nIHRoYXQgYSBmaXhlZCBkaXN0YW5jZSBtdXN0IGJlIG1haW50YWluZWQgYmV0d2VlbiB0d28gYm9kaWVzIChvciBhIGJvZHkgYW5kIGEgZml4ZWQgd29ybGQtc3BhY2UgcG9zaXRpb24pLlxuKiBUaGUgc3RpZmZuZXNzIG9mIGNvbnN0cmFpbnRzIGNhbiBiZSBtb2RpZmllZCB0byBjcmVhdGUgc3ByaW5ncyBvciBlbGFzdGljLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29uc3RyYWludFxuKi9cblxudmFyIENvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdHJhaW50O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbnN0cmFpbnQuX3dhcm1pbmcgPSAwLjQ7XG4gICAgQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuID0gMTtcbiAgICBDb25zdHJhaW50Ll9taW5MZW5ndGggPSAwLjAwMDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRvIHNpbXVsYXRlIGEgcmV2b2x1dGUgY29uc3RyYWludCAob3IgcGluIGpvaW50KSBzZXQgYGxlbmd0aDogMGAgYW5kIGEgaGlnaCBgc3RpZmZuZXNzYCB2YWx1ZSAoZS5nLiBgMC43YCBvciBhYm92ZSkuXG4gICAgICogSWYgdGhlIGNvbnN0cmFpbnQgaXMgdW5zdGFibGUsIHRyeSBsb3dlcmluZyB0aGUgYHN0aWZmbmVzc2AgdmFsdWUgYW5kIC8gb3IgaW5jcmVhc2luZyBgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zYC5cbiAgICAgKiBGb3IgY29tcG91bmQgYm9kaWVzLCBjb25zdHJhaW50cyBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBib2R5IChub3Qgb25lIG9mIGl0cyBwYXJ0cykuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgY29uc3RyYWludCA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgYm9kaWVzIGRlZmluZWQgYnV0IG5vIHBvaW50cywgdXNlIGJvZHkgY2VudHJlXG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlBICYmICFjb25zdHJhaW50LnBvaW50QSlcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlCICYmICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHN0YXRpYyBsZW5ndGggdXNpbmcgaW5pdGlhbCB3b3JsZCBzcGFjZSBwb2ludHNcbiAgICAgICAgdmFyIGluaXRpYWxQb2ludEEgPSBjb25zdHJhaW50LmJvZHlBID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSkgOiBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIGluaXRpYWxQb2ludEIgPSBjb25zdHJhaW50LmJvZHlCID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QikgOiBjb25zdHJhaW50LnBvaW50QixcbiAgICAgICAgICAgIGxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1Yihpbml0aWFsUG9pbnRBLCBpbml0aWFsUG9pbnRCKSk7XG4gICAgXG4gICAgICAgIGNvbnN0cmFpbnQubGVuZ3RoID0gdHlwZW9mIGNvbnN0cmFpbnQubGVuZ3RoICE9PSAndW5kZWZpbmVkJyA/IGNvbnN0cmFpbnQubGVuZ3RoIDogbGVuZ3RoO1xuXG4gICAgICAgIC8vIG9wdGlvbiBkZWZhdWx0c1xuICAgICAgICBjb25zdHJhaW50LmlkID0gY29uc3RyYWludC5pZCB8fCBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIGNvbnN0cmFpbnQubGFiZWwgPSBjb25zdHJhaW50LmxhYmVsIHx8ICdDb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC50eXBlID0gJ2NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuc3RpZmZuZXNzIHx8IChjb25zdHJhaW50Lmxlbmd0aCA+IDAgPyAxIDogMC43KTtcbiAgICAgICAgY29uc3RyYWludC5kYW1waW5nID0gY29uc3RyYWludC5kYW1waW5nIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUE7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQjtcbiAgICAgICAgY29uc3RyYWludC5wbHVnaW4gPSB7fTtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdmFyIHJlbmRlciA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgYW5jaG9yczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50Lmxlbmd0aCA9PT0gMCAmJiBjb25zdHJhaW50LnN0aWZmbmVzcyA+IDAuMSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAncGluJztcbiAgICAgICAgICAgIHJlbmRlci5hbmNob3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludC5zdGlmZm5lc3MgPCAwLjkpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3NwcmluZyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJhaW50LnJlbmRlciA9IENvbW1vbi5leHRlbmQocmVuZGVyLCBjb25zdHJhaW50LnJlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciBzb2x2aW5nIGJ5IGNvbnN0cmFpbnQgd2FybWluZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcHJlU29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgYm9keS5hbmdsZSArPSBpbXB1bHNlLmFuZ2xlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhbGwgY29uc3RyYWludHMgaW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmVBbGwgPSBmdW5jdGlvbihjb25zdHJhaW50cywgdGltZVNjYWxlKSB7XG4gICAgICAgIC8vIFNvbHZlIGZpeGVkIGNvbnN0cmFpbnRzIGZpcnN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpLFxuICAgICAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoZml4ZWRBIHx8IGZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb2x2ZSBmcmVlIGNvbnN0cmFpbnRzIGxhc3QuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyk7XG4gICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKCFmaXhlZEEgJiYgIWZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGEgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2QuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmUgPSBmdW5jdGlvbihjb25zdHJhaW50LCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgIHBvaW50QSA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgaWYgKCFib2R5QSAmJiAhYm9keUIpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QSwgYm9keUEuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQSwgcG9pbnRBKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gYm9keUEuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEIsIGJvZHlCLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUIsIHBvaW50Qik7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHlCLmFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50QVdvcmxkID0gcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBwb2ludEI7XG5cbiAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIHBvaW50QSk7XG4gICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBwb2ludEIpO1xuXG4gICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9pbnRBV29ybGQsIHBvaW50QldvcmxkKSxcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKGRlbHRhKTtcblxuICAgICAgICAvLyBwcmV2ZW50IHNpbmd1bGFyaXR5XG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoIDwgQ29uc3RyYWludC5fbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gQ29uc3RyYWludC5fbWluTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29sdmUgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2RcbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSAoY3VycmVudExlbmd0aCAtIGNvbnN0cmFpbnQubGVuZ3RoKSAvIGN1cnJlbnRMZW5ndGgsXG4gICAgICAgICAgICBzdGlmZm5lc3MgPSBjb25zdHJhaW50LnN0aWZmbmVzcyA8IDEgPyBjb25zdHJhaW50LnN0aWZmbmVzcyAqIHRpbWVTY2FsZSA6IGNvbnN0cmFpbnQuc3RpZmZuZXNzLFxuICAgICAgICAgICAgZm9yY2UgPSBWZWN0b3IubXVsdChkZWx0YSwgZGlmZmVyZW5jZSAqIHN0aWZmbmVzcyksXG4gICAgICAgICAgICBtYXNzVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlTWFzcyA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZU1hc3MgOiAwKSxcbiAgICAgICAgICAgIGluZXJ0aWFUb3RhbCA9IChib2R5QSA/IGJvZHlBLmludmVyc2VJbmVydGlhIDogMCkgKyAoYm9keUIgPyBib2R5Qi5pbnZlcnNlSW5lcnRpYSA6IDApLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVRvdGFsID0gbWFzc1RvdGFsICsgaW5lcnRpYVRvdGFsLFxuICAgICAgICAgICAgdG9ycXVlLFxuICAgICAgICAgICAgc2hhcmUsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBub3JtYWxWZWxvY2l0eSxcbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHk7XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgdmFyIHplcm8gPSBWZWN0b3IuY3JlYXRlKCk7XG4gICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IuZGl2KGRlbHRhLCBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eSA9IFZlY3Rvci5zdWIoXG4gICAgICAgICAgICAgICAgYm9keUIgJiYgVmVjdG9yLnN1Yihib2R5Qi5wb3NpdGlvbiwgYm9keUIucG9zaXRpb25QcmV2KSB8fCB6ZXJvLFxuICAgICAgICAgICAgICAgIGJvZHlBICYmIFZlY3Rvci5zdWIoYm9keUEucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uUHJldikgfHwgemVyb1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHkgPSBWZWN0b3IuZG90KG5vcm1hbCwgcmVsYXRpdmVWZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlBLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi54IC09IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uLnkgLT0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5kYW1waW5nKSB7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggLT0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55IC09IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC55ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwbHkgdG9ycXVlXG4gICAgICAgICAgICB0b3JxdWUgPSAoVmVjdG9yLmNyb3NzKHBvaW50QSwgZm9yY2UpIC8gcmVzaXN0YW5jZVRvdGFsKSAqIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiAqIGJvZHlBLmludmVyc2VJbmVydGlhICogKDEgLSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MpO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICAgICAgYm9keUEuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5Qi5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UueSArPSBmb3JjZS55ICogc2hhcmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueCArPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5Qi5wb3NpdGlvbi55ICs9IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54ICs9IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSArPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEIsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlCLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGJvZHkgdXBkYXRlcyByZXF1aXJlZCBhZnRlciBzb2x2aW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnkgYW5kIHJlc2V0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGltcHVsc2UuYW5nbGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGltcHVsc2UuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkYW1wZW4gdGhlIGNhY2hlZCBpbXB1bHNlIGZvciB3YXJtaW5nIG5leHQgc3RlcFxuICAgICAgICAgICAgaW1wdWxzZS5hbmdsZSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS54ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnkgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiBgY29uc3RyYWludC5wb2ludEFgLCBhY2NvdW50aW5nIGZvciBgY29uc3RyYWludC5ib2R5QWAuXG4gICAgICogQG1ldGhvZCBwb2ludEFXb3JsZFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHt2ZWN0b3J9IHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9pbnRBV29ybGQgPSBmdW5jdGlvbihjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueCA6IDApICsgY29uc3RyYWludC5wb2ludEEueCxcbiAgICAgICAgICAgIHk6IChjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbi55IDogMCkgKyBjb25zdHJhaW50LnBvaW50QS55XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIGBjb25zdHJhaW50LnBvaW50QmAsIGFjY291bnRpbmcgZm9yIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKiBAbWV0aG9kIHBvaW50QldvcmxkXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybnMge3ZlY3Rvcn0gdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb2ludEJXb3JsZCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbi54IDogMCkgKyBjb25zdHJhaW50LnBvaW50Qi54LFxuICAgICAgICAgICAgeTogKGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLnkgOiAwKSArIGNvbnN0cmFpbnQucG9pbnRCLnlcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYENvbXBvc2l0ZS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29uc3RyYWludFwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJDb25zdHJhaW50XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIG5vIG91dGxpbmUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIubGluZVdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGNvbnN0cmFpbnQgb3V0bGluZS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnN0cm9rZVN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgY29uc3RyYWludCByZW5kZXJpbmcgdHlwZS4gXG4gICAgICogVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmUgJ2xpbmUnLCAncGluJywgJ3NwcmluZycuXG4gICAgICogQW4gYXBwcm9wcmlhdGUgcmVuZGVyIHR5cGUgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNob3NlbiB1bmxlc3Mgb25lIGlzIGdpdmVuIGluIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnbGluZSdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgZGVmaW5lcyBpZiB0aGUgY29uc3RyYWludCdzIGFuY2hvciBwb2ludHMgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5hbmNob3JzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUFcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRBXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG9mZnNldCBvZiB0aGUgY29uc3RyYWludCBmcm9tIGNlbnRlciBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUJgIGlmIGRlZmluZWQsIG90aGVyd2lzZSBhIHdvcmxkLXNwYWNlIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvaW50QlxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBzdGlmZm5lc3Mgb2YgdGhlIGNvbnN0cmFpbnQsIGkuZS4gdGhlIHJhdGUgYXQgd2hpY2ggaXQgcmV0dXJucyB0byBpdHMgcmVzdGluZyBgY29uc3RyYWludC5sZW5ndGhgLlxuICAgICAqIEEgdmFsdWUgb2YgYDFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHNob3VsZCBiZSB2ZXJ5IHN0aWZmLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMmAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgYWN0cyBsaWtlIGEgc29mdCBzcHJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3RpZmZuZXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgZGFtcGluZyBvZiB0aGUgY29uc3RyYWludCwgXG4gICAgICogaS5lLiB0aGUgYW1vdW50IG9mIHJlc2lzdGFuY2UgYXBwbGllZCB0byBlYWNoIGJvZHkgYmFzZWQgb24gdGhlaXIgdmVsb2NpdGllcyB0byBsaW1pdCB0aGUgYW1vdW50IG9mIG9zY2lsbGF0aW9uLlxuICAgICAqIERhbXBpbmcgd2lsbCBvbmx5IGJlIGFwcGFyZW50IHdoZW4gdGhlIGNvbnN0cmFpbnQgYWxzbyBoYXMgYSB2ZXJ5IGxvdyBgc3RpZmZuZXNzYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgaGVhdnkgZGFtcGluZywgcmVzdWx0aW5nIGluIGxpdHRsZSB0byBubyBvc2NpbGxhdGlvbi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgY29uc3RyYWludCB3aWxsIGFwcGx5IG5vIGRhbXBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXN0aW5nIGxlbmd0aCBvZiB0aGUgY29uc3RyYWludC4gXG4gICAgICogSXQgaXMgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGluIGBDb25zdHJhaW50LmNyZWF0ZWAgZnJvbSBpbml0aWFsIHBvc2l0aW9ucyBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUFgIGFuZCBgY29uc3RyYWludC5ib2R5QmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGVuZ3RoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBhaXJgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBwYWlycy5cbipcbiogQGNsYXNzIFBhaXJcbiovXG5cbnZhciBQYWlyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpcjtcblxudmFyIENvbnRhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwYWlyLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKiBAcmV0dXJuIHtwYWlyfSBBIG5ldyBwYWlyXG4gICAgICovXG4gICAgUGFpci5jcmVhdGUgPSBmdW5jdGlvbihjb2xsaXNpb24sIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgYm9keUEgPSBjb2xsaXNpb24uYm9keUEsXG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QixcbiAgICAgICAgICAgIHBhcmVudEEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgIHBhcmVudEIgPSBjb2xsaXNpb24ucGFyZW50QjtcblxuICAgICAgICB2YXIgcGFpciA9IHtcbiAgICAgICAgICAgIGlkOiBQYWlyLmlkKGJvZHlBLCBib2R5QiksXG4gICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICBib2R5QjogYm9keUIsXG4gICAgICAgICAgICBjb250YWN0czoge30sXG4gICAgICAgICAgICBhY3RpdmVDb250YWN0czogW10sXG4gICAgICAgICAgICBzZXBhcmF0aW9uOiAwLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtZWRBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBpc1NlbnNvcjogYm9keUEuaXNTZW5zb3IgfHwgYm9keUIuaXNTZW5zb3IsXG4gICAgICAgICAgICB0aW1lQ3JlYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgdGltZVVwZGF0ZWQ6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGludmVyc2VNYXNzOiBwYXJlbnRBLmludmVyc2VNYXNzICsgcGFyZW50Qi5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgIGZyaWN0aW9uOiBNYXRoLm1pbihwYXJlbnRBLmZyaWN0aW9uLCBwYXJlbnRCLmZyaWN0aW9uKSxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiBNYXRoLm1heChwYXJlbnRBLmZyaWN0aW9uU3RhdGljLCBwYXJlbnRCLmZyaWN0aW9uU3RhdGljKSxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiBNYXRoLm1heChwYXJlbnRBLnJlc3RpdHV0aW9uLCBwYXJlbnRCLnJlc3RpdHV0aW9uKSxcbiAgICAgICAgICAgIHNsb3A6IE1hdGgubWF4KHBhcmVudEEuc2xvcCwgcGFyZW50Qi5zbG9wKVxuICAgICAgICB9O1xuXG4gICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcblxuICAgICAgICByZXR1cm4gcGFpcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHBhaXIgZ2l2ZW4gYSBjb2xsaXNpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIudXBkYXRlID0gZnVuY3Rpb24ocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5jb250YWN0cyxcbiAgICAgICAgICAgIHN1cHBvcnRzID0gY29sbGlzaW9uLnN1cHBvcnRzLFxuICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgcGFyZW50QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgcGFyZW50QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICBcbiAgICAgICAgcGFpci5jb2xsaXNpb24gPSBjb2xsaXNpb247XG4gICAgICAgIHBhaXIuaW52ZXJzZU1hc3MgPSBwYXJlbnRBLmludmVyc2VNYXNzICsgcGFyZW50Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgcGFpci5mcmljdGlvbiA9IE1hdGgubWluKHBhcmVudEEuZnJpY3Rpb24sIHBhcmVudEIuZnJpY3Rpb24pO1xuICAgICAgICBwYWlyLmZyaWN0aW9uU3RhdGljID0gTWF0aC5tYXgocGFyZW50QS5mcmljdGlvblN0YXRpYywgcGFyZW50Qi5mcmljdGlvblN0YXRpYyk7XG4gICAgICAgIHBhaXIucmVzdGl0dXRpb24gPSBNYXRoLm1heChwYXJlbnRBLnJlc3RpdHV0aW9uLCBwYXJlbnRCLnJlc3RpdHV0aW9uKTtcbiAgICAgICAgcGFpci5zbG9wID0gTWF0aC5tYXgocGFyZW50QS5zbG9wLCBwYXJlbnRCLnNsb3ApO1xuICAgICAgICBhY3RpdmVDb250YWN0cy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbGxpc2lvbi5jb2xsaWRlZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gc3VwcG9ydHNbaV0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RJZCA9IENvbnRhY3QuaWQoc3VwcG9ydCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QgPSBjb250YWN0c1tjb250YWN0SWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMucHVzaChjb250YWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3RzW2NvbnRhY3RJZF0gPSBDb250YWN0LmNyZWF0ZShzdXBwb3J0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBjb2xsaXNpb24uZGVwdGg7XG4gICAgICAgICAgICBQYWlyLnNldEFjdGl2ZShwYWlyLCB0cnVlLCB0aW1lc3RhbXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhaXIuaXNBY3RpdmUgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgUGFpci5zZXRBY3RpdmUocGFpciwgZmFsc2UsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCBhIHBhaXIgYXMgYWN0aXZlIG9yIGluYWN0aXZlLlxuICAgICAqIEBtZXRob2Qgc2V0QWN0aXZlXG4gICAgICogQHBhcmFtIHtwYWlyfSBwYWlyXG4gICAgICogQHBhcmFtIHtib29sfSBpc0FjdGl2ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlyLnNldEFjdGl2ZSA9IGZ1bmN0aW9uKHBhaXIsIGlzQWN0aXZlLCB0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZCBmb3IgdGhlIGdpdmVuIHBhaXIuXG4gICAgICogQG1ldGhvZCBpZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBVbmlxdWUgcGFpcklkXG4gICAgICovXG4gICAgUGFpci5pZCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICBpZiAoYm9keUEuaWQgPCBib2R5Qi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuICdBJyArIGJvZHlBLmlkICsgJ0InICsgYm9keUIuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0EnICsgYm9keUIuaWQgKyAnQicgKyBib2R5QS5pZDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQXhlc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgc2V0cyBvZiBheGVzLlxuKlxuKiBAY2xhc3MgQXhlc1xuKi9cblxudmFyIEF4ZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGVzO1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNldCBvZiBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtheGVzfSBBIG5ldyBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzXG4gICAgICovXG4gICAgQXhlcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXhlcyA9IHt9O1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHVuaXF1ZSBheGVzLCB1c2luZyBlZGdlIG5vcm1hbCBncmFkaWVudHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGogPSAoaSArIDEpICUgdmVydGljZXMubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICBub3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzW2pdLnkgLSB2ZXJ0aWNlc1tpXS55LCBcbiAgICAgICAgICAgICAgICAgICAgeTogdmVydGljZXNbaV0ueCAtIHZlcnRpY2VzW2pdLnhcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBncmFkaWVudCA9IChub3JtYWwueSA9PT0gMCkgPyBJbmZpbml0eSA6IChub3JtYWwueCAvIG5vcm1hbC55KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGltaXQgcHJlY2lzaW9uXG4gICAgICAgICAgICBncmFkaWVudCA9IGdyYWRpZW50LnRvRml4ZWQoMykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGF4ZXNbZ3JhZGllbnRdID0gbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi52YWx1ZXMoYXhlcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYSBzZXQgb2YgYXhlcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2F4ZXN9IGF4ZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBBeGVzLnJvdGF0ZSA9IGZ1bmN0aW9uKGF4ZXMsIGFuZ2xlKSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV0sXG4gICAgICAgICAgICAgICAgeHg7XG4gICAgICAgICAgICB4eCA9IGF4aXMueCAqIGNvcyAtIGF4aXMueSAqIHNpbjtcbiAgICAgICAgICAgIGF4aXMueSA9IGF4aXMueCAqIHNpbiArIGF4aXMueSAqIGNvcztcbiAgICAgICAgICAgIGF4aXMueCA9IHh4O1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2RpZXNgIG1vZHVsZSBjb250YWlucyBmYWN0b3J5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIHJpZ2lkIGJvZHkgbW9kZWxzIFxuKiB3aXRoIGNvbW1vbmx5IHVzZWQgYm9keSBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBCb2RpZXNcbiovXG5cbi8vIFRPRE86IHRydWUgY2lyY2xlIGJvZGllc1xuXG52YXIgQm9kaWVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9kaWVzO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlY3RhbmdsZSBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlY3RhbmdsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnJlY3RhbmdsZSA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIHJlY3RhbmdsZSA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1JlY3RhbmdsZSBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCgnTCAwIDAgTCAnICsgd2lkdGggKyAnIDAgTCAnICsgd2lkdGggKyAnICcgKyBoZWlnaHQgKyAnIEwgMCAnICsgaGVpZ2h0KVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcmVjdGFuZ2xlLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihyZWN0YW5nbGUudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcmVjdGFuZ2xlLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHRyYXBlem9pZCBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHRyYXBlem9pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3BlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHRyYXBlem9pZCBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnRyYXBlem9pZCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNsb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHNsb3BlICo9IDAuNTtcbiAgICAgICAgdmFyIHJvb2YgPSAoMSAtIChzbG9wZSAqIDIpKSAqIHdpZHRoO1xuICAgICAgICBcbiAgICAgICAgdmFyIHgxID0gd2lkdGggKiBzbG9wZSxcbiAgICAgICAgICAgIHgyID0geDEgKyByb29mLFxuICAgICAgICAgICAgeDMgPSB4MiArIHgxLFxuICAgICAgICAgICAgdmVydGljZXNQYXRoO1xuXG4gICAgICAgIGlmIChzbG9wZSA8IDAuNSkge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgxICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MiArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDMgKyAnIDAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhcGV6b2lkID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnVHJhcGV6b2lkIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHZlcnRpY2VzUGF0aClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHRyYXBlem9pZC52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIodHJhcGV6b2lkLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHRyYXBlem9pZCwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIGNpcmNsZSBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNpcmNsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4U2lkZXNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgY2lyY2xlIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMuY2lyY2xlID0gZnVuY3Rpb24oeCwgeSwgcmFkaXVzLCBvcHRpb25zLCBtYXhTaWRlcykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgY2lyY2xlID0ge1xuICAgICAgICAgICAgbGFiZWw6ICdDaXJjbGUgQm9keScsXG4gICAgICAgICAgICBjaXJjbGVSYWRpdXM6IHJhZGl1c1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwcm94aW1hdGUgY2lyY2xlcyB3aXRoIHBvbHlnb25zIHVudGlsIHRydWUgY2lyY2xlcyBpbXBsZW1lbnRlZCBpbiBTQVRcbiAgICAgICAgbWF4U2lkZXMgPSBtYXhTaWRlcyB8fCAyNTtcbiAgICAgICAgdmFyIHNpZGVzID0gTWF0aC5jZWlsKE1hdGgubWF4KDEwLCBNYXRoLm1pbihtYXhTaWRlcywgcmFkaXVzKSkpO1xuXG4gICAgICAgIC8vIG9wdGltaXNhdGlvbjogYWx3YXlzIHVzZSBldmVuIG51bWJlciBvZiBzaWRlcyAoaGFsZiB0aGUgbnVtYmVyIG9mIHVuaXF1ZSBheGVzKVxuICAgICAgICBpZiAoc2lkZXMgJSAyID09PSAxKVxuICAgICAgICAgICAgc2lkZXMgKz0gMTtcblxuICAgICAgICByZXR1cm4gQm9kaWVzLnBvbHlnb24oeCwgeSwgc2lkZXMsIHJhZGl1cywgQ29tbW9uLmV4dGVuZCh7fSwgY2lyY2xlLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgcmVndWxhciBwb2x5Z29uIGh1bGwgd2l0aCB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHNpZGVzLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHBvbHlnb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWd1bGFyIHBvbHlnb24gYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5wb2x5Z29uID0gZnVuY3Rpb24oeCwgeSwgc2lkZXMsIHJhZGl1cywgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoc2lkZXMgPCAzKVxuICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5jaXJjbGUoeCwgeSwgcmFkaXVzLCBvcHRpb25zKTtcblxuICAgICAgICB2YXIgdGhldGEgPSAyICogTWF0aC5QSSAvIHNpZGVzLFxuICAgICAgICAgICAgcGF0aCA9ICcnLFxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhldGEgKiAwLjU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlczsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBvZmZzZXQgKyAoaSAqIHRoZXRhKSxcbiAgICAgICAgICAgICAgICB4eCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5eSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcblxuICAgICAgICAgICAgcGF0aCArPSAnTCAnICsgeHgudG9GaXhlZCgzKSArICcgJyArIHl5LnRvRml4ZWQoMykgKyAnICc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9seWdvbiA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1BvbHlnb24gQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgocGF0aClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHBvbHlnb24udmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHBvbHlnb24udmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcG9seWdvbiwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IHRvIGNyZWF0ZSBhIGNvbXBvdW5kIGJvZHkgYmFzZWQgb24gc2V0KHMpIG9mIHZlcnRpY2VzLlxuICAgICAqIFxuICAgICAqIF9Ob3RlOl8gVG8gb3B0aW9uYWxseSBlbmFibGUgYXV0b21hdGljIGNvbmNhdmUgdmVydGljZXMgZGVjb21wb3NpdGlvbiB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIFxuICAgICAqIHBhY2thZ2UgbXVzdCBiZSBmaXJzdCBpbnN0YWxsZWQgYW5kIHByb3ZpZGVkIHNlZSBgQ29tbW9uLnNldERlY29tcGAsIG90aGVyd2lzZSB0aGUgY29udmV4IGh1bGwgb2YgZWFjaCB2ZXJ0ZXggc2V0IHdpbGwgYmUgdXNlZC5cbiAgICAgKiBcbiAgICAgKiBUaGUgcmVzdWx0aW5nIHZlcnRpY2VzIGFyZSByZW9yaWVudGF0ZWQgYWJvdXQgdGhlaXIgY2VudHJlIG9mIG1hc3MsXG4gICAgICogYW5kIG9mZnNldCBzdWNoIHRoYXQgYGJvZHkucG9zaXRpb25gIGNvcnJlc3BvbmRzIHRvIHRoaXMgcG9pbnQuXG4gICAgICogXG4gICAgICogVGhlIHJlc3VsdGluZyBvZmZzZXQgbWF5IGJlIGZvdW5kIGlmIG5lZWRlZCBieSBzdWJ0cmFjdGluZyBgYm9keS5ib3VuZHNgIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0IGJvdW5kcy5cbiAgICAgKiBUbyBsYXRlciBtb3ZlIHRoZSBjZW50cmUgb2YgbWFzcyBzZWUgYEJvZHkuc2V0Q2VudHJlYC5cbiAgICAgKiBcbiAgICAgKiBOb3RlIHRoYXQgYXV0b21hdGljIGNvbmNvbmNhdmUgZGVjb21wb3NpdGlvbiByZXN1bHRzIGFyZSBub3QgYWx3YXlzIG9wdGltYWwuIFxuICAgICAqIEZvciBiZXN0IHJlc3VsdHMsIHNpbXBsaWZ5IHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBtdWNoIGFzIHBvc3NpYmxlIGZpcnN0LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhpcyBmdW5jdGlvbiBhcHBsaWVzIHNvbWUgYWRkdGlvbmFsIHNpbXBsaWZpY2F0aW9uIHRvIGhlbHAuXG4gICAgICogXG4gICAgICogU29tZSBvdXRwdXRzIG1heSBhbHNvIHJlcXVpcmUgZnVydGhlciBtYW51YWwgcHJvY2Vzc2luZyBhZnRlcndhcmRzIHRvIGJlIHJvYnVzdC5cbiAgICAgKiBJbiBwYXJ0aWN1bGFyIHNvbWUgcGFydHMgbWF5IG5lZWQgdG8gYmUgb3ZlcmxhcHBlZCB0byBhdm9pZCBjb2xsaXNpb24gZ2Fwcy5cbiAgICAgKiBUaGluIHBhcnRzIGFuZCBzaGFycCBwb2ludHMgc2hvdWxkIGJlIGF2b2lkZWQgb3IgcmVtb3ZlZCB3aGVyZSBwb3NzaWJsZS5cbiAgICAgKlxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBvYmplY3Qgc3BlY2lmaWVzIGFueSBgTWF0dGVyLkJvZHlgIHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHZlcnRleFNldHMgT25lIG9yIG1vcmUgYXJyYXlzIG9mIHZlcnRleCBwb2ludHMgZS5nLiBgW1t7IHg6IDAsIHk6IDAgfS4uLl0sIC4uLl1gLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gVGhlIGJvZHkgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtmbGFnSW50ZXJuYWw9ZmFsc2VdIE9wdGlvbmFsbHkgbWFya3MgaW50ZXJuYWwgZWRnZXMgd2l0aCBgaXNJbnRlcm5hbGAuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyZW1vdmVDb2xsaW5lYXI9MC4wMV0gVGhyZXNob2xkIHdoZW4gc2ltcGxpZnlpbmcgdmVydGljZXMgYWxvbmcgdGhlIHNhbWUgZWRnZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbmltdW1BcmVhPTEwXSBUaHJlc2hvbGQgd2hlbiByZW1vdmluZyBzbWFsbCBwYXJ0cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JlbW92ZUR1cGxpY2F0ZVBvaW50cz0wLjAxXSBUaHJlc2hvbGQgd2hlbiBzaW1wbGlmeWluZyBuZWFyYnkgdmVydGljZXMuXG4gICAgICogQHJldHVybiB7Ym9keX1cbiAgICAgKi9cbiAgICBCb2RpZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24oeCwgeSwgdmVydGV4U2V0cywgb3B0aW9ucywgZmxhZ0ludGVybmFsLCByZW1vdmVDb2xsaW5lYXIsIG1pbmltdW1BcmVhLCByZW1vdmVEdXBsaWNhdGVQb2ludHMpIHtcbiAgICAgICAgdmFyIGRlY29tcCA9IENvbW1vbi5nZXREZWNvbXAoKSxcbiAgICAgICAgICAgIGNhbkRlY29tcCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgICAgIGlzQ29udmV4LFxuICAgICAgICAgICAgaXNDb25jYXZlLFxuICAgICAgICAgICAgdmVydGljZXMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICB2LFxuICAgICAgICAgICAgejtcblxuICAgICAgICAvLyBjaGVjayBkZWNvbXAgaXMgYXMgZXhwZWN0ZWRcbiAgICAgICAgY2FuRGVjb21wID0gQm9vbGVhbihkZWNvbXAgJiYgZGVjb21wLnF1aWNrRGVjb21wKTtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcGFydHMgPSBbXTtcblxuICAgICAgICBmbGFnSW50ZXJuYWwgPSB0eXBlb2YgZmxhZ0ludGVybmFsICE9PSAndW5kZWZpbmVkJyA/IGZsYWdJbnRlcm5hbCA6IGZhbHNlO1xuICAgICAgICByZW1vdmVDb2xsaW5lYXIgPSB0eXBlb2YgcmVtb3ZlQ29sbGluZWFyICE9PSAndW5kZWZpbmVkJyA/IHJlbW92ZUNvbGxpbmVhciA6IDAuMDE7XG4gICAgICAgIG1pbmltdW1BcmVhID0gdHlwZW9mIG1pbmltdW1BcmVhICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW1BcmVhIDogMTA7XG4gICAgICAgIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyA9IHR5cGVvZiByZW1vdmVEdXBsaWNhdGVQb2ludHMgIT09ICd1bmRlZmluZWQnID8gcmVtb3ZlRHVwbGljYXRlUG9pbnRzIDogMC4wMTtcblxuICAgICAgICAvLyBlbnN1cmUgdmVydGV4U2V0cyBpcyBhbiBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgaWYgKCFDb21tb24uaXNBcnJheSh2ZXJ0ZXhTZXRzWzBdKSkge1xuICAgICAgICAgICAgdmVydGV4U2V0cyA9IFt2ZXJ0ZXhTZXRzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodiA9IDA7IHYgPCB2ZXJ0ZXhTZXRzLmxlbmd0aDsgdiArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleFNldHNbdl07XG4gICAgICAgICAgICBpc0NvbnZleCA9IFZlcnRpY2VzLmlzQ29udmV4KHZlcnRpY2VzKTtcbiAgICAgICAgICAgIGlzQ29uY2F2ZSA9ICFpc0NvbnZleDtcblxuICAgICAgICAgICAgaWYgKGlzQ29uY2F2ZSAmJiAhY2FuRGVjb21wKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm5PbmNlKFxuICAgICAgICAgICAgICAgICAgICAnQm9kaWVzLmZyb21WZXJ0aWNlczogSW5zdGFsbCB0aGUgXFwncG9seS1kZWNvbXBcXCcgbGlicmFyeSBhbmQgdXNlIENvbW1vbi5zZXREZWNvbXAgb3IgcHJvdmlkZSBcXCdkZWNvbXBcXCcgYXMgYSBnbG9iYWwgdG8gZGVjb21wb3NlIGNvbmNhdmUgdmVydGljZXMuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0NvbnZleCB8fCAhY2FuRGVjb21wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29udmV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gVmVydGljZXMuY2xvY2t3aXNlU29ydCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sgdG8gY29udmV4IGh1bGwgd2hlbiBkZWNvbXBvc2l0aW9uIGlzIG5vdCBwb3NzaWJsZVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmh1bGwodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXNlIGEgZGVjb21wb3NpdGlvblxuICAgICAgICAgICAgICAgIHZhciBjb25jYXZlID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZlcnRleC54LCB2ZXJ0ZXgueV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNlcyBhcmUgY29uY2F2ZSBhbmQgc2ltcGxlLCB3ZSBjYW4gZGVjb21wb3NlIGludG8gcGFydHNcbiAgICAgICAgICAgICAgICBkZWNvbXAubWFrZUNDVyhjb25jYXZlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlQ29sbGluZWFyICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgZGVjb21wLnJlbW92ZUNvbGxpbmVhclBvaW50cyhjb25jYXZlLCByZW1vdmVDb2xsaW5lYXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVEdXBsaWNhdGVQb2ludHMgIT09IGZhbHNlICYmIGRlY29tcC5yZW1vdmVEdXBsaWNhdGVQb2ludHMpXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcC5yZW1vdmVEdXBsaWNhdGVQb2ludHMoY29uY2F2ZSwgcmVtb3ZlRHVwbGljYXRlUG9pbnRzKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgcXVpY2sgZGVjb21wb3NpdGlvbiBhbGdvcml0aG0gKEJheWF6aXQpXG4gICAgICAgICAgICAgICAgdmFyIGRlY29tcG9zZWQgPSBkZWNvbXAucXVpY2tEZWNvbXAoY29uY2F2ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBkZWNvbXBvc2VkIGNodW5rXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlY29tcG9zZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gZGVjb21wb3NlZFtpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHZlcnRpY2VzIGludG8gdGhlIGNvcnJlY3Qgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVua1ZlcnRpY2VzID0gY2h1bmsubWFwKGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHNtYWxsIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluaW11bUFyZWEgPiAwICYmIFZlcnRpY2VzLmFyZWEoY2h1bmtWZXJ0aWNlcykgPCBtaW5pbXVtQXJlYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGNvbXBvdW5kIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogVmVydGljZXMuY2VudHJlKGNodW5rVmVydGljZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IGNodW5rVmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGJvZHkgcGFydHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJ0c1tpXSA9IEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQocGFydHNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZsYWcgaW50ZXJuYWwgZWRnZXMgKGNvaW5jaWRlbnQgcGFydCBlZGdlcylcbiAgICAgICAgaWYgKGZsYWdJbnRlcm5hbCkge1xuICAgICAgICAgICAgdmFyIGNvaW5jaWRlbnRfbWF4X2Rpc3QgPSA1O1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gcGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhwYXJ0QS5ib3VuZHMsIHBhcnRCLmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXYgPSBwYXJ0QS52ZXJ0aWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnYgPSBwYXJ0Qi52ZXJ0aWNlcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSB2ZXJ0aWNlcyBvZiBib3RoIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydEEudmVydGljZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHogPSAwOyB6IDwgcGFydEIudmVydGljZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBkaXN0YW5jZXMgYmV0d2VlbiB0aGUgdmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZbKGsgKyAxKSAlIHBhdi5sZW5ndGhdLCBwYnZbel0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZba10sIHBidlsoeiArIDEpICUgcGJ2Lmxlbmd0aF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBib3RoIHZlcnRpY2VzIGFyZSB2ZXJ5IGNsb3NlLCBjb25zaWRlciB0aGUgZWRnZSBjb25jaWRlbnQgKGludGVybmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGEgPCBjb2luY2lkZW50X21heF9kaXN0ICYmIGRiIDwgY29pbmNpZGVudF9tYXhfZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF2W2tdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2W3pdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBwYXJlbnQgYm9keSB0byBiZSByZXR1cm5lZCwgdGhhdCBjb250YWlucyBnZW5lcmF0ZWQgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGJvZHkgPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgcGFydHM6IHBhcnRzLnNsaWNlKDApIH0sIG9wdGlvbnMpKTtcblxuICAgICAgICAgICAgLy8gb2Zmc2V0IHN1Y2ggdGhhdCBib2R5LnBvc2l0aW9uIGlzIGF0IHRoZSBjZW50cmUgb2ZmIG1hc3NcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgeyB4OiB4LCB5OiB5IH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIG1vdXNlIGlucHV0cy5cbipcbiogQGNsYXNzIE1vdXNlXG4qL1xuXG52YXIgTW91c2UgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZTtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtb3VzZSBpbnB1dC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHttb3VzZX0gQSBuZXcgbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBtb3VzZSA9IHt9O1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgQ29tbW9uLmxvZygnTW91c2UuY3JlYXRlOiBlbGVtZW50IHdhcyB1bmRlZmluZWQsIGRlZmF1bHRpbmcgdG8gZG9jdW1lbnQuYm9keScsICd3YXJuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIG1vdXNlLmFic29sdXRlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2Uuc2NhbGUgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICBtb3VzZS5waXhlbFJhdGlvID0gcGFyc2VJbnQobW91c2UuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nKSwgMTApIHx8IDE7XG5cbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzID0ge1xuICAgICAgICAgICAgbW91c2Vtb3ZlOiBudWxsLFxuICAgICAgICAgICAgbW91c2Vkb3duOiBudWxsLFxuICAgICAgICAgICAgbW91c2V1cDogbnVsbCxcbiAgICAgICAgICAgIG1vdXNld2hlZWw6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IDA7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vtb3ZlID0gZXZlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IDA7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uLnggPSBtb3VzZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vkb3duID0gZXZlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb3VzZS5idXR0b24gPSAtMTtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uLnggPSBtb3VzZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uLnkgPSBtb3VzZS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNldXAgPSBldmVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBtb3VzZS5tb3VzZXdoZWVsID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsKSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE1vdXNlLnNldEVsZW1lbnQobW91c2UsIG1vdXNlLmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBtb3VzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCB0aGUgbW91c2UgaXMgYm91bmQgdG8gKGFuZCByZWxhdGl2ZSB0bykuXG4gICAgICogQG1ldGhvZCBzZXRFbGVtZW50XG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgTW91c2Uuc2V0RWxlbWVudCA9IGZ1bmN0aW9uKG1vdXNlLCBlbGVtZW50KSB7XG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2UubW91c2Vtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZS5tb3VzZWRvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZS5tb3VzZXVwKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG1vdXNlLm1vdXNld2hlZWwpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgbW91c2UubW91c2V3aGVlbCk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3VzZS5tb3VzZW1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBtb3VzZS5tb3VzZWRvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgbW91c2UubW91c2V1cCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY2FwdHVyZWQgc291cmNlIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIGNsZWFyU291cmNlRXZlbnRzXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jbGVhclNvdXJjZUV2ZW50cyA9IGZ1bmN0aW9uKG1vdXNlKSB7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vkb3duID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNldXAgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V3aGVlbCA9IG51bGw7XG4gICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBvZmZzZXQuXG4gICAgICogQG1ldGhvZCBzZXRPZmZzZXRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBvZmZzZXRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRPZmZzZXQgPSBmdW5jdGlvbihtb3VzZSwgb2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlLm9mZnNldC54ID0gb2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLm9mZnNldC55ID0gb2Zmc2V0Lnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW91c2UgcG9zaXRpb24gc2NhbGUuXG4gICAgICogQG1ldGhvZCBzZXRTY2FsZVxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHNjYWxlXG4gICAgICovXG4gICAgTW91c2Uuc2V0U2NhbGUgPSBmdW5jdGlvbihtb3VzZSwgc2NhbGUpIHtcbiAgICAgICAgbW91c2Uuc2NhbGUueCA9IHNjYWxlLng7XG4gICAgICAgIG1vdXNlLnNjYWxlLnkgPSBzY2FsZS55O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBhbiBlbGVtZW50IGdpdmVuIGEgc2NyZWVuIHBpeGVsIHJhdGlvLlxuICAgICAqIEBtZXRob2QgX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICogQHBhcmFtIHt9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpb1xuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24oZXZlbnQsIGVsZW1lbnQsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIGVsZW1lbnRCb3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcm9vdE5vZGUgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgICAgIHNjcm9sbFggPSAod2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFkgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgeCwgeTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICB4ID0gdG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gdG91Y2hlc1swXS5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBldmVudC5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSBlbGVtZW50Qm91bmRzLnRvcCAtIHNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHg6IHggLyAoZWxlbWVudC5jbGllbnRXaWR0aCAvIChlbGVtZW50LndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGgpICogcGl4ZWxSYXRpbyksXG4gICAgICAgICAgICB5OiB5IC8gKGVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gKGVsZW1lbnQuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0KSAqIHBpeGVsUmF0aW8pXG4gICAgICAgIH07XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5EZXRlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIGdpdmVuIGEgc2V0IG9mIHBhaXJzLlxuKlxuKiBAY2xhc3MgRGV0ZWN0b3JcbiovXG5cbi8vIFRPRE86IHNwZWN1bGF0aXZlIGNvbnRhY3RzXG5cbnZhciBEZXRlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGVjdG9yO1xuXG52YXIgU0FUID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIGNvbGxpc2lvbnMgZ2l2ZW4gYSBsaXN0IG9mIHBhaXJzLlxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cGFpcltdfSBicm9hZHBoYXNlUGFpcnNcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHJldHVybiB7YXJyYXl9IGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jb2xsaXNpb25zID0gZnVuY3Rpb24oYnJvYWRwaGFzZVBhaXJzLCBlbmdpbmUpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIHBhaXJzVGFibGUgPSBlbmdpbmUucGFpcnMudGFibGU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm9hZHBoYXNlUGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QSA9IGJyb2FkcGhhc2VQYWlyc1tpXVswXSwgXG4gICAgICAgICAgICAgICAgYm9keUIgPSBicm9hZHBoYXNlUGFpcnNbaV1bMV07XG5cbiAgICAgICAgICAgIGlmICgoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykgJiYgKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIURldGVjdG9yLmNhbkNvbGxpZGUoYm9keUEuY29sbGlzaW9uRmlsdGVyLCBib2R5Qi5jb2xsaXNpb25GaWx0ZXIpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBtaWQgcGhhc2VcbiAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMoYm9keUEuYm91bmRzLCBib2R5Qi5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHlBLnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IGJvZHlBLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QSA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBib2R5Qi5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5Qi5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gYm9keUIucGFydHNba107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocGFydEEgPT09IGJvZHlBICYmIHBhcnRCID09PSBib2R5QikgfHwgQm91bmRzLm92ZXJsYXBzKHBhcnRBLmJvdW5kcywgcGFydEIuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgYSBwcmV2aW91cyBjb2xsaXNpb24gd2UgY291bGQgcmV1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFpcklkID0gUGFpci5pZChwYXJ0QSwgcGFydEIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyID0gcGFpcnNUYWJsZVtwYWlySWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbGxpc2lvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWlyICYmIHBhaXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbGxpc2lvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFycm93IHBoYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IFNBVC5jb2xsaWRlcyhwYXJ0QSwgcGFydEIsIHByZXZpb3VzQ29sbGlzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uY29sbGlkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggc3VwcGxpZWQgY29sbGlzaW9uIGZpbHRlcnMgd2lsbCBhbGxvdyBhIGNvbGxpc2lvbiB0byBvY2N1ci5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIGNhbkNvbGxpZGVcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJCXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIGNvbGxpc2lvbiBjYW4gb2NjdXJcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jYW5Db2xsaWRlID0gZnVuY3Rpb24oZmlsdGVyQSwgZmlsdGVyQikge1xuICAgICAgICBpZiAoZmlsdGVyQS5ncm91cCA9PT0gZmlsdGVyQi5ncm91cCAmJiBmaWx0ZXJBLmdyb3VwICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckEuZ3JvdXAgPiAwO1xuXG4gICAgICAgIHJldHVybiAoZmlsdGVyQS5tYXNrICYgZmlsdGVyQi5jYXRlZ29yeSkgIT09IDAgJiYgKGZpbHRlckIubWFzayAmIGZpbHRlckEuY2F0ZWdvcnkpICE9PSAwO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU0FUYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgdXNpbmcgdGhlIFNlcGFyYXRpbmcgQXhpcyBUaGVvcmVtLlxuKlxuKiBAY2xhc3MgU0FUXG4qL1xuXG4vLyBUT0RPOiB0cnVlIGNpcmNsZXMgYW5kIGN1cnZlc1xuXG52YXIgU0FUID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU0FUO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gcHJldmlvdXNDb2xsaXNpb25cbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqL1xuICAgIFNBVC5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5QiwgcHJldmlvdXNDb2xsaXNpb24pIHtcbiAgICAgICAgdmFyIG92ZXJsYXBBQixcbiAgICAgICAgICAgIG92ZXJsYXBCQSwgXG4gICAgICAgICAgICBtaW5PdmVybGFwLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY2FuUmV1c2VQcmV2Q29sID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzQ29sbGlzaW9uKSB7XG4gICAgICAgICAgICAvLyBlc3RpbWF0ZSB0b3RhbCBtb3Rpb25cbiAgICAgICAgICAgIHZhciBwYXJlbnRBID0gYm9keUEucGFyZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudEIgPSBib2R5Qi5wYXJlbnQsXG4gICAgICAgICAgICAgICAgbW90aW9uID0gcGFyZW50QS5zcGVlZCAqIHBhcmVudEEuc3BlZWQgKyBwYXJlbnRBLmFuZ3VsYXJTcGVlZCAqIHBhcmVudEEuYW5ndWxhclNwZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICsgcGFyZW50Qi5zcGVlZCAqIHBhcmVudEIuc3BlZWQgKyBwYXJlbnRCLmFuZ3VsYXJTcGVlZCAqIHBhcmVudEIuYW5ndWxhclNwZWVkO1xuXG4gICAgICAgICAgICAvLyB3ZSBtYXkgYmUgYWJsZSB0byAocGFydGlhbGx5KSByZXVzZSBjb2xsaXNpb24gcmVzdWx0IFxuICAgICAgICAgICAgLy8gYnV0IG9ubHkgc2FmZSBpZiBjb2xsaXNpb24gd2FzIHJlc3RpbmdcbiAgICAgICAgICAgIGNhblJldXNlUHJldkNvbCA9IHByZXZpb3VzQ29sbGlzaW9uICYmIHByZXZpb3VzQ29sbGlzaW9uLmNvbGxpZGVkICYmIG1vdGlvbiA8IDAuMjtcblxuICAgICAgICAgICAgLy8gcmV1c2UgY29sbGlzaW9uIG9iamVjdFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcHJldmlvdXNDb2xsaXNpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSB7IGNvbGxpZGVkOiBmYWxzZSwgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2aW91c0NvbGxpc2lvbiAmJiBjYW5SZXVzZVByZXZDb2wpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGNhbiByZXVzZSB0aGUgY29sbGlzaW9uIHJlc3VsdFxuICAgICAgICAgICAgLy8gd2Ugb25seSBuZWVkIHRvIHRlc3QgdGhlIHByZXZpb3VzbHkgZm91bmQgYXhpc1xuICAgICAgICAgICAgdmFyIGF4aXNCb2R5QSA9IGNvbGxpc2lvbi5heGlzQm9keSxcbiAgICAgICAgICAgICAgICBheGlzQm9keUIgPSBheGlzQm9keUEgPT09IGJvZHlBID8gYm9keUIgOiBib2R5QSxcbiAgICAgICAgICAgICAgICBheGVzID0gW2F4aXNCb2R5QS5heGVzW3ByZXZpb3VzQ29sbGlzaW9uLmF4aXNOdW1iZXJdXTtcblxuICAgICAgICAgICAgbWluT3ZlcmxhcCA9IFNBVC5fb3ZlcmxhcEF4ZXMoYXhpc0JvZHlBLnZlcnRpY2VzLCBheGlzQm9keUIudmVydGljZXMsIGF4ZXMpO1xuICAgICAgICAgICAgY29sbGlzaW9uLnJldXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChtaW5PdmVybGFwLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBjYW4ndCByZXVzZSBhIHJlc3VsdCwgcGVyZm9ybSBhIGZ1bGwgU0FUIHRlc3RcblxuICAgICAgICAgICAgb3ZlcmxhcEFCID0gU0FULl9vdmVybGFwQXhlcyhib2R5QS52ZXJ0aWNlcywgYm9keUIudmVydGljZXMsIGJvZHlBLmF4ZXMpO1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcEFCLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG92ZXJsYXBCQSA9IFNBVC5fb3ZlcmxhcEF4ZXMoYm9keUIudmVydGljZXMsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi5heGVzKTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXBCQS5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcEFCLm92ZXJsYXAgPCBvdmVybGFwQkEub3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBvdmVybGFwQUI7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmF4aXNCb2R5ID0gYm9keUE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBvdmVybGFwQkE7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmF4aXNCb2R5ID0gYm9keUI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgcmV1c2UgbGF0ZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbi5heGlzTnVtYmVyID0gbWluT3ZlcmxhcC5heGlzTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGlzaW9uLmJvZHlBID0gYm9keUEuaWQgPCBib2R5Qi5pZCA/IGJvZHlBIDogYm9keUI7XG4gICAgICAgIGNvbGxpc2lvbi5ib2R5QiA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QiA6IGJvZHlBO1xuICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSB0cnVlO1xuICAgICAgICBjb2xsaXNpb24uZGVwdGggPSBtaW5PdmVybGFwLm92ZXJsYXA7XG4gICAgICAgIGNvbGxpc2lvbi5wYXJlbnRBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudDtcbiAgICAgICAgY29sbGlzaW9uLnBhcmVudEIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICBcbiAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgIC8vIGVuc3VyZSBub3JtYWwgaXMgZmFjaW5nIGF3YXkgZnJvbSBib2R5QVxuICAgICAgICBpZiAoVmVjdG9yLmRvdChtaW5PdmVybGFwLmF4aXMsIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uKSkgPCAwKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24ubm9ybWFsID0ge1xuICAgICAgICAgICAgICAgIHg6IG1pbk92ZXJsYXAuYXhpcy54LFxuICAgICAgICAgICAgICAgIHk6IG1pbk92ZXJsYXAuYXhpcy55XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGlzaW9uLm5vcm1hbCA9IHtcbiAgICAgICAgICAgICAgICB4OiAtbWluT3ZlcmxhcC5heGlzLngsXG4gICAgICAgICAgICAgICAgeTogLW1pbk92ZXJsYXAuYXhpcy55XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQgPSBWZWN0b3IucGVycChjb2xsaXNpb24ubm9ybWFsKTtcblxuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24gPSBjb2xsaXNpb24ucGVuZXRyYXRpb24gfHwge307XG4gICAgICAgIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ID0gY29sbGlzaW9uLm5vcm1hbC54ICogY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSA9IGNvbGxpc2lvbi5ub3JtYWwueSAqIGNvbGxpc2lvbi5kZXB0aDsgXG5cbiAgICAgICAgLy8gZmluZCBzdXBwb3J0IHBvaW50cywgdGhlcmUgaXMgYWx3YXlzIGVpdGhlciBleGFjdGx5IG9uZSBvciB0d29cbiAgICAgICAgdmFyIHZlcnRpY2VzQiA9IFNBVC5fZmluZFN1cHBvcnRzKGJvZHlBLCBib2R5QiwgY29sbGlzaW9uLm5vcm1hbCksXG4gICAgICAgICAgICBzdXBwb3J0cyA9IFtdO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUIgdGhhdCBhcmUgaW5zaWRlIGJvZHlBXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgdmVydGljZXNCWzBdKSlcbiAgICAgICAgICAgIHN1cHBvcnRzLnB1c2godmVydGljZXNCWzBdKTtcblxuICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUEudmVydGljZXMsIHZlcnRpY2VzQlsxXSkpXG4gICAgICAgICAgICBzdXBwb3J0cy5wdXNoKHZlcnRpY2VzQlsxXSk7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgc3VwcG9ydHMgZnJvbSBib2R5QSB0aGF0IGFyZSBpbnNpZGUgYm9keUJcbiAgICAgICAgaWYgKHN1cHBvcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlc0EgPSBTQVQuX2ZpbmRTdXBwb3J0cyhib2R5QiwgYm9keUEsIFZlY3Rvci5uZWcoY29sbGlzaW9uLm5vcm1hbCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlCLnZlcnRpY2VzLCB2ZXJ0aWNlc0FbMF0pKVxuICAgICAgICAgICAgICAgIHN1cHBvcnRzLnB1c2godmVydGljZXNBWzBdKTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzLmxlbmd0aCA8IDIgJiYgVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHZlcnRpY2VzQVsxXSkpXG4gICAgICAgICAgICAgICAgc3VwcG9ydHMucHVzaCh2ZXJ0aWNlc0FbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSBvZiBvdmVybGFwcGluZyBidXQgbm8gdmVydGV4IGNvbnRhaW5tZW50XG4gICAgICAgIGlmIChzdXBwb3J0cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgc3VwcG9ydHMgPSBbdmVydGljZXNCWzBdXTtcbiAgICAgICAgXG4gICAgICAgIGNvbGxpc2lvbi5zdXBwb3J0cyA9IHN1cHBvcnRzO1xuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiB0d28gc2V0cyBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIF9vdmVybGFwQXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHZlcnRpY2VzQVxuICAgICAqIEBwYXJhbSB7fSB2ZXJ0aWNlc0JcbiAgICAgKiBAcGFyYW0ge30gYXhlc1xuICAgICAqIEByZXR1cm4gcmVzdWx0XG4gICAgICovXG4gICAgU0FULl9vdmVybGFwQXhlcyA9IGZ1bmN0aW9uKHZlcnRpY2VzQSwgdmVydGljZXNCLCBheGVzKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aW9uQSA9IFZlY3Rvci5fdGVtcFswXSwgXG4gICAgICAgICAgICBwcm9qZWN0aW9uQiA9IFZlY3Rvci5fdGVtcFsxXSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHsgb3ZlcmxhcDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgICAgIGF4aXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBheGlzID0gYXhlc1tpXTtcblxuICAgICAgICAgICAgU0FULl9wcm9qZWN0VG9BeGlzKHByb2plY3Rpb25BLCB2ZXJ0aWNlc0EsIGF4aXMpO1xuICAgICAgICAgICAgU0FULl9wcm9qZWN0VG9BeGlzKHByb2plY3Rpb25CLCB2ZXJ0aWNlc0IsIGF4aXMpO1xuXG4gICAgICAgICAgICBvdmVybGFwID0gTWF0aC5taW4ocHJvamVjdGlvbkEubWF4IC0gcHJvamVjdGlvbkIubWluLCBwcm9qZWN0aW9uQi5tYXggLSBwcm9qZWN0aW9uQS5taW4pO1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwIDwgcmVzdWx0Lm92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmF4aXMgPSBheGlzO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5heGlzTnVtYmVyID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIHZlcnRpY2VzIG9uIGFuIGF4aXMgYW5kIHJldHVybnMgYW4gaW50ZXJ2YWwuXG4gICAgICogQG1ldGhvZCBfcHJvamVjdFRvQXhpc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHByb2plY3Rpb25cbiAgICAgKiBAcGFyYW0ge30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge30gYXhpc1xuICAgICAqL1xuICAgIFNBVC5fcHJvamVjdFRvQXhpcyA9IGZ1bmN0aW9uKHByb2plY3Rpb24sIHZlcnRpY2VzLCBheGlzKSB7XG4gICAgICAgIHZhciBtaW4gPSBWZWN0b3IuZG90KHZlcnRpY2VzWzBdLCBheGlzKSxcbiAgICAgICAgICAgIG1heCA9IG1pbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZG90ID0gVmVjdG9yLmRvdCh2ZXJ0aWNlc1tpXSwgYXhpcyk7XG5cbiAgICAgICAgICAgIGlmIChkb3QgPiBtYXgpIHsgXG4gICAgICAgICAgICAgICAgbWF4ID0gZG90OyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluKSB7IFxuICAgICAgICAgICAgICAgIG1pbiA9IGRvdDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0aW9uLm1pbiA9IG1pbjtcbiAgICAgICAgcHJvamVjdGlvbi5tYXggPSBtYXg7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBGaW5kcyBzdXBwb3J0aW5nIHZlcnRpY2VzIGdpdmVuIHR3byBib2RpZXMgYWxvbmcgYSBnaXZlbiBkaXJlY3Rpb24gdXNpbmcgaGlsbC1jbGltYmluZy5cbiAgICAgKiBAbWV0aG9kIF9maW5kU3VwcG9ydHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBib2R5QVxuICAgICAqIEBwYXJhbSB7fSBib2R5QlxuICAgICAqIEBwYXJhbSB7fSBub3JtYWxcbiAgICAgKiBAcmV0dXJuIFt2ZWN0b3JdXG4gICAgICovXG4gICAgU0FULl9maW5kU3VwcG9ydHMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIG5vcm1hbCkge1xuICAgICAgICB2YXIgbmVhcmVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIHZlcnRleFRvQm9keSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gYm9keUIudmVydGljZXMsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uID0gYm9keUEucG9zaXRpb24sXG4gICAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIHZlcnRleEEsXG4gICAgICAgICAgICB2ZXJ0ZXhCO1xuXG4gICAgICAgIC8vIGZpbmQgY2xvc2VzdCB2ZXJ0ZXggb24gYm9keUJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICB2ZXJ0ZXhUb0JvZHkueCA9IHZlcnRleC54IC0gYm9keUFQb3NpdGlvbi54O1xuICAgICAgICAgICAgdmVydGV4VG9Cb2R5LnkgPSB2ZXJ0ZXgueSAtIGJvZHlBUG9zaXRpb24ueTtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gLVZlY3Rvci5kb3Qobm9ybWFsLCB2ZXJ0ZXhUb0JvZHkpO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBID0gdmVydGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBuZXh0IGNsb3Nlc3QgdmVydGV4IHVzaW5nIHRoZSB0d28gY29ubmVjdGVkIHRvIGl0XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSB2ZXJ0ZXhBLmluZGV4IC0gMSA+PSAwID8gdmVydGV4QS5pbmRleCAtIDEgOiB2ZXJ0aWNlcy5sZW5ndGggLSAxO1xuICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1twcmV2SW5kZXhdO1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueCA9IHZlcnRleC54IC0gYm9keUFQb3NpdGlvbi54O1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueSA9IHZlcnRleC55IC0gYm9keUFQb3NpdGlvbi55O1xuICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSAtVmVjdG9yLmRvdChub3JtYWwsIHZlcnRleFRvQm9keSk7XG4gICAgICAgIHZlcnRleEIgPSB2ZXJ0ZXg7XG5cbiAgICAgICAgdmFyIG5leHRJbmRleCA9ICh2ZXJ0ZXhBLmluZGV4ICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW25leHRJbmRleF07XG4gICAgICAgIHZlcnRleFRvQm9keS54ID0gdmVydGV4LnggLSBib2R5QVBvc2l0aW9uLng7XG4gICAgICAgIHZlcnRleFRvQm9keS55ID0gdmVydGV4LnkgLSBib2R5QVBvc2l0aW9uLnk7XG4gICAgICAgIGRpc3RhbmNlID0gLVZlY3Rvci5kb3Qobm9ybWFsLCB2ZXJ0ZXhUb0JvZHkpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZlcnRleEIgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3ZlcnRleEEsIHZlcnRleEJdO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGx1Z2luYCBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIGZvciByZWdpc3RlcmluZyBhbmQgaW5zdGFsbGluZyBwbHVnaW5zIG9uIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBQbHVnaW5cbiovXG5cbnZhciBQbHVnaW4gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbHVnaW47XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBQbHVnaW4uX3JlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBwbHVnaW4gb2JqZWN0IHNvIGl0IGNhbiBiZSByZXNvbHZlZCBsYXRlciBieSBuYW1lLlxuICAgICAqIEBtZXRob2QgcmVnaXN0ZXJcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4gdG8gcmVnaXN0ZXIuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luLlxuICAgICAqL1xuICAgIFBsdWdpbi5yZWdpc3RlciA9IGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICBpZiAoIVBsdWdpbi5pc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnZG9lcyBub3QgaW1wbGVtZW50IGFsbCByZXF1aXJlZCBmaWVsZHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGx1Z2luLm5hbWUgaW4gUGx1Z2luLl9yZWdpc3RyeSkge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWQgPSBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSxcbiAgICAgICAgICAgICAgICBwbHVnaW5WZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShwbHVnaW4udmVyc2lvbikubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRWZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShyZWdpc3RlcmVkLnZlcnNpb24pLm51bWJlcjtcblxuICAgICAgICAgICAgaWYgKHBsdWdpblZlcnNpb24gPiByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnd2FzIHVwZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdID0gcGx1Z2luO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW5WZXJzaW9uIDwgcmVnaXN0ZXJlZFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhyZWdpc3RlcmVkKSwgJ2NhbiBub3QgYmUgZG93bmdyYWRlZCB0bycsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luICE9PSByZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGFscmVhZHkgcmVnaXN0ZXJlZCB0byBkaWZmZXJlbnQgcGx1Z2luIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGx1Z2luO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBhIGRlcGVuZGVuY3kgdG8gYSBwbHVnaW4gb2JqZWN0IGZyb20gdGhlIHJlZ2lzdHJ5IGlmIGl0IGV4aXN0cy4gXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBtYXkgY29udGFpbiBhIHZlcnNpb24sIGJ1dCBvbmx5IHRoZSBuYW1lIG1hdHRlcnMgd2hlbiByZXNvbHZpbmcuXG4gICAgICogQG1ldGhvZCByZXNvbHZlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luIGlmIHJlc29sdmVkLCBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgUGx1Z2luLnJlc29sdmUgPSBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgIHJldHVybiBQbHVnaW4uX3JlZ2lzdHJ5W1BsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSkubmFtZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKiBAbWV0aG9kIHRvU3RyaW5nXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gUHJldHR5IHByaW50ZWQgcGx1Z2luIG5hbWUgYW5kIHZlcnNpb24uXG4gICAgICovXG4gICAgUGx1Z2luLnRvU3RyaW5nID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJyA/IHBsdWdpbiA6IChwbHVnaW4ubmFtZSB8fCAnYW5vbnltb3VzJykgKyAnQCcgKyAocGx1Z2luLnZlcnNpb24gfHwgcGx1Z2luLnJhbmdlIHx8ICcwLjAuMCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IG1lZXRzIHRoZSBtaW5pbXVtIHN0YW5kYXJkIHRvIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4uXG4gICAgICogVGhpcyBtZWFucyBpdCBtdXN0IGRlZmluZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgbmFtZWBcbiAgICAgKiAtIGB2ZXJzaW9uYFxuICAgICAqIC0gYGluc3RhbGxgXG4gICAgICogQG1ldGhvZCBpc1BsdWdpblxuICAgICAqIEBwYXJhbSBvYmoge30gVGhlIG9iaiB0byB0ZXN0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgb2JqZWN0IGNhbiBiZSBjb25zaWRlcmVkIGEgcGx1Z2luIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1BsdWdpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5uYW1lICYmIG9iai52ZXJzaW9uICYmIG9iai5pbnN0YWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAuXG4gICAgICogQG1ldGhvZCBpc1VzZWRcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIHBsdWdpbiBuYW1lLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1VzZWQgPSBmdW5jdGlvbihtb2R1bGUsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS51c2VkLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYHBsdWdpbi5mb3JgIGlzIGFwcGxpY2FibGUgdG8gYG1vZHVsZWAgYnkgY29tcGFyaW5nIGFnYWluc3QgYG1vZHVsZS5uYW1lYCBhbmQgYG1vZHVsZS52ZXJzaW9uYC5cbiAgICAgKiBJZiBgcGx1Z2luLmZvcmAgaXMgbm90IHNwZWNpZmllZCB0aGVuIGl0IGlzIGFzc3VtZWQgdG8gYmUgYXBwbGljYWJsZS5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHBsdWdpbi5mb3JgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEBtZXRob2QgaXNGb3JcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzRm9yID0gZnVuY3Rpb24ocGx1Z2luLCBtb2R1bGUpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHBsdWdpbi5mb3IgJiYgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShwbHVnaW4uZm9yKTtcbiAgICAgICAgcmV0dXJuICFwbHVnaW4uZm9yIHx8IChtb2R1bGUubmFtZSA9PT0gcGFyc2VkLm5hbWUgJiYgUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMobW9kdWxlLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YWxscyB0aGUgcGx1Z2lucyBieSBjYWxsaW5nIGBwbHVnaW4uaW5zdGFsbGAgb24gZWFjaCBwbHVnaW4gc3BlY2lmaWVkIGluIGBwbHVnaW5zYCBpZiBwYXNzZWQsIG90aGVyd2lzZSBgbW9kdWxlLnVzZXNgLlxuICAgICAqIEZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gYE1hdHRlcmAgc2VlIHRoZSBjb252ZW5pZW5jZSBmdW5jdGlvbiBgTWF0dGVyLnVzZWAuXG4gICAgICogUGx1Z2lucyBtYXkgYmUgc3BlY2lmaWVkIGVpdGhlciBieSB0aGVpciBuYW1lIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBwbHVnaW4gb2JqZWN0LlxuICAgICAqIFBsdWdpbnMgdGhlbXNlbHZlcyBtYXkgc3BlY2lmeSBmdXJ0aGVyIGRlcGVuZGVuY2llcywgYnV0IGVhY2ggcGx1Z2luIGlzIGluc3RhbGxlZCBvbmx5IG9uY2UuXG4gICAgICogT3JkZXIgaXMgaW1wb3J0YW50LCBhIHRvcG9sb2dpY2FsIHNvcnQgaXMgcGVyZm9ybWVkIHRvIGZpbmQgdGhlIGJlc3QgcmVzdWx0aW5nIG9yZGVyIG9mIGluc3RhbGxhdGlvbi5cbiAgICAgKiBUaGlzIHNvcnRpbmcgYXR0ZW1wdHMgdG8gc2F0aXNmeSBldmVyeSBkZXBlbmRlbmN5J3MgcmVxdWVzdGVkIG9yZGVyaW5nLCBidXQgbWF5IG5vdCBiZSBleGFjdCBpbiBhbGwgY2FzZXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiBsb2dzIHRoZSByZXN1bHRpbmcgc3RhdHVzIG9mIGVhY2ggZGVwZW5kZW5jeSBpbiB0aGUgY29uc29sZSwgYWxvbmcgd2l0aCBhbnkgd2FybmluZ3MuXG4gICAgICogLSBBIGdyZWVuIHRpY2sg4pyFIGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGFuZCBpbnN0YWxsZWQuXG4gICAgICogLSBBbiBvcmFuZ2UgZGlhbW9uZCDwn5S2IGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGJ1dCBhIHdhcm5pbmcgd2FzIHRocm93biBmb3IgaXQgb3Igb25lIGlmIGl0cyBkZXBlbmRlbmNpZXMuXG4gICAgICogLSBBIHJlZCBjcm9zcyDinYwgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXG4gICAgICogQXZvaWQgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIG1vZHVsZSB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cbiAgICAgKiBAbWV0aG9kIHVzZVxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZSBpbnN0YWxsIHBsdWdpbnMgb24uXG4gICAgICogQHBhcmFtIFtwbHVnaW5zPW1vZHVsZS51c2VzXSB7fSBUaGUgcGx1Z2lucyB0byBpbnN0YWxsIG9uIG1vZHVsZSAob3B0aW9uYWwsIGRlZmF1bHRzIHRvIGBtb2R1bGUudXNlc2ApLlxuICAgICAqL1xuICAgIFBsdWdpbi51c2UgPSBmdW5jdGlvbihtb2R1bGUsIHBsdWdpbnMpIHtcbiAgICAgICAgbW9kdWxlLnVzZXMgPSAobW9kdWxlLnVzZXMgfHwgW10pLmNvbmNhdChwbHVnaW5zIHx8IFtdKTtcblxuICAgICAgICBpZiAobW9kdWxlLnVzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW55IGRlcGVuZGVuY2llcyB0byBpbnN0YWxsLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IFBsdWdpbi5kZXBlbmRlbmNpZXMobW9kdWxlKSxcbiAgICAgICAgICAgIHNvcnRlZERlcGVuZGVuY2llcyA9IENvbW1vbi50b3BvbG9naWNhbFNvcnQoZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIHN0YXR1cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkRGVwZW5kZW5jaWVzW2ldID09PSBtb2R1bGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gUGx1Z2luLnJlc29sdmUoc29ydGVkRGVwZW5kZW5jaWVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4p2MICcgKyBzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzVXNlZChtb2R1bGUsIHBsdWdpbi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIVBsdWdpbi5pc0ZvcihwbHVnaW4sIG1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGZvcicsIHBsdWdpbi5mb3IsICdidXQgaW5zdGFsbGVkIG9uJywgUGx1Z2luLnRvU3RyaW5nKG1vZHVsZSkgKyAnLicpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pbnN0YWxsKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluc3RhbGwobW9kdWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBzcGVjaWZ5IGFuIGluc3RhbGwgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLl93YXJuZWQpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn8J+UtiAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwbHVnaW4uX3dhcm5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ+KchSAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2R1bGUudXNlZC5wdXNoKHBsdWdpbi5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0dXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQ29tbW9uLmluZm8oc3RhdHVzLmpvaW4oJyAgJykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGZpbmRzIGFsbCBvZiBhIG1vZHVsZSdzIGRlcGVuZGVuY2llcyBhbmQgcmV0dXJucyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY2llc1xuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEEgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jaWVzID0gZnVuY3Rpb24obW9kdWxlLCB0cmFja2VkKSB7XG4gICAgICAgIHZhciBwYXJzZWRCYXNlID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShtb2R1bGUpLFxuICAgICAgICAgICAgbmFtZSA9IHBhcnNlZEJhc2UubmFtZTtcblxuICAgICAgICB0cmFja2VkID0gdHJhY2tlZCB8fCB7fTtcblxuICAgICAgICBpZiAobmFtZSBpbiB0cmFja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtb2R1bGUgPSBQbHVnaW4ucmVzb2x2ZShtb2R1bGUpIHx8IG1vZHVsZTtcblxuICAgICAgICB0cmFja2VkW25hbWVdID0gQ29tbW9uLm1hcChtb2R1bGUudXNlcyB8fCBbXSwgZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgaWYgKFBsdWdpbi5pc1BsdWdpbihkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgICAgIFBsdWdpbi5yZWdpc3RlcihkZXBlbmRlbmN5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSksXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBQbHVnaW4ucmVzb2x2ZShkZXBlbmRlbmN5KTtcblxuICAgICAgICAgICAgaWYgKHJlc29sdmVkICYmICFQbHVnaW4udmVyc2lvblNhdGlzZmllcyhyZXNvbHZlZC52ZXJzaW9uLCBwYXJzZWQucmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhyZXNvbHZlZCksICdkb2VzIG5vdCBzYXRpc2Z5JyxcbiAgICAgICAgICAgICAgICAgICAgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZCksICd1c2VkIGJ5JywgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZEJhc2UpICsgJy4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmVkLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhkZXBlbmRlbmN5KSwgJ3VzZWQgYnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSksICdjb3VsZCBub3QgYmUgcmVzb2x2ZWQuJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGUuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQubmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja2VkW25hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBQbHVnaW4uZGVwZW5kZW5jaWVzKHRyYWNrZWRbbmFtZV1baV0sIHRyYWNrZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYWNrZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGRlcGVuZGVuY3kgc3RyaW5nIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgYFBsdWdpbi52ZXJzaW9uUGFyc2VgIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBmb3JtYXQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyBoYW5kbGUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIGFscmVhZHkgcmVzb2x2ZWQgKGUuZy4gYSBtb2R1bGUgb2JqZWN0KS5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY3lQYXJzZVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmN5IHtzdHJpbmd9IFRoZSBkZXBlbmRlbmN5IG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIGRlcGVuZGVuY3kgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc1N0cmluZyhkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAvXltcXHctXSsoQChcXCp8W1xcXn5dP1xcZCtcXC5cXGQrXFwuXFxkKygtWzAtOUEtWmEtei1dKyk/KSk/JC87XG5cbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5kZXBlbmRlbmN5UGFyc2U6JywgZGVwZW5kZW5jeSwgJ2lzIG5vdCBhIHZhbGlkIGRlcGVuZGVuY3kgc3RyaW5nLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kuc3BsaXQoJ0AnKVswXSxcbiAgICAgICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzFdIHx8ICcqJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBkZXBlbmRlbmN5Lm5hbWUsXG4gICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5yYW5nZSB8fCBkZXBlbmRlbmN5LnZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgdmVyc2lvbiBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy4gIFxuICAgICAqIFZlcnNpb25zIGFyZSBzdHJpY3RseSBvZiB0aGUgZm9ybWF0IGB4LnkuemAgKGFzIGluIFtzZW12ZXJdKGh0dHA6Ly9zZW12ZXIub3JnLykpLlxuICAgICAqIFZlcnNpb25zIG1heSBvcHRpb25hbGx5IGhhdmUgYSBwcmVyZWxlYXNlIHRhZyBpbiB0aGUgZm9ybWF0IGB4Lnkuei1hbHBoYWAuXG4gICAgICogUmFuZ2VzIGFyZSBhIHN0cmljdCBzdWJzZXQgb2YgW25wbSByYW5nZXNdKGh0dHBzOi8vZG9jcy5ucG1qcy5jb20vbWlzYy9zZW12ZXIjYWR2YW5jZWQtcmFuZ2Utc3ludGF4KS5cbiAgICAgKiBPbmx5IHRoZSBmb2xsb3dpbmcgcmFuZ2UgdHlwZXMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAtIFRpbGRlIHJhbmdlcyBlLmcuIGB+MS4yLjNgXG4gICAgICogLSBDYXJldCByYW5nZXMgZS5nLiBgXjEuMi4zYFxuICAgICAqIC0gR3JlYXRlciB0aGFuIHJhbmdlcyBlLmcuIGA+MS4yLjNgXG4gICAgICogLSBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgcmFuZ2VzIGUuZy4gYD49MS4yLjNgXG4gICAgICogLSBFeGFjdCB2ZXJzaW9uIGUuZy4gYDEuMi4zYFxuICAgICAqIC0gQW55IHZlcnNpb24gYCpgXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uUGFyc2VcbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHZlcnNpb24gcmFuZ2UgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25QYXJzZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oXFwqKXwoXFxefH58Pj18Pik/XFxzKigoXFxkKylcXC4oXFxkKylcXC4oXFxkKykpKC1bMC05QS1aYS16LV0rKT8kLztcblxuICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChyYW5nZSkpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udmVyc2lvblBhcnNlOicsIHJhbmdlLCAnaXMgbm90IGEgdmFsaWQgdmVyc2lvbiBvciByYW5nZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdHRlcm4uZXhlYyhyYW5nZSk7XG4gICAgICAgIHZhciBtYWpvciA9IE51bWJlcihwYXJ0c1s0XSk7XG4gICAgICAgIHZhciBtaW5vciA9IE51bWJlcihwYXJ0c1s1XSk7XG4gICAgICAgIHZhciBwYXRjaCA9IE51bWJlcihwYXJ0c1s2XSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmFuZ2U6IEJvb2xlYW4ocGFydHNbMV0gfHwgcGFydHNbMl0pLFxuICAgICAgICAgICAgdmVyc2lvbjogcGFydHNbM10sXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgICAgICBvcGVyYXRvcjogcGFydHNbMV0gfHwgcGFydHNbMl0gfHwgJycsXG4gICAgICAgICAgICBtYWpvcjogbWFqb3IsXG4gICAgICAgICAgICBtaW5vcjogbWlub3IsXG4gICAgICAgICAgICBwYXRjaDogcGF0Y2gsXG4gICAgICAgICAgICBwYXJ0czogW21ham9yLCBtaW5vciwgcGF0Y2hdLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogcGFydHNbN10sXG4gICAgICAgICAgICBudW1iZXI6IG1ham9yICogMWU4ICsgbWlub3IgKiAxZTQgKyBwYXRjaFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIHRoZSBnaXZlbiBgcmFuZ2VgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBJZiBhIHZlcnNpb24gb3IgcmFuZ2UgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBhbnkgdmVyc2lvbiAoYCpgKSBpcyBhc3N1bWVkIHRvIHNhdGlzZnkuXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uU2F0aXNmaWVzXG4gICAgICogQHBhcmFtIHZlcnNpb24ge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgcmFuZ2Ugc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIGByYW5nZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzID0gZnVuY3Rpb24odmVyc2lvbiwgcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSByYW5nZSB8fCAnKic7XG5cbiAgICAgICAgdmFyIHIgPSBQbHVnaW4udmVyc2lvblBhcnNlKHJhbmdlKSxcbiAgICAgICAgICAgIHYgPSBQbHVnaW4udmVyc2lvblBhcnNlKHZlcnNpb24pO1xuXG4gICAgICAgIGlmIChyLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnKicgfHwgdmVyc2lvbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPiByLm51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPj0gci5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnficpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm1pbm9yID09PSByLm1pbm9yICYmIHYucGF0Y2ggPj0gci5wYXRjaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICdeJykge1xuICAgICAgICAgICAgICAgIGlmIChyLm1ham9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm51bWJlciA+PSByLm51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoci5taW5vciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYubWlub3IgPT09IHIubWlub3IgJiYgdi5wYXRjaCA+PSByLnBhdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2LnBhdGNoID09PSByLnBhdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPT09IHJhbmdlIHx8IHZlcnNpb24gPT09ICcqJztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlIGlzIGEgc2ltcGxlIGNhbnZhcyBiYXNlZCByZW5kZXJlciBmb3IgdmlzdWFsaXNpbmcgaW5zdGFuY2VzIG9mIGBNYXR0ZXIuRW5naW5lYC5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJdCBpbmNsdWRlcyBhIG51bWJlciBvZiBkcmF3aW5nIG9wdGlvbnMgaW5jbHVkaW5nIHdpcmVmcmFtZSwgdmVjdG9yIHdpdGggc3VwcG9ydCBmb3Igc3ByaXRlcyBhbmQgdmlld3BvcnRzLlxuKlxuKiBAY2xhc3MgUmVuZGVyXG4qL1xuXG52YXIgUmVuZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhDb21tb24ubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIFJlbmRlci5fZ29vZEZwcyA9IDMwO1xuICAgIFJlbmRlci5fZ29vZERlbHRhID0gMTAwMCAvIDYwO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByZW5kZXJlci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge3JlbmRlcn0gQSBuZXcgcmVuZGVyZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiBSZW5kZXIsXG4gICAgICAgICAgICBlbmdpbmU6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgbW91c2U6IG51bGwsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlTaXplOiA2MCxcbiAgICAgICAgICAgICAgICBkZWx0YTogMCxcbiAgICAgICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lOiAwLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDAsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZDogMCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZW5naW5lRGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZWxhcHNlZEhpc3Rvcnk6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgcGl4ZWxSYXRpbzogMSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE0MTUxZicsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMxNDE1MWYnLFxuICAgICAgICAgICAgICAgIGhhc0JvdW5kczogISFvcHRpb25zLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NsZWVwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1N0YXRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCcm9hZHBoYXNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Qm91bmRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VmVsb2NpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb2xsaXNpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2VwYXJhdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBeGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZXJ0ZXhOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29udmV4SHVsbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93TW91c2VQb3NpdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVuZGVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlbmRlci5jYW52YXMpIHtcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSByZW5kZXIub3B0aW9ucy53aWR0aCB8fCByZW5kZXIuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSByZW5kZXIub3B0aW9ucy5oZWlnaHQgfHwgcmVuZGVyLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIubW91c2UgPSBvcHRpb25zLm1vdXNlO1xuICAgICAgICByZW5kZXIuZW5naW5lID0gb3B0aW9ucy5lbmdpbmU7XG4gICAgICAgIHJlbmRlci5jYW52YXMgPSByZW5kZXIuY2FudmFzIHx8IF9jcmVhdGVDYW52YXMocmVuZGVyLm9wdGlvbnMud2lkdGgsIHJlbmRlci5vcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHJlbmRlci5jb250ZXh0ID0gcmVuZGVyLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICByZW5kZXIudGV4dHVyZXMgPSB7fTtcblxuICAgICAgICByZW5kZXIuYm91bmRzID0gcmVuZGVyLmJvdW5kcyB8fCB7XG4gICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICB4OiByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHJlbmRlci5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvKHJlbmRlciwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tbW9uLmlzRWxlbWVudChyZW5kZXIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5lbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlci5jYW52YXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXIuY2FudmFzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIENvbW1vbi5sb2coJ1JlbmRlci5jcmVhdGU6IG9wdGlvbnMuZWxlbWVudCB3YXMgdW5kZWZpbmVkLCByZW5kZXIuY2FudmFzIHdhcyBjcmVhdGVkIGJ1dCBub3QgYXBwZW5kZWQnLCAnd2FybicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHVwZGF0ZXMgdGhlIHJlbmRlciBjYW52YXMgb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5ydW4gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AodGltZSl7XG4gICAgICAgICAgICByZW5kZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfdXBkYXRlVGltaW5nKHJlbmRlciwgdGltZSk7XG5cbiAgICAgICAgICAgIFJlbmRlci53b3JsZChyZW5kZXIsIHRpbWUpO1xuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMuc2hvd1N0YXRzIHx8IHJlbmRlci5vcHRpb25zLnNob3dEZWJ1Zykge1xuICAgICAgICAgICAgICAgIFJlbmRlci5zdGF0cyhyZW5kZXIsIHJlbmRlci5jb250ZXh0LCB0aW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnNob3dQZXJmb3JtYW5jZSB8fCByZW5kZXIub3B0aW9ucy5zaG93RGVidWcpIHtcbiAgICAgICAgICAgICAgICBSZW5kZXIucGVyZm9ybWFuY2UocmVuZGVyLCByZW5kZXIuY29udGV4dCwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuZHMgZXhlY3V0aW9uIG9mIGBSZW5kZXIucnVuYCBvbiB0aGUgZ2l2ZW4gYHJlbmRlcmAsIGJ5IGNhbmNlbGluZyB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgZXZlbnQgbG9vcC5cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0b3AgPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBpeGVsIHJhdGlvIG9mIHRoZSByZW5kZXJlciBhbmQgdXBkYXRlcyB0aGUgY2FudmFzLlxuICAgICAqIFRvIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBjb3JyZWN0IHJhdGlvLCBwYXNzIHRoZSBzdHJpbmcgYCdhdXRvJ2AgZm9yIGBwaXhlbFJhdGlvYC5cbiAgICAgKiBAbWV0aG9kIHNldFBpeGVsUmF0aW9cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW9cbiAgICAgKi9cbiAgICBSZW5kZXIuc2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKHJlbmRlciwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgY2FudmFzID0gcmVuZGVyLmNhbnZhcztcblxuICAgICAgICBpZiAocGl4ZWxSYXRpbyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBwaXhlbFJhdGlvID0gX2dldFBpeGVsUmF0aW8oY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMucGl4ZWxSYXRpbyA9IHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nLCBwaXhlbFJhdGlvKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgYW5kIHNpemVzIHRoZSB2aWV3cG9ydCBhcm91bmQgdGhlIGdpdmVuIG9iamVjdCBib3VuZHMuXG4gICAgICogT2JqZWN0cyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBvYmplY3QuYm91bmRzYFxuICAgICAqIC0gYG9iamVjdC5wb3NpdGlvbmBcbiAgICAgKiAtIGBvYmplY3QubWluYCBhbmQgYG9iamVjdC5tYXhgXG4gICAgICogLSBgb2JqZWN0LnhgIGFuZCBgb2JqZWN0LnlgXG4gICAgICogQG1ldGhvZCBsb29rQXRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcGFkZGluZ11cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtjZW50ZXI9dHJ1ZV1cbiAgICAgKi9cbiAgICBSZW5kZXIubG9va0F0ID0gZnVuY3Rpb24ocmVuZGVyLCBvYmplY3RzLCBwYWRkaW5nLCBjZW50ZXIpIHtcbiAgICAgICAgY2VudGVyID0gdHlwZW9mIGNlbnRlciAhPT0gJ3VuZGVmaW5lZCcgPyBjZW50ZXIgOiB0cnVlO1xuICAgICAgICBvYmplY3RzID0gQ29tbW9uLmlzQXJyYXkob2JqZWN0cykgPyBvYmplY3RzIDogW29iamVjdHNdO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZyB8fCB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRzIG9mIGFsbCBvYmplY3RzXG4gICAgICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgICAgICBtaW46IHsgeDogSW5maW5pdHksIHk6IEluZmluaXR5IH0sXG4gICAgICAgICAgICBtYXg6IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV0sXG4gICAgICAgICAgICAgICAgbWluID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWluIDogKG9iamVjdC5taW4gfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCksXG4gICAgICAgICAgICAgICAgbWF4ID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWF4IDogKG9iamVjdC5tYXggfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChtaW4gJiYgbWF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbi54IDwgYm91bmRzLm1pbi54KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnggPSBtaW4ueDtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueCA+IGJvdW5kcy5tYXgueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC54ID0gbWF4Lng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluLnkgPCBib3VuZHMubWluLnkpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSA9IG1pbi55O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heC55ID4gYm91bmRzLm1heC55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgPSBtYXgueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcmF0aW9zXG4gICAgICAgIHZhciB3aWR0aCA9IChib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpICsgMiAqIHBhZGRpbmcueCxcbiAgICAgICAgICAgIGhlaWdodCA9IChib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpICsgMiAqIHBhZGRpbmcueSxcbiAgICAgICAgICAgIHZpZXdIZWlnaHQgPSByZW5kZXIuY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdXaWR0aCA9IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICBvdXRlclJhdGlvID0gdmlld1dpZHRoIC8gdmlld0hlaWdodCxcbiAgICAgICAgICAgIGlubmVyUmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICAgIHNjYWxlWCA9IDEsXG4gICAgICAgICAgICBzY2FsZVkgPSAxO1xuXG4gICAgICAgIC8vIGZpbmQgc2NhbGUgZmFjdG9yXG4gICAgICAgIGlmIChpbm5lclJhdGlvID4gb3V0ZXJSYXRpbykge1xuICAgICAgICAgICAgc2NhbGVZID0gaW5uZXJSYXRpbyAvIG91dGVyUmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVggPSBvdXRlclJhdGlvIC8gaW5uZXJSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBib3VuZHNcbiAgICAgICAgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ID0gYm91bmRzLm1pbi54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ID0gYm91bmRzLm1pbi54ICsgd2lkdGggKiBzY2FsZVg7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgPSBib3VuZHMubWluLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgPSBib3VuZHMubWluLnkgKyBoZWlnaHQgKiBzY2FsZVk7XG5cbiAgICAgICAgLy8gY2VudGVyXG4gICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCArPSB3aWR0aCAqIDAuNSAtICh3aWR0aCAqIHNjYWxlWCkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ICs9IGhlaWdodCAqIDAuNSAtIChoZWlnaHQgKiBzY2FsZVkpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCAtPSBwYWRkaW5nLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55IC09IHBhZGRpbmcueTtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSAtPSBwYWRkaW5nLnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHZpZXdwb3J0IHRyYW5zZm9ybXMgYmFzZWQgb24gYHJlbmRlci5ib3VuZHNgIHRvIGEgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBzdGFydFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvIC8gYm91bmRzU2NhbGVYLCAwLCAwLCBcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gLyBib3VuZHNTY2FsZVksIDAsIDBcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJlbmRlci5jb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgYWxsIHRyYW5zZm9ybXMgb24gdGhlIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2QgZW5kVmlld1RyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdpdmVuIGBlbmdpbmVgJ3MgYE1hdHRlci5Xb3JsZGAgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBhbGwgcmVuZGVyaW5nIGFuZCBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHNjZW5lIGNoYW5nZXMuXG4gICAgICogQG1ldGhvZCB3b3JsZFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIud29ybGQgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKSxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXMsXG4gICAgICAgICAgICBjb250ZXh0ID0gcmVuZGVyLmNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nO1xuXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKSxcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSBvcHRpb25zLndpcmVmcmFtZXMgPyBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmQgOiBvcHRpb25zLmJhY2tncm91bmQsXG4gICAgICAgICAgICBib2RpZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZW5naW5lLnRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdiZWZvcmVSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gYXBwbHkgYmFja2dyb3VuZCBpZiBpdCBoYXMgY2hhbmdlZFxuICAgICAgICBpZiAocmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kICE9PSBiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgX2FwcGx5QmFja2dyb3VuZChyZW5kZXIsIGJhY2tncm91bmQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXMgd2l0aCBhIHRyYW5zcGFyZW50IGZpbGwsIHRvIGFsbG93IHRoZSBjYW52YXMgYmFja2dyb3VuZCB0byBzaG93XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgICAgICAvLyBoYW5kbGUgYm91bmRzXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBib2RpZXMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxCb2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFsbEJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCByZW5kZXIuYm91bmRzKSlcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgY29uc3RyYWludHMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxDb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gYWxsQ29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEFXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEJXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEFXb3JsZCkgfHwgQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QldvcmxkKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSB2aWV3XG4gICAgICAgICAgICBSZW5kZXIuc3RhcnRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICAgICAgaWYgKHJlbmRlci5tb3VzZSkge1xuICAgICAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gYWxsQ29uc3RyYWludHM7XG4gICAgICAgICAgICBib2RpZXMgPSBhbGxCb2RpZXM7XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDAsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMgfHwgKGVuZ2luZS5lbmFibGVTbGVlcGluZyAmJiBvcHRpb25zLnNob3dTbGVlcGluZykpIHtcbiAgICAgICAgICAgIC8vIGZ1bGx5IGZlYXR1cmVkIHJlbmRlcmluZyBvZiBib2RpZXNcbiAgICAgICAgICAgIFJlbmRlci5ib2RpZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbnZleEh1bGxzKVxuICAgICAgICAgICAgICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzZWQgbWV0aG9kIGZvciB3aXJlZnJhbWVzIG9ubHlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Qm91bmRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlCb3VuZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzIHx8IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlBeGVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93UG9zaXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZWxvY2l0eSlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5VmVsb2NpdHkocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dJZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUlkcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLnNlcGFyYXRpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dDb2xsaXNpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmNvbGxpc2lvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnMpXG4gICAgICAgICAgICBSZW5kZXIudmVydGV4TnVtYmVycyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb24pXG4gICAgICAgICAgICBSZW5kZXIubW91c2VQb3NpdGlvbihyZW5kZXIsIHJlbmRlci5tb3VzZSwgY29udGV4dCk7XG5cbiAgICAgICAgUmVuZGVyLmNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93QnJvYWRwaGFzZSlcbiAgICAgICAgICAgIFJlbmRlci5ncmlkKHJlbmRlciwgZW5naW5lLmdyaWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gcmV2ZXJ0IHZpZXcgdHJhbnNmb3Jtc1xuICAgICAgICAgICAgUmVuZGVyLmVuZFZpZXdUcmFuc2Zvcm0ocmVuZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJlbmRlciwgJ2FmdGVyUmVuZGVyJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGxvZyB0aGUgdGltZSBlbGFwc2VkIGNvbXB1dGluZyB0aGlzIHVwZGF0ZVxuICAgICAgICB0aW1pbmcubGFzdEVsYXBzZWQgPSBDb21tb24ubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgc3RhdGlzdGljcyBhYm91dCB0aGUgZW5naW5lIGFuZCB3b3JsZCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc3RhdHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RhdHMgPSBmdW5jdGlvbihyZW5kZXIsIGNvbnRleHQsIHRpbWUpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgcGFydHMgPSAwLFxuICAgICAgICAgICAgd2lkdGggPSA1NSxcbiAgICAgICAgICAgIGhlaWdodCA9IDQ0LFxuICAgICAgICAgICAgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvdW50IHBhcnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBwYXJ0cyArPSBib2RpZXNbaV0ucGFydHMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VjdGlvbnNcbiAgICAgICAgdmFyIHNlY3Rpb25zID0ge1xuICAgICAgICAgICAgJ1BhcnQnOiBwYXJ0cyxcbiAgICAgICAgICAgICdCb2R5JzogYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgICdDb25zJzogQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKS5sZW5ndGgsXG4gICAgICAgICAgICAnQ29tcCc6IENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKHdvcmxkKS5sZW5ndGgsXG4gICAgICAgICAgICAnUGFpcic6IGVuZ2luZS5wYWlycy5saXN0Lmxlbmd0aFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzBlMGYxOSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGggKiA1LjUsIGhlaWdodCk7XG5cbiAgICAgICAgY29udGV4dC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdyaWdodCc7XG5cbiAgICAgICAgLy8gc2VjdGlvbnNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNlY3Rpb25zKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2tleV07XG4gICAgICAgICAgICAvLyBsYWJlbFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2FhYSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGtleSwgeCArIHdpZHRoLCB5ICsgOCk7XG5cbiAgICAgICAgICAgIC8vIHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZWVlJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoc2VjdGlvbiwgeCArIHdpZHRoLCB5ICsgMjYpO1xuXG4gICAgICAgICAgICB4ICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgZW5naW5lIGFuZCByZW5kZXIgcGVyZm9ybWFuY2UgaW5mb3JtYXRpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHBlcmZvcm1hbmNlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5wZXJmb3JtYW5jZSA9IGZ1bmN0aW9uKHJlbmRlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHRpbWluZyA9IHJlbmRlci50aW1pbmcsXG4gICAgICAgICAgICBkZWx0YUhpc3RvcnkgPSB0aW1pbmcuZGVsdGFIaXN0b3J5LFxuICAgICAgICAgICAgZWxhcHNlZEhpc3RvcnkgPSB0aW1pbmcuZWxhcHNlZEhpc3RvcnksXG4gICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSA9IHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIGVuZ2luZURlbHRhSGlzdG9yeSA9IHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeSA9IHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVEZWx0YSA9IGVuZ2luZS50aW1pbmcubGFzdERlbHRhO1xuICAgICAgICBcbiAgICAgICAgdmFyIGRlbHRhTWVhbiA9IF9tZWFuKGRlbHRhSGlzdG9yeSksXG4gICAgICAgICAgICBlbGFwc2VkTWVhbiA9IF9tZWFuKGVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIGVuZ2luZURlbHRhTWVhbiA9IF9tZWFuKGVuZ2luZURlbHRhSGlzdG9yeSksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkTWVhbiA9IF9tZWFuKGVuZ2luZUVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRNZWFuID0gX21lYW4odGltZXN0YW1wRWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgcmF0ZU1lYW4gPSAodGltZXN0YW1wRWxhcHNlZE1lYW4gLyBkZWx0YU1lYW4pIHx8IDAsXG4gICAgICAgICAgICBmcHMgPSAoMTAwMCAvIGRlbHRhTWVhbikgfHwgMDtcblxuICAgICAgICB2YXIgZ3JhcGhIZWlnaHQgPSA0LFxuICAgICAgICAgICAgZ2FwID0gMTIsXG4gICAgICAgICAgICB3aWR0aCA9IDYwLFxuICAgICAgICAgICAgaGVpZ2h0ID0gMzQsXG4gICAgICAgICAgICB4ID0gMTAsXG4gICAgICAgICAgICB5ID0gNjk7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMGUwZjE5JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCA1MCwgZ2FwICogNCArIHdpZHRoICogNSArIDIyLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIHNob3cgRlBTXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4LCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGRlbHRhSGlzdG9yeS5sZW5ndGgsIFxuICAgICAgICAgICAgTWF0aC5yb3VuZChmcHMpICsgJyBmcHMnLCBcbiAgICAgICAgICAgIGZwcyAvIFJlbmRlci5fZ29vZEZwcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChkZWx0YUhpc3RvcnlbaV0gLyBkZWx0YU1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIGRlbHRhXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgZ2FwICsgd2lkdGgsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVEZWx0YS50b0ZpeGVkKDIpICsgJyBkdCcsIFxuICAgICAgICAgICAgUmVuZGVyLl9nb29kRGVsdGEgLyBsYXN0RW5naW5lRGVsdGEsXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZW5naW5lRGVsdGFIaXN0b3J5W2ldIC8gZW5naW5lRGVsdGFNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGVuZ2luZSB1cGRhdGUgdGltZVxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIChnYXAgKyB3aWR0aCkgKiAyLCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRNZWFuLnRvRml4ZWQoMikgKyAnIHV0JywgXG4gICAgICAgICAgICAxIC0gKGVuZ2luZUVsYXBzZWRNZWFuIC8gUmVuZGVyLl9nb29kRnBzKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbmdpbmVFbGFwc2VkSGlzdG9yeVtpXSAvIGVuZ2luZUVsYXBzZWRNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IHJlbmRlciB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDMsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgcnQnLCBcbiAgICAgICAgICAgIDEgLSAoZWxhcHNlZE1lYW4gLyBSZW5kZXIuX2dvb2RGcHMpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVsYXBzZWRIaXN0b3J5W2ldIC8gZWxhcHNlZE1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZWZmZWN0aXZlIHNwZWVkXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDQsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgdGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBcbiAgICAgICAgICAgIHJhdGVNZWFuLnRvRml4ZWQoMikgKyAnIHgnLCBcbiAgICAgICAgICAgIHJhdGVNZWFuICogcmF0ZU1lYW4gKiByYXRlTWVhbixcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuICgoKHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5W2ldIC8gZGVsdGFIaXN0b3J5W2ldKSAvIHJhdGVNZWFuKSB8fCAwKSAtIDE7IH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIGxhYmVsLCBpbmRpY2F0b3IgYW5kIGEgY2hhcnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluZGljYXRvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBsb3RZXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXR1cyA9IGZ1bmN0aW9uKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvdW50LCBsYWJlbCwgaW5kaWNhdG9yLCBwbG90WSkge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzg4OCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyM0NDQnO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSArIDcsIHdpZHRoLCAxKTtcblxuICAgICAgICAvLyBjaGFydFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5ICsgNyAtIGhlaWdodCAqIENvbW1vbi5jbGFtcCgwLjQgKiBwbG90WSgwKSwgLTIsIDIpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4ICsgaSwgeSArIDcgLSAoaSA8IGNvdW50ID8gaGVpZ2h0ICogQ29tbW9uLmNsYW1wKDAuNCAqIHBsb3RZKGkpLCAtMiwgMikgOiAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAvLyBpbmRpY2F0b3JcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBDb21tb24uY2xhbXAoMjUgKyA5NSAqIGluZGljYXRvciwgMCwgMTIwKSArICcsMTAwJSw2MCUpJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5IC0gNywgNCwgNCk7XG5cbiAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgY29udGV4dC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxhYmVsLCB4ICsgd2lkdGgsIHkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29uc3RyYWludHMgPSBmdW5jdGlvbihjb25zdHJhaW50cywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LnJlbmRlci52aXNpYmxlIHx8ICFjb25zdHJhaW50LnBvaW50QSB8fCAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDtcblxuICAgICAgICAgICAgaWYgKGJvZHlBKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gY29uc3RyYWludC5wb2ludEE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAncGluJykge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2R5Qikge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29uc3RyYWludC5wb2ludEI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKGVuZCwgc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLnBlcnAoVmVjdG9yLm5vcm1hbGlzZShkZWx0YSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbHMgPSBNYXRoLmNlaWwoQ29tbW9uLmNsYW1wKGNvbnN0cmFpbnQubGVuZ3RoIC8gNSwgMTIsIDIwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjb2lsczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBqICUgMiA9PT0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueCArIGRlbHRhLnggKiAoaiAvIGNvaWxzKSArIG5vcm1hbC54ICogb2Zmc2V0ICogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC55ICsgZGVsdGEueSAqIChqIC8gY29pbHMpICsgbm9ybWFsLnkgKiBvZmZzZXQgKiA0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIuYW5jaG9ycykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5hcmMoZW5kLngsIGVuZC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2RpZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSBvcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzIHx8ICFvcHRpb25zLndpcmVmcmFtZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFydC5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93U2xlZXBpbmcgJiYgYm9keS5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjUgKiBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5yZW5kZXIub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIuc3ByaXRlICYmIHBhcnQucmVuZGVyLnNwcml0ZS50ZXh0dXJlICYmICFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBzcHJpdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHBhcnQucmVuZGVyLnNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIHNwcml0ZS50ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZShwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKHBhcnQuYW5nbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiAtc3ByaXRlLnhPZmZzZXQgKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiAtc3ByaXRlLnlPZmZzZXQgKiBzcHJpdGUueVNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIHNwcml0ZS55U2NhbGVcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgdHJhbnNsYXRpb24sIGhvcGVmdWxseSBmYXN0ZXIgdGhhbiBzYXZlIC8gcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZSgtcGFydC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKC1wYXJ0LnBvc2l0aW9uLngsIC1wYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgcG9seWdvblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5jaXJjbGVSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgcGFydC5jaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gcGFydC5yZW5kZXIuZmlsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBwYXJ0LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHBhcnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcHRpbWlzZWQgbWV0aG9kIGZvciBkcmF3aW5nIGJvZHkgd2lyZWZyYW1lcyBpbiBvbmUgcGFzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5V2lyZWZyYW1lc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlXaXJlZnJhbWVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSByZW5kZXIub3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlcyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCBib2RpZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnZlcnRpY2VzW2ogLSAxXS5pc0ludGVybmFsIHx8IHNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC52ZXJ0aWNlc1tqXS5pc0ludGVybmFsICYmICFzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLngsIHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogT3B0aW1pc2VkIG1ldGhvZCBmb3IgZHJhd2luZyBib2R5IGNvbnZleCBodWxsIHdpcmVmcmFtZXMgaW4gb25lIHBhc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUNvbnZleEh1bGxzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUNvbnZleEh1bGxzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29udmV4IGh1bGxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSB8fCBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgYm9keS52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbal0ueCwgYm9keS52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYm9keSB2ZXJ0ZXggbnVtYmVycy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdmVydGV4TnVtYmVyc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnZlcnRleE51bWJlcnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgZm9yIChrID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgcGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFRleHQoaSArICdfJyArIGosIHBhcnQucG9zaXRpb24ueCArIChwYXJ0LnZlcnRpY2VzW2pdLnggLSBwYXJ0LnBvc2l0aW9uLngpICogMC44LCBwYXJ0LnBvc2l0aW9uLnkgKyAocGFydC52ZXJ0aWNlc1tqXS55IC0gcGFydC5wb3NpdGlvbi55KSAqIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbW91c2UgcG9zaXRpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIG1vdXNlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIubW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHJlbmRlciwgbW91c2UsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknO1xuICAgICAgICBjLmZpbGxUZXh0KG1vdXNlLnBvc2l0aW9uLnggKyAnICAnICsgbW91c2UucG9zaXRpb24ueSwgbW91c2UucG9zaXRpb24ueCArIDUsIG1vdXNlLnBvc2l0aW9uLnkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBib3VuZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUJvdW5kc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlCb3VuZHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYy5yZWN0KHBhcnQuYm91bmRzLm1pbi54LCBwYXJ0LmJvdW5kcy5taW4ueSwgcGFydC5ib3VuZHMubWF4LnggLSBwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWF4LnkgLSBwYXJ0LmJvdW5kcy5taW4ueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBhbmdsZSBpbmRpY2F0b3JzIGFuZCBheGVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlBeGVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUF4ZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gYm9keS5wYXJ0cztcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93QXhlcykge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgYXhlc1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnQuYXhlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF4aXMgPSBwYXJ0LmF4ZXNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnBvc2l0aW9uLnggKyBheGlzLnggKiAyMCwgcGFydC5wb3NpdGlvbi55ICsgYXhpcy55ICogMjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhIHNpbmdsZSBheGlzIGluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oKHBhcnQudmVydGljZXNbMF0ueCArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0LnZlcnRpY2VzWzBdLnkgKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLnkpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdvdmVybGF5JztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBwb3NpdGlvbnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVBvc2l0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjdXJyZW50IHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgMywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC41KSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgcHJldmlvdXMgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGMuYXJjKGJvZHkucG9zaXRpb25QcmV2LngsIGJvZHkucG9zaXRpb25QcmV2LnksIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuOCknO1xuICAgICAgICBjLmZpbGwoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSB2ZWxvY2l0eVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5VmVsb2NpdHkgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keS5wb3NpdGlvbi54ICsgKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpICogMiwgYm9keS5wb3NpdGlvbi55ICsgKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGlkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5SWRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUlkcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghYm9kaWVzW2ldLnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgYy5mb250ID0gXCIxMnB4IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KHBhcnQuaWQsIHBhcnQucG9zaXRpb24ueCArIDEwLCBwYXJ0LnBvc2l0aW9uLnkgLSAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29sbGlzaW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgcGFpcnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvcnJlY3RlZCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb2xsaXNpb24gcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuICAgICAgICAgICAgICAgIGMucmVjdCh2ZXJ0ZXgueCAtIDEuNSwgdmVydGV4LnkgLSAxLjUsIDMuNSwgMy41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBub3JtYWxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuXG4gICAgICAgICAgICBpZiAocGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFBvc1ggPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC54LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NZID0gcGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueTtcblxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NYID0gKHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LnggKyBwYWlyLmFjdGl2ZUNvbnRhY3RzWzFdLnZlcnRleC54KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueSArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LnkpIC8gMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uLmJvZHlCID09PSBjb2xsaXNpb24uc3VwcG9ydHNbMF0uYm9keSB8fCBjb2xsaXNpb24uYm9keUEuaXNTdGF0aWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8obm9ybWFsUG9zWCAtIGNvbGxpc2lvbi5ub3JtYWwueCAqIDgsIG5vcm1hbFBvc1kgLSBjb2xsaXNpb24ubm9ybWFsLnkgKiA4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYICsgY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSArIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKG5vcm1hbFBvc1gsIG5vcm1hbFBvc1kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc2VwYXJhdGlvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnNlcGFyYXRpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHNlcGFyYXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICAgICAgdmFyIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5Qi5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlCLnBvc2l0aW9uLngsIGJvZHlCLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUIucG9zaXRpb24ueCAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUIucG9zaXRpb24ueSAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG5cbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5QS5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlBLnBvc2l0aW9uLngsIGJvZHlBLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUEucG9zaXRpb24ueCArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUEucG9zaXRpb24ueSArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGdyaWRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmdyaWQgPSBmdW5jdGlvbihyZW5kZXIsIGdyaWQsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTgwLDAsMC4xKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE4MCwwLDAuNSknO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICB2YXIgYnVja2V0S2V5cyA9IENvbW1vbi5rZXlzKGdyaWQuYnVja2V0cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWNrZXRLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnVja2V0SWQgPSBidWNrZXRLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZ3JpZC5idWNrZXRzW2J1Y2tldElkXS5sZW5ndGggPCAyKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gYnVja2V0SWQuc3BsaXQoL0N8Ui8pO1xuICAgICAgICAgICAgYy5yZWN0KDAuNSArIHBhcnNlSW50KHJlZ2lvblsxXSwgMTApICogZ3JpZC5idWNrZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAwLjUgKyBwYXJzZUludChyZWdpb25bMl0sIDEwKSAqIGdyaWQuYnVja2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGdyaWQuYnVja2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgZ3JpZC5idWNrZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge2luc3BlY3Rvcn0gaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmluc3BlY3RvciA9IGZ1bmN0aW9uKGluc3BlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gaW5zcGVjdG9yLmVuZ2luZSxcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW5zcGVjdG9yLnNlbGVjdGVkLFxuICAgICAgICAgICAgcmVuZGVyID0gaW5zcGVjdG9yLnJlbmRlcixcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvdW5kcztcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIHZhciBib3VuZHNXaWR0aCA9IHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVZID0gYm91bmRzSGVpZ2h0IC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEgLyBib3VuZHNTY2FsZVgsIDEgLyBib3VuZHNTY2FsZVkpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRbaV0uZGF0YTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjkpJztcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goWzEsMl0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBib2R5IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICBib3VuZHMgPSBpdGVtLmJvdW5kcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAtIDMpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAtIDMpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCArIDYpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSArIDYpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgY29uc3RyYWludCBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gaXRlbS5wb2ludEE7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYm9keUEpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ID0gaXRlbS5wb2ludEI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW5kZXIgc2VsZWN0aW9uIHJlZ2lvblxuICAgICAgICBpZiAoaW5zcGVjdG9yLnNlbGVjdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNiknO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC4xKSc7XG4gICAgICAgICAgICBib3VuZHMgPSBpbnNwZWN0b3Iuc2VsZWN0Qm91bmRzO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55KSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpXG4gICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyByZW5kZXIgdGltaW5nLlxuICAgICAqIEBtZXRob2QgX3VwZGF0ZVRpbWluZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgdmFyIF91cGRhdGVUaW1pbmcgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nLFxuICAgICAgICAgICAgaGlzdG9yeVNpemUgPSB0aW1pbmcuaGlzdG9yeVNpemUsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcDtcblxuICAgICAgICB0aW1pbmcuZGVsdGEgPSB0aW1lIC0gdGltaW5nLmxhc3RUaW1lIHx8IFJlbmRlci5fZ29vZERlbHRhO1xuICAgICAgICB0aW1pbmcubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkID0gdGltZXN0YW1wIC0gdGltaW5nLmxhc3RUaW1lc3RhbXAgfHwgMDtcbiAgICAgICAgdGltaW5nLmxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgdGltaW5nLmRlbHRhSGlzdG9yeS51bnNoaWZ0KHRpbWluZy5kZWx0YSk7XG4gICAgICAgIHRpbWluZy5kZWx0YUhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmRlbHRhSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5LnVuc2hpZnQoZW5naW5lLnRpbWluZy5sYXN0RGVsdGEpO1xuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5LnVuc2hpZnQodGltaW5nLnRpbWVzdGFtcEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS51bnNoaWZ0KGVuZ2luZS50aW1pbmcubGFzdEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbGFwc2VkSGlzdG9yeS51bnNoaWZ0KHRpbWluZy5sYXN0RWxhcHNlZCk7XG4gICAgICAgIHRpbWluZy5lbGFwc2VkSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1lYW4gdmFsdWUgb2YgdGhlIGdpdmVuIG51bWJlcnMuXG4gICAgICogQG1ldGhvZCBfbWVhblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gdmFsdWVzXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgbWVhbiBvZiBnaXZlbiB2YWx1ZXNcbiAgICAgKi9cbiAgICB2YXIgX21lYW4gPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocmVzdWx0IC8gdmFsdWVzLmxlbmd0aCkgfHwgMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQ2FudmFzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gd2lkdGhcbiAgICAgKiBAcGFyYW0ge30gaGVpZ2h0XG4gICAgICogQHJldHVybiBjYW52YXNcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICBjYW52YXMub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBpeGVsIHJhdGlvIG9mIHRoZSBjYW52YXMuXG4gICAgICogQG1ldGhvZCBfZ2V0UGl4ZWxSYXRpb1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBwaXhlbCByYXRpb1xuICAgICAqL1xuICAgIHZhciBfZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXG4gICAgICAgICAgICBiYWNraW5nU3RvcmVQaXhlbFJhdGlvID0gY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICAgIHJldHVybiBkZXZpY2VQaXhlbFJhdGlvIC8gYmFja2luZ1N0b3JlUGl4ZWxSYXRpbztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVxdWVzdGVkIHRleHR1cmUgKGFuIEltYWdlKSB2aWEgaXRzIHBhdGhcbiAgICAgKiBAbWV0aG9kIF9nZXRUZXh0dXJlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlUGF0aFxuICAgICAqIEByZXR1cm4ge0ltYWdlfSB0ZXh0dXJlXG4gICAgICovXG4gICAgdmFyIF9nZXRUZXh0dXJlID0gZnVuY3Rpb24ocmVuZGVyLCBpbWFnZVBhdGgpIHtcbiAgICAgICAgdmFyIGltYWdlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF07XG5cbiAgICAgICAgaWYgKGltYWdlKVxuICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xuXG4gICAgICAgIGltYWdlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF0gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VQYXRoO1xuXG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgYmFja2dyb3VuZCB0byB0aGUgY2FudmFzIHVzaW5nIENTUy5cbiAgICAgKiBAbWV0aG9kIGFwcGx5QmFja2dyb3VuZFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kXG4gICAgICovXG4gICAgdmFyIF9hcHBseUJhY2tncm91bmQgPSBmdW5jdGlvbihyZW5kZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgdmFyIGNzc0JhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gICAgICAgIGlmICgvKGpwZ3xnaWZ8cG5nKSQvLnRlc3QoYmFja2dyb3VuZCkpXG4gICAgICAgICAgICBjc3NCYWNrZ3JvdW5kID0gJ3VybCgnICsgYmFja2dyb3VuZCArICcpJztcblxuICAgICAgICByZW5kZXIuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjc3NCYWNrZ3JvdW5kO1xuICAgICAgICByZW5kZXIuY2FudmFzLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgICAgIHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYmFjay1yZWZlcmVuY2UgdG8gdGhlIGBNYXR0ZXIuUmVuZGVyYCBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29udHJvbGxlclxuICAgICAqIEB0eXBlIHJlbmRlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGBNYXR0ZXIuRW5naW5lYCBpbnN0YW5jZSB0byBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuZ2luZVxuICAgICAqIEB0eXBlIGVuZ2luZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGNhbnZhcyBpcyB0byBiZSBpbnNlcnRlZCAoaWYgYHJlbmRlci5jYW52YXNgIGhhcyBub3QgYmVlbiBzcGVjaWZpZWQpXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZWxlbWVudFxuICAgICAqIEB0eXBlIEhUTUxFbGVtZW50XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyBlbGVtZW50IHRvIHJlbmRlciB0by4gSWYgbm90IHNwZWNpZmllZCwgb25lIHdpbGwgYmUgY3JlYXRlZCBpZiBgcmVuZGVyLmVsZW1lbnRgIGhhcyBiZWVuIHNwZWNpZmllZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjYW52YXNcbiAgICAgKiBAdHlwZSBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgc3BlY2lmaWVzIHRoZSBkcmF3aW5nIHZpZXcgcmVnaW9uLlxuICAgICAqIFJlbmRlcmluZyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgYW5kIHNjYWxlZCB0byBmaXQgd2l0aGluIHRoZSBjYW52YXMgc2l6ZSAoYHJlbmRlci5vcHRpb25zLndpZHRoYCBhbmQgYHJlbmRlci5vcHRpb25zLmhlaWdodGApLlxuICAgICAqIFRoaXMgYWxsb3dzIGZvciBjcmVhdGluZyB2aWV3cyB0aGF0IGNhbiBwYW4gb3Igem9vbSBhcm91bmQgdGhlIHNjZW5lLlxuICAgICAqIFlvdSBtdXN0IGFsc28gc2V0IGByZW5kZXIub3B0aW9ucy5oYXNCb3VuZHNgIHRvIGB0cnVlYCB0byBlbmFibGUgYm91bmRlZCByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgZnJvbSB0aGUgYHJlbmRlci5jYW52YXNgIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29udGV4dFxuICAgICAqIEB0eXBlIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwcml0ZSB0ZXh0dXJlIGNhY2hlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRleHR1cmVzXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBtb3VzZSB0byByZW5kZXIgaWYgYHJlbmRlci5vcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uYCBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9mIHRoZSByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBTZWUgYWxzbyB0aGUgYG9wdGlvbnMucGl4ZWxSYXRpb2AgcHJvcGVydHkgdG8gY2hhbmdlIHJlbmRlciBxdWFsaXR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA4MDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgaGVpZ2h0IGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogU2VlIGFsc28gdGhlIGBvcHRpb25zLnBpeGVsUmF0aW9gIHByb3BlcnR5IHRvIGNoYW5nZSByZW5kZXIgcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIFtwaXhlbCByYXRpb10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9kZXZpY2VQaXhlbFJhdGlvKSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5waXhlbFJhdGlvXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGRpc2FibGVkLlxuICAgICAqIFRoaXMgbWF5IGJlIGFsc28gc2V0IHRvIGAndHJhbnNwYXJlbnQnYCBvciBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuYmFja2dyb3VuZFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICcjMTQxNTFmJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGVuYWJsZWQuXG4gICAgICogVGhpcyBtYXkgYmUgYWxzbyBzZXQgdG8gYCd0cmFuc3BhcmVudCdgIG9yIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVCYWNrZ3JvdW5kXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgJyMxNDE1MWYnXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgaWYgYHJlbmRlci5ib3VuZHNgIHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGFzQm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgYWxsIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXlzIHRvZ2V0aGVyLiAgXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmQgaGFzIHByaW9yaXR5IG92ZXIgdGhlIHZhbHVlcyBvZjpcbiAgICAgKlxuICAgICAqIC0gYHJlbmRlci5vcHRpb25zLnNob3dTdGF0c2BcbiAgICAgKiAtIGByZW5kZXIub3B0aW9ucy5zaG93UGVyZm9ybWFuY2VgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZW5naW5lIHN0YXRzIGluZm8gb3ZlcmxheS4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGJvZHkgcGFydHMgdG90YWxcbiAgICAgKiAtIGJvZHkgdG90YWxcbiAgICAgKiAtIGNvbnN0cmFpbnRzIHRvdGFsXG4gICAgICogLSBjb21wb3NpdGVzIHRvdGFsXG4gICAgICogLSBjb2xsaXNpb24gcGFpcnMgdG90YWxcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTdGF0c1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHBlcmZvcm1hbmNlIGNoYXJ0cy4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGZyZXF1ZW5jeSAoZS5nLiA2MCBmcHMpXG4gICAgICogLSBleGFjdCBlbmdpbmUgZGVsdGEgdGltZSB1c2VkIGZvciBsYXN0IHVwZGF0ZSAoZS5nLiAxNi42Nm1zKVxuICAgICAqIC0gYXZlcmFnZSBlbmdpbmUgZXhlY3V0aW9uIGR1cmF0aW9uIChlLmcuIDUuMDBtcylcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGV4ZWN1dGlvbiBkdXJhdGlvbiAoZS5nLiAwLjQwbXMpXG4gICAgICogLSBhdmVyYWdlIGVmZmVjdGl2ZSBwbGF5IHNwZWVkIChlLmcuICcxLjAweCcgaXMgJ3JlYWwtdGltZScpXG4gICAgICpcbiAgICAgKiBFYWNoIHZhbHVlIGlzIHJlY29yZGVkIG92ZXIgYSBmaXhlZCBzYW1wbGUgb2YgcGFzdCBmcmFtZXMgKDYwIGZyYW1lcykuXG4gICAgICpcbiAgICAgKiBBIGNoYXJ0IHNob3duIGJlbG93IGVhY2ggdmFsdWUgaW5kaWNhdGVzIHRoZSB2YXJpYW5jZSBmcm9tIHRoZSBhdmVyYWdlIG92ZXIgdGhlIHNhbXBsZS5cbiAgICAgKiBUaGUgbW9yZSBzdGFibGUgb3IgZml4ZWQgdGhlIHZhbHVlIGlzIHRoZSBmbGF0dGVyIHRoZSBjaGFydCB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQZXJmb3JtYW5jZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSByZW5kZXJpbmcgZW50aXJlbHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5lbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gdG9nZ2xlIHdpcmVmcmFtZSByZW5kZXJpbmcgb3RoZXJ3aXNlIHNvbGlkIGZpbGwgcmVuZGVyaW5nIGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBzbGVlcGluZyBib2RpZXMgaW5kaWNhdG9ycy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgY29sbGlzaW9uIGJyb2FkcGhhc2UgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dCcm9hZHBoYXNlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYm91bmRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Qm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVsb2NpdHkgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZWxvY2l0eVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGNvbGxpc2lvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dDb2xsaXNpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGNvbGxpc2lvbiByZXNvbHZlciBzZXBhcmF0aW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYXhlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0F4ZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBwb3NpdGlvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQb3NpdGlvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBhbmdsZSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYW5kIHBhcnQgaWRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93SWRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVydGV4IG51bWJlcnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZXJ0ZXhOdW1iZXJzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgY29udmV4IGh1bGxzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Q29udmV4SHVsbHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBpbnRlcm5hbCBlZGdlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgbW91c2UgcG9zaXRpb24gZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29udGFjdGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIGNvbnRhY3RzLlxuKlxuKiBAY2xhc3MgQ29udGFjdFxuKi9cblxudmFyIENvbnRhY3QgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0O1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbnRhY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRleH0gdmVydGV4XG4gICAgICogQHJldHVybiB7Y29udGFjdH0gQSBuZXcgY29udGFjdFxuICAgICAqL1xuICAgIENvbnRhY3QuY3JlYXRlID0gZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogQ29udGFjdC5pZCh2ZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlOiAwLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2U6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGNvbnRhY3QgaWQuXG4gICAgICogQG1ldGhvZCBpZFxuICAgICAqIEBwYXJhbSB7dmVydGV4fSB2ZXJ0ZXhcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBjb250YWN0SURcbiAgICAgKi9cbiAgICBDb250YWN0LmlkID0gZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgIHJldHVybiB2ZXJ0ZXguYm9keS5pZCArICdfJyArIHZlcnRleC5pbmRleDtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkVuZ2luZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgZW5naW5lcy5cbiogQW4gZW5naW5lIGlzIGEgY29udHJvbGxlciB0aGF0IG1hbmFnZXMgdXBkYXRpbmcgdGhlIHNpbXVsYXRpb24gb2YgdGhlIHdvcmxkLlxuKiBTZWUgYE1hdHRlci5SdW5uZXJgIGZvciBhbiBvcHRpb25hbCBnYW1lIGxvb3AgdXRpbGl0eS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEVuZ2luZVxuKi9cblxudmFyIEVuZ2luZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZTtcblxudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBHcmlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbkl0ZXJhdGlvbnM6IDYsXG4gICAgICAgICAgICB2ZWxvY2l0eUl0ZXJhdGlvbnM6IDQsXG4gICAgICAgICAgICBjb25zdHJhaW50SXRlcmF0aW9uczogMixcbiAgICAgICAgICAgIGVuYWJsZVNsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgZ3JpZDogbnVsbCxcbiAgICAgICAgICAgIGdyYXZpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuMDAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgICAgICBsYXN0RGVsdGE6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZW5naW5lID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgZW5naW5lLndvcmxkID0gb3B0aW9ucy53b3JsZCB8fCBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdXb3JsZCcgfSk7XG4gICAgICAgIGVuZ2luZS5ncmlkID0gR3JpZC5jcmVhdGUob3B0aW9ucy5ncmlkIHx8IG9wdGlvbnMuYnJvYWRwaGFzZSk7XG4gICAgICAgIGVuZ2luZS5wYWlycyA9IFBhaXJzLmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHlcbiAgICAgICAgZW5naW5lLndvcmxkLmdyYXZpdHkgPSBlbmdpbmUuZ3Jhdml0eTtcbiAgICAgICAgZW5naW5lLmJyb2FkcGhhc2UgPSBlbmdpbmUuZ3JpZDtcbiAgICAgICAgZW5naW5lLm1ldHJpY3MgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzaW11bGF0aW9uIGZvcndhcmQgaW4gdGltZSBieSBgZGVsdGFgIG1zLlxuICAgICAqIFRoZSBgY29ycmVjdGlvbmAgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRpbWUgY29ycmVjdGlvbiBmYWN0b3IgdG8gYXBwbHkgdG8gdGhlIHVwZGF0ZS5cbiAgICAgKiBUaGlzIGNhbiBoZWxwIGltcHJvdmUgdGhlIGFjY3VyYWN5IG9mIHRoZSBzaW11bGF0aW9uIGluIGNhc2VzIHdoZXJlIGBkZWx0YWAgaXMgY2hhbmdpbmcgYmV0d2VlbiB1cGRhdGVzLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgY29ycmVjdGlvbmAgaXMgZGVmaW5lZCBhcyBgZGVsdGEgLyBsYXN0RGVsdGFgLCBpLmUuIHRoZSBwZXJjZW50YWdlIGNoYW5nZSBvZiBgZGVsdGFgIG92ZXIgdGhlIGxhc3Qgc3RlcC5cbiAgICAgKiBUaGVyZWZvcmUgdGhlIHZhbHVlIGlzIGFsd2F5cyBgMWAgKG5vIGNvcnJlY3Rpb24pIHdoZW4gYGRlbHRhYCBjb25zdGFudCAob3Igd2hlbiBubyBjb3JyZWN0aW9uIGlzIGRlc2lyZWQsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KS5cbiAgICAgKiBTZWUgdGhlIHBhcGVyIG9uIDxhIGhyZWY9XCJodHRwOi8vbG9uZXNvY2submV0L2FydGljbGUvdmVybGV0Lmh0bWxcIj5UaW1lIENvcnJlY3RlZCBWZXJsZXQ8L2E+IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVVwZGF0ZWAgYW5kIGBhZnRlclVwZGF0ZWAgZXZlbnRzLlxuICAgICAqIFRyaWdnZXJzIGBjb2xsaXNpb25TdGFydGAsIGBjb2xsaXNpb25BY3RpdmVgIGFuZCBgY29sbGlzaW9uRW5kYCBldmVudHMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT0xNi42NjZdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb3JyZWN0aW9uPTFdXG4gICAgICovXG4gICAgRW5naW5lLnVwZGF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgZGVsdGEsIGNvcnJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKTtcblxuICAgICAgICBkZWx0YSA9IGRlbHRhIHx8IDEwMDAgLyA2MDtcbiAgICAgICAgY29ycmVjdGlvbiA9IGNvcnJlY3Rpb24gfHwgMTtcblxuICAgICAgICB2YXIgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICB0aW1pbmcgPSBlbmdpbmUudGltaW5nLFxuICAgICAgICAgICAgZ3JpZCA9IGVuZ2luZS5ncmlkLFxuICAgICAgICAgICAgZ3JpZFBhaXJzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGluY3JlbWVudCB0aW1lc3RhbXBcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcCArPSBkZWx0YSAqIHRpbWluZy50aW1lU2NhbGU7XG4gICAgICAgIHRpbWluZy5sYXN0RGVsdGEgPSBkZWx0YSAqIHRpbWluZy50aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGV2ZW50IG9iamVjdFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdiZWZvcmVVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gZ2V0IGxpc3RzIG9mIGFsbCBib2RpZXMgYW5kIGNvbnN0cmFpbnRzLCBubyBtYXR0ZXIgd2hhdCBjb21wb3NpdGVzIHRoZXkgYXJlIGluXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKTtcblxuICAgICAgICAvLyBpZiBzbGVlcGluZyBlbmFibGVkLCBjYWxsIHRoZSBzbGVlcGluZyBjb250cm9sbGVyXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy51cGRhdGUoYWxsQm9kaWVzLCB0aW1pbmcudGltZVNjYWxlKTtcblxuICAgICAgICAvLyBhcHBsaWVzIGdyYXZpdHkgdG8gYWxsIGJvZGllc1xuICAgICAgICBFbmdpbmUuX2JvZGllc0FwcGx5R3Jhdml0eShhbGxCb2RpZXMsIGVuZ2luZS5ncmF2aXR5KTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGJvZHkgcG9zaXRpb24gYW5kIHJvdGF0aW9uIGJ5IGludGVncmF0aW9uXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlKGFsbEJvZGllcywgZGVsdGEsIHRpbWluZy50aW1lU2NhbGUsIGNvcnJlY3Rpb24sIHdvcmxkLmJvdW5kcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoZmlyc3QgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gYnJvYWRwaGFzZSBwYXNzOiBmaW5kIHBvdGVudGlhbCBjb2xsaXNpb24gcGFpcnNcblxuICAgICAgICAvLyBpZiB3b3JsZCBpcyBkaXJ0eSwgd2UgbXVzdCBmbHVzaCB0aGUgd2hvbGUgZ3JpZFxuICAgICAgICBpZiAod29ybGQuaXNNb2RpZmllZClcbiAgICAgICAgICAgIEdyaWQuY2xlYXIoZ3JpZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBncmlkIGJ1Y2tldHMgYmFzZWQgb24gY3VycmVudCBib2RpZXNcbiAgICAgICAgR3JpZC51cGRhdGUoZ3JpZCwgYWxsQm9kaWVzLCBlbmdpbmUsIHdvcmxkLmlzTW9kaWZpZWQpO1xuICAgICAgICBncmlkUGFpcnMgPSBncmlkLnBhaXJzTGlzdDtcblxuICAgICAgICAvLyBjbGVhciBhbGwgY29tcG9zaXRlIG1vZGlmaWVkIGZsYWdzXG4gICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQod29ybGQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuYXJyb3dwaGFzZSBwYXNzOiBmaW5kIGFjdHVhbCBjb2xsaXNpb25zLCB0aGVuIGNyZWF0ZSBvciB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gRGV0ZWN0b3IuY29sbGlzaW9ucyhncmlkUGFpcnMsIGVuZ2luZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGNvbGxpc2lvbiBwYWlyc1xuICAgICAgICB2YXIgcGFpcnMgPSBlbmdpbmUucGFpcnMsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB0aW1pbmcudGltZXN0YW1wO1xuICAgICAgICBQYWlycy51cGRhdGUocGFpcnMsIGNvbGxpc2lvbnMsIHRpbWVzdGFtcCk7XG4gICAgICAgIFBhaXJzLnJlbW92ZU9sZChwYWlycywgdGltZXN0YW1wKTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25TdGFydCB9KTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHBvc2l0aW9uIGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnBvc2l0aW9uSXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoc2Vjb25kIHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGl2ZWx5IHJlc29sdmUgdmVsb2NpdHkgYmV0d2VlbiBjb2xsaXNpb25zXG4gICAgICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUudmVsb2NpdHlJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uQWN0aXZlJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uQWN0aXZlIH0pO1xuXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25FbmQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2NvbGxpc2lvbkVuZCcsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvbkVuZCB9KTtcblxuICAgICAgICAvLyBjbGVhciBmb3JjZSBidWZmZXJzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMoYWxsQm9kaWVzKTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdhZnRlclVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyBsb2cgdGhlIHRpbWUgZWxhcHNlZCBjb21wdXRpbmcgdGhpcyB1cGRhdGVcbiAgICAgICAgZW5naW5lLnRpbWluZy5sYXN0RWxhcHNlZCA9IENvbW1vbi5ub3coKSAtIHN0YXJ0VGltZTtcblxuICAgICAgICByZXR1cm4gZW5naW5lO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIHR3byBlbmdpbmVzIGJ5IGtlZXBpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgYGVuZ2luZUFgIGJ1dCByZXBsYWNpbmcgdGhlIHdvcmxkIHdpdGggdGhlIG9uZSBmcm9tIGBlbmdpbmVCYC5cbiAgICAgKiBAbWV0aG9kIG1lcmdlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZUFcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQlxuICAgICAqL1xuICAgIEVuZ2luZS5tZXJnZSA9IGZ1bmN0aW9uKGVuZ2luZUEsIGVuZ2luZUIpIHtcbiAgICAgICAgQ29tbW9uLmV4dGVuZChlbmdpbmVBLCBlbmdpbmVCKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlbmdpbmVCLndvcmxkKSB7XG4gICAgICAgICAgICBlbmdpbmVBLndvcmxkID0gZW5naW5lQi53b3JsZDtcblxuICAgICAgICAgICAgRW5naW5lLmNsZWFyKGVuZ2luZUEpO1xuXG4gICAgICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmVBLndvcmxkKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJvZHkuaWQgPSBDb21tb24ubmV4dElkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBlbmdpbmUgaW5jbHVkaW5nIHRoZSB3b3JsZCwgcGFpcnMgYW5kIGJyb2FkcGhhc2UuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY2xlYXIgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICAgICAgdmFyIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCk7XG5cbiAgICAgICAgUGFpcnMuY2xlYXIoZW5naW5lLnBhaXJzKTtcbiAgICAgICAgR3JpZC5jbGVhcihlbmdpbmUuZ3JpZCk7XG4gICAgICAgIEdyaWQudXBkYXRlKGVuZ2luZS5ncmlkLCBib2RpZXMsIGVuZ2luZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgYGJvZHkuZm9yY2VgIGFuZCBgYm9keS50b3JxdWVgIGZvcmNlIGJ1ZmZlcnMuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzQ2xlYXJGb3JjZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBFbmdpbmUuX2JvZGllc0NsZWFyRm9yY2VzID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgZm9yY2UgYnVmZmVyc1xuICAgICAgICAgICAgYm9keS5mb3JjZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSA9IDA7XG4gICAgICAgICAgICBib2R5LnRvcnF1ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHlzIGEgbWFzcyBkZXBlbmRhbnQgZm9yY2UgdG8gYWxsIGdpdmVuIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNBcHBseUdyYXZpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZ3Jhdml0eVxuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5ID0gZnVuY3Rpb24oYm9kaWVzLCBncmF2aXR5KSB7XG4gICAgICAgIHZhciBncmF2aXR5U2NhbGUgPSB0eXBlb2YgZ3Jhdml0eS5zY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBncmF2aXR5LnNjYWxlIDogMC4wMDE7XG5cbiAgICAgICAgaWYgKChncmF2aXR5LnggPT09IDAgJiYgZ3Jhdml0eS55ID09PSAwKSB8fCBncmF2aXR5U2NhbGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGdyYXZpdHlcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnkgKiBncmF2aXR5U2NhbGU7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnggKz0gYm9keS5tYXNzICogZ3Jhdml0eS54ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5cyBgQm9keS51cGRhdGVgIHRvIGFsbCBnaXZlbiBgYm9kaWVzYC5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNVcGRhdGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lIFxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gdXBkYXRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvbiBcbiAgICAgKiBUaGUgVmVybGV0IGNvcnJlY3Rpb24gZmFjdG9yIChkZWx0YVRpbWUgLyBsYXN0RGVsdGFUaW1lKVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSB3b3JsZEJvdW5kc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbiwgd29ybGRCb3VuZHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIEJvZHkudXBkYXRlKGJvZHksIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGRlcHJlY2F0ZWQgYWxpYXMgZm9yIGBSdW5uZXIucnVuYCwgdXNlIGBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpYCBpbnN0ZWFkIGFuZCBzZWUgYE1hdHRlci5SdW5uZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWRcbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQganVzdCBiZWZvcmUgYW4gdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWxsIGNvbGxpc2lvbiBldmVudHNcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBoYXZlIHN0YXJ0ZWQgdG8gY29sbGlkZSBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvblN0YXJ0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGFyZSBjb2xsaWRpbmcgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25BY3RpdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgaGF2ZSBlbmRlZCBjb2xsaXNpb24gaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25FbmRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcG9zaXRpb24gaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb3NpdGlvbkl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdmVsb2NpdHkgaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZWxvY2l0eUl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgY29uc3RyYWludCBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIGAyYCBpcyB1c3VhbGx5IHZlcnkgYWRlcXVhdGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludEl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgZW5naW5lIHNob3VsZCBhbGxvdyBzbGVlcGluZyB2aWEgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZS5cbiAgICAgKiBTbGVlcGluZyBjYW4gaW1wcm92ZSBzdGFiaWxpdHkgYW5kIHBlcmZvcm1hbmNlLCBidXQgb2Z0ZW4gYXQgdGhlIGV4cGVuc2Ugb2YgYWNjdXJhY3kuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZW5hYmxlU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIGNvbnRhaW5pbmcgcHJvcGVydGllcyByZWdhcmRpbmcgdGhlIHRpbWluZyBzeXN0ZW1zIG9mIHRoZSBlbmdpbmUuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZ1xuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgZ2xvYmFsIHNjYWxpbmcgZmFjdG9yIG9mIHRpbWUgZm9yIGFsbCBib2RpZXMuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgZnJlZXplcyB0aGUgc2ltdWxhdGlvbi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjFgIGdpdmVzIGEgc2xvdy1tb3Rpb24gZWZmZWN0LlxuICAgICAqIEEgdmFsdWUgb2YgYDEuMmAgZ2l2ZXMgYSBzcGVlZC11cCBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLnRpbWVTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGN1cnJlbnQgc2ltdWxhdGlvbi10aW1lIGluIG1pbGxpc2Vjb25kcyBzdGFydGluZyBmcm9tIGAwYC4gXG4gICAgICogSXQgaXMgaW5jcmVtZW50ZWQgb24gZXZlcnkgYEVuZ2luZS51cGRhdGVgIGJ5IHRoZSBnaXZlbiBgZGVsdGFgIGFyZ3VtZW50LiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZXN0YW1wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIGVsYXBzZWQgZHVyaW5nIHRoZSBsYXN0IGBFbmdpbmUudXBkYXRlYCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogSXQgaXMgdXBkYXRlZCBieSB0aW1pbmcgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGxhc3QgYEVuZ2luZS51cGRhdGVgIGNhbGwgdW50aWwgaXQgZW5kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgdmFsdWUgd2lsbCBhbHNvIGluY2x1ZGUgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIG9mIGFsbCBldmVudCBoYW5kbGVycyBkaXJlY3RseSBvciBpbmRpcmVjdGx5IHRyaWdnZXJlZCBieSB0aGUgZW5naW5lIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcubGFzdEVsYXBzZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVwcmVzZW50cyB0aGUgYGRlbHRhYCB2YWx1ZSB1c2VkIGluIHRoZSBsYXN0IGVuZ2luZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLmxhc3REZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE1hdHRlci5HcmlkYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmlkXG4gICAgICogQHR5cGUgZ3JpZFxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkdyaWQgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VkIGJ5IGFuZCBub3cgYWxpYXMgZm9yIGBlbmdpbmUuZ3JpZGAuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYGVuZ2luZS5ncmlkYFxuICAgICAqIEBwcm9wZXJ0eSBicm9hZHBoYXNlXG4gICAgICogQHR5cGUgZ3JpZFxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkdyaWQgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSByb290IGBNYXR0ZXIuQ29tcG9zaXRlYCBpbnN0YW5jZSB0aGF0IHdpbGwgY29udGFpbiBhbGwgYm9kaWVzLCBjb25zdHJhaW50cyBhbmQgb3RoZXIgY29tcG9zaXRlcyB0byBiZSBzaW11bGF0ZWQgYnkgdGhpcyBlbmdpbmUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgd29ybGRcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5Db21wb3NpdGUgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgdG8gYXBwbHkgb24gYWxsIGJvZGllcyBpbiBgZW5naW5lLndvcmxkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB4IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnhcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB5IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSBzY2FsZSBmYWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS5zY2FsZVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDAuMDAxXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUmVzb2x2ZXJgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciByZXNvbHZpbmcgY29sbGlzaW9uIHBhaXJzLlxuKlxuKiBAY2xhc3MgUmVzb2x2ZXJcbiovXG5cbnZhciBSZXNvbHZlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc29sdmVyO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCA9IDQ7XG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ID0gNjtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4gPSAwLjk7XG4gICAgUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZyA9IDAuODtcbiAgICBSZXNvbHZlci5fZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyID0gNTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgcGFpcnMgZm9yIHBvc2l0aW9uIHNvbHZpbmcuXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucHJlU29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50O1xuXG4gICAgICAgIC8vIGZpbmQgdG90YWwgY29udGFjdHMgb24gZWFjaCBib2R5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRBLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRCLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHBvc2l0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgUmVzb2x2ZXIuc29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIGJvZHlCdG9BLFxuICAgICAgICAgICAgY29udGFjdFNoYXJlLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgY29udGFjdENvdW50ID0ge30sXG4gICAgICAgICAgICB0ZW1wQSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHRlbXBCID0gVmVjdG9yLl90ZW1wWzFdLFxuICAgICAgICAgICAgdGVtcEMgPSBWZWN0b3IuX3RlbXBbMl0sXG4gICAgICAgICAgICB0ZW1wRCA9IFZlY3Rvci5fdGVtcFszXTtcblxuICAgICAgICAvLyBmaW5kIGltcHVsc2VzIHJlcXVpcmVkIHRvIHJlc29sdmUgcGVuZXRyYXRpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgc2VwYXJhdGlvbiBiZXR3ZWVuIGJvZHkgZWRnZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uXG4gICAgICAgICAgICBib2R5QnRvQSA9IFZlY3Rvci5zdWIoVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbkltcHVsc2UsIGJvZHlCLnBvc2l0aW9uLCB0ZW1wQSksIFxuICAgICAgICAgICAgICAgIFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb25JbXB1bHNlLCBcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnN1Yihib2R5Qi5wb3NpdGlvbiwgY29sbGlzaW9uLnBlbmV0cmF0aW9uLCB0ZW1wQiksIHRlbXBDKSwgdGVtcEQpO1xuXG4gICAgICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBWZWN0b3IuZG90KG5vcm1hbCwgYm9keUJ0b0EpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEI7XG4gICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsO1xuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlID0gKHBhaXIuc2VwYXJhdGlvbiAtIHBhaXIuc2xvcCkgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgICAgIGlmIChib2R5QS5pc1N0YXRpYyB8fCBib2R5Qi5pc1N0YXRpYylcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgKj0gMjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4gLyBib2R5QS50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS54ICs9IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS55ICs9IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiAvIGJvZHlCLnRvdGFsQ29udGFjdHM7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25JbXB1bHNlLnggLT0gbm9ybWFsLnggKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25JbXB1bHNlLnkgLT0gbm9ybWFsLnkgKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgcG9zaXRpb24gcmVzb2x1dGlvbi5cbiAgICAgKiBAbWV0aG9kIHBvc3RTb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgY29udGFjdCBjb3VudFxuICAgICAgICAgICAgYm9keS50b3RhbENvbnRhY3RzID0gMDtcblxuICAgICAgICAgICAgaWYgKGJvZHkucG9zaXRpb25JbXB1bHNlLnggIT09IDAgfHwgYm9keS5wb3NpdGlvbkltcHVsc2UueSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBib2R5IGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGJvZHkucG9zaXRpb25JbXB1bHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBib2R5LnBvc2l0aW9uSW1wdWxzZS54O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gYm9keS5wb3NpdGlvbkltcHVsc2UueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRoZSBib2R5IHdpdGhvdXQgY2hhbmdpbmcgdmVsb2NpdHlcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGJvZHkucG9zaXRpb25JbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBib2R5LnBvc2l0aW9uSW1wdWxzZS55O1xuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3QoYm9keS5wb3NpdGlvbkltcHVsc2UsIGJvZHkudmVsb2NpdHkpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBjYWNoZWQgaW1wdWxzZSBpZiB0aGUgYm9keSBoYXMgdmVsb2NpdHkgYWxvbmcgaXRcbiAgICAgICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhcm0gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnggKj0gUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueSAqPSBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciB2ZWxvY2l0eSBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29udGFjdHMsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgdGFuZ2VudCxcbiAgICAgICAgICAgIGNvbnRhY3QsXG4gICAgICAgICAgICBjb250YWN0VmVydGV4LFxuICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSxcbiAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlLFxuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgaW1wdWxzZSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHRlbXBBID0gVmVjdG9yLl90ZW1wWzFdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHM7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcbiAgICAgICAgICAgIHRhbmdlbnQgPSBjb2xsaXNpb24udGFuZ2VudDtcblxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBlYWNoIGNvbnRhY3RcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb250YWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnRhY3QgPSBjb250YWN0c1tqXTtcbiAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG4gICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsSW1wdWxzZSAhPT0gMCB8fCB0YW5nZW50SW1wdWxzZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICBpbXB1bHNlLnggPSAobm9ybWFsLnggKiBub3JtYWxJbXB1bHNlKSArICh0YW5nZW50LnggKiB0YW5nZW50SW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGltcHVsc2UueSA9IChub3JtYWwueSAqIG5vcm1hbEltcHVsc2UpICsgKHRhbmdlbnQueSAqIHRhbmdlbnRJbXB1bHNlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGx5IGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBWZWN0b3Iuc3ViKGNvbnRhY3RWZXJ0ZXgsIGJvZHlBLnBvc2l0aW9uLCB0ZW1wQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCArPSBpbXB1bHNlLnggKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2UueSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEuYW5nbGVQcmV2ICs9IFZlY3Rvci5jcm9zcyhvZmZzZXQsIGltcHVsc2UpICogYm9keUEuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gVmVjdG9yLnN1Yihjb250YWN0VmVydGV4LCBib2R5Qi5wb3NpdGlvbiwgdGVtcEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZS54ICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSAtPSBpbXB1bHNlLnkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0LCBpbXB1bHNlKSAqIGJvZHlCLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSBzb2x1dGlvbiBmb3IgcGFpciB2ZWxvY2l0aWVzLlxuICAgICAqIEBtZXRob2Qgc29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBSZXNvbHZlci5zb2x2ZVZlbG9jaXR5ID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZVNjYWxlU3F1YXJlZCA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIGltcHVsc2UgPSBWZWN0b3IuX3RlbXBbMF0sXG4gICAgICAgICAgICB0ZW1wQSA9IFZlY3Rvci5fdGVtcFsxXSxcbiAgICAgICAgICAgIHRlbXBCID0gVmVjdG9yLl90ZW1wWzJdLFxuICAgICAgICAgICAgdGVtcEMgPSBWZWN0b3IuX3RlbXBbM10sXG4gICAgICAgICAgICB0ZW1wRCA9IFZlY3Rvci5fdGVtcFs0XSxcbiAgICAgICAgICAgIHRlbXBFID0gVmVjdG9yLl90ZW1wWzVdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbCxcbiAgICAgICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQsXG4gICAgICAgICAgICAgICAgY29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IDEgLyBjb250YWN0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2R5IHZlbG9jaXRpZXNcbiAgICAgICAgICAgIGJvZHlBLnZlbG9jaXR5LnggPSBib2R5QS5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5QS52ZWxvY2l0eS55ID0gYm9keUEucG9zaXRpb24ueSAtIGJvZHlBLnBvc2l0aW9uUHJldi55O1xuICAgICAgICAgICAgYm9keUIudmVsb2NpdHkueCA9IGJvZHlCLnBvc2l0aW9uLnggLSBib2R5Qi5wb3NpdGlvblByZXYueDtcbiAgICAgICAgICAgIGJvZHlCLnZlbG9jaXR5LnkgPSBib2R5Qi5wb3NpdGlvbi55IC0gYm9keUIucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5QS5hbmd1bGFyVmVsb2NpdHkgPSBib2R5QS5hbmdsZSAtIGJvZHlBLmFuZ2xlUHJldjtcbiAgICAgICAgICAgIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlCLmFuZ2xlIC0gYm9keUIuYW5nbGVQcmV2O1xuXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb250YWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gY29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RWZXJ0ZXggPSBjb250YWN0LnZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QSA9IFZlY3Rvci5zdWIoY29udGFjdFZlcnRleCwgYm9keUEucG9zaXRpb24sIHRlbXBBKSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QiA9IFZlY3Rvci5zdWIoY29udGFjdFZlcnRleCwgYm9keUIucG9zaXRpb24sIHRlbXBCKSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEEgPSBWZWN0b3IuYWRkKGJvZHlBLnZlbG9jaXR5LCBWZWN0b3IubXVsdChWZWN0b3IucGVycChvZmZzZXRBKSwgYm9keUEuYW5ndWxhclZlbG9jaXR5KSwgdGVtcEMpLFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QiA9IFZlY3Rvci5hZGQoYm9keUIudmVsb2NpdHksIFZlY3Rvci5tdWx0KFZlY3Rvci5wZXJwKG9mZnNldEIpLCBib2R5Qi5hbmd1bGFyVmVsb2NpdHkpLCB0ZW1wRCksIFxuICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5ID0gVmVjdG9yLnN1Yih2ZWxvY2l0eVBvaW50QSwgdmVsb2NpdHlQb2ludEIsIHRlbXBFKSxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHkgPSBWZWN0b3IuZG90KG5vcm1hbCwgcmVsYXRpdmVWZWxvY2l0eSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGFuZ2VudFZlbG9jaXR5ID0gVmVjdG9yLmRvdCh0YW5nZW50LCByZWxhdGl2ZVZlbG9jaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudFNwZWVkID0gTWF0aC5hYnModGFuZ2VudFZlbG9jaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudFZlbG9jaXR5RGlyZWN0aW9uID0gQ29tbW9uLnNpZ24odGFuZ2VudFZlbG9jaXR5KTtcblxuICAgICAgICAgICAgICAgIC8vIHJhdyBpbXB1bHNlc1xuICAgICAgICAgICAgICAgIHZhciBub3JtYWxJbXB1bHNlID0gKDEgKyBwYWlyLnJlc3RpdHV0aW9uKSAqIG5vcm1hbFZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxGb3JjZSA9IENvbW1vbi5jbGFtcChwYWlyLnNlcGFyYXRpb24gKyBub3JtYWxWZWxvY2l0eSwgMCwgMSkgKiBSZXNvbHZlci5fZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICAgICAgLy8gY291bG9tYiBmcmljdGlvblxuICAgICAgICAgICAgICAgIHZhciB0YW5nZW50SW1wdWxzZSA9IHRhbmdlbnRWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSBJbmZpbml0eTtcblxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50U3BlZWQgPiBwYWlyLmZyaWN0aW9uICogcGFpci5mcmljdGlvblN0YXRpYyAqIG5vcm1hbEZvcmNlICogdGltZVNjYWxlU3F1YXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhGcmljdGlvbiA9IHRhbmdlbnRTcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBDb21tb24uY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyLmZyaWN0aW9uICogdGFuZ2VudFZlbG9jaXR5RGlyZWN0aW9uICogdGltZVNjYWxlU3F1YXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tYXhGcmljdGlvbiwgbWF4RnJpY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb2RpZnkgaW1wdWxzZXMgYWNjb3VudGluZyBmb3IgbWFzcywgaW5lcnRpYSBhbmQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgdmFyIG9BY04gPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0QSwgbm9ybWFsKSxcbiAgICAgICAgICAgICAgICAgICAgb0JjTiA9IFZlY3Rvci5jcm9zcyhvZmZzZXRCLCBub3JtYWwpLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZSA9IGNvbnRhY3RTaGFyZSAvIChib2R5QS5pbnZlcnNlTWFzcyArIGJvZHlCLmludmVyc2VNYXNzICsgYm9keUEuaW52ZXJzZUluZXJ0aWEgKiBvQWNOICogb0FjTiAgKyBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqIG9CY04gKiBvQmNOKTtcblxuICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgKj0gc2hhcmU7XG4gICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgKj0gc2hhcmU7XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaGlnaCB2ZWxvY2l0eSBhbmQgcmVzdGluZyBjb2xsaXNpb25zIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsVmVsb2NpdHkgPCAwICYmIG5vcm1hbFZlbG9jaXR5ICogbm9ybWFsVmVsb2NpdHkgPiBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCAqIHRpbWVTY2FsZVNxdWFyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCBub3JtYWwgdmVsb2NpdHkgc28gY2xlYXIgY2FjaGVkIGNvbnRhY3Qgbm9ybWFsIGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1wdWxzZSBjb25zdHJhaW50IHRlbmRzIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3ROb3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgPSBNYXRoLm1pbihjb250YWN0Lm5vcm1hbEltcHVsc2UgKyBub3JtYWxJbXB1bHNlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZSAtIGNvbnRhY3ROb3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmVsb2NpdHkgKiB0YW5nZW50VmVsb2NpdHkgPiBSZXNvbHZlci5fcmVzdGluZ1RocmVzaFRhbmdlbnQgKiB0aW1lU2NhbGVTcXVhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2ggdGFuZ2VudCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCB0YW5nZW50IGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29sdmUgcmVzdGluZyBjb2xsaXNpb24gY29uc3RyYWludHMgdXNpbmcgRXJpbiBDYXR0bydzIG1ldGhvZCAoR0RDMDgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQgaW1wdWxzZSB0ZW5kcyB0byAtdGFuZ2VudFNwZWVkIG9yICt0YW5nZW50U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3RUYW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSBDb21tb24uY2xhbXAoY29udGFjdC50YW5nZW50SW1wdWxzZSArIHRhbmdlbnRJbXB1bHNlLCAtbWF4RnJpY3Rpb24sIG1heEZyaWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlIC0gY29udGFjdFRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRvdGFsIGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgaW1wdWxzZS54ID0gKG5vcm1hbC54ICogbm9ybWFsSW1wdWxzZSkgKyAodGFuZ2VudC54ICogdGFuZ2VudEltcHVsc2UpO1xuICAgICAgICAgICAgICAgIGltcHVsc2UueSA9IChub3JtYWwueSAqIG5vcm1hbEltcHVsc2UpICsgKHRhbmdlbnQueSAqIHRhbmdlbnRJbXB1bHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2UueCAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlLnkgKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUEuYW5nbGVQcmV2ICs9IFZlY3Rvci5jcm9zcyhvZmZzZXRBLCBpbXB1bHNlKSAqIGJvZHlBLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54IC09IGltcHVsc2UueCAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSAtPSBpbXB1bHNlLnkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIuYW5nbGVQcmV2IC09IFZlY3Rvci5jcm9zcyhvZmZzZXRCLCBpbXB1bHNlKSAqIGJvZHlCLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcnNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBwYWlyIHNldHMuXG4qXG4qIEBjbGFzcyBQYWlyc1xuKi9cblxudmFyIFBhaXJzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpcnM7XG5cbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgUGFpcnMuX3BhaXJNYXhJZGxlTGlmZSA9IDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7cGFpcnN9IEEgbmV3IHBhaXJzIHN0cnVjdHVyZVxuICAgICAqL1xuICAgIFBhaXJzLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoeyBcbiAgICAgICAgICAgIHRhYmxlOiB7fSxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQ6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlOiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZDogW11cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcGFpcnMgZ2l2ZW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbltdfSBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXJzLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhaXJzLCBjb2xsaXNpb25zLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIHBhaXJzTGlzdCA9IHBhaXJzLmxpc3QsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydCA9IHBhaXJzLmNvbGxpc2lvblN0YXJ0LFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kID0gcGFpcnMuY29sbGlzaW9uRW5kLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlID0gcGFpcnMuY29sbGlzaW9uQWN0aXZlLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpcklkLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gY2xlYXIgY29sbGlzaW9uIHN0YXRlIGFycmF5cywgYnV0IG1haW50YWluIG9sZCByZWZlcmVuY2VcbiAgICAgICAgY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXJzTGlzdFtpXS5jb25maXJtZWRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uLmNvbGxpZGVkKSB7XG4gICAgICAgICAgICAgICAgcGFpcklkID0gUGFpci5pZChjb2xsaXNpb24uYm9keUEsIGNvbGxpc2lvbi5ib2R5Qik7XG5cbiAgICAgICAgICAgICAgICBwYWlyID0gcGFpcnNUYWJsZVtwYWlySWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgYWxyZWFkeSBleGlzdHMgKGJ1dCBtYXkgb3IgbWF5IG5vdCBiZSBhY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGV4aXN0cyBhbmQgaXMgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BY3RpdmUucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGJ1dCB3YXMgaW5hY3RpdmUsIHNvIGEgY29sbGlzaW9uIGhhcyBqdXN0IHN0YXJ0ZWQgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBhaXJcbiAgICAgICAgICAgICAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICBwYWlyLmNvbmZpcm1lZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFpciBkaWQgbm90IGV4aXN0LCBjcmVhdGUgYSBuZXcgcGFpclxuICAgICAgICAgICAgICAgICAgICBwYWlyID0gUGFpci5jcmVhdGUoY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICBwYWlyc1RhYmxlW3BhaXJJZF0gPSBwYWlyO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1c2ggdGhlIG5ldyBwYWlyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzTGlzdC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlYWN0aXZhdGUgcHJldmlvdXNseSBhY3RpdmUgcGFpcnMgdGhhdCBhcmUgbm93IGluYWN0aXZlXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbaV07XG4gICAgICAgICAgICBpZiAocGFpci5pc0FjdGl2ZSAmJiAhcGFpci5jb25maXJtZWRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBQYWlyLnNldEFjdGl2ZShwYWlyLCBmYWxzZSwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25FbmQucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHJlbW92ZXMgcGFpcnMgdGhhdCBoYXZlIGJlZW4gaW5hY3RpdmUgZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lLlxuICAgICAqIEBtZXRob2QgcmVtb3ZlT2xkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXJzLnJlbW92ZU9sZCA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIHBhaXJzTGlzdCA9IHBhaXJzLmxpc3QsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBpbmRleGVzVG9SZW1vdmUgPSBbXSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBwYWlySW5kZXgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbaV07XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbmV2ZXIgcmVtb3ZlIHNsZWVwaW5nIHBhaXJzXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uLmJvZHlBLmlzU2xlZXBpbmcgfHwgY29sbGlzaW9uLmJvZHlCLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBwYWlyLnRpbWVVcGRhdGVkID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBwYWlyIGlzIGluYWN0aXZlIGZvciB0b28gbG9uZywgbWFyayBpdCB0byBiZSByZW1vdmVkXG4gICAgICAgICAgICBpZiAodGltZXN0YW1wIC0gcGFpci50aW1lVXBkYXRlZCA+IFBhaXJzLl9wYWlyTWF4SWRsZUxpZmUpIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzVG9SZW1vdmUucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBtYXJrZWQgcGFpcnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZGV4ZXNUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpckluZGV4ID0gaW5kZXhlc1RvUmVtb3ZlW2ldIC0gaTtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbcGFpckluZGV4XTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYWlyc1RhYmxlW3BhaXIuaWRdO1xuICAgICAgICAgICAgcGFpcnNMaXN0LnNwbGljZShwYWlySW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ2l2ZW4gcGFpcnMgc3RydWN0dXJlLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge3BhaXJzfSBwYWlyc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBwYWlyc1xuICAgICAqL1xuICAgIFBhaXJzLmNsZWFyID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgcGFpcnMudGFibGUgPSB7fTtcbiAgICAgICAgcGFpcnMubGlzdC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25BY3RpdmUubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkdyaWRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBicm9hZHBoYXNlIGdyaWQgc3RydWN0dXJlcy5cbipcbiogQGNsYXNzIEdyaWRcbiovXG5cbnZhciBHcmlkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gR3JpZDtcblxudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Z3JpZH0gQSBuZXcgZ3JpZFxuICAgICAqL1xuICAgIEdyaWQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBidWNrZXRzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzTGlzdDogW10sXG4gICAgICAgICAgICBidWNrZXRXaWR0aDogNDgsXG4gICAgICAgICAgICBidWNrZXRIZWlnaHQ6IDQ4XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgYSBzaW5nbGUgZ3JpZCBidWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVja2V0V2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRIZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Z3JpZH0gZ3JpZFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZVVwZGF0ZVxuICAgICAqL1xuICAgIEdyaWQudXBkYXRlID0gZnVuY3Rpb24oZ3JpZCwgYm9kaWVzLCBlbmdpbmUsIGZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHZhciBpLCBjb2wsIHJvdyxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYnVja2V0cyA9IGdyaWQuYnVja2V0cyxcbiAgICAgICAgICAgIGJ1Y2tldCxcbiAgICAgICAgICAgIGJ1Y2tldElkLFxuICAgICAgICAgICAgZ3JpZENoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTbGVlcGluZyAmJiAhZm9yY2VVcGRhdGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHkgYm91bmRzIGNoZWNrXG4gICAgICAgICAgICBpZiAod29ybGQuYm91bmRzICYmIChib2R5LmJvdW5kcy5tYXgueCA8IHdvcmxkLmJvdW5kcy5taW4ueCB8fCBib2R5LmJvdW5kcy5taW4ueCA+IHdvcmxkLmJvdW5kcy5tYXgueFxuICAgICAgICAgICAgICAgIHx8IGJvZHkuYm91bmRzLm1heC55IDwgd29ybGQuYm91bmRzLm1pbi55IHx8IGJvZHkuYm91bmRzLm1pbi55ID4gd29ybGQuYm91bmRzLm1heC55KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIG5ld1JlZ2lvbiA9IEdyaWQuX2dldFJlZ2lvbihncmlkLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGJvZHkgaGFzIGNoYW5nZWQgZ3JpZCByZWdpb25cbiAgICAgICAgICAgIGlmICghYm9keS5yZWdpb24gfHwgbmV3UmVnaW9uLmlkICE9PSBib2R5LnJlZ2lvbi5pZCB8fCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZWdpb24gPSBuZXdSZWdpb247XG5cbiAgICAgICAgICAgICAgICB2YXIgdW5pb24gPSBHcmlkLl9yZWdpb25VbmlvbihuZXdSZWdpb24sIGJvZHkucmVnaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBncmlkIGJ1Y2tldHMgYWZmZWN0ZWQgYnkgcmVnaW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciB0aGUgdW5pb24gb2YgYm90aCByZWdpb25zXG4gICAgICAgICAgICAgICAgZm9yIChjb2wgPSB1bmlvbi5zdGFydENvbDsgY29sIDw9IHVuaW9uLmVuZENvbDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSB1bmlvbi5zdGFydFJvdzsgcm93IDw9IHVuaW9uLmVuZFJvdzsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldElkID0gR3JpZC5fZ2V0QnVja2V0SWQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0c1tidWNrZXRJZF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0luc2lkZU5ld1JlZ2lvbiA9IChjb2wgPj0gbmV3UmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBuZXdSZWdpb24uZW5kQ29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiByb3cgPj0gbmV3UmVnaW9uLnN0YXJ0Um93ICYmIHJvdyA8PSBuZXdSZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlT2xkUmVnaW9uID0gKGNvbCA+PSBib2R5LnJlZ2lvbi5zdGFydENvbCAmJiBjb2wgPD0gYm9keS5yZWdpb24uZW5kQ29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiByb3cgPj0gYm9keS5yZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IGJvZHkucmVnaW9uLmVuZFJvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmcm9tIG9sZCByZWdpb24gYnVja2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0luc2lkZU5ld1JlZ2lvbiAmJiBpc0luc2lkZU9sZFJlZ2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luc2lkZU9sZFJlZ2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5fYnVja2V0UmVtb3ZlQm9keShncmlkLCBidWNrZXQsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIG5ldyByZWdpb24gYnVja2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkucmVnaW9uID09PSBuZXdSZWdpb24gfHwgKGlzSW5zaWRlTmV3UmVnaW9uICYmICFpc0luc2lkZU9sZFJlZ2lvbikgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1Y2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gR3JpZC5fY3JlYXRlQnVja2V0KGJ1Y2tldHMsIGJ1Y2tldElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRBZGRCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyByZWdpb25cbiAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIC8vIGZsYWcgY2hhbmdlcyBzbyB3ZSBjYW4gdXBkYXRlIHBhaXJzXG4gICAgICAgICAgICAgICAgZ3JpZENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhaXJzIGxpc3Qgb25seSBpZiBwYWlycyBjaGFuZ2VkIChpLmUuIGEgYm9keSBjaGFuZ2VkIHJlZ2lvbilcbiAgICAgICAgaWYgKGdyaWRDaGFuZ2VkKVxuICAgICAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QoZ3JpZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICovXG4gICAgR3JpZC5jbGVhciA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgZ3JpZC5idWNrZXRzID0ge307XG4gICAgICAgIGdyaWQucGFpcnMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIHVuaW9uIG9mIHR3byByZWdpb25zLlxuICAgICAqIEBtZXRob2QgX3JlZ2lvblVuaW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gcmVnaW9uQVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25CXG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9yZWdpb25VbmlvbiA9IGZ1bmN0aW9uKHJlZ2lvbkEsIHJlZ2lvbkIpIHtcbiAgICAgICAgdmFyIHN0YXJ0Q29sID0gTWF0aC5taW4ocmVnaW9uQS5zdGFydENvbCwgcmVnaW9uQi5zdGFydENvbCksXG4gICAgICAgICAgICBlbmRDb2wgPSBNYXRoLm1heChyZWdpb25BLmVuZENvbCwgcmVnaW9uQi5lbmRDb2wpLFxuICAgICAgICAgICAgc3RhcnRSb3cgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Um93LCByZWdpb25CLnN0YXJ0Um93KSxcbiAgICAgICAgICAgIGVuZFJvdyA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kUm93LCByZWdpb25CLmVuZFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVnaW9uIGEgZ2l2ZW4gYm9keSBmYWxscyBpbiBmb3IgYSBnaXZlbiBncmlkLlxuICAgICAqIEBtZXRob2QgX2dldFJlZ2lvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fZ2V0UmVnaW9uID0gZnVuY3Rpb24oZ3JpZCwgYm9keSkge1xuICAgICAgICB2YXIgYm91bmRzID0gYm9keS5ib3VuZHMsXG4gICAgICAgICAgICBzdGFydENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBlbmRDb2wgPSBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAvIGdyaWQuYnVja2V0V2lkdGgpLFxuICAgICAgICAgICAgc3RhcnRSb3cgPSBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAvIGdyaWQuYnVja2V0SGVpZ2h0KSxcbiAgICAgICAgICAgIGVuZFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1heC55IC8gZ3JpZC5idWNrZXRIZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBHcmlkLl9jcmVhdGVSZWdpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByZWdpb24uXG4gICAgICogQG1ldGhvZCBfY3JlYXRlUmVnaW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRDb2xcbiAgICAgKiBAcGFyYW0ge30gZW5kQ29sXG4gICAgICogQHBhcmFtIHt9IHN0YXJ0Um93XG4gICAgICogQHBhcmFtIHt9IGVuZFJvd1xuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlUmVnaW9uID0gZnVuY3Rpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIGlkOiBzdGFydENvbCArICcsJyArIGVuZENvbCArICcsJyArIHN0YXJ0Um93ICsgJywnICsgZW5kUm93LFxuICAgICAgICAgICAgc3RhcnRDb2w6IHN0YXJ0Q29sLCBcbiAgICAgICAgICAgIGVuZENvbDogZW5kQ29sLCBcbiAgICAgICAgICAgIHN0YXJ0Um93OiBzdGFydFJvdywgXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYnVja2V0IGlkIGF0IHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIF9nZXRCdWNrZXRJZFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGNvbHVtblxuICAgICAqIEBwYXJhbSB7fSByb3dcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGJ1Y2tldCBpZFxuICAgICAqL1xuICAgIEdyaWQuX2dldEJ1Y2tldElkID0gZnVuY3Rpb24oY29sdW1uLCByb3cpIHtcbiAgICAgICAgcmV0dXJuICdDJyArIGNvbHVtbiArICdSJyArIHJvdztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVCdWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRzXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldElkXG4gICAgICogQHJldHVybiB7fSBidWNrZXRcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVCdWNrZXQgPSBmdW5jdGlvbihidWNrZXRzLCBidWNrZXRJZCkge1xuICAgICAgICB2YXIgYnVja2V0ID0gYnVja2V0c1tidWNrZXRJZF0gPSBbXTtcbiAgICAgICAgcmV0dXJuIGJ1Y2tldDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJvZHkgdG8gYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfYnVja2V0QWRkQm9keVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0XG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKi9cbiAgICBHcmlkLl9idWNrZXRBZGRCb2R5ID0gZnVuY3Rpb24oZ3JpZCwgYnVja2V0LCBib2R5KSB7XG4gICAgICAgIC8vIGFkZCBuZXcgcGFpcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWNrZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QiA9IGJ1Y2tldFtpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaWQgPT09IGJvZHlCLmlkIHx8IChib2R5LmlzU3RhdGljICYmIGJvZHlCLmlzU3RhdGljKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIEdyaWQudXBkYXRlIHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBwYWlySWQgPSBQYWlyLmlkKGJvZHksIGJvZHlCKSxcbiAgICAgICAgICAgICAgICBwYWlyID0gZ3JpZC5wYWlyc1twYWlySWRdO1xuXG4gICAgICAgICAgICBpZiAocGFpcikge1xuICAgICAgICAgICAgICAgIHBhaXJbMl0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5wYWlyc1twYWlySWRdID0gW2JvZHksIGJvZHlCLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBib2RpZXMgKGFmdGVyIHBhaXJzLCBvdGhlcndpc2UgcGFpcnMgd2l0aCBzZWxmKVxuICAgICAgICBidWNrZXQucHVzaChib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRSZW1vdmVCb2R5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gYnVja2V0XG4gICAgICAgIGJ1Y2tldC5zcGxpY2UoQ29tbW9uLmluZGV4T2YoYnVja2V0LCBib2R5KSwgMSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhaXIgY291bnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCB0byB3b3JrXG4gICAgICAgICAgICB2YXIgYm9keUIgPSBidWNrZXRbaV0sXG4gICAgICAgICAgICAgICAgcGFpcklkID0gUGFpci5pZChib2R5LCBib2R5QiksXG4gICAgICAgICAgICAgICAgcGFpciA9IGdyaWQucGFpcnNbcGFpcklkXTtcblxuICAgICAgICAgICAgaWYgKHBhaXIpXG4gICAgICAgICAgICAgICAgcGFpclsyXSAtPSAxO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgdGhlIGFjdGl2ZSBwYWlycyBpbiB0aGUgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVBY3RpdmVQYWlyc0xpc3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHJldHVybiBbXSBwYWlyc1xuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgdmFyIHBhaXJLZXlzLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIHBhaXJzID0gW107XG5cbiAgICAgICAgLy8gZ3JpZC5wYWlycyBpcyB1c2VkIGFzIGEgaGFzaG1hcFxuICAgICAgICBwYWlyS2V5cyA9IENvbW1vbi5rZXlzKGdyaWQucGFpcnMpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBncmlkLnBhaXJzXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGFpcktleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBncmlkLnBhaXJzW3BhaXJLZXlzW2tdXTtcblxuICAgICAgICAgICAgLy8gaWYgcGFpciBleGlzdHMgaW4gYXQgbGVhc3Qgb25lIGJ1Y2tldFxuICAgICAgICAgICAgLy8gaXQgaXMgYSBwYWlyIHRoYXQgbmVlZHMgZnVydGhlciBjb2xsaXNpb24gdGVzdGluZyBzbyBwdXNoIGl0XG4gICAgICAgICAgICBpZiAocGFpclsyXSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZ3JpZC5wYWlyc1twYWlyS2V5c1trXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfTtcbiAgICBcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTWF0dGVyID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcclxuXHJcbk1hdHRlci5BeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XHJcbk1hdHRlci5Cb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcclxuTWF0dGVyLkJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5NYXR0ZXIuQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcclxuTWF0dGVyLkNvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcbk1hdHRlci5Db21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5NYXR0ZXIuQ29tcG9zaXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xyXG5NYXR0ZXIuQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XHJcbk1hdHRlci5Db250YWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XHJcbk1hdHRlci5EZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xyXG5NYXR0ZXIuRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XHJcbk1hdHRlci5FdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xyXG5NYXR0ZXIuR3JpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xyXG5NYXR0ZXIuTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcclxuTWF0dGVyLk1vdXNlQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xyXG5NYXR0ZXIuUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XHJcbk1hdHRlci5QYWlycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xyXG5NYXR0ZXIuUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbk1hdHRlci5RdWVyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xyXG5NYXR0ZXIuUmVuZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XHJcbk1hdHRlci5SZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xyXG5NYXR0ZXIuUnVubmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XHJcbk1hdHRlci5TQVQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcclxuTWF0dGVyLlNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcclxuTWF0dGVyLlN2ZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xyXG5NYXR0ZXIuVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcclxuTWF0dGVyLlZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcclxuTWF0dGVyLldvcmxkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XHJcblxyXG4vLyB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5XHJcbk1hdHRlci5FbmdpbmUucnVuID0gTWF0dGVyLlJ1bm5lci5ydW47XHJcbk1hdHRlci5Db21tb24uZGVwcmVjYXRlZChNYXR0ZXIuRW5naW5lLCAncnVuJywgJ0VuZ2luZS5ydW4g4p6kIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWQnKTtcclxuXG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXHJcbiogVGhlIGBNYXR0ZXJgIG1vZHVsZSBpcyB0aGUgdG9wIGxldmVsIG5hbWVzcGFjZS4gSXQgYWxzbyBpbmNsdWRlcyBhIGZ1bmN0aW9uIGZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gdG9wIG9mIHRoZSBsaWJyYXJ5LlxyXG4qXHJcbiogQGNsYXNzIE1hdHRlclxyXG4qL1xyXG5cclxudmFyIE1hdHRlciA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXR0ZXI7XHJcblxyXG52YXIgUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpYnJhcnkgbmFtZS5cclxuICAgICAqIEBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5uYW1lID0gJ21hdHRlci1qcyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlicmFyeSB2ZXJzaW9uLlxyXG4gICAgICogQHByb3BlcnR5IHZlcnNpb25cclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnZlcnNpb24gPSAgdHJ1ZSA/IFwiMC4xNy4xXCIgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgcGx1Z2luIGRlcGVuZGVuY2llcyB0byBiZSBpbnN0YWxsZWQuIFRoZXNlIGFyZSBub3JtYWxseSBzZXQgYW5kIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIudXNlYC5cclxuICAgICAqIEFsdGVybmF0aXZlbHkgeW91IG1heSBzZXQgYE1hdHRlci51c2VzYCBtYW51YWxseSBhbmQgaW5zdGFsbCB0aGVtIGJ5IGNhbGxpbmcgYFBsdWdpbi51c2UoTWF0dGVyKWAuXHJcbiAgICAgKiBAcHJvcGVydHkgdXNlc1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBsdWdpbnMgdGhhdCBoYXZlIGJlZW4gaW5zdGFsbGVkIHRocm91Z2ggYE1hdHRlci5QbHVnaW4uaW5zdGFsbGAuIFJlYWQgb25seS5cclxuICAgICAqIEBwcm9wZXJ0eSB1c2VkXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZWQgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbGxzIHRoZSBnaXZlbiBwbHVnaW5zIG9uIHRoZSBgTWF0dGVyYCBuYW1lc3BhY2UuXHJcbiAgICAgKiBUaGlzIGlzIGEgc2hvcnQtaGFuZCBmb3IgYFBsdWdpbi51c2VgLCBzZWUgaXQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICAgKiBDYWxsIHRoaXMgZnVuY3Rpb24gb25jZSBhdCB0aGUgc3RhcnQgb2YgeW91ciBjb2RlLCB3aXRoIGFsbCBvZiB0aGUgcGx1Z2lucyB5b3Ugd2lzaCB0byBpbnN0YWxsIGFzIGFyZ3VtZW50cy5cclxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cclxuICAgICAqIEBtZXRob2QgdXNlXHJcbiAgICAgKiBAcGFyYW0gLi4ucGx1Z2luIHtGdW5jdGlvbn0gVGhlIHBsdWdpbihzKSB0byBpbnN0YWxsIG9uIGBiYXNlYCAobXVsdGktYXJndW1lbnQpLlxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUGx1Z2luLnVzZShNYXR0ZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYmVmb3JlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYmVmb3JlIHRoZSBvcmlnaW5hbFxyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5iZWZvcmUgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhCZWZvcmUoTWF0dGVyLCBwYXRoLCBmdW5jKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYWZ0ZXIgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYWZ0ZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBNYXR0ZXJgXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcclxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIuYWZ0ZXIgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhBZnRlcihNYXR0ZXIsIHBhdGgsIGZ1bmMpO1xyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db21wb3NpdGVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyBjb21wb3NpdGUgYm9kaWVzXG4qIHdpdGggY29tbW9ubHkgdXNlZCBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyBzdGFja3MgYW5kIGNoYWlucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVzXG4qL1xuXG52YXIgQ29tcG9zaXRlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZXM7XG5cbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQm9kaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgZGVwcmVjYXRlZCA9IENvbW1vbi5kZXByZWNhdGVkO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgZ3JpZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHN0YWNrXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnN0YWNrID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0YWNrID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnU3RhY2snIH0pLFxuICAgICAgICAgICAgeCA9IHh4LFxuICAgICAgICAgICAgeSA9IHl5LFxuICAgICAgICAgICAgbGFzdEJvZHksXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBjYWxsYmFjayh4LCB5LCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keUhlaWdodCA9IGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5V2lkdGggPSBib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54OyBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keUhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IGJvZHlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2R5LCB7IHg6IGJvZHlXaWR0aCAqIDAuNSwgeTogYm9keUhlaWdodCAqIDAuNSB9KTtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gYm9keS5ib3VuZHMubWF4LnggKyBjb2x1bW5HYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoc3RhY2ssIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFzdEJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBjb2x1bW5HYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB5ICs9IG1heEhlaWdodCArIHJvd0dhcDtcbiAgICAgICAgICAgIHggPSB4eDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENoYWlucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUgdG9nZXRoZXIgdXNpbmcgY29uc3RyYWludHMuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjaGFpbmVkIHRvZ2V0aGVyIHdpdGggY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNoYWluID0gZnVuY3Rpb24oY29tcG9zaXRlLCB4T2Zmc2V0QSwgeU9mZnNldEEsIHhPZmZzZXRCLCB5T2Zmc2V0Qiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcztcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaSAtIDFdLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvZHlBSGVpZ2h0ID0gYm9keUEuYm91bmRzLm1heC55IC0gYm9keUEuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlBV2lkdGggPSBib2R5QS5ib3VuZHMubWF4LnggLSBib2R5QS5ib3VuZHMubWluLngsIFxuICAgICAgICAgICAgICAgIGJvZHlCSGVpZ2h0ID0gYm9keUIuYm91bmRzLm1heC55IC0gYm9keUIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlCV2lkdGggPSBib2R5Qi5ib3VuZHMubWF4LnggLSBib2R5Qi5ib3VuZHMubWluLng7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgICAgICBwb2ludEE6IHsgeDogYm9keUFXaWR0aCAqIHhPZmZzZXRBLCB5OiBib2R5QUhlaWdodCAqIHlPZmZzZXRBIH0sXG4gICAgICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgICAgIHBvaW50QjogeyB4OiBib2R5QldpZHRoICogeE9mZnNldEIsIHk6IGJvZHlCSGVpZ2h0ICogeU9mZnNldEIgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgXG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKGNvbnN0cmFpbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIENoYWluJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbm5lY3RzIGJvZGllcyBpbiB0aGUgY29tcG9zaXRlIHdpdGggY29uc3RyYWludHMgaW4gYSBncmlkIHBhdHRlcm4sIHdpdGggb3B0aW9uYWwgY3Jvc3MgYnJhY2VzLlxuICAgICAqIEBtZXRob2QgbWVzaFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIG1lc2hlZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5tZXNoID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGJvZHlDO1xuICAgICAgICBcbiAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChjb2wgPSAxOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzWyhjb2wgLSAxKSArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUEsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBib2RpZXNbY29sICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sIC0gMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9zc0JyYWNlICYmIGNvbCA8IGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sICsgMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIE1lc2gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBweXJhbWlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2QgcHlyYW1pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5weXJhbWlkID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIENvbXBvc2l0ZXMuc3RhY2soeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKSB7XG4gICAgICAgICAgICB2YXIgYWN0dWFsUm93cyA9IE1hdGgubWluKHJvd3MsIE1hdGguY2VpbChjb2x1bW5zIC8gMikpLFxuICAgICAgICAgICAgICAgIGxhc3RCb2R5V2lkdGggPSBsYXN0Qm9keSA/IGxhc3RCb2R5LmJvdW5kcy5tYXgueCAtIGxhc3RCb2R5LmJvdW5kcy5taW4ueCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3cgPiBhY3R1YWxSb3dzKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmV2ZXJzZSByb3cgb3JkZXJcbiAgICAgICAgICAgIHJvdyA9IGFjdHVhbFJvd3MgLSByb3c7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHJvdyxcbiAgICAgICAgICAgICAgICBlbmQgPSBjb2x1bW5zIC0gMSAtIHJvdztcblxuICAgICAgICAgICAgaWYgKGNvbHVtbiA8IHN0YXJ0IHx8IGNvbHVtbiA+IGVuZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldHJvYWN0aXZlbHkgZml4IHRoZSBmaXJzdCBib2R5J3MgcG9zaXRpb24sIHNpbmNlIHdpZHRoIHdhcyB1bmtub3duXG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGxhc3RCb2R5LCB7IHg6IChjb2x1bW4gKyAoY29sdW1ucyAlIDIgPT09IDEgPyAxIDogLTEpKSAqIGxhc3RCb2R5V2lkdGgsIHk6IDAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4T2Zmc2V0ID0gbGFzdEJvZHkgPyBjb2x1bW4gKiBsYXN0Qm9keVdpZHRoIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHh4ICsgeE9mZnNldCArIGNvbHVtbiAqIGNvbHVtbkdhcCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFzIG5vdyBtb3ZlZCB0byB0aGUgW25ld3RvbnNDcmFkbGUgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvbmV3dG9uc0NyYWRsZS5qcyksIGZvbGxvdyB0aGF0IGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gbmV3dG9uc0NyYWRsZSBleGFtcGxlXG4gICAgICogQG1ldGhvZCBuZXd0b25zQ3JhZGxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIG5ld3RvbnNDcmFkbGUgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubmV3dG9uc0NyYWRsZSA9IGZ1bmN0aW9uKHh4LCB5eSwgbnVtYmVyLCBzaXplLCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIG5ld3RvbnNDcmFkbGUgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdOZXd0b25zIENyYWRsZScgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRpb24gPSAxLjksXG4gICAgICAgICAgICAgICAgY2lyY2xlID0gQm9kaWVzLmNpcmNsZSh4eCArIGkgKiAoc2l6ZSAqIHNlcGFyYXRpb24pLCB5eSArIGxlbmd0aCwgc2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgIHsgaW5lcnRpYTogSW5maW5pdHksIHJlc3RpdHV0aW9uOiAxLCBmcmljdGlvbjogMCwgZnJpY3Rpb25BaXI6IDAuMDAwMSwgc2xvcDogMSB9KSxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBwb2ludEE6IHsgeDogeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeTogeXkgfSwgYm9keUI6IGNpcmNsZSB9KTtcblxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkobmV3dG9uc0NyYWRsZSwgY2lyY2xlKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KG5ld3RvbnNDcmFkbGUsIGNvbnN0cmFpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld3RvbnNDcmFkbGU7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ25ld3RvbnNDcmFkbGUnLCAnQ29tcG9zaXRlcy5uZXd0b25zQ3JhZGxlIOKepCBtb3ZlZCB0byBuZXd0b25zQ3JhZGxlIGV4YW1wbGUnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtjYXIgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvY2FyLmpzKSwgZm9sbG93IHRoYXQgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBjYXIgZXhhbXBsZVxuICAgICAqIEBtZXRob2QgY2FyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aGVlbFNpemVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjYXIgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuY2FyID0gZnVuY3Rpb24oeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB3aGVlbFNpemUpIHtcbiAgICAgICAgdmFyIGdyb3VwID0gQm9keS5uZXh0R3JvdXAodHJ1ZSksXG4gICAgICAgICAgICB3aGVlbEJhc2UgPSAyMCxcbiAgICAgICAgICAgIHdoZWVsQU9mZnNldCA9IC13aWR0aCAqIDAuNSArIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsQk9mZnNldCA9IHdpZHRoICogMC41IC0gd2hlZWxCYXNlLFxuICAgICAgICAgICAgd2hlZWxZT2Zmc2V0ID0gMDtcbiAgICBcbiAgICAgICAgdmFyIGNhciA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ0NhcicgfSksXG4gICAgICAgICAgICBib2R5ID0gQm9kaWVzLnJlY3RhbmdsZSh4eCwgeXksIHdpZHRoLCBoZWlnaHQsIHsgXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbWZlcjoge1xuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IGhlaWdodCAqIDAuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVuc2l0eTogMC4wMDAyXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgdmFyIHdoZWVsQSA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEFPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIHdoZWVsQiA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEJPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxBID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxBT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEEsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxCID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxCT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIGJvZHkpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgd2hlZWxCKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY2FyLCBheGVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEIpO1xuXG4gICAgICAgIHJldHVybiBjYXI7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ2NhcicsICdDb21wb3NpdGVzLmNhciDinqQgbW92ZWQgdG8gY2FyIGV4YW1wbGUnKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFzIG5vdyBtb3ZlZCB0byB0aGUgW3NvZnRCb2R5IGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL3NvZnRCb2R5LmpzKVxuICAgICAqIGFuZCB0aGUgW2Nsb3RoIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2Nsb3RoLmpzKSwgZm9sbG93IHRob3NlIGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gc29mdEJvZHkgYW5kIGNsb3RoIGV4YW1wbGVzXG4gICAgICogQG1ldGhvZCBzb2Z0Qm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYXJ0aWNsZVJhZGl1c1xuICAgICAqIEBwYXJhbSB7fSBwYXJ0aWNsZU9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge30gY29uc3RyYWludE9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBzb2Z0Qm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuc29mdEJvZHkgPSBmdW5jdGlvbih4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBjcm9zc0JyYWNlLCBwYXJ0aWNsZVJhZGl1cywgcGFydGljbGVPcHRpb25zLCBjb25zdHJhaW50T3B0aW9ucykge1xuICAgICAgICBwYXJ0aWNsZU9wdGlvbnMgPSBDb21tb24uZXh0ZW5kKHsgaW5lcnRpYTogSW5maW5pdHkgfSwgcGFydGljbGVPcHRpb25zKTtcbiAgICAgICAgY29uc3RyYWludE9wdGlvbnMgPSBDb21tb24uZXh0ZW5kKHsgc3RpZmZuZXNzOiAwLjIsIHJlbmRlcjogeyB0eXBlOiAnbGluZScsIGFuY2hvcnM6IGZhbHNlIH0gfSwgY29uc3RyYWludE9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBzb2Z0Qm9keSA9IENvbXBvc2l0ZXMuc3RhY2soeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5jaXJjbGUoeCwgeSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIENvbXBvc2l0ZXMubWVzaChzb2Z0Qm9keSwgY29sdW1ucywgcm93cywgY3Jvc3NCcmFjZSwgY29uc3RyYWludE9wdGlvbnMpO1xuXG4gICAgICAgIHNvZnRCb2R5LmxhYmVsID0gJ1NvZnQgQm9keSc7XG5cbiAgICAgICAgcmV0dXJuIHNvZnRCb2R5O1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICdzb2Z0Qm9keScsICdDb21wb3NpdGVzLnNvZnRCb2R5IOKepCBtb3ZlZCB0byBzb2Z0Qm9keSBhbmQgY2xvdGggZXhhbXBsZXMnKTtcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VDb25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgbW91c2UgY29uc3RyYWludHMuXG4qIE1vdXNlIGNvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBhbGxvd2luZyB1c2VyIGludGVyYWN0aW9uLCBwcm92aWRpbmcgdGhlIGFiaWxpdHkgdG8gbW92ZSBib2RpZXMgdmlhIHRoZSBtb3VzZSBvciB0b3VjaC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIE1vdXNlQ29uc3RyYWludFxuKi9cblxudmFyIE1vdXNlQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlQ29uc3RyYWludDtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtNb3VzZUNvbnN0cmFpbnR9IEEgbmV3IE1vdXNlQ29uc3RyYWludFxuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC5jcmVhdGUgPSBmdW5jdGlvbihlbmdpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gKGVuZ2luZSA/IGVuZ2luZS5tb3VzZSA6IG51bGwpIHx8IChvcHRpb25zID8gb3B0aW9ucy5tb3VzZSA6IG51bGwpO1xuXG4gICAgICAgIGlmICghbW91c2UpIHtcbiAgICAgICAgICAgIGlmIChlbmdpbmUgJiYgZW5naW5lLnJlbmRlciAmJiBlbmdpbmUucmVuZGVyLmNhbnZhcykge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKGVuZ2luZS5yZW5kZXIuY2FudmFzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZShvcHRpb25zLmVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdNb3VzZUNvbnN0cmFpbnQuY3JlYXRlOiBvcHRpb25zLm1vdXNlIHdhcyB1bmRlZmluZWQsIG9wdGlvbnMuZWxlbWVudCB3YXMgdW5kZWZpbmVkLCBtYXkgbm90IGZ1bmN0aW9uIGFzIGV4cGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludCA9IENvbnN0cmFpbnQuY3JlYXRlKHsgXG4gICAgICAgICAgICBsYWJlbDogJ01vdXNlIENvbnN0cmFpbnQnLFxuICAgICAgICAgICAgcG9pbnRBOiBtb3VzZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBsZW5ndGg6IDAuMDEsIFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAwLjEsXG4gICAgICAgICAgICBhbmd1bGFyU3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6ICcjOTBFRTkwJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdHlwZTogJ21vdXNlQ29uc3RyYWludCcsXG4gICAgICAgICAgICBtb3VzZTogbW91c2UsXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQ6IGNvbnN0cmFpbnQsXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogMHgwMDAxLFxuICAgICAgICAgICAgICAgIG1hc2s6IDB4RkZGRkZGRkYsXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbW91c2VDb25zdHJhaW50ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgRXZlbnRzLm9uKGVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lLndvcmxkKTtcbiAgICAgICAgICAgIE1vdXNlQ29uc3RyYWludC51cGRhdGUobW91c2VDb25zdHJhaW50LCBhbGxCb2RpZXMpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50Ll90cmlnZ2VyRXZlbnRzKG1vdXNlQ29uc3RyYWludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb3VzZUNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGdpdmVuIG1vdXNlIGNvbnN0cmFpbnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7TW91c2VDb25zdHJhaW50fSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZSA9IGZ1bmN0aW9uKG1vdXNlQ29uc3RyYWludCwgYm9kaWVzKSB7XG4gICAgICAgIHZhciBtb3VzZSA9IG1vdXNlQ29uc3RyYWludC5tb3VzZSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBtb3VzZUNvbnN0cmFpbnQuY29uc3RyYWludCxcbiAgICAgICAgICAgIGJvZHkgPSBtb3VzZUNvbnN0cmFpbnQuYm9keTtcblxuICAgICAgICBpZiAobW91c2UuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnN0cmFpbnQuYm9keUIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBtb3VzZS5wb3NpdGlvbikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgRGV0ZWN0b3IuY2FuQ29sbGlkZShib2R5LmNvbGxpc2lvbkZpbHRlciwgbW91c2VDb25zdHJhaW50LmNvbGxpc2lvbkZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKHBhcnQudmVydGljZXMsIG1vdXNlLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IG1vdXNlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmJvZHlCID0gbW91c2VDb25zdHJhaW50LmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IHsgeDogbW91c2UucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgeTogbW91c2UucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHkuYW5nbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnc3RhcnRkcmFnJywgeyBtb3VzZTogbW91c2UsIGJvZHk6IGJvZHkgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoY29uc3RyYWludC5ib2R5QiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50LmJvZHlCID0gbW91c2VDb25zdHJhaW50LmJvZHkgPSBudWxsO1xuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoYm9keSlcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdlbmRkcmFnJywgeyBtb3VzZTogbW91c2UsIGJvZHk6IGJvZHkgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgbW91c2UgY29uc3RyYWludCBldmVudHMuXG4gICAgICogQG1ldGhvZCBfdHJpZ2dlckV2ZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50Ll90cmlnZ2VyRXZlbnRzID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50KSB7XG4gICAgICAgIHZhciBtb3VzZSA9IG1vdXNlQ29uc3RyYWludC5tb3VzZSxcbiAgICAgICAgICAgIG1vdXNlRXZlbnRzID0gbW91c2Uuc291cmNlRXZlbnRzO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZW1vdmUpXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZW1vdmUnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2Vkb3duKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2Vkb3duJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNldXApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZXVwJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIG1vdXNlIHN0YXRlIHJlYWR5IGZvciB0aGUgbmV4dCBzdGVwXG4gICAgICAgIE1vdXNlLmNsZWFyU291cmNlRXZlbnRzKG1vdXNlKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaGFzIG1vdmVkIChvciBhIHRvdWNoIG1vdmVzKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGlzIGRvd24gKG9yIGEgdG91Y2ggaGFzIHN0YXJ0ZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlZG93blxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgdXAgKG9yIGEgdG91Y2ggaGFzIGVuZGVkKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZXVwXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyBhIGJvZHlcbiAgICAqXG4gICAgKiBAZXZlbnQgc3RhcnRkcmFnXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7Ym9keX0gZXZlbnQuYm9keSBUaGUgYm9keSBiZWluZyBkcmFnZ2VkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBlbmRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBlbmRkcmFnXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7Ym9keX0gZXZlbnQuYm9keSBUaGUgYm9keSB0aGF0IGhhcyBzdG9wcGVkIGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgTW91c2VgIGluc3RhbmNlIGluIHVzZS4gSWYgbm90IHN1cHBsaWVkIGluIGBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlYCwgb25lIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtb3VzZVxuICAgICAqIEB0eXBlIG1vdXNlXG4gICAgICogQGRlZmF1bHQgbW91c2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQm9keWAgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgbW92ZWQgYnkgdGhlIHVzZXIsIG9yIGBudWxsYCBpZiBubyBib2R5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZHlcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBDb25zdHJhaW50YCBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIG1vdmUgdGhlIGJvZHkgZHVyaW5nIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRcbiAgICAgKiBAdHlwZSBjb25zdHJhaW50XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBjb2xsaXNpb24gZmlsdGVyIGFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgd2hpY2ggdHlwZXMgb2YgYm9keSB0aGlzIG1vdXNlIGNvbnN0cmFpbnQgY2FuIGludGVyYWN0IHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUXVlcnlgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbGxpc2lvbiBxdWVyaWVzLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgUXVlcnlcbiovXG5cbnZhciBRdWVyeSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBTQVQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgY29sbGlzaW9ucyBiZXR3ZWVuIGBib2R5YCBhbmQgYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQ29sbGlzaW9uc1xuICAgICAqL1xuICAgIFF1ZXJ5LmNvbGxpZGVzID0gZnVuY3Rpb24oYm9keSwgYm9kaWVzKSB7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhib2R5QS5ib3VuZHMsIGJvZHkuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5QS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaiA8IGJvZHlBLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keUEucGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhwYXJ0LmJvdW5kcywgYm9keS5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gU0FULmNvbGxpZGVzKHBhcnQsIGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uLmNvbGxpZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FzdHMgYSByYXkgc2VnbWVudCBhZ2FpbnN0IGEgc2V0IG9mIGJvZGllcyBhbmQgcmV0dXJucyBhbGwgY29sbGlzaW9ucywgcmF5IHdpZHRoIGlzIG9wdGlvbmFsLiBJbnRlcnNlY3Rpb24gcG9pbnRzIGFyZSBub3QgcHJvdmlkZWQuXG4gICAgICogQG1ldGhvZCByYXlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHN0YXJ0UG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZW5kUG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JheVdpZHRoXVxuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkucmF5ID0gZnVuY3Rpb24oYm9kaWVzLCBzdGFydFBvaW50LCBlbmRQb2ludCwgcmF5V2lkdGgpIHtcbiAgICAgICAgcmF5V2lkdGggPSByYXlXaWR0aCB8fCAxZS0xMDA7XG5cbiAgICAgICAgdmFyIHJheUFuZ2xlID0gVmVjdG9yLmFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSxcbiAgICAgICAgICAgIHJheUxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1YihzdGFydFBvaW50LCBlbmRQb2ludCkpLFxuICAgICAgICAgICAgcmF5WCA9IChlbmRQb2ludC54ICsgc3RhcnRQb2ludC54KSAqIDAuNSxcbiAgICAgICAgICAgIHJheVkgPSAoZW5kUG9pbnQueSArIHN0YXJ0UG9pbnQueSkgKiAwLjUsXG4gICAgICAgICAgICByYXkgPSBCb2RpZXMucmVjdGFuZ2xlKHJheVgsIHJheVksIHJheUxlbmd0aCwgcmF5V2lkdGgsIHsgYW5nbGU6IHJheUFuZ2xlIH0pLFxuICAgICAgICAgICAgY29sbGlzaW9ucyA9IFF1ZXJ5LmNvbGxpZGVzKHJheSwgYm9kaWVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHkgPSBjb2xsaXNpb24uYm9keUIgPSBjb2xsaXNpb24uYm9keUE7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIGJvdW5kcyBhcmUgaW5zaWRlIChvciBvdXRzaWRlIGlmIHNldCkgdGhlIGdpdmVuIHNldCBvZiBib3VuZHMsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCByZWdpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW291dHNpZGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnJlZ2lvbiA9IGZ1bmN0aW9uKGJvZGllcywgYm91bmRzLCBvdXRzaWRlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgb3ZlcmxhcHMgPSBCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoKG92ZXJsYXBzICYmICFvdXRzaWRlKSB8fCAoIW92ZXJsYXBzICYmIG91dHNpZGUpKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIHZlcnRpY2VzIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcG9pbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnBvaW50ID0gZnVuY3Rpb24oYm9kaWVzLCBwb2ludCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocGFydC5ib3VuZHMsIHBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJ1bm5lcmAgbW9kdWxlIGlzIGFuIG9wdGlvbmFsIHV0aWxpdHkgd2hpY2ggcHJvdmlkZXMgYSBnYW1lIGxvb3AsIFxuKiB0aGF0IGhhbmRsZXMgY29udGludW91c2x5IHVwZGF0aW5nIGEgYE1hdHRlci5FbmdpbmVgIGZvciB5b3Ugd2l0aGluIGEgYnJvd3Nlci5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJZiB5b3UgYXJlIHVzaW5nIHlvdXIgb3duIGdhbWUgbG9vcCBpbnN0ZWFkLCB0aGVuIHlvdSBkbyBub3QgbmVlZCB0aGUgYE1hdHRlci5SdW5uZXJgIG1vZHVsZS5cbiogSW5zdGVhZCBqdXN0IGNhbGwgYEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSlgIGluIHlvdXIgb3duIGxvb3AuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBSdW5uZXJcbiovXG5cbnZhciBSdW5uZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSdW5uZXI7XG5cbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIEVuZ2luZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgIFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHZhciBfZnJhbWVUaW1lb3V0O1xuXG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjayl7IFxuICAgICAgICAgICAgX2ZyYW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKENvbW1vbi5ub3coKSk7IFxuICAgICAgICAgICAgfSwgMTAwMCAvIDYwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfZnJhbWVUaW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFJ1bm5lci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqL1xuICAgIFJ1bm5lci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGZwczogNjAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZGVsdGFTYW1wbGVTaXplOiA2MCxcbiAgICAgICAgICAgIGNvdW50ZXJUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBmcmFtZUNvdW50ZXI6IDAsXG4gICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgdGltZVByZXY6IG51bGwsXG4gICAgICAgICAgICB0aW1lU2NhbGVQcmV2OiAxLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICBpc0ZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcnVubmVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgcnVubmVyLmRlbHRhID0gcnVubmVyLmRlbHRhIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNaW4gPSBydW5uZXIuZGVsdGFNaW4gfHwgMTAwMCAvIHJ1bm5lci5mcHM7XG4gICAgICAgIHJ1bm5lci5kZWx0YU1heCA9IHJ1bm5lci5kZWx0YU1heCB8fCAxMDAwIC8gKHJ1bm5lci5mcHMgKiAwLjUpO1xuICAgICAgICBydW5uZXIuZnBzID0gMTAwMCAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICByZXR1cm4gcnVubmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdGlja3MgYSBgTWF0dGVyLkVuZ2luZWAgYnkgY2FsbGluZyBgUnVubmVyLnRpY2tgIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIucnVuID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJ1bm5lciBpZiBlbmdpbmUgaXMgZmlyc3QgYXJndW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiBydW5uZXIucG9zaXRpb25JdGVyYXRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZW5naW5lID0gcnVubmVyO1xuICAgICAgICAgICAgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIHJlbmRlcih0aW1lKXtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgJiYgcnVubmVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBSdW5uZXIudGljayhydW5uZXIsIGVuZ2luZSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBnYW1lIGxvb3AgdXRpbGl0eSB0aGF0IHVwZGF0ZXMgdGhlIGVuZ2luZSBhbmQgcmVuZGVyZXIgYnkgb25lIHN0ZXAgKGEgJ3RpY2snKS5cbiAgICAgKiBGZWF0dXJlcyBkZWx0YSBzbW9vdGhpbmcsIHRpbWUgY29ycmVjdGlvbiBhbmQgZml4ZWQgb3IgZHluYW1pYyB0aW1pbmcuXG4gICAgICogQ29uc2lkZXIganVzdCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaWYgeW91J3JlIHVzaW5nIHlvdXIgb3duIGxvb3AuXG4gICAgICogQG1ldGhvZCB0aWNrXG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJ1bm5lci50aWNrID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUsIHRpbWUpIHtcbiAgICAgICAgdmFyIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gMSxcbiAgICAgICAgICAgIGRlbHRhO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBldmVudCBvYmplY3RcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVGljaycsIGV2ZW50KTtcblxuICAgICAgICBpZiAocnVubmVyLmlzRml4ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpeGVkIHRpbWVzdGVwXG4gICAgICAgICAgICBkZWx0YSA9IHJ1bm5lci5kZWx0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGR5bmFtaWMgdGltZXN0ZXAgYmFzZWQgb24gd2FsbCBjbG9jayBiZXR3ZWVuIGNhbGxzXG4gICAgICAgICAgICBkZWx0YSA9ICh0aW1lIC0gcnVubmVyLnRpbWVQcmV2KSB8fCBydW5uZXIuZGVsdGE7XG4gICAgICAgICAgICBydW5uZXIudGltZVByZXYgPSB0aW1lO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzdGljYWxseSBmaWx0ZXIgZGVsdGEgb3ZlciBhIGZldyBmcmFtZXMsIHRvIGltcHJvdmUgc3RhYmlsaXR5XG4gICAgICAgICAgICBydW5uZXIuZGVsdGFIaXN0b3J5LnB1c2goZGVsdGEpO1xuICAgICAgICAgICAgcnVubmVyLmRlbHRhSGlzdG9yeSA9IHJ1bm5lci5kZWx0YUhpc3Rvcnkuc2xpY2UoLXJ1bm5lci5kZWx0YVNhbXBsZVNpemUpO1xuICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1pbi5hcHBseShudWxsLCBydW5uZXIuZGVsdGFIaXN0b3J5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGltaXQgZGVsdGFcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPCBydW5uZXIuZGVsdGFNaW4gPyBydW5uZXIuZGVsdGFNaW4gOiBkZWx0YTtcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPiBydW5uZXIuZGVsdGFNYXggPyBydW5uZXIuZGVsdGFNYXggOiBkZWx0YTtcblxuICAgICAgICAgICAgLy8gY29ycmVjdGlvbiBmb3IgZGVsdGFcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSBkZWx0YSAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGVuZ2luZSB0aW1pbmcgb2JqZWN0XG4gICAgICAgICAgICBydW5uZXIuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRpbWUgY29ycmVjdGlvbiBmb3IgdGltZSBzY2FsaW5nXG4gICAgICAgIGlmIChydW5uZXIudGltZVNjYWxlUHJldiAhPT0gMClcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gKj0gdGltaW5nLnRpbWVTY2FsZSAvIHJ1bm5lci50aW1lU2NhbGVQcmV2O1xuXG4gICAgICAgIGlmICh0aW1pbmcudGltZVNjYWxlID09PSAwKVxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IDA7XG5cbiAgICAgICAgcnVubmVyLnRpbWVTY2FsZVByZXYgPSB0aW1pbmcudGltZVNjYWxlO1xuICAgICAgICBydW5uZXIuY29ycmVjdGlvbiA9IGNvcnJlY3Rpb247XG5cbiAgICAgICAgLy8gZnBzIGNvdW50ZXJcbiAgICAgICAgcnVubmVyLmZyYW1lQ291bnRlciArPSAxO1xuICAgICAgICBpZiAodGltZSAtIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wID49IDEwMDApIHtcbiAgICAgICAgICAgIHJ1bm5lci5mcHMgPSBydW5uZXIuZnJhbWVDb3VudGVyICogKCh0aW1lIC0gcnVubmVyLmNvdW50ZXJUaW1lc3RhbXApIC8gMTAwMCk7XG4gICAgICAgICAgICBydW5uZXIuY291bnRlclRpbWVzdGFtcCA9IHRpbWU7XG4gICAgICAgICAgICBydW5uZXIuZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ3RpY2snLCBldmVudCk7XG5cbiAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcbiAgICAgICAgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJUaWNrJywgZXZlbnQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUnVubmVyLnJ1bmAgb24gdGhlIGdpdmVuIGBydW5uZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogSWYgeW91IHdpc2ggdG8gb25seSB0ZW1wb3JhcmlseSBwYXVzZSB0aGUgZW5naW5lLCBzZWUgYGVuZ2luZS5lbmFibGVkYCBpbnN0ZWFkLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RvcCA9IGZ1bmN0aW9uKHJ1bm5lcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVubmVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBSdW5uZXIucnVuYC5cbiAgICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RhcnQgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSkge1xuICAgICAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIHN0YXJ0IG9mIGEgdGljaywgYmVmb3JlIGFueSB1cGRhdGVzIHRvIHRoZSBlbmdpbmUgb3IgdGltaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB0aW1pbmcgdXBkYXRlZCwgYnV0IGp1c3QgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCB0aWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhdCB0aGUgZW5kIG9mIGEgdGljaywgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJ1bm5lciBpcyBydW5uaW5nIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgc3BlY2lmaWVzIGlmIHRoZSBydW5uZXIgc2hvdWxkIHVzZSBhIGZpeGVkIHRpbWVzdGVwIChvdGhlcndpc2UgaXQgaXMgdmFyaWFibGUpLlxuICAgICAqIElmIHRpbWluZyBpcyBmaXhlZCwgdGhlbiB0aGUgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZCB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUgKGJ1dCBiZWhhdmlvdXIgd2lsbCBiZSBkZXRlcm1pbmlzdGljKS5cbiAgICAgKiBJZiB0aGUgdGltaW5nIGlzIHZhcmlhYmxlLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgYmUgY29uc3RhbnQgKGFwcHJveGltYXRlbHksIGJ1dCBhdCB0aGUgY29zdCBvZiBkZXRlcm1pbmluaXNtKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc0ZpeGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIHN0ZXAgYmV0d2VlbiB1cGRhdGVzIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBJZiBgZW5naW5lLnRpbWluZy5pc0ZpeGVkYCBpcyBzZXQgdG8gYHRydWVgLCB0aGVuIGBkZWx0YWAgaXMgZml4ZWQuXG4gICAgICogSWYgaXQgaXMgYGZhbHNlYCwgdGhlbiBgZGVsdGFgIGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgdG8gbWFpbnRhaW4gdGhlIGNvcnJlY3QgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDEwMDAgLyA2MFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlN2Z2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNvbnZlcnRpbmcgU1ZHIGltYWdlcyBpbnRvIGFuIGFycmF5IG9mIHZlY3RvciBwb2ludHMuXG4qXG4qIFRvIHVzZSB0aGlzIG1vZHVsZSB5b3UgYWxzbyBuZWVkIHRoZSBTVkdQYXRoU2VnIHBvbHlmaWxsOiBodHRwczovL2dpdGh1Yi5jb20vcHJvZ2Vycy9wYXRoc2VnXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBTdmdcbiovXG5cbnZhciBTdmcgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdmc7XG5cbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIFNWRyBwYXRoIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbiAgICAgKiBJZiB0aGUgaW5wdXQgcGF0aCBmb3JtcyBhIGNvbmNhdmUgc2hhcGUsIHlvdSBtdXN0IGRlY29tcG9zZSB0aGUgcmVzdWx0IGludG8gY29udmV4IHBhcnRzIGJlZm9yZSB1c2UuXG4gICAgICogU2VlIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciB0aGlzLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBndWFyYW50ZWVkIHRvIHN1cHBvcnQgY29tcGxleCBwYXRocyAoc3VjaCBhcyB0aG9zZSB3aXRoIGhvbGVzKS5cbiAgICAgKiBZb3UgbXVzdCBsb2FkIHRoZSBgcGF0aHNlZy5qc2AgcG9seWZpbGwgb24gbmV3ZXIgYnJvd3NlcnMuXG4gICAgICogQG1ldGhvZCBwYXRoVG9WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7U1ZHUGF0aEVsZW1lbnR9IHBhdGhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZUxlbmd0aD0xNV1cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3JbXX0gcG9pbnRzXG4gICAgICovXG4gICAgU3ZnLnBhdGhUb1ZlcnRpY2VzID0gZnVuY3Rpb24ocGF0aCwgc2FtcGxlTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhKCdTVkdQYXRoU2VnJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignU3ZnLnBhdGhUb1ZlcnRpY2VzOiBTVkdQYXRoU2VnIG5vdCBkZWZpbmVkLCBhIHBvbHlmaWxsIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dvdXQvc3ZnLnRvcG9seS5qcy9ibG9iL21hc3Rlci9zdmcudG9wb2x5LmpzXG4gICAgICAgIHZhciBpLCBpbCwgdG90YWwsIHBvaW50LCBzZWdtZW50LCBzZWdtZW50cywgXG4gICAgICAgICAgICBzZWdtZW50c1F1ZXVlLCBsYXN0U2VnbWVudCwgXG4gICAgICAgICAgICBsYXN0UG9pbnQsIHNlZ21lbnRJbmRleCwgcG9pbnRzID0gW10sXG4gICAgICAgICAgICBseCwgbHksIGxlbmd0aCA9IDAsIHggPSAwLCB5ID0gMDtcblxuICAgICAgICBzYW1wbGVMZW5ndGggPSBzYW1wbGVMZW5ndGggfHwgMTU7XG5cbiAgICAgICAgdmFyIGFkZFBvaW50ID0gZnVuY3Rpb24ocHgsIHB5LCBwYXRoU2VnVHlwZSkge1xuICAgICAgICAgICAgLy8gYWxsIG9kZC1udW1iZXJlZCBwYXRoIHR5cGVzIGFyZSByZWxhdGl2ZSBleGNlcHQgUEFUSFNFR19DTE9TRVBBVEggKDEpXG4gICAgICAgICAgICB2YXIgaXNSZWxhdGl2ZSA9IHBhdGhTZWdUeXBlICUgMiA9PT0gMSAmJiBwYXRoU2VnVHlwZSA+IDE7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGxhc3QgcG9pbnQgZG9lc24ndCBlcXVhbCB0aGUgY3VycmVudCBwb2ludCBhZGQgdGhlIGN1cnJlbnQgcG9pbnRcbiAgICAgICAgICAgIGlmICghbGFzdFBvaW50IHx8IHB4ICE9IGxhc3RQb2ludC54IHx8IHB5ICE9IGxhc3RQb2ludC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQb2ludCAmJiBpc1JlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGx4ID0gbGFzdFBvaW50Lng7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gbGFzdFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSAwO1xuICAgICAgICAgICAgICAgICAgICBseSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBseCArIHB4LFxuICAgICAgICAgICAgICAgICAgICB5OiBseSArIHB5XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBsYXN0IHBvaW50XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVsYXRpdmUgfHwgIWxhc3RQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG5cbiAgICAgICAgICAgICAgICB4ID0gbHggKyBweDtcbiAgICAgICAgICAgICAgICB5ID0gbHkgKyBweTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWRkU2VnbWVudFBvaW50ID0gZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgICAgdmFyIHNlZ1R5cGUgPSBzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gc2tpcCBwYXRoIGVuZHNcbiAgICAgICAgICAgIGlmIChzZWdUeXBlID09PSAnWicpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gbWFwIHNlZ21lbnQgdG8geCBhbmQgeVxuICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIHkgPSBzZWdtZW50Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkUG9pbnQoeCwgeSwgc2VnbWVudC5wYXRoU2VnVHlwZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW5zdXJlIHBhdGggaXMgYWJzb2x1dGVcbiAgICAgICAgU3ZnLl9zdmdQYXRoVG9BYnNvbHV0ZShwYXRoKTtcblxuICAgICAgICAvLyBnZXQgdG90YWwgbGVuZ3RoXG4gICAgICAgIHRvdGFsID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICAgIC8vIHF1ZXVlIHNlZ21lbnRzXG4gICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7IGkgKz0gMSlcbiAgICAgICAgICAgIHNlZ21lbnRzLnB1c2gocGF0aC5wYXRoU2VnTGlzdC5nZXRJdGVtKGkpKTtcblxuICAgICAgICBzZWdtZW50c1F1ZXVlID0gc2VnbWVudHMuY29uY2F0KCk7XG5cbiAgICAgICAgLy8gc2FtcGxlIHRocm91Z2ggcGF0aFxuICAgICAgICB3aGlsZSAobGVuZ3RoIDwgdG90YWwpIHtcbiAgICAgICAgICAgIC8vIGdldCBzZWdtZW50IGF0IHBvc2l0aW9uXG4gICAgICAgICAgICBzZWdtZW50SW5kZXggPSBwYXRoLmdldFBhdGhTZWdBdExlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRJbmRleF07XG5cbiAgICAgICAgICAgIC8vIG5ldyBzZWdtZW50XG4gICAgICAgICAgICBpZiAoc2VnbWVudCAhPSBsYXN0U2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZWdtZW50c1F1ZXVlLmxlbmd0aCAmJiBzZWdtZW50c1F1ZXVlWzBdICE9IHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlLnNoaWZ0KCkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdFNlZ21lbnQgPSBzZWdtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgcG9pbnRzIGluIGJldHdlZW4gd2hlbiBjdXJ2aW5nXG4gICAgICAgICAgICAvLyBUT0RPOiBhZGFwdGl2ZSBzYW1wbGluZ1xuICAgICAgICAgICAgc3dpdGNoIChzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKSkge1xuXG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgIHBvaW50ID0gcGF0aC5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGJ5IHNhbXBsZSB2YWx1ZVxuICAgICAgICAgICAgbGVuZ3RoICs9IHNhbXBsZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgc2VnbWVudHMgbm90IHBhc3NlZCBieSBzYW1wbGluZ1xuICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHNlZ21lbnRzUXVldWUubGVuZ3RoOyBpIDwgaWw7ICsraSlcbiAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlW2ldKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH07XG5cbiAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9jb252ZXJ0LXN2Zy1wYXRoLXRvLWFsbC1hYnNvbHV0ZS1jb21tYW5kc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIEdhdmluIEtpc3RuZXJcbiAgICAgICAgLy8gaHR0cDovL3Bocm9nei5uZXQvanMvX1JldXNlTGljZW5zZS50eHRcbiAgICAgICAgLy8gTW9kaWZpY2F0aW9uczogdGlkeSBmb3JtYXR0aW5nIGFuZCBuYW1pbmdcbiAgICAgICAgdmFyIHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHNlZ3MgPSBwYXRoLnBhdGhTZWdMaXN0LFxuICAgICAgICAgICAgeCA9IDAsIHkgPSAwLCBsZW4gPSBzZWdzLm51bWJlck9mSXRlbXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ3MuZ2V0SXRlbShpKSxcbiAgICAgICAgICAgICAgICBzZWdUeXBlID0gc2VnLnBhdGhTZWdUeXBlQXNMZXR0ZXI7XG5cbiAgICAgICAgICAgIGlmICgvW01MSFZDU1FUQV0vLnRlc3Qoc2VnVHlwZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3gnIGluIHNlZykgeCA9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ID0gc2VnLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgneDEnIGluIHNlZykgeDEgPSB4ICsgc2VnLngxO1xuICAgICAgICAgICAgICAgIGlmICgneDInIGluIHNlZykgeDIgPSB4ICsgc2VnLngyO1xuICAgICAgICAgICAgICAgIGlmICgneTEnIGluIHNlZykgeTEgPSB5ICsgc2VnLnkxO1xuICAgICAgICAgICAgICAgIGlmICgneTInIGluIHNlZykgeTIgPSB5ICsgc2VnLnkyO1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ICs9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ICs9IHNlZy55O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdNb3ZldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9Ib3Jpem9udGFsQWJzKHgpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvVmVydGljYWxBYnMoeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNBYnMoeCwgeSwgeDEsIHkxLCB4MiwgeTIpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoQWJzKHgsIHksIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljQWJzKHgsIHksIHgxLCB5MSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljU21vb3RoQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQXJjQWJzKHgsIHksIHNlZy5yMSwgc2VnLnIyLCBzZWcuYW5nbGUsIHNlZy5sYXJnZUFyY0ZsYWcsIHNlZy5zd2VlcEZsYWcpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgICAgIHggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT0gJ00nIHx8IHNlZ1R5cGUgPT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgICAgIHkwID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkNvbXBvc2l0ZWAuXG4qXG4qIEFsbCB1c2FnZSBzaG91bGQgYmUgbWlncmF0ZWQgdG8gdGhlIGVxdWl2YWxlbnQgZnVuY3Rpb25zIGZvdW5kIG9uIGBNYXR0ZXIuQ29tcG9zaXRlYC5cbiogRm9yIGV4YW1wbGUgYFdvcmxkLmFkZCh3b3JsZCwgYm9keSlgIG5vdyBiZWNvbWVzIGBDb21wb3NpdGUuYWRkKHdvcmxkLCBib2R5KWAuXG4qXG4qIFRoZSBwcm9wZXJ0eSBgd29ybGQuZ3Jhdml0eWAgaGFzIGJlZW4gbW92ZWQgdG8gYGVuZ2luZS5ncmF2aXR5YC5cbipcbiogRm9yIGJhY2stY29tcGF0aWJpbGl0eSBwdXJwb3NlcyB0aGlzIG1vZHVsZSB3aWxsIHJlbWFpbiBhcyBhIGRpcmVjdCBhbGlhcyB0byBgTWF0dGVyLkNvbXBvc2l0ZWAgaW4gdGhlIHNob3J0IHRlcm0gZHVyaW5nIG1pZ3JhdGlvbi5cbiogRXZlbnR1YWxseSB0aGlzIGFsaWFzIG1vZHVsZSB3aWxsIGJlIG1hcmtlZCBhcyBkZXByZWNhdGVkIGFuZCB0aGVuIGxhdGVyIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS5cbipcbiogQGNsYXNzIFdvcmxkXG4qL1xuXG52YXIgV29ybGQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDtcblxudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogU2VlIGFib3ZlLCBhbGlhc2VzIGZvciBiYWNrIGNvbXBhdGliaWxpdHkgb25seVxuICAgICAqL1xuICAgIFdvcmxkLmNyZWF0ZSA9IENvbXBvc2l0ZS5jcmVhdGU7XG4gICAgV29ybGQuYWRkID0gQ29tcG9zaXRlLmFkZDtcbiAgICBXb3JsZC5yZW1vdmUgPSBDb21wb3NpdGUucmVtb3ZlO1xuICAgIFdvcmxkLmNsZWFyID0gQ29tcG9zaXRlLmNsZWFyO1xuICAgIFdvcmxkLmFkZENvbXBvc2l0ZSA9IENvbXBvc2l0ZS5hZGRDb21wb3NpdGU7XG4gICAgV29ybGQuYWRkQm9keSA9IENvbXBvc2l0ZS5hZGRCb2R5O1xuICAgIFdvcmxkLmFkZENvbnN0cmFpbnQgPSBDb21wb3NpdGUuYWRkQ29uc3RyYWludDtcblxufSkoKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQaHlzaWNzRW5naW5lIH0gZnJvbSBcIi4vUGh5c2ljc0VuZ2luZVwiO1xuXG5cbi8qKiBAdHlwZSB7UGh5c2ljc0VuZ2luZX0gKi9cbmxldCBwaHlzaWNzRW5naW5lID0gbmV3IFBoeXNpY3NFbmdpbmUoKTtcbiBcbi8vQHRzLWlnbm9yZVxucG9zdE1lc3NhZ2UoIHsgbXNnOiBcInJlYWR5XCIgfSApO1xuXG5vbm1lc3NhZ2UgPSAoIG1zZyApID0+IHtcbiAgICBjb25zdCBkYXRhID0gbXNnLmRhdGE7XG5cbiAgICBpZiAoIGRhdGEubXNnID09IFwidXBkYXRlXCIgKSB7XG4gICAgICAgIHBoeXNpY3NFbmdpbmUudXBkYXRlKCk7ICAgICAgICAgXG4gICAgfSBlbHNlIGlmICggZGF0YS5tc2cgPT0gXCJzZXRTdGFnZUJvdW5kXCIgKSB7XG4gICAgICAgIHBoeXNpY3NFbmdpbmUuc2V0U3RhZ2VCb3VuZCggLi4uZGF0YS5hcmdzICk7XG4gICAgfVxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9