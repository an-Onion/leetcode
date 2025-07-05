function findLucky( arr: number[] ): number {
    const map = Array( 501 ).fill( 0 );
    for ( const num of arr ) {
        map[num]++;
    }
    for ( let i = 500; i > 0; i-- ) {
        if ( map[i] === i ) {
            return i;
        }
    }
    return -1;
}

describe( '1394. find-lucky-integer-in-an-array', () => {
    it( 'case 1', () => {
        expect( findLucky( [2, 2, 3, 4] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( findLucky( [1, 2, 2, 3, 3, 3] ) ).toBe( 3 );
    } );
    it( 'case 3', () => {
        expect( findLucky( [2, 2, 2, 3, 3] ) ).toBe( -1 );
    } );
    it( 'case 4', () => {
        expect( findLucky( [5] ) ).toBe( -1 );
    } );
    it( 'case 5', () => {
        expect( findLucky( [7, 7, 7, 7, 7, 7, 7] ) ).toBe( 7 );
    } );
} );
