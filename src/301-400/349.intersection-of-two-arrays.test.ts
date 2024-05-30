function intersection( nums1: number[], nums2: number[] ): number[] {

    const set = new Set<number>( nums1 );

    const ret = new Set<number>();

    for( const n of nums2 ){
        if( set.has( n ) )
            ret.add( n );
    }

    return [...ret];
}

describe( '349. intersection-of-two-arrays', () => {
    it( 'case 1', () => {
        const nums1 = [1,2,2,1], nums2 = [2,2];
        expect( intersection( nums1, nums2 ) ).toEqual( [2] );
    } );

    it( 'case 2', () => {
        const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
        expect( intersection( nums1, nums2 ).sort() ).toEqual( [4, 9].sort() );
    } );
} );