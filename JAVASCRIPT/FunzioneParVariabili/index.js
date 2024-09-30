function sum(...parametriVariabili) {
  return parametriVariabili.reduce((accumulatore, valoreAttuale) => accumulatore + valoreAttuale, 0);
}

console.log(sum(3, 5, 63));
console.log(sum(36, 500, 89, 1200));
console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum(15));
