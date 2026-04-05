function judgeCircle( moves: string ): boolean {
    let x = 0,
        y = 0;

    for ( const move of moves ) {
        if ( move === 'U' ) {
            y++;
        } else if ( move === 'D' ) {
            y--;
        } else if ( move === 'L' ) {
            x--;
        } else if ( move === 'R' ) {
            x++;
        }
    }

    return x === 0 && y === 0;
}

describe( '657. robot-return-to-origin', () => {
    it( 'case 1', () => {
        expect( judgeCircle( 'UD' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( judgeCircle( 'LL' ) ).toBe( false );
    } );
} );
