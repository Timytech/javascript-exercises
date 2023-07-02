const repeatString = function(str, num) {
    let str2 = '';
    for(let i = 1; i <= num; i++){
        str2 += str;
    }
    if(num < 0){
        return 'ERROR'
    }
    return str2;
};
repeatString('BBB', -1)

// Do not edit below this line
module.exports = repeatString;
