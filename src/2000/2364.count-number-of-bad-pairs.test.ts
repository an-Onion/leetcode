function countBadPairs( nums: number[] ): number {
    const mp = new Map<number, number>();
    let count = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        const key = nums[i] - i;
        const diff = mp.get( key ) || 0;
        count += i - diff;
        mp.set( key, diff + 1 );
    }
    return count;
}

describe( '2364. count Bad Pairs', () => {
    it( 'case 1', () => {
        expect( countBadPairs( [4, 1, 3, 3] ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        expect( countBadPairs( [1, 2, 3, 4, 5] ) ).toBe( 0 );
    } );
} );
