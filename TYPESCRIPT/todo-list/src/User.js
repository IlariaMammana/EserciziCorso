"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
}
exports.User = User;
