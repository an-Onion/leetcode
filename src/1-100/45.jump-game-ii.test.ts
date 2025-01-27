function jump( nums: number[] ): number {
    let steps = 0,
        covered = 0,
        next = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        if ( i > covered ) {
            steps++;
            covered = next;
        }

        next = Math.max( next, i + nums[i] );
    }
    return steps;
}

describe( '45. Jump Game II', () => {
    it( '[2,3,1,1,4]', () => {
        expect( jump( [2, 3, 1, 1, 4] ) ).toBe( 2 );
    } );

    it( '[2,3,0,1,4]', () => {
        expect( jump( [2, 3, 0, 1, 4] ) ).toBe( 2 );
    } );

    it( '[0]', () => {
        expect( jump( [0] ) ).toBe( 0 );
    } );

    it( '[7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]', () => {
        expect( jump( [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3] ) ).toBe( 2 );
    } );
} );
