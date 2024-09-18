function outerFunction (x, initialValue) {
  const result = initialValue;
  function innerFunction (y) {
    return x + y;
  }
  return innerFunction;
}

const addSix = outerFunction(6);
console.log(addSix(10));
