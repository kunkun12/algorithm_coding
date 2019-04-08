

function mergeTwoSortLinkList(node1,node2){
    if(node1){
        return node2
    }
    if(node2){
        return node1
    }
    let phead 
    if(node1.value>node2.value){
        phead = node2
        phead.next = mergeTwoSortLinkList(node1,node2.next)
    }else{
        phead=node1
        phead.next = mergeTwoSortLinkList(node1.next,node2)
    }
    return phead
}
