type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter( init: number ): Counter {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => ( count = init ),
    };
}

describe( 'Counter II', () => {
    it( 'case 1', () => {
        const counter = createCounter( 5 );
        expect( counter.increment() ).toBe( 6 );
        expect( counter.reset() ).toBe( 5 );
        expect( counter.decrement() ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const counter = createCounter( 0 );
        expect( counter.increment() ).toBe( 1 );
        expect( counter.increment() ).toBe( 2 );
        expect( counter.decrement() ).toBe( 1 );
        expect( counter.reset() ).toBe( 0 );
        expect( counter.reset() ).toBe( 0 );
    } );
} );
