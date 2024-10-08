function oneSecResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta.");
        }, 1000);
    });
}

function threeSecResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta.");
        }, 3000);
    });
}

Promise.all([
    oneSecResolve(),
    threeSecResolve(),
]).then((results) => {
    console.log(results);
})