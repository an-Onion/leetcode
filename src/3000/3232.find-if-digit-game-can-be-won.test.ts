function canAliceWin( nums: number[] ): boolean {
    let diff = 0;
    for ( const num of nums ) {
        if ( num < 10 ) diff += num;
        else diff -= num;
    }

    return diff !== 0;
}

describe( '3232.find-if-digit-game-can-be-won', () => {
    it( 'case 1', () => {
        expect( canAliceWin( [1, 2, 3, 4, 10] ) ).toBe( false );
    } );

    it( 'case 2', () => {
        expect( canAliceWin( [1, 2, 3, 4, 5, 14] ) ).toBe( true );
    } );

    it( 'case 3', () => {
        expect( canAliceWin( [5, 5, 5, 25] ) ).toBe( true );
    } );
} );
