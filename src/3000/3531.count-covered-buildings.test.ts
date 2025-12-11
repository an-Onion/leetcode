function countCoveredBuildings( n: number, buildings: number[][] ): number {
    const maxRow: number[] = Array( n + 1 ).fill( 0 );
    const minRow: number[] = Array( n + 1 ).fill( n + 1 );
    const maxCol: number[] = Array( n + 1 ).fill( 0 );
    const minCol: number[] = Array( n + 1 ).fill( n + 1 );

    for ( const p of buildings ) {
        const x = p[0],
            y = p[1];
        maxRow[y] = Math.max( maxRow[y], x );
        minRow[y] = Math.min( minRow[y], x );
        maxCol[x] = Math.max( maxCol[x], y );
        minCol[x] = Math.min( minCol[x], y );
    }

    let ret = 0;
    for ( const p of buildings ) {
        const x = p[0],
            y = p[1];
        if ( x > minRow[y] && x < maxRow[y] && y > minCol[x] && y < maxCol[x] ) {
            ret++;
        }
    }

    return ret;
}

describe( '3531. countCoveredBuildings', () => {
    it( 'case 1', () => {
        const n = 3,
            buildings = [
                [1, 2],
                [2, 2],
                [3, 2],
                [2, 1],
                [2, 3],
            ];
        expect( countCoveredBuildings( n, buildings ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const n = 3,
            buildings = [
                [1, 1],
                [1, 2],
                [2, 1],
                [2, 2],
            ];
        expect( countCoveredBuildings( n, buildings ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        const n = 5,
            buildings = [
                [1, 3],
                [3, 2],
                [3, 3],
                [3, 5],
                [5, 3],
            ];

        expect( countCoveredBuildings( n, buildings ) ).toBe( 1 );
    } );
} );
