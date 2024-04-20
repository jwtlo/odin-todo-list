import Project from './project.js';

export default Storage = class {
  projects; // Key: project name, Value: project

  constructor() {
    this.projects = {};
  }

  // Checks if local storage has been used
  checkLocalStorage() {
    return localStorage.getItem("projects") !== null
  }

  loadFromLocalStorage() {
    const projectsStr = localStorage.getItem("projects")
    this.projects = JSON.parse(projectsStr)
  }

  storeToLocalStorage() {
    const projectsStr = JSON.stringify(this.projects)
    localStorage.setItem("projects", projectsStr)
  }

  // Stores (key: project name; value: project) pair, replacing the current project in storage if there is one
  addProject(newProject) {
    // requirement: projects have to have unique names
    this.projects[newProject.name] = newProject
  }

  removeProject(projectName) {
    delete projects[projectName]
  }

  // Project edited directly by controller
  // editProject(projectName, ...) {

  // }

  getProject(projectName) {
    return this.projects[projectName];
  }

  getProjects() {
    return this.projects
  }
}

// let s = new Storage();
// s.addProject(new Project("abc"," def"));
// window.s = s;
