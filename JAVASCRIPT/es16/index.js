let parole = []

for (let i = 0; i < 5; i++) {
  parole.push(prompt("inserisci parole"));
}
console.log(parole);

for (let i = 0; i < parole.length ; i++) {
    if (parole[i].length % 2 != 0) {
    console.log(parole[i])
  }
}
