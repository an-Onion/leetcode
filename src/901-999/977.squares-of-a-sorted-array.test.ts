function sortedSquares( nums: number[] ): number[] {
    const pivot = getPivot();
    const result: number[] = [];
    let left = pivot - 1,
        right = pivot;

    while ( result.length < nums.length ) {
        if ( left < 0 ) {
            result.push( nums[right++] ** 2 );
            continue;
        }
        if ( right >= nums.length ) {
            result.push( nums[left--] ** 2 );
            continue;
        }
        if ( Math.abs( nums[left] ) < Math.abs( nums[right] ) ) {
            result.push( nums[left--] ** 2 );
            continue;
        }
        result.push( nums[right++] ** 2 );
    }

    return result;

    function getPivot(): number {
        let i = 0;
        while ( nums[i] < 0 && i < nums.length ) {
            i++;
        }
        return i;
    }
}

describe( '977. Squares of a Sorted Array', () => {
    it( '[-4,-1,0,3,10]', () => {
        expect( sortedSquares( [-4, -1, 0, 3, 10] ) ).toStrictEqual( [
            0, 1, 9, 16, 100,
        ] );
    } );
    it( '[-7,-3,2,3,11]', () => {
        expect( sortedSquares( [-7, -3, 2, 3, 11] ) ).toStrictEqual( [
            4, 9, 9, 49, 121,
        ] );
    } );

    it( '[-4,-4,-3]', () => {
        expect( sortedSquares( [-4, -4, -3] ) ).toStrictEqual( [9, 16, 16] );
    } );
} );
