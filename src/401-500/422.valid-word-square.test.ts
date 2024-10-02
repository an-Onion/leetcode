function validWordSquare( words: string[] ): boolean {
    const N = words.length;

    for ( let i = 0; i < N; ++i ) {
        if ( words[i].length > N ) return false;
        for ( let j = i + 1; j < N; ++j ) {
            if ( words[i][j] !== words[j][i] ) return false;
        }
    }
    return true;
}

describe( '422. Valid Word Square', () => {
    it( 'should work', () => {
        expect( validWordSquare( ['abcd', 'bnrt', 'crmy', 'dtye'] ) ).toBe( true );
        expect( validWordSquare( ['abcd', 'bnrt', 'crm', 'dtye'] ) ).toBe( false );
        expect( validWordSquare( ['ball', 'area', 'read', 'lady'] ) ).toBe( false );
    } );
} );
