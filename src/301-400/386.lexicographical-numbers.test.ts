function lexicalOrder( n: number ): number[] {
    const ret = [];
    function DFS( prev: number ) {
        if ( prev > n ) return;
        ret.push( prev );
        for ( let i = 0; i <= 9; i++ ) {
            const next = prev * 10 + i;
            if ( next === 0 ) continue;
            DFS( next );
        }
    }
    DFS( 0 );
    ret.shift();
    return ret;
}

describe( '386. lexicalOrder', () => {
    it( '13', () => {
        expect( lexicalOrder( 13 ) ).toEqual( [1,10,11,12,13,2,3,4,5,6,7,8,9] );
    } );

    it( '2', () => {
        expect( lexicalOrder( 2 ) ).toEqual( [1, 2] );
    } );
} );