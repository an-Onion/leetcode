function compactObject( obj: Obj ): Obj {
    const newObj = {};
    for ( const i in obj ) {
        const item = obj[i];
        if ( !item ) continue;

        if ( typeof item === 'object' ) {
            newObj[i] = compactObject( item );
            continue;
        }
        newObj[i] = item;
    }

    if ( Array.isArray( obj ) ) {
        return Object.values( newObj );
    }
    return newObj;
}

describe( '2705. Compact Object', () => {
    it( 'case 1', () => {
        expect( compactObject( [null, 0, false, 1] ) ).toEqual( [1] );
    } );
    it( 'case 2', () => {
        expect( compactObject( { a: null, b: [false, 1] } ) ).toEqual( { b: [1] } );
    } );

    it( 'case 2', () => {
        expect( compactObject( [null, 0, 5, [0], [false, 16]] ) ).toEqual( [
            5,
            [],
            [16],
        ] );
    } );
} );
