/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
export function permute( nums: number[] ): number[][] {

  const swap = ( i: number, j: number ) => [nums[i], nums[j]] = [nums[j], nums[i]];

  function DFS( start: number = 0 ): number[][] {

    if( start === nums.length ) return [[]];

    const ret: number[][] = [];

    for( let i = start; i < nums.length; i++ ) {
      swap( start, i );
      const subs = DFS( start + 1 );
      subs.forEach( sub => sub.push( nums[start] ) );
      ret.push( ...subs );
      swap( start, i );
    }
    return ret;
  }

  return DFS();
}
// @lc code=end

