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


filterTodos(todos, filterFunction)