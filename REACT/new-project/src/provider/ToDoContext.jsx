import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const { data, error, loading } = useFetch(API_URL, { method: "GET" });

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    const updateTodo = (updatedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        );
    };

    return (
        <TodoContext.Provider value={{ todos, error, loading, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    return useContext(TodoContext);
};