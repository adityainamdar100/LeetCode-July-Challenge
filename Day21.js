/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head===null)
        return head;
    let temp = head;
    if(temp.val === val) {
        while(temp.val === val) {
            let temp1 = temp.next;
            temp.next = null;
            head = temp1;
            temp = head;
            if(temp===null) {
                break;
            }
        }
    }
    if(temp!==null) {
        while(temp.next!==null) {
            if(temp.next.val===val) {
                let temp1 = temp.next;
                temp.next = temp1.next;
                temp1.next = null;
            } else {
                temp = temp.next;
            }

        }
    }
    return head;
};
