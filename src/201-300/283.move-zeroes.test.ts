/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes( nums: number[] ): void {

    let j = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] !== 0 ) {
            nums[j++] = nums[i];
        }
    }
    for ( let i = j; i < nums.length; i++ ) {
        nums[i] = 0;
    }
}

describe( '283. move-zeroes', () => {
    it( '[0,1,0,3,12]', () => {
        const nums = [0,1,0,3,12];
        moveZeroes( nums );
        expect( nums ).toEqual( [1,3,12,0,0] );
    } );

    it( '[0]', () => {
        const nums = [0];
        moveZeroes( nums );
        expect( nums ).toEqual( [0] );
    } );
} );