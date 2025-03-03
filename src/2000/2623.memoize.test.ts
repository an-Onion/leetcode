function memoize( fn: Fn ): Fn {
    const cache = new Map<string, number>();
    return function ( ...args ) {
        const key = args.join( ',' );
        if ( !cache.has( key ) ) {
            const result = fn( ...args );
            cache.set( key, result );
        }

        return cache.get( key );
    };
}

describe( '2626. memorize', () => {
    it( 'case 1', () => {
        const fn = jest.fn( ( a: number, b: number ) => a + b );
        const memoizedSum = memoize( fn );
        expect( memoizedSum( 2, 2 ) ).toBe( 4 );
        expect( memoizedSum( 2, 2 ) ).toBe( 4 );
        expect( fn ).toHaveBeenCalledTimes( 1 );
        expect( memoizedSum( 1, 2 ) ).toBe( 3 );
        expect( fn ).toHaveBeenCalledTimes( 2 );
    } );

    it( 'case 2', () => {
        const factorial = ( n ) => ( n <= 1 ? 1 : n * factorial( n - 1 ) );
        const fn = jest.fn( factorial );
        const memoizedSum = memoize( fn );
        expect( memoizedSum( 2 ) ).toBe( 2 );
        expect( memoizedSum( 3 ) ).toBe( 6 );
        expect( memoizedSum( 2 ) ).toBe( 2 );
        expect( fn ).toHaveBeenCalledTimes( 2 );
        expect( memoizedSum( 3 ) ).toBe( 6 );
        expect( fn ).toHaveBeenCalledTimes( 2 );
    } );

    it( 'case 3', () => {
        function fib( n: number ) {
            if ( n <= 1 ) return 1;
            return fib( n - 1 ) + fib( n - 2 );
        }
        const fn = jest.fn( fib );
        const memoizedSum = memoize( fn );
        expect( memoizedSum( 5 ) ).toBe( 8 );
        expect( fn ).toHaveBeenCalledTimes( 1 );
    } );
} );
