console.log("prueva 1 " + (mayores([3, 6, -2, -5, 7, 3]) == 21));

console.log("prueva 2 " + (mayores([-1, -2]) == 2));
console.log("prueva 3 " + (mayores([-23, 4, -3, 8, -12]) == -12));
console.log("prueva 4 " + (mayores([-1, 100]) == -100));




function mayores(inputArray) {
    let numero = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > (numero)) {
            numero = inputArray[i] * inputArray[i + 1];
        }
    }
    return (numero);
}

