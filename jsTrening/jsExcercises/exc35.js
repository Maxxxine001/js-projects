/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {

    let low = 0
    let high = nums.length - 1
    let mid = 0

    while(low < high) {
        mid = Math.floor((high + low) / 2)

        if(nums[mid] == target) {
            return mid
        }

        if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }

        
    }
    if(nums[low] == target) {
        return high
    } else if ( target < nums[low]) {
        return low 
    } else if ( target > nums[low]){
        return low + 1
    }
    
    
};
