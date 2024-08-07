function integerReplacement( n: number ): number {
    let ans = 0;
    while ( n !== 1 ) {
        if ( n % 2 === 0 ) {
            ++ans;
            n = Math.floor( n / 2 );
            continue;
        }
        if ( n % 4 === 1 ) {
            ans += 2;
            n = Math.floor( n / 2 );
            continue;
        }
        if ( n === 3 ) {
            ans += 2;
            n = 1;
            continue;
        }
        ans += 2;
        n = Math.floor( n / 2 ) + 1;
    }
    return ans;
}

describe( '397. integer-replacement', () => {
    it( 'example', () => {
        expect( integerReplacement( 8 ) ).toBe( 3 );
        expect( integerReplacement( 7 ) ).toBe( 4 );
        expect( integerReplacement( 4 ) ).toBe( 2 );
    } );
} );
