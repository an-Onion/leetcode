function productExceptSelf( nums: number[] ): number[] {
    const ret: number[] = [];
    for( let i = 0; i < nums.length; i++ ){
        ret.push( ( ret.at( -1 )  ?? 1 ) * nums[i] );
    }
    let rear = 1;

    for( let i = nums.length - 1; i >= 0; i-- ){
        ret[i] = ( ret[i-1] ?? 1 ) * rear || 0;
        rear *= nums[i];
    }
    return ret;
}

describe( '238. product-of-array-except-self', () => {
    it( '[1,2,3,4]', () => {
        expect( productExceptSelf( [1,2,3,4] ) ).toStrictEqual( [24,12,8,6] );
    } );

    it( '[-1,1,0,-3,3]', () => {
        expect( productExceptSelf( [-1,1,0,-3,3] ) ).toStrictEqual( [0,0,9,0,0] );
    } );

} );