(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #221f1f;\n  color: #ffffff;\n  font-family: \"Lato\", sans-serif; }\n\nul {\n  list-style-type: none; }\n\n.flex-container {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between; }\n\n.flex-left {\n  justify-content: flex-start; }\n\n.flex-center {\n  justify-content: center; }\n\n.flex-right {\n  justify-content: flex-end;\n  -webkit-padding-end: 40px;\n          padding-inline-end: 40px; }\n\nh2, .TitleList .Title {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.4;\n  margin-bottom: 1em; }\n\np {\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  margin-bottom: 1em; }\n\n.Header {\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, black 0%, rgba(0, 0, 0, 0) 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );\n  /* IE6-9 */\n  background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  box-sizing: border-box;\n  z-index: 5; }\n\n.Logo {\n  width: 200px;\n  height: 25px; }\n\n.moive-db {\n  width: 80px;\n  height: 25px; }\n\na:-webkit-any-link {\n  color: white;\n  cursor: pointer;\n  text-decoration: unset; }\n\n.Navigation ul {\n  display: flex;\n  height: 37px;\n  align-items: center;\n  padding: 0 10px; }\n  .Navigation ul li {\n    font-weight: 600;\n    font-family: courier;\n    list-style: none;\n    padding: 7px 10px;\n    font-size: 14px;\n    -webkit-transition: background .125s ease;\n    transition: background .125s ease;\n    border-radius: 3px; }\n    .Navigation ul li:hover {\n      color: #00cf72;\n      cursor: pointer; }\n\n.UserProfile {\n  margin-left: auto; }\n  .UserProfile .User {\n    display: flex; }\n    .UserProfile .User .image {\n      border-radius: 44px;\n      margin-left: 10px;\n      overflow: hidden;\n      width: 44px;\n      height: 44px;\n      box-sizing: border-box;\n      border: 3px solid transparent;\n      -webkit-transition: border .125s ease;\n      transition: border .125s ease; }\n      .UserProfile .User .image img {\n        width: 100%;\n        display: block; }\n    .UserProfile .User .name {\n      align-items: center;\n      display: flex;\n      font-size: 18px;\n      font-weight: 300;\n      height: 44px; }\n    .UserProfile .User:hover {\n      cursor: pointer; }\n      .UserProfile .User:hover .image {\n        border: 3px solid #00cf72; }\n  .UserProfile .UserProfile-menu {\n    display: none; }\n\n.Hero {\n  width: 100%;\n  position: relative;\n  background-size: cover;\n  min-height: 500px; }\n  .Hero .content {\n    position: relative;\n    z-index: 4;\n    width: 500px;\n    left: 10vw;\n    top: 10vw; }\n    .Hero .content .logo {\n      max-width: 400px;\n      display: block;\n      position: relative;\n      left: -5px; }\n    .Hero .content p {\n      width: 100%; }\n    .Hero .content .button-wrapper {\n      display: flex;\n      width: 400px;\n      margin-top: 30px; }\n      .Hero .content .button-wrapper .Button:first-child {\n        margin-right: 10px; }\n  .Hero .overlay {\n    /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, #221f1f 0%, rgba(34, 31, 31, 0) 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, #221f1f 0%, rgba(34, 31, 31, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );\n    /* IE6-9 */\n    height: 100%;\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.Button {\n  background: transparent;\n  display: flex;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 20px;\n  box-sizing: border-box;\n  border: 2px solid rgba(245, 245, 241, 0.2);\n  border-radius: 44px;\n  font-size: 14px;\n  font-weight: 600;\n  -webkit-transition: border .125s ease, background .125s ease;\n  transition: border .125s ease, background .125s ease; }\n  .Button:hover {\n    border: 2px solid #f5f5f1; }\n  .Button[data-primary='true'] {\n    border: 2px solid #00cf72; }\n    .Button[data-primary='true']:hover {\n      background: #00cf72;\n      color: black; }\n\n.Hero ~ .TitleList:nth-child(3) {\n  margin-top: -10vw;\n  position: relative;\n  z-index: 4; }\n\n.TitleList {\n  padding: 20px 40px;\n  box-sizing: border-box;\n  -webkit-transition: opacity 3s ease;\n  transition: opacity 3s ease;\n  opacity: 0; }\n  .TitleList .titles-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 20px 0;\n    width: calc(100vw - 80px);\n    box-sizing: border-box;\n    justify-content: space-between; }\n  .TitleList[data-loaded='true'] {\n    opacity: 1; }\n\n.Movie {\n  width: calc(20% - 10px);\n  min-width: calc(20% - 10px);\n  text-align: center;\n  padding: 50px;\n  color: white;\n  flex: 1 0 auto;\n  background-position: center;\n  background-size: 40%;\n  height: 300px;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  -webkit-transition: background 1s ease;\n  transition: background 1s ease; }\n  .Movie:nth-child(n+6) {\n    margin-top: 20px; }\n  .Movie:last-child {\n    margin-right: 0; }\n  .Movie .overlay {\n    /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );\n    /* IE6-9 */\n    padding: 20px;\n    position: relative;\n    height: 100%;\n    pointer-events: none;\n    opacity: 0;\n    -webkit-transition: opacity .125s ease;\n    transition: opacity .125s ease; }\n    .Movie .overlay .title {\n      font-size: 22px;\n      font-weight: 200;\n      opacity: 0;\n      -webkit-transition: opacity .25s ease;\n      transition: opacity .25s ease; }\n    .Movie .overlay .rating {\n      font-size: 14px;\n      opacity: 0;\n      -webkit-transition: opacity .25s ease .125s;\n      transition: opacity .25s ease .125s; }\n    .Movie .overlay .plot {\n      font-size: 14px;\n      display: -webkit-box;\n      margin-top: 100px;\n      font-weight: 300;\n      line-height: 1.6;\n      opacity: 0;\n      -webkit-line-clamp: 3;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-transition: margin .25s ease .125s, opacity .25s ease .25s;\n      transition: margin .25s ease .125s, opacity .25s ease .25s; }\n  .Movie:hover {\n    background-size: 150%; }\n    .Movie:hover .overlay {\n      opacity: 1;\n      pointer-events: all; }\n      .Movie:hover .overlay .plot {\n        margin-top: 10px;\n        opacity: 1; }\n      .Movie:hover .overlay .title {\n        opacity: 1; }\n      .Movie:hover .overlay .rating {\n        opacity: 1; }\n      .Movie:hover .overlay .ListToggle {\n        opacity: 1; }\n\n.flex-carousel {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.ListToggle {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  border-radius: 32px;\n  overflow: hidden;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  opacity: 0; }\n  .ListToggle:hover {\n    border: 2px solid #ffffff; }\n    .ListToggle:hover div {\n      top: -32px; }\n  .ListToggle[data-toggled=\"true\"] {\n    background: #e50914;\n    border: 2px solid #e50914; }\n    .ListToggle[data-toggled=\"true\"] div {\n      top: -32px; }\n  .ListToggle div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 64px;\n    width: 32px;\n    -webkit-transition: .125s ease;\n    transition: .125s ease; }\n    .ListToggle div i {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 32px;\n      width: 32px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n} */\n\n/* @keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/Logo */ "./src/components/header/Logo.js");
/* harmony import */ var _components_carousel_Movie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/Movie */ "./src/components/carousel/Movie.js");
/* harmony import */ var _components_ListToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ListToggle */ "./src/components/ListToggle.js");
/* harmony import */ var _components_header_UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/UserProfile */ "./src/components/header/UserProfile.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_MoviesCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/MoviesCarousel */ "./src/components/MoviesCarousel.js");
/* harmony import */ var _components_header_Navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/Navigation */ "./src/components/header/Navigation.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flexbox-react */ "./node_modules/flexbox-react/dist/index.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flexbox_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/App.js";












