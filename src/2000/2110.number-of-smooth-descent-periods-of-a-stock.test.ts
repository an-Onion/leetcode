function getDescentPeriods( prices: number[] ): number {
    let ret = 0,
        pre = 0;

    for ( let i = 0; i < prices.length; i++ ) {
        if ( prices[i - 1] === 1 + prices[i] ) {
            pre++;
        } else {
            pre = 1;
        }
        ret += pre;
    }

    return ret;
}

describe( '2110. Number of Smooth Descent Periods of a Stock', () => {
    it( 'case 1', () => {
        expect( getDescentPeriods( [3, 2, 1, 4] ) ).toBe( 7 );
    } );

    it( 'case 2', () => {
        expect( getDescentPeriods( [8, 6, 7, 7] ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( getDescentPeriods( [1] ) ).toBe( 1 );
    } );
} );
