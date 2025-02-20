function evenOddBit( n: number ): number[] {
    let even = 0,
        odd = 0;
    while ( n ) {
        even += n & 1;
        n >>= 1;
        odd += n & 1;
        n >>= 1;
    }
    return [even, odd];
}

describe( '2595. Number of Even and Odd Bits', () => {
    it( 'case 1', () => {
        expect( evenOddBit( 50 ) ).toStrictEqual( [1, 2] );
    } );

    it( 'case 2', () => {
        expect( evenOddBit( 2 ) ).toStrictEqual( [0, 1] );
    } );
} );
