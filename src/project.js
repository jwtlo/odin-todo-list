import Todo from './todo';

export default class Project {
  name;
  description;
  todos;

  constructor(name, description="") {
    this.name = name;
    this.description = description;
    this.todos = []
  }
}