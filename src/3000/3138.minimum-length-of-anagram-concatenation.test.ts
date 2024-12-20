function minAnagramLength( s: string ): number {
    const arr = s.split( '' );

    for ( let len = 1; len <= arr.length; len++ ) {
        if ( s.length % len !== 0 ) {
            continue;
        }
        if ( check( len ) ) {
            return len;
        }
    }
    return s.length;

    function check( len: number ) {
        const target = arr.slice( 0, len ).sort().join( '' );

        for ( let i = len; i < arr.length; i += len ) {
            const str = arr
                .slice( i, i + len )
                .sort()
                .join( '' );
            if ( str !== target ) {
                return false;
            }
        }
        return true;
    }
}

describe( '3138. Minimum Length of an Anagram Concatenation', () => {
    it( 'case 1', () => {
        expect( minAnagramLength( 'abba' ) ).toBe( 2 );
    } );
    it( 'case 2', () => {
        expect( minAnagramLength( 'cdef' ) ).toBe( 4 );
    } );
} );
