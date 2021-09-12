/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from '../src/dataStructure/ListNode';

export function swapPairs( head: ListNode | null ): ListNode | null {

  const dummy: ListNode = new ListNode( -1, head );

  let q = head, pre = dummy;

  while( q && q.next ){
    pre.next = q.next;
    pre = q;
    q = q.next;
    pre.next = q.next;
    q.next = pre;
    q = pre.next;
  }

  return dummy.next;
}
// @lc code=end

