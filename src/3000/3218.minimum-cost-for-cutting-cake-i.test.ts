function minimumCost(
    m: number,
    n: number,
    horizontalCut: number[],
    verticalCut: number[],
): number {
    horizontalCut.sort( ( a, b ) => b - a );
    verticalCut.sort( ( a, b ) => b - a );
    let h = 0,
        v = 0,
        cost = 0;

    while ( h < horizontalCut.length || v < verticalCut.length ) {
        if ( h === horizontalCut.length || verticalCut[v] > horizontalCut[h] ) {
            cost += verticalCut[v++] * ( h + 1 );
            continue;
        }
        cost += horizontalCut[h++] * ( v + 1 );
    }

    return cost;
}

describe( '3218. minimum-cost-for-cutting-cake-i', () => {
    it( 'case 1', () => {
        const m = 3,
            n = 2,
            horizontalCut = [1, 3],
            verticalCut = [5];
        expect( minimumCost( m, n, horizontalCut, verticalCut ) ).toEqual( 13 );
    } );

    it( 'case 2', () => {
        const m = 2,
            n = 2,
            horizontalCut = [7],
            verticalCut = [4];
        expect( minimumCost( m, n, horizontalCut, verticalCut ) ).toEqual( 15 );
    } );
} );
