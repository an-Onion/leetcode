function numberOfPoints( nums: number[][] ): number {
    const covered = Array( 102 ).fill( 0 );
    for ( const [s, e] of nums ) {
        covered[s]++;
        covered[e + 1]--;
    }
    let ret = 0;
    for ( let i = 1; i <= 100; ++i ) {
        covered[i] += covered[i - 1];
        if ( covered[i] > 0 ) ret++;
    }
    return ret;
}

describe( '2848. Points That Intersect With Cars', () => {
    it( 'e.g. 1', () => {
        expect(
            numberOfPoints( [
                [3, 6],
                [1, 5],
                [4, 7],
            ] ),
        ).toEqual( 7 );
    } );

    it( 'e.g. 2', () => {
        expect(
            numberOfPoints( [
                [1, 3],
                [5, 8],
            ] ),
        ).toEqual( 7 );
    } );
} );
