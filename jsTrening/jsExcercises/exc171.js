
/**
 * @param {string} s
 * @return {number}
 */
 var titleToNumber = function(s) {
    
    let total = 0
    let base = 26
  
    for (let i = 0; i < s.length; i++) {
        let pow = s.length - i - 1
        let num = getNumber(s[i])
  
      total += Math.pow(base, pow) * num
    }
  
    return total;
  };
  
  var getNumber = function(c) {
    let charCodeOfA = "A".charCodeAt(0)
    let charCodeOfTarget = c.charCodeAt(0)
  
    return charCodeOfTarget - charCodeOfA + 1
  };