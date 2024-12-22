function getKth( lo: number, hi: number, k: number ): number {
    const map = new Map<number, number>();

    const arr = [];

    for ( let i = lo; i <= hi; i++ ) {
        const val = getKth( i );
        arr.push( [i, val] );
    }

    arr.sort( ( a, b ) => ( a[1] === b[1] ? a[0] - b[0] : a[1] - b[1] ) );

    return arr[k - 1][0];

    function getKth( x: number ) {
        if ( map.has( x ) ) {
            return map.get( x );
        }

        if ( x === 1 ) {
            return map.set( x, 0 ).get( x );
        }

        if ( x % 2 === 0 ) {
            return map.set( x, 1 + getKth( ( x / 2 ) | 0 ) ).get( x );
        } else {
            return map.set( x, 1 + getKth( x * 3 + 1 ) ).get( x );
        }
    }
}

describe( '1387. Sort Integers by The Power Value', () => {
    it( 'case 1', () => {
        const lo = 12,
            hi = 15,
            k = 2;
        expect( getKth( lo, hi, k ) ).toEqual( 13 );
    } );

    it( 'case 2', () => {
        const lo = 7,
            hi = 11,
            k = 4;
        expect( getKth( lo, hi, k ) ).toEqual( 7 );
    } );
} );
