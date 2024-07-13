function canSortArray( nums: number[] ): boolean {

    function countSetBits( n: number ): number {
        let count = 0;
        while ( n > 0 ) {
            count++;
            n &= n - 1;
        }
        return count;
    }

    let pre = 0, sofar = 0;
    nums[-1] = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        if( countSetBits( nums[i] ) !== countSetBits( nums[i-1] ) ) {
            pre = sofar;
            sofar = nums[i];
        }
        if( nums[i] < pre ) {
            return false;
        }

        sofar = Math.max( sofar, nums[i] );
    }
    return true;
}

describe( '3011. Find If Array Can Be Sorted in K Moves', () => {
    it( '[8,4,2,30,15]', () => {
        expect( canSortArray( [8,4,2,30,15] ) ).toBeTruthy();
    } );
    it( '[1,2,3,4,5]', () => {
        expect( canSortArray( [1,2,3,4,5] ) ).toBeTruthy();
    } );

    it( '[3,16,8,4,2]', () => {
        expect( canSortArray( [3,16,8,4,2] ) ).toBeFalsy();
    } );
} );