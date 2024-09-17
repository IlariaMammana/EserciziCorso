const numbers = [1, 2, 3, 4, 5]

let lunghezza = numbers.length;
let meta = Math.floor(lunghezza / 2);

for (let i = 0; i < meta; i++) {
  let temp = numbers[i];
  numbers[i] = numbers[lunghezza - 1 - i];
  numbers[lunghezza - 1 - i] = temp;
}

console.log(numbers);
