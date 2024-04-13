function titleToNumber( columnTitle: string ): number {
    let ret = 0;
    for( const c of columnTitle ){
        ret = ret * 26 + ( c.charCodeAt( 0 ) - 64 );
    }
    return ret;
}

describe( '171. excel-sheet-column-number', () => {
    it( 'A', () => {
        expect( titleToNumber( 'A' ) ).toBe( 1 );
    } );

    it( 'Z', () => {
        expect( titleToNumber( 'Z' ) ).toBe( 26 );
    } );

    it( 'AA', () => {
        expect( titleToNumber( 'AA' ) ).toBe( 27 );
    } );

    it( 'AB', () => {
        expect( titleToNumber( 'AB' ) ).toBe( 28 );
    } );

    it( 'ZY', () => {
        expect( titleToNumber( 'ZY' ) ).toBe( 701 );
    } );

} );