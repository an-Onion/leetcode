const kthSmallestPrimeFraction = function ( arr, k ) {
    const n = arr.length;
    let left = 0.0,
        right = 1.0;
    while ( true ) {
        const mid = ( left + right ) / 2;
        let i = -1,
            count = 0,
            x = 0,
            y = 1;

        for ( let j = 1; j < n; ++j ) {
            while ( arr[i + 1] / arr[j] < mid ) {
                ++i;
                if ( arr[i] * y <= arr[j] * x ) continue;
                ( x = arr[i] ), ( y = arr[j] );
            }
            count += i + 1;
        }

        if ( count === k ) {
            return [x, y];
        } else if ( count < k ) {
            left = mid;
        } else {
            right = mid;
        }
    }
};

describe( '786.k-th-smallest-prime-fraction', () => {
    it( 'case 1', () => {
        expect( kthSmallestPrimeFraction( [1, 2, 3, 5], 3 ) ).toEqual( [2, 5] );
    } );
    it( 'case 2', () => {
        expect( kthSmallestPrimeFraction( [1, 7], 1 ) ).toEqual( [1, 7] );
    } );
} );
