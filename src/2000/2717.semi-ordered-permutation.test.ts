function semiOrderedPermutation( nums: number[] ): number {
    const N = nums.length;
    let l, r;

    for ( let i = 0; i < N; i++ ) {
        if ( nums[i] === 1 ) {
            l = i;
        }
        if ( nums[i] === N ) {
            r = i;
        }
    }
    if ( l < r ) {
        return l + ( N - r ) - 1;
    }
    return l + ( N - r ) - 2;
}

describe( '2717.semi-ordered-permutation', () => {
    it( 'case 1', () => {
        expect( semiOrderedPermutation( [2, 1, 4, 3] ) ).toEqual( 2 );
    } );
    it( 'case 2', () => {
        expect( semiOrderedPermutation( [2, 4, 1, 3] ) ).toEqual( 3 );
    } );
    it( 'case 3', () => {
        expect( semiOrderedPermutation( [1, 3, 4, 2, 5] ) ).toEqual( 0 );
    } );
} );
