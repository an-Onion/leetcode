function minimumDistance( nums: number[] ): number {
    const next = Array.from<number>( { length: nums.length } ).fill( -1 );
    const occur = new Map<number, number>();
    let ans = nums.length + 1;

    for ( let i = nums.length - 1; i >= 0; i-- ) {
        if ( occur.has( nums[i] ) ) {
            next[i] = occur.get( nums[i] )!;
        }
        occur.set( nums[i], i );
    }

    for ( let i = 0; i < nums.length; i++ ) {
        const secondPos = next[i];
        const thirdPos = next[secondPos];
        if ( secondPos !== -1 && thirdPos !== -1 ) {
            ans = Math.min( ans, thirdPos - i );
        }
    }

    if ( ans === nums.length + 1 ) {
        return -1;
    }
    return ans * 2;
}

describe( '3740.minimum-distance-between-three-equal-elements-i', () => {
    it( 'case 1', () => {
        expect( minimumDistance( [1, 2, 1, 1, 3] ) ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect( minimumDistance( [1, 1, 2, 3, 2, 1, 2] ) ).toBe( 8 );
    } );
    it( 'case 3', () => {
        expect( minimumDistance( [1] ) ).toBe( -1 );
    } );
} );
