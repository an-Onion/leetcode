function successfulPairs(
    spells: number[],
    potions: number[],
    success: number,
): number[] {
    potions.sort( ( a, b ) => b - a );
    const ret = Array( spells.length ).fill( 0 );
    const idx = Array( spells.length )
        .fill( 0 )
        .map( ( _, i ) => i );
    idx.sort( ( a, b ) => spells[a] - spells[b] );
    let j = 0;

    for ( const i of idx ) {
        while ( j < potions.length && spells[i] * potions[j] >= success ) {
            j++;
        }
        ret[i] = j;
    }

    return ret;
}

describe( '2300. Successful Pairs of Spells and Potions', () => {
    it( 'case 1', () => {
        expect( successfulPairs( [5, 1, 3], [1, 2, 3, 4, 5], 7 ) ).toEqual( [
            4, 0, 3,
        ] );
    } );

    it( 'case 2', () => {
        expect( successfulPairs( [3, 1, 2], [8, 5, 8], 16 ) ).toEqual( [2, 0, 2] );
    } );
} );
