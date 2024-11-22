import { useParams } from "react-router-dom"
import { useTodos } from "../provider/ToDoContext";
import { useEffect, useState } from "react";

const ToDoDetails = () => {
    const { id } = useParams();
    const { todos, error } = useTodos();
    const [todoDetails, setTodoDetails] = useState(null);

    useEffect(() => {
        if (todos) {
            const selectedTodo = todos.find(todo => todo.id === parseInt(id));
            setTodoDetails(selectedTodo);
        }
    }, [todos, id]);

    if (error) {
        return <div>Errore: {error}</div>;
    }

    if (!todoDetails) {
        return <div>Caricamento dettagli...</div>;
    }

    return (
        <div>
            <h1>Dettagli del To-Do</h1>
            <p>User Id: {todoDetails.userId}</p>
            <p>Id: {todoDetails.id}</p>
            <p>Title: {todoDetails.title}</p>
            <p>Completed: {todoDetails.completed ? 'Sì' : 'No'}</p>
        </div>
    )
}

export default ToDoDetails