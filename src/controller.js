import Project from "./project.js";
import _storage from "./storage.js";
import _painter from "./painter.js";

class Controller {
  storage;
  painter;

  constructor() {
    this.storage = _storage;
    this.painter = _painter;

    this.newProjectClick = this.newProjectClick.bind(this);
    this.deleteProjectClick = this.deleteProjectClick.bind(this);
  }

  initialize() {
    if (this.storage.checkLocalStorage) {
      this.storage.loadFromLocalStorage();
      this.painter.seeAllProjects(this.storage.getProjects());

      // add buttonAddProject to add project button
    } else {
      const newProject = new Project("Default", "Let's get started!");
      this.storage.addProject(newProject)
    }
    this.initializeModal();
  }

  initializeModal() {
    const modalEl = document.querySelector("dialog");

    const closeEl = document.querySelector("#modal-close");
    closeEl.addEventListener("click", (e) => {
      // e.preventDefault(); // Causes modal to keep it's information
      document.querySelector(".modal-warning").classList.remove("active");
      document.querySelector(".modal-warning").classList.add("inactive");
      modalEl.close();
    });

    const formEl = document.querySelector("dialog > form");
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      if (formProps["title"] in this.storage.getProjects()) {
        document.querySelector(".modal-warning").classList.remove("inactive");
        document.querySelector(".modal-warning").classList.add("active");
        return;
      }

      const newProject = new Project(...Object.values(formProps));
      this.storage.addProject(newProject);
      this.painter.seeAllProjects(this.storage.getProjects());

      document.querySelector(".modal-warning").classList.remove("active");
      document.querySelector(".modal-warning").classList.add("inactive");
      formEl.reset();
      modalEl.close();
    });
  }

  newProjectClick(e) {
    document.querySelector("dialog").showModal();
  }

  deleteProjectClick(e) {
    this.storage.removeProject(e.target.dataset.projectName);
    this.painter.seeAllProjects(this.storage.getProjects());
  }

  enterProjectClick(e) { }

  backClick(e) { }

  editProjectClick(e) { }

  editDeleteProjectClick(e) { }

  backProjectClick(e) { }

  addTodoClick(e) { }

  editTodoClick(e) { }

  saveTodoClick(e) { }

  deleteTodoClick(e) { }
}

export default new Controller();