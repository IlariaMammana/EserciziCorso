import { useState } from "react";

const TextInput = () => {
    const [valueInput, setValueInput] = useState("");

    const handleInput = (event) =>  setValueInput(event.target.value)

    return (
        <>
            <label htmlFor="text-input">Inserisci il tuo testo:</label>
            <input type="text" value={valueInput} onInput={handleInput}/>
            <p>Valore attuale: {valueInput}</p>
        </>
    )
}

export default TextInput;