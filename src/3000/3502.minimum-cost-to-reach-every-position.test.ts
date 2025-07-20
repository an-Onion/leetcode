function minCosts( cost: number[] ): number[] {
    const ret = [];
    let min = Number.MAX_SAFE_INTEGER;

    for ( const c of cost ) {
        min = Math.min( min, c );
        ret.push( min );
    }

    return ret;
}

describe( '3502.minimum-cost-to-reach-every-position', () => {
    it( 'case 1', () => {
        expect( minCosts( [5, 3, 4, 1, 3, 2] ) ).toStrictEqual( [5, 3, 3, 1, 1, 1] );
    } );

    it( 'case 2', () => {
        expect( minCosts( [1, 2, 4, 6, 7] ) ).toStrictEqual( [1, 1, 1, 1, 1] );
    } );
} );
