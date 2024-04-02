/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

export function detectCycle( head: ListNode | null ): ListNode | null {

  const dummy = new ListNode( 0, head );
  let rabbit = dummy, tortoise = dummy;

  while ( rabbit && rabbit.next ) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if ( rabbit === tortoise ) {
      break;
    }
  }
  if ( !rabbit || !rabbit.next ) return null;

  let ret = dummy;

  while ( ret !== tortoise ) {
    ret = ret.next;
    tortoise = tortoise.next;
  }
  return ret;

}

// @lc code=end

