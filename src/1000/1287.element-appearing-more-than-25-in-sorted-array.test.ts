function findSpecialInteger( arr: number[] ): number {
    const N = arr.length;
    const span = Math.floor( N / 4 ) + 1;

    for ( let i = 0; i < N; i += span ) {
        const start = bs( arr[i] );
        const end = bs( arr[i] + 1 );
        if ( end - start >= span ) {
            return arr[i];
        }
    }
    return -1;

    function bs( target: number ) {
        let l = 0,
            u = arr.length - 1;
        while ( l <= u ) {
            const m = l + Math.floor( ( u - l ) / 2 );
            if ( arr[m] >= target ) {
                u = m - 1;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}

describe( '1287. element-appearing-more-than-25-in-sorted-array', () => {
    it( 'case 1', () => {
        const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
        expect( findSpecialInteger( arr ) ).toEqual( 6 );
    } );
    it( 'case 2', () => {
        const arr = [1, 1];
        expect( findSpecialInteger( arr ) ).toEqual( 1 );
    } );
} );
