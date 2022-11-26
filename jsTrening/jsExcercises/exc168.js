/**
 * @param {number} n
 * @return {string}
 */
 var convertToTitle = function(n) {

    let result = ''
    
    while (n) {

        let code = String.fromCharCode( (n - 1) % 26 + 'A'.charCodeAt() )
        n = Math.floor((n - 1) / 26)
        result = code + result
    }

    return result

};