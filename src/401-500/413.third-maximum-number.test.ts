function thirdMax( nums: number[] ): number {
    let a = -Number.MAX_VALUE,
        b = -Number.MAX_VALUE,
        c = -Number.MAX_VALUE;
    for ( const num of nums ) {
        if ( num > a ) {
            c = b;
            b = a;
            a = num;
        } else if ( a > num && num > b ) {
            c = b;
            b = num;
        } else if ( b > num && num > c ) {
            c = num;
        }
    }
    return c === -Number.MAX_VALUE ? a : c;
}

describe( '413. Third Maximum Number', () => {
    it( '[3, 2, 1]', () => {
        expect( thirdMax( [3, 2, 1] ) ).toBe( 1 );
    } );
    it( '[1, 2]', () => {
        expect( thirdMax( [1, 2] ) ).toBe( 2 );
    } );
} );
