function isAdditiveNumber( num: string ): boolean {

  function DFS( path: number[], rem: string ): boolean {

    if( !rem.length ) return path.length > 2;

    if( path.length >= 2 ){

      const next = ( path.at( -1 ) + path.at( -2 ) ) + '';
      if( !rem.startsWith( next ) ) return false;
      return DFS( [...path, +next], rem.slice( next.length ) );
    }

    for( let i = 1; i <= rem.length; i++ ){

      const head = rem.slice( 0, i );
      const rear = rem.slice( i );

      if( head.startsWith( '0' ) && head.length > 1 ) break;

      if( DFS( [...path, +head], rear ) ) return true;
    }

    return false;
  }
  return DFS( [], num );
}

describe( '306. additive-number', () => {

  it( '101', () => {
    expect( isAdditiveNumber( '101' ) ).toBeTruthy();
  } );

  it( '1023', () => {
    expect( isAdditiveNumber( '1023' ) ).toBeFalsy();
  } );

  it( '112358', () => {
    expect( isAdditiveNumber( '112358' ) ).toBeTruthy();
  } );


  it( '199100199', () => {
    expect( isAdditiveNumber( '199100199' ) ).toBeTruthy();
  } );

} );