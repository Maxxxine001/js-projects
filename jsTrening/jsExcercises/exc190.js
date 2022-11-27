/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {

    let result = 0;
  
    for (let i = 0; i < 31; i++) {
      result <<= 1
      result |= n & 1
  
      n >>>= 1
      console.log(result, n)
    }
  
    return Math.abs(result)
    
  };
  
