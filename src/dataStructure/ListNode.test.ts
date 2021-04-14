import { ListNode } from './ListNode';

describe('Linked List Node', () => {
  it('of', () => {
    const linkedList: ListNode = ListNode.of([1, 2, 3]);
    expect(linkedList.val).toBe(1);
    expect(linkedList.next.val).toBe(2);
    expect(linkedList.next.next.val).toBe(3);
    expect(linkedList.next.next.next).toBe(null);
  });

  it('toArray', () => {

    expect(ListNode.of([1, 2, 3]).toArray()).toStrictEqual([1, 2, 3]);
    expect(ListNode.of([1]).toArray()).toStrictEqual([1]);
  });

  it('getTail', () => {
    const e1: ListNode = ListNode.of([1]);
    expect(ListNode.getTail(e1).val).toBe(1);

    const e2: ListNode = ListNode.of([1,2]);
    expect(ListNode.getTail(e2).val).toBe(2);

  });
});
