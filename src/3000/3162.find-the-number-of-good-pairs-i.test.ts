export function numberOfPairs(
    nums1: number[],
    nums2: number[],
    k: number,
): number {
    let ret = 0;
    for ( const a of nums1 ) {
        for ( const b of nums2 ) {
            if ( a % ( b * k ) === 0 ) {
                ret++;
            }
        }
    }
    return ret;
}

describe( '3162. Find the Number of Good Pairs I', () => {
    it( 'e.g. 1', () => {
        const nums1 = [1, 3, 4],
            nums2 = [1, 3, 4],
            k = 1;

        expect( numberOfPairs( nums1, nums2, k ) ).toBe( 5 );
    } );

    it( 'e.g. 2', () => {
        const nums1 = [1, 2, 4, 12],
            nums2 = [2, 4],
            k = 3;
        expect( numberOfPairs( nums1, nums2, k ) ).toBe( 2 );
    } );
} );
