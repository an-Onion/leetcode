function isPerfectSquare( num: number ): boolean {
    let [l, u] = [0, num];

    while ( l <= u ) {
        const m = ( ( u - l ) >> 1 ) + l;
        if ( m * m <= num ) l = m + 1;
        else u = m - 1;
    }
    return u * u === num;
}

describe( '367. valid-perfect-square', () => {
    it( 'input: 16', () => {
        expect( isPerfectSquare( 16 ) ).toBe( true );
    } );
    it( 'input: 14', () => {
        expect( isPerfectSquare( 14 ) ).toBe( false );
    } );
} );