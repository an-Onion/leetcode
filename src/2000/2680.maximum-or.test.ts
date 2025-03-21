function maximumOr( nums: number[], k: number ): number {
    const n = nums.length;
    const suffix: bigint[] = Array( n + 1 ).fill( 0n );
    for ( let i = n - 1; i >= 0; i-- ) {
        suffix[i] = suffix[i + 1] | BigInt( nums[i] );
    }
    let ret = 0n,
        pre = 0n;
    for ( let i = 0; i < n; i++ ) {
        ret = BigInt(
            Math.max(
                Number( ret ),
                Number( pre | ( BigInt( nums[i] ) << BigInt( k ) ) | suffix[i + 1] ),
            ),
        );
        pre |= BigInt( nums[i] );
    }
    return Number( ret );
}

describe( '2680.maximum-or', () => {
    it( 'case 1', () => {
        expect( maximumOr( [12, 9], 1 ) ).toBe( 30 );
    } );

    it( 'case 2', () => {
        expect( maximumOr( [8, 1, 2], 2 ) ).toBe( 35 );
    } );
} );
