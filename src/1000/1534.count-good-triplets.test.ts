import * as _ from 'lodash';

function countGoodTriplets(
    arr: number[],
    a: number,
    b: number,
    c: number,
): number {
    const idx = _.range( arr.length ).sort( ( a, b ) => arr[a] - arr[b] );

    let count = 0;

    for ( const j of idx ) {
        const left = [];
        for ( const i of idx ) {
            if ( i < j && Math.abs( arr[i] - arr[j] ) <= a ) {
                left.push( arr[i] );
            }
        }
        const right = [];
        for ( const k of idx ) {
            if ( k > j && Math.abs( arr[k] - arr[j] ) <= b ) {
                right.push( arr[k] );
            }
        }

        let l = 0,
            u = 0;
        for ( const x of left ) {
            while ( u < right.length && right[u] <= x + c ) {
                u++;
            }
            while ( l < right.length && right[l] < x - c ) {
                l++;
            }
            count += u - l;
        }
    }
    return count;
}

describe( '1534. count good triplets', () => {
    it( 'case 1', () => {
        const arr = [3, 0, 1, 1, 9, 7],
            a = 7,
            b = 2,
            c = 3;
        expect( countGoodTriplets( arr, a, b, c ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const arr = [1, 1, 2, 2, 3],
            a = 0,
            b = 0,
            c = 1;
        expect( countGoodTriplets( arr, a, b, c ) ).toBe( 0 );
    } );
} );
