function maximumHappinessSum( happiness: number[], k: number ): number {
    return happiness
        .sort( ( a, b ) => b - a )
        .slice( 0, k )
        .map( ( h, i ) => Math.max( h - i, 0 ) )
        .reduce( ( acc, cur ) => acc + cur, 0 );
}

describe( '33075.maximize-happiness-of-selected-children', () => {
    it( 'case 1', () => {
        expect( maximumHappinessSum( [1, 2, 3], 2 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( maximumHappinessSum( [1, 1, 1, 1], 2 ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( maximumHappinessSum( [2, 3, 4, 5], 1 ) ).toBe( 5 );
    } );
} );
