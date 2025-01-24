export type Fn = ( value: JSONValue ) => number;

function sortBy( arr: JSONValue[], fn: Fn ): JSONValue[] {
    return arr.sort( ( a, b ) => fn( a ) - fn( b ) );
}

describe( '2724. Sort By', () => {
    it( 'case 1', () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = ( value: number ) => value;
        expect( sortBy( arr, fn ) ).toEqual( [1, 2, 3, 4, 5] );
    } );

    it( 'case 2', () => {
        const arr = [{ x: 1 }, { x: 0 }, { x: -1 }],
            fn = ( d ) => d.x;
        expect( sortBy( arr, fn ) ).toEqual( [{ x: -1 }, { x: 0 }, { x: 1 }] );
    } );

    it( 'case 3', () => {
        const arr = [
                [3, 4],
                [5, 2],
                [10, 1],
            ],
            fn = ( x: number[] ) => x[1];
        expect( sortBy( arr, fn ) ).toEqual( [
            [10, 1],
            [5, 2],
            [3, 4],
        ] );
    } );
} );
