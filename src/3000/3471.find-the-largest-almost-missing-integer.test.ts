function largestInteger( nums: number[], k: number ): number {
    if ( nums.length === k ) {
        return Math.max( ...nums );
    }

    const counts = Array( 51 ).fill( 0 );

    for ( const num of nums ) {
        counts[num]++;
    }

    if ( k === 1 ) {
        return counts.reduce( ( prev, cur, i ) => ( cur === 1 ? i : prev ), -1 );
    }

    let ret = -1;

    if ( counts.at( nums[0] ) === 1 ) {
        ret = Math.max( ret, nums[0] );
    }

    if ( counts.at( nums.at( -1 )! ) === 1 ) {
        ret = Math.max( ret, nums.at( -1 )! );
    }
    return ret;
}

describe( '3471.find-the-largest-almost-missing-integer', () => {
    it( 'case 1', () => {
        const nums = [3, 9, 2, 1, 7],
            k = 3;
        expect( largestInteger( nums, k ) ).toBe( 7 );
    } );

    it( 'case 2', () => {
        const nums = [3, 9, 7, 2, 1, 7],
            k = 4;
        expect( largestInteger( nums, k ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        const nums = [0, 0],
            k = 1;
        expect( largestInteger( nums, k ) ).toBe( -1 );
    } );

    it( 'case 4', () => {
        const nums = [50, 0],
            k = 1;
        expect( largestInteger( nums, k ) ).toBe( 50 );
    } );
} );
