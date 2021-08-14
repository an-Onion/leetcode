/*
 * @lc app=leetcode id=692 lang=typescript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
export function topKFrequent(words: string[], k: number): string[] {

  const map: Record<string, number> = {};

  words.forEach((w) => map[w] = (map[w] || 0) +1);

  return Object.entries(map)
  .sort((a, b) => {
    if( a[1] !== b[1] ) return b[1] - a[1];
    return a[0] < b[0] ? -1 : 1;
  })
  .slice(0, k).map(([w]) => w);
}
// @lc code=end

