function cancellable( fn: Fn, args: JSONValue[], t: number ): Fn {
    fn( ...args );
    const timer = setInterval( fn, t, ...args );
    return () => {
        clearInterval( timer );
    };
}

describe.skip( '2725. interval-cancellation', () => {
    it( 'case 1', () => {
        const fn = jest.fn( ( x ) => x * 2 );
        const cancelFn = cancellable( fn, [4], 35 );
        setTimeout( () => {
            expect( fn ).toHaveBeenCalledTimes( 5 );
            expect( fn ).toHaveBeenLastCalledWith( 8 );
            cancelFn();
        }, 190 );

        setTimeout( () => {
            expect( fn ).toHaveBeenCalledTimes( 5 );
        }, 200 );
    } );
} );
