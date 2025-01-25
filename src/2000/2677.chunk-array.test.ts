export type Obj = Record<string, JSONValue> | Array<JSONValue> | PropertyKey;

function chunk( arr: Obj[], size: number ): Obj[][] {
    const ret: Obj[][] = [];

    while ( arr.length > 0 ) {
        const chunk = arr.splice( 0, size );
        ret.push( chunk );
    }
    return ret;
}

describe( '2677. Chunk Array', () => {
    it( 'case 1', () => {
        const arr = [1, 2, 3, 4, 5],
            size = 1;
        expect( chunk( arr, size ) ).toStrictEqual( [[1], [2], [3], [4], [5]] );
    } );

    it( 'case 2', () => {
        const arr = [1, 9, 6, 3, 2],
            size = 3;
        expect( chunk( arr, size ) ).toStrictEqual( [
            [1, 9, 6],
            [3, 2],
        ] );
    } );

    it( 'case 3', () => {
        const arr = [8, 5, 3, 2, 6],
            size = 6;
        expect( chunk( arr, size ) ).toStrictEqual( [[8, 5, 3, 2, 6]] );
    } );
} );
