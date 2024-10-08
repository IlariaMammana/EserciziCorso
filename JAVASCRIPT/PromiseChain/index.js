function stampaRisultato(check) {
    return new Promise((resolve, reject) => {
        console.log("Risultato in stampa: 1s");
        setTimeout(() => {
            if (check) {
                const num = 30;
                resolve(num);
            } else {
                reject("Errore nell'esecuzione.")
            }
        }, 1000);
    });
};


stampaRisultato(true)
    .then((num) => {
        return num * 2;
    })
    .then((result) => {
        return result +3;
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error(error.message);
    })