function furthestDistanceFromOrigin( moves: string ): number {
    let L = 0,
        R = 0,
        B = 0;
    for ( const c of moves ) {
        if ( c === 'L' ) {
            L++;
        } else if ( c === 'R' ) {
            R++;
        } else {
            B++;
        }
    }
    return Math.abs( L - R ) + B;
}

describe( '2833. furthest-point-from-origin', () => {
    it( 'case 1', () => {
        expect( furthestDistanceFromOrigin( 'L_RL__R' ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( furthestDistanceFromOrigin( '_R__LL_' ) ).toBe( 5 );
    } );

    it( 'case 3', () => {
        expect( furthestDistanceFromOrigin( '_______' ) ).toBe( 7 );
    } );
} );
