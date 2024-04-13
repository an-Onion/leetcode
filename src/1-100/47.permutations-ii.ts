/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
export function permuteUnique( nums: number[] ): number[][] {

  const visited: boolean[] = Array( nums.length );
  nums.sort( ( a, b ) => a-b );
  return DFS( );

  function DFS( step: number = 0 ): number[][] {
    if( step === nums.length ) return [[]];

    const ret: number[][] = [];

    for( let i = 0; i < nums.length; i++ ){
      
      if( visited[i] ) continue;
      
      if( nums[i] === nums[i-1] && !visited[i-1] ) continue;

      visited[i] = true;
      const tail: number[][] = DFS( step+1 );
      tail.forEach( ( x ) => x.push( nums[i] ) );
      ret.push( ...tail );
      visited[i] = false;
    }
    return ret;
  }
}
// @lc code=end

