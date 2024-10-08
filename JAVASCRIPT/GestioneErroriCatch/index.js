function numAfterOneSec() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 100);
        if (num >= 50) {
            resolve(num);
        } else {
            reject(`Il numero è minore di 50`);
        };
    });
}

numAfterOneSec(true)
    .then((num) => {
        return num + 1;
    })
    .then((result) => {
        console.log(`Il risultato è ${result}`);
    })
    .catch(error => {
        console.error(error);
        console.log("Gestione dell'errore completata.");
    });