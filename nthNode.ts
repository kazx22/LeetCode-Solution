function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let counter = 0;
  let res = head;

  while (head != null) {
    counter++;
    head = head.next;
  }
  if (counter === 1) {
    return null;
  }
  if (counter == n) {
    let t1 = res;
    t1 = res;
    res = res.next;
    return res;
  } else {
    counter = counter - n;
    let t1 = res,
      i = 0;
    let prev = null;
    while (i !== counter) {
      prev = t1;
      t1 = t1.next;
      i++;
    }

    prev.next = t1.next;
    return res;
  }
}
