const sum = (callback) => {
    console.log("Eseguo la somma di due numeri...");
    let result = 5 + 9;
    console.log("La somma è: " + result);
    callback(result);
};

let raddoppiaSum = (result) => {
    console.log("Raddoppio la somma precedente...");
    let newResult = result * 2;
    console.log("La somma raddoppiata è: " + newResult);
};

sum(raddoppiaSum)