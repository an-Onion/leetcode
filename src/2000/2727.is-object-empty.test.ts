function isEmpty( obj: Obj ): boolean {
    for ( const _ in obj ) return false;
    return true;
}

describe( '2727. is-object-empty', () => {
    it( 'case 1', () => {
        expect( isEmpty( {} ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( isEmpty( { x: 5, y: 42 } ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( isEmpty( [null, false, 0] ) ).toBe( false );
    } );
} );
