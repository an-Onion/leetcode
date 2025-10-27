function numberOfBeams( bank: string[] ): number {
    let count = 0,
        prev = 0;

    for ( const row of bank ) {
        const cur = row.match( /1/g )?.length;
        if ( cur > 0 ) {
            count += prev * cur;
            prev = cur;
        }
    }

    return count;
}

describe( '2125. number-of-laser-beams-in-a-bank', () => {
    it( 'case 1', () => {
        expect( numberOfBeams( ['011001', '000000', '010100', '001000'] ) ).toBe( 8 );
    } );

    it( 'case 2', () => {
        expect( numberOfBeams( ['000', '111', '000'] ) ).toBe( 0 );
    } );
} );