var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var prevScrollpos = window.pageYOffset;

      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos < 100) {
          document.getElementById("flex-box").style.top = "0";
        } else {
          document.getElementById("flex-box").style.top = "-80px";
        }

        prevScrollpos = currentScrollPos;
      };

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(flexbox_react__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "flex-box",
        className: "Header flex-container",
        element: "header",
        height: "60px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header_Navigation__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header_UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MoviesCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        url: "discover/movie?sort_by=popularity.desc&page=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HeroButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroButton */ "./src/components/HeroButton.js");





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/Hero.js";



var Hero =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hero, _Component);

  function Hero() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "hero",
        className: "Hero",
        style: {
          backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "logo",
        src: "http://www.returndates.com/backgrounds/narcos.logo.png",
        alt: "narcos background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Season 2 now available"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_HeroButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        primary: true,
        text: "Trailer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_HeroButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        primary: false,
        text: "+ My list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/HeroButton.js":
/*!**************************************!*\
  !*** ./src/components/HeroButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroButton; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/HeroButton.js";


var HeroButton =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HeroButton, _Component);

  function HeroButton() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeroButton);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeroButton).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeroButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        a: true,
        href: "#",
        className: "Button",
        "data-primary": this.props.primary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, this.props.text);
    }
  }]);

  return HeroButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/ListToggle.js":
/*!**************************************!*\
  !*** ./src/components/ListToggle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListToggle; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/ListToggle.js";


var ListToggle =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListToggle, _Component);

  function ListToggle(props) {
    var _this;

    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListToggle);

    _this = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListToggle).call(this, props));
    _this.state = {
      toggled: false
    };
    return _this;
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListToggle, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.state.toggled === true) {
        this.setState({
          toggled: false
        });
      } else {
        this.setState({
          toggled: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.handleClick,
        "data-toggled": this.state.toggled,
        className: "ListToggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-pen-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-trash-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return ListToggle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/MoviesCarousel.js":
/*!******************************************!*\
  !*** ./src/components/MoviesCarousel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviesCarousel; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/Carousel */ "./src/components/carousel/Carousel.js");
