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

    let ret = null
    let tmp = null

    if(list1.val < list2.val) {
        tmp = list1
        list1 = list1.next
        ret = tmp
        ret.next = null
    } else {
        tmp = list2
        list2 = list2.next
        ret = tmp
        ret.next = null
    }


    let curr = ret

    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            tmp = list1
            list1 = list1.next
            curr.next = tmp
            curr = curr.next
            tmp.next = null
        } else {
            tmp = list2
            list2 = list2.next
            curr.next = tmp
            curr = curr.next
            tmp.next = null
        }
    }

    if(list1 != null) {
        curr.next = list1
    } else {
        curr.next = list2
    }


    return ret
}