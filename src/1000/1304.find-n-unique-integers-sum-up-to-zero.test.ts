function sumZero( n: number ): number[] {
    const ret = [];

    for ( let i = 1; i <= n >> 1; i++ ) {
        ret.push( -i, i );
    }

    if ( n % 2 !== 0 ) {
        ret.push( 0 );
    }

    return ret;
}

describe( '1304. Find N Unique Integers Sum up to Zero', () => {
    it( 'case 1', () => {
        expect( sumZero( 5 ) ).toEqual( [-1, 1, -2, 2, 0] );
    } );

    it( 'case 2', () => {
        expect( sumZero( 3 ) ).toEqual( [-1, 1, 0] );
    } );

    it( 'case 3', () => {
        expect( sumZero( 1 ) ).toEqual( [0] );
    } );
} );
