/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    let rest = true
    let index = digits.length - 1
    while(rest && index >= 0) {
        if(digits[index] == 9) {
            digits[index] = 0
        } else {
            digits[index] += 1
            rest = false
        }
        index--
    }

    if(rest) {
        digits.unshift(1)
    }
    return digits  
};

console.log(plusOne([9]))
