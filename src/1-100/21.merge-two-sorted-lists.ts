/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

export function mergeTwoLists( l1: ListNode | null, l2: ListNode | null ): ListNode | null {

  const dummy = new ListNode( -1 );
  let link: ListNode = dummy;

  while( l1 || l2 ) {

    if( !l1 ){
      link.next = l2;
      break;
    }

    if( !l2 ){
      link.next = l1;
      break;
    }

    if( l1.val < l2.val ){
      link.next = l1;
      l1 = l1.next;
    } else {
      link.next = l2;
      l2 = l2.next;
    }

    link = link.next;
  }

  return dummy.next;
}
// @lc code=end

