/*
 * @lc app=leetcode id=445 lang=typescript
 *
 * [445] Add Two Numbers II
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

  if( !l1 ) return l2;
  if( !l2 ) return l1;

  function length( list: ListNode | null ): number {
    let len = 0;
    let header = list;
    while( header ){
      len++;
      header = header.next;
    }
    return len;
  }
  //  calculate length of lists
  const [len1, len2] = [length( l1 ), length( l2 )];

  const delta = Math.abs( len1 - len2 );
  let [long, short] = len1 > len2 ? [l1, l2] : [l2, l1];

  let header = null;

  // add long list
  for( let i = 0; i < delta; i++ ){
    header = new ListNode( long.val, header );
    long = long.next;
  }

  // sum of 2 lists;
  while( short ){
    const sum = long.val+short.val;
    header = new ListNode( sum, header );
    long = long.next;
    short = short.next;
  }

  const dummy = new ListNode( -1 );
  let carry = 0;
  while( header ){
    const val = header.val + carry;
    carry = val / 10 | 0;
    header.val = val % 10;
    const temp = header;
    header = header.next;
    temp.next = dummy.next;
    dummy.next = temp;
  }

  if( carry ) {
    const sig = new ListNode( carry, dummy.next );
    dummy.next = sig;
  }

  return dummy.next;
}
// @lc code=end

