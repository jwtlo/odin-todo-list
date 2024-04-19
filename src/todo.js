export default class Todo {
  title;
  description;
  due;
  priority;
  notes;

  constructor(title, description, due, priority, notes) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
  }
}
