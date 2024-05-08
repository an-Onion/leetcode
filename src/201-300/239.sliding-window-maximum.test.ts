function maxSlidingWindow( nums: number[], k: number ): number[] {

    const mono: number[] = [];

    const ret = [];

    for ( let i = 0; i < nums.length; i++ ) {
        while( nums[i] > nums[mono.at( -1 )] ){
            mono.pop();
        }
        mono.push( i );

        if( i >= k-1 ){
            ret.push( nums[mono.at( 0 )] );
        }

        if( i - mono[0] >= k - 1 ){
            mono.shift();
        }
    }

    return ret;
}

describe( '239. sliding-window-maximum', () => {

    it( 'nums = [1], k = 1', () => {
        expect( maxSlidingWindow( [1], 1 ) ).toStrictEqual( [1] );
    } );

    it( 'nums = [1,3,-1,-3,5,3,6,7], k = 3', () => {
        expect( maxSlidingWindow( [1,3,-1,-3,5,3,6,7], 3 ) ).toStrictEqual( [3,3,5,5,6,7] );
    } );
} );