function minZeroArray( nums: number[], queries: number[][] ): number {
    const delta = Array( nums.length + 1 ).fill( 0 );

    let k = 0,
        sum = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        sum += delta[i];
        const num = nums[i];
        while ( k < queries.length && sum < num ) {
            const [l, r, val] = queries[k];
            delta[l] += val;
            delta[r + 1] -= val;
            if ( l <= i && i <= r ) {
                sum += val;
            }
            k++;
        }
        if ( sum < num ) return -1;
    }
    return k;
}

describe( '3356. zero-array-transformation-ii', () => {
    it( 'case 1', () => {
        const nums = [2, 0, 2],
            queries = [
                [0, 2, 1],
                [0, 2, 1],
                [1, 1, 3],
            ];
        expect( minZeroArray( nums, queries ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const nums = [4, 3, 2, 1],
            queries = [
                [1, 3, 2],
                [0, 2, 1],
            ];
        expect( minZeroArray( nums, queries ) ).toBe( -1 );
    } );
} );
