import * as _ from 'lodash';

function differenceOfSum( nums: number[] ): number {
    const elementSum = _.sum( nums );
    const digitSum = _.sum( nums.join( '' ).split( '' ).map( Number ) );
    return Math.abs( elementSum - digitSum );
}

describe( '2535. Difference Between Element Sum and Digit Sum of an Array', () => {
    it( 'should return 9', () => {
        expect( differenceOfSum( [1, 15, 6, 3] ) ).toBe( 9 );
    } );
    it( 'should return 0', () => {
        expect( differenceOfSum( [1, 2, 3, 4] ) ).toBe( 0 );
    } );
} );
