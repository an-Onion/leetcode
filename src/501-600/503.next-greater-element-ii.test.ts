function nextGreaterElements( nums: number[] ): number[] {
    const N = nums.length;
    const ret = Array( N ).fill( -1 );
    const mono: Array<number> = [];

    for ( let i = 0; i < 2 * N; ++i ) {
        const j = i % N;
        while ( nums[mono.at( -1 )] < nums[j] ) {
            const idx = mono.pop()!;
            if ( idx >= N ) continue;
            ret[idx] = nums[j];
        }
        mono.push( j );
    }
    return ret;
}

describe( '503. next-greater-element-ii', () => {
    it( '[1,2,1]', () => {
        expect( nextGreaterElements( [1, 2, 1] ) ).toStrictEqual( [2, -1, 2] );
    } );

    it( '[1,2,3,4,3]', () => {
        expect( nextGreaterElements( [1, 2, 3, 4, 3] ) ).toStrictEqual( [
            2, 3, 4, -1, 4,
        ] );
    } );
} );
