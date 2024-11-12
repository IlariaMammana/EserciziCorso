import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const ToDoList = () => {
    const { data: todos, error, loading } = useFetch(API_URL, { method: "GET" });

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Errore: {error}</div>;
    }

    return (
        <>
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
                        todos && todos.map((todo) => (
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