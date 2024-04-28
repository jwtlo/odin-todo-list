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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _painter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painter.js */ \"./src/painter.js\");\n\n\n\n\nclass Controller {\n  storage;\n  painter;\n\n  constructor() {\n    this.storage = _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    this.painter = _painter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n    this.newProjectClick = this.newProjectClick.bind(this);\n    this.deleteProjectClick = this.deleteProjectClick.bind(this);\n  }\n\n  initialize() {\n    if (this.storage.checkLocalStorage) {\n      this.storage.loadFromLocalStorage();\n      this.painter.seeAllProjects(this.storage.getProjects());\n\n      // add buttonAddProject to add project button\n    } else {\n      const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\", \"Let's get started!\");\n      this.storage.addProject(newProject)\n    }\n    this.initializeModal();\n  }\n\n  initializeModal() {\n    const modalEl = document.querySelector(\"dialog\");\n\n    const closeEl = document.querySelector(\"#modal-close\");\n    closeEl.addEventListener(\"click\", (e) => {\n      // e.preventDefault(); // Causes modal to keep it's information\n      document.querySelector(\".modal-warning\").classList.remove(\"active\");\n      document.querySelector(\".modal-warning\").classList.add(\"inactive\");\n      modalEl.close();\n    });\n\n    const formEl = document.querySelector(\"dialog > form\");\n    formEl.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n\n      const formData = new FormData(e.target);\n      const formProps = Object.fromEntries(formData);\n      if (formProps[\"title\"] in this.storage.getProjects()) {\n        document.querySelector(\".modal-warning\").classList.remove(\"inactive\");\n        document.querySelector(\".modal-warning\").classList.add(\"active\");\n        return;\n      }\n\n      const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](...Object.values(formProps));\n      this.storage.addProject(newProject);\n      this.painter.seeAllProjects(this.storage.getProjects());\n\n      document.querySelector(\".modal-warning\").classList.remove(\"active\");\n      document.querySelector(\".modal-warning\").classList.add(\"inactive\");\n      formEl.reset();\n      modalEl.close();\n    });\n  }\n\n  newProjectClick(e) {\n    document.querySelector(\"dialog\").showModal();\n  }\n\n  deleteProjectClick(e) {\n    this.storage.removeProject(e.target.dataset.projectName);\n    this.painter.seeAllProjects(this.storage.getProjects());\n  }\n\n  enterProjectClick(e) { }\n\n  backClick(e) { }\n\n  editProjectClick(e) { }\n\n  editDeleteProjectClick(e) { }\n\n  backProjectClick(e) { }\n\n  addTodoClick(e) { }\n\n  editTodoClick(e) { }\n\n  saveTodoClick(e) { }\n\n  deleteTodoClick(e) { }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Controller());\n\n//# sourceURL=webpack://odin-todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialize();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/painter.js":
/*!************************!*\
  !*** ./src/painter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\nclass Painter {\n  clear() {\n    const mainEl = document.querySelector(\"main\");\n    mainEl.innerHTML = \"\";\n    return mainEl;\n  }\n\n  seeAllProjects(projects) {\n    const mainEl = this.clear();\n    const projectsContainerEl = document.createElement(\"div\");\n    projectsContainerEl.className = \"project-cards-container\";\n\n    for (const project of Object.values(projects)) {\n      const nameEl = document.createElement(\"h3\");\n      nameEl.textContent = project.name;\n      nameEl.className = \"project-card-name\";\n\n      const descEl = document.createElement(\"p\");\n      descEl.textContent = project.description;\n      descEl.className = \"project-card-desc\";\n\n      const infoEl = document.createElement(\"div\");\n      infoEl.className = \"project-card-info-container\";\n      infoEl.appendChild(nameEl);\n      infoEl.appendChild(descEl);\n\n      const delBtnEl = document.createElement(\"button\");\n      delBtnEl.textContent = \"delete\";\n      delBtnEl.className = \"delete-project-btn\";\n      delBtnEl.dataset.projectName = project.name;\n      delBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProjectClick);\n\n      const enterBtnEl = document.createElement(\"button\");\n      enterBtnEl.textContent = \"enter\";\n      enterBtnEl.className = \"enter-project-btn\";\n      enterBtnEl.dataset.projectName = project.name;\n      enterBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enterProjectClick);\n\n      const btnsContainerEl = document.createElement(\"div\");\n      btnsContainerEl.className = \"btns-container\";\n      btnsContainerEl.appendChild(delBtnEl);\n      btnsContainerEl.appendChild(enterBtnEl);\n\n      const projectEl = document.createElement(\"article\");\n      projectEl.className = \"project-card\";\n      projectEl.appendChild(infoEl);\n      projectEl.appendChild(btnsContainerEl);\n\n      projectsContainerEl.appendChild(projectEl);\n    }\n    mainEl.appendChild(projectsContainerEl);\n\n    const newProjectBtnEl = document.createElement(\"button\");\n    newProjectBtnEl.textContent = \"New Project\";\n    newProjectBtnEl.className = \"header-btn\";\n    newProjectBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newProjectClick);\n    const headerBtnContainer = document.querySelector(\".header-btns-container-right\");\n    headerBtnContainer.innerHTML = \"\";\n    headerBtnContainer.appendChild(newProjectBtnEl);\n  }\n\n  loadProject(project) {\n    const mainEl = clear();\n\n    const projectNameEl = document.createElement(\"h2\");\n    projectNameEl.textContent = project.name;\n    projectNameEl.className = \"project-name\";\n\n    const projectDescEl = document.createElement(\"p\");\n    projectDescEl.textContent = project.description;\n    projectDescEl.className = \"project-desc\";\n\n    const projectInfoEl = document.createElement(\"div\");\n    projectInfoEl.className = \"project-info-container\";\n    projectInfoEl.appendChild(projectNameEl);\n    projectInfoEl.appendChild(projectDescEl);\n\n    const addTodoBtnEl = document.createElement(\"button\");\n    addTodoBtnEl.className = \"add-todo-button\";\n    addTodoBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodoClick);\n\n    const todosContainerEl = document.createElement(\"div\");\n    todosContainerEl.className = \"todos-container\";\n\n    for (const todo of project.todos) {\n      todosContainerEl.appendChild(createTodo(todo));\n    }\n\n    const projectContainerEl = document.createElement(\"div\");\n    projectContainerEl.className = \"project-container\";\n    projectContainerEl.appendChild(projectInfoEl);\n    projectContainerEl.appendChild(addTodoBtnEl);\n    projectContainerEl.appendChild(todosContainerEl);\n  }\n\n  createTodo(todo) {\n    assert(todo);\n\n    // title\n    const titleLabelEl = document.createElement(\"label\");\n    titleLabelEl.textContent = \"Title:\";\n    const titleInputEl = document.createElement(\"input\");\n    titleInputEl.type = \"text\";\n    titleInputEl.name = \"todo-title\";\n    titleInputEl.id = \"todo-title\";\n    titleInputEl.class = \"todo-title\";\n    titleInputEl.value = todo.title;\n\n    const titleWrapperEl = document.createElement(\"div\");\n    titleWrapperEl.class = \"todo-title-wrapper\";\n    titleWrapperEl.appendChild(titleLabelEl);\n    titleWrapperEl.appendChild(titleInputEl);\n\n    // desc\n    const descLabelEl = document.createElement(\"label\");\n    descLabelEl.textContent = \"Description:\";\n    const descInputEl = document.createElement(\"textarea\");\n    descInputEl.name = \"todo-desc\";\n    descInputEl.id = \"todo-desc\";\n    descInputEl.class = \"todo-desc\";\n    descInputEl.cols = \"30\";\n    descInputEl.rows = \"5\";\n    descInputEl.textContent = todo.description;\n\n    const descWrapperEl = document.createElement(\"div\");\n    descWrapperEl.class = \"todo-desc-wrapper\";\n    descWrapperEl.appendChild(descLabelEl);\n    descWrapperEl.appendChild(descInputEl);\n\n    // dueDate\n    const dueLabelEl = document.createElement(\"label\");\n    dueLabelEl.textContent = \"Due:\";\n    const dueInputEl = document.createElement(\"input\");\n    dueInputEl.type = \"text\";\n    dueInputEl.name = \"todo-due\";\n    dueInputEl.id = \"todo-due\";\n    dueInputEl.class = \"todo-due\";\n    dueInputEl.value = todo.due;\n\n    const dueWrapperEl = document.createElement(\"div\");\n    dueWrapperEl.class = \"todo-due-wrapper\";\n    dueWrapperEl.appendChild(dueLabelEl);\n    dueWrapperEl.appendChild(dueInputEl);\n\n    // prio\n    const prioLabelEl = document.createElement(\"label\");\n    prioLabelEl.textContent = \"Priority:\";\n    const prioSelectEl = document.createElement(\"select\");\n    prioSelectEl.name = \"todo-prio\";\n    prioSelectEl.id = \"todo-prio\";\n    for (let i = 0; i <= 5; i++) {\n      const optionEl = document.createElement(\"option\");\n      optionEl.value = i;\n      optionEl.textContent = i;\n      if (i == todo.prio) {\n        optionEl.setAttribute(\"selected\", \"selected\");\n      }\n      prioSelectEl.appendChild(optionEl);\n    }\n    const prioWrapperEl = document.createElement(\"div\");\n    prioWrapperEl.class = \"todo-prio-wrapper\";\n    prioWrapperEl.appendChild(prioLabelEl);\n    prioWrapperEl.appendChild(prioSelectEl);\n\n    // notes\n    const notesLabelEl = document.createElement(\"label\");\n    notesLabelEl.textContent = \"Notes:\";\n    const notesInputEl = document.createElement(\"textarea\");\n    notesInputEl.name = \"todo-notes\";\n    notesInputEl.id = \"todo-notes\";\n    notesInputEl.class = \"todo-notes\";\n    notesInputEl.cols = \"30\";\n    notesInputEl.rows = \"10\";\n    notesInputEl.textContent = todo.notes;\n\n    const notesWrapperEl = document.createElement(\"div\");\n    notesWrapperEl.class = \"todo-notes-wrapper\";\n    notesWrapperEl.appendChild(notesLabelEl);\n    notesWrapperEl.appendChild(notesInputEl);\n\n    // parents\n    const fieldsetEl = document.createElement(\"fieldset\");\n    fieldsetEl.disabled = \"disabled\";\n    const formEl = document.createElement(\"form\");\n\n    fieldsetEl.appendChild(titleWrapperEl);\n    fieldsetEl.appendChild(descWrapperEl);\n    fieldsetEl.appendChild(dueWrapperEl);\n    fieldsetEl.appendChild(prioWrapperEl);\n    fieldsetEl.appendChild(notesWrapperEl);\n    formEl.appendChild(fieldsetEl);\n\n    const editBtnEl = document.createElement(\"button\");\n    editBtnEl.class = \"todo-edit-btn\";\n    editBtnEl.addEventListener(\"click\", _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTodoClick);\n    const editWrapperEl = document.createElement(\"div\");\n    editWrapperEl.class = \"todo-edit-btn-wrapper\";\n    editWrapperEl.appendChild(editBtnEl);\n\n    const todoEl = document.createElement(\"div\");\n    todoEl.appendChild(formEl);\n    todoEl.appendChild(editWrapperEl);\n\n    return todoEl;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Painter());\n\n{\n  /* <div class=\"todo-card\">\n  <form>\n    <fieldset>\n      <div class=\"todo-title-wrapper\">\n        <label for=\"todo-title\">Title:</label>\n        <input\n          type=\"text\"\n          id=\"todo-title\"\n          name=\"todo-title\"\n          class=\"todo-title\"\n        />\n      </div>\n      <div class=\"todo-desc-wrapper\">\n        <label for=\"todo-desc\">Description:</label>\n        <textarea name=\"todo-desc\" id=\"todo-desc\" cols=\"30\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"todo-due-wrapper\">\n        <label for=\"todo-due\">Due:</label>\n        <input\n          type=\"text\"\n          id=\"todo-due\"\n          name=\"todo-due\"\n          class=\"todo-due\"\n        />\n      </div>\n      <div class=\"todo-prio-wrapper\">\n        <label for=\"todo-prio\">Priority:</label>\n        <select name=\"todo-prio\" id=\"todo-prio\">\n          <option value=\"0\">0</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n        </select>\n      </div>\n      <div class=\"todo-notes-wrapper\">\n        <label for=\"todo-notes\">Notes:</label>\n        <textarea\n          name=\"todo-notes\"\n          id=\"todo-notes\"\n          cols=\"30\"\n          rows=\"10\"></textarea>\n      </div>\n    </fieldset>\n  </form>\n  <div class=\"todo-edit-btn-wrapper\">\n    <button class=\"todo-edit-btn\">edit</button>\n  </div>\n</div>; */\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/painter.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nclass Storage {\n  projects; // Key: project name, Value: project\n\n  constructor() {\n    this.projects = {};\n  }\n\n  // Checks if local storage has been used\n  checkLocalStorage() {\n    return localStorage.getItem(\"projects\") !== null\n  }\n\n  loadFromLocalStorage() {\n    const projectsStr = localStorage.getItem(\"projects\")\n    this.projects = JSON.parse(projectsStr)\n  }\n\n  storeToLocalStorage() {\n    const projectsStr = JSON.stringify(this.projects)\n    localStorage.setItem(\"projects\", projectsStr)\n  }\n\n  // Stores (key: project name; value: project) pair, replacing the current project in storage if there is one\n  addProject(newProject) {\n    // requirement: projects have to have unique names\n    this.projects[newProject.name] = newProject\n    this.storeToLocalStorage();\n  }\n\n  removeProject(projectName) {\n    delete this.projects[projectName]\n    this.storeToLocalStorage();\n  }\n\n  // Project edited directly by controller\n  // editProject(projectName, ...) {\n\n  // }\n\n  getProject(projectName) {\n    return this.projects[projectName];\n  }\n\n  getProjects() {\n    return this.projects\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Storage());\n\n// let s = new Storage();\n// s.addProject(new Project(\"abc\",\" def\"));\n// window.s = s;\n\n\n//# sourceURL=webpack://odin-todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  title;\n  description;\n  due;\n  priority;\n  notes;\n\n  constructor(title, description, due, priority, notes) {\n    this.title = title;\n    this.description = description;\n    this.due = due;\n    this.priority = priority;\n    this.notes = notes;\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?");

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