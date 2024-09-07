function maximumLength( nums: number[], k: number ): number {
    const dp: Map<number, number[]> = new Map();
    const zd: number[] = Array( k + 1 ).fill( 0 );

    for ( const v of nums ) {
        if ( !dp.has( v ) ) {
            dp.set( v, Array( k + 1 ).fill( 0 ) );
        }
        const temp = dp.get( v )!;

        for ( let j = 0; j <= k; j++ ) {
            temp[j] = Math.max( temp[j] + 1, ( zd[j - 1] ?? 0 ) + 1 );
        }

        for ( let j = 0; j <= k; j++ ) {
            zd[j] = Math.max( zd[j], temp[j] );
        }
    }

    return zd[k];
}

describe( '3177. Find the Maximum Length of a Good Subsequence II', () => {
    it( 'e.g. 1', () => {
        const nums = [1, 2, 1, 1, 3],
            k = 2;
        expect( maximumLength( nums, k ) ).toBe( 4 );
    } );

    it( 'e.g. 2', () => {
        const nums = [1, 2, 3, 4, 5, 1],
            k = 0;
        expect( maximumLength( nums, k ) ).toBe( 2 );
    } );
} );
