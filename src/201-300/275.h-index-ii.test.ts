function hIndex( citations: number[] ): number {

    let low = 0, up = citations.length - 1;

    while( low <= up ){
        const mid = up+low >> 1;

        if( citations[mid] >= citations.length-mid )
            up = mid-1;
        else
            low = mid+1;
    }

    return citations.length-low;
}


describe( '275. h-index-ii', () => {
    it( '[0,1,3,5,6]', () => {
        expect( hIndex( [0, 1, 3, 5, 6] ) ).toEqual( 3 );
    } );

    it( '[1,2,100]', () => {
        expect( hIndex( [1, 2, 100] ) ).toEqual( 2 );
    } );

    it( '[0]', () => {
        expect( hIndex( [0] ) ).toEqual( 0 );
    } );
} );