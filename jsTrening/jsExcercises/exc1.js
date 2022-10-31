/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i]
        for ( let j = 0; j < nums.length; j++){
                if ( tmp === nums[j] && i !== j){
                    
                    return [i , j]
                }
            }
        }
};

console.log(twoSum([3,2,4], 6))