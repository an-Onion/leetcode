/*
 * @lc app=leetcode id=725 lang=typescript
 *
 * [725] Split Linked List in Parts
 */

import { ListNode } from './dataStructure/ListNode';

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

export function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {

  const length = getLength(head);

  const sub = length / k | 0;
  let remain = length % k;

  const ret: ListNode[] = [];
  let part;

  for(let i = 0; i < k; ++i){
    let size = sub;
    if( remain-- > 0 ) size++;
    [part, head] = split(head, size);
    ret.push(part);
  }

  return ret;


  function split(head: ListNode | null, size: number): ListNode[] {

    if( size === 0 ) return [head, null];

    const p = head;
    for(let i = 0; i < size-1; ++i){
      head = head.next;
    }

    const pre = head;
    head = head.next;
    pre.next = null;

    return [p, head];
  }


  function getLength(head: ListNode | null): number {
    let len = 0;

    while(head){
      head = head.next;
      len++;
    }
    return len;
  }

}
// @lc code=end

