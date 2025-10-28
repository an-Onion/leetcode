import * as _ from 'lodash';

function countValidSelections( nums: number[] ): number {
    let left = 0,
        right = _.sum( nums ),
        ret = 0;

    for ( const num of nums ) {
        if ( num !== 0 ) {
            left += num;
            right -= num;
            continue;
        }

        if ( left >= right && left <= 1 + right ) {
            ret++;
        }
        if ( right >= left && right <= 1 + left ) {
            ret++;
        }
    }
    return ret;
}

describe( '3354. make-array-elements-equal-to-zero', () => {
    it( 'case 1', () => {
        expect( countValidSelections( [1, 0, 2, 0, 3] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( countValidSelections( [2, 3, 4, 0, 4, 1, 0] ) ).toBe( 0 );
    } );
} );
