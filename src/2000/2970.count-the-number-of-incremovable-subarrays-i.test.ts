function incremovableSubarrayCount( nums: number[] ): number {
    const N = nums.length;
    let i = 0;

    while ( i < N ) {
        if ( i + 1 >= N || nums[i] >= nums[i + 1] ) break;
        i++;
    }

    if ( i === N - 1 ) return ( N * ( N + 1 ) ) / 2;

    let result = i + 2;

    for ( let j = N - 1; j === N - 1 || nums[j] < nums[j + 1]; --j ) {
        while ( nums[i] >= nums[j] ) i--;

        result += i + 2;
    }
    return result;
}

describe( '2970. Count the Number of Inremovable Subarrays I', () => {
    it( '[1,2,3,4]', () => {
        expect( incremovableSubarrayCount( [1, 2, 3, 4] ) ).toBe( 10 );
    } );

    it( '[6,5,7,8]', () => {
        expect( incremovableSubarrayCount( [6, 5, 7, 8] ) ).toBe( 7 );
    } );

    it( '[8,7,6,6]', () => {
        expect( incremovableSubarrayCount( [8, 7, 6, 6] ) ).toBe( 3 );
    } );
} );