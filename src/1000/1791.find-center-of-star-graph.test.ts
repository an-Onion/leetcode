function findCenter( edges: number[][] ): number {
    return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
        ? edges[0][0]
        : edges[0][1];
}

describe( '1791. find-center-of-star-graph', () => {
    it( 'case 1', () => {
        const edges = [
            [1, 2],
            [2, 3],
            [4, 2],
        ];

        expect( findCenter( edges ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const edges = [
            [1, 2],
            [5, 1],
            [1, 3],
            [1, 4],
        ];

        expect( findCenter( edges ) ).toBe( 1 );
    } );
} );
