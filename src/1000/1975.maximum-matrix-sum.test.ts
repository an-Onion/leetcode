function maxMatrixSum( matrix: number[][] ): number {
    let min = Infinity,
        sum = 0,
        negCount = 0;

    for ( const row of matrix ) {
        for ( const num of row ) {
            if ( num < 0 ) negCount++;
            min = Math.min( min, Math.abs( num ) );
            sum += Math.abs( num );
        }
    }

    return negCount % 2 === 0 ? sum : sum - 2 * min;
}

describe( '1975. Maximum Matrix Sum', () => {
    it( 'case 1', () => {
        expect(
            maxMatrixSum( [
                [1, -1],
                [-1, 1],
            ] ),
        ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect(
            maxMatrixSum( [
                [1, 2, 3],
                [-1, -2, -3],
                [1, 2, 3],
            ] ),
        ).toBe( 16 );
    } );
} );
