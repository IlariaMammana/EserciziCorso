const promiseResolve = (check) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (check) {
            resolve("Risolta!");
          } else {
            reject("Rifiutata!");
          }
        }, 2000);
      });
};

const init = async (check) => {
    try {
    const result = await promiseResolve(check);
    console.log(result);
    } catch (error) {
        console.error(error);
    };
};

init(/* true */false)