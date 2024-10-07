 
function sumCallback(num1, num2, callback) {
    const result = num1 + num2;
    console.log(result);
    callback(result);
}

function myCallback(result) {
    let newResult = result *2;
    console.log("Il nuovo risultato è: " + newResult);
    
}

sumCallback(9, 3, myCallback);