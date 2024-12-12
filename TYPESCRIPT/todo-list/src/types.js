"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
/* export interface TodoWithMetadata extends Todo {
    metadata: string|{},
}

export interface User {
    id: number,
    name: string,
    email?: string
    readonly todos: ReadonlyArray<Todo>;
}

export interface Project {
    id: number;
    name: string;
    users: User[];
    todos: Todo[];
} */
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Pending"] = 0] = "Pending";
    TodoStatus[TodoStatus["Aborted"] = 1] = "Aborted";
    TodoStatus[TodoStatus["Completed"] = 2] = "Completed";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
