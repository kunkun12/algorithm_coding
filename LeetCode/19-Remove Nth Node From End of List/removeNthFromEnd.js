function removeNthFromEnd(head,n){
    let p1=head
    let p2 = head
    let i=0
    while(i<n){
        p2=p2.next
    }
    while(p2.next){
        p1 = p1.next
        p2= p2.next
    }
    p1.next = p1.next.next
    return head
}