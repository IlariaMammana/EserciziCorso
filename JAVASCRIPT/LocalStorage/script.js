//salva valore nel Local
function saveValue(key, value) {
    localStorage.setItem(key, value);
    console.log(`Salvo il valore: ${key} = ${value}`);
};

saveValue("username", "GerpolloDelBu")

//Recupera nel Local
function getValue(key) {
    const value = localStorage.getItem(key);
    console.log(`Il valore trovato è: ${key} = ${value}`);
    return value;
};

getValue("username");

//Rimuovi
function removeValue(key) {
    localStorage.removeItem(key);
    console.log(`Ho rimosso il valore: ${key}`);
};

removeValue("username");
getValue("username");