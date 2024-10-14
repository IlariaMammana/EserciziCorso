// Salvo un cookie
function saveCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Per salvare il cookie
    console.log(`Salvo il cookie: ${name}=${value} (scade fra ${days} giorni)`);
};

saveCookie("nickname", "Aragog89", 10);

// Recupero un cookie
function getCookie(name) {
    const cName = name + "=";
    const ca = document.cookie.split(';'); // Cookies totali
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        if (c.indexOf(cName) == 0) {
            console.log(`Il cookie recuperato è: ${c.substring(cName.length, c.length)}`); // Restituisce il valore del cookie
            return c.substring(cName.length, c.length);
        }
    }
};

getCookie("nickname");

// Rimuovo un cookie
function removeCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;"; // Max-Age Rimuove il cookie
    console.log(`Ho rimosso il cookie: ${name}`);
};

removeCookie("nickname");
getCookie("nickname");