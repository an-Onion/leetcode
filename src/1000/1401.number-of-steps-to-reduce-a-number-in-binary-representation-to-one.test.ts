function numSteps( s: string ): number {
    let ret = 0,
        meet1 = false;

    for ( let i = s.length - 1; i >= 0; --i ) {
        if ( s[i] === '0' ) {
            ret += meet1 ? 2 : 1;
            continue;
        }
        if ( meet1 ) {
            ret += 1;
            continue;
        }
        if ( i === 0 ) continue;

        ret += 2;
        meet1 = true;
    }

    return ret;
}

describe( '1401. Number of Steps to Reduce a Number in Binary Representation to One', () => {
    it( 'case 1', () => {
        expect( numSteps( '1101' ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( numSteps( '10' ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( numSteps( '1' ) ).toBe( 0 );
    } );
} );
