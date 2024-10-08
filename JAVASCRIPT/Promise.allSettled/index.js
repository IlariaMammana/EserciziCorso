function firstResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta.");
        }, 3000);
    });
}

function secondResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta.");
        }, 1000);
    });
}

function rejectFun() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Promessa rifiutata");
        }, 500);
    });
}

Promise.allSettled([
    firstResolve(),
    secondResolve(),
    rejectFun(),
]).then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Successo:", result.value);
        } else {
            console.log("Errore:", result.reason);
        }
    });
})