function lexicalOrder( n: number ): number[] {
    const ret = [];
    let number = 1;
    for ( let i = 1; i <= n; i++ ) {
        ret.push( number );
        if ( number * 10 <= n ) {
            number *= 10;
            continue;
        }
        while ( number % 10 === 9 || number + 1 > n ) {
            number = Math.floor( number / 10 );
        }
        number++;
    }
    return ret;
}

describe( '386. lexicalOrder', () => {
    it( '13', () => {
        expect( lexicalOrder( 13 ) ).toEqual( [
            1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9,
        ] );
    } );

    it( '2', () => {
        expect( lexicalOrder( 2 ) ).toEqual( [1, 2] );
    } );
} );
