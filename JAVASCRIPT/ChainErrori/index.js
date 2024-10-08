function numRandom() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 100);
        if (num % 2 === 0) {
            resolve(num);
        } else {
            reject(`Il numero è dispari`);
        };
    });
}

numRandom()
    .then((num) => {
        return num + 2;
    })
    .then((result) => {
        if (result >= 50) {
            return console.log(`Il risultato è maggiore/uguale a 50: ${result}`);
            ;
        } else {
            return console.log(`Il risultato è minore di 50: ${result}`);
        }
    })
    .catch(error => {
        console.error(error);
        console.log("Gestione dell'errore completata.");
    });
