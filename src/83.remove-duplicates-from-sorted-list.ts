/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy: ListNode = new ListNode(Infinity, head);

  let pre = dummy, point = head;

  while(point){
    if( pre.val === point.val ){
      pre.next = point.next;
    } else {
      pre = pre.next as ListNode;
    }

    point = point.next;
  }

  return dummy.next;
}
// @lc code=end

