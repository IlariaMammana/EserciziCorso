//salva valore nel Local
function saveValue(key, value) {
    localStorage.setItem(key, value);
    console.log(`Salvo il valore in localStorage: ${key} = ${value}`);
    sessionStorage.setItem(key, value);
    console.log(`Salvo il valore in sessionStorage: ${key} = ${value}`);
};

saveValue("username", "Acromantula")

//Recupera nel Local
function getValue(key) {
    const valueL = localStorage.getItem(key);
    console.log(`Il valore trovato nel localStorage è: ${key} = ${valueL}`);
    const valueS = sessionStorage.getItem(key);
    console.log(`Il valore trovato nel sessionStorage è: ${key} = ${valueS}`);
};

getValue("username");

//Rimuovi
function deleteValue(key) {
    localStorage.removeItem(key);
    console.log(`Ho rimosso il valore ${key} dal localStorage`);
    sessionStorage.removeItem(key);
    console.log(`Ho rimosso il valore ${key} dal sessionStorage`);
};

deleteValue("username");
getValue("username");