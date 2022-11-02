/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    prefixLenght = 0
    shortesStringLenght = 201
    for(let i = 0; i < strs.length; i++) {
        shortesStringLenght = Math.min(shortesStringLenght, strs[i].length)
    }
    ok = true
    for(let i = 0; i < shortesStringLenght && ok; i++) {
        for(let j = 0; j < strs.length && ok; j++) {
            if(strs[j][i] != strs[0][i])
                ok = false
        } 
        if(ok)
            prefixLenght++
    }
    return strs[0].substring(0, prefixLenght)


};
