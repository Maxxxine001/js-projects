
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  let majorityEl = 0
  let counter = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[majorityEl]) {

      counter++

    } else {
      counter--
    }

    if (counter === 0) {
      majorityEl = i
      counter = 1
    }
    
  }

  return nums[majorityEl]

};
