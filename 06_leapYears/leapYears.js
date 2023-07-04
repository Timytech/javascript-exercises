const leapYears = function(year) {
    //check if year is divisible by 100 first, then check 400
    //if year is not divisible by 100, check if year is divisible by 4
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));
console.log(leapYears(2020));

