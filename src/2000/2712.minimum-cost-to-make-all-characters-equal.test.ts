function minimumCost( s: string ): number {
    let cost = 0;
    for ( let i = 0; i < s.length - 1; i++ ) {
        if ( s[i] !== s[i + 1] ) {
            cost += Math.min( i + 1, s.length - i - 1 );
        }
    }
    return cost;
}

describe( '2712.minimum-cost-to-make-all-characters-equal', () => {
    it( 'case 1', () => {
        expect( minimumCost( '0011' ) ).toBe( 2 );
    } );
    it( 'case 2', () => {
        expect( minimumCost( '010101' ) ).toBe( 9 );
    } );
} );
