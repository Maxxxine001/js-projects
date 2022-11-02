/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    let xArray = x.toString().split('')
    let xArrayReversed = [...x]
    xArrayReversed.reverse()
    
    for(let i = 0; i < xArray.length; i++) {
        if(xArray[i] != xArrayReversed[i])
            return false
    }
    
    return true
};