/* harmony import */ var _carousel_Movie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel/Movie */ "./src/components/carousel/Movie.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flexbox-react */ "./node_modules/flexbox-react/dist/index.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flexbox_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/MoviesCarousel.js";







var MoviesCarousel =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MoviesCarousel, _Component);

  function MoviesCarousel(props) {
    var _this;

    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MoviesCarousel);

    _this = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MoviesCarousel).call(this, props));
    _this.state = {
      movies: [],
      mounted: false
    };
    return _this;
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MoviesCarousel, [{
    key: "loadContent",
    value: function loadContent() {
      var _this2 = this;

      var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=166624c030b91c943c397020f20525b4';
      fetch(requestUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          movies: data.results
        });

        console.log(data.results);
      }).catch(function (err) {
        console.log("There has been error");
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url && nextProps.url !== '') {
        this.setState({
          url: nextProps.url,
          mounted: true
        }, function () {
          this.loadContent();
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.url !== '') {
        this.loadContent();
        this.setState({
          mounted: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_carousel_Movie__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: movie.id,
          movie: movie,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });
      }));
    }
  }]);

  return MoviesCarousel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/lib/Swipeable.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Indicator */ "./src/components/carousel/Indicator.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper */ "./src/components/carousel/Wrapper.js");
/* harmony import */ var _CarouselContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CarouselContainer */ "./src/components/carousel/CarouselContainer.js");
/* harmony import */ var _CarouselSlot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CarouselSlot */ "./src/components/carousel/CarouselSlot.js");






var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/carousel/Carousel.js";

function _templateObject() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  margin: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carousel);

    _this = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel).call(this, props));

    _this.doSliding = function (direction, position) {
      _this.setState({
        sliding: true,
        direction: direction,
        position: position
      });

      setTimeout(function () {
        _this.setState({
          sliding: false
        });
      }, 50);
    };

    _this.nextSlide = function () {
      var position = _this.state.position;
      var children = _this.props.children;
      var numItems = children.length;
      if (numItems === 2 && position === 1) return;

      _this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    };

    _this.prevSlide = function () {
      var position = _this.state.position;
      var children = _this.props.children;
      var numItems = children.length;
      if (numItems === 2 && position === 0) return;

      _this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
    };

    _this.handleSwipe = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(function (isNext) {
      var children = _this.props.children;
      var numItems = children.length || 1;

      if (isNext && numItems > 1) {
        _this.nextSlide();
      } else if (numItems > 1) {
        _this.prevSlide();
      }
    }, 500, {
      trailing: false
    });
    _this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'prev' : 'next',
      sliding: false
    };
    return _this;
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, [{
    key: "getOrder",
    value: function getOrder(itemIndex) {
      var position = this.state.position;
      var children = this.props.children;
      var numItems = children.length;
      if (numItems === 2) return itemIndex;
      if (itemIndex - position < 0) return numItems - Math.abs(itemIndex - position);
      return itemIndex - position;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      var _this$state = this.state,
          sliding = _this$state.sliding,
          direction = _this$state.direction,
          position = _this$state.position;
      var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(children, function (child) {
        return Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, {
          numSlides: children.length || 1
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.prevSlide();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Prev"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.nextSlide();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Next"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onSwipingLeft: function onSwipingLeft() {
          return _this2.handleSwipe(true);
        },
        onSwipingRight: function onSwipingRight() {
          return _this2.handleSwipe();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CarouselContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sliding: sliding,
        direction: direction,
        numSlides: childrenWithProps.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, childrenWithProps.map(function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CarouselSlot__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: index,
          order: _this2.getOrder(index),
          numSlides: childrenWithProps.length,
          position: position,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, child);
      })))));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/components/carousel/CarouselContainer.js":
/*!******************************************************!*\
  !*** ./src/components/carousel/CarouselContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin: 0 0 20px 20px;\n  transition: ", ";\n  transform: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.sliding ? 'none' : 'transform 1s ease';
}, function (props) {
  if (props.numSlides === 1) return 'translateX(0%)';

  if (props.numSlides === 2) {
    if (!props.sliding && props.direction === 'next') return 'translateX(calc(-80% + 30px))';
    if (!props.sliding && props.direction === 'prev') return 'translateX(0%)';
    if (props.direction === 'prev') return 'translateX(calc(-80% + 30px))';
    return 'translateX(0%)';
  }

  if (!props.sliding) return 'translateX(calc(-80% - 20px))';
  if (props.direction === 'prev') return 'translateX(calc(2 * (-80% - 20px)))';
  return 'translateX(0%)';
});
/* harmony default export */ __webpack_exports__["default"] = (CarouselContainer);

/***/ }),

