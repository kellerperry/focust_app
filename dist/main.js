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
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
}

body {    
    display: grid;
    grid-template-columns: minmax(250px, 425px) min(80%, 43.75rem);
}

a {
    text-decoration: none;
    color: black;
}

button {
    background-color: transparent;
}

/* Sidebar _____________ */


.sidebar {
    background-color: #fafafa;
    height: 100vh;
    min-width: 15vw;
    max-width: 200px;
    padding: 1rem;
}

.logo-section {
    display: flex;
    justify-content: center;
}

.logo-section img {
    max-width: 150px;
}

.project-section {
    margin-top: 5vh;
}

#project-list-container {
    display: grid;
    grid-template-rows: auto;
    gap: 15px;
    justify-content: center;
}

.project-menu-title {
    margin-top: 10px;
}

.project-menu-title:hover {
    cursor: pointer;
}

.current-project {
    display: flex;
    flex-grow: 1;
}

.task-container, .project-section-header {
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
}

.project-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}



/* Main Body __________ */

main {
    width: 100%;
    padding: 5rem 15rem;
    display: flex;
    flex-direction: column;
    align-content: center;
}

.task-list-container {
    display: flex;
    flex-direction: column;
}

.task-section-header {
    font-size: 3rem;
}

/* Task Modal & Form __________________ */

#taskDialog {
    min-width: 550px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 2px lightgray;
    margin-bottom: 70vh;
}

dialog::backdrop {
    opacity: 0;
}


#addTaskForm {
    display: flex;
    flex-direction: column;
}

form {
    padding: 1rem;
}

form > div {
    flex-grow: 1;
}

form > div button {
    border: 1px lightgray solid;
    border-radius: 5px;
    padding: 6px 15px;
    font-weight: 600;
    color: rgb(101, 101, 101);
}

form > div button:hover {
    background-color: rgb(189, 189, 189);
    color: white;
    cursor: pointer;
} 

#confirm-add-btn {
    background-color: rgb(109, 108, 179);
    color: white;
}

#confirm-add-btn:hover {
    background-color: rgb(134, 133, 215);
}

#cancel-add-btn {
    background-color: rgb(228, 228, 228);
}

#cancel-add-btn:hover {
    background-color: rgb(241, 241, 241);
    color: rgb(101, 101, 101);
}

#topFormSection {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#priority-div {
    display: flex;
    gap: 10px;
}

#bottomFormSection {
    display: flex;
    justify-content: end;
    gap: 10px;
}

#task-name-input {
    border: none;
    border-radius: 10px;
    font-size: 1.25rem;
    padding: 10px 0px 10px 10px;
    color: rgb(60, 60, 60);
}

#task-name-input:focus {
    outline: 1px solid lightgray;
}




.feather-plus {
    height: 15px;
    width: 15px;
    padding-right: 2px;
}

.addtask, .addproject{
    border: none;
    display: inline-flex;
    vertical-align: middle;
    padding: 8px;
}

#addTaskMainBtn {
    margin-top: 1rem;
}

.side-btn:hover {
    border: solid 1px gray;
    border-radius: 5px;
    vertical-align: middle;

}

.main-content-btn {
    color: rgb(177, 177, 177);
}

.addproject:hover {
    color: rgb(177, 177, 177);
}

.addtask:hover {
    color: black;
}

.addtask:hover, .addproject:hover {
    cursor: pointer;
    border: none;
}

.task-project { 
    display: flex;
    justify-content: end;
}

.user-options {
    display: flex;
    align-items: start;
    justify-content: center;
}

.user-options > button {
    margin: 15px 10px;
    padding: 5px;
    border-radius: 5px;
    border: none;
}

