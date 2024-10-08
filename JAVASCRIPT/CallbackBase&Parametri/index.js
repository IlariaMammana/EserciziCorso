const num1 = 12;
const num2 = 4;

const sumCallback = (num1, num2, callback) => {
    let result = num1 + num2;
    console.log("Risultato della somma: " + result);
    callback(result);
};

sumCallback(num1, num2, (result) => {
    let newResult = result * 2;
    console.log("Il risultato finale è: " + newResult);
});