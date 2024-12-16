type F = ( x: number ) => number;

function compose( functions: F[] ): F {
    return function ( x ) {
        return functions.reduceRight( ( acc, fn ) => fn( acc ), x );
    };
}

describe( '2629.function-composition', () => {
    it( 'case 1', () => {
        const fn = compose( [( x ) => x + 1, ( x ) => 2 * x] );
        expect( fn( 4 ) ).toEqual( 9 );
    } );

    it( 'case 2', () => {
        const fn = compose( [( x ) => x + 1, ( x ) => x * x, ( x ) => 2 * x] );
        expect( fn( 4 ) ).toEqual( 65 );
    } );

    it( 'case 3', () => {
        const fn = compose( [] );
        expect( fn( 42 ) ).toEqual( 42 );
    } );

    it( 'case 4', () => {
        const fn = compose( [( x ) => 10 * x, ( x ) => 10 * x, ( x ) => 10 * x] );
        expect( fn( 1 ) ).toEqual( 1000 );
    } );
} );