.user-options > button:hover {
    cursor: pointer;
    color: rgb(177, 177, 177);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8DAA8D;AAClE;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA,0BAA0B;;;AAG1B;IACI,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;;;AAIA,yBAAyB;;AAEzB;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA,yCAAyC;;AAEzC;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;;;;AAKA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;;AAE1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B","sourcesContent":["html, body {\n    height: 100%;\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 16px;\n}\n\nbody {    \n    display: grid;\n    grid-template-columns: minmax(250px, 425px) min(80%, 43.75rem);\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\nbutton {\n    background-color: transparent;\n}\n\n/* Sidebar _____________ */\n\n\n.sidebar {\n    background-color: #fafafa;\n    height: 100vh;\n    min-width: 15vw;\n    max-width: 200px;\n    padding: 1rem;\n}\n\n.logo-section {\n    display: flex;\n    justify-content: center;\n}\n\n.logo-section img {\n    max-width: 150px;\n}\n\n.project-section {\n    margin-top: 5vh;\n}\n\n#project-list-container {\n    display: grid;\n    grid-template-rows: auto;\n    gap: 15px;\n    justify-content: center;\n}\n\n.project-menu-title {\n    margin-top: 10px;\n}\n\n.project-menu-title:hover {\n    cursor: pointer;\n}\n\n.current-project {\n    display: flex;\n    flex-grow: 1;\n}\n\n.task-container, .project-section-header {\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 10px;\n}\n\n.project-section-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n\n\n/* Main Body __________ */\n\nmain {\n    width: 100%;\n    padding: 5rem 15rem;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n}\n\n.task-list-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-section-header {\n    font-size: 3rem;\n}\n\n/* Task Modal & Form __________________ */\n\n#taskDialog {\n    min-width: 550px;\n    border: none;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px 2px lightgray;\n    margin-bottom: 70vh;\n}\n\ndialog::backdrop {\n    opacity: 0;\n}\n\n\n#addTaskForm {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    padding: 1rem;\n}\n\nform > div {\n    flex-grow: 1;\n}\n\nform > div button {\n    border: 1px lightgray solid;\n    border-radius: 5px;\n    padding: 6px 15px;\n    font-weight: 600;\n    color: rgb(101, 101, 101);\n}\n\nform > div button:hover {\n    background-color: rgb(189, 189, 189);\n    color: white;\n    cursor: pointer;\n} \n\n#confirm-add-btn {\n    background-color: rgb(109, 108, 179);\n    color: white;\n}\n\n#confirm-add-btn:hover {\n    background-color: rgb(134, 133, 215);\n}\n\n#cancel-add-btn {\n    background-color: rgb(228, 228, 228);\n}\n\n#cancel-add-btn:hover {\n    background-color: rgb(241, 241, 241);\n    color: rgb(101, 101, 101);\n}\n\n#topFormSection {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#priority-div {\n    display: flex;\n    gap: 10px;\n}\n\n#bottomFormSection {\n    display: flex;\n    justify-content: end;\n    gap: 10px;\n}\n\n#task-name-input {\n    border: none;\n    border-radius: 10px;\n    font-size: 1.25rem;\n    padding: 10px 0px 10px 10px;\n    color: rgb(60, 60, 60);\n}\n\n#task-name-input:focus {\n    outline: 1px solid lightgray;\n}\n\n\n\n\n.feather-plus {\n    height: 15px;\n    width: 15px;\n    padding-right: 2px;\n}\n\n.addtask, .addproject{\n    border: none;\n    display: inline-flex;\n    vertical-align: middle;\n    padding: 8px;\n}\n\n#addTaskMainBtn {\n    margin-top: 1rem;\n}\n\n.side-btn:hover {\n    border: solid 1px gray;\n    border-radius: 5px;\n    vertical-align: middle;\n\n}\n\n.main-content-btn {\n    color: rgb(177, 177, 177);\n}\n\n.addproject:hover {\n    color: rgb(177, 177, 177);\n}\n\n.addtask:hover {\n    color: black;\n}\n\n.addtask:hover, .addproject:hover {\n    cursor: pointer;\n    border: none;\n}\n\n.task-project { \n    display: flex;\n    justify-content: end;\n}\n\n.user-options {\n    display: flex;\n    align-items: start;\n    justify-content: center;\n}\n\n.user-options > button {\n    margin: 15px 10px;\n    padding: 5px;\n    border-radius: 5px;\n    border: none;\n}\n\n.user-options > button:hover {\n    cursor: pointer;\n    color: rgb(177, 177, 177);\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadImages: () => (/* binding */ loadImages)
/* harmony export */ });
/* harmony import */ var _images_focust_logo_copy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/focust-logo-copy.png */ "./src/images/focust-logo-copy.png");


function loadImages() {
    const logo = document.querySelector('#focust-logo');
    logo.src = _images_focust_logo_copy_png__WEBPACK_IMPORTED_MODULE_0__;
}




/***/ }),

/***/ "./src/images/focust-logo-copy.png":
/*!*****************************************!*\
  !*** ./src/images/focust-logo-copy.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "884c5c43b8ffe74d2ea4.png";

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
/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadImages */ "./src/loadImages.js");




