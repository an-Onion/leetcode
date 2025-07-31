function doesValidArrayExist( derived: number[] ): boolean {
    return derived.reduce( ( xor, x ) => xor ^ x, 0 ) === 0;
}

describe( '2683. Neighboring Bitwise XOR', () => {
    it( 'test case 1', () => {
        expect( doesValidArrayExist( [1, 1, 0] ) ).toBe( true );
    } );

    it( 'test case 2', () => {
        expect( doesValidArrayExist( [1, 1] ) ).toBe( true );
    } );

    it( 'test case 3', () => {
        expect( doesValidArrayExist( [1, 0] ) ).toBe( false );
    } );
} );
