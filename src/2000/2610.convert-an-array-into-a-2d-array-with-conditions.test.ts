function findMatrix( nums: number[] ): number[][] {
    const map = new Map<number, number>();
    for ( const num of nums ) {
        map.set( num, ( map.get( num ) || 0 ) + 1 );
    }
    const ret = [];
    for ( const [key, count] of map ) {
        for ( let i = 0; i < count; i++ ) {
            if ( !ret[i] ) {
                ret.push( [] );
            }
            ret[i].push( key );
        }
    }
    return ret;
}

describe( '2610.convert-an-array-into-a-2d-array-with-conditions', () => {
    it( 'case 1', () => {
        expect( findMatrix( [1, 3, 4, 1, 2, 3, 1] ) ).toEqual( [
            [1, 3, 4, 2],
            [1, 3],
            [1],
        ] );
    } );

    it( 'case 2', () => {
        expect( findMatrix( [1, 2, 3, 4] ) ).toEqual( [[1, 2, 3, 4]] );
    } );
} );
