function fixedPoint( arr: number[] ): number {
    let l = 0,
        u = arr.length;

    while ( l <= u ) {
        const m = l + ( ( u - l ) >> 1 );
        if ( arr[m] >= m ) u = m - 1;
        else l = m + 1;
    }
    return arr[l] === l ? l : -1;
}

describe( '1064. Fixed Point', () => {
    it( 'Example 1', () => {
        const arr = [-10, -5, 0, 3, 7];
        expect( fixedPoint( arr ) ).toBe( 3 );
    } );

    it( 'Example 2', () => {
        const arr = [0, 2, 5, 8, 17];
        expect( fixedPoint( arr ) ).toBe( 0 );
    } );

    it( 'Example 3', () => {
        const arr = [-10, -5, 3, 4, 7, 9];
        expect( fixedPoint( arr ) ).toBe( -1 );
    } );

    it( 'Example 4', () => {
        const arr = [-10, -5, 2, 3, 7];
        expect( fixedPoint( arr ) ).toBe( 2 );
    } );
} );
