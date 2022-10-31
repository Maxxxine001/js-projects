/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    numsCopy = []
    for(let i = 0; i < nums.length; i++) {
        numsCopy.push([nums[i], i])
    }
    numsCopy.sort((a,b) => a[0]-b[0])
    let leftPointer = 0
    let rightPointer = nums.length - 1

    while (leftPointer != rightPointer) {
        let sum = numsCopy[leftPointer][0] + numsCopy[rightPointer][0]

        if (sum > target){
            rightPointer--
        }
        else if (sum < target ) {
            leftPointer++
        }
        else if (sum == target){
            return [numsCopy[leftPointer][1], numsCopy[rightPointer][1]]
        }

    }
 }
console.log(twoSum([3,2,4], 6))

