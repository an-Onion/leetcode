/*
 * @lc app=leetcode id=423 lang=typescript
 *
 * [423] Reconstruct Original Digits from English
 */

// @lc code=start
export function originalDigits(s: string): string {

  const counts:number[] = Array(10).fill(0);

  for(let i = 0; i < s.length; ++i){
    if( s[i] === 'z' ) counts[0]++;
    if( s[i] === 'w' ) counts[2]++;
    if( s[i] === 'u' ) counts[4]++;
    if( s[i] === 'x' ) counts[6]++;
    if( s[i] === 'g' ) counts[8]++;
    if( s[i] === 's' ) counts[7]++; // 7 - 6
    if( s[i] === 'f' ) counts[5]++; // 5 - 4
    if( s[i] === 'h' ) counts[3]++; // 3 - 8
    if( s[i] === 'o' ) counts[1]++; // 1 - 0 - 2- 4
    if( s[i] === 'n' ) counts[9]++; // (9-7-1) / 2
  }

  counts[7] -= counts[6];
  counts[5] -= counts[4];
  counts[3] -= counts[8];
  counts[1] -= (counts[0]+counts[2]+counts[4]);
  counts[9] = (counts[9] - counts[7] - counts[1]) >> 1;

  const res = [];
  for(let i = 0; i <= 9; i++){
    while(counts[i]--) res.push(i);
  }
  return res.join('');
}
// @lc code=end

