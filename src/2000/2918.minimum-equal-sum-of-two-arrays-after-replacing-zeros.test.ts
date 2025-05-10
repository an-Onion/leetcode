function minSum( nums1: number[], nums2: number[] ): number {
    const zero1 = nums1.filter( ( v ) => v === 0 ).length;
    const sum1 = nums1.reduce( ( acc, cur ) => acc + cur, zero1 );

    const zero2 = nums2.filter( ( v ) => v === 0 ).length;
    const sum2 = nums2.reduce( ( acc, cur ) => acc + cur, zero2 );

    if ( ( zero1 === 0 && sum1 < sum2 ) || ( zero2 === 0 && sum2 < sum1 ) ) return -1;

    return Math.max( sum1, sum2 );
}

describe( '2918. Minimum Equal Sum of Two Arrays With Replacement', () => {
    it( 'case 1', () => {
        const nums1 = [3, 2, 0, 1, 0],
            nums2 = [6, 5, 0];
        expect( minSum( nums1, nums2 ) ).toBe( 12 );
    } );
    it( 'case 2', () => {
        const nums1 = [2, 0, 2, 0],
            nums2 = [1, 4];
        expect( minSum( nums1, nums2 ) ).toBe( -1 );
    } );
} );
