const expenses = [100, 15, 250, 30, 89.78, 29.70, 5, 398.64, 600]

const sumExpenses = expenses.reduce((acumulator, actualValue) => {
    return acumulator + actualValue;
}, 0);

console.log(sumExpenses);

const words = ["banana", "apple", "cherry", "date"]

words.sort()

console.log(words);

const numArr = [7, 28, 34, 67, 89, 92]

const sorted = numArr.sort((a, b) => a - b)

console.log(sorted);

const strings = ["suricato", "rinoceronte", "anatra", "cane", "zanzara"]

const sortedStrings = strings.sort()

const sortedReverse = []

for (let index = sortedStrings.length - 1; index >= 0; index--) {
  sortedReverse.push(sortedStrings[index])
}

console.log(sorted);

console.log(sortedReverse);