import { useState } from "react";

const TextInput = () => {
    const [valueInput, setValueInput] = useState("");

    const handleChange = (event) =>  setValueInput(event.target.value)

    return (
        <>
            <label htmlFor="text-input">Inserisci il tuo testo:</label>
            <input type="text" value={valueInput} onChange={handleChange}/>
            <p>Valore attuale: {valueInput}</p>
        </>
    )
}

export default TextInput;