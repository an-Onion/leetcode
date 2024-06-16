function countRangeSum( nums: number[], lower: number, upper: number ): number {
    let s = 0;
    const sum = [0];
    for ( const v of nums ) {
        s += v;
        sum.push( s );
    }

    function mergeSort( start: number, end: number ): number {
        if ( start === end ) return 0;
        const mid = ( start + end ) >> 1;
        const n1 = mergeSort( start, mid );
        const n2 = mergeSort( mid + 1, end );
        let ret = n1 + n2;
        let i = start;
        let l = mid + 1,
            r = mid + 1;
        while ( i <= mid ) {
            while ( l <= end && sum[l] - sum[i] < lower ) l++;
            while ( r <= end && sum[r] - sum[i] <= upper ) r++;

            ret += r - l;
            i++;
        }

        // merge
        const t = Array( end - start + 1 ).fill( 0 );
        let p1 = start,
            p2 = mid + 1,
            p = 0;
        while ( p1 <= mid || p2 <= end ) {
            if ( p1 > mid ) {
                t[p++] = sum[p2++];
                continue;
            }
            if ( p2 > end ) {
                t[p++] = sum[p1++];
                continue;
            }
            if ( sum[p1] < sum[p2] ) {
                t[p++] = sum[p1++];
                continue;
            }
            // sum[p1] >= sum[p2]
            t[p++] = sum[p2++];
        }
        for ( let j = start; j <= end; j++ ) {
            sum[j] = t[j - start];
        }

        return ret;
    }

    return mergeSort( 0, sum.length - 1 );
}

describe( '327. count range sum', () => {
    it( 'case 1', () => {
        const nums = [-2, 5, -1],
            lower = -2,
            upper = 2;
        expect( countRangeSum( nums, lower, upper ) ).toEqual( 3 );
    } );

    it( 'case 2', () => {
        // TODO
        const nums = [],
            lower = 0,
            upper = 0;
        expect( countRangeSum( nums, lower, upper ) ).toEqual( 0 );
    } );
} );
