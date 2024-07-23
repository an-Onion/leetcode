/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

export function lastStoneWeight( stones: number[] ): number {
  const Q = new MaxPriorityQueue<number>( {
    priority: ( stone ) => stone,
  } );

  stones.forEach( ( stone ) => Q.enqueue( stone ) );

  while( Q.size() > 1 ){
    const first = Q.dequeue().element;
    const second = Q.dequeue().element;
    if( first === second ) continue;

    Q.enqueue( first - second );
  }

  const res = Q.dequeue()?.element;

  return res || 0;
}
// @lc code=end

