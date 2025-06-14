function minMaxDifference( num: number ): number {
    const s = num.toString();

    let pos = 0;

    while ( s[pos] === '9' ) pos++;

    const max = s.replaceAll( s[pos], '9' );

    const min = s.replaceAll( s[0], '0' );

    return Number( max ) - Number( min );
}

describe( '2566. Maximum Difference by Remapping a Digit', () => {
    it( 'case 1', () => {
        expect( minMaxDifference( 11891 ) ).toBe( 99009 );
    } );
    it( 'case 2', () => {
        expect( minMaxDifference( 90 ) ).toBe( 99 );
    } );
} );
