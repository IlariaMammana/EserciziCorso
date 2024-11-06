import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        alert(`${inputRef.current.value}`);
    }

    return (
        <>
            <input
                type="text" ref={inputRef} placeholder="Inserisci del testo..."/>
            <button onClick={handleButtonClick}>Mostra Valore Corrente</button>
        </>
    );
};

export default UncontrolledInput;