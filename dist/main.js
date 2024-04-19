/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst Storage = class {\n  projects; // Key: project name, Value: project\n\n  constructor() {\n    this.projects = {};\n  }\n\n  // Checks if local storage has been used\n  checkLocalStorage() {\n\n  }\n\n  loadFromLocalStorage() {\n\n  }\n\n  storeToLocalStorage() {\n\n  }\n\n  addProject(project) {\n    // requirement: projects have to have unique names\n\n  }\n\n  removeProject(project_name) {\n\n  }\n\n\n  // Project edited directly by controller\n  // editProject(project_name, ...) {\n\n  // }\n\n  getProject(project_name) {\n\n  }\n\n  getProjects() {\n    return projects\n  }\n}\n\nclass Controller {\n  storage;\n  painter;\n\n  constructor() {\n    this.storage = new Storage();\n    this.painter = new Painter();\n  }\n\n  initialize() {\n    if (this.storage.checkLocalStorage) {\n      this.storage.loadFromLocalStorage();\n      this.painter.seeAllProjects(this.storage.getProjects());\n\n      // add buttonAddProject to add project button\n    }\n  }\n\n  static addProjectButtonPress(e) {\n\n  }\n\n  static closeModalButtonPress(e) {\n\n  }\n\n  static saveModalButtonPress(e) {\n\n  }\n\n  static deleteProjectButtonPress(e) {\n\n  }\n\n  static enterProjectButtonPress(e) {\n\n  }\n\n  static editProjectButtonPress(e) {\n\n  }\n\n  static backProjectButtonPress(e) {\n\n  }\n\n  static addTodoButtonPress(e) {\n\n  }\n\n  static editTodoButtonPress(e) {\n\n  }\n\n  static saveTodoButtonPress(e) {\n\n  }\n\n  static deleteTodoButtonPress(e) {\n\n  }\n\n};\n\nclass Painter {\n\n  seeAllProjects(projects) {\n\n  }\n\n  loadProject(project) {\n\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n  name;\n  description;\n  todos;\n\n  constructor(name, description=\"\") {\n    this.name = name;\n    this.description = description;\n    this.todos = []\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  title;\n  description;\n  dueDate;\n  priority;\n  notes;\n  checklist;\n\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = \"\"\n    this.checklist = []\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;