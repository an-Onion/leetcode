/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
export function permuteUnique(nums: number[]): number[][] {

  const visited: boolean[] = Array(nums.length);
  nums.sort((a, b) => a-b);
  return backTrack(0);

  function backTrack(step: number): number[][] {
    if( step === nums.length ) return [[]];

    const res: number[][] = [];

    for(let i = 0; i < nums.length; i++){
      if( visited[i] ) continue;
      if( nums[i] === nums[i-1] && !visited[i-1] ) continue;

      visited[i] = true;
      const tail: number[][] = backTrack(step+1).map((x) =>{x.push(nums[i]); return x;} );
      res.push(...tail);
      visited[i] = false;
    }
    return res;
  }
}
// @lc code=end

