const oneSecResolve = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta.");
        }, 1000);
    });
}

const threeSecResolve = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta.");
        }, 3000);
    });
}

const initFunctions = async () => {
    const firstPromise = await oneSecResolve();
    console.log(firstPromise);
    const secondPromise = await threeSecResolve();
    console.log(secondPromise);
}

initFunctions()
