function twoEggDrop( n: number ): number {
    return Math.ceil( ( -1 + Math.sqrt( 1 + 8 * n ) ) / 2 );
}

describe( '1884.egg-drop-with-2-eggs-and-n-floors/solutions', () => {
    it( '2', () => {
        expect( twoEggDrop( 2 ) ).toBe( 2 );
    } );

    it( '100', () => {
        expect( twoEggDrop( 100 ) ).toBe( 14 );
    } );
} );
