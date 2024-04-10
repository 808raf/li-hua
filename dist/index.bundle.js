/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  border: 0;
  font-size: 18px;
  font-family: monospace;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  background-color: hsla(0, 0%, 100%, 1);
}

#main-2 {
  object-fit: cover;
  object-position: 50% 70%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}

#nav-bar {
  background-color: black;
  padding: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 12vh;
}

#nav-bar button {
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove underline by default */
  position: relative;
}

/* Style for the underline */
button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px; /* Adjust the distance of the underline from the text */
  width: 0%;
  height: 2px; /* Thickness of the underline */
  background-color: white; /* Color of the underline */
  transition: width 0.5s, bottom 0.5s; /* Transition for smooth effect */
}

/* Style for the underline when focused */
button:focus::after {
  width: 100%; /* Expand the underline to full width */
}

.nav-links {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-left: 50px;
}

#logo {
  height: 10vh;
}

#main-3 {
  width: 25vw;
  height: 50vh;
  object-fit: cover;
  object-position: 50% 70%;
  background-repeat: no-repeat;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3vmax;
  padding-bottom: 3vmax;
  padding-right: 4vw;
  padding-left: 4vw;
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 60%;
  background-color: black;
  height: 1px;
  margin: 1vh;
  margin-bottom: 6vh;
}

.story-content {
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  width: 60vw;
  flex-shrink: 0;
  max-height: 50vh;
  justify-content: center;
}

.story-card {
  height: 100%;
  width: 100%;
  min-height: 50vh;
  max-height: 50vh;
  flex-shrink: 0;
  background-color: hsl(33.33333333, 88.23529412%, 90%);
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
}

p {
  overflow-x: auto;
}

p,
a {
  font-size: 15px;
  line-height: calc(1ex / 0.32);
  margin: calc(1ex / 0.32) 0;
}

.centered {
  position: absolute;
  top: 40%;
  left: 54%;
  transform: translate(-50%, -50%);
}

.title {
  font-size: 41px;
  color: hsla(0, 0%, 100%);
  font-weight: 700;
  background-color: hsla(20.93959732, 80.54054054%, 63.7254902%);
  padding-top: 1%;
}

.footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.footer-container {
  display: flex;
}

.footer a {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent (white in this case) */
}

.spacer {
  height: 12vh;
  background-color: blue;
}

.menu-image img {
  max-height: 40vh;
  object-fit: contain;
}

.menu-image {
  object-fit: cover;
}

.menu-card {
  display: flex;
  width: 35vw;
  padding: 17px;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.menu-content {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  justify-content: center;
  width: 100%;
}

.menu-title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-title {
  color: white;
  padding: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: hsla(20.93959732, 80.54054054%, 63.7254902%);
}

h3 {
  font-size: calc(2.2 * 1rem);
  font-weight: 700;
}

.about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  background-color: hsl(33.33333333, 88.23529412%, 90%);
  padding: 10%;
  padding-left: 20%;
  padding-right: 20%;
}

.about-card p {
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  border: 0;\n  font-size: 18px;\n  font-family: monospace;\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n  background-color: hsla(0, 0%, 100%, 1);\n}\n\n#main-2 {\n  object-fit: cover;\n  object-position: 50% 70%;\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 100vw;\n}\n\n#nav-bar {\n  background-color: black;\n  padding: 1vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  height: 12vh;\n}\n\n#nav-bar button {\n  color: white;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-decoration: none; /* Remove underline by default */\n  position: relative;\n}\n\n/* Style for the underline */\nbutton::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -2px; /* Adjust the distance of the underline from the text */\n  width: 0%;\n  height: 2px; /* Thickness of the underline */\n  background-color: white; /* Color of the underline */\n  transition: width 0.5s, bottom 0.5s; /* Transition for smooth effect */\n}\n\n/* Style for the underline when focused */\nbutton:focus::after {\n  width: 100%; /* Expand the underline to full width */\n}\n\n.nav-links {\n  display: flex;\n  justify-content: space-between;\n  gap: 50px;\n  margin-left: 50px;\n}\n\n#logo {\n  height: 10vh;\n}\n\n#main-3 {\n  width: 25vw;\n  height: 50vh;\n  object-fit: cover;\n  object-position: 50% 70%;\n  background-repeat: no-repeat;\n}\n\n.content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 3vmax;\n  padding-bottom: 3vmax;\n  padding-right: 4vw;\n  padding-left: 4vw;\n}\n\nhr {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 60%;\n  background-color: black;\n  height: 1px;\n  margin: 1vh;\n  margin-bottom: 6vh;\n}\n\n.story-content {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  display: flex;\n  width: 60vw;\n  flex-shrink: 0;\n  max-height: 50vh;\n  justify-content: center;\n}\n\n.story-card {\n  height: 100%;\n  width: 100%;\n  min-height: 50vh;\n  max-height: 50vh;\n  flex-shrink: 0;\n  background-color: hsl(33.33333333, 88.23529412%, 90%);\n  padding: 2vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 1vw;\n}\n\np {\n  overflow-x: auto;\n}\n\np,\na {\n  font-size: 15px;\n  line-height: calc(1ex / 0.32);\n  margin: calc(1ex / 0.32) 0;\n}\n\n.centered {\n  position: absolute;\n  top: 40%;\n  left: 54%;\n  transform: translate(-50%, -50%);\n}\n\n.title {\n  font-size: 41px;\n  color: hsla(0, 0%, 100%);\n  font-weight: 700;\n  background-color: hsla(20.93959732, 80.54054054%, 63.7254902%);\n  padding-top: 1%;\n}\n\n.footer {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.footer-container {\n  display: flex;\n}\n\n.footer a {\n  text-decoration: none; /* Remove underline */\n  color: inherit; /* Inherit color from parent (white in this case) */\n}\n\n.spacer {\n  height: 12vh;\n  background-color: blue;\n}\n\n.menu-image img {\n  max-height: 40vh;\n  object-fit: contain;\n}\n\n.menu-image {\n  object-fit: cover;\n}\n\n.menu-card {\n  display: flex;\n  width: 35vw;\n  padding: 17px;\n}\n\n.menu-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10%;\n  justify-content: center;\n  width: 100%;\n}\n\n.menu-title-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-title {\n  color: white;\n  padding: 1%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  background-color: hsla(20.93959732, 80.54054054%, 63.7254902%);\n}\n\nh3 {\n  font-size: calc(2.2 * 1rem);\n  font-weight: 700;\n}\n\n.about-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n  background-color: hsl(33.33333333, 88.23529412%, 90%);\n  padding: 10%;\n  padding-left: 20%;\n  padding-right: 20%;\n}\n\n.about-card p {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearView */ "./src/components/clearView.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacer */ "./src/components/spacer.js");



