import Controller from "./controller.js";

export default class Painter {
  
  clear() {
    const mainEl = document.querySelector("main");
    mainEl.innerHTML = "";
    return mainEl;
  }

  seeAllProjects(projects) {
    const mainEl = this.clear();
    const projectsContainerEl = document.createElement("div");
    projectsContainerEl.className = "project-cards-container";
    
    for (const project of Object.values(projects)) {

      const nameEl = document.createElement("h3");
      nameEl.textContent = project.name;
      nameEl.className = "project-card-name";

      const descEl = document.createElement("p");
      descEl.textContent = project.description;
      descEl.className = "project-card-desc";

      const infoEl = document.createElement("div");
      infoEl.className = "project-card-info-container";
      infoEl.appendChild(nameEl);
      infoEl.appendChild(descEl);


      const delBtnEl = document.createElement("button");
      delBtnEl.textContent = "delete"
      delBtnEl.className = "delete-project-btn";
      delBtnEl.addEventListener("click", Controller.deleteProjectClick);

      const enterBtnEl = document.createElement("button");
      enterBtnEl.textContent = "enter"
      enterBtnEl.className = "enter-project-btn";
      enterBtnEl.addEventListener("click", Controller.enterProjectClick);

      const btnsContainerEl = document.createElement("div");
      btnsContainerEl.className = "btns-container";
      btnsContainerEl.appendChild(delBtnEl);
      btnsContainerEl.appendChild(enterBtnEl);


      const projectEl = document.createElement("article");
      projectEl.className = "project-card";
      projectEl.dataProjectName = project.name;
      projectEl.appendChild(infoEl);
      projectEl.appendChild(btnsContainerEl);
      
      projectsContainerEl.appendChild(projectEl);
    }
    mainEl.appendChild(projectsContainerEl);

    const newProjectBtnEl = document.createElement("button");
    newProjectBtnEl.textContent = "New Project";
    newProjectBtnEl.className = "header-btn";
    newProjectBtnEl.addEventListener("click", Controller.newProjectClick);
    const headerBtnContainer = document.querySelector(".header-btns-container");
    headerBtnContainer.appendChild(newProjectBtnEl);
  }

  loadProject(project) {
    
  }
}