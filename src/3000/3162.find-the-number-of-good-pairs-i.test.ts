function numberOfPairs( nums1: number[], nums2: number[], k: number ): number {
    const pairs = new Map<number, number>();
    for ( const num of nums2 ) {
        pairs.set( num, ( pairs.get( num ) ?? 0 ) + 1 );
    }

    let count = 0;
    for ( const num of nums1 ) {
        if ( num % k !== 0 ) continue;
        const target = num / k;
        for ( let div = 1; div * div <= target; div++ ) {
            if ( target % div !== 0 ) continue;

            if ( pairs.has( div ) ) {
                count += pairs.get( div );
            }

            if ( div * div !== target && pairs.has( target / div ) ) {
                count += pairs.get( target / div );
            }
        }
    }
    return count;
}

describe( '3162. Find the Number of Good Pairs', () => {
    it( 'e.g. 1', () => {
        const nums1 = [1, 3, 4],
            nums2 = [1, 3, 4],
            k = 1;

        expect( numberOfPairs( nums1, nums2, k ) ).toBe( 5 );
    } );

    it( 'e.g. 2', () => {
        const nums1 = [1, 2, 4, 12],
            nums2 = [2, 4],
            k = 3;
        expect( numberOfPairs( nums1, nums2, k ) ).toBe( 2 );
    } );
} );
