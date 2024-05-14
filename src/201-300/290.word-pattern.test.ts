function wordPattern( pattern: string, s: string ): boolean {

    const words = s.split( ' ' );

    if ( pattern.length !== words.length ) {
        return false;
    }

    const from = new Map<string, string>();
    const to = new Map<string, string>();

    for( let i = 0; i < pattern.length; i++ ){
        const c = pattern[ i ];
        from.set( c, words[i] );
        to.set( words[i], c );
    }

    for( let i = 0; i < pattern.length; i++ ){
        const c = pattern[ i ];
        if( from.get( c ) === words[i] && to.get( words[i] ) === c ){
            continue;
        }
        return false;
    }
    return true;
}

describe( '290. word-pattern', () => {

    it( 'case 1', () => {
        expect( wordPattern( 'abba', 'dog cat cat dog' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( wordPattern( 'abba', 'dog cat cat fish' ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( wordPattern( 'aaaa', 'dog cat cat dog' ) ).toBe( false );
    } );

    it( 'case 4', () => {
        expect( wordPattern( 'aaa', 'aa aa aa aa' ) ).toBe( false );
    } );

} );