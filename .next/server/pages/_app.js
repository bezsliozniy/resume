/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Layout */ \"./src/components/Layout/index.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK\\\\resume\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK\\\\resume\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ2hCO0FBRWYsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gsOERBQU1BO2tCQUNMLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/Layout/index.styled.ts":
/*!***********************************************!*\
  !*** ./src/components/Layout/index.styled.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppWrapper: () => (/* binding */ AppWrapper),\n/* harmony export */   Content: () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/variables */ \"./styles/variables.ts\");\n\n\nconst AppWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n  min-height: 100vh;\r\n  background-color: ${_styles_variables__WEBPACK_IMPORTED_MODULE_1__.colors.lightMint};\r\n  display: flex;\r\n  justify-content: center;\r\n`;\nconst Content = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n  background-color: ${_styles_variables__WEBPACK_IMPORTED_MODULE_1__.colors.white};\r\n  width: 100%;\r\n  max-width: 1000px;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguc3R5bGVkLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFFNUMsTUFBTUUsYUFBYUYsOERBQVUsQ0FBQzs7b0JBRWpCLEVBQUVDLHFEQUFNQSxDQUFDRyxTQUFTLENBQUM7OztBQUd2QyxDQUFDLENBQUM7QUFFSyxNQUFNQyxVQUFVTCw4REFBVSxDQUFDO29CQUNkLEVBQUVDLHFEQUFNQSxDQUFDSyxLQUFLLENBQUM7OztBQUduQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnN0eWxlZC50cz9iZmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHRNaW50fTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjb2xvcnMiLCJBcHBXcmFwcGVyIiwiZGl2IiwibGlnaHRNaW50IiwiQ29udGVudCIsIndoaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/index.styled.ts\n");

/***/ }),

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styled */ \"./src/components/Layout/index.styled.ts\");\n\n\nconst Layout = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_styled__WEBPACK_IMPORTED_MODULE_1__.AppWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_styled__WEBPACK_IMPORTED_MODULE_1__.Content, {\n            children: children\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK\\\\resume\\\\src\\\\components\\\\Layout\\\\index.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK\\\\resume\\\\src\\\\components\\\\Layout\\\\index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3FEO0FBTXJELE1BQU1FLFNBQTBCLENBQUMsRUFBQ0MsUUFBUSxFQUFDO0lBQ3pDLHFCQUNFLDhEQUFDSCxxREFBVUE7a0JBQ1QsNEVBQUNDLGtEQUFPQTtzQkFDTEU7Ozs7Ozs7Ozs7O0FBSVQ7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3VtZS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/OGY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcFdyYXBwZXIsIENvbnRlbnQgfSBmcm9tIFwiLi9pbmRleC5zdHlsZWRcIjtcclxuXHJcbnR5cGUgTGF5b3V0UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dDogRkM8TGF5b3V0UHJvcHM+ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcFdyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgPC9BcHBXcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJBcHBXcmFwcGVyIiwiQ29udGVudCIsIkxheW91dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ }),

/***/ "./styles/variables.ts":
/*!*****************************!*\
  !*** ./styles/variables.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breakpoints: () => (/* binding */ breakpoints),\n/* harmony export */   colors: () => (/* binding */ colors)\n/* harmony export */ });\nconst breakpoints = {\n    sm: \"480px\",\n    md: \"767px\",\n    lg: \"979px\",\n    xl: \"1200px\"\n};\nconst colors = {\n    black: \"#040D12\",\n    darkMint: \"#183D3D\",\n    mint: \"#5C8374\",\n    lightMint: \"#93B1A6\",\n    white: \"#EEEEEE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdmFyaWFibGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsY0FBYztJQUN6QkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtBQUNOLEVBQUM7QUFFTSxNQUFNQyxTQUFTO0lBQ3BCQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLE9BQU87QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3R5bGVzL3ZhcmlhYmxlcy50cz9iNGNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcclxuICBzbTogJzQ4MHB4JyxcclxuICBtZDogJzc2N3B4JyxcclxuICBsZzogJzk3OXB4JyxcclxuICB4bDogJzEyMDBweCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcclxuICBibGFjazogJyMwNDBEMTInLFxyXG4gIGRhcmtNaW50OiAnIzE4M0QzRCcsXHJcbiAgbWludDogJyM1QzgzNzQnLFxyXG4gIGxpZ2h0TWludDogJyM5M0IxQTYnLFxyXG4gIHdoaXRlOiAnI0VFRUVFRScsXHJcbn0iXSwibmFtZXMiOlsiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImNvbG9ycyIsImJsYWNrIiwiZGFya01pbnQiLCJtaW50IiwibGlnaHRNaW50Iiwid2hpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/variables.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();