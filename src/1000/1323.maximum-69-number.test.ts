function maximum69Number( num: number ): number {
    let radix = Math.pow( 10, Math.trunc( Math.log10( num ) ) );

    while ( radix ) {
        if ( Math.trunc( num / radix ) % 10 === 6 ) {
            num += 3 * radix;
            break;
        }
        radix = Math.trunc( radix / 10 );
    }

    return num;
}

describe( '1323. maximum 69 number', () => {
    it( 'case 1', () => {
        expect( maximum69Number( 9669 ) ).toBe( 9969 );
    } );

    it( 'case 2', () => {
        expect( maximum69Number( 9996 ) ).toBe( 9999 );
    } );

    it( 'case 3', () => {
        expect( maximum69Number( 9999 ) ).toBe( 9999 );
    } );
} );
