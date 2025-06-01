function distributeCandies( n: number, limit: number ): number {
    return (
        cal( n + 2 ) -
        3 * cal( n - limit + 1 ) +
        3 * cal( n - ( limit + 1 ) * 2 + 2 ) -
        cal( n - 3 * ( limit + 1 ) + 2 )
    );

    function cal( x: number ) {
        if ( x <= 0 ) return 0;
        return ( x * ( x - 1 ) ) / 2;
    }
}

describe( '2929. Distribute Candies Among Children II', () => {
    it( 'case 1', () => {
        expect( distributeCandies( 5, 2 ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( distributeCandies( 3, 3 ) ).toBe( 10 );
    } );
} );
