function canCross( stones: number[] ): boolean {
    const N = stones.length;
    const dp = Array.from( { length: N }, () => Array( N + 1 ).fill( 0 ) );
    dp[0][0] = 1;
    const map = new Map<number, number>(
        stones.map( ( stone, idx ) => [stone, idx] ),
    );

    for ( let i = 1; i < N; i++ ) {
        for ( let k = 1; k <= i; k++ ) {
            const pre = map.get( stones[i] - k );
            if ( pre === undefined ) continue;
            dp[i][k] = dp[pre][k - 1] + dp[pre][k] + dp[pre][k + 1];
        }
    }

    return Math.max( ...dp[N - 1] ) > 0;
}

describe( 'Frog Jump', () => {
    it( 'e.g. 1', () => {
        const stones = [0, 1, 3, 5, 6, 8, 12, 17];
        expect( canCross( stones ) ).toBeTruthy();
    } );

    it( 'e.g. 2', () => {
        const stones = [0, 1, 2, 3, 4, 8, 9, 11];
        expect( canCross( stones ) ).toBeFalsy();
    } );

    it( 'e.g. 3', () => {
        const stones = [0, 1, 5];
        expect( canCross( stones ) ).toBeFalsy();
    } );
} );
