function maxCoins( piles: number[] ): number {
    piles.sort( ( a, b ) => b - a );
    let ret = 0;
    const twoThirds = ( piles.length / 3 ) * 2;
    for ( let i = 0; i < twoThirds; i += 2 ) {
        ret += piles[i + 1];
    }
    return ret;
}

describe( '1561. Maximum Number of Coins You Can Get', () => {
    it( 'case 1', () => {
        const piles = [2, 4, 1, 2, 7, 8];
        expect( maxCoins( piles ) ).toBe( 9 );
    } );

    it( 'case 2', () => {
        const piles = [2, 4, 5];
        expect( maxCoins( piles ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        const piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
        expect( maxCoins( piles ) ).toBe( 18 );
    } );
} );
