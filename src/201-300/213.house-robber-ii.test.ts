function rob( nums: number[] ): number {

    if( nums.length === 1 ) return nums[0];


    function robHelper( nums: number[] ): number {
        const dp = [0, 0];

        for( let i = 0; i < nums.length; i++ ){
            dp[i & 1] = Math.max( dp[i & 1] + nums[i], dp[i - 1 & 1] );
        }

        return dp[nums.length-1 & 1];
    }


    return Math.max( robHelper( nums.slice( 1 ) ), robHelper( nums.slice( 0, -1 ) ) );
}

describe( '213. house-robber-ii', () => {

    it( '[1]', () => {
        const houses = rob( [1] );
        expect( houses ).toBe( 1 );
    } );

    it( 'rob( [2,3,2] ) === 3', () => {
        const houses = rob( [2,3,2] );
        expect( houses ).toBe( 3 );
    } );

    it( 'rob( [1,2,3,1] ) === 4', () => {
        const houses = rob( [1,2,3,1] );
        expect( houses ).toBe( 4 );
    } );

    it( 'rob( [1,2,3] ) === 3', () => {
        const houses = rob( [1,2,3] );
        expect( houses ).toBe( 3 );
    } );

} );