/*
 * @lc app=leetcode id=1441 lang=typescript
 *
 * [1441] Build an Array With Stack Operations
 */

// @lc code=start
export function buildArray(target: number[], n: number): string[] {

  const output = [];
  let idx = 0;

  for(let num =  1; num <= n; num++) {

    output.push('Push');
    if( (target[idx] !== num) ){
      output.push('Pop');
      continue;
    }
    if( ++idx === target.length ) break;
  }

  return output;
}
// @lc code=end

