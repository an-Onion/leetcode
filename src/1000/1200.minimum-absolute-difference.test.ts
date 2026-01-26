function minimumAbsDifference( arr: number[] ): number[][] {
    const ret = [];
    let best = Infinity;
    arr.sort( ( a, b ) => a - b );

    for ( let i = 1; i < arr.length; ++i ) {
        const delta = arr[i] - arr[i - 1];
        if ( delta > best ) continue;
        if ( delta < best ) {
            best = delta;
            ret.length = 0;
        }
        ret.push( [arr[i - 1], arr[i]] );
    }
    return ret;
}

describe( '1200. Minimum Absolute Difference', () => {
    it( 'e.g. 1', () => {
        expect( minimumAbsDifference( [4, 2, 1, 3] ) ).toStrictEqual( [
            [1, 2],
            [2, 3],
            [3, 4],
        ] );
    } );
    it( 'e.g. 2', () => {
        expect( minimumAbsDifference( [1, 3, 6, 10, 15] ) ).toStrictEqual( [[1, 3]] );
    } );
    it( 'e.g. 3', () => {
        expect(
            minimumAbsDifference( [3, 8, -10, 23, 19, -4, -14, 27] ),
        ).toStrictEqual( [
            [-14, -10],
            [19, 23],
            [23, 27],
        ] );
    } );
} );
