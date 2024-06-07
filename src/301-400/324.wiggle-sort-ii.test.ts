/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort( nums: number[] ): void {

    nums.sort( ( a, b ) => a - b );

    const n = nums.length;
    const mid = ( n + 1 ) >> 1;
    const left = nums.slice( 0, mid );
    const right = nums.slice( mid );

    for ( let i = 0; i < n; i++ ) {
        nums[i] = i % 2 === 0 ? left.pop() : right.pop();
    }
}

describe( '324. wiggle sort ii', () => {

    it( '[1,5,1,1,6,4]', () => {
        const nums = [1, 5, 1, 1, 6, 4];
        wiggleSort( nums );
        expect( nums ).toStrictEqual( [1, 6, 1, 5, 1, 4] );
    } );

    it( '[1,3,2,2,3,1]', () => {
        const nums = [1, 3, 2, 2, 3, 1];
        wiggleSort( nums );
        expect( nums ).toStrictEqual( [2, 3, 1, 3, 1, 2] );
    } );

    it( '[1,1,2,1,2,2,1]', () => {
        const nums = [1, 1, 2, 1, 2, 2, 1];
        wiggleSort( nums );
        expect( nums ).toStrictEqual( [1, 2, 1, 2, 1, 2, 1] );
    } );

} );