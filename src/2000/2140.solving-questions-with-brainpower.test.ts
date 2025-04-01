function mostPoints( questions: number[][] ): number {
    const N = questions.length;
    const dp = Array( N + 1 ).fill( 0 );

    for ( let i = N - 1; i >= 0; i-- ) {
        const [p, b] = questions[i];
        const j = Math.min( N, i + b + 1 );
        dp[i] = Math.max( dp[i + 1], p + dp[j] );
    }
    return dp[0];
}

describe( '2140. solving questions with brainpower', () => {
    it( 'case 1', () => {
        expect(
            mostPoints( [
                [3, 2],
                [4, 3],
                [4, 4],
                [2, 5],
            ] ),
        ).toBe( 5 );
    } );

    it( 'case 2', () => {
        expect(
            mostPoints( [
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
            ] ),
        ).toBe( 7 );
    } );
} );
