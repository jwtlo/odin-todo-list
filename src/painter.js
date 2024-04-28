import controller from "./controller.js";

class Painter {
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
      delBtnEl.textContent = "delete";
      delBtnEl.className = "delete-project-btn";
      delBtnEl.dataset.projectName = project.name;
      delBtnEl.addEventListener("click", controller.deleteProjectClick);

      const enterBtnEl = document.createElement("button");
      enterBtnEl.textContent = "enter";
      enterBtnEl.className = "enter-project-btn";
      enterBtnEl.dataset.projectName = project.name;
      enterBtnEl.addEventListener("click", controller.enterProjectClick);

      const btnsContainerEl = document.createElement("div");
      btnsContainerEl.className = "btns-container";
      btnsContainerEl.appendChild(delBtnEl);
      btnsContainerEl.appendChild(enterBtnEl);

      const projectEl = document.createElement("article");
      projectEl.className = "project-card";
      projectEl.appendChild(infoEl);
      projectEl.appendChild(btnsContainerEl);

      projectsContainerEl.appendChild(projectEl);
    }
    mainEl.appendChild(projectsContainerEl);

    const newProjectBtnEl = document.createElement("button");
    newProjectBtnEl.textContent = "New Project";
    newProjectBtnEl.className = "header-btn";
    newProjectBtnEl.addEventListener("click", controller.newProjectClick);
    const headerBtnContainer = document.querySelector(".header-btns-container-right");
    headerBtnContainer.innerHTML = "";
    headerBtnContainer.appendChild(newProjectBtnEl);
  }

  loadProject(project) {
    const mainEl = clear();

    const projectNameEl = document.createElement("h2");
    projectNameEl.textContent = project.name;
    projectNameEl.className = "project-name";

    const projectDescEl = document.createElement("p");
    projectDescEl.textContent = project.description;
    projectDescEl.className = "project-desc";

    const projectInfoEl = document.createElement("div");
    projectInfoEl.className = "project-info-container";
    projectInfoEl.appendChild(projectNameEl);
    projectInfoEl.appendChild(projectDescEl);

    const addTodoBtnEl = document.createElement("button");
    addTodoBtnEl.className = "add-todo-button";
    addTodoBtnEl.addEventListener("click", controller.addTodoClick);

    const todosContainerEl = document.createElement("div");
    todosContainerEl.className = "todos-container";

    for (const todo of project.todos) {
      todosContainerEl.appendChild(createTodo(todo));
    }

    const projectContainerEl = document.createElement("div");
    projectContainerEl.className = "project-container";
    projectContainerEl.appendChild(projectInfoEl);
    projectContainerEl.appendChild(addTodoBtnEl);
    projectContainerEl.appendChild(todosContainerEl);
  }

  createTodo(todo) {
    assert(todo);

    // title
    const titleLabelEl = document.createElement("label");
    titleLabelEl.textContent = "Title:";
    const titleInputEl = document.createElement("input");
    titleInputEl.type = "text";
    titleInputEl.name = "todo-title";
    titleInputEl.id = "todo-title";
    titleInputEl.class = "todo-title";
    titleInputEl.value = todo.title;

    const titleWrapperEl = document.createElement("div");
    titleWrapperEl.class = "todo-title-wrapper";
    titleWrapperEl.appendChild(titleLabelEl);
    titleWrapperEl.appendChild(titleInputEl);

    // desc
    const descLabelEl = document.createElement("label");
    descLabelEl.textContent = "Description:";
    const descInputEl = document.createElement("textarea");
    descInputEl.name = "todo-desc";
    descInputEl.id = "todo-desc";
    descInputEl.class = "todo-desc";
    descInputEl.cols = "30";
    descInputEl.rows = "5";
    descInputEl.textContent = todo.description;

    const descWrapperEl = document.createElement("div");
    descWrapperEl.class = "todo-desc-wrapper";
    descWrapperEl.appendChild(descLabelEl);
    descWrapperEl.appendChild(descInputEl);

    // dueDate
    const dueLabelEl = document.createElement("label");
    dueLabelEl.textContent = "Due:";
    const dueInputEl = document.createElement("input");
    dueInputEl.type = "text";
    dueInputEl.name = "todo-due";
    dueInputEl.id = "todo-due";
    dueInputEl.class = "todo-due";
    dueInputEl.value = todo.due;

    const dueWrapperEl = document.createElement("div");
    dueWrapperEl.class = "todo-due-wrapper";
    dueWrapperEl.appendChild(dueLabelEl);
    dueWrapperEl.appendChild(dueInputEl);

    // prio
    const prioLabelEl = document.createElement("label");
    prioLabelEl.textContent = "Priority:";
    const prioSelectEl = document.createElement("select");
    prioSelectEl.name = "todo-prio";
    prioSelectEl.id = "todo-prio";
    for (let i = 0; i <= 5; i++) {
      const optionEl = document.createElement("option");
      optionEl.value = i;
      optionEl.textContent = i;
      if (i == todo.prio) {
        optionEl.setAttribute("selected", "selected");
      }
      prioSelectEl.appendChild(optionEl);
    }
    const prioWrapperEl = document.createElement("div");
    prioWrapperEl.class = "todo-prio-wrapper";
    prioWrapperEl.appendChild(prioLabelEl);
    prioWrapperEl.appendChild(prioSelectEl);

    // notes
    const notesLabelEl = document.createElement("label");
    notesLabelEl.textContent = "Notes:";
    const notesInputEl = document.createElement("textarea");
    notesInputEl.name = "todo-notes";
    notesInputEl.id = "todo-notes";
    notesInputEl.class = "todo-notes";
    notesInputEl.cols = "30";
    notesInputEl.rows = "10";
    notesInputEl.textContent = todo.notes;

    const notesWrapperEl = document.createElement("div");
    notesWrapperEl.class = "todo-notes-wrapper";
    notesWrapperEl.appendChild(notesLabelEl);
    notesWrapperEl.appendChild(notesInputEl);

    // parents
    const fieldsetEl = document.createElement("fieldset");
    fieldsetEl.disabled = "disabled";
    const formEl = document.createElement("form");

    fieldsetEl.appendChild(titleWrapperEl);
    fieldsetEl.appendChild(descWrapperEl);
    fieldsetEl.appendChild(dueWrapperEl);
    fieldsetEl.appendChild(prioWrapperEl);
    fieldsetEl.appendChild(notesWrapperEl);
    formEl.appendChild(fieldsetEl);

    const editBtnEl = document.createElement("button");
    editBtnEl.class = "todo-edit-btn";
    editBtnEl.addEventListener("click", controller.editTodoClick);
    const editWrapperEl = document.createElement("div");
    editWrapperEl.class = "todo-edit-btn-wrapper";
    editWrapperEl.appendChild(editBtnEl);

    const todoEl = document.createElement("div");
    todoEl.appendChild(formEl);
    todoEl.appendChild(editWrapperEl);

    return todoEl;
  }
}

export default new Painter();

{
  /* <div class="todo-card">
  <form>
    <fieldset>
      <div class="todo-title-wrapper">
        <label for="todo-title">Title:</label>
        <input
          type="text"
          id="todo-title"
          name="todo-title"
          class="todo-title"
        />
      </div>
      <div class="todo-desc-wrapper">
        <label for="todo-desc">Description:</label>
        <textarea name="todo-desc" id="todo-desc" cols="30" rows="5"></textarea>
      </div>
      <div class="todo-due-wrapper">
        <label for="todo-due">Due:</label>
        <input
          type="text"
          id="todo-due"
          name="todo-due"
          class="todo-due"
        />
      </div>
      <div class="todo-prio-wrapper">
        <label for="todo-prio">Priority:</label>
        <select name="todo-prio" id="todo-prio">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="todo-notes-wrapper">
        <label for="todo-notes">Notes:</label>
        <textarea
          name="todo-notes"
          id="todo-notes"
          cols="30"
          rows="10"></textarea>
      </div>
    </fieldset>
  </form>
  <div class="todo-edit-btn-wrapper">
    <button class="todo-edit-btn">edit</button>
  </div>
</div>; */
}
