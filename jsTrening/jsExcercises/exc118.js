
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {

    let result = []
    for( let i = 0, l = numRows; i < l; i++) {

        let array = []
        array[0] = array[i] = 1

        for( let j = 1; j < i; j++) {
            array[j] = result[i - 1][j] + result[i - 1][j - 1];
        }

        result[i] = array

    }
    return result;

}