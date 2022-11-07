/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    let array = s.split(" ")
    let k = 0
    for ( let i = array.length - 1; i >= 0; i--){
        if(array[i].length != 0)
            return array[i].length
            
    }

   
    
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))