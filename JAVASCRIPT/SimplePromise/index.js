let stampaMessaggio = new Promise((resolve, reject) => {
    let check = true;
    console.log("Messaggio in stampa 2s");
    setTimeout(() => {
        if (check) {
            resolve("Hello World!");
        } else {
            reject("Errore nella stampa del messaggio")
        }
    }, 2000);
})

stampaMessaggio.then((messaggio) => {
    console.log(messaggio);
});