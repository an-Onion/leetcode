function reverseStr( s: string, k: number ): string {
    const ret: string[] = [];

    for ( let i = 0; i < s.length; i += 2 * k ) {
        let j = i;
        while ( j < Math.min( i + k, s.length ) ) {
            ret.splice( i, 0, s[j++] );
        }

        while ( j < Math.min( i + 2 * k, s.length ) ) {
            ret.push( s[j++] );
        }
    }

    return ret.join( '' );
}

describe( '541. Reverse String II', () => {
    it( 'case 1', () => {
        const s = 'abcdefg';
        const k = 2;
        const output = 'bacdfeg';
        expect( reverseStr( s, k ) ).toBe( output );
    } );

    it( 'case 2', () => {
        const s = 'abcd';
        const k = 2;
        const output = 'bacd';
        expect( reverseStr( s, k ) ).toBe( output );
    } );
} );
