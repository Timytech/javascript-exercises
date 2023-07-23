const fibonacci = function(number) {
    let x = parseInt(number);
    if(x < 0) return "OOPS";

    const fibSequence = [0, 1];
    for(let i = 1; i < x; i++){
        fibSequence.push(fibSequence[i] + fibSequence[i-1]);
    }
    return fibSequence[x];
};

// Do not edit below this line
module.exports = fibonacci;