class Task {
    constructor(name, priority, dueDate, project) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = project;
    }

    get name () {
        return this._name;
    }

    set name (newName) {
        newName =  false ? 0 : this._name = newName;
    }

    get project () {
        return this._project;
    }

    set project (newProject) {
        newProject === null ? this.project = "Today" : this._project = newProject;
    }

    get Priority () {
        return this.priority
    }

    set Priority (newPriority) {
        newPriority =  false ? 0 : this._priority = newPriority;
    }

    get dueDate () {
        return this._dueDate;
    }

    set dueDate (newDueDate) {
        newDueDate === null ? this._dueDate = new Date() : this._dueDate = newDueDate;
    }

}

class Project {    
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    get name () {
        return this._name;
    }

    set name (newName) {
        newName === null ? alert("Please choose a name for your project.") : this._name = newName;
    }

    getTasks() {
        return this._tasks;
    }

    addTasks(task) {
        this.tasks.push(task);
    } 


    removeTask = (deletedTask) => {
        this.tasks = tasks.filter((task) => task.name !== deletedTask.name)
    }
}



//Default Objects__________________

const projectStorage = [];
const Inbox = new Project('Inbox');
const Today = new Project("Today");

projectStorage.unshift(Inbox, Today);


/* DOM-Related Code 
___________________________________ */



const addTaskMainBtn = document.querySelector('#addTaskMainBtn');

addTaskMainBtn.addEventListener('click', (e) => {
    loadTaskDialog();
    const taskDialog = document.querySelector('#taskDialog');
    const taskForm = document.querySelector("form");
    taskForm.reset();
    taskDialog.showModal();
});



/* Task Modal */


function loadTaskDialog() {
    const taskDialog = document.createElement('dialog');
    const taskForm = document.createElement('form');
    const topSection = document.createElement('div');
    const bottomSection = document.createElement('div');
    const taskNameInput = document.createElement('input');
    const priorityDiv = document.createElement('div');
    const taskPriority = document.createElement('button');
    const taskDueDate = document.createElement('button');
    const taskProjectInput = document.createElement('input');
    const confirmAddBtn = document.createElement('button');
    const cancelAddBtn = document.createElement('button');

    const formElements = [topSection, bottomSection];
    
    taskNameInput.setAttribute ('placeholder',"Task name");
    taskProjectInput.setAttribute('placeholder', 'Project name');

    taskDialog.setAttribute('id',"taskDialog");
    taskForm.setAttribute('id',"addTaskForm");
    topSection.setAttribute('id', "topFormSection");
    bottomSection.setAttribute('id', "bottomFormSection");
    taskNameInput.setAttribute('id', 'task-name-input');
    priorityDiv.setAttribute ('id', 'priority-div');
    taskDueDate.setAttribute('id', 'task-due-date');
    taskProjectInput.setAttribute('id', 'task-project-input');
   
    
    confirmAddBtn.setAttribute ('id', "confirm-add-btn");
    cancelAddBtn.setAttribute ('id', "cancel-add-btn");

    taskPriority.textContent = "Priority";
    taskDueDate.textContent = "Due date";
    taskProjectInput.textContent = "Project";
    confirmAddBtn.textContent = "Add";
    cancelAddBtn.textContent = "Cancel";

    priorityDiv.appendChild(taskPriority);
    priorityDiv.appendChild(taskDueDate);
    topSection.appendChild(taskNameInput);
    topSection.appendChild(priorityDiv);

    confirmAddBtn.addEventListener('click', addTask);
    cancelAddBtn.addEventListener('click', closeDialog);

    bottomSection.appendChild(confirmAddBtn);
    bottomSection.appendChild(cancelAddBtn);
    bottomSection.appendChild(taskProjectInput);
    
    

    formElements.forEach((item) => taskForm.appendChild(item));
    
    taskDialog.appendChild(taskForm);
    taskDialog.addEventListener("click", clickOutsideModal);
    document.body.appendChild(taskDialog);


    return taskDialog;
}


function getTaskInput() {
    const name = document.getElementById('task-name-input').value;
    const priority = document.getElementById('priority-div').value;
    const dueDate = document.getElementById('task-due-date').value;
    let projectName = document.getElementById('task-project-input').value;
    let project;
    if (projectName === undefined) {
        projectName = "Inbox";
        project = projectName;
    } else {
        let newProject = new Project(projectName);
        projectStorage.push(newProject);
        console.log(newProject.name)
        project = newProject.name;
    }


    return new Task(name, priority, dueDate, project);
}

