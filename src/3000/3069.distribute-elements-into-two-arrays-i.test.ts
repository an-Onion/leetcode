function resultArray( nums: number[] ): number[] {
    const n = nums.length;
    const ret: number[] = new Array( n );
    ret[0] = nums[0];
    ret[n - 1] = nums[1];
    let idx = 0,
        revIdx = n - 1;
    for ( let i = 2; i < n; i++ ) {
        if ( ret[idx] > ret[revIdx] ) {
            ret[++idx] = nums[i];
            continue;
        }
        ret[--revIdx] = nums[i];
    }
    for ( let l = revIdx, r = n - 1; l < r; l++, r-- ) {
        [ret[l], ret[r]] = [ret[r], ret[l]];
    }
    return ret;
}

describe( '3069.istribute Elements Into Two Arrays I', () => {
    it( 'case 1', () => {
        expect( resultArray( [2, 1, 3] ) ).toEqual( [2, 3, 1] );
    } );
    it( 'case 2', () => {
        expect( resultArray( [5, 4, 3, 8] ) ).toEqual( [5, 3, 4, 8] );
    } );
} );
