let numbers = [1,2,3,4,5];

numbers.forEach((number) => {
    console.log(number*2);
})

squaredNumbers = numbers.map(number => number * number)

console.log(squaredNumbers);
