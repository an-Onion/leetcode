function findKDistantIndices( nums: number[], key: number, k: number ): number[] {
    const ret = [];
    let r = 0;

    for ( let j = 0; j < nums.length; ++j ) {
        if ( nums[j] !== key ) continue;

        const l = Math.max( r, j - k );
        r = Math.min( nums.length, j + k + 1 );
        for ( let i = l; i < r; ++i ) {
            ret.push( i );
        }
    }
    return ret;
}

describe( '2200. find-all-k-distant-indices-in-an-array', () => {
    it( 'case 1', () => {
        expect( findKDistantIndices( [3, 4, 9, 1, 3, 9, 5], 9, 1 ) ).toEqual( [
            1, 2, 3, 4, 5, 6,
        ] );
    } );

    it( 'case 2', () => {
        const nums = [2, 2, 2, 2, 2],
            key = 2,
            k = 2;
        expect( findKDistantIndices( nums, key, k ) ).toEqual( [0, 1, 2, 3, 4] );
    } );
} );
