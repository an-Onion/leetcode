function* fibGenerator(): Generator<number, number, number> {
    let a = 0,
        b = 1;

    while ( true ) {
        yield a;
        b += a;
        a = b - a;
    }
}

describe( '2648. Generate Fibonacci Sequence', () => {
    it( 'case 1', () => {
        const gen = fibGenerator();
        expect( gen.next().value ).toBe( 0 );
        expect( gen.next().value ).toBe( 1 );
        expect( gen.next().value ).toBe( 1 );
        expect( gen.next().value ).toBe( 2 );
        expect( gen.next().value ).toBe( 3 );
        expect( gen.next().value ).toBe( 5 );
        expect( gen.next().value ).toBe( 8 );
    } );
} );
