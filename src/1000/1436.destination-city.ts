/*
 * @lc app=leetcode id=1436 lang=typescript
 *
 * [1436] Destination City
 */

// @lc code=start
export function destCity( paths: string[][] ): string {

  const roads = new Map();

  for ( const path of paths ) {
      roads.set( path[0], path[1] );
  }

  let dest = paths[0][0];

  while ( roads.has( dest ) ) {
      dest = roads.get( dest );
  }
  return dest;
}
// @lc code=end

