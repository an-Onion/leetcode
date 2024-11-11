/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros( arr: number[] ): void {
    const N = arr.length;
    let i = 0,
        j = 0;

    while ( j < N ) {
        arr[i++] === 0 ? ( j += 2 ) : j++;
    }

    if ( j > N ) {
        ( j -= 2 ), i--;
        arr[j] = 0;
    }
    while ( --i >= 0 ) {
        if ( arr[i] === 0 ) {
            arr[--j] = 0;
        }
        arr[--j] = arr[i];
    }
}

describe( '1089.duplicate-zeros', () => {
    it( 'case 1', () => {
        const arr = [1, 0, 2, 3, 0, 4, 5, 0];
        duplicateZeros( arr );
        expect( arr ).toStrictEqual( [1, 0, 0, 2, 3, 0, 0, 4] );
    } );

    it( 'case 2', () => {
        const arr = [1, 2, 3];
        duplicateZeros( arr );
        expect( arr ).toStrictEqual( [1, 2, 3] );
    } );
} );
