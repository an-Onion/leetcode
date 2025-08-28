import _ from 'lodash';

function countPartitions( nums: number[] ): number {
    const sum = _.sum( nums );
    if ( sum % 2 !== 0 ) {
        return 0;
    }
    return nums.length - 1;
}

describe( '3432. count-partitions-with-even-sum-difference', () => {
    it( 'case 1', () => {
        expect( countPartitions( [10, 10, 3, 7, 6] ) ).toBe( 0 );
    } );
    it( 'case 2', () => {
        expect( countPartitions( [1, 2, 2] ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( countPartitions( [2, 4, 6, 8] ) ).toBe( 3 );
    } );
} );
