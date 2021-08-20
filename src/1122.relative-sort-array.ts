/*
 * @lc app=leetcode id=1122 lang=typescript
 *
 * [1122] Relative Sort Array
 */

// @lc code=start
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {

  let start = 0;
  for(const pivot of arr2){
    for(let i = start; i < arr1.length; i++){
      if(arr1[i] === pivot){
        swap(i, start++);
      }
    }
  }
  const tail = arr1.splice(start, arr1.length-start).sort((a, b) => a-b);

  return arr1.concat(tail);

  function swap(i, j){
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
  }

}
// @lc code=end

