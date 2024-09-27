function generatePossibleNextMoves( currentState: string ): string[] {
    const ret = [];
    const states = currentState.split( '' );
    for ( let i = 1; i < states.length; ++i ) {
        if ( states[i] === '+' && states[i - 1] === '+' ) {
            ( states[i] = '-' ), ( states[i - 1] = '-' );
            ret.push( states.join( '' ) );
            ( states[i] = '+' ), ( states[i - 1] = '+' );
        }
    }
    return ret;
}

describe( '293. Flip Game', () => {
    it( 'should return ["++--","--++"]', () => {
        // const input = "++++";
        const input = '++++';
        const output = ['--++', '+--+', '++--'];
        expect( generatePossibleNextMoves( input ) ).toEqual( output );
    } );

    it( 'should return []', () => {
        const input = '+';
        const output = [];
        expect( generatePossibleNextMoves( input ) ).toEqual( output );
    } );
} );
