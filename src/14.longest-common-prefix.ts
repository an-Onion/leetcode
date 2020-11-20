/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
export function longestCommonPrefix(strs: string[]): string {

  function commonPrefix(pre: string, target: string): string {
    let low = 0, high = pre.length;

    while( low <= high ){
      const mid = (low + high) / 2 | 0;

      if( target.startsWith(pre.substring(0, mid)) )
        low = mid + 1;
      else
        high = mid -1;
    }

    return pre.substring(0, high);
  }
  strs.sort((a, b) => a.length - b.length);
  let pre = strs[0] || '';

  for(const str of strs){
    pre = commonPrefix(pre, str);
  }

  return pre;
}
// @lc code=end

