import Todo from './todo';

export default class Project {
  name;
  description;
  todos;

  constructor(name, description = "") {
    this.name = name;
    this.description = description;
    this.todos = {}
  }

  // Maybe for use in storage
  // static replacer(key, value) {
  // return value;
  // }

  // static reviver(key, value) {
  //   return value;
  // }
}