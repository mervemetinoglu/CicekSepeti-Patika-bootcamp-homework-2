/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animal.js":
/*!**************************!*\
  !*** ./src/js/Animal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal = /*#__PURE__*/function () {
  function Animal(name, image, numberOfLegs) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }

  _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      console.log("".concat(this.name, " makes a noise."));
    }
  }]);

  return Animal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);

/***/ }),

/***/ "./src/js/Dog.js":
/*!***********************!*\
  !*** ./src/js/Dog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/js/Animal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Dog = /*#__PURE__*/function (_Animal) {
  _inherits(Dog, _Animal);

  var _super = _createSuper(Dog);

  function Dog(name, image, numberOfLegs, age) {
    var _this;

    _classCallCheck(this, Dog);

    _this = _super.call(this, name, image, numberOfLegs);
    _this.age = age;
    return _this;
  }

  return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);

/***/ }),

/***/ "./src/js/Duck.js":
/*!************************!*\
  !*** ./src/js/Duck.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/js/Animal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Duck = /*#__PURE__*/function (_Animal) {
  _inherits(Duck, _Animal);

  var _super = _createSuper(Duck);

  function Duck(name, image, numberOfLegs, age) {
    var _this;

    _classCallCheck(this, Duck);

    _this = _super.call(this, name, image, numberOfLegs);
    _this.age = age;
    return _this;
  }

  return Duck;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Duck);

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ "./src/js/Dog.js");
/* harmony import */ var _Duck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duck */ "./src/js/Duck.js");

 // creating instances from Dog and Duck classes

var animalsList = [new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Oliver', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 6), new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Blue', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 4), new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Ace', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 2), new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Buddy', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 1), new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Archie', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 2), new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Leo', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 3), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Waddles', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Grey', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1.5), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Rocky', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 2), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Daisy', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 2), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Puddle', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1), new _Duck__WEBPACK_IMPORTED_MODULE_1__["default"]('Daffy', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 3)]; // creating and displaying grid layout with animals instances into the html

function displayCards() {
  var containerDOM = document.querySelector('.container');
  var gridDOM = document.querySelector('.grid');
  var htmlStringCard = animalsList.map(function (item, index) {
    var random = Math.random();
    random += index;
    return "\n          <div class=\"grid__item\">\n              <div class=\"grid__item-img\">\n                  <img\n                  src=\"".concat(item.image + random, "\n                  \"/>\n              </div>\n              <div class=\"grid__item-body\">\n                  <h2>").concat(item.name, "</h2>\n                  <p>Age: ").concat(item.age, "</p>\n              </div>\n        </div>\n  ");
  }).join('');
  gridDOM.innerHTML = htmlStringCard;
  containerDOM.appendChild(gridDOM);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCards);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
// eslint-disable-next-line no-unused-vars
// import style from '../style.css';

