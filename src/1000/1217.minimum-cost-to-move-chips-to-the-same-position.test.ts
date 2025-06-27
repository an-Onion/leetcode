function minCostToMoveChips( position: number[] ): number {
    let odd = 0,
        even = 0;
    for ( const pos of position ) {
        pos % 2 === 0 ? ( even += 1 ) : ( odd += 1 );
    }
    return Math.min( odd, even );
}

describe( '1217. minimum-cost-to-move-chips-to-the-same-position', () => {
    it( 'case 1', () => {
        expect( minCostToMoveChips( [1, 2, 3] ) ).toBe( 1 );
    } );
    it( 'case 2', () => {
        expect( minCostToMoveChips( [2, 2, 2, 3, 3] ) ).toBe( 2 );
    } );
} );
