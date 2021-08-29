/*
 * @lc app=leetcode id=923 lang=typescript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
export function threeSumMulti(arr: number[], target: number): number {

  arr.sort((a, b) => a - b);

  let ret = 0;

  for(let i = 0; i <= arr.length-3; ++i) {
    const sum = target - arr[i];
    let left = i+1, right = arr.length -1;

    while( left < right ){
      if(arr[left] + arr[right] < sum){
        left++; continue;
      }

      if(arr[left] + arr[right] > sum){
        right--; continue;
      }

      if( arr[left] === arr[right] ){
        ret += (right-left)*(right-left+1) / 2;
        break;
      }

      let deltaL = 1, deltaR = 1;

      while(arr[left] === arr[left+1]){
        left++, deltaL++;
      }
      while(arr[right] === arr[right-1]){
        right--, deltaR++;
      }

      ret += deltaL * deltaR;
      left++, right--;
    }
  }

  const MOD = Math.pow(10, 9) + 7;
  return ret % MOD;
}
// @lc code=end