(0,_card__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUE7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFlBQXpCLEVBQXVDO0FBQUE7O0FBQ3JDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7V0FDRCxpQkFBUTtBQUNOQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZSxLQUFLSixJQUFwQjtBQUNEOzs7Ozs7QUFHSCxpRUFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0lBRU1NOzs7OztBQUNKLGVBQVlMLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxZQUF6QixFQUF1Q0ksR0FBdkMsRUFBNEM7QUFBQTs7QUFBQTs7QUFDMUMsOEJBQU1OLElBQU4sRUFBWUMsS0FBWixFQUFtQkMsWUFBbkI7QUFDQSxVQUFLSSxHQUFMLEdBQVdBLEdBQVg7QUFGMEM7QUFHM0M7OztFQUplUDs7QUFPbEIsaUVBQWVNLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOztJQUVNRTs7Ozs7QUFDSixnQkFBWVAsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFlBQXpCLEVBQXVDSSxHQUF2QyxFQUE0QztBQUFBOztBQUFBOztBQUMxQyw4QkFBTU4sSUFBTixFQUFZQyxLQUFaLEVBQW1CQyxZQUFuQjtBQUNBLFVBQUtJLEdBQUwsR0FBV0EsR0FBWDtBQUYwQztBQUczQzs7O0VBSmdCUDs7QUFPbkIsaUVBQWVRLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtDQUdBOztBQUNBLElBQU1DLFdBQVcsR0FBRyxDQUNsQixJQUFJSCw0Q0FBSixDQUFRLFFBQVIsRUFBa0IsNkRBQWxCLEVBQWlGLENBQWpGLEVBQW9GLENBQXBGLENBRGtCLEVBRWxCLElBQUlBLDRDQUFKLENBQVEsTUFBUixFQUFnQiw2REFBaEIsRUFBK0UsQ0FBL0UsRUFBa0YsQ0FBbEYsQ0FGa0IsRUFHbEIsSUFBSUEsNENBQUosQ0FBUSxLQUFSLEVBQWUsNkRBQWYsRUFBOEUsQ0FBOUUsRUFBaUYsQ0FBakYsQ0FIa0IsRUFJbEIsSUFBSUEsNENBQUosQ0FBUSxPQUFSLEVBQWlCLDZEQUFqQixFQUFnRixDQUFoRixFQUFtRixDQUFuRixDQUprQixFQUtsQixJQUFJQSw0Q0FBSixDQUFRLFFBQVIsRUFBa0IsNkRBQWxCLEVBQWlGLENBQWpGLEVBQW9GLENBQXBGLENBTGtCLEVBTWxCLElBQUlBLDRDQUFKLENBQVEsS0FBUixFQUFlLDZEQUFmLEVBQThFLENBQTlFLEVBQWlGLENBQWpGLENBTmtCLEVBT2xCLElBQUlFLDZDQUFKLENBQVMsU0FBVCxFQUFvQiw2REFBcEIsRUFBbUYsQ0FBbkYsRUFBc0YsQ0FBdEYsQ0FQa0IsRUFRbEIsSUFBSUEsNkNBQUosQ0FBUyxNQUFULEVBQWlCLDZEQUFqQixFQUFnRixDQUFoRixFQUFtRixHQUFuRixDQVJrQixFQVNsQixJQUFJQSw2Q0FBSixDQUFTLE9BQVQsRUFBa0IsNkRBQWxCLEVBQWlGLENBQWpGLEVBQW9GLENBQXBGLENBVGtCLEVBVWxCLElBQUlBLDZDQUFKLENBQVMsT0FBVCxFQUFrQiw2REFBbEIsRUFBaUYsQ0FBakYsRUFBb0YsQ0FBcEYsQ0FWa0IsRUFXbEIsSUFBSUEsNkNBQUosQ0FBUyxRQUFULEVBQW1CLDZEQUFuQixFQUFrRixDQUFsRixFQUFxRixDQUFyRixDQVhrQixFQVlsQixJQUFJQSw2Q0FBSixDQUFTLE9BQVQsRUFBa0IsNkRBQWxCLEVBQWlGLENBQWpGLEVBQW9GLENBQXBGLENBWmtCLENBQXBCLEVBZUE7O0FBQ0EsU0FBU0UsWUFBVCxHQUF3QjtBQUN0QixNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBRUEsTUFBTUUsY0FBYyxHQUFHTixXQUFXLENBQy9CTyxHQURvQixDQUNoQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDcEIsUUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNELE1BQUwsRUFBYjtBQUNBQSxJQUFBQSxNQUFNLElBQUlELEtBQVY7QUFFQSwySkFJbUJELElBQUksQ0FBQ2YsS0FBTCxHQUFhaUIsTUFKaEMsa0lBUWtCRixJQUFJLENBQUNoQixJQVJ2Qiw4Q0FTc0JnQixJQUFJLENBQUNWLEdBVDNCO0FBYUQsR0FsQm9CLEVBbUJwQmMsSUFuQm9CLENBbUJmLEVBbkJlLENBQXZCO0FBcUJBUCxFQUFBQSxPQUFPLENBQUNRLFNBQVIsR0FBb0JQLGNBQXBCO0FBQ0FKLEVBQUFBLFlBQVksQ0FBQ1ksV0FBYixDQUF5QlQsT0FBekI7QUFDRDs7QUFFRCxpRUFBZUosWUFBZjs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQUEsaURBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb3RjYW1wLWhvbWV3b3JrLTIvLi9zcmMvanMvQW5pbWFsLmpzIiwid2VicGFjazovL2Jvb3RjYW1wLWhvbWV3b3JrLTIvLi9zcmMvanMvRG9nLmpzIiwid2VicGFjazovL2Jvb3RjYW1wLWhvbWV3b3JrLTIvLi9zcmMvanMvRHVjay5qcyIsIndlYnBhY2s6Ly9ib290Y2FtcC1ob21ld29yay0yLy4vc3JjL2pzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtaG9tZXdvcmstMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib290Y2FtcC1ob21ld29yay0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib290Y2FtcC1ob21ld29yay0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtaG9tZXdvcmstMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jvb3RjYW1wLWhvbWV3b3JrLTIvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQW5pbWFsIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZSwgbnVtYmVyT2ZMZWdzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5udW1iZXJPZkxlZ3MgPSBudW1iZXJPZkxlZ3M7XHJcbiAgfVxyXG4gIHNwZWFrKCkge1xyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBtYWtlcyBhIG5vaXNlLmApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWFsO1xyXG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsJztcclxuXHJcbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2UsIG51bWJlck9mTGVncywgYWdlKSB7XHJcbiAgICBzdXBlcihuYW1lLCBpbWFnZSwgbnVtYmVyT2ZMZWdzKTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nO1xyXG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsJztcclxuXHJcbmNsYXNzIER1Y2sgZXh0ZW5kcyBBbmltYWwge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlLCBudW1iZXJPZkxlZ3MsIGFnZSkge1xyXG4gICAgc3VwZXIobmFtZSwgaW1hZ2UsIG51bWJlck9mTGVncyk7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER1Y2s7XHJcbiIsImltcG9ydCBEb2cgZnJvbSAnLi9Eb2cnO1xyXG5pbXBvcnQgRHVjayBmcm9tICcuL0R1Y2snO1xyXG5cclxuLy8gY3JlYXRpbmcgaW5zdGFuY2VzIGZyb20gRG9nIGFuZCBEdWNrIGNsYXNzZXNcclxuY29uc3QgYW5pbWFsc0xpc3QgPSBbXHJcbiAgbmV3IERvZygnT2xpdmVyJywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzIxMDkxMzYvNTAweDcwMD9zaWc9JywgNCwgNiksXHJcbiAgbmV3IERvZygnQmx1ZScsICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8yMTA5MTM2LzUwMHg3MDA/c2lnPScsIDQsIDQpLFxyXG4gIG5ldyBEb2coJ0FjZScsICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8yMTA5MTM2LzUwMHg3MDA/c2lnPScsIDQsIDIpLFxyXG4gIG5ldyBEb2coJ0J1ZGR5JywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzIxMDkxMzYvNTAweDcwMD9zaWc9JywgNCwgMSksXHJcbiAgbmV3IERvZygnQXJjaGllJywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzIxMDkxMzYvNTAweDcwMD9zaWc9JywgNCwgMiksXHJcbiAgbmV3IERvZygnTGVvJywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzIxMDkxMzYvNTAweDcwMD9zaWc9JywgNCwgMyksXHJcbiAgbmV3IER1Y2soJ1dhZGRsZXMnLCAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vNDUwMjIzOS81MDB4NzAwP3NpZz0nLCAyLCAxKSxcclxuICBuZXcgRHVjaygnR3JleScsICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi80NTAyMjM5LzUwMHg3MDA/c2lnPScsIDIsIDEuNSksXHJcbiAgbmV3IER1Y2soJ1JvY2t5JywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzQ1MDIyMzkvNTAweDcwMD9zaWc9JywgMiwgMiksXHJcbiAgbmV3IER1Y2soJ0RhaXN5JywgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzQ1MDIyMzkvNTAweDcwMD9zaWc9JywgMiwgMiksXHJcbiAgbmV3IER1Y2soJ1B1ZGRsZScsICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi80NTAyMjM5LzUwMHg3MDA/c2lnPScsIDIsIDEpLFxyXG4gIG5ldyBEdWNrKCdEYWZmeScsICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi80NTAyMjM5LzUwMHg3MDA/c2lnPScsIDIsIDMpLFxyXG5dO1xyXG5cclxuLy8gY3JlYXRpbmcgYW5kIGRpc3BsYXlpbmcgZ3JpZCBsYXlvdXQgd2l0aCBhbmltYWxzIGluc3RhbmNlcyBpbnRvIHRoZSBodG1sXHJcbmZ1bmN0aW9uIGRpc3BsYXlDYXJkcygpIHtcclxuICBjb25zdCBjb250YWluZXJET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZ3JpZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XHJcblxyXG4gIGNvbnN0IGh0bWxTdHJpbmdDYXJkID0gYW5pbWFsc0xpc3RcclxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICByYW5kb20gKz0gaW5kZXg7XHJcblxyXG4gICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke2l0ZW0uaW1hZ2UgKyByYW5kb219XHJcbiAgICAgICAgICAgICAgICAgIFwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4ke2l0ZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5BZ2U6ICR7aXRlbS5hZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJycpO1xyXG5cclxuICBncmlkRE9NLmlubmVySFRNTCA9IGh0bWxTdHJpbmdDYXJkO1xyXG4gIGNvbnRhaW5lckRPTS5hcHBlbmRDaGlsZChncmlkRE9NKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNhcmRzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4vLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGRpc3BsYXlDYXJkcyBmcm9tICcuL2NhcmQnO1xyXG5cclxuZGlzcGxheUNhcmRzKCk7XHJcbiJdLCJuYW1lcyI6WyJBbmltYWwiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkxlZ3MiLCJjb25zb2xlIiwibG9nIiwiRG9nIiwiYWdlIiwiRHVjayIsImFuaW1hbHNMaXN0IiwiZGlzcGxheUNhcmRzIiwiY29udGFpbmVyRE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ3JpZERPTSIsImh0bWxTdHJpbmdDYXJkIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmFuZG9tIiwiTWF0aCIsImpvaW4iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=