function reconstructQueue( people: number[][] ): number[][] {
    people.sort( ( a, b ) => ( a[0] === b[0] ? a[1] - b[1] : b[0] - a[0] ) );

    const ret: number[][] = [];
    for ( const person of people ) {
        ret.splice( person[1], 0, person );
    }
    return ret;
}

describe( '406. Queue Reconstruction by Height', () => {
    it( 'e.g. 1', () => {
        const people = [
            [7, 0],
            [4, 4],
            [7, 1],
            [5, 0],
            [6, 1],
            [5, 2],
        ];
        expect( reconstructQueue( people ) ).toEqual( [
            [5, 0],
            [7, 0],
            [5, 2],
            [6, 1],
            [4, 4],
            [7, 1],
        ] );
    } );

    it( 'e.g. 2', () => {
        const people = [
            [6, 0],
            [5, 0],
            [4, 0],
            [3, 2],
            [2, 2],
            [1, 4],
        ];
        expect( reconstructQueue( people ) ).toEqual( [
            [4, 0],
            [5, 0],
            [2, 2],
            [3, 2],
            [1, 4],
            [6, 0],
        ] );
    } );
} );
