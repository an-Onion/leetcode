function largestAltitude( gain: number[] ): number {
    let currentAltitude = 0,
        highestAltitude = 0;

    for ( let i = 0; i < gain.length; i++ ) {
        currentAltitude += gain[i];
        highestAltitude = Math.max( highestAltitude, currentAltitude );
    }

    return highestAltitude;
}

describe( '1732. find the highest altitude', () => {
    it( 'case 1', () => {
        expect( largestAltitude( [-5, 1, 5, 0, -7] ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( largestAltitude( [-4, -3, -2, -1, 4, 3, 2] ) ).toBe( 0 );
    } );
} );
