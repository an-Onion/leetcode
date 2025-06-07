function clearStars( s: string ): string {
    const cnt: number[][] = Array.from( { length: 26 }, () => [] );
    const arr = s.split( '' );

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== '*' ) {
            cnt[arr[i].charCodeAt( 0 ) - 97].push( i );
            continue;
        }

        for ( let j = 0; j < 26; j++ ) {
            if ( cnt[j].length > 0 ) {
                arr[cnt[j].pop()!] = '*';
                break;
            }
        }
    }
    return arr.filter( ( c ) => c !== '*' ).join( '' );
}

describe( '3170. Lexicographically Minimum String After Removing Stars', () => {
    it( 'case 1', () => {
        expect( clearStars( 'aaba*' ) ).toEqual( 'aab' );
    } );

    it( 'case 2', () => {
        expect( clearStars( 'abc' ) ).toEqual( 'abc' );
    } );
} );
