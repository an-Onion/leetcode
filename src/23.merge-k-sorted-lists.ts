/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

export function mergeKLists( lists: Array<ListNode | null> ): ListNode | null {

  if( !lists.length ) return null;

  while( lists.length > 1 ){
    const l1 = lists.shift();
    const l2 = lists.shift();
    const l3 = merge( l1, l2 );
    lists.push( l3 );
  }

  return lists[0];

  function merge( l1: ListNode | null, l2: ListNode | null ) {
    const dummy = new ListNode( -1 );
    let pointer = dummy;
    while( l1 && l2 ){

      if( l1.val < l2.val ){
        pointer.next = l1;
        l1 = l1.next;
      } else {
        pointer.next = l2;
        l2 = l2.next;
      }
      pointer = pointer.next;
    }

    if( !l1 ) pointer.next = l2;
    if( !l2 ) pointer.next = l1;

    return dummy.next;
  }
}
// @lc code=end

