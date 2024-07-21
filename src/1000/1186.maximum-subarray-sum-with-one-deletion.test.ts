const maximumSum = function ( arr ) {
    let dp0 = arr[0],
        dp1 = 0,
        res = arr[0];
    for ( let i = 1; i < arr.length; i++ ) {
        dp1 = Math.max( dp0, dp1 + arr[i] );
        dp0 = Math.max( dp0, 0 ) + arr[i];
        res = Math.max( res, dp0, dp1 );
    }
    return res;
};

describe( '1186. Maximum Subarray Sum with One Deletion', () => {
    it( '[1,-2,0,3]', () => {
        expect( maximumSum( [1, -2, 0, 3] ) ).toEqual( 4 );
    } );
    it( '[1,-2,-2,3]', () => {
        expect( maximumSum( [1, -2, -2, 3] ) ).toEqual( 3 );
    } );

    it( '[-1,-1,-1,-1]', () => {
        expect( maximumSum( [-1, -1, -1, -1] ) ).toEqual( -1 );
    } );
} );
