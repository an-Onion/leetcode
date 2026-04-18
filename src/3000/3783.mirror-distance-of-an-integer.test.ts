function mirrorDistance( n: number ): number {
    return Math.abs( n - reverse( n ) );

    function reverse( n: number ): number {
        let ret = 0;

        while ( n > 0 ) {
            ret = ret * 10 + ( n % 10 );
            n = Math.floor( n / 10 );
        }

        return ret;
    }
}

describe( '3783. Mirror Distance of an Integer', () => {
    it( 'case 1', () => {
        expect( mirrorDistance( 25 ) ).toBe( 27 );
    } );

    it( 'case 2', () => {
        expect( mirrorDistance( 10 ) ).toBe( 9 );
    } );

    it( 'case 3', () => {
        expect( mirrorDistance( 7 ) ).toBe( 0 );
    } );
} );
