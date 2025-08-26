function areaOfMaxDiagonal( dimensions: number[][] ): number {
    let maxArea = 0,
        maxDiagonal = 0;
    for ( const [w, h] of dimensions ) {
        const diagonal = w ** 2 + h ** 2;
        if ( diagonal > maxDiagonal ) {
            ( maxDiagonal = diagonal ), ( maxArea = w * h );
        } else if ( diagonal === maxDiagonal ) {
            maxArea = Math.max( maxArea, w * h );
        }
    }
    return maxArea;
}

describe( '3000.maximum-area-of-longest-diagonal-rectangle', () => {
    it( 'case 1', () => {
        expect(
            areaOfMaxDiagonal( [
                [9, 3],
                [8, 6],
            ] ),
        ).toBe( 48 );
    } );

    it( 'case 2', () => {
        expect(
            areaOfMaxDiagonal( [
                [3, 4],
                [4, 3],
            ] ),
        ).toBe( 12 );
    } );
} );
