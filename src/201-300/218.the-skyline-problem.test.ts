function getSkyline( buildings: number[][] ): number[][] {
    const events = buildings.flatMap( ( [left, right, height] ) => [
        [left, -height],
        [right, height],
    ] ).sort( ( a, b ) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1] );

    const ret: number[][] = [];
    const Q: number[] = [0];
    let prevHeight = 0;

    for ( const [pos, height] of events ) {
        if ( height < 0 ) {
            Q.push( -height );
            Q.sort( ( a, b ) => b - a );
        } else {
            const index = Q.indexOf( height );
            Q.splice( index, 1 );
        }

        const maxHeight = Q[0];
        if ( maxHeight !== prevHeight ) {
            ret.push( [pos, maxHeight] );
            prevHeight = maxHeight;
        }
    }

    return ret;
}

describe( '218. the-skyline-problem/solutions', () => {
    it( 'case 1', () => {
        const buildings = [
            [2, 9, 10],
            [3, 7, 15],
            [5, 12, 12],
            [15, 20, 10],
            [19, 24, 8],
        ];
        expect( getSkyline( buildings ) ).toStrictEqual( [
            [2, 10],
            [3, 15],
            [7, 12],
            [12, 0],
            [15, 10],
            [20, 8],
            [24, 0],
        ] );
    } );
} );