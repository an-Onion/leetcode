function createHelloWorld() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    return function ( ...args: any[] ): string {
        return 'Hello World';
    };
}

describe( '2667. create hello world function', () => {
    it( 'case 1', () => {
        const helloWorld = createHelloWorld();
        expect( helloWorld() ).toBe( 'Hello World' );
    } );

    it( 'case 2', () => {
        const helloWorld = createHelloWorld();
        expect( helloWorld( {}, null, 42 ) ).toBe( 'Hello World' );
    } );
} );
