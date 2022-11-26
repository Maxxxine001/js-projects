/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

    let faster = head
    let slower = head

    if(head == null){
        return false
    }

    while (faster && faster.next) {

        faster = faster.next.next
        slower = slower.next

        if (slower === faster){
            return true
        }
    }

    return false
};