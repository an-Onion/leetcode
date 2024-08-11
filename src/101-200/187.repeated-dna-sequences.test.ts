function findRepeatedDnaSequences( s: string ): string[] {
    const map = new Map<string, number>();
    const L = 10;

    const ret = [];

    for ( let i = 0; i + L <= s.length; i++ ) {
        const seg = s.slice( i, i + L );
        map.set( seg, ( map.get( seg ) ?? 0 ) + 1 );
        if ( map.get( seg )! === 2 ) {
            ret.push( seg );
        }
    }

    return ret;
}

describe( '187. repeated-dna-sequences', () => {
    it( 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', () => {
        expect(
            findRepeatedDnaSequences( 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT' ),
        ).toStrictEqual( ['AAAAACCCCC', 'CCCCCAAAAA'] );
    } );

    it( 'AAAAAAAAAAAAA', () => {
        expect( findRepeatedDnaSequences( 'AAAAAAAAAAAAA' ) ).toStrictEqual( [
            'AAAAAAAAAA',
        ] );
    } );
} );
