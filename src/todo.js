export default class Todo {
  title;
  description;
  due;
  priority;
  notes;
  id;

  constructor({ title = "", description = "", due = "", priority = 0, notes = "" } = {}) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
    this.id = Math.random().toString(16).slice(2);
  }
}
