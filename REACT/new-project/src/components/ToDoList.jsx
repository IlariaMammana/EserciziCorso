import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTodos } from "../provider/ToDoContext";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosError, fetchTodosLoading, fetchTodosSuccess } from "../store/slices/toDoSlice";

/* import { useFilteredTodos } from "../hooks/useFilteredTodos"; */

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const ToDoList = () => {
    const dispatch = useDispatch();
    const { todos, error, loading } = useSelector((state) => state.todos);
    /* const { todos, error, loading } = useTodos(); */
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    const inputRef = useRef(null);
    /* const filteredTodos = useFilteredTodos(todos || [], searchTerm); */

    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        if (!searchTerm) return todos;

        return todos.filter(todo =>
            todo.title.includes(searchTerm)
        );
    }, [todos, searchTerm]);

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearchParams({ search: value });
    }, [setSearchParams]);

    useEffect(() => {
        const fetchTodos = async () => {
            dispatch(fetchTodosLoading());
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Error during fetch data.');
                }
                const result = await response.json();
                dispatch(fetchTodosSuccess(result));
            } catch (err) {
                dispatch(fetchTodosError(err.message));
            }
        };

        fetchTodos();

        if (inputRef.current)
            inputRef.current.focus();
    }, [dispatch]);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Errore: {error}</div>;
    }

    /* useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [])

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Errore: {error}</div>;
    } */


    return (
        <>
            <div>
                <input type="text" placeholder="Filter todos..." value={searchTerm} onChange={handleSearchChange} ref={inputRef} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Dettagli</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredTodos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.userId}</td>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? '(completato)' : '(non completato)'}</td>
                                <td>
                                    <Link to={`tododetails/${todo.id}`}>Dettagli</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ToDoList;