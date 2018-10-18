webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.608345e3300ed3daa997.hot-update.js.map