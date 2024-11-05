function losingPlayer( x: number, y: number ): string {
    const ops = Math.min( x, y >> 2 );

    return ops % 2 === 1 ? 'Alice' : 'Bob';
}

describe( '3222.find-the-winning-player-in-coin-game', () => {
    it( 'case 1', () => {
        expect( losingPlayer( 2, 7 ) ).toEqual( 'Alice' );
    } );

    it( 'case 2', () => {
        expect( losingPlayer( 4, 11 ) ).toEqual( 'Bob' );
    } );
} );
