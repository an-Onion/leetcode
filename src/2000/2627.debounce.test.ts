export type F = ( ...args: number[] ) => void;

function debounce( fn: F, t: number ): F {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    return function ( ...args ) {
        clearTimeout( timer );
        timer = setTimeout( () => {
            fn( ...args );
        }, t );
    };
}

describe( '2627.debounce', () => {
    it( 'case 1', () => {
        const fn = jest.fn();
        const debouncedFn = debounce( fn, 20 );
        debouncedFn( 1 );
        debouncedFn( 2 );
        expect( fn ).toHaveBeenCalledTimes( 0 );
        setTimeout( () => {
            expect( fn ).toHaveBeenCalledTimes( 1 );
        }, 20 );
    } );

    it( 'case 2', () => {
        const fn = jest.fn();
        const debouncedFn = debounce( fn, 150 );
        debouncedFn( 1 );
        setTimeout( () => {
            debouncedFn( 1 );
        }, 50 );
        setTimeout( () => {
            debouncedFn( 2 );
            debouncedFn( 3 );
        }, 300 );
        setTimeout( () => {
            expect( fn ).toHaveBeenCalledTimes( 2 );
        }, 500 );
    } );
} );
