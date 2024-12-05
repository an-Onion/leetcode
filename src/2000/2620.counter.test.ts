function createCounter( n: number ): () => number {
    return function () {
        return n++;
    };
}

describe( '2620. counter', () => {
    it( 'should return 10', () => {
        const counter = createCounter( 10 );
        expect( counter() ).toBe( 10 );
        expect( counter() ).toBe( 11 );
        expect( counter() ).toBe( 12 );
    } );
} );
