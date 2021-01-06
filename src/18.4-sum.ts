/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
export function fourSum(nums: number[], target: number): number[][] {

  function twoSum(sub, t) {
    let [l, u] = [0, sub.length-1];
    const ret = [];
    while(l < u){
      const sum = sub[l]+sub[u];
      if( sum > t ) u--;
      else if( sum < t ) l++;
      else {
        ret.push([sub[l], sub[u]]);
        l++,u--;
        while( l < u && sub[l] === sub[l-1] ) l++;
        while( l < u && sub[u] === sub[u+1] ) u--;
      }
    }

    return ret;
  }

  function kSum(sub, t, k) {
    if( k === 2 ) return twoSum(sub, t);

    const res = [];
    for(let i = 0; i < sub.length; i++) {
      if( sub[i] === sub[i-1] ) continue;

      const ret = kSum(sub.slice(i+1), t-sub[i], k-1).map((arr) => [sub[i], ...arr]);

      res.push(...ret);
    }

    return res;
  }

  nums.sort((a: number, b: number) => a-b);

  return kSum(nums, target, 4);
}
// @lc code=end

