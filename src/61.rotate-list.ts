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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {

  const N = length(head);
  k = k % N;
  let point = head, pivot;

  for(let i = 0; i < N-1; ++i){
    if( i === N-k-1 ){
      pivot = point;
    }
    point = point.next;
  }

  if( pivot ){
    point.next = head;
    head = pivot.next;
    pivot.next = null;
  }

  return head;

  function length(node: ListNode){

    let len = 0;

    while( node ){
      len++;
      node = node.next;
    }

    return len;
  }

}
// @lc code=end

