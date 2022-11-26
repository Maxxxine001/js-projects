/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
 var dfs = function (result, node) {

    if (node == null){
        return
    }

    result.push(node.val)
    dfs(result, node.left)
    dfs(result, node.right)

}