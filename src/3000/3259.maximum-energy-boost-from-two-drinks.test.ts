function maxEnergyBoost(
    energyDrinkA: number[],
    energyDrinkB: number[],
): number {
    const N = energyDrinkA.length;
    const dp = Array.from( { length: N + 2 }, () => [0, 0] );
    for ( let i = 2; i <= N + 1; ++i ) {
        dp[i][0] = Math.max( dp[i - 1][0], dp[i - 2][1] ) + energyDrinkA[i - 2];
        dp[i][1] = Math.max( dp[i - 1][1], dp[i - 2][0] ) + energyDrinkB[i - 2];
    }
    return Math.max( ...dp[N + 1] );
}

describe( '3259. Maximum Energy Boost from Two Drinks', () => {
    it( 'e.g. 1', () => {
        const energyDrinkA = [1, 3, 1],
            energyDrinkB = [3, 1, 1];

        expect( maxEnergyBoost( energyDrinkA, energyDrinkB ) ).toBe( 5 );
    } );

    it( 'e.g. 2', () => {
        const energyDrinkA = [4, 1, 1],
            energyDrinkB = [1, 1, 3];

        expect( maxEnergyBoost( energyDrinkA, energyDrinkB ) ).toBe( 7 );
    } );
} );
