function candy( ratings: number[] ): number {
    if ( ratings.length === 0 ) return 0;

    let [pre, ret, inc, dec] = [1, 1, 1, 1];

    for ( let i = 1; i < ratings.length; i++ ) {
        if ( ratings[i] === ratings[i - 1] ) {
            [pre, ret, inc, dec] = [1, ret + 1, 1, 1];
            continue;
        }

        if ( ratings[i] > ratings[i - 1] ) {
            dec = 1;
            ret += ++pre;
            inc = pre;
            continue;
        }
        if ( dec === inc ) {
            dec++;
        }
        ret += dec++;
        pre = 1;
    }
    return ret;
}

describe( '135. candy', () => {
    it( '1,0,2', () => {
        expect( candy( [1, 0, 2] ) ).toEqual( 5 );
    } );

    it( '1,2,2', () => {
        expect( candy( [1, 2, 2] ) ).toEqual( 4 );
    } );

    it( '1,2,3', () => {
        expect( candy( [1, 2, 3] ) ).toEqual( 6 );
    } );

    it( '1,3,2,2,1', () => {
        expect( candy( [1, 3, 2, 2, 1] ) ).toEqual( 7 );
    } );
} );
