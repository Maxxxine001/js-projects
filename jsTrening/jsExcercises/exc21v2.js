/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {


    if(list1 == null)
        return list2
    if(list2 == null)
        return list1

    let list2prev = null
    let list2curr = list2
    let ret = list1

    while(list2curr != null && list1.val > list2curr.val) {
        list2prev = list2curr
        list2curr = list2curr.next
    }

    if(list2prev != null) {
        list2prev.next = list1
        ret = list2
    }
    
    while(list2 != null) {
        if(curr.val > list2) {

        }
    }
};