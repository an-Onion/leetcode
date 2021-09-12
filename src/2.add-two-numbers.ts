/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

export function addTwoNumbers( l1: ListNode | null, l2: ListNode | null ): ListNode | null {

  const dummy: ListNode = new ListNode( -1 );

  let carry = 0;

  let pre = dummy;

  while( l1 || l2 ){

    if( l2 ){
      carry += l2.val;
      l2 = l2.next;
    }

    if( l1 ){
      carry += l1.val;
      l1 = l1.next;
    }
    pre.next = new ListNode( carry % 10 );
    carry = carry / 10 | 0;
    pre = pre.next;
  }

  if( carry ) pre.next = new ListNode( carry );

  return dummy.next;
}

// @lc code=end
