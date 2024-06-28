/*
 * @lc app=leetcode id=721 lang=typescript
 *
 * [721] Accounts Merge
 */

// @lc code=start
export function accountsMerge( accounts: string[][] ): string[][] {

  const dsu = DSU();

  const emailToName = new Map<string, string>();
  const emailToId = new Map<string, number>();

  let id = 0;

  for( const [name, ...emails] of accounts ) {
    let x: number;
    for( const email of emails ){
      emailToName.set( email, name );

      if( !emailToId.has( email ) )
        emailToId.set( email, id++ );

      if( x === undefined ) x = emailToId.get( email );
      const y = emailToId.get( email );
      dsu.union( x, y );
    }
  }
  const ret: string[][] = [];

  for( const [email, name] of emailToName.entries() ){
    const id = emailToId.get( email );

    const parent = dsu.find( id );

    if( !ret[parent] ) ret[parent] = [name];

    ret[parent].push( email );
  }

  return ret.filter( ( e ) => e ).map( ( [name, ...emails] ) => [name, ...emails.sort()] );

  function DSU() {
    const parent: number[] = Array( 10001 ).fill( -1 );

    const find = ( x: number ): number => {
      while( parent[x] !== -1 ) x = parent[x];
      return x;
    };

    const union = ( x: number, y: number ):void => {
      x = find( x );
      y = find( y );
      if( x === y ) return;
      parent[x] = y;
    };

    return { find, union };
  }

}
// @lc code=end

