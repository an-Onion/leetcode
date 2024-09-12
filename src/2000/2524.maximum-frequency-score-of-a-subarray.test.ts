function maxFrequencyScore( nums: number[], k: number ): number {
    const map = new Map<number, number[]>();

    const MOD = 1e9 + 7;
    let ans = 0,
        score = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        const value = nums[i];
        if ( !map.has( value ) ) map.set( value, [] );
        const stack = map.get( value );

        const rear = stack.at( -1 );
        const next = ( ( rear ?? 1 ) * nums[i] ) % MOD;
        score = ( score + next - ( rear ?? 0 ) + MOD ) % MOD;
        stack.push( next );

        if ( i >= k - 1 ) {
            ans = Math.max( ans, score );
            const expired = nums[i - k + 1];
            const rear = map.get( expired )?.pop();
            const next = map.get( expired )?.at( -1 ) ?? 0;
            score = ( score - rear + next + MOD ) % MOD;
        }
    }
    return ans;
}

describe( '2524. Maximum Frequency Score of a Subarray', () => {
    it( 'e.g. 1', () => {
        const nums = [1, 1, 1, 2, 1, 2],
            k = 3;
        expect( maxFrequencyScore( nums, k ) ).toBe( 5 );
    } );

    it( 'e.g. 2', () => {
        const nums = [1, 1, 1, 1, 1, 1],
            k = 4;
        expect( maxFrequencyScore( nums, k ) ).toBe( 1 );
    } );
} );
