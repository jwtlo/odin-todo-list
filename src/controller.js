import Project from "./project.js";
import Todo from './todo';
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
    this.enterProjectClick = this.enterProjectClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.addTodoClick = this.addTodoClick.bind(this);
    this.saveTodoClick = this.saveTodoClick.bind(this);
    this.deleteTodoClick = this.deleteTodoClick.bind(this);
    this.editTodoClick = this.editTodoClick.bind(this);
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

  enterProjectClick(e) {
    const project = this.storage.getProject(e.target.dataset.projectName);
    this.painter.loadProject(project);
  }

  backClick(e) {
    this.painter.seeAllProjects(this.storage.getProjects());
  }

  editProjectClick(e) { }

  editDeleteProjectClick(e) { }

  backProjectClick(e) { }

  addTodoClick(e) {
    const newTodo = new Todo();
    this.painter.addNewTodo(newTodo);
  }

  saveTodoClick(e) {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement);
    const formProps = Object.fromEntries(formData);

    const newTodo = new Todo(formProps);
    newTodo.id = e.target.dataset.id;

    const projectName = document.querySelector(".project-name").textContent;
    this.storage.getProject(projectName).todos[newTodo.id] = newTodo;
    this.storage.storeToLocalStorage();

    this.painter.loadProject(this.storage.getProject(projectName));
  }

  deleteTodoClick(e) {
    e.preventDefault();

    const projectName = document.querySelector(".project-name").textContent;
    delete this.storage.getProject(projectName).todos[e.target.dataset.id];
    this.storage.storeToLocalStorage();

    this.painter.loadProject(this.storage.getProject(projectName));
  }

  editTodoClick(e) {
    e.preventDefault();
    e.target.parentElement.previousSibling.disabled = false;
    e.target.parentElement.replaceWith(this.painter.makeTodoBtns(e.target.dataset.id, true));
  }

  // formEl.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const formProps = Object.fromEntries(formData);
  //   if (formProps["title"] in this.storage.getProjects()) {
  //     document.querySelector(".modal-warning").classList.remove("inactive");
  //     document.querySelector(".modal-warning").classList.add("active");
  //     return;
  //   }

  //   const newProject = new Project(...Object.values(formProps));
  //   this.storage.addProject(newProject);
  //   this.painter.seeAllProjects(this.storage.getProjects());

  //   document.querySelector(".modal-warning").classList.remove("active");
  //   document.querySelector(".modal-warning").classList.add("inactive");
  //   formEl.reset();
  //   modalEl.close();
  // });


}

export default new Controller();