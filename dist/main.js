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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _painter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painter.js */ \"./src/painter.js\");\n\n\n\n\nclass Controller {\n  storage;\n  painter;\n\n  constructor() {\n    this.storage = new _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.painter = new _painter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  initialize() {\n    if (this.storage.checkLocalStorage) {\n      this.storage.loadFromLocalStorage();\n      this.painter.seeAllProjects(this.storage.getProjects());\n\n      // add buttonAddProject to add project button\n    }\n  }\n\n  static newProjectClick(e) {\n\n  }\n\n  static closeModalClick(e) {\n\n  }\n\n  static saveModalClick(e) {\n\n  }\n\n  static deleteProjectClick(e) {\n\n  }\n\n  static enterProjectClick(e) {\n\n  }\n\n  static editProjectClick(e) {\n\n  }\n\n  static editDeleteProjectClick(e) {\n\n  }\n\n  static backProjectClick(e) {\n\n  }\n\n  static addTodoClick(e) {\n\n  }\n\n  static editTodoClick(e) {\n\n  }\n\n  static saveTodoClick(e) {\n\n  }\n\n  static deleteTodoClick(e) {\n\n  }\n\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nconst c = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nc.initialize();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/painter.js":
/*!************************!*\
  !*** ./src/painter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Painter)\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\nclass Painter {\n  \n  clear() {\n    const mainEl = document.querySelector(\"main\");\n    mainEl.innerHTML = \"\";\n    return mainEl;\n  }\n\n  seeAllProjects(projects) {\n    const mainEl = this.clear();\n    const projectsContainerEl = document.createElement(\"div\");\n    projectsContainerEl.className = \"project-cards-container\";\n    \n    for (const project of Object.values(projects)) {\n\n      const nameEl = document.createElement(\"h3\");\n      nameEl.textContent = project.name;\n      nameEl.className = \"project-card-name\";\n\n      const descEl = document.createElement(\"p\");\n      descEl.textContent = project.description;\n      descEl.className = \"project-card-desc\";\n\n      const infoEl = document.createElement(\"div\");\n      infoEl.className = \"project-card-info-container\";\n      infoEl.appendChild(nameEl);\n      infoEl.appendChild(descEl);\n\n\n      const delBtnEl = document.createElement(\"button\");\n      delBtnEl.textContent = \"delete\"\n      delBtnEl.className = \"delete-project-btn\";\n      delBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProjectClick);\n\n      const enterBtnEl = document.createElement(\"button\");\n      enterBtnEl.textContent = \"enter\"\n      enterBtnEl.className = \"enter-project-btn\";\n      enterBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enterProjectClick);\n\n      const btnsContainerEl = document.createElement(\"div\");\n      btnsContainerEl.className = \"btns-container\";\n      btnsContainerEl.appendChild(delBtnEl);\n      btnsContainerEl.appendChild(enterBtnEl);\n\n\n      const projectEl = document.createElement(\"article\");\n      projectEl.className = \"project-card\";\n      projectEl.dataProjectName = project.name;\n      projectEl.appendChild(infoEl);\n      projectEl.appendChild(btnsContainerEl);\n      \n      projectsContainerEl.appendChild(projectEl);\n    }\n    mainEl.appendChild(projectsContainerEl);\n\n    const newProjectBtnEl = document.createElement(\"button\");\n    newProjectBtnEl.textContent = \"New Project\";\n    newProjectBtnEl.className = \"header-btn\";\n    newProjectBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newProjectClick);\n    const headerBtnContainer = document.querySelector(\".header-btns-container\");\n    headerBtnContainer.appendChild(newProjectBtnEl);\n  }\n\n  loadProject(project) {\n    \n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/painter.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n  name;\n  description;\n  todos;\n\n  constructor(name, description=\"\") {\n    this.name = name;\n    this.description = description;\n    this.todos = []\n  }\n\n  // Maybe for use in storage\n  // static replacer(key, value) {\n    // return value;\n  // }\n\n  // static reviver(key, value) {\n  //   return value;\n  // }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage = class {\n  projects; // Key: project name, Value: project\n\n  constructor() {\n    this.projects = {};\n  }\n\n  // Checks if local storage has been used\n  checkLocalStorage() {\n    return localStorage.getItem(\"projects\") !== null\n  }\n\n  loadFromLocalStorage() {\n    const projectsStr = localStorage.getItem(\"projects\")\n    this.projects = JSON.parse(projectsStr)\n  }\n\n  storeToLocalStorage() {\n    const projectsStr = JSON.stringify(this.projects)\n    localStorage.setItem(\"projects\", projectsStr)\n  }\n\n  // Stores (key: project name; value: project) pair, replacing the current project in storage if there is one\n  addProject(newProject) {\n    // requirement: projects have to have unique names\n    this.projects[newProject.name] = newProject\n  }\n\n  removeProject(projectName) {\n    delete projects[projectName]\n  }\n\n  // Project edited directly by controller\n  // editProject(projectName, ...) {\n\n  // }\n\n  getProject(projectName) {\n    return this.projects[projectName];\n  }\n\n  getProjects() {\n    return this.projects\n  }\n});\n\n// let s = new Storage();\n// s.addProject(new Project(\"abc\",\" def\"));\n// window.s = s;\n\n\n//# sourceURL=webpack://odin-todo-list/./src/storage.js?");

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