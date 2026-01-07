function reverseList(head) {
  newList = null;

  while (head !== null) {
    const nextNode = head.next;
    head.next = newList;
    newList = head;
    head = nextNode;
  }
  
  return newList;
}