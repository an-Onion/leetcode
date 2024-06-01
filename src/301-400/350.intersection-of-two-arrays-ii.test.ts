function intersect( nums1: number[], nums2: number[] ): number[] {

    const map = Array( 1001 ).fill( 0 );

    for ( let i = 0; i < nums1.length; i++ ) {
        map[nums1[i]]++;
    }

    const ret: number[] = [];

    for( let j = 0; j < nums2.length; j++ ){
        const num = nums2[j];
        if( map[num] > 0 ){
            ret.push( num );
            map[num]--;
        }
    }
    return ret;
}

describe( '350. intersection-of-two-arrays-ii', () => {
    it( 'case 1', () => {
        const nums1 = [1,2,2,1], nums2 = [2,2];
        expect( intersect( nums1, nums2 ).sort() ).toStrictEqual( [2,2] );
    } );

    it( 'case 2', () => {
        const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
        expect( intersect( nums1, nums2 ).sort() ).toStrictEqual( [4,9] );
    } );
} );