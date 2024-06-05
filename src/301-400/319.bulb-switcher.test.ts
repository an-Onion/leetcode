function bulbSwitch( n: number ): number {
    return Math.floor( Math.sqrt( n + .5 ) );
}

describe( '319. bulb-switcher', () => {

    it( '3', () => {
        expect( bulbSwitch( 3 ) ).toBe( 1 );
    } );

    it( '4', () => {
        expect( bulbSwitch( 4 ) ).toBe( 2 );
    } );

} );