function countBits( n: number ): number[] {

    const bits = new Array( n + 1 ).fill( 0 );

    for ( let i = 1; i <= n; i++ ) {
        bits[i] = bits[i >> 1] + ( i & 1 );
    }
    return bits;
}

describe( '338. counting-bits', () => {

    it( '2', () => {
        expect( countBits( 2 ) ).toEqual( [0,1,1] );
    } );

    it( '5', () => {
        expect( countBits( 5 ) ).toEqual( [0,1,1,2,1,2] );
    } );
} );