import Project from "./project.js"
import Storage from "./storage.js"

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