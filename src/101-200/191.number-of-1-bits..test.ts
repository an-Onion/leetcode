function hammingWeight( n: number ): number {

    let ret = 0;

    while( n ){
        ret++;
        n = n & ( n - 1 );
    }
    return ret;
}

describe( '191. number-of-1-bits', () => {
    it( '0-4', () => {
        expect( hammingWeight( 0 ) ).toEqual( 0 );
        expect( hammingWeight( 1 ) ).toEqual( 1 );
        expect( hammingWeight( 2 ) ).toEqual( 1 );
        expect( hammingWeight( 3 ) ).toEqual( 2 );
        expect( hammingWeight( 4 ) ).toEqual( 1 );
    } );

    it( '11', () => {
        expect( hammingWeight( 11 ) ).toEqual( 3 );
    } );

    it( '128', () => {
        expect( hammingWeight( 128 ) ).toEqual( 1 );
    } );

    it( '2147483645', () => {
        expect( hammingWeight( 2147483645 ) ).toEqual( 30 );
    } );
} );