function maxSumRangeQuery( nums: number[], requests: number[][] ): number {
    const n = nums.length;
    const count = new Array( n + 1 ).fill( 0 );

    for ( const [start, end] of requests ) {
        count[start] += 1;
        count[end + 1] -= 1;
    }

    for ( let i = 1; i < n; i++ ) {
        count[i] += count[i - 1];
    }

    count.sort( ( a, b ) => b - a );
    nums.sort( ( a, b ) => b - a );
    let ret = 0;
    const MOD = 10 ** 9 + 7;
    for ( let i = 0; i < n; i++ ) {
        if ( count[i] <= 0 ) break;
        ret += ( nums[i] * count[i] ) % MOD;
    }
    return ret % MOD;
}

describe( '1589. Maximum Sum Obtained of Any Permutation', () => {
    it( 'e.g. 1', () => {
        const nums = [1, 2, 3, 4, 5],
            requests = [
                [1, 3],
                [0, 1],
            ];
        expect( maxSumRangeQuery( nums, requests ) ).toBe( 19 );
    } );

    it( 'e.g. 2', () => {
        const nums = [1, 2, 3, 4, 5, 6],
            requests = [[0, 1]];
        expect( maxSumRangeQuery( nums, requests ) ).toBe( 11 );
    } );

    it( 'e.g. 3', () => {
        const nums = [1, 2, 3, 4, 5, 10],
            requests = [
                [0, 2],
                [1, 3],
                [1, 1],
            ];
        expect( maxSumRangeQuery( nums, requests ) ).toBe( 47 );
    } );
} );
