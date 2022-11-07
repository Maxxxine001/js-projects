/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let s = "   fly me   to   the moon  "
    let k = 0

    for( let i = 0; i < s.length - k; i++){
        if(s[i] === " "){
            s.replace(" ", "")
            k++
        }
    }

    return s[s.length - 1].length
};