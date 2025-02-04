function sortArrayByParityII( nums: number[] ): number[] {
    let odd = 1;

    for ( let even = 0; even < nums.length; even += 2 ) {
        if ( nums[even] % 2 === 0 ) {
            continue;
        }

        while ( nums[odd] % 2 === 1 ) {
            odd += 2;
        }
        [nums[even], nums[odd]] = [nums[odd], nums[even]];
    }

    return nums;
}

describe( '922. Sort Array By Parity II', () => {
    it( 'case 1', () => {
        const nums = [4, 2, 5, 7];
        const ret = sortArrayByParityII( nums );
        expect( [
            [4, 5, 2, 7],
            [4, 7, 2, 5],
            [2, 5, 4, 7],
            [2, 7, 4, 5],
        ] ).toContainEqual( ret );
    } );

    it( 'case 2', () => {
        const nums = [2, 3];
        expect( [[2, 3]] ).toContainEqual( sortArrayByParityII( nums ) );
    } );
} );
