function maximumTotalDamage( power: number[] ): number {
    const count = new Map<number, number>();
    for ( const p of power ) {
        count.set( p, ( count.get( p ) ?? 0 ) + 1 );
    }

    const keys = Array.from( count.keys() ).sort( ( a, b ) => a - b );
    const dp = Array( keys.length + 1 ).fill( 0 );

    let j = 0;
    for ( let i = 0; i < keys.length; ++i ) {
        while ( keys[j] < keys[i] - 2 ) {
            ++j;
        }
        dp[i + 1] = Math.max( dp[i], dp[j] + keys[i] * count.get( keys[i] ) );
    }

    return dp.at( -1 );
}

describe( '3186. Maximum Total Damage With Spell Casting', () => {
    it( 'case 1', () => {
        expect( maximumTotalDamage( [1, 1, 3, 4] ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( maximumTotalDamage( [7, 1, 6, 6] ) ).toBe( 13 );
    } );
} );
