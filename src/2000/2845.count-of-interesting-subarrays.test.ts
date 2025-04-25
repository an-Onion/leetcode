function countInterestingSubarrays(
    nums: number[],
    modulo: number,
    k: number,
): number {
    const n = nums.length;
    const cnt = new Map<number, number>();
    let res = 0;
    let prefix = 0;
    cnt.set( 0, 1 );
    for ( let i = 0; i < n; i++ ) {
        prefix += nums[i] % modulo === k ? 1 : 0;
        res += cnt.get( ( prefix - k + modulo ) % modulo ) || 0;
        cnt.set( prefix % modulo, ( cnt.get( prefix % modulo ) || 0 ) + 1 );
    }
    return res;
}

describe( '2845. count interesting subarrays', () => {
    it( 'case 1', () => {
        const nums = [3, 2, 4],
            modulo = 2,
            k = 1;
        expect( countInterestingSubarrays( nums, modulo, k ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        const nums = [3, 1, 9, 6],
            modulo = 3,
            k = 0;
        expect( countInterestingSubarrays( nums, modulo, k ) ).toBe( 2 );
    } );
} );
