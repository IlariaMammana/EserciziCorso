let numbers = [15, 1994, 15, 1, 2024];

let [birthDay, birthYear, ...altro] = numbers;

console.log("Se Ilaria è nata il " + birthDay + " gennaio " + birthYear + ": quanti anni avrà il " + altro + "?" );

