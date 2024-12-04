import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = []

const addTodo = (title: string, metadata?: string|{} ) => {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false,
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

const getUserTodos = (userId: number): Todo[] => {
    return todos.filter(todo => todo.userId === userId);
};

const findError = (message: string): never => {
    throw new Error(message);
}

const parseInput = (input: unknown) => {
    if (typeof input === 'string') {
        return input;
    } else if (typeof input === 'number') {
        return input.toString();
    } else {
        findError('Input deve essere una stringa o un numero');
    }
}

const newTodo = addTodo("Pagare Affitto");
/* console.log(newTodo);
console.log(todos); */

const assignedTodo = assignTodoToUser(1, 104);
/* console.log(assignedTodo);
console.log(todos); */

const userTodos = getUserTodos(104);
console.log(userTodos);