import { hasCycle } from '../src/141.linked-list-cycle';
import { ListNode } from '../src/dataStructure/ListNode';

describe('Linked List Cycle', () => {

  it('head = [3,2,0,-4], pos = 1', () => {
    const head = ListNode.of([3,2,0,-4]);
    const tail = ListNode.getTail(head);
    tail.next = head.next;
    expect(hasCycle(head)).toBeTruthy();
  });

  it('head = [1,2], pos = 0', () => {
    const head = ListNode.of([1,2]);
    const tail = ListNode.getTail(head);
    tail.next = head;
    expect(hasCycle(head)).toBeTruthy();
  });

  it('head = [1], pos = -1', () => {
    const head = ListNode.of([1]);
    expect(hasCycle(head)).toBeFalsy();
  });

});
