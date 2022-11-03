/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {

    let k = nums.length
    let i = 0
    while(i < nums.length - 1) {
        if( nums[i] === nums[i+1]){
            nums.splice(i, 1) 
            k--
        } else {
            i++
        }
    }

    return k
};

let nums = [1,1,2]
let k = removeDuplicates(nums)
console.log(nums, k )