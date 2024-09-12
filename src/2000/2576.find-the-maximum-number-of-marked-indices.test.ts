function maxNumOfMarkedIndices( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );

    const m = ( nums.length / 2 ) | 0;

    let count = 0,
        j = m;

    for ( let i = 0; i < m && j < nums.length; i++ ) {
        while ( nums[i] * 2 > nums[j] ) {
            j++;
        }
        if ( j >= nums.length ) break;
        count += 2;
        j++;
    }
    return count;
}

describe( '2576. Find the Maximum Number of Marked Indices', () => {
    it( 'e.g. 1', () => {
        expect( maxNumOfMarkedIndices( [3, 5, 2, 4] ) ).toBe( 2 );
    } );

    it( 'e.g. 2', () => {
        expect( maxNumOfMarkedIndices( [9, 2, 5, 4] ) ).toBe( 4 );
    } );

    it( 'e.g. 3', () => {
        expect( maxNumOfMarkedIndices( [7, 6, 8] ) ).toBe( 0 );
    } );
} );
