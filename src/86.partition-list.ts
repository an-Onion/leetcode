/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
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

import { ListNode } from './dataStructure/ListNode';

export function partition( head: ListNode | null, x: number ): ListNode | null {

  const dummyLess = new ListNode( Infinity );
  const dummyGreater = new ListNode( Infinity );
  let less = dummyLess;
  let greater = dummyGreater;


  while ( head ) {
    if ( head.val < x ) {
      less.next = head;
      less = less.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }
    head = head.next;
  }
  
  greater.next = null;
  less.next = dummyGreater.next;
  return dummyLess.next;
}
// @lc code=end

