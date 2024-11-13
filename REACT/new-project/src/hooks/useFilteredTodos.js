import { useEffect, useState } from 'react';

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredTodos(todos);
            return;
        }
        const results = todos.filter(todo =>
            todo.title.includes(searchTerm)
        );
        setFilteredTodos(results);
    }, [todos, searchTerm]);

    return filteredTodos;
};
