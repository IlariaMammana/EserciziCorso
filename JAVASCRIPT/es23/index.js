function outerFunction (x, initialValue) {
  const result = initialValue;
  function innerFunction (y) {
    return x + y;
  }
  return innerFunction;
}

const result = outerFunction(3)(4)

console.log(result);

