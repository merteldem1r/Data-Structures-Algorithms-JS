// SLOW & FASR Pointers Approach

// find the middle node of the given linked list

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
