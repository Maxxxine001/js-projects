/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let stack = []
    let values = []

    while( root !==null || stack.length !== 0){
        while(root !== null) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        values.push(root.val)
        root = root.right

    }

    return values

    }

