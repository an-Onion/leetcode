function maximumLength( nums: number[] ): number {
    let ret = 0;
    const pattern = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];
    for ( const p of pattern ) {
        let cnt = 0;
        for ( const num of nums ) {
            if ( num % 2 === p[cnt % 2] ) {
                cnt++;
            }
        }
        ret = Math.max( ret, cnt );
    }
    return ret;
}

describe( '3201. find-the-maximum-length-of-valid-subsequence-i', () => {
    it( 'case 1', () => {
        expect( maximumLength( [1, 2, 3, 4] ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( maximumLength( [1, 2, 1, 1, 2, 1, 2] ) ).toBe( 6 );
    } );

    it( 'case 3', () => {
        expect( maximumLength( [1, 3] ) ).toBe( 2 );
    } );
} );
