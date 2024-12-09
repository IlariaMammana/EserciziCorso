import { Todo } from "./types";

export class User {
    id: number | undefined;
    name: string | undefined;
    email?: string | undefined
    todos: Todo[]

    constructor() {
        this.id = 0;
        this.name = "";
        this.email = ""
        this.todos = []
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}