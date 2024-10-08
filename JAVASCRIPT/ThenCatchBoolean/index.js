function booleanPromise(booleanValue) {
    return new Promise((resolve, reject) => {
        if (booleanValue) {
            resolve("Esecuzione termitata con successo!");
        } else {
            reject("Promise rifiutata.");
        }
    });
}

booleanPromise(true /* false */)
    .then((messaggio) => {
        console.log(messaggio);
    })
    .catch((errore) => {
        console.error(errore);
    });