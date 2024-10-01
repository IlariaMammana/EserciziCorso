function messaggio() {
    console.log('Stampo ogni secondo');
}

const intervallo = setInterval(messaggio, 1000);

setTimeout(() => {
    clearInterval(intervallo);
    console.log('Mi interrompo dopo 5 secondi.');
}, 5000);