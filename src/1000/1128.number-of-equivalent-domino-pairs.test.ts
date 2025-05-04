function numEquivDominoPairs( dominoes: number[][] ): number {
    const num = Array( 100 ).fill( 0 );
    let ret = 0;
    for ( let i = 0; i < dominoes.length; ++i ) {
        const [a, b] = dominoes[i];
        const index = a > b ? a * 10 + b : b * 10 + a;
        ret += num[index];
        num[index]++;
    }
    return ret;
}

describe( '1128. Number of Equivalent Domino Pairs', () => {
    it( 'case 1', () => {
        expect(
            numEquivDominoPairs( [
                [1, 2],
                [2, 1],
                [3, 4],
                [5, 6],
            ] ),
        ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect(
            numEquivDominoPairs( [
                [1, 2],
                [1, 2],
                [1, 1],
                [1, 2],
                [2, 2],
            ] ),
        ).toBe( 3 );
    } );
} );
