//salva valore nel Session
function saveValue(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Salvo il valore: ${key} = ${value}`);
};

saveValue("username", "GerpolloDelBu")

// recupera nel Session
function getValue(key) {
    const value = sessionStorage.getItem(key);
    console.log(`Il valore trovato è: ${key} = ${value}`);
    return value;
};

getValue("username");

//Rimuovi
function deleteValue(key) {
    sessionStorage.removeItem(key);
    console.log(`Ho rimosso il valore: ${key}`);
};

deleteValue("username");
getValue("username");