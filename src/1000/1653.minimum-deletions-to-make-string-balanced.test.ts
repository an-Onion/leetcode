function minimumDeletions( s: string ): number {
    let rightA = 0;
    for ( const c of s ) {
        if ( c === 'a' ) {
            rightA++;
        }
    }
    let res = rightA,
        leftB = 0;
    for ( const c of s ) {
        c === 'a' ? rightA-- : leftB++;
        res = Math.min( res, leftB + rightA );
    }
    return res;
}

describe( '1653. Minimum Deletions to Make String Balanced', () => {
    it( 'case 1', () => {
        expect( minimumDeletions( 'aababbab' ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( minimumDeletions( 'bbaaaaabb' ) ).toBe( 2 );
    } );
} );
