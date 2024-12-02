import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = []

const addTodo = (title: string) => {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
};

const assignTodoToUser = (todoId: number, userId: number): Todo | null => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.userId = userId;
        return todo;
    }
    return null;
};

const newTodo = addTodo("Pagare Affitto");
console.log(newTodo);
console.log(todos);

const assignedTodo = assignTodoToUser(1, 104);
console.log(assignedTodo);
console.log(todos);

