var swapPairs = function(head) {
    let head1 = new ListNode(0)
        head1.next = head
        let p = head1
        while(p.next&&p.next.next){
            let node1 = p.next
            let node2 = node1.next
            let next = node2.next
            node2.next = node1
            node1.next = next
            p.next = node2
            p=node1
        }
        return head1.next
};