function getSmallestString( s: string ): string {
    const arr = s.split( '' ).map( Number );

    for ( let i = 1; i < s.length; i++ ) {
        if ( arr[i] % 2 !== arr[i - 1] % 2 ) continue;
        if ( arr[i] < arr[i - 1] ) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            break;
        }
    }

    return arr.join( '' );
}

describe( '3216.lexicographically-smallest-string-after-a-swap', () => {
    it( '45320', () => {
        expect( getSmallestString( '45320' ) ).toBe( '43520' );
    } );

    it( '001', () => {
        expect( getSmallestString( '001' ) ).toBe( '001' );
    } );
} );
