function stampaMessaggio(check) {
    return new Promise((resolve, reject) => {
        console.log("Messaggio in stampa 2s");
        setTimeout(() => {
            if (check) {
                resolve("Hello World!");
            } else {
                reject("Errore nella stampa del messaggio")
            }
        }, 2000);
    });
};

stampaMessaggio(false)
    .then((messaggio) => {
        console.log(messaggio);
    })
    .catch((errore) => {
        console.error(errore);
    });