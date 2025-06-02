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

function candy2( ratings: number[] ): number {
    const left = Array( ratings.length ).fill( 1 );
    for ( let i = 1; i < ratings.length; i++ ) {
        if ( ratings[i] <= ratings[i - 1] ) continue;
        left[i] = left[i - 1] + 1;
    }
    let right = 1,
        ret = left.at( -1 );
    for ( let i = ratings.length - 2; i >= 0; i-- ) {
        if ( ratings[i] <= ratings[i + 1] ) right = 1;
        else right++;
        ret += Math.max( left[i], right );
    }
    return ret;
}

describe( '135. candy', () => {
    it( '1,0,2', () => {
        expect( candy( [1, 0, 2] ) ).toEqual( 5 );
        expect( candy2( [1, 0, 2] ) ).toEqual( 5 );
    } );

    it( '1,2,2', () => {
        expect( candy( [1, 2, 2] ) ).toEqual( 4 );
        expect( candy2( [1, 2, 2] ) ).toEqual( 4 );
    } );

    it( '1,2,3', () => {
        expect( candy( [1, 2, 3] ) ).toEqual( 6 );
        expect( candy2( [1, 2, 3] ) ).toEqual( 6 );
    } );

    it( '1,3,2,2,1', () => {
        expect( candy( [1, 3, 2, 2, 1] ) ).toEqual( 7 );
        expect( candy2( [1, 3, 2, 2, 1] ) ).toEqual( 7 );
    } );
} );
