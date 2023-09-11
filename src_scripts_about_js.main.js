"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhedonism_fest"] = self["webpackChunkhedonism_fest"] || []).push([["src_scripts_about_js"],{

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modal */ \"./src/components/modal.js\");\n__webpack_require__.e(/*! import() */ \"src_pages_about_css\").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/about.css */ \"./src/pages/about.css\"));\n\nconsole.log('О фестивале');\nif (document.getElementById('about-page')) {\n  var arrowTop = document.querySelector('.about-content__arrow');\n  arrowTop.onclick = function () {\n    window.scrollTo(scrollY, 0);\n  };\n  window.addEventListener('scroll', function () {\n    arrowTop.hidden = this.scrollY < document.documentElement.clientHeight;\n  });\n  document.querySelector('.about-content__support-button').addEventListener('click', _components_modal__WEBPACK_IMPORTED_MODULE_0__.openDonateForm);\n}\n\n//# sourceURL=webpack://hedonism_fest/./src/scripts/about.js?");

/***/ })

}]);