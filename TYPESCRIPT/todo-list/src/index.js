"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
const users = [];
const projects = [];
const addTodo = (title, metadata) => {
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
    };
    todos.push(newTodo);
    return newTodo;
};
const assignTodoToUser = (todoId, userId) => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.userId = userId;
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
const createProject = (name, userIds, todoTitles) => {
    const newProject = {
        id: projects.length + 1,
        name: name,
        users: users.filter(user => userIds.includes(user.id)),
        todos: todos.filter(todo => todoTitles.includes(todo.title))
    };
    projects.push(newProject);
    return newProject;
};
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
const newProject = createProject("Progetto 1", [104, 107], ["Pagare affitto"]);
console.log(newProject);
console.log(projects);