/***/ "./src/components/carousel/CarouselSlot.js":
/*!*************************************************!*\
  !*** ./src/components/carousel/CarouselSlot.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 1 0 100%;\n  flex-basis: 80%;\n  margin-right: 20px;\n  order: ", ";\n  opacity: ", ";\n  transition: opacity 1s ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CarouselSlot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.order;
}, function (props) {
  if (props.numSlides === 1) return 1;
  if (props.numSlides === 2) return props.order === props.position ? 1 : 0.5;
  return props.order === 1 ? 1 : 0.5;
});
/* harmony default export */ __webpack_exports__["default"] = (CarouselSlot);

/***/ }),

/***/ "./src/components/carousel/Indicator.js":
/*!**********************************************!*\
  !*** ./src/components/carousel/Indicator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Indicator; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/carousel/Indicator.js";

function _templateObject2() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  background: ", ";\n  width: 60px;\n  height: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  transition: background 0.5s ease;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  margin-bottom: 20px;\n  margin-top: -20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
var Pip = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span(_templateObject2(), function (props) {
  return props.isCurrent ? 'darkorange' : 'gainsboro';
});

var Indicator =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Indicator, _Component);

  function Indicator() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Indicator);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Indicator).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Indicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          length = _this$props.length,
          position = _this$props.position;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, Array.from({
        length: length
      }, function (pip, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pip, {
          key: i,
          isCurrent: i === position,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
      }));
    }
  }]);

  return Indicator;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/components/carousel/Movie.js":
/*!******************************************!*\
  !*** ./src/components/carousel/Movie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ListToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ListToggle */ "./src/components/ListToggle.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/carousel/Movie.js";




var Movie =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Movie, _Component);

  function Movie(props) {
    var _this;

    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Movie);

    _this = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Movie).call(this, props));
    _this.state = {
      title: '',
      year: '',
      votes: '',
      description: '',
      moviePoster: ''
    };
    return _this;
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Movie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var name = '';
      var poster = 'http://image.tmdb.org/t/p/original' + this.props.movie.poster_path;

      if (!this.props.movie.name) {
        name = this.props.movie.original_title;
      } else {
        name = this.props.movie.name;
      }

      this.setState({
        title: name,
        moviePoster: poster,
        year: this.props.movie.releaseDate,
        votes: this.props.movie.vote_average,
        description: this.props.movie.overview
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          votes = _this$state.votes,
          description = _this$state.description;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Movie",
        style: {
          backgroundImage: 'url(' + this.state.moviePoster + ')'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "rating",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, votes, " / 10"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "plot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ListToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/carousel/Wrapper.js":
/*!********************************************!*\
  !*** ./src/components/carousel/Wrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/components/header/Logo.js":
/*!***************************************!*\
  !*** ./src/components/header/Logo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logo.png */ "./src/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/header/Logo.js";



var Logo =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Logo, _Component);

  function Logo() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logo);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logo).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",
        className: "moive-db",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))));
    }
  }]);

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/header/Navigation.js":
/*!*********************************************!*\
  !*** ./src/components/header/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/header/Navigation.js";


var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "flex-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "navigator",
        className: "Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "My List")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Add New Movie"))))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/header/UserProfile.js":
/*!**********************************************!*\
  !*** ./src/components/header/UserProfile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/components/header/UserProfile.js";


var UserProfile =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfile, _Component);

  function UserProfile() {
    Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfile);

    return Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProfile).apply(this, arguments));
  }

  Object(_Users_tomerlevi_GitHub_React_netstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "flex-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "UserProfile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "User",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/tomer-levi/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Tomer Levi")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://media.licdn.com/dms/image/C4E03AQGKCR07Q4G2ZA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=FqDWYLDE2cjx4IJ3utVSAj-3-ixbM7R7tMUbp-Am3pE",
        alt: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }))))));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/tomerlevi/GitHub/React/netstream/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.fe9d6fe0.png";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/style.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tomerlevi/GitHub/React/netstream/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/tomerlevi/GitHub/React/netstream/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map