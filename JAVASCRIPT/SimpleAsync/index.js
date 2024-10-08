const messaggioInRitardo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Messaggio stampato in ritardo.");
        }, 2000);
    });
}    

const stampaMessaggio = async () => {
        let messaggio = await messaggioInRitardo();
        console.log(messaggio);
}

stampaMessaggio()