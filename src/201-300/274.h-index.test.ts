function hIndex( citations: number[] ): number {

    const N = citations.length;
    const bucket = Array( N+1 ).fill( 0 );

    for( const c of citations ) {
        bucket[Math.min( c, N )]++;
    }
    let h = 0;
    for( let i = N; i>=0; --i ){
        h += bucket[i];
        if( h >= i ){
            return i;
        }
    }
    return 0;
}


describe( '274. h-index', () => {

    it( '[3,0,6,1,5]', () => {
        expect( hIndex( [3,0,6,1,5] ) ).toBe( 3 );
    } );

    it( '[1,3,1]', () => {
        expect( hIndex( [1,3,1] ) ).toBe( 1 );
    } );
} );