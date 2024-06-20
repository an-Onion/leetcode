function integerBreak( n: number ): number {
    if ( n === 2 ) return 1;
    if ( n === 3 ) return 2;
    if ( n % 3 === 0 ) return Math.pow( 3, n / 3 );
    if ( n % 3 === 1 ) return Math.pow( 3, Math.floor( n / 3 ) - 1 ) * 4;
    return Math.pow( 3, Math.floor( n / 3 ) ) * 2;
}

describe( '343. integer-break', () => {
    it( '2', () => {
        expect( integerBreak( 2 ) ).toBe( 1 );
    } );

    it( '10', () => {
        expect( integerBreak( 10 ) ).toBe( 36 );
    } );
} );
