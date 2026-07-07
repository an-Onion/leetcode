function sumAndMultiply( n: number ): number {
    let x = 0,
        sum = 0,
        k = 1;
    while ( n ) {
        const d = n % 10;
        if ( d > 0 ) {
            x += d * k;
            sum += d;
            k *= 10;
        }
        n = Math.floor( n / 10 );
    }
    return sum * x;
}

describe( '3754. Concatenate Non-Zero Digits and Multiply by Sum', () => {
    it( 'case 1', () => {
        expect( sumAndMultiply( 10203004 ) ).toBe( 12340 );
    } );

    it( 'case 2', () => {
        expect( sumAndMultiply( 1000 ) ).toBe( 1 );
    } );
} );
