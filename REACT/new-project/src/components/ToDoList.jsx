import { useCallback, useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
/* import { useFilteredTodos } from "../hooks/useFilteredTodos"; */

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const ToDoList = () => {
    const { data: todos, error, loading } = useFetch(API_URL, { method: "GET" });
    const [searchTerm, setSearchTerm] = useState('');
    /* const filteredTodos = useFilteredTodos(todos || [], searchTerm); */

    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        if (!searchTerm) return todos;

        return todos.filter(todo =>
            todo.title.includes(searchTerm)
        );
    }, [todos, searchTerm]);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Errore: {error}</div>;
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Filter todos..." value={searchTerm} onChange={handleSearchChange}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ToDoList;