/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function (p, q) {
    function check(p, q) {
        if (!p || !q) return p === q;
        if (p.val !== q.val) return false;
        return check(p.left, q.left) && check(p.right, q.right);
    }
    return check(p, q);
};

console.log(isSameTree([1,2,3,4,5,6], [1,2,3,4,5]))