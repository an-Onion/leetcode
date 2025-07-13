function matchPlayersAndTrainers(
    players: number[],
    trainers: number[],
): number {
    players.sort( ( a, b ) => a - b );
    trainers.sort( ( a, b ) => a - b );

    let i = 0,
        j = 0;

    while ( i < players.length && j < trainers.length ) {
        if ( players[i] > trainers[j] ) {
            j++;
            continue;
        }

        i++, j++;
    }

    return i;
}

describe( '2410. maximum-matching-of-players-with-trainers', () => {
    it( 'case 1', () => {
        expect( matchPlayersAndTrainers( [4, 7, 9], [8, 2, 5, 8] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( matchPlayersAndTrainers( [1, 1, 1], [10] ) ).toBe( 1 );
    } );
} );
