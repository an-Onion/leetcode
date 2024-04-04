function singleNumber( nums: number[] ): number {

    let ret = 0;
    for ( let i = 0; i < 32; i++ ) {
        let sum = 0;
        for ( const num of nums ) {
            sum +=  ( num >> i ) & 1;
        }
        if ( sum % 3 ) {
            ret |= ( 1 << i );
        }

    }
    return ret;
}

describe( '137. single number ii', () => {
    it( '[2,2,3,2]', () => {
        expect( singleNumber( [2, 2, 3, 2] ) ).toBe( 3 );
    } );
    it( '[0,1,0,1,0,1,99]', () => {
        expect( singleNumber( [0, 1, 0, 1, 0, 1, 99] ) ).toBe( 99 );
    } );
    it( '[-2,-2,1,1,4,1,4,4,-4,-2]', () => {
        expect( singleNumber( [-2, -2, 1, 1, 4, 1, 4, 4, -4, -2] ) ).toBe( -4 );
    } );
} );