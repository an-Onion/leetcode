function numberOfEmployeesWhoMetTarget(
    hours: number[],
    target: number,
): number {
    let ret = 0;

    for ( const hour of hours ) {
        if ( hour >= target ) {
            ret++;
        }
    }
    return ret;
}

describe( '2798.number-of-employees-who-met-the-target', () => {
    it( 'case 1', () => {
        expect( numberOfEmployeesWhoMetTarget( [0, 1, 2, 3, 4], 2 ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( numberOfEmployeesWhoMetTarget( [5, 1, 2, 3, 4], 2 ) ).toBe( 4 );
    } );
} );
