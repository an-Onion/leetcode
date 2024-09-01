function originalDigits( s: string ): string {
    const count: number[] = new Array( 10 ).fill( 0 );

    for ( const c of s ) {
        // zero
        if ( c === 'z' ) count[0]++; // Zero
        if ( c === 'w' ) count[2]++; // tWo
        if ( c === 'u' ) count[4]++; // foUr
        if ( c === 'x' ) count[6]++; // siX
        if ( c === 'g' ) count[8]++; // eiGht
        if ( c === 's' ) count[7]++; // Seven, Six 7 - 6
        if ( c === 'f' ) count[5]++; // fOuR, Five 5 - 4
        if ( c === 'h' ) count[3]++; // thRee, Eight 3 - 8
        if ( c === 'o' ) count[1]++; // One, zerO, twO, fOur 1 - 0 - 2
        if ( c === 'i' ) count[9]++; // nIne, eIght, sIx, fIve 9 - 8 - 6 - 5
    }

    count[7] -= count[6];
    count[5] -= count[4];
    count[3] -= count[8];
    count[1] -= count[0] + count[2] + count[4];
    count[9] -= count[8] + count[6] + count[5];

    return count.map( ( c, i ) => i.toString().repeat( c ) ).join( '' );
}

describe( 'Reconstruct Original Digits from English', () => {
    it( 'owoztneoer', () => {
        expect( originalDigits( 'owoztneoer' ) ).toBe( '012' );
    } );

    it( 'fviefuro', () => {
        expect( originalDigits( 'fviefuro' ) ).toBe( '45' );
    } );
} );
