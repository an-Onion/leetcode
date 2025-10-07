function avoidFlood( rains: number[] ): number[] {
    const n = rains.length;
    const parent = Array( n + 1 )
        .fill( -1 )
        .map( ( _, i ) => i );

    function find( x: number ): number {
        if ( parent[x] !== x ) {
            parent[x] = find( parent[x] );
        }
        return parent[x];
    }

    const filledDay = new Map<number, number>(); // lake is filled
    const ret = Array( n ).fill( -1 );

    for ( let i = 0; i < n; i++ ) {
        const lake = rains[i];
        if ( lake === 0 ) {
            // ret[i] = 1;
            continue;
        }

        if ( filledDay.has( lake ) ) {
            const j = filledDay.get( lake );
            // find a day between (j, i)
            const dayDay = find( j + 1 );
            if ( dayDay >= i ) {
                return [];
            }
            ret[dayDay] = lake;
            parent[dayDay] = find( dayDay + 1 );
        }
        parent[i] = i + 1;
        filledDay.set( lake, i );
    }

    return ret;
}

describe( '1488. Avoid Flood in The City', () => {
    it( 'case 1', () => {
        expect( avoidFlood( [1, 2, 3, 4] ) ).toEqual( [-1, -1, -1, -1] );
    } );

    it( 'case 2', () => {
        expect( avoidFlood( [1, 2, 0, 0, 2, 1] ) ).toEqual( [-1, -1, 2, 1, -1, -1] );
    } );

    it( 'case 3', () => {
        expect( avoidFlood( [1, 2, 0, 1, 2] ) ).toEqual( [] );
    } );
} );
