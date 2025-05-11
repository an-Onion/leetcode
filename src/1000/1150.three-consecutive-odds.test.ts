function threeConsecutiveOdds( arr: number[] ): boolean {
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 1 ) {
            count++;
        } else {
            count = 0;
        }

        if ( count === 3 ) {
            return true;
        }
    }

    return false;
}

describe( '1150. Three Consecutive Odds', () => {
    it( 'case 1', () => {
        const arr = [2, 6, 4, 1];
        expect( threeConsecutiveOdds( arr ) ).toBe( false );
    } );

    it( 'case 2', () => {
        const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
        expect( threeConsecutiveOdds( arr ) ).toBe( true );
    } );
} );
