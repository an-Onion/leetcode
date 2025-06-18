function divideArray( nums: number[], k: number ): number[][] {
    nums.sort( ( a, b ) => a - b );
    const res: number[][] = [];
    for ( let i = 0; i < nums.length; i += 3 ) {
        if ( nums[i + 2] - nums[i] > k ) {
            return [];
        }
        res.push( [nums[i], nums[i + 1], nums[i + 2]] );
    }
    return res;
}

describe( '2966. Divide Array into Arrays with Max Difference', () => {
    it( 'case 1', () => {
        const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1],
            k = 2;
        expect( divideArray( nums, k ) ).toEqual( [
            [1, 1, 3],
            [3, 4, 5],
            [7, 8, 9],
        ] );
    } );
    it( 'case 2', () => {
        const nums = [2, 4, 2, 2, 5, 2],
            k = 2;
        expect( divideArray( nums, k ) ).toEqual( [] );
    } );
} );
