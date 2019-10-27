module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-position */ "use-position");
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_position__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _questions_disney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../questions/disney */ "./questions/disney.js");

var _jsxFileName = "/Users/arianehine/Code4Good19/team-6/frontend/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








const axios = __webpack_require__(/*! axios */ "axios"); //Define questionaire here:


 //Define limit of question here: 

const QUESTION_LIMIT = 10;
let questionNumber = 1;
let metric = 0;
let driven = false;
let user_id = 1;
let quiz_id = 1;

const Quiz = () => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error
  } = Object(use_position__WEBPACK_IMPORTED_MODULE_7__["usePosition"])();
  const {
    0: indexDriven,
    1: setIndexDriven
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0);
  const {
    0: indexFiller,
    1: setIndexFiller
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0);
  const {
    0: finished,
    1: setFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0);

  const handleSubmit = event => {
    const form = event.target;
    let data = {
      age: form.elements.age.value,
      gender: form.elements.gender.value,
      lat: latitude,
      lng: longitude,
      user_result: metric,
      time: "2019-09-20 09:20:10",
      user_id: user_id,
      quiz_id: quiz_id
    };
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:8080/addNewUserAndSurveyData', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
  };

  function answered(response) {
    questionNumber += 1;

    if (questionNumber == QUESTION_LIMIT) {
      setFinished(1);
    }

    if (!driven) {
      driven = true;
      setIndexFiller(indexFiller + 1);
    } else {
      driven = false;
      response == 1 ? metric += 0 : metric += 1;
      setIndexDriven(indexDriven + 1);
    }
  }

  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, finished ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, " Finished! "), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, " You got: ", _questions_disney__WEBPACK_IMPORTED_MODULE_8__["default"].data.results[metric].male, " "), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Gender"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: "gender",
    as: "select",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Male"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Female"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Other"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    controlId: "exampleForm.ControlSelect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Age"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: "age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx("div", {
    className: "buttonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "info",
    type: "submit",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Submit")))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, " ", _questions_disney__WEBPACK_IMPORTED_MODULE_8__["default"].data.title, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Header, {
    as: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, " Question ", questionNumber, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Title, {
    className: "questionTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, driven ? _questions_disney__WEBPACK_IMPORTED_MODULE_8__["default"].data.dataDrivenQuestions[indexDriven] : _questions_disney__WEBPACK_IMPORTED_MODULE_8__["default"].data.fillerQuestions[indexFiller]), __jsx("div", {
    className: "buttonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "responseButton",
    variant: "success",
    onClick: () => answered(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Yes"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "responseButton",
    variant: "danger",
    onClick: () => answered(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "No"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ }),

/***/ "./questions/disney.js":
/*!*****************************!*\
  !*** ./questions/disney.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Disney = {
  "data": {
    "title": "Which Disney character are you?",
    "results": [{
      "male": "Mr Incredible",
      "female": "Elastigirl",
      "value": 5
    }, {
      "male": "Hercules",
      "female": "Pocahontas",
      "value": 4
    }, {
      "male": "Tarzan",
      "female": "Elsa",
      "value": 3
    }, {
      "male": "Sully",
      "female": "Moana",
      "value": 2
    }, {
      "male": "Russell",
      "female": "Ursula",
      "value": 1
    }],
    "fillerQuestions": ["Do you like dogs?", "Would you live in the city?", "Would you live in Asia?", "Do you think it's funny when someone gets startled?", "Do you think you would look good if you were somewhat translucent?"],
    "dataDrivenQuestions": ["Do you enjoy sports?", "Do you prefer walking to driving?", "Do you hate being in bed all day?", "Do you live an active lifestyle?", "Would you consider yourself physically fit?"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Disney);

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arianehine/Code4Good19/team-6/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "use-position":
/*!*******************************!*\
  !*** external "use-position" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-position");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map