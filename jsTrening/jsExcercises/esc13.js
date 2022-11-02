/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanNumbers = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

    symbolsArray = s.split('')

    let total = 0
    let current
    let currentVal
    let next
    let nextVal

    for ( let i = 0; i < s.length; i++){
        current = symbolsArray[i]
        currentVal = romanNumbers[current]

        next = symbolsArray[i+1]
        nextVal = romanNumbers[next]

        if ( currentVal < nextVal){
            total -= currentVal
        } else {
            total += currentVal 
        }
        
    }

    return total

};