const about = () => {
  (0,_clearView__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_spacer__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const content = document.querySelector("#content");

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about-card");

  const h4 = document.createElement("h4");
  h4.textContent = "About Us";
  aboutCard.appendChild(h4);

  const par1 = document.createElement("p");
  par1.textContent =
    "Li Hua Tea Shop is a fictional creation, woven from imagination and inspired by the rich tapestry of tea culture. While it may not exist in the physical realm, its essence lies in the stories we share and the appreciation we hold for the art of tea-making. Through Li Hua Tea, we embark on a journey of creativity and exploration, inviting others to join in the celebration of tradition and innovation.";
  aboutCard.appendChild(par1);

  content.appendChild(aboutCard);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/components/addListeners.js":
/*!****************************************!*\
  !*** ./src/components/addListeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/components/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/components/about.js");




const addListeners = () => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const aboutBtn = document.querySelector(".aboutBtn");

  homeBtn.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
  menuBtn.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
  aboutBtn.addEventListener("click", _about__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addListeners);


/***/ }),

/***/ "./src/components/clearView.js":
/*!*************************************!*\
  !*** ./src/components/clearView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearView = () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearView);


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");

  const p = document.createElement("p");
  p.innerHTML = "&copy; 2024 ";
  footerEl.appendChild(p);

  const a = document.createElement("a");
  a.href = "https://github.com/808raf";
  a.textContent = "808raf";
  p.appendChild(a);

  footerContainer.appendChild(footerEl);

  return footerContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assests_main2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/main2.jpg */ "./src/assests/main2.jpg");
/* harmony import */ var _assests_main3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/main3.jpg */ "./src/assests/main3.jpg");
/* harmony import */ var _clearView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearView */ "./src/components/clearView.js");




const home = () => {
  (0,_clearView__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const main = document.querySelector("#content");

  const main2 = document.createElement("div");
  main2.classList.add("main-2");

  const main2img = document.createElement("img");
  main2img.alt = "fresh milk tea";
  main2img.setAttribute("id", "main-2");
  main2img.src = _assests_main2_jpg__WEBPACK_IMPORTED_MODULE_0__;
  main2.appendChild(main2img);

  const div = document.createElement("div");
  div.classList.add("centered");
  main.appendChild(div);

  const h2 = document.createElement("h2");
  h2.classList.add("title");
  h2.textContent = "Li Hua Tea";
  div.appendChild(h2);

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const hr = document.createElement("hr");
  contentWrapper.appendChild(hr);

  const storyContent = document.createElement("div");
  storyContent.classList.add("story-content");
  contentWrapper.appendChild(storyContent);

  const main3img = document.createElement("img");
  main3img.alt = "pouring hot tea into a cup";
  main3img.setAttribute("id", "main-3");
  main3img.src = _assests_main3_jpg__WEBPACK_IMPORTED_MODULE_1__;
  storyContent.appendChild(main3img);

  const storyCard = document.createElement("div");
  storyCard.classList.add("story-card");
  storyContent.appendChild(storyCard);

  const h4 = document.createElement("h4");
  h4.textContent = "Li Hua's Story";
  storyCard.appendChild(h4);

  const par1 = document.createElement("p");
  par1.textContent =
    "In the tranquil depths of a mountain village in rural China, Li Hua cultivated a profound connection with the art of tea-making, guided by the wisdom passed down through generations. Her family's legacy of tending to the sprawling tea fields infused her craft with a deep reverence for nature and tradition. Inspired by the delicate wildflowers she discovered amidst the foliage, Li Hua embarked on a journey of experimentation, infusing her brews with fragrant floral notes that captivated the senses and stirred the soul.";
  storyCard.appendChild(par1);

  const par2 = document.createElement("p");
  par2.textContent =
    "Word of Li Hua's extraordinary teas soon spread far and wide, drawing travelers and enthusiasts from distant lands to experience the essence of her mountain-grown leaves. Each cup of Li Hua Tea became a testament to the timeless traditions and artisanal craftsmanship that defined her legacy, inviting drinkers to savor not just the taste of tea, but the spirit of a culture steeped in reverence for nature and the art of tea-making.";
  storyCard.appendChild(par2);

  main.append(main2, div, contentWrapper);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearView */ "./src/components/clearView.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacer */ "./src/components/spacer.js");
/* harmony import */ var _assests_tea_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/tea.jpg */ "./src/assests/tea.jpg");
/* harmony import */ var _assests_traditional_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/traditional.jpg */ "./src/assests/traditional.jpg");
/* harmony import */ var _assests_salty_cream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/salty-cream.jpg */ "./src/assests/salty-cream.jpg");
/* harmony import */ var _assests_brown_sugar_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/brown-sugar.jpg */ "./src/assests/brown-sugar.jpg");







