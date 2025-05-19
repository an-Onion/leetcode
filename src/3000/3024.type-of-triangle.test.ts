function triangleType( nums: number[] ): string {
    nums.sort( ( a, b ) => a - b );
    if ( nums[0] + nums[1] <= nums[2] ) {
        return 'none';
    }
    if ( nums[0] === nums[2] ) {
        return 'equilateral';
    }
    if ( nums[0] === nums[1] || nums[1] === nums[2] ) {
        return 'isosceles';
    }
    return 'scalene';
}

describe( '3024. triangleType', () => {
    it( 'case 1', () => {
        expect( triangleType( [2, 2, 3] ) ).toBe( 'isosceles' );
    } );
    it( 'case 2', () => {
        expect( triangleType( [3, 3, 3] ) ).toBe( 'equilateral' );
    } );
} );
