function isZeroArray( nums: number[], queries: number[][] ): boolean {
    const delta = Array( nums.length ).fill( 0 );
    for ( const [i, j] of queries ) {
        delta[i]++, delta[j + 1]--;
    }
    let sum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        sum += delta[i];
        if ( nums[i] > sum ) {
            return false;
        }
    }
    return true;
}

describe( '3355. Zero Array Transformation I', () => {
    it( 'case 1', () => {
        const nums = [1, 0, 1],
            queries = [[0, 2]];

        expect( isZeroArray( nums, queries ) ).toBe( true );
    } );

    it( 'case 2', () => {
        const nums = [4, 3, 2, 1],
            queries = [
                [1, 3],
                [0, 2],
            ];

        expect( isZeroArray( nums, queries ) ).toBe( false );
    } );
} );
