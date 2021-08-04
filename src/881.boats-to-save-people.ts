/*
 * @lc app=leetcode id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
export function numRescueBoats(people: number[], limit: number): number {

  const buckets: number[] = Array(limit+1).fill(0);

  people.forEach((p) => buckets[p]++);

  let start = 1, end = limit, res = 0;

  while( start <= end ){

    if( buckets[start] <= 0 ){
      start++;
      continue;
    }

    if( buckets[end] <= 0  ) {
      end--;
      continue;
    }

    if( start + end <= limit ){
      buckets[start]--;
    }

    buckets[end]--;

    res++;
  }

  return res;

}
// @lc code=end

