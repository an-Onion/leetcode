function numIdenticalPairs( nums: number[] ): number {
    const map = new Map<number, number>();
    for ( const num of nums ) {
        map.set( num, ( map.get( num ) || 0 ) + 1 );
    }

    let result = 0;
    for ( const [, value] of map ) {
        result += ( value * ( value - 1 ) ) / 2;
    }

    return result;
}

describe( '1512. Number of Good Pairs', () => {
    it( 'case 1', () => {
        expect( numIdenticalPairs( [1, 2, 3, 1, 1, 3] ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        expect( numIdenticalPairs( [1, 1, 1, 1] ) ).toBe( 6 );
    } );
} );