const menu = () => {
  (0,_clearView__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_spacer__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const content = document.querySelector("#content");

  const menuTitleWrapper = document.createElement("div");
  menuTitleWrapper.classList.add("menu-title-wrapper");

  const h2 = document.createElement("h2");
  h2.classList.add("menu-title");
  h2.textContent = "Full Menu";

  menuTitleWrapper.append(h2);

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  // Card 1
  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");

  const menuImage1 = document.createElement("div");
  menuImage1.classList.add("menu-image");

  const menuImage1Asset = document.createElement("img");
  menuImage1Asset.src = _assests_tea_jpg__WEBPACK_IMPORTED_MODULE_2__;

  const menuContent1 = document.createElement("div");
  menuContent1.classList.add("menu-content");

  const h31 = document.createElement("h3");
  h31.textContent = "Tea";

  const p1a = document.createElement("p");
  p1a.textContent = "Li Hua Black Tea";

  const p2a = document.createElement("p");
  p2a.textContent = "Li Hua Mountain Tea";

  const p3a = document.createElement("p");
  p3a.textContent = "Dong Ding Oolong Tea";

  const p4a = document.createElement("p");
  p4a.textContent = "Earl Grey Black Tea";

  // Card 2
  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");

  const menuImage2 = document.createElement("div");
  menuImage2.classList.add("menu-image");

  const menuImage2Asset = document.createElement("img");
  menuImage2Asset.src = _assests_brown_sugar_jpg__WEBPACK_IMPORTED_MODULE_5__;

  const menuContent2 = document.createElement("div");
  menuContent2.classList.add("menu-content");

  const h32 = document.createElement("h3");
  h32.textContent = "Brown Sugar";

  const p1b = document.createElement("p");
  p1b.textContent = "Brown Sugar Pearl Latte";

  const p2b = document.createElement("p");
  p2b.textContent = "Brown Sugar Pearl Black Tea Latte";

  const p3b = document.createElement("p");
  p3b.textContent = "Brown Sugar Pearl Oolong Tea Latte";

  const p4b = document.createElement("p");
  p4b.textContent = "Brown Sugar Pearl Cocoa Latte";

  // Card 3
  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");

  const menuImage3 = document.createElement("div");
  menuImage3.classList.add("menu-image");

  const menuImage3Asset = document.createElement("img");
  menuImage3Asset.src = _assests_salty_cream_jpg__WEBPACK_IMPORTED_MODULE_4__;

  const menuContent3 = document.createElement("div");
  menuContent3.classList.add("menu-content");

  const h33 = document.createElement("h3");
  h33.textContent = "Salty Cream";

  const p1c = document.createElement("p");
  p1c.textContent = "Salty Cream Black Tea";

  const p2c = document.createElement("p");
  p2c.textContent = "Salty Cream Green Tea";

  const p3c = document.createElement("p");
  p3c.textContent = "Salty Cream Oolong Tea";

  const p4c = document.createElement("p");
  p4c.textContent = "Salty Cream Mountain Tea";

  // Card 4
  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("menu-card");

  const menuImage4 = document.createElement("div");
  menuImage4.classList.add("menu-image");

  const menuImage4Asset = document.createElement("img");
  menuImage4Asset.src = _assests_traditional_jpg__WEBPACK_IMPORTED_MODULE_3__;

  const menuContent4 = document.createElement("div");
  menuContent4.classList.add("menu-content");

  const h34 = document.createElement("h3");
  h34.textContent = "Traditional Taste";

  const p1d = document.createElement("p");
  p1d.textContent = "Grass Tea";

  const p2d = document.createElement("p");
  p2d.textContent = "Winter Melon Tea";

  const p3d = document.createElement("p");
  p3d.textContent = "Taro Sago Latte";

  const p4d = document.createElement("p");
  p4d.textContent = "Red Bean Sago Latte";

  menuWrapper.append(menuCard1, menuCard2, menuCard3, menuCard4);
  menuCard1.append(menuImage1, menuContent1);
  menuCard2.append(menuImage2, menuContent2);
  menuCard3.append(menuImage3, menuContent3);
  menuCard4.append(menuImage4, menuContent4);
  menuImage1.append(menuImage1Asset);
  menuImage2.append(menuImage2Asset);
  menuImage3.append(menuImage3Asset);
  menuImage4.append(menuImage4Asset);
  menuContent1.append(h31, p1a, p2a, p3a, p4a);
  menuContent2.append(h32, p1b, p2b, p3b, p4b);
  menuContent3.append(h33, p1c, p2c, p3c, p4c);
  menuContent4.append(h34, p1d, p2d, p3d, p4d);

  content.append(menuTitleWrapper, menuWrapper);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assests_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/logo.png */ "./src/assests/logo.png");


const navBar = () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.setAttribute("id", "nav-bar");

  const imgDiv = document.createElement("div");

  const img = document.createElement("img");
  img.src = _assests_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = "Li Hua Logo";
  img.setAttribute("id", "logo");

  const navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");

  const home = document.createElement("button");
  home.textContent = "Home";
  home.classList.add("homeBtn");

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.classList.add("menuBtn");

  const contact = document.createElement("button");
  contact.textContent = "About";
  contact.classList.add("aboutBtn");

  header.appendChild(nav);
  nav.append(imgDiv, navLinks);
  imgDiv.appendChild(img);
  navLinks.append(home, menu, contact);

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);


