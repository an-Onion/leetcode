function getCommon( nums1: number[], nums2: number[] ): number {
    let i = 0,
        j = 0;

    while ( i < nums1.length && j < nums2.length ) {
        if ( nums1[i] === nums2[j] ) {
            return nums1[i];
        }
        nums1[i] < nums2[j] ? i++ : j++;
    }

    return -1;
}

describe( '2540. minimum-common-value', () => {
    it( 'case 1', () => {
        expect( getCommon( [1, 2, 3], [2, 4] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( getCommon( [1, 2, 3], [4, 5, 6] ) ).toBe( -1 );
    } );
} );
