function minimumChairs( s: string ): number {
    let ret = 0,
        e = 0;

    for ( const c of s ) {
        c === 'E' ? e++ : e--;
        ret = Math.max( ret, Math.abs( e ) );
    }
    return ret;
}

describe( '3168. minimum-number-of-chairs-in-a-waiting-room', () => {
    it( 'case 1', () => {
        expect( minimumChairs( 'EEEEEEE' ) ).toBe( 7 );
    } );

    it( 'case 2', () => {
        expect( minimumChairs( 'ELELEEL' ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect( minimumChairs( 'ELEELEELLL' ) ).toBe( 3 );
    } );
} );
