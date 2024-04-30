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
    this.editProjectClick = this.editProjectClick.bind(this);
    this.addTodoClick = this.addTodoClick.bind(this);
    this.saveTodoClick = this.saveTodoClick.bind(this);
    this.deleteTodoClick = this.deleteTodoClick.bind(this);
    this.editTodoClick = this.editTodoClick.bind(this);
  }

  initialize() {
    if (this.storage.checkLocalStorage) {
      this.storage.loadFromLocalStorage();
    } else {
      const newProject = new Project("Default", "Let's get started!");
      this.storage.addProject(newProject)
    }
    this.painter.seeAllProjects(this.storage.getProjects());

    const modalEl = document.querySelector("dialog");

    const closeEl = document.querySelector("#modal-close-btn");
    closeEl.addEventListener("click", (e) => {
      // e.preventDefault(); // Causes modal to keep its information
      document.querySelector(".modal-warning").classList.add("inactive");
      modalEl.close();
    });

    const deleteEl = document.querySelector("#modal-delete-btn");
    deleteEl.addEventListener("click", (e) => {
      document.querySelector(".modal-warning").classList.add("inactive");
      this.storage.removeProject(document.querySelector(".project-name").textContent);
      this.storage.storeToLocalStorage();
      this.painter.seeAllProjects(this.storage.getProjects());
      modalEl.close();
    });
  }

  setUpModal(mode = "add") {
    const modalEl = document.querySelector("dialog");

    if (mode === "add") {
      document.querySelector("#modal-delete-btn").classList.add("inactive");
    } else {
      document.querySelector("#modal-delete-btn").classList.remove("inactive");
    }

    const formEl = document.querySelector("dialog > form");
    formEl.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      if (mode === "add") {
        if (formProps["title"] in this.storage.getProjects()) {
          document.querySelector(".modal-warning").classList.remove("inactive");
          return;
        }

        const newProject = new Project(...Object.values(formProps));
        this.storage.addProject(newProject);
        this.painter.seeAllProjects(this.storage.getProjects());
      } else {
        const currProject = this.storage.getProject(document.querySelector(".project-name").textContent);
        if (formProps["title"] !== currProject.title && formProps["title"] in this.storage.getProjects()) {
          document.querySelector(".modal-warning").classList.remove("inactive");
          return;
        }
        const updatedProject = new Project(...Object.values(formProps));
        updatedProject.todos = currProject.todos;
        this.storage.removeProject(currProject.title);
        this.storage.addProject(updatedProject);
        this.painter.loadProject(updatedProject);
      }

      document.querySelector(".modal-warning").classList.add("inactive");
      formEl.reset();
      modalEl.close();
    };
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

  editProjectClick(e) {
    const modalEl = document.querySelector("dialog");
    document.querySelector("dialog #title").value = document.querySelector(".project-name").textContent;
    document.querySelector("dialog #desc").value = document.querySelector(".project-desc").textContent;
    document.querySelector("#modal-delete-btn").classList.remove("inactive");
    modalEl.showModal();
  }

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