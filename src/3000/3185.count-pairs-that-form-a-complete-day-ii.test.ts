function countCompleteDayPairs( hours: number[] ): number {
    const array = Array( 24 ).fill( 0 );

    let ret = 0;
    for ( const hour of hours ) {
        ret += array[( 24 - ( hour % 24 ) ) % 24];
        array[hour % 24]++;
    }
    return ret;
}

describe( '3185.count-pairs-that-form-a-complete-day-ii', () => {
    it( 'e.g. 1', () => {
        const hours = [12, 12, 30, 24, 24];
        expect( countCompleteDayPairs( hours ) ).toBe( 2 );
    } );

    it( 'e.g. 2', () => {
        const hours = [72, 48, 24, 3];
        expect( countCompleteDayPairs( hours ) ).toBe( 3 );
    } );
} );
