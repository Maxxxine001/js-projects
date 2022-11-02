/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    let bracets = {'(': ')', '[': ']', '{': '}'}
    for (let i = 0; i < s.length; i++ ){
        if(['(', '{', '['].includes(s[i])) {
            stack.push(s[i])
        } else {
            if(stack.length == 0 || bracets[stack.pop()] != s[i])
                return false
        }
    }
    if(stack.length > 0)
        return false
    return true
    
};