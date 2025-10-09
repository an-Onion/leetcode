function minTime( skill: number[], mana: number[] ): number {
    const n = skill.length,
        m = mana.length;
    const time = Array( n ).fill( 0 );

    for ( let j = 0; j < m; j++ ) {
        let current = 0;
        for ( let i = 0; i < n; i++ ) {
            current = Math.max( current, time[i] ) + skill[i] * mana[j];
        }
        time[n - 1] = current;

        for ( let i = n - 2; i >= 0; i-- ) {
            time[i] = time[i + 1] - skill[i + 1] * mana[j];
        }
    }

    return time[n - 1];
}

describe( '3494. Find the Minimum Amount of Time to Brew Potions', () => {
    it( 'case 1', () => {
        const skill = [1, 5, 2, 4],
            mana = [5, 1, 4, 2];
        expect( minTime( skill, mana ) ).toBe( 110 );
    } );

    it( 'case 2', () => {
        const skill = [1, 1, 1],
            mana = [1, 1, 1];
        expect( minTime( skill, mana ) ).toBe( 5 );
    } );

    it( 'case 3', () => {
        const skill = [1, 2, 3, 4],
            mana = [1, 2];
        expect( minTime( skill, mana ) ).toBe( 21 );
    } );
} );
