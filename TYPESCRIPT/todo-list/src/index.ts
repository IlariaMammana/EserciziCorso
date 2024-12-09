import { Project, Todo, TodoStatus, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];
const projects: Project[] = [];

const addTodo = (title: string, metadata?: string|{} ) => {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false,
        status: TodoStatus.Pending
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

const updateTodo = (todoId: number, updates: Partial<Todo>): Todo | null => {
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...updates };
        return todos[todoIndex];
    }
    return null;
};

const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
};

const createProject = ( name: string, userIds: number[], todoTitles: string[]): Project => {
    const newProject : Project = {
        id: projects.length +1,
        name: name,
        users: users.filter(user => userIds.includes(user.id)),
        todos: todos.filter(todo => todoTitles.includes(todo.title))
    }
    projects.push(newProject);
    return newProject
}

const updateTodoStatus = (todoId: number, status: TodoStatus): Todo | null => {
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex].status = status;
        return todos[todoIndex];
    }
    return null;
};

// Esempio di utilizzo:
const updatedStatusTodo = updateTodoStatus(1, TodoStatus.Completed);
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