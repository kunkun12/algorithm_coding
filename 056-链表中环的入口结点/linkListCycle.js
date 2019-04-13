function detectCycle(head) {
  let p1 = head;
  let p2 = head;

  while (true) {
    if (p1 == null || p2 == null || p2.next == null) {
      return null;
    }
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      break;
    }
  }
  p1 = head;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
