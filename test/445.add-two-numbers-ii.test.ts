import { addTwoNumbers } from '../src/445.add-two-numbers-ii';
import { ListNode } from '../src/dataStructure/ListNode';

describe('Add Two Numbers II', () => {
  it('(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
    const l1 = ListNode.of([7, 2, 4, 3]);
    const l2 = ListNode.of([5, 6, 4]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([7, 8, 0, 7]);
  });

  it('(1) + (1)', () => {
    const l1 = ListNode.of([1]);
    const l2 = ListNode.of([1]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([2]);
  });

  it('(1) + (9)', () => {
    const l1 = ListNode.of([1]);
    const l2 = ListNode.of([9]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([1, 0]);
  });
});
