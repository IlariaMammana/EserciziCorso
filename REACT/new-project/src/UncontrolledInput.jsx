const UncontrolledInput = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

      };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Inserisci qualcosa:
                    <input type="text" />
                </label>
                <button type="submit">Invia</button>
            </form>
        </>
    )
}

export default UncontrolledInput;