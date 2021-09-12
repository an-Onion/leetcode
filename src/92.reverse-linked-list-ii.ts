/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

export function reverseBetween( head: ListNode | null, left: number, right: number ): ListNode | null {

  const first = new ListNode( -1, head );
  let pre: ListNode | null = first;

  let point: ListNode | null = first;

  for( let i = 1; i <= right; i++ ){
    if( i === left ) pre = point;
    point = point.next as ListNode;
  }

  reverse( pre, point.next );

  return first.next;

  function reverse( pre: ListNode, post: ListNode | null ){
    let p: ListNode = pre.next as ListNode;
    pre.next = post;
    let q: ListNode | null;

    while( p !== post ) {
      q = p.next as ListNode;
      p.next = pre.next;
      pre.next = p;
      p= q;
    }
  }

}
// @lc code=end

