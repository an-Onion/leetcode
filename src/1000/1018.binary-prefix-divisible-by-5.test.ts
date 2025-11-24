function prefixesDivBy5( nums: number[] ): boolean[] {
    const ret: boolean[] = [];
    let num = 0;
    for ( const n of nums ) {
        num = ( ( num << 1 ) + n ) % 5;
        ret.push( num === 0 );
    }
    return ret;
}

describe( '1018. Binary Prefix Divisible By 5', () => {
    it( 'case 1', () => {
        expect( prefixesDivBy5( [0, 1, 1] ) ).toEqual( [true, false, false] );
    } );

    it( 'case 2', () => {
        expect( prefixesDivBy5( [1, 1, 1] ) ).toEqual( [false, false, false] );
    } );
} );
