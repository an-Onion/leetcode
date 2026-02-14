function champagneTower(
    poured: number,
    query_row: number,
    query_glass: number,
): number {
    const dp = Array( 101 )
        .fill( 0 )
        .map( () => Array( 101 ).fill( 0.0 ) );

    dp[0][0] = poured;

    for ( let r = 0; r <= query_row; ++r ) {
        for ( let c = 0; c <= r; ++c ) {
            const q = ( dp[r][c] - 1 ) / 2.0;
            if ( q > 0 ) {
                dp[r + 1][c] = ( dp[r + 1][c] || 0 ) + q;
                dp[r + 1][c + 1] = ( dp[r + 1][c + 1] || 0 ) + q;
            }
        }
    }

    return Math.min( 1, dp[query_row][query_glass] );
}

describe( 'Champagne Tower', () => {
    it( 'e.g. 1', () => {
        const poured = 1,
            query_row = 1,
            query_glass = 1;
        expect( champagneTower( poured, query_row, query_glass ) ).toBe( 0.0 );
    } );

    it( 'e.g. 2', () => {
        const poured = 2,
            query_row = 1,
            query_glass = 1;
        expect( champagneTower( poured, query_row, query_glass ) ).toBe( 0.5 );
    } );
} );
