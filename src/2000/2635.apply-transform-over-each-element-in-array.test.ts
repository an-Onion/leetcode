function map( arr: number[], fn: ( n: number, i: number ) => number ): number[] {
    const returnedArray: number[] = [];
    for ( const i in arr ) {
        returnedArray.push( fn( arr[i], +i ) );
    }
    return returnedArray;
}

describe( '2635. Apply Transform Over Each Element in Array', () => {
    it( 'case 1', () => {
        const arr = [1, 2, 3],
            fn = function plusone( n ) {
                return n + 1;
            };
        expect( map( arr, fn ) ).toEqual( [2, 3, 4] );
    } );

    it( 'case 2', () => {
        const arr = [1, 2, 3],
            fn = function plusI( n, i ) {
                return n + i;
            };
        expect( map( arr, fn ) ).toEqual( [1, 3, 5] );
    } );

    it( 'case 3', () => {
        const arr = [10, 20, 30],
            fn = function constant() {
                return 42;
            };
        expect( map( arr, fn ) ).toEqual( [42, 42, 42] );
    } );
} );
