function flowerGame( n: number, m: number ): number {
    return Math.floor( ( m * n ) / 2 );
}

describe( '3021. Alice and Bob Playing Flower Game', () => {
    it( 'case 1', () => {
        expect( flowerGame( 3, 2 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( flowerGame( 1, 1 ) ).toBe( 0 );
    } );
} );