function addTask (event) {
    event.preventDefault();
    const newTask = getTaskInput();
    const project = newTask.project;
    if (newTask.name === ""){
        alert("Please give your task a name.")
    } else {
        project.addTasks(newTask);
        loadTaskList(Inbox);
        loadProjectList(projectStorage);

        const taskDialog = document.querySelector("#taskDialog");
        taskDialog.close();
    }
}

function closeDialog (event) {
    event.preventDefault();
    const taskDialog = document.querySelector("#taskDialog");
    taskDialog.close();
}

function clickOutsideModal(event) {
    if (event.target.tagName === "DIALOG") {
      event.target.close();
    }
}


/* Task Card */

function createTaskCard(task) {
    const taskListContainer = document.getElementById('task-list-container')
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskProject = document.createElement('a');

    taskContainer.setAttribute('class', 'task-container');
    taskTitle.setAttribute('class', 'taskTitle');
    taskProject.setAttribute('class', "task-project");
    
    taskTitle.innerText = task.name;
    taskProject.innerText = task.project;

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskProject);

    taskListContainer.appendChild(taskContainer);
}




/* Task List */


function refreshList(list) {
    list.innerHTML = "";
}

function getCurrentTaskList() {
    const currentTaskHeader = document.getElementById("task-section-header").value;

}

function loadTaskList(project) {
    const taskList = document.getElementById('task-list-container');
    refreshList(taskList);
    const taskProject = project.tasks;
    for (let task in taskProject) {
        console.log(taskProject)
        createTaskCard(taskProject[task]);
    }
}

// function displayTasks() {
//     refreshTaskList();
//     const currentTaskList = 
//     const tasks = 
//     for (let task of ) {
//         createBookCard(book);
//     }
// }


/* Project List */

function createProjectLink(project) {
    const projectListContainer = document.getElementById('project-list-container')
    const projectLink = document.createElement('a');
    projectLink.setAttribute('class', 'project-menu-title');
    projectLink.setAttribute('id', `project-menu-title-${project.name}`);
    projectLink.addEventListener('click', loadTaskList(project));

    projectLink.innerText = project.name;
    
    projectListContainer.appendChild(projectLink);

}

function loadProjectList(projectArr) {
    const projectList = document.getElementById('project-list-container');
    refreshList(projectList);
    console.log(projectList)
    for(let project in projectArr) {
        createProjectLink(projectArr[project]);
    }
}



/* CSS Related Code
____________________________ */

(0,_loadImages__WEBPACK_IMPORTED_MODULE_1__.loadImages)();

  

/* Page Initialization Code 
____________________________ */

