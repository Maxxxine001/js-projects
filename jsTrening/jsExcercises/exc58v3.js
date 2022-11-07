/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    let end = s.length - 1

    while(s[end] == ' ') {
        end--;
        if(end < 0)
            return 0
    }

    let start = end
    while(s[start] != ' ' && start >= 0) {
        start--
    }

    return end - start
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))