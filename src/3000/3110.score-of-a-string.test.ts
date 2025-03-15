function scoreOfString( s: string ): number {
    let score = 0;
    for ( let i = 1; i < s.length; i++ ) {
        score += Math.abs( s.charCodeAt( i ) - s.charCodeAt( i - 1 ) );
    }
    return score;
}

describe( '3110. score-of-a-string', () => {
    it( 'case 1', () => {
        expect( scoreOfString( 'hello' ) ).toEqual( 13 );
    } );

    it( 'case 2', () => {
        expect( scoreOfString( 'zaz' ) ).toEqual( 50 );
    } );
} );
