function sortByBits( arr: number[] ): number[] {
    const bit: number[] = new Array( 10001 ).fill( 0 );
    for ( let i = 1; i <= 10000; ++i ) {
        bit[i] = bit[i >> 1] + ( i & 1 );
    }

    return arr.sort( ( x: number, y: number ) => bit[x] - bit[y] || x - y );
}

describe( '1356. Sort Integers by The Number of 1 Bits', () => {
    it( 'case 1', () => {
        expect( sortByBits( [0, 1, 2, 3, 4, 5, 6, 7, 8] ) ).toEqual( [
            0, 1, 2, 4, 8, 3, 5, 6, 7,
        ] );
    } );

    it( 'case 2', () => {
        expect(
            sortByBits( [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1] ),
        ).toEqual( [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024] );
    } );

    it( 'case 3', () => {
        expect( sortByBits( [10000, 10000] ) ).toEqual( [10000, 10000] );
    } );

    it( 'case 4', () => {
        expect( sortByBits( [2, 3, 5, 7, 11, 13, 17, 19] ) ).toEqual( [
            2, 3, 5, 17, 7, 11, 13, 19,
        ] );
    } );
} );
