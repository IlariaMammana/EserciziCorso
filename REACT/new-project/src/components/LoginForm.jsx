import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" value={username} onInput={() => setUsername(event.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onInput={() => setPassword(event.target.value)} required />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm;