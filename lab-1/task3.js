const numbers = [2, 3, 6, 1, 7];
let result = 0;
const newArr = numbers.map(myFunction);


function myFunction(num) {

    if (num % 2 === 0) {
        result = result + num;
    }
    return result;

}

myFunction(newArr);
console.log(result);