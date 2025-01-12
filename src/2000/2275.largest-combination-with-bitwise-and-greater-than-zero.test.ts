function largestCombination( candidates: number[] ): number {
    let ret = 0;
    for ( let i = 0; i < 24; ++i ) {
        const sofar = candidates.filter(
            ( candidate ) => candidate & ( 1 << i ),
        ).length;
        ret = Math.max( ret, sofar );
    }
    return ret;
}

describe( '2275. Largest Combination with Bitwise AND Greater Than Zero', () => {
    it( 'case 1', () => {
        const candidates = [16, 17, 71, 62, 12, 24, 14];
        expect( largestCombination( candidates ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const candidates = [8, 8];
        expect( largestCombination( candidates ) ).toBe( 2 );
    } );
} );
