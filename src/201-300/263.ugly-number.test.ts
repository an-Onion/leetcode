function isUgly( n: number ): boolean {

    if ( n <= 0 ) {
        return false;
    }

    const divisors = [2, 3, 5];
    for( const divisor of divisors ){
        while( n % divisor === 0 ){
            n /= divisor;
        }
    }

    return n === 1;
}

describe( '263.ugly-number', () => {
    it( '6', () => {
        expect( isUgly( 6 ) ).toBeTruthy();
    } );

    it( '1', () => {
        expect( isUgly( 1 ) ).toBeTruthy();
    } );

    it( '14', () => {
        expect( isUgly( 14 ) ).toBeFalsy();
    } );
} );