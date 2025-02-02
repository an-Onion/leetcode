function maxCount( m: number, n: number, ops: number[][] ): number {
    let minM = m,
        minN = n;

    for ( const [a, b] of ops ) {
        minM = Math.min( minM, a );
        minN = Math.min( minN, b );
    }
    return minM * minN;
}

describe( '598. range-addition-ii', () => {
    it( 'case 1', () => {
        expect(
            maxCount( 3, 3, [
                [2, 2],
                [3, 3],
            ] ),
        ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect(
            maxCount( 3, 3, [
                [2, 2],
                [3, 3],
                [3, 3],
                [3, 3],
                [2, 2],
                [3, 3],
                [3, 3],
                [3, 3],
                [2, 2],
                [3, 3],
                [3, 3],
                [3, 3],
            ] ),
        ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( maxCount( 3, 3, [] ) ).toBe( 9 );
    } );
} );
