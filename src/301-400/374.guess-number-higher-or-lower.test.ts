function guessNumber( n: number ): number {

    let l = 1, r = n;

    while ( l < r ) {
        const m = ( r-l >> 1 ) + l;
        if( guess( m ) === 0 ){
            return m;
        } else if( guess( m ) === 1 ){
            l = m + 1;
        } else {
            r = m-1;
        }
    }
    return 0;
}

const guess = ( num: number ): number => {
    if( num === 6 ) return 0;
    return num < 6 ? 1 : -1;
};

describe( '374. guess-number-higher-or-lower', () => {
    it( '10, 6', () => {
        expect( guessNumber( 10 ) ).toBe( 6 );
    } );
} );