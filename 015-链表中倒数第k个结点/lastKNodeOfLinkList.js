function lastKNode(head,k){
    if(head==null) return null
    let count =0
    let firstP = head
    let lastP = head
    while(count<k&&firstP){
        firstP = firstP.next
        count++
    }
    if(count<k) return null
    while(firstP!=null){
        lastP = lastP.next
        firstP=firstP.next
    }
    return lastP
}