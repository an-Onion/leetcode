/*
 * @lc app=leetcode id=904 lang=typescript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
export function totalFruit( fruits: number[] ): number {

  let options = [-1, -1];
  let sofar = 0, tail = 0, res = 0;

  for( const fruit of fruits ) {

    if( !options.includes( fruit ) ){
      sofar = tail;
      tail = 1;
      options = [options[1], fruit];
    } else if( fruit === options[1] ){
      tail++;
    } else {
      tail = 1;
      options = [options[1], options[0]];
    }

    res = Math.max( res, ++sofar );
  }

  return res;
}
// @lc code=end

