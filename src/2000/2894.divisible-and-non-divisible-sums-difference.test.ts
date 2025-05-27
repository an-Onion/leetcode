function differenceOfSums( n: number, m: number ): number {
    const k = Math.floor( n / m );
    return ( n * ( n + 1 ) ) / 2 - m * k * ( k + 1 );
}

describe( '2894. divisible-and-non-divisible-sums-difference', () => {
    it( 'case 1', () => {
        expect( differenceOfSums( 10, 3 ) ).toBe( 19 );
    } );
    it( 'case 2', () => {
        expect( differenceOfSums( 5, 6 ) ).toBe( 15 );
    } );
    it( 'case 3', () => {
        expect( differenceOfSums( 5, 1 ) ).toBe( -15 );
    } );
} );
