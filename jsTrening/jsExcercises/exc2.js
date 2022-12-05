/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    let num1 = 0
    let num2 = 0
    let head = l1
    let head2 = l2
    let i = 1

    console.log(head.val)

    while( head.next !== null){
        num1 = head[1]
        i *= 10
        head = head.next
    }

    let j = 0

    while( head2.next !== null){
        num1 += head2.val * j
        head2 = head2.next
        j *= 10
    }


};

addTwoNumbers([2,4,3],[5,6,4])