/***/ }),

/***/ "./src/components/spacer.js":
/*!**********************************!*\
  !*** ./src/components/spacer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const spacer = () => {
  const main = document.querySelector("#content");

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  main.appendChild(spacer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spacer);


/***/ }),

/***/ "./src/assests/brown-sugar.jpg":
/*!*************************************!*\
  !*** ./src/assests/brown-sugar.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3befb3a0e5b143054752.jpg";

/***/ }),

/***/ "./src/assests/logo.png":
/*!******************************!*\
  !*** ./src/assests/logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc1b8c7b1aa2a5c8ea90.png";

/***/ }),

/***/ "./src/assests/main2.jpg":
/*!*******************************!*\
  !*** ./src/assests/main2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c54399115f706c7bb42.jpg";

/***/ }),

/***/ "./src/assests/main3.jpg":
/*!*******************************!*\
  !*** ./src/assests/main3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ce99a57469c6a40f08e.jpg";

/***/ }),

/***/ "./src/assests/salty-cream.jpg":
/*!*************************************!*\
  !*** ./src/assests/salty-cream.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0ed2f259508bdcc5276.jpg";

/***/ }),

/***/ "./src/assests/tea.jpg":
/*!*****************************!*\
  !*** ./src/assests/tea.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8866fb21ed24b32c30eb.jpg";

/***/ }),

/***/ "./src/assests/traditional.jpg":
/*!*************************************!*\
  !*** ./src/assests/traditional.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abf75d3bdc9f04ff87b2.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.js */ "./src/components/home.js");
/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar.js */ "./src/components/navbar.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.js */ "./src/components/footer.js");
/* harmony import */ var _components_addListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addListeners.js */ "./src/components/addListeners.js");






const body = document.querySelector("body");
body.prepend((0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
body.appendChild((0,_components_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_components_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_addListeners_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQjtBQUNJO0FBQ0E7QUFDWTs7QUFFeEQ7QUFDQSxhQUFhLGlFQUFNO0FBQ25CLGlCQUFpQixpRUFBTTs7QUFFdkIsK0RBQUk7QUFDSix1RUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpLWh1YS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpLWh1YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpLWh1YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9zcmMvY29tcG9uZW50cy9hZGRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vc3JjL2NvbXBvbmVudHMvY2xlYXJWaWV3LmpzIiwid2VicGFjazovL2xpLWh1YS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9saS1odWEvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL2xpLWh1YS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2xpLWh1YS8uL3NyYy9jb21wb25lbnRzL3NwYWNlci5qcyIsIndlYnBhY2s6Ly9saS1odWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGktaHVhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpLWh1YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGktaHVhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGktaHVhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGktaHVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGktaHVhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpLWh1YS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGktaHVhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XG59XG5cbiNtYWluLTIge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNzAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbiNuYXYtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAxMnZoO1xufVxuXG4jbmF2LWJhciBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIHVuZGVybGluZSAqL1xuYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4OyAvKiBBZGp1c3QgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgdGV4dCAqL1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMnB4OyAvKiBUaGlja25lc3Mgb2YgdGhlIHVuZGVybGluZSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogQ29sb3Igb2YgdGhlIHVuZGVybGluZSAqL1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCBib3R0b20gMC41czsgLyogVHJhbnNpdGlvbiBmb3Igc21vb3RoIGVmZmVjdCAqL1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIHVuZGVybGluZSB3aGVuIGZvY3VzZWQgKi9cbmJ1dHRvbjpmb2N1czo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTsgLyogRXhwYW5kIHRoZSB1bmRlcmxpbmUgdG8gZnVsbCB3aWR0aCAqL1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuI21haW4tMyB7XG4gIHdpZHRoOiAyNXZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSA3MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDN2bWF4O1xuICBwYWRkaW5nLWJvdHRvbTogM3ZtYXg7XG4gIHBhZGRpbmctcmlnaHQ6IDR2dztcbiAgcGFkZGluZy1sZWZ0OiA0dnc7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAxdmg7XG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcbn1cblxuLnN0b3J5LWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjB2dztcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RvcnktY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzMuMzMzMzMzMzMsIDg4LjIzNTI5NDEyJSwgOTAlKTtcbiAgcGFkZGluZzogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDF2dztcbn1cblxucCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnAsXG5hIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogY2FsYygxZXggLyAwLjMyKTtcbiAgbWFyZ2luOiBjYWxjKDFleCAvIDAuMzIpIDA7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDU0JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwLjkzOTU5NzMyLCA4MC41NDA1NDA1NCUsIDYzLjcyNTQ5MDIlKTtcbiAgcGFkZGluZy10b3A6IDElO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiBJbmhlcml0IGNvbG9yIGZyb20gcGFyZW50ICh3aGl0ZSBpbiB0aGlzIGNhc2UpICovXG59XG5cbi5zcGFjZXIge1xuICBoZWlnaHQ6IDEydmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5tZW51LWltYWdlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5tZW51LWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tZW51LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzV2dztcbiAgcGFkZGluZzogMTdweDtcbn1cblxuLm1lbnUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAuOTM5NTk3MzIsIDgwLjU0MDU0MDU0JSwgNjMuNzI1NDkwMiUpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogY2FsYygyLjIgKiAxcmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFib3V0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzMy4zMzMzMzMzMywgODguMjM1Mjk0MTIlLCA5MCUpO1xuICBwYWRkaW5nOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XG59XG5cbi5hYm91dC1jYXJkIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCLEVBQUUsZ0NBQWdDO0VBQ3ZELGtCQUFrQjtBQUNwQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZLEVBQUUsdURBQXVEO0VBQ3JFLFNBQVM7RUFDVCxXQUFXLEVBQUUsK0JBQStCO0VBQzVDLHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCxtQ0FBbUMsRUFBRSxpQ0FBaUM7QUFDeEU7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsV0FBVyxFQUFFLHVDQUF1QztBQUN0RDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscURBQXFEO0VBQ3JELFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsOERBQThEO0VBQzlELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUIsRUFBRSxxQkFBcUI7RUFDNUMsY0FBYyxFQUFFLG1EQUFtRDtBQUNyRTs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDhEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscURBQXFEO0VBQ3JELFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XFxufVxcblxcbiNtYWluLTIge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IDUwJSA3MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI25hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbn1cXG5cXG4jbmF2LWJhciBidXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIFJlbW92ZSB1bmRlcmxpbmUgYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGhlIHVuZGVybGluZSAqL1xcbmJ1dHRvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMnB4OyAvKiBBZGp1c3QgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgdGV4dCAqL1xcbiAgd2lkdGg6IDAlO1xcbiAgaGVpZ2h0OiAycHg7IC8qIFRoaWNrbmVzcyBvZiB0aGUgdW5kZXJsaW5lICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogQ29sb3Igb2YgdGhlIHVuZGVybGluZSAqL1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cywgYm90dG9tIDAuNXM7IC8qIFRyYW5zaXRpb24gZm9yIHNtb290aCBlZmZlY3QgKi9cXG59XFxuXFxuLyogU3R5bGUgZm9yIHRoZSB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkICovXFxuYnV0dG9uOmZvY3VzOjphZnRlciB7XFxuICB3aWR0aDogMTAwJTsgLyogRXhwYW5kIHRoZSB1bmRlcmxpbmUgdG8gZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbWFpbi0zIHtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IDUwJSA3MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDN2bWF4O1xcbiAgcGFkZGluZy1ib3R0b206IDN2bWF4O1xcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xcbiAgcGFkZGluZy1sZWZ0OiA0dnc7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogMXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xcbn1cXG5cXG4uc3RvcnktY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNjB2dztcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3RvcnktY2FyZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzMuMzMzMzMzMzMsIDg4LjIzNTI5NDEyJSwgOTAlKTtcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxucCB7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5wLFxcbmEge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMWV4IC8gMC4zMik7XFxuICBtYXJnaW46IGNhbGMoMWV4IC8gMC4zMikgMDtcXG59XFxuXFxuLmNlbnRlcmVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNTQlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDQxcHg7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMC45Mzk1OTczMiwgODAuNTQwNTQwNTQlLCA2My43MjU0OTAyJSk7XFxuICBwYWRkaW5nLXRvcDogMSU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIFJlbW92ZSB1bmRlcmxpbmUgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiBJbmhlcml0IGNvbG9yIGZyb20gcGFyZW50ICh3aGl0ZSBpbiB0aGlzIGNhc2UpICovXFxufVxcblxcbi5zcGFjZXIge1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1lbnUtaW1hZ2UgaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQwdmg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDM1dnc7XFxuICBwYWRkaW5nOiAxN3B4O1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUtdGl0bGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxJTtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwLjkzOTU5NzMyLCA4MC41NDA1NDA1NCUsIDYzLjcyNTQ5MDIlKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiBjYWxjKDIuMiAqIDFyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFib3V0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDMzLjMzMzMzMzMzLCA4OC4yMzUyOTQxMiUsIDkwJSk7XFxuICBwYWRkaW5nOiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcXG59XFxuXFxuLmFib3V0LWNhcmQgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsZWFyVmlldyBmcm9tIFwiLi9jbGVhclZpZXdcIjtcbmltcG9ydCBzcGFjZXIgZnJvbSBcIi4vc3BhY2VyXCI7XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICBjbGVhclZpZXcoKTtcbiAgc3BhY2VyKCk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dENhcmQuY2xhc3NMaXN0LmFkZChcImFib3V0LWNhcmRcIik7XG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGg0LnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gIGNvbnN0IHBhcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyMS50ZXh0Q29udGVudCA9XG4gICAgXCJMaSBIdWEgVGVhIFNob3AgaXMgYSBmaWN0aW9uYWwgY3JlYXRpb24sIHdvdmVuIGZyb20gaW1hZ2luYXRpb24gYW5kIGluc3BpcmVkIGJ5IHRoZSByaWNoIHRhcGVzdHJ5IG9mIHRlYSBjdWx0dXJlLiBXaGlsZSBpdCBtYXkgbm90IGV4aXN0IGluIHRoZSBwaHlzaWNhbCByZWFsbSwgaXRzIGVzc2VuY2UgbGllcyBpbiB0aGUgc3RvcmllcyB3ZSBzaGFyZSBhbmQgdGhlIGFwcHJlY2lhdGlvbiB3ZSBob2xkIGZvciB0aGUgYXJ0IG9mIHRlYS1tYWtpbmcuIFRocm91Z2ggTGkgSHVhIFRlYSwgd2UgZW1iYXJrIG9uIGEgam91cm5leSBvZiBjcmVhdGl2aXR5IGFuZCBleHBsb3JhdGlvbiwgaW52aXRpbmcgb3RoZXJzIHRvIGpvaW4gaW4gdGhlIGNlbGVicmF0aW9uIG9mIHRyYWRpdGlvbiBhbmQgaW5ub3ZhdGlvbi5cIjtcbiAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKHBhcjEpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDYXJkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZUJ0blwiKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0QnRuXCIpO1xuXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWUpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51KTtcbiAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFib3V0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpc3RlbmVycztcbiIsImNvbnN0IGNsZWFyVmlldyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyVmlldztcbiIsImNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyRWwuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuaW5uZXJIVE1MID0gXCImY29weTsgMjAyNCBcIjtcbiAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS84MDhyYWZcIjtcbiAgYS50ZXh0Q29udGVudCA9IFwiODA4cmFmXCI7XG4gIHAuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckVsKTtcblxuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xuIiwiaW1wb3J0IG1haW4yaW1hZ2UgZnJvbSBcIi4uL2Fzc2VzdHMvbWFpbjIuanBnXCI7XG5pbXBvcnQgbWFpbjNpbWFnZSBmcm9tIFwiLi4vYXNzZXN0cy9tYWluMy5qcGdcIjtcbmltcG9ydCBjbGVhclZpZXcgZnJvbSBcIi4vY2xlYXJWaWV3XCI7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNsZWFyVmlldygpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbWFpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluMi5jbGFzc0xpc3QuYWRkKFwibWFpbi0yXCIpO1xuXG4gIGNvbnN0IG1haW4yaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFpbjJpbWcuYWx0ID0gXCJmcmVzaCBtaWxrIHRlYVwiO1xuICBtYWluMmltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tMlwiKTtcbiAgbWFpbjJpbWcuc3JjID0gbWFpbjJpbWFnZTtcbiAgbWFpbjIuYXBwZW5kQ2hpbGQobWFpbjJpbWcpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWRcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiTGkgSHVhIFRlYVwiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtd3JhcHBlclwiKTtcblxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaHIpO1xuXG4gIGNvbnN0IHN0b3J5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0b3J5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwic3RvcnktY29udGVudFwiKTtcbiAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RvcnlDb250ZW50KTtcblxuICBjb25zdCBtYWluM2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG1haW4zaW1nLmFsdCA9IFwicG91cmluZyBob3QgdGVhIGludG8gYSBjdXBcIjtcbiAgbWFpbjNpbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLTNcIik7XG4gIG1haW4zaW1nLnNyYyA9IG1haW4zaW1hZ2U7XG4gIHN0b3J5Q29udGVudC5hcHBlbmRDaGlsZChtYWluM2ltZyk7XG5cbiAgY29uc3Qgc3RvcnlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RvcnlDYXJkLmNsYXNzTGlzdC5hZGQoXCJzdG9yeS1jYXJkXCIpO1xuICBzdG9yeUNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RvcnlDYXJkKTtcblxuICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgaDQudGV4dENvbnRlbnQgPSBcIkxpIEh1YSdzIFN0b3J5XCI7XG4gIHN0b3J5Q2FyZC5hcHBlbmRDaGlsZChoNCk7XG5cbiAgY29uc3QgcGFyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXIxLnRleHRDb250ZW50ID1cbiAgICBcIkluIHRoZSB0cmFucXVpbCBkZXB0aHMgb2YgYSBtb3VudGFpbiB2aWxsYWdlIGluIHJ1cmFsIENoaW5hLCBMaSBIdWEgY3VsdGl2YXRlZCBhIHByb2ZvdW5kIGNvbm5lY3Rpb24gd2l0aCB0aGUgYXJ0IG9mIHRlYS1tYWtpbmcsIGd1aWRlZCBieSB0aGUgd2lzZG9tIHBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMuIEhlciBmYW1pbHkncyBsZWdhY3kgb2YgdGVuZGluZyB0byB0aGUgc3ByYXdsaW5nIHRlYSBmaWVsZHMgaW5mdXNlZCBoZXIgY3JhZnQgd2l0aCBhIGRlZXAgcmV2ZXJlbmNlIGZvciBuYXR1cmUgYW5kIHRyYWRpdGlvbi4gSW5zcGlyZWQgYnkgdGhlIGRlbGljYXRlIHdpbGRmbG93ZXJzIHNoZSBkaXNjb3ZlcmVkIGFtaWRzdCB0aGUgZm9saWFnZSwgTGkgSHVhIGVtYmFya2VkIG9uIGEgam91cm5leSBvZiBleHBlcmltZW50YXRpb24sIGluZnVzaW5nIGhlciBicmV3cyB3aXRoIGZyYWdyYW50IGZsb3JhbCBub3RlcyB0aGF0IGNhcHRpdmF0ZWQgdGhlIHNlbnNlcyBhbmQgc3RpcnJlZCB0aGUgc291bC5cIjtcbiAgc3RvcnlDYXJkLmFwcGVuZENoaWxkKHBhcjEpO1xuXG4gIGNvbnN0IHBhcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyMi50ZXh0Q29udGVudCA9XG4gICAgXCJXb3JkIG9mIExpIEh1YSdzIGV4dHJhb3JkaW5hcnkgdGVhcyBzb29uIHNwcmVhZCBmYXIgYW5kIHdpZGUsIGRyYXdpbmcgdHJhdmVsZXJzIGFuZCBlbnRodXNpYXN0cyBmcm9tIGRpc3RhbnQgbGFuZHMgdG8gZXhwZXJpZW5jZSB0aGUgZXNzZW5jZSBvZiBoZXIgbW91bnRhaW4tZ3Jvd24gbGVhdmVzLiBFYWNoIGN1cCBvZiBMaSBIdWEgVGVhIGJlY2FtZSBhIHRlc3RhbWVudCB0byB0aGUgdGltZWxlc3MgdHJhZGl0aW9ucyBhbmQgYXJ0aXNhbmFsIGNyYWZ0c21hbnNoaXAgdGhhdCBkZWZpbmVkIGhlciBsZWdhY3ksIGludml0aW5nIGRyaW5rZXJzIHRvIHNhdm9yIG5vdCBqdXN0IHRoZSB0YXN0ZSBvZiB0ZWEsIGJ1dCB0aGUgc3Bpcml0IG9mIGEgY3VsdHVyZSBzdGVlcGVkIGluIHJldmVyZW5jZSBmb3IgbmF0dXJlIGFuZCB0aGUgYXJ0IG9mIHRlYS1tYWtpbmcuXCI7XG4gIHN0b3J5Q2FyZC5hcHBlbmRDaGlsZChwYXIyKTtcblxuICBtYWluLmFwcGVuZChtYWluMiwgZGl2LCBjb250ZW50V3JhcHBlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiaW1wb3J0IGNsZWFyVmlldyBmcm9tIFwiLi9jbGVhclZpZXdcIjtcbmltcG9ydCBzcGFjZXIgZnJvbSBcIi4vc3BhY2VyXCI7XG5pbXBvcnQgdGVhIGZyb20gXCIuLi9hc3Nlc3RzL3RlYS5qcGdcIjtcbmltcG9ydCB0cmFkaXRpb25hbCBmcm9tIFwiLi4vYXNzZXN0cy90cmFkaXRpb25hbC5qcGdcIjtcbmltcG9ydCBzYWx0eUNyZWFtIGZyb20gXCIuLi9hc3Nlc3RzL3NhbHR5LWNyZWFtLmpwZ1wiO1xuaW1wb3J0IGJyb3duU3VnYXIgZnJvbSBcIi4uL2Fzc2VzdHMvYnJvd24tc3VnYXIuanBnXCI7XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNsZWFyVmlldygpO1xuICBzcGFjZXIoKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IG1lbnVUaXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51VGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiRnVsbCBNZW51XCI7XG5cbiAgbWVudVRpdGxlV3JhcHBlci5hcHBlbmQoaDIpO1xuXG4gIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtd3JhcHBlclwiKTtcblxuICAvLyBDYXJkIDFcbiAgY29uc3QgbWVudUNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNhcmQxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG5cbiAgY29uc3QgbWVudUltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJbWFnZTEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG5cbiAgY29uc3QgbWVudUltYWdlMUFzc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWVudUltYWdlMUFzc2V0LnNyYyA9IHRlYTtcblxuICBjb25zdCBtZW51Q29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGVudDEuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcblxuICBjb25zdCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzMS50ZXh0Q29udGVudCA9IFwiVGVhXCI7XG5cbiAgY29uc3QgcDFhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxYS50ZXh0Q29udGVudCA9IFwiTGkgSHVhIEJsYWNrIFRlYVwiO1xuXG4gIGNvbnN0IHAyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMmEudGV4dENvbnRlbnQgPSBcIkxpIEh1YSBNb3VudGFpbiBUZWFcIjtcblxuICBjb25zdCBwM2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDNhLnRleHRDb250ZW50ID0gXCJEb25nIERpbmcgT29sb25nIFRlYVwiO1xuXG4gIGNvbnN0IHA0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwNGEudGV4dENvbnRlbnQgPSBcIkVhcmwgR3JleSBCbGFjayBUZWFcIjtcblxuICAvLyBDYXJkIDJcbiAgY29uc3QgbWVudUNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNhcmQyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG5cbiAgY29uc3QgbWVudUltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJbWFnZTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG5cbiAgY29uc3QgbWVudUltYWdlMkFzc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWVudUltYWdlMkFzc2V0LnNyYyA9IGJyb3duU3VnYXI7XG5cbiAgY29uc3QgbWVudUNvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnQyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgaDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMzIudGV4dENvbnRlbnQgPSBcIkJyb3duIFN1Z2FyXCI7XG5cbiAgY29uc3QgcDFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxYi50ZXh0Q29udGVudCA9IFwiQnJvd24gU3VnYXIgUGVhcmwgTGF0dGVcIjtcblxuICBjb25zdCBwMmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDJiLnRleHRDb250ZW50ID0gXCJCcm93biBTdWdhciBQZWFybCBCbGFjayBUZWEgTGF0dGVcIjtcblxuICBjb25zdCBwM2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDNiLnRleHRDb250ZW50ID0gXCJCcm93biBTdWdhciBQZWFybCBPb2xvbmcgVGVhIExhdHRlXCI7XG5cbiAgY29uc3QgcDRiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHA0Yi50ZXh0Q29udGVudCA9IFwiQnJvd24gU3VnYXIgUGVhcmwgQ29jb2EgTGF0dGVcIjtcblxuICAvLyBDYXJkIDNcbiAgY29uc3QgbWVudUNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNhcmQzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG5cbiAgY29uc3QgbWVudUltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJbWFnZTMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG5cbiAgY29uc3QgbWVudUltYWdlM0Fzc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWVudUltYWdlM0Fzc2V0LnNyYyA9IHNhbHR5Q3JlYW07XG5cbiAgY29uc3QgbWVudUNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnQzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgaDMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMzMudGV4dENvbnRlbnQgPSBcIlNhbHR5IENyZWFtXCI7XG5cbiAgY29uc3QgcDFjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxYy50ZXh0Q29udGVudCA9IFwiU2FsdHkgQ3JlYW0gQmxhY2sgVGVhXCI7XG5cbiAgY29uc3QgcDJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyYy50ZXh0Q29udGVudCA9IFwiU2FsdHkgQ3JlYW0gR3JlZW4gVGVhXCI7XG5cbiAgY29uc3QgcDNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAzYy50ZXh0Q29udGVudCA9IFwiU2FsdHkgQ3JlYW0gT29sb25nIFRlYVwiO1xuXG4gIGNvbnN0IHA0YyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwNGMudGV4dENvbnRlbnQgPSBcIlNhbHR5IENyZWFtIE1vdW50YWluIFRlYVwiO1xuXG4gIC8vIENhcmQgNFxuICBjb25zdCBtZW51Q2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q2FyZDQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcblxuICBjb25zdCBtZW51SW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUltYWdlNC5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcblxuICBjb25zdCBtZW51SW1hZ2U0QXNzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtZW51SW1hZ2U0QXNzZXQuc3JjID0gdHJhZGl0aW9uYWw7XG5cbiAgY29uc3QgbWVudUNvbnRlbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnQ0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgaDM0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMzQudGV4dENvbnRlbnQgPSBcIlRyYWRpdGlvbmFsIFRhc3RlXCI7XG5cbiAgY29uc3QgcDFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxZC50ZXh0Q29udGVudCA9IFwiR3Jhc3MgVGVhXCI7XG5cbiAgY29uc3QgcDJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyZC50ZXh0Q29udGVudCA9IFwiV2ludGVyIE1lbG9uIFRlYVwiO1xuXG4gIGNvbnN0IHAzZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwM2QudGV4dENvbnRlbnQgPSBcIlRhcm8gU2FnbyBMYXR0ZVwiO1xuXG4gIGNvbnN0IHA0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwNGQudGV4dENvbnRlbnQgPSBcIlJlZCBCZWFuIFNhZ28gTGF0dGVcIjtcblxuICBtZW51V3JhcHBlci5hcHBlbmQobWVudUNhcmQxLCBtZW51Q2FyZDIsIG1lbnVDYXJkMywgbWVudUNhcmQ0KTtcbiAgbWVudUNhcmQxLmFwcGVuZChtZW51SW1hZ2UxLCBtZW51Q29udGVudDEpO1xuICBtZW51Q2FyZDIuYXBwZW5kKG1lbnVJbWFnZTIsIG1lbnVDb250ZW50Mik7XG4gIG1lbnVDYXJkMy5hcHBlbmQobWVudUltYWdlMywgbWVudUNvbnRlbnQzKTtcbiAgbWVudUNhcmQ0LmFwcGVuZChtZW51SW1hZ2U0LCBtZW51Q29udGVudDQpO1xuICBtZW51SW1hZ2UxLmFwcGVuZChtZW51SW1hZ2UxQXNzZXQpO1xuICBtZW51SW1hZ2UyLmFwcGVuZChtZW51SW1hZ2UyQXNzZXQpO1xuICBtZW51SW1hZ2UzLmFwcGVuZChtZW51SW1hZ2UzQXNzZXQpO1xuICBtZW51SW1hZ2U0LmFwcGVuZChtZW51SW1hZ2U0QXNzZXQpO1xuICBtZW51Q29udGVudDEuYXBwZW5kKGgzMSwgcDFhLCBwMmEsIHAzYSwgcDRhKTtcbiAgbWVudUNvbnRlbnQyLmFwcGVuZChoMzIsIHAxYiwgcDJiLCBwM2IsIHA0Yik7XG4gIG1lbnVDb250ZW50My5hcHBlbmQoaDMzLCBwMWMsIHAyYywgcDNjLCBwNGMpO1xuICBtZW51Q29udGVudDQuYXBwZW5kKGgzNCwgcDFkLCBwMmQsIHAzZCwgcDRkKTtcblxuICBjb250ZW50LmFwcGVuZChtZW51VGl0bGVXcmFwcGVyLCBtZW51V3JhcHBlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2VzdHMvbG9nby5wbmdcIjtcblxuY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1iYXJcIik7XG5cbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gbG9nbztcbiAgaW1nLmFsdCA9IFwiTGkgSHVhIExvZ29cIjtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nb1wiKTtcblxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJhYm91dEJ0blwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZChpbWdEaXYsIG5hdkxpbmtzKTtcbiAgaW1nRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIG5hdkxpbmtzLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyO1xuIiwiY29uc3Qgc3BhY2VyID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNwYWNlci5jbGFzc0xpc3QuYWRkKFwic3BhY2VyXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lLmpzXCI7XG5pbXBvcnQgbmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyLmpzXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmpzXCI7XG5pbXBvcnQgYWRkTGlzdGVuZXJzIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkTGlzdGVuZXJzLmpzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkucHJlcGVuZChuYXZCYXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuaG9tZSgpO1xuYWRkTGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=