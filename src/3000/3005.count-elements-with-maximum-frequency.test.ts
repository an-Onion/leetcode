function maxFrequencyElements( nums: number[] ): number {
    let mapFreq = 0,
        maxCount;

    const map = Array( 101 ).fill( 0 );

    for ( const num of nums ) {
        map[num]++;
        if ( map[num] > mapFreq ) {
            mapFreq = map[num];
            maxCount = 1;
        } else if ( map[num] === mapFreq ) {
            maxCount++;
        }
    }
    return mapFreq * maxCount;
}

describe( '3005. count-elements-with-maximum-frequency', () => {
    it( 'case 1', () => {
        expect( maxFrequencyElements( [1, 2, 2, 3, 1, 4] ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        expect( maxFrequencyElements( [1, 2, 3, 4, 5] ) ).toBe( 5 );
    } );
} );
