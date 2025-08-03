function getSneakyNumbers( nums: number[] ): number[] {
    const map = new Map<number, number>();

    for ( const num of nums ) {
        map.set( num, ( map.get( num ) || 0 ) + 1 );
    }

    const res: number[] = [];

    for ( const [num, count] of map ) {
        if ( count > 1 ) {
            res.push( num );
        }
    }

    return res;
}

describe( '3289. the-two-sneaky-numbers-of-digitville', () => {
    it( 'case 1', () => {
        expect( getSneakyNumbers( [0, 1, 1, 0] ) ).toEqual( [0, 1] );
    } );

    it( 'case 2', () => {
        expect( getSneakyNumbers( [0, 3, 2, 1, 3, 2] ).sort() ).toEqual( [2, 3] );
    } );

    it( 'case 3', () => {
        expect(
            getSneakyNumbers( [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2] ).sort(),
        ).toEqual( [4, 5] );
    } );
} );
