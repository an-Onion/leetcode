function findIntersectionValues( nums1: number[], nums2: number[] ): number[] {
    function count( x: number[], y: number[] ): number {
        const map = new Map<number, boolean>();
        for ( const num of x ) {
            map.set( num, true );
        }

        return y.filter( ( num ) => map.has( num ) ).length;
    }
    return [count( nums2, nums1 ), count( nums1, nums2 )];
}

describe( '2956. Find Common Elements Between Two Arrays', () => {
    it( 'should return [2, 1]', () => {
        const nums1 = [2, 3, 2],
            nums2 = [1, 2];

        expect( findIntersectionValues( nums1, nums2 ) ).toEqual( [2, 1] );
    } );

    it( 'should return [3, 4]', () => {
        const nums1 = [4, 3, 2, 3, 1],
            nums2 = [2, 2, 5, 2, 3, 6];

        expect( findIntersectionValues( nums1, nums2 ) ).toEqual( [3, 4] );
    } );

    it( 'should return [0, 0]', () => {
        const nums1 = [3, 4, 2, 3],
            nums2 = [1, 5];

        expect( findIntersectionValues( nums1, nums2 ) ).toEqual( [0, 0] );
    } );
} );
