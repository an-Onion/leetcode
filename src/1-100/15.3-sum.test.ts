/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum( nums: number[] ): number[][] {
    nums.sort( ( a, b ) => a - b );
    const ans = [];
    for ( let i = 0; i < nums.length; ++i ) {
        if ( nums[i - 1] === nums[i] ) continue;
        let [low, up] = [i + 1, nums.length - 1];

        while ( low < up ) {
            [low, up] = twoSum( -nums[i], low, up );
            if ( low === null ) break;
            ans.push( [nums[i], nums[low], nums[up]] );
            low++, up--;
            while ( nums[low] === nums[low - 1] ) low++;
            while ( nums[up] === nums[up + 1] ) up--;
        }
    }
    return ans;

    function twoSum( target: number, low: number, up: number ) {
        while ( low < up ) {
            const sum = nums[low] + nums[up];
            if ( sum === target ) {
                return [low, up];
            }
            if ( sum < target ) low++;
            else up--;
        }
        return [null, null];
    }
}
describe( '3Sum', () => {
    it( '[-1,0,1,2,-1,-4]', () => {
        expect( threeSum( [-1, 0, 1, 2, -1, -4] ) ).toStrictEqual( [
            [-1, -1, 2],
            [-1, 0, 1],
        ] );
    } );

    it( '[]', () => {
        expect( threeSum( [] ) ).toStrictEqual( [] );
    } );

    it( '[0]', () => {
        expect( threeSum( [0] ) ).toStrictEqual( [] );
    } );

    it( '[0,0,0,0]', () => {
        expect( threeSum( [0, 0, 0, 0] ) ).toStrictEqual( [[0, 0, 0]] );
    } );

    it( 'long array', () => {
        expect(
            threeSum( [
                34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15,
                21, -43, 57, -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62,
                -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15,
                -29, 36, -29, 10, -70, 69, 17, 49,
            ] ),
        ).toStrictEqual( [
            [-82, -11, 93],
            [-82, 13, 69],
            [-82, 17, 65],
            [-82, 21, 61],
            [-82, 26, 56],
            [-82, 33, 49],
            [-82, 34, 48],
            [-82, 36, 46],
            [-70, -14, 84],
            [-70, -6, 76],
            [-70, 1, 69],
            [-70, 13, 57],
            [-70, 15, 55],
            [-70, 21, 49],
            [-70, 34, 36],
            [-66, -11, 77],
            [-66, -3, 69],
            [-66, 1, 65],
            [-66, 10, 56],
            [-66, 17, 49],
            [-49, -6, 55],
            [-49, -3, 52],
            [-49, 1, 48],
            [-49, 2, 47],
            [-49, 13, 36],
            [-49, 15, 34],
            [-49, 21, 28],
            [-43, -14, 57],
            [-43, -6, 49],
            [-43, -3, 46],
            [-43, 10, 33],
            [-43, 12, 31],
            [-43, 15, 28],
            [-43, 17, 26],
            [-29, -14, 43],
            [-29, 1, 28],
            [-29, 12, 17],
            [-14, -3, 17],
            [-14, 1, 13],
            [-14, 2, 12],
            [-11, -6, 17],
            [-11, 1, 10],
            [-3, 1, 2],
        ] );
    } );
} );
