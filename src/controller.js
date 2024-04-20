import Project from "./project.js"
import Storage from "./storage.js"
import Painter from "./painter.js"

export default class Controller {
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

  static newProjectClick(e) {

  }

  static closeModalClick(e) {

  }

  static saveModalClick(e) {

  }

  static deleteProjectClick(e) {

  }

  static enterProjectClick(e) {

  }

  static editProjectClick(e) {

  }

  static editDeleteProjectClick(e) {

  }

  static backProjectClick(e) {

  }

  static addTodoClick(e) {

  }

  static editTodoClick(e) {

  }

  static saveTodoClick(e) {

  }

  static deleteTodoClick(e) {

  }

};