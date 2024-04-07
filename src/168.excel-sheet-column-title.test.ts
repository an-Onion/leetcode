function convertToTitle( columnNumber: number ): string {

    const sb = [];
    while ( columnNumber !== 0 ) {
        columnNumber--;
        const rem = columnNumber % 26;
        columnNumber = columnNumber / 26 | 0;
        sb.push( String.fromCharCode( rem + 65 ) );
    }
    return sb.reverse().join( '' );
}

describe( '168. excel-sheet-column-title', () => {
    it( '1', () => {
        expect( convertToTitle( 1 ) ).toBe( 'A' );
    } );

    it( '28', () => {
        expect( convertToTitle( 28 ) ).toBe( 'AB' );
    } );

    it( '701', ()=> {
        expect( convertToTitle( 701 ) ).toBe( 'ZY' );
    } );
} );