/**
 Do not return anything, modify nums in-place instead.
 */
function rotate( nums: number[], k: number ): void {
    const N = nums.length;
    k = k % N;
    const right = nums.splice( 0, N-k );
    nums.push( ...right );
}

describe( '189. rotate-array', () => {
    it( 'nums = [1,2,3,4,5,6,7], k = 3', () => {
        const nums = [1,2,3,4,5,6,7], k = 3;
        rotate( nums, k );
        expect( nums ).toStrictEqual( [5,6,7,1,2,3,4] );
    } );

    it( 'nums = [-1,-100,3,99], k = 2', () => {
        const nums = [-1,-100,3,99], k = 2;
        rotate( nums, k );
        expect( nums ).toStrictEqual( [3,99,-1,-100] );
    } );
} );