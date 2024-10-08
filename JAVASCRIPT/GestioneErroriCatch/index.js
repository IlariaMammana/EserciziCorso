function errorFunction() {
    return new Promise((_, reject) => {
        reject(`Errore nell'esecuzione.`);
    })
}

errorFunction()
    .catch(error => {
        console.error(error);
        console.log("Gestione dell'errore completata.");
    });