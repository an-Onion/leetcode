/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
export function carFleet( target: number, position: number[], speed: number[] ): number {

  let car = [];

  for( let i = 0; i < position.length; ++i ){
    const time = ( target - position[i] ) /  speed[i];
    car.push( [position[i], time] );
  }

  car = car.sort( ( a, b ) => a[0] - b[0] );

  let fleet = 0;
  let pre = 0;
  for( let i = car.length-1; i >= 0; --i ){
    if( pre < car[i][1] ){
      fleet++;
      pre = car[i][1];
    }
  }

  return fleet;
}
// @lc code=end

