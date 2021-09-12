/*
 * @lc app=leetcode id=735 lang=typescript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
export function asteroidCollision( asteroids: number[] ): number[] {

  const stack: number[] = [];

  const top = (): number=> stack[stack.length-1] || 0;

  const willCollide = ( right: number ):boolean => {
    const left = top();
    return left > 0 && right < 0;
  };

  const collide = ( left: number, right: number ):number => {
    if( Math.abs( left ) < Math.abs( right ) ) return right;
    else if( Math.abs( left ) > Math.abs( right ) ) return left;
    else return 0;

  };

  for( let asteroid of asteroids ){

    while( willCollide( asteroid ) ){
      asteroid = collide( stack.pop(), asteroid );
    }
    if( asteroid ) stack.push( asteroid );
  }

  return stack;
}
// @lc code=end

