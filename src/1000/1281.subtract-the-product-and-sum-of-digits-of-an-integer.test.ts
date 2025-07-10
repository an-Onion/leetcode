function subtractProductAndSum( n: number ): number {
    let m = 1,
        s = 0;
    while ( n ) {
        const x = n % 10;
        n = ( n / 10 ) | 0;
        m *= x;
        s += x;
    }
    return m - s;
}

describe( '1281. subtract-the-product-and-sum-of-digits-of-an-integer', () => {
    it( 'case 1', () => {
        expect( subtractProductAndSum( 234 ) ).toBe( 15 );
    } );

    it( 'case 2', () => {
        expect( subtractProductAndSum( 4421 ) ).toBe( 21 );
    } );
} );
