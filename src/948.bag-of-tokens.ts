/*
 * @lc app=leetcode id=948 lang=typescript
 *
 * [948] Bag of Tokens
 */

// @lc code=start
export function bagOfTokensScore(tokens: number[], power: number): number {

  let ret = 0, score = 0;
  tokens.sort((a, b) => a-b);
  let l = 0, u = tokens.length-1;
  while(l <= u){

    if( power >= tokens[l] ){
      power -= tokens[l++];
      ret = Math.max(ret, ++score);
      continue;
    }
    if( !score ) break;
    score--;
    power += tokens[u--];
  }

  return ret;
}
// @lc code=end

