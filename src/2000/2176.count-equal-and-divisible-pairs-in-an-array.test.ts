function countPairs( nums: number[], k: number ): number {
    const n = nums.length;
    let ret = 0;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = i + 1; j < n; j++ ) {
            if ( nums[i] === nums[j] && ( i * j ) % k === 0 ) {
                ret++;
            }
        }
    }
    return ret;
}

describe( '2176. count equal and divisible pairs in an array', () => {
    it( 'case 1', () => {
        expect( countPairs( [3, 1, 2, 2, 2, 1, 3], 2 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( countPairs( [1, 2, 3, 4], 1 ) ).toBe( 0 );
    } );
} );
