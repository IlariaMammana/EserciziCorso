export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    /* metadata?: any, */
}

export interface TodoWithMetadata extends Todo {
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
}