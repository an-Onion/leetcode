type OnceFn = ( ...args: JSONValue[] ) => JSONValue | undefined;

function once( fn: ( ...args: number[] ) => number ): OnceFn {
    let hasBeenCalled = false;
    return function ( ...args ) {
        if ( !hasBeenCalled ) {
            hasBeenCalled = true;
            return fn.apply( this, args );
        }
    };
}

describe( '2666. allow one function call', () => {
    it( 'case 1', () => {
        const fn = ( a, b, c ) => a + b + c;
        const onceFn = once( fn );

        expect( onceFn( 1, 2, 3 ) ).toBe( 6 );
        expect( onceFn( 2, 3, 6 ) ).toBeUndefined();
    } );

    it( 'case 2', () => {
        const fn = ( a, b, c ) => a * b * c;
        const onceFn = once( fn );

        expect( onceFn( 5, 7, 4 ) ).toBe( 140 );
        expect( onceFn( 2, 3, 6 ) ).toBeUndefined();
        expect( onceFn( 4, 6, 8 ) ).toBeUndefined();
    } );
} );
