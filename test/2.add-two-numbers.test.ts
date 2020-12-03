import { addTwoNumbers } from '../src/2.add-two-numbers';
import { ListNode } from '../src/dataStructure/ListNode';

describe('Add Two Numbers', () => {
  it('342 + 465 = 807', () => {
    const l1 = ListNode.of([2,4,3]);
    const l2 = ListNode.of([5,6,4]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([7,0,8]);
  });

  it('0 + 0 = 0', () => {
    const l1 = ListNode.of([0]);
    const l2 = ListNode.of([0]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([0]);
  });

  it('9999999 + 9999 = 89990001', () => {
    const l1 = ListNode.of([9,9,9,9,9,9,9]);
    const l2 = ListNode.of([9,9,9,9]);
    expect(addTwoNumbers(l1, l2).toArray()).toStrictEqual([8,9,9,9,0,0,0,1]);
  });
});
