function minimumTotal( triangle: number[][] ): number {
    const dp = triangle.at( -1 ) ?? [];

    for ( let i = triangle.length - 2; i >= 0; i-- ) {
        for ( let j = 0; j < triangle[i].length; j++ ) {
            dp[j] = triangle[i][j] + Math.min( dp[j], dp[j + 1] );
        }
    }

    return dp[0];
}

describe( 'LCR 100. Triangle', () => {
    it( 'should return 11', () => {
        expect( minimumTotal( [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]] ) ).toBe( 11 );
    } );

    it( 'should return -10', () => {
        expect( minimumTotal( [[-10]] ) ).toBe( -10 );
    } );
} );
