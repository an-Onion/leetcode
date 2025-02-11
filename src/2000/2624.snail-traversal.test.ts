interface Array<T> {
    snail( rowsCount: number, colsCount: number ): T[][];
}

Array.prototype.snail = function (
    rowsCount: number,
    colsCount: number,
): number[][] {
    if ( this.length !== rowsCount * colsCount ) return [];
    const ret: number[][] = Array.from( { length: rowsCount }, () => [] );

    for ( let j = 0; j < colsCount; j++ ) {
        for ( let i = 0; i < rowsCount; i++ ) {
            const row = j % 2 === 0 ? i : rowsCount - i - 1;
            ret[row].push( this[j * rowsCount + i] );
        }
    }
    return ret;
};

describe( '2624. Snail Traversal', () => {
    it( 'case 1', () => {
        const arr: Array<number> = [
            19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4,
            15,
        ];
        expect( arr.snail( 5, 4 ) ).toStrictEqual( [
            [19, 17, 16, 15],
            [10, 1, 14, 4],
            [3, 2, 12, 20],
            [7, 5, 18, 11],
            [9, 8, 6, 13],
        ] );
    } );

    it( 'case 2', () => {
        const arr = [1, 2, 3, 4];
        expect( arr.snail( 1, 4 ) ).toStrictEqual( [[1, 2, 3, 4]] );
    } );

    it( 'case 3', () => {
        const arr = [1, 3];
        expect( arr.snail( 2, 2 ) ).toStrictEqual( [] );
    } );
} );
