/*
 * @lc app=leetcode id=947 lang=typescript
 *
 * [947] Most Stones Removed with Same Row or Column
 */

// @lc code=start
export function removeStones( stones: number[][] ): number {

  const ds = new DisjointSet();
  stones.forEach( ( [x,y] ) => ds.union( x, ~y ) );
  return stones.length - ds.countDisjoint();
}

class DisjointSet{
  parent: Map<number,number>;

  constructor(){
    this.parent = new Map();
  }

  find( x: number ){
    if( !this.parent.has( x ) ){
      this.parent.set( x, x );
    }

    while( this.parent.get( x ) !== x ){
      x = this.parent.get( x );
    }
    return x;
  }

  union( x: number, y: number ){
    x = this.find( x ), y = this.find( y );
    if( x === y ) return;
    this.parent.set( x, y );
  }

  countDisjoint(): number {
    let count = 0;
    for( const [k, v] of this.parent ){
      if( k === v ) count++;
    }
    return count;
  }
}
// @lc code=end

