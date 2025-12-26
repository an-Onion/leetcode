function bestClosingTime( customers: string ): number {
    let minPenalty = 0,
        curPenalty = 0;
    let minHour = 0;

    for ( let i = 0; i < customers.length; i++ ) {
        if ( customers[i] === 'N' ) {
            curPenalty++;
        } else {
            curPenalty--;
        }

        if ( curPenalty < minPenalty ) {
            minPenalty = curPenalty;
            minHour = i + 1;
        }
    }

    return minHour;
}

describe( '2483.minimum-penalty-for-a-shop', () => {
    it( 'case 1', () => {
        expect( bestClosingTime( 'YYNY' ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( bestClosingTime( 'NNNNN' ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( bestClosingTime( 'YYYY' ) ).toBe( 4 );
    } );
} );
