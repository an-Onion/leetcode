/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

import { ListNode } from '../dataStructure/ListNode';

export function deleteDuplicates( head: ListNode | null ): ListNode | null {

  const dummy = new ListNode( Infinity, head );
  let prev = new ListNode( -Infinity, dummy );

  let [slow, fast] = [dummy, head];

  let tag = false;
  while( slow ) {
    
    if( fast?.val === slow.val ){
      tag = true;
      fast = fast.next;
      slow.next = fast;
      continue;
    }

    fast = fast?.next;
    slow = slow.next;
    
    if( tag ){
      prev.next = slow;
      tag = false;
    } else {
      prev = prev.next;
    }
  }

  return dummy.next;
}
// @lc code=end

