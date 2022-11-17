/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const merge = function(nums1, m, nums2, n) {
    let p = m - 1
    let q = n - 1
    let k = n + m - 1
    
    while (q >= 0) {
        if (p < 0 || nums1[p] <= nums2[q]) {
        nums1[k--] = nums2[q--]
        } else {
        nums1[k--] = nums1[p--]
        }
    }
}