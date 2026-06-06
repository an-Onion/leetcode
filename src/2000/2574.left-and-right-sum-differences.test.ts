function leftRightDifference( nums: number[] ): number[] {
    const ret = Array( nums.length ).fill( 0 );

    let leftSum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        ret[i] = leftSum;
        leftSum += nums[i];
    }

    let rightSum = 0;
    for ( let i = nums.length - 1; i >= 0; --i ) {
        ret[i] = Math.abs( ret[i] - rightSum );
        rightSum += nums[i];
    }

    return ret;
}

describe( '2574. Left and Right Sum Differences', () => {
    it( 'case 1', () => {
        expect( leftRightDifference( [10, 4, 8, 3] ) ).toEqual( [15, 1, 11, 22] );
    } );

    it( 'case 2', () => {
        expect( leftRightDifference( [1] ) ).toEqual( [0] );
    } );
} );
