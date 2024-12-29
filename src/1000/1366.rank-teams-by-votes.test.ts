function rankTeams( votes: string[] ): string {
    const ranking = new Map<string, number[]>();

    const N = votes[0].length;

    for ( const v of votes[0] ) {
        ranking.set( v, Array( N ).fill( 0 ) );
    }

    for ( const vote of votes ) {
        for ( let i = 0; i < N; i++ ) {
            ranking.get( vote[i] )[i]++;
        }
    }
    return Array.from( ranking )
        .sort( ( a, b ) => {
            for ( let i = 0; i < N; i++ ) {
                if ( a[1][i] === b[1][i] ) continue;
                return b[1][i] - a[1][i];
            }
            return a[0].localeCompare( b[0] );
        } )
        .map( ( [k] ) => k )
        .join( '' );
}

describe( '1366. Rank Teams by Votes', () => {
    it( 'test case 1', () => {
        const votes = ['ABC', 'ACB', 'ABC', 'ACB', 'ACB'];
        expect( rankTeams( votes ) ).toEqual( 'ACB' );
    } );

    it( 'test case 2', () => {
        const votes = ['WXYZ', 'XYZW'];
        expect( rankTeams( votes ) ).toEqual( 'XWYZ' );
    } );

    it( 'test case 3', () => {
        const votes = ['ZMNAGUEDSJYLBOPHRQICWFXTVK'];
        expect( rankTeams( votes ) ).toEqual( 'ZMNAGUEDSJYLBOPHRQICWFXTVK' );
    } );

    it( 'test case 4', () => {
        const votes = ['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC'];
        expect( rankTeams( votes ) ).toEqual( 'ABC' );
    } );

    it( 'test case 5', () => {
        const votes = ['M', 'M', 'M', 'M'];
        expect( rankTeams( votes ) ).toEqual( 'M' );
    } );
} );
