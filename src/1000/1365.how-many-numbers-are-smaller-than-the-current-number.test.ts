function smallerNumbersThanCurrent( nums: number[] ): number[] {
    const cnt = Array( 101 ).fill( 0 );
    nums.forEach( ( num ) => cnt[num]++ );
    for ( let i = 1; i <= 100; i++ ) {
        cnt[i] += cnt[i - 1];
    }
    return nums.map( ( num ) => cnt[num - 1] ?? 0 );
}

describe( '1365. how many numbers are smaller than the current number', () => {
    it( 'case 1', () => {
        expect( smallerNumbersThanCurrent( [8, 1, 2, 2, 3] ) ).toEqual( [
            4, 0, 1, 1, 3,
        ] );
    } );
    it( 'case 2', () => {
        expect( smallerNumbersThanCurrent( [6, 5, 4, 8] ) ).toEqual( [2, 1, 0, 3] );
    } );
    it( 'case 3', () => {
        expect( smallerNumbersThanCurrent( [7, 7, 7, 7] ) ).toEqual( [0, 0, 0, 0] );
    } );
} );
