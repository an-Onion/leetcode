function filter( arr: number[], fn: Fn ): number[] {
    let size = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( fn( arr[i], i ) ) {
            arr[size++] = arr[i];
        }
    }
    arr.length = size;
    return arr;
}

describe( '2634. filter-elements-from-array', () => {
    it( 'case 1', () => {
        const fn = function greaterThan10( n ) {
            return n > 10;
        };
        expect( filter( [0, 10, 20, 30], fn ) ).toEqual( [20, 30] );
    } );

    it( 'case 2', () => {
        const fn = function firstIndex( n, i ) {
            return i === 0;
        };
        expect( filter( [1, 2, 3], fn ) ).toEqual( [1] );
    } );

    it( 'case 3', () => {
        const fn = function plusOne( n ) {
            return n + 1;
        };
        expect( filter( [-2, -1, 0, 1, 2], fn ) ).toEqual( [-2, 0, 1, 2] );
    } );
} );
