import { LRUCache } from '../src/146.lru-cache';

function run( opts: string[], values: number[][] ) {
  const limit = values[0][0];
  const lru = new LRUCache( limit );
  const res = [null];
  for( let i = 1; i < opts.length; ++i ){
    if( opts[i] === 'put' ){
      const [key, value] = values[i];
      lru.put( key, value );
      res.push( null );
      continue;
    }

    const [key] = values[i];
    res.push( lru.get( key ) );
  }
  return res;
}

describe( 'LRU Cache', () => {

  it( 'e.g. 1', () => {
    const opts = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
    const values = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
    expect( run( opts, values ) ).toStrictEqual( [null, null, null, 1, null, -1, null, -1, 3, 4] );
  } );

  it( 'e.g. 2', () => {
    const opts = ['LRUCache','put','put','get','get','put','get','get','get'];
    const values = [[2],[2,1],[3,2],[3],[2],[4,3],[2],[3],[4]];
    expect( run( opts, values ) ).toStrictEqual( [null,null,null,2,1,null,1,-1,3] );
  } );
} );
