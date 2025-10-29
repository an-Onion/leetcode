function smallestNumber( n: number ): number {
    let ret = 1;

    while ( ret <= n ) ret <<= 1;
    return ret - 1;
}

describe( '3370. smallest-number-with-all-set-bits', () => {
    it( 'case 1', () => {
        expect( smallestNumber( 5 ) ).toBe( 7 );
    } );

    it( 'case 2', () => {
        expect( smallestNumber( 10 ) ).toBe( 15 );
    } );

    it( 'case 3', () => {
        expect( smallestNumber( 3 ) ).toBe( 3 );
    } );
} );
