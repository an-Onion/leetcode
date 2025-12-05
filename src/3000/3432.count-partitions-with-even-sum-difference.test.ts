import * as _ from 'lodash';

function countPartitions( nums: number[] ): number {
    return _.sum( nums ) % 2 === 0 ? nums.length - 1 : 0;
}

describe( '3432. count-partitions-with-even-sum-difference', () => {
    it( 'case 1', () => {
        expect( countPartitions( [10, 10, 3, 7, 6] ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        expect( countPartitions( [1, 2, 2] ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( countPartitions( [2, 4, 6, 8] ) ).toBe( 3 );
    } );
} );
