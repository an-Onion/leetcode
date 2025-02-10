type MultiDimensionalArray = ( number | MultiDimensionalArray )[];

const flat = function (
    arr: MultiDimensionalArray,
    n: number,
): MultiDimensionalArray {
    return DFS( 0, arr );

    function DFS(
        deep: number,
        arr: MultiDimensionalArray,
    ): MultiDimensionalArray {
        if ( deep === n ) {
            return arr;
        }
        const result: MultiDimensionalArray = [];
        for ( const ele of arr ) {
            if ( Array.isArray( ele ) ) {
                result.push( ...DFS( deep + 1, ele ) );
                continue;
            }
            result.push( ele );
        }
        return result;
    }
};

describe( '2625. flatten deeply nested array', () => {
    it( 'case 1', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const n = 0;
        expect( flat( arr, n ) ).toStrictEqual( [
            1,
            2,
            3,
            [4, 5, 6],
            [7, 8, [9, 10, 11], 12],
            [13, 14, 15],
        ] );
    } );

    it( 'case 2', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const n = 1;
        expect( flat( arr, n ) ).toStrictEqual( [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            [9, 10, 11],
            12,
            13,
            14,
            15,
        ] );
    } );

    it( 'case 3', () => {
        const arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, [9, 10, 11], 12],
            [13, 14, 15],
        ];
        const n = 2;
        expect( flat( arr, n ) ).toStrictEqual( [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        ] );
    } );
} );
