function maxRotateFunction( nums: number[] ): number {
    const n = nums.length;
    if ( n === 0 ) return 0;

    const sum = nums.reduce( ( a, b ) => a + b, 0 );
    let currentF = nums.reduce( ( a, b, i ) => a + b * i, 0 );
    let maxResult = currentF;

    for ( let i = 1; i < n; i++ ) {
        const lastElement = nums[n - i];
        currentF += sum - n * lastElement;
        maxResult = Math.max( maxResult, currentF );
    }
    return maxResult;
}

describe( '396. rotate-function', () => {
    it( '[4,3,2,6]', () => {
        expect( maxRotateFunction( [4, 3, 2, 6] ) ).toBe( 26 );
    } );

    it( '[100]', () => {
        expect( maxRotateFunction( [100] ) ).toBe( 0 );
    } );
} );
