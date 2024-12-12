import { Todo } from "./types";

const todos = [
    { id: 1, title: "Imparare TypeScript", completed: false },
    { id: 2, title: "Scrivere un articolo sullo sviluppo web", completed: true },
    { id: 3, title: "Creare un'applicazione React", completed: false },
    { id: 4, title: "Organizzare il calendario del corso", completed: true },
    { id: 5, title: "Rivedere il progetto finale degli studenti", completed: false },
  ];

function filterTodos<T extends Todo>(todo: T[], filterFn: (todo: T[]) => {}) {
    return filterFn(todo)
}

const filterFunction = (items: Todo[]) => {
    return items.filter(item => item.completed == true)
}

type PartialTodo = {
    [P in keyof Todo]?: Todo[P];
};

function updatePartialTodo(todoId: number, partialTodo: PartialTodo) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex >= 1) {
        const updatedTodo = { ...todos[todoIndex], ...partialTodo };
        todos[todoIndex] = updatedTodo;
        return updatedTodo;
    }
}

filterTodos(todos, filterFunction)
const updated = updatePartialTodo(3, { completed: true, title: "Creare un'applicazione React" });
console.log(updated);