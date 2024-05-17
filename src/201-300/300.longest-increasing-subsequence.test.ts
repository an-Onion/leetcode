function lengthOfLIS( nums: number[] ): number {

    const dp = Array( nums.length ).fill( 1 );

    for( let i = 1; i < nums.length; i++ ){
        for( let j = 0; j < i; j++ ){
            if( nums[j] >= nums[i] ) continue;
            dp[i] = Math.max( dp[i], dp[j] + 1 );
        }
    }
    return Math.max( ...dp );
}

describe( '300. longest-increasing-subsequence', () => {
    it( '[10,9,2,5,3,7,101,18]', () => {
        expect( lengthOfLIS( [10,9,2,5,3,7,101,18] ) ).toEqual( 4 );
    } );

    it( '[0,1,0,3,2,3]', () => {
        expect( lengthOfLIS( [0,1,0,3,2,3] ) ).toEqual( 4 );
    } );

    it( '[7,7,7,7,7,7,7]', ()=> {
        expect( lengthOfLIS( [7,7,7,7,7,7,7] ) ).toEqual( 1 );
    } );

    it( '[1,3,6,7,9,4,10,5,6]', () => {
        expect( lengthOfLIS( [1,3,6,7,9,4,10,5,6] ) ).toEqual( 6 );
    } );

} );