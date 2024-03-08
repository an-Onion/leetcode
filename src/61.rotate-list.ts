/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

export function rotateRight( head: ListNode | null, k: number ): ListNode | null {

  if( !head || !head.next ) return head;

  let len = 1;

  let tail = head;

  while( tail.next ) {
    tail = tail.next;
    len++;
  }

  tail.next = head;

  let gap = len - k % len;

  while( gap--  ) tail = tail.next;

  head = tail.next;
  tail.next = null;

  return head;

}
// @lc code=end

