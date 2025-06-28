function maxSubsequence( nums: number[], k: number ): number[] {
    return nums
        .map( ( num, index ) => ( { num, index } ) )
        .sort( ( a, b ) => ( a.num === b.num ? a.index - b.index : b.num - a.num ) )
        .slice( 0, k )
        .sort( ( a, b ) => a.index - b.index )
        .map( ( item ) => item.num );
}

describe( '2099. Find Subsequence of Length K With the Largest Sum', () => {
    it( 'case 1', () => {
        expect( maxSubsequence( [2, 1, 3, 3], 2 ) ).toEqual( [3, 3] );
    } );
    it( 'case 2', () => {
        expect( maxSubsequence( [-1, -2, 3, 4], 3 ) ).toEqual( [-1, 3, 4] );
    } );
    it( 'case 3', () => {
        expect( maxSubsequence( [3, 4, 3, 3], 2 ) ).toEqual( [3, 4] );
    } );
} );
