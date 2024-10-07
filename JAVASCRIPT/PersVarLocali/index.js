function outerFunction(x, initialValue) {
  let result = initialValue;
  function innerFunction(y) {
      result += y;
      return result;
  }
  return innerFunction;
}

const addToFour = outerFunction(2, 4);
console.log(addToFour(8));