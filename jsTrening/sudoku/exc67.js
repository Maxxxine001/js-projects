    /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    var result = "",
        rest = 0;
  
    while(a || b || rest){
      let sum = +a.slice(-1) + +b.slice(-1) + rest;
  
      if( sum > 1 ){  
        result = sum%2 + result;
        rest = 1;
      }
      else{
        result = sum + result;
        rest = 0;
      }
      
      a = a.slice(0, -1)
      b = b.slice(0, -1)
    }
    
    return result;
}
