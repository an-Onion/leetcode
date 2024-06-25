function largestDivisibleSubset( nums: number[] ): number[] {
    nums.sort( ( a,b ) => a-b );
    const map = new Map<number, number[]>();

    let ret = [];
    for ( let i = 0; i < nums.length; i++ ) {
        let max = [nums[i]];
        for ( let j = 0; j < i; j++ ) {
            if ( nums[i] % nums[j] === 0 ) {
                if ( map.get( nums[j] ).length + 1 <= max.length ) continue;
                max = [...map.get( nums[j] ), nums[i]];
            }
        }
        map.set( nums[i], max );
        if ( max.length > ret.length ) ret = max;
    }
    return ret;
}

describe( '368. largest-divisible-subset', () => {
    it( '[1,2,3]', () => {
        expect( largestDivisibleSubset( [1,2,3] ) ).toEqual( [1,2] );
    } );

    it( '[1,2,4,8]', () => {
        expect( largestDivisibleSubset( [1,2,4,8] ) ).toEqual( [1,2,4,8] );
    } );
} );