function threeSecResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta.");
        }, 3000);
    });
}

function oneSecResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta.");
        }, 1000);
    });
}

Promise.race([
    threeSecResolve(),
    oneSecResolve(),
]).then((results) => {
    console.log(results);
})