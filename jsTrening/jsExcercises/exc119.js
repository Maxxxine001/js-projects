
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {

    let result = []

    for( let i = 0; i < rowIndex + 1; i++) {

        let array = []
        array[0] = array[i]  = 1

        for( let j = 1; j < i; j++) {
            array[j] = result[i - 1][j - 1] + result[i - 1][j]
        }

        result.push(array)
    }

    return result[rowIndex]

}