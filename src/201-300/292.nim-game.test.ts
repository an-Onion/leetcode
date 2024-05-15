function canWinNim( n: number ): boolean {
    return n % 4 !== 0;
}

describe( '292. nim-game', () => {
    it( '4', () => {
        expect( canWinNim( 4 ) ).toBeFalsy();
    } );

    it( '2', ()=> {
        expect( canWinNim( 2 ) ).toBeTruthy();
    } );

    it( '1', () => {
        expect( canWinNim( 1 ) ).toBeTruthy();
    } );

} );