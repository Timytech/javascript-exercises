const sumAll = function(num1, num2) {
    let sum = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR";

    } else if(Number.isInteger(num1) && Number.isInteger(num2)){
        let a;
        let b;
        (num1 < num2) ? a = num1 : a = num2;
        (num1 > num2) ? b = num1 : b = num2;
        for(let i = a; i <= b; i++){
            sum += i;
        }
    } else{
        return "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));
console.log(sumAll([12, 90], ["HI", 7]));