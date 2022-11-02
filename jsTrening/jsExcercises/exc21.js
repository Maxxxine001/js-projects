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

    let ret = {val: 0, next: null}
    let curr = ret

    if(list1.val < list2.val) {
        ret.val = list1.val
        list1 = list1.next
    } else {
        ret.val = list2.val
        list2 = list2.next
    }

    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            curr.next = {val: list1.val, next: null}
            curr = curr.next
            list1 = list1.next
        } else {
            curr.next = {val: list2.val, next: null}
            curr = curr.next
            list2 = list2.next
        }
    }

    if(list1 != null) {
        curr.next = list1
    } else {
        curr.next = list2
    }


    return ret;
};