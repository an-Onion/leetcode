/*
 * @lc app=leetcode id=491 lang=typescript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
export function findSubsequences( nums: number[] ): number[][] {

  const ret: number[][] = [];
  DFS( 0, [] );
  return ret;

  function DFS( idx: number, ans: number[] ): void {

    if( idx >= nums.length ){
      if( ans.length > 1 ){
        ret.push( [...ans] );
      }
      return;
    }

    if( !ans.length || nums[idx] >= ans[ans.length-1] ){
      ans.push( nums[idx] );
      DFS( idx+1, ans );
      ans.pop();
    }

    if( nums[idx] === ans[ans.length-1] ) return;

    DFS( idx+1, ans );

  }

}
// @lc code=end

