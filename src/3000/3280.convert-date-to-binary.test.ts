function convertDateToBinary( date: string ): string {
    return date
        .split( '-' )
        .map( ( s ) => dec2bin( +s ) )
        .join( '-' );

    function dec2bin( dec: number ): string {
        return ( dec >>> 0 ).toString( 2 );
    }
}

describe( '3280. convert date to binary', () => {
    it( '2020-10-10', () => {
        expect( convertDateToBinary( '2080-02-29' ) ).toBe( '100000100000-10-11101' );
    } );

    it( '1900-01-01', () => {
        expect( convertDateToBinary( '1900-01-01' ) ).toBe( '11101101100-1-1' );
    } );
} );
