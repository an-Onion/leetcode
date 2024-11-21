function finalPositionOfSnake( n: number, commands: string[] ): number {
    let i = 0,
        j = 0;
    for ( const c of commands ) {
        if ( c[0] === 'U' ) i--;
        else if ( c[0] === 'D' ) i++;
        else if ( c[0] === 'R' ) j++;
        else j--;
    }
    return i * n + j;
}

describe( '3248.snake-in-matrix', () => {
    it( 'case 1', () => {
        expect( finalPositionOfSnake( 2, ['RIGHT', 'DOWN'] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( finalPositionOfSnake( 3, ['DOWN', 'RIGHT', 'UP'] ) ).toBe( 1 );
    } );
} );
