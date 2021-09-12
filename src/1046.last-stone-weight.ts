/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start

import { PriorityQueue } from 'typescript-collections';

export function lastStoneWeight( stones: number[] ): number {
  const Q = new PriorityQueue<number>();

  stones.forEach( ( stone ) => Q.enqueue( stone ) );

  while( Q.size() > 1 ){
    const first = Q.dequeue();
    const second = Q.dequeue();
    if( first === second ) continue;

    Q.enqueue( first -second );
  }

  const res = Q.dequeue();

  return res || 0;
}
// @lc code=end

