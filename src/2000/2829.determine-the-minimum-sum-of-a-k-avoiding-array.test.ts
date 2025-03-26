function minimumSum( n: number, k: number ): number {
    if ( n <= Math.floor( k / 2 ) ) {
        return sum( 1, 1, n );
    }
    return sum( 1, 1, Math.floor( k / 2 ) ) + sum( k, 1, n - Math.floor( k / 2 ) );

    function sum( a1: number, d: number, n: number ): number {
        return ( ( a1 + a1 + ( n - 1 ) * d ) * n ) / 2;
    }
}

describe( '2829.determine-the-minimum-sum-of-a-k-avoiding-array', () => {
    it( 'case 1', () => {
        expect( minimumSum( 5, 4 ) ).toBe( 18 );
    } );
    it( 'case 2', () => {
        expect( minimumSum( 2, 6 ) ).toBe( 3 );
    } );
} );
