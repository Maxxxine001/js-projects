/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  
    let digits = n.toString().split('')
    let result = 0

    while(digits.length > 0 ){

        for( let i = 0; i < digits.length; i++){
            result += (+digits[i])*(+digits[i])
        }

        digits = result.toString().split('')

        if( digits.length == 1 && result == 1){
            return true
        }

        if ( digits.length == 1 && result != 1){
            return false
        }

        
        result = 0
    }

    
};

console.log(isHappy(1111111))

// 1111111
// 7
// 49
