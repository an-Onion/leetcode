/*
 * @lc app=leetcode id=399 lang=typescript
 *
 * [399] Evaluate Division
 */

// @lc code=start
export function calcEquation( equations: string[][], values: number[], queries: string[][] ): number[] {
  const ds = new DisjointSet();

  for( let i = 0; i < values.length; ++i ){
    ds.join( equations[i], values[i] );
  }

  const ret: number[] = [];

  for( const [c, d] of queries ){
    if( !ds.exists( c ) || !ds.exists( d ) ) {
      ret.push( -1.0 );
      continue;
    }

    ret.push( ds.divide( c, d ) );
  }

  return ret;
}

class DisjointSet {
  parent: Map<string, [string, number]>;
  constructor(){
    this.parent = new Map();
  }
  exists( x: string ) {
    return this.parent.has( x );
  }

  find( x: string ): [string, number] {

    if( !this.parent.has( x ) ){
      this.parent.set( x, [x, 1] );
    }

    let y = x, val = 1;

    while( this.parent.get( y )[0] !== y ){
      const [p, mul] = this.parent.get( y );
      y = p;
      val *= mul;
    }

    this.parent.set( x, [y, val] );
    return [y, val];
  }

  join( [a, b]: string[], value ){

    const [x, Vx] = this.find( a );
    const [y, Vy] = this.find( b );

    if( x !== y ) {
      this.parent.set( y, [x, value * Vx / Vy] );
    }
  }

  divide( c: string, d: string ): number{
    const [x, Vx] = this.find( c );
    const [y, Vy] = this.find( d );
    return x !== y ? -1 : Vy / Vx;
  }
}
// @lc code=end

