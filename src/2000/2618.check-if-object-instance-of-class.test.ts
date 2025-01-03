function checkIfInstanceOf(
    obj: unknown,
    classFunction: () => unknown,
): boolean {
    if ( obj === null || obj === undefined ) return false;
    if ( !( classFunction instanceof Function ) ) return false;

    return Object( obj ) instanceof classFunction;
}

describe( '2618. check if object instance of class', () => {
    it( 'case 1', () => {
        expect( checkIfInstanceOf( new Date(), Date ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( checkIfInstanceOf( 5, Number ) ).toBe( true );
    } );
} );
