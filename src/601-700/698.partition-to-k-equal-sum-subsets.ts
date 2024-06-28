/*
 * @lc app=leetcode id=698 lang=typescript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
export function canPartitionKSubsets( nums: number[], k: number ): boolean {

  if( k > nums.length ) return false;

  const sum = nums.reduce( ( acc, v ) => acc+v, 0 );

  if( sum % k !== 0 ) return false;

  return DFS( 0, nums.length-1, sum / k, k );

  function DFS( acc: number, start: number, target: number, round: number ): boolean {
    if( round === 0 ) return true;

    if( acc === target ) return DFS( 0, nums.length-1, target, round-1 );

    for( let i = start; i >= 0; --i ){
      if( nums[i] !== -1 && acc+nums[i] <= target ){
        const t = nums[i];
        nums[i] = -1;
        if( DFS( acc+t, i-1, target, round ) ) return true;
        nums[i] = t;
      }
    }
    return false;
  }


}
// @lc code=end

