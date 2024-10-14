//salva valore nel Local
function saveValue(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log(`Salvo il valore: ${key} = ${value}`);
};

saveValue("username", "Acromantula")

//Recupera nel Local
function getValueL(key) {
    const valueL = localStorage.getItem(key);
    console.log(`Il valore trovato è: ${key} = ${valueL}`);
    return valueL;
};

getValueL("username");

function getValueS(key) {
    const valueS = sessionStorage.getItem(key);
    console.log(`Il valore trovato è: ${key} = ${valueS}`);
    return valueS;
};

getValueS("username");

//Rimuovi
function deleteValue(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
    console.log(`Ho rimosso il valore: ${key}`);
};

deleteValue("username");
getValueL("username");
getValueS("username");