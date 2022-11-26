/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {

    let number

    for (let i = 0; i < nums.length; i++) {
        number ^= nums[i]
    }

    return number
};
