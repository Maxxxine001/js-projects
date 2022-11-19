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
 var isSameTree = function(p, q) {
    let stack = []
    let stack1 = []
    let values = []
    let values1 = []
    let score  = 0

    while( p !==null || stack.length !== 0){
        while(p !== null) {
            stack.push(p)
            p = p.left
        }

        p = stack.pop()
        values.push(p.val)
        p = p.right

    }

    while( q !==null || stack1.length !== 0){
        while(q !== null) {
            stack1.push(q)
            q = q.left
        }

        q = stack1.pop()
        values1.push(q.val)
        q = q.right

    }

    if(stack.length !== stack1.length){
        score = 0
    }

    while( stack.length !== 0){
        if( stack.top() == stack1.top()){
            stack.push()
            stack1.push()
            score = 1
        } else {
            score = 0
            break
        }
    }

    return Boolean(score)
};