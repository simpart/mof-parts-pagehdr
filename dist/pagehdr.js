require('mofron-parts-header');
require('mofron-parts-text');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   PageHeader.js
	 * @brief  Simpale Page Header
	 * @author simpart
	 */

	mofron.parts.PageHeader = function (_mofron$parts$Header) {
	    _inherits(_class, _mofron$parts$Header);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initContents', this).call(this, vd, prm);

	                if ('string' != typeof prm) {
	                    throw new Error('invalid parameter type');
	                }

	                /* set header style */
	                var conts = this.vdom.getChild(0);
	                conts.setStyle('display', 'flex');
	                conts.setStyle('align-items', 'center');

	                /* set header title */
	                var title = new mofron.parts.Text(prm);
	                title.size(35);
	                title.style('margin-left', '20px');
	                this.addChild(title);

	                /* set text color */
	                var thm_clr = mofron.theme.getColor();
	                if (undefined != mofron.theme) {
	                    var clr = mofron.theme.getColor(0);
	                    if (null !== clr) {
	                        var rgb = clr.getRgba();
	                        if (290 > rgb[0] + rgb[1] + rgb[2]) {
	                            title.color(new mofron.util.Color(255, 255, 255));
	                        }
	                    }
	                }

	                /* set reload link */
	                title.setLink('./');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Header);

/***/ }
/******/ ]);