loadProjectList(projectStorage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1B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O0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBRSxHQUFHLENBQXNDO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLE1BQUksR0FBRyxDQUFpQjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsYUFBYTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUEsdURBQVU7O0FBRVY7O0FBRUE7QUFDQTs7QUFFQSxnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtMy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvLi9zcmMvbG9hZEltYWdlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QtMy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC0zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYm9keSB7ICAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDQyNXB4KSBtaW4oODAlLCA0My43NXJlbSk7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNpZGViYXIgX19fX19fX19fX19fXyAqL1xuXG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxNXZ3O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmxvZ28tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ28tc2VjdGlvbiBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuI3Byb2plY3QtbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtbWVudS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2plY3QtbWVudS10aXRsZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3VycmVudC1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRhc2stY29udGFpbmVyLCAucHJvamVjdC1zZWN0aW9uLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2plY3Qtc2VjdGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuXG4vKiBNYWluIEJvZHkgX19fX19fX19fXyAqL1xuXG5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cmVtIDE1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrLXNlY3Rpb24taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi8qIFRhc2sgTW9kYWwgJiBGb3JtIF9fX19fX19fX19fX19fX19fXyAqL1xuXG4jdGFza0RpYWxvZyB7XG4gICAgbWluLXdpZHRoOiA1NTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHZoO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbiNhZGRUYXNrRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5mb3JtID4gZGl2IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbmZvcm0gPiBkaXYgYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBsaWdodGdyYXkgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYigxMDEsIDEwMSwgMTAxKTtcbn1cblxuZm9ybSA+IGRpdiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSBcblxuI2NvbmZpcm0tYWRkLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA4LCAxNzkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbmZpcm0tYWRkLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMTMzLCAyMTUpO1xufVxuXG4jY2FuY2VsLWFkZC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcbn1cblxuI2NhbmNlbC1hZGQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICAgY29sb3I6IHJnYigxMDEsIDEwMSwgMTAxKTtcbn1cblxuI3RvcEZvcm1TZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jcHJpb3JpdHktZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuI2JvdHRvbUZvcm1TZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3Rhc2stbmFtZS1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTBweDtcbiAgICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xufVxuXG4jdGFzay1uYW1lLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cblxuXG4uZmVhdGhlci1wbHVzIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4uYWRkdGFzaywgLmFkZHByb2plY3R7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4jYWRkVGFza01haW5CdG4ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5zaWRlLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxufVxuXG4ubWFpbi1jb250ZW50LWJ0biB7XG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbn1cblxuLmFkZHByb2plY3Q6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG59XG5cbi5hZGR0YXNrOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5hZGR0YXNrOmhvdmVyLCAuYWRkcHJvamVjdDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnRhc2stcHJvamVjdCB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi51c2VyLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1vcHRpb25zID4gYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHggMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnVzZXItb3B0aW9ucyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsMEJBQTBCOzs7QUFHMUI7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOzs7O0FBSUEseUJBQXlCOztBQUV6QjtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSx5Q0FBeUM7O0FBRXpDO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7OztBQUtBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHsgICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCA0MjVweCkgbWluKDgwJSwgNDMuNzVyZW0pO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBTaWRlYmFyIF9fX19fX19fX19fX18gKi9cXG5cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTV2dztcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxvZ28tc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1zZWN0aW9uIGltZyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1tZW51LXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbWVudS10aXRsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLCAucHJvamVjdC1zZWN0aW9uLWhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuXFxuLyogTWFpbiBCb2R5IF9fX19fX19fX18gKi9cXG5cXG5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVyZW0gMTVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLyogVGFzayBNb2RhbCAmIEZvcm0gX19fX19fX19fX19fX19fX19fICovXFxuXFxuI3Rhc2tEaWFsb2cge1xcbiAgICBtaW4td2lkdGg6IDU1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggbGlnaHRncmF5O1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MHZoO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuI2FkZFRhc2tGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmZvcm0gPiBkaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggbGlnaHRncmF5IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG5cXG5mb3JtID4gZGl2IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufSBcXG5cXG4jY29uZmlybS1hZGQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA4LCAxNzkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb25maXJtLWFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxMzMsIDIxNSk7XFxufVxcblxcbiNjYW5jZWwtYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXG59XFxuXFxuI2NhbmNlbC1hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiAgICBjb2xvcjogcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG5cXG4jdG9wRm9ybVNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcmlvcml0eS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNib3R0b21Gb3JtU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xcbiAgICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbn1cXG5cXG4jdGFzay1uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuXFxuXFxuXFxuLmZlYXRoZXItcGx1cyB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG59XFxuXFxuLmFkZHRhc2ssIC5hZGRwcm9qZWN0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiNhZGRUYXNrTWFpbkJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5zaWRlLWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXG59XFxuXFxuLm1haW4tY29udGVudC1idG4ge1xcbiAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbn1cXG5cXG4uYWRkcHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxufVxcblxcbi5hZGR0YXNrOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWRkdGFzazpob3ZlciwgLmFkZHByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2stcHJvamVjdCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnVzZXItb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi51c2VyLW9wdGlvbnMgPiBidXR0b24ge1xcbiAgICBtYXJnaW46IDE1cHggMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVzZXItb3B0aW9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2ZvY3VzdC1sb2dvLWNvcHkucG5nJztcblxuZnVuY3Rpb24gbG9hZEltYWdlcygpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzdC1sb2dvJyk7XG4gICAgbG9nby5zcmMgPSBMb2dvO1xufVxuXG5cbmV4cG9ydCB7bG9hZEltYWdlc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkSW1hZ2VzIH0gZnJvbSAnLi9sb2FkSW1hZ2VzJztcblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSAobmV3TmFtZSkge1xuICAgICAgICBuZXdOYW1lID0gXCJcIiA/IGFsZXJ0KFwiUGxlYXNlIGdpdmUgeW91ciB0YXNrIGEgbmFtZS5cIikgOiB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICAgIH1cblxuICAgIHNldCBwcm9qZWN0IChuZXdQcm9qZWN0KSB7XG4gICAgICAgIG5ld1Byb2plY3QgPT09IG51bGwgPyB0aGlzLnByb2plY3QgPSBcIlRvZGF5XCIgOiB0aGlzLl9wcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgUHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgIH1cblxuICAgIHNldCBQcmlvcml0eSAobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgbmV3UHJpb3JpdHkgPSBudWxsID8gdGhpcy5wcmlvcml0eSA9IDAgOiB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUgKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgbmV3RHVlRGF0ZSA9PT0gbnVsbCA/IHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZSgpIDogdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxuXG59XG5cbmNsYXNzIFByb2plY3QgeyAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lIChuZXdOYW1lKSB7XG4gICAgICAgIG5ld05hbWUgPT09IG51bGwgPyBhbGVydChcIlBsZWFzZSBjaG9vc2UgYSBuYW1lIGZvciB5b3VyIHByb2plY3QuXCIpIDogdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrcztcbiAgICB9XG5cbiAgICBhZGRUYXNrcyh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9IFxuXG5cbiAgICByZW1vdmVUYXNrID0gKGRlbGV0ZWRUYXNrKSA9PiB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gZGVsZXRlZFRhc2submFtZSlcbiAgICB9XG59XG5cblxuXG4vL0RlZmF1bHQgT2JqZWN0c19fX19fX19fX19fX19fX19fX1xuXG5jb25zdCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuY29uc3QgSW5ib3ggPSBuZXcgUHJvamVjdCgnSW5ib3gnKTtcbmNvbnN0IFRvZGF5ID0gbmV3IFByb2plY3QoXCJUb2RheVwiKTtcblxucHJvamVjdFN0b3JhZ2UudW5zaGlmdChJbmJveCwgVG9kYXkpO1xuXG5cbi8qIERPTS1SZWxhdGVkIENvZGUgXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG5cblxuY29uc3QgYWRkVGFza01haW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza01haW5CdG4nKTtcblxuYWRkVGFza01haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxvYWRUYXNrRGlhbG9nKCk7XG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGlhbG9nJyk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuXG5cbi8qIFRhc2sgTW9kYWwgKi9cblxuXG5mdW5jdGlvbiBsb2FkVGFza0RpYWxvZygpIHtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29uZmlybUFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gW3RvcFNlY3Rpb24sIGJvdHRvbVNlY3Rpb25dO1xuICAgIFxuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlICgncGxhY2Vob2xkZXInLFwiVGFzayBuYW1lXCIpO1xuICAgIHRhc2tQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IG5hbWUnKTtcblxuICAgIHRhc2tEaWFsb2cuc2V0QXR0cmlidXRlKCdpZCcsXCJ0YXNrRGlhbG9nXCIpO1xuICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLFwiYWRkVGFza0Zvcm1cIik7XG4gICAgdG9wU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJ0b3BGb3JtU2VjdGlvblwiKTtcbiAgICBib3R0b21TZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBcImJvdHRvbUZvcm1TZWN0aW9uXCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW5hbWUtaW5wdXQnKTtcbiAgICBwcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUgKCdpZCcsICdwcmlvcml0eS1kaXYnKTtcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICB0YXNrUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1wcm9qZWN0LWlucHV0Jyk7XG4gICBcbiAgICBcbiAgICBjb25maXJtQWRkQnRuLnNldEF0dHJpYnV0ZSAoJ2lkJywgXCJjb25maXJtLWFkZC1idG5cIik7XG4gICAgY2FuY2VsQWRkQnRuLnNldEF0dHJpYnV0ZSAoJ2lkJywgXCJjYW5jZWwtYWRkLWJ0blwiKTtcblxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGVcIjtcbiAgICB0YXNrUHJvamVjdElucHV0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgY29uZmlybUFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgY2FuY2VsQWRkQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG4gICAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICBjb25maXJtQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG4gICAgY2FuY2VsQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEaWFsb2cpO1xuXG4gICAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChjb25maXJtQWRkQnRuKTtcbiAgICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGNhbmNlbEFkZEJ0bik7XG4gICAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdElucHV0KTtcbiAgICBcbiAgICBcblxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB0YXNrRm9ybS5hcHBlbmRDaGlsZChpdGVtKSk7XG4gICAgXG4gICAgdGFza0RpYWxvZy5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgdGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tPdXRzaWRlTW9kYWwpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza0RpYWxvZyk7XG5cblxuICAgIHJldHVybiB0YXNrRGlhbG9nO1xufVxuXG5cbmZ1bmN0aW9uIGdldFRhc2tJbnB1dCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWRpdicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdDtcbiAgICBpZiAocHJvamVjdE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0TmFtZSA9IFwiSW5ib3hcIjtcbiAgICAgICAgcHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0Lm5hbWUpXG4gICAgICAgIHByb2plY3QgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tJbnB1dCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXdUYXNrLnByb2plY3Q7XG4gICAgaWYgKG5ld1Rhc2submFtZSA9PT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGdpdmUgeW91ciB0YXNrIGEgbmFtZS5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2tzKG5ld1Rhc2spO1xuICAgICAgICBsb2FkVGFza0xpc3QoSW5ib3gpO1xuICAgICAgICBsb2FkUHJvamVjdExpc3QocHJvamVjdFN0b3JhZ2UpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEaWFsb2dcIik7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGlhbG9nIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RpYWxvZ1wiKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrT3V0c2lkZU1vZGFsKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkRJQUxPR1wiKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xvc2UoKTtcbiAgICB9XG59XG5cblxuLyogVGFzayBDYXJkICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spIHtcbiAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QtY29udGFpbmVyJylcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza1RpdGxlJyk7XG4gICAgdGFza1Byb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIFwidGFzay1wcm9qZWN0XCIpO1xuICAgIFxuICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG4gICAgdGFza1Byb2plY3QuaW5uZXJUZXh0ID0gdGFzay5wcm9qZWN0O1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xuXG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG59XG5cblxuXG5cbi8qIFRhc2sgTGlzdCAqL1xuXG5cbmZ1bmN0aW9uIHJlZnJlc2hMaXN0KGxpc3QpIHtcbiAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrTGlzdCgpIHtcbiAgICBjb25zdCBjdXJyZW50VGFza0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zZWN0aW9uLWhlYWRlclwiKS52YWx1ZTtcblxufVxuXG5mdW5jdGlvbiBsb2FkVGFza0xpc3QocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdC1jb250YWluZXInKTtcbiAgICByZWZyZXNoTGlzdCh0YXNrTGlzdCk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBwcm9qZWN0LnRhc2tzO1xuICAgIGZvciAobGV0IHRhc2sgaW4gdGFza1Byb2plY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFza1Byb2plY3QpXG4gICAgICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tQcm9qZWN0W3Rhc2tdKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbi8vICAgICByZWZyZXNoVGFza0xpc3QoKTtcbi8vICAgICBjb25zdCBjdXJyZW50VGFza0xpc3QgPSBcbi8vICAgICBjb25zdCB0YXNrcyA9IFxuLy8gICAgIGZvciAobGV0IHRhc2sgb2YgKSB7XG4vLyAgICAgICAgIGNyZWF0ZUJvb2tDYXJkKGJvb2spO1xuLy8gICAgIH1cbi8vIH1cblxuXG4vKiBQcm9qZWN0IExpc3QgKi9cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpbmsocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdC1jb250YWluZXInKVxuICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1tZW51LXRpdGxlJyk7XG4gICAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LW1lbnUtdGl0bGUtJHtwcm9qZWN0Lm5hbWV9YCk7XG4gICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGFza0xpc3QocHJvamVjdCkpO1xuXG4gICAgcHJvamVjdExpbmsuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIFxuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdExpc3QocHJvamVjdEFycikge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdC1jb250YWluZXInKTtcbiAgICByZWZyZXNoTGlzdChwcm9qZWN0TGlzdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gICAgZm9yKGxldCBwcm9qZWN0IGluIHByb2plY3RBcnIpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdExpbmsocHJvamVjdEFycltwcm9qZWN0XSk7XG4gICAgfVxufVxuXG5cblxuLyogQ1NTIFJlbGF0ZWQgQ29kZVxuX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG5sb2FkSW1hZ2VzKCk7XG5cbiAgXG5cbi8qIFBhZ2UgSW5pdGlhbGl6YXRpb24gQ29kZSBcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxubG9hZFByb2plY3RMaXN0KHByb2plY3RTdG9yYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=