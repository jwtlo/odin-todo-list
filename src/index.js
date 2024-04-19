import Project from './project.js';

const Storage = class {
  projects; // Key: project name, Value: project

  constructor() {
    this.projects = {};
  }

  // Checks if local storage has been used
  checkLocalStorage() {

  }

  loadFromLocalStorage() {

  }

  storeToLocalStorage() {

  }

  addProject(project) {
    // requirement: projects have to have unique names

  }

  removeProject(project_name) {

  }


  // Project edited directly by controller
  // editProject(project_name, ...) {

  // }

  getProject(project_name) {

  }

  getProjects() {
    return projects
  }
}

class Controller {
  storage;
  painter;

  constructor() {
    this.storage = new Storage();
    this.painter = new Painter();
  }

  initialize() {
    if (this.storage.checkLocalStorage) {
      this.storage.loadFromLocalStorage();
      this.painter.seeAllProjects(this.storage.getProjects());

      // add buttonAddProject to add project button
    }
  }

  static addProjectButtonPress(e) {

  }

  static closeModalButtonPress(e) {

  }

  static saveModalButtonPress(e) {

  }

  static deleteProjectButtonPress(e) {

  }

  static enterProjectButtonPress(e) {

  }

  static editProjectButtonPress(e) {

  }

  static backProjectButtonPress(e) {

  }

  static addTodoButtonPress(e) {

  }

  static editTodoButtonPress(e) {

  }

  static saveTodoButtonPress(e) {

  }

  static deleteTodoButtonPress(e) {

  }

};

class Painter {

  seeAllProjects(projects) {

  }

  loadProject(project) {

  }
}