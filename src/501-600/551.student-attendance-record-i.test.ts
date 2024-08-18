function checkRecord( s: string ): boolean {
    let a = 0,
        l = 0;

    for ( const c of s ) {
        if ( c === 'L' ) {
            if ( ++l === 3 ) return false;
            continue;
        }
        if ( c === 'A' ) {
            a++;
        }
        l = 0;
    }
    return a < 2;
}

describe( '551. Student Attendance Record I', () => {
    it( 'PPALLP', () => {
        expect( checkRecord( 'PPALLP' ) ).toBe( true );
    } );
    it( 'PPALLL', () => {
        expect( checkRecord( 'PPALLL' ) ).toBe( false );
    } );
    it( 'PPALLLL', () => {
        expect( checkRecord( 'PPALLLL' ) ).toBe( false );
    } );
} );
