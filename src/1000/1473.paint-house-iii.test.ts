function minCost(
    houses: number[],
    cost: number[][],
    m: number,
    n: number,
    target: number,
): number {
    const dp = Array.from( { length: m }, () =>
        Array.from( { length: target + 1 }, () => Array( n + 1 ).fill( Infinity ) ),
    );
    if ( houses[0] === 0 ) {
        for ( let k = 1; k <= n; k++ ) {
            dp[0][1][k] = cost[0][k - 1];
        }
    } else {
        dp[0][1][houses[0]] = 0;
    }

    for ( let i = 1; i < m; i++ ) {
        if ( houses[i] === 0 ) {
            for ( let cur_color = 1; cur_color <= n; cur_color++ ) {
                for ( let prv_color = 1; prv_color <= n; prv_color++ ) {
                    for ( let j = 1; j <= target; j++ ) {
                        if ( cur_color === prv_color ) {
                            dp[i][j][cur_color] = Math.min(
                                dp[i][j][cur_color],
                                dp[i - 1][j][cur_color] +
                                    cost[i][cur_color - 1],
                            );
                        } else {
                            dp[i][j][cur_color] = Math.min(
                                dp[i][j][cur_color],
                                dp[i - 1][j - 1][prv_color] +
                                    cost[i][cur_color - 1],
                            );
                        }
                    }
                }
            }
            continue;
        }
        const cur_color = houses[i];
        for ( let prv_color = 1; prv_color <= n; prv_color++ ) {
            for ( let j = 1; j <= target; j++ ) {
                if ( cur_color === prv_color ) {
                    dp[i][j][cur_color] = Math.min(
                        dp[i][j][cur_color],
                        dp[i - 1][j][cur_color],
                    );
                } else {
                    dp[i][j][cur_color] = Math.min(
                        dp[i][j][cur_color],
                        dp[i - 1][j - 1][prv_color],
                    );
                }
            }
        }
    }
    const ans = Math.min( ...dp[m - 1][target] );
    return ans === Infinity ? -1 : ans;
}

describe( '1473.paint-house-iii', () => {
    it( 'e.g. 1', () => {
        const houses = [0, 0, 0, 0, 0],
            cost = [
                [1, 10],
                [10, 1],
                [10, 1],
                [1, 10],
                [5, 1],
            ],
            m = 5,
            n = 2,
            target = 3;
        expect( minCost( houses, cost, m, n, target ) ).toBe( 9 );
    } );
    it( 'e.g. 2', () => {
        const houses = [0, 2, 1, 2, 0],
            cost = [
                [1, 10],
                [10, 1],
                [10, 1],
                [1, 10],
                [5, 1],
            ],
            m = 5,
            n = 2,
            target = 3;
        expect( minCost( houses, cost, m, n, target ) ).toBe( 11 );
    } );
    it( 'e.g. 3', () => {
        const houses = [0, 0, 0, 0, 0],
            cost = [
                [1, 10],
                [10, 1],
                [1, 10],
                [10, 1],
                [1, 10],
            ],
            m = 5,
            n = 2,
            target = 5;
        expect( minCost( houses, cost, m, n, target ) ).toBe( 5 );
    } );

    it( 'e.g. 4', () => {
        const houses = [3, 1, 2, 3],
            cost = [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ],
            m = 4,
            n = 3,
            target = 3;
        expect( minCost( houses, cost, m, n, target ) ).toBe( -1 );
    } );
} );
