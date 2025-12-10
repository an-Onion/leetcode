function countPermutations( complexity: number[] ): number {
    for ( let i = 1; i < complexity.length; i++ ) {
        if ( complexity[i] <= complexity[0] ) {
            return 0;
        }
    }
    const MODE = 1_000_000_007;
    let ret = 1;
    for ( let i = 2; i < complexity.length; i++ ) {
        ret = ( ret * i ) % MODE;
    }
    return ret;
}

describe( '3577. Count the Number of Computer Unlocking Permutations', () => {
    it( 'case 1', () => {
        expect( countPermutations( [1, 2, 3] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( countPermutations( [3, 3, 3, 4, 4, 4] ) ).toBe( 0 );
    } );
} );
