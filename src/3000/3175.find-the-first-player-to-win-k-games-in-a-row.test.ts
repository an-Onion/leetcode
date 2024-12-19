function findWinningPlayer( skills: number[], k: number ): number {
    const N = skills.length;
    let cnt = 0,
        i = 0,
        max = 0;

    while ( i < N ) {
        let j = i + 1;
        max = i;

        while ( skills[i] > skills[j] ) {
            j++, cnt++;
        }
        if ( cnt >= k ) return i;
        cnt = 1;

        i = j;
    }
    return max;
}

describe( '3175.find-the-first-player-to-win-k-games-in-a-row', () => {
    it( 'e.g. 1', () => {
        const skills = [4, 2, 6, 3, 9],
            k = 2;
        expect( findWinningPlayer( skills, k ) ).toBe( 2 );
    } );

    it( 'e.g. 2', () => {
        const skills = [2, 5, 4],
            k = 3;
        expect( findWinningPlayer( skills, k ) ).toBe( 1 );
    } );
} );
