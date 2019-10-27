webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-position */ "./node_modules/use-position/dist/usePosition.min.js");
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _questions_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../questions/country */ "./questions/country.js");
var _jsxFileName = "/Users/aakashbangar/Desktop/team-6/frontend/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






 //Define questionaire here:

 //Define limit of question here: 

var QUESTION_LIMIT = 10;
var questionNumber = 1;
var metric = 0;
var driven = false;

var Quiz = function Quiz() {
  var _usePosition = Object(use_position__WEBPACK_IMPORTED_MODULE_6__["usePosition"])(),
      latitude = _usePosition.latitude,
      longitude = _usePosition.longitude,
      timestamp = _usePosition.timestamp,
      accuracy = _usePosition.accuracy,
      error = _usePosition.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      indexDriven = _useState[0],
      setIndexDriven = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      indexFiller = _useState2[0],
      setIndexFiller = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      finished = _useState3[0],
      setFinished = _useState3[1];

  var handleSubmit = function handleSubmit(event) {
    var form = event.target;
    var Country = {
      "data": {
        "latitude": latitude,
        "longitude": longitude,
        "metric": metric,
        "gender": form.elements.gender.value,
        "age": form.elements.age.value
      }
    };
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
      lineNumber: 58
    },
    __self: this
  }, finished ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " Finished! "), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " You got: ", _questions_country__WEBPACK_IMPORTED_MODULE_7__["default"].data.results[metric].male, " "), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Gender"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    name: "gender",
    as: "select",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Male"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Female"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Other"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    controlId: "exampleForm.ControlSelect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Age"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    name: "age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("div", {
    className: "buttonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "info",
    type: "submit",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Submit")))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, " ", _questions_country__WEBPACK_IMPORTED_MODULE_7__["default"].data.title, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    as: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, " Question ", questionNumber, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {
    className: "questionTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, " "), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, driven ? _questions_country__WEBPACK_IMPORTED_MODULE_7__["default"].data.dataDrivenQuestions[indexDriven] : _questions_country__WEBPACK_IMPORTED_MODULE_7__["default"].data.fillerQuestions[indexFiller]), __jsx("div", {
    className: "buttonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "responseButton",
    variant: "success",
    onClick: function onClick() {
      return answered(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Yes"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "responseButton",
    variant: "danger",
    onClick: function onClick() {
      return answered(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "No"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ }),

/***/ "./questions/country.js":
/*!******************************!*\
  !*** ./questions/country.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Country = {
  "data": {
    "title": "Which Country are you?",
    "results": [{
      "male": "Scotland",
      "female": "Scotland",
      "value": 5
    }, {
      "male": "France",
      "female": "France",
      "value": 4
    }, {
      "male": "USA",
      "female": "USA",
      "value": 3
    }, {
      "male": "Russia",
      "female": "Russia",
      "value": 2
    }, {
      "male": "India",
      "female": "India",
      "value": 1
    }],
    "fillerQuestions": ["Do you like spicy food?", "Would you prefer to be too hot instead of too cold?", "Do you like country music?", "Do you have a short temper?", "Do you like the colour pink?"],
    "dataDrivenQuestions": ["Would you go to the gym on your day off?", "Do you take part in sports regularly?", "Would you prefer a burger over a salad?", "Do you think you could beat your friends in a race?", "If you had the opportunity to 'supersize' a meal would you?"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Country);

/***/ }),

/***/ "./questions/disney.js":
false

})
//# sourceMappingURL=index.js.006eec59ffe0e5573443.hot-update.js.map