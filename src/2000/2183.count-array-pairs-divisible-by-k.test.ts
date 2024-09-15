function countPairs( nums: number[], k: number ): number {
    const map = new Map<number, number>();

    for ( const num of nums ) {
        const remainder = gcd( num, k ) % k;
        map.set( remainder, ( map.get( remainder ) ?? 0 ) + 1 );
    }

    let count = 0;
    for ( const [x1, y1] of map.entries() ) {
        for ( const [x2, y2] of map.entries() ) {
            if ( ( x1 * x2 ) % k !== 0 ) continue;
            count += y1 * y2;
        }
    }

    for ( const num of nums ) {
        if ( ( num * num ) % k === 0 ) {
            count--;
        }
    }

    return count / 2;

    function gcd( a: number, b: number ): number {
        if ( b === 0 ) return a;
        return gcd( b, a % b );
    }
}

describe( '2183. Count Array Pairs Divisible by K', () => {
    it( 'Example 1', () => {
        const nums = [1, 2, 3, 4, 5],
            k = 2;
        expect( countPairs( nums, k ) ).toEqual( 7 );
    } );
    it( 'Example 2', () => {
        const nums = [1, 2, 3, 4],
            k = 5;
        expect( countPairs( nums, k ) ).toEqual( 0 );
    } );
} );
