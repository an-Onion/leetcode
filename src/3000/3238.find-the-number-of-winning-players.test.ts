function winningPlayerCount( n: number, pick: number[][] ): number {
    const cnt = Array.from( { length: n }, () => Array( 11 ).fill( 0 ) );
    const set = new Set<number>();
    for ( const [x, y] of pick ) {
        if ( set.has( x ) ) continue;
        if ( ++cnt[x][y] <= x ) continue;
        set.add( x );
    }
    return set.size;
}

describe( '3238.find-the-number-of-winning-players', () => {
    it( 'case 1', () => {
        const n = 4,
            pick = [
                [0, 0],
                [1, 0],
                [1, 0],
                [2, 1],
                [2, 1],
                [2, 0],
            ];
        expect( winningPlayerCount( n, pick ) ).toBe( 2 );
    } );
    it( 'case 2', () => {
        const n = 5,
            pick = [
                [1, 1],
                [1, 2],
                [1, 3],
                [1, 4],
            ];
        expect( winningPlayerCount( n, pick ) ).toBe( 0 );
    } );
    it( 'case 3', () => {
        const n = 5,
            pick = [
                [1, 1],
                [2, 4],
                [2, 4],
                [2, 4],
            ];
        expect( winningPlayerCount( n, pick ) ).toBe( 1 );
    } );
} );
