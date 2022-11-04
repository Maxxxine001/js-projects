/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function getIndexes(array, el1, el2) {
    if(el1 == el2) {
        let firstIndex = array.indexOf(el1)
        return [firstIndex, array.indexOf(el2, firstIndex + 1)]
    } else {
        return [array.indexOf(el1), array.indexOf(el2)]
    }
}

 var twoSum = function(nums, target) {
    let dict = {}
    nums.forEach((number) => {
        if(!dict.hasOwnProperty(number)) {
            dict[number] = 0
        }
        dict[number]++
    })

    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        if(dict.hasOwnProperty(target - number)) {
            if(target - number == number) {
                if(dict[number] >= 2) {
                    return getIndexes(nums, number, number)
                } 
            } else {
                return getIndexes(nums, target - number, number)
            }
        }
    }
 }

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
