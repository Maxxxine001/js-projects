/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} current
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    
    if(head == null)
        return null

    let current = head
    let lastValue = current.val;
    

    while (current.next != null) {
        if (current.next.val == lastValue) {
            current.next = current.next.next
        } else {
            current = current.next
            lastValue = current.val
        }
    }
    return head
};