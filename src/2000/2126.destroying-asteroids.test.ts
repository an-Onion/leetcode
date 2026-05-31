function asteroidsDestroyed( mass: number, asteroids: number[] ): boolean {
    asteroids.sort( ( a, b ) => a - b );

    for ( const a of asteroids ) {
        if ( mass < a ) {
            return false;
        }
        mass += a;
    }
    return true;
}

describe( '2126. Destroying Asteroids', () => {
    it( 'case 1', () => {
        const mass = 10,
            asteroids = [3, 9, 19, 5, 21];
        expect( asteroidsDestroyed( mass, asteroids ) ).toBe( true );
    } );

    it( 'case 2', () => {
        const mass = 5,
            asteroids = [4, 9, 23, 4];
        expect( asteroidsDestroyed( mass, asteroids ) ).toBe( false );
    } );
} );
