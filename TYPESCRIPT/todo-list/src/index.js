"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
const users = [];
const addTodo = (title) => {
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
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
const newTodo = addTodo("Pagare Affitto");
/* console.log(newTodo);
console.log(todos); */
const assignedTodo = assignTodoToUser(1, 104);
/* console.log(assignedTodo);
console.log(todos); */
const userTodos = getUserTodos(104);
console.log(userTodos);
