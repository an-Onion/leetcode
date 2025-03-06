function beautifulSubarrays( nums: number[] ): number {
    const map = new Map<number, number>();
    map.set( 0, 1 );
    let ans = 0,
        xor = 0;
    for ( const num of nums ) {
        xor ^= num;
        const prev = map.get( xor ) || 0;
        ans += prev;
        map.set( xor, prev + 1 );
    }
    return ans;
}

describe( '2588.count-the-number-of-beautiful-subarrays', () => {
    it( 'case 1', () => {
        expect( beautifulSubarrays( [4, 3, 1, 2, 4] ) ).toEqual( 2 );
    } );

    it( 'case 2', () => {
        expect( beautifulSubarrays( [1, 10, 4] ) ).toEqual( 0 );
    } );
} );
