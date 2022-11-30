/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const count = {}
    
    for(const num of nums) {
        if(count[num] == undefined) {
            count[num] = 1
        } else {
            count[num]++
        }
    }
    
    for(const key of Object.keys(count)) {
        if(count[key] == 1) {
            return key
        }
    }
};