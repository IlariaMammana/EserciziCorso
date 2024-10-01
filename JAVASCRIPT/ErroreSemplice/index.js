function divide(dividendo, divisore) {
    try {
        if (divisore === 0) {
            throw new Error("Non è consentito dividere per 0.");
        }
        const risultato = dividendo / divisore;
        console.log(`Risultato operazione: ${risultato}`);
    } catch (errore) {
        console.error(`${errore.message}`);
    }
}

divide(14,2);
divide(8,0)

