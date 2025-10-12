function decode( encoded: number[], first: number ): number[] {
    const ret = [first];
    for ( let i = 0; i < encoded.length; i++ ) {
        ret.push( ret[i] ^ encoded[i] );
    }
    return ret;
}

describe( '1720. Decode XORed Array', () => {
    it( 'case 1', () => {
        const encoded = [1, 2, 3];
        const first = 1;
        expect( decode( encoded, first ) ).toEqual( [1, 0, 2, 1] );
    } );

    it( 'case 2', () => {
        const encoded = [6, 2, 7, 3];
        const first = 4;
        expect( decode( encoded, first ) ).toEqual( [4, 2, 0, 7, 4] );
    } );
} );
