function minimumTotal( triangle: number[][] ): number {

    const dp: number[] = Array( triangle.length ).fill( Infinity );

    dp[0] = triangle[0][0];

    for( let i = 1; i < triangle.length; i++ ) {
        for( let j = triangle[i].length - 1; j >=0; j-- ){
            dp[j] = Math.min( dp[j], dp[j-1] ?? Infinity ) + triangle[i][j];
        }
    }

    return Math.min( ...dp );
}

describe( '120. minimum total', () => {

    it( '[[2],[3,4],[6,5,7],[4,1,8,3]]', () => {
        expect( minimumTotal( [[2],[3,4],[6,5,7],[4,1,8,3]] ) ).toEqual( 11 );
    } );

    it( '[[-10]]', () => {
        expect( minimumTotal( [[-10]] ) ).toEqual( -10 );
    } );
} );