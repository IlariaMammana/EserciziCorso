function numAfterOneSec(check) {
    return new Promise((resolve, reject) => {
        console.log("Verifica 1s");
        setTimeout(() => {
            if (check) {
                const num = Math.floor(Math.random() * 100);
                // Ho cercato : come generare numeri random da 0 a 100
                // trovato qui: https://www.codingcreativo.it/math-random-in-javascript/#:~:text=Quindi%20per%20generare%20i%20numeri,poi%20con%20la%20funzione%20Math.
                resolve(num);
            } else {
                reject("Errore nell'esecuzione")
            }
        }, 1000);
    });
}

numAfterOneSec(true)
    .then((num) => {
        if (num % 2 === 0) {
            return num * 5;
        } else {
            return num + 1;
        }
    })
    .then((result) => {
        console.log(`Il risultato è ${result}`);
    })
    .catch((error) => {
        console.error(error);
    });