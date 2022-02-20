let inp = "23617";
let newInp = Array.from(inp);
console.log(newInp);
let sum = newInp.reduce(
    (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
);
console.log(sum);