"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const User_1 = require("./User");
const todos = [];
const users = [];
const projects = [];
// Instanze User
const user1 = new User_1.User();
user1.id = 0;
user1.name = "Moira";
const user2 = new User_1.User();
user2.id = 1;
user2.name = "Marco";
const user3 = new User_1.User();
user3.id = 2;
user3.name = "Costanza";
const addTodo = (title, metadata) => {
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
        status: types_1.TodoStatus.Pending
    };
    todos.push(newTodo);
    return newTodo;
};
const assignTodoToUser = (todoId, userId) => {
    const todo = todos.find(t => t.id === todoId);
    const user = users.find(u => u.id === userId);
    if (todo && user) {
        todo.userId = userId;
        user.addTodo(todo);
        return todo;
    }
    return null;
};
const getUserTodos = (userId) => {
    return todos.filter(todo => todo.userId === userId);
};
const findError = (message) => {
    throw new Error(message);
};
const parseInput = (input) => {
    if (typeof input === 'string') {
        return input;
    }
    else if (typeof input === 'number') {
        return input.toString();
    }
    else {
        findError('Input deve essere una stringa o un numero');
    }
};
const updateTodo = (todoId, updates) => {
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), updates);
        return todos[todoIndex];
    }
    return null;
};
const getTodoSummary = (todo) => {
    return [todo.title, todo.completed];
};
/* const createProject = ( name: string, userIds: number[], todoTitles: string[]): Project => {
    const newProject : Project = {
        id: projects.length +1,
        name: name,
        users: users.filter(user => userIds.includes(user.id)),
        todos: todos.filter(todo => todoTitles.includes(todo.title))
    }
    projects.push(newProject);
    return newProject
} */
const updateTodoStatus = (todoId, status) => {
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex].status = status;
        return todos[todoIndex];
    }
    return null;
};
// Esempio di utilizzo:
const updatedStatusTodo = updateTodoStatus(1, types_1.TodoStatus.Completed);
console.log(updatedStatusTodo);
const newTodo = addTodo("Pagare Affitto");
/* console.log(newTodo);
console.log(todos); */
const assignedTodo = assignTodoToUser(1, 104);
/* console.log(assignedTodo);
console.log(todos); */
const userTodos = getUserTodos(104);
console.log(userTodos);
const updatedTodo = updateTodo(1, { completed: true, title: "Pagare Affitto Aggiornato" });
console.log(updatedTodo);
