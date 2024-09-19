const expenses = [100, 15, 250, 30, 89.78, 29.70, 5, 398.64, 600]

const sumExpenses = expenses.reduce((acumulator, actualValue) => {
    return acumulator + actualValue;
}, 0);

console.log(sumExpenses);

const words = ["banana", "apple", "cherry", "date"]

words.sort()

console.log(words);
