function uncommonFromSentences( s1: string, s2: string ): string[] {
    const w1 = s1.split( ' ' ),
        w2 = s2.split( ' ' );

    const map = new Map();
    for ( const w of w1 ) {
        map.set( w, ( map.get( w ) || 0 ) + 1 );
    }
    for ( const w of w2 ) {
        map.set( w, ( map.get( w ) || 0 ) + 1 );
    }
    const ret = [];
    for ( const [w, c] of map ) {
        if ( c !== 1 ) continue;
        ret.push( w );
    }
    return ret;
}

describe( '884.uncommon-words-from-two-sentences', () => {
    it( 'case 1', () => {
        const s1 = 'this apple is sweet',
            s2 = 'this apple is sour';
        expect( uncommonFromSentences( s1, s2 ) ).toEqual( ['sweet', 'sour'] );
    } );

    it( 'case 2', () => {
        const s1 = 'apple apple',
            s2 = 'banana';
        expect( uncommonFromSentences( s1, s2 ) ).toEqual( ['banana'] );
    } );
} );
