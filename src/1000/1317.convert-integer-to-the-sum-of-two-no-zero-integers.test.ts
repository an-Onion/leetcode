function getNoZeroIntegers( n: number ): number[] {
    for ( let A = 1; A < n; A++ ) {
        const B = n - A;
        if ( !A.toString().includes( '0' ) && !B.toString().includes( '0' ) ) {
            return [A, B];
        }
    }
    return [];
}

describe( '1317. Convert Integer to the Sum of Two No-Zero Integers', () => {
    it( 'case 1', () => {
        expect( getNoZeroIntegers( 2 ) ).toEqual( [1, 1] );
    } );

    it( 'case 2', () => {
        expect( getNoZeroIntegers( 11 ) ).toEqual( [2, 9] );
    } );

    it( 'case 3', () => {
        expect( getNoZeroIntegers( 10000 ) ).toEqual( [1, 9999] );
    } );
} );
