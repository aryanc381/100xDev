/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(items = []) {
    this.items = [];
  }

  add(todo) {
    this.items.push(todo);
    return this.items;
  }

  remove(indexOfTodo) {
    this.items.splice(indexOfTodo, 1);
    return this.items;
  }

  update(index, updatedTodo) {
  if (index >= 0 && index < this.items.length) {
    this.items[index] = updatedTodo;
  }
  return this.items;
  }

  getAll(items) {
    return this.items;
  }

  get(index) {
  if (index >= 0 && index < this.items.length) {
    return this.items[index];
  }
  return null;
  }

  clear() {
    this.items = []
    return this.items;
  }
}

module.exports = Todo;
