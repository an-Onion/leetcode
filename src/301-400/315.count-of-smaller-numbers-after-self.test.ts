function countSmaller( nums: number[] ): number[] {
    const temp = Array( nums.length ).fill( 0 );
    const idx = nums.map( ( _, i ) => i );
    const tempIndex = Array( nums.length ).fill( 0 );
    const ret = Array( nums.length ).fill( 0 );

    function mergeSort( l: number, r: number ) {
        if ( l >= r ) return;
        const m = ( l + r ) >> 1;

        mergeSort( l, m );
        mergeSort( m + 1, r );
        merge( l, m, r );
    }

    function merge( l: number, m: number, r: number ) {
        let i = l,
            j = m + 1;
        for ( let k = l; k <= r; k++ ) {
            if ( i > m ) {
                tempIndex[k] = idx[j];
                temp[k] = nums[j++];
                continue;
            }
            if ( j > r ) {
                tempIndex[k] = idx[i];
                ret[idx[i]] += j - ( m + 1 );
                temp[k] = nums[i++];
                continue;
            }
            if ( nums[i] <= nums[j] ) {
                tempIndex[k] = idx[i];
                ret[idx[i]] += j - ( m + 1 );
                temp[k] = nums[i++];
                continue;
            }
            // nums[i] >= nums[j]
            tempIndex[k] = idx[j];
            temp[k] = nums[j++];
        }

        for ( let k = l; k <= r; k++ ) {
            idx[k] = tempIndex[k];
            nums[k] = temp[k];
        }
    }

    mergeSort( 0, nums.length - 1 );
    return ret;
}

describe( '315. Count of Smaller Numbers After Self', () => {
    it( '[5,2,6,1]', () => {
        expect( countSmaller( [5, 2, 6, 1] ) ).toStrictEqual( [2, 1, 1, 0] );
    } );

    it( '[-1]', () => {
        expect( countSmaller( [-1] ) ).toStrictEqual( [0] );
    } );

    it( '[-1,-1]', () => {
        expect( countSmaller( [-1, -1] ) ).toStrictEqual( [0, 0] );
    } );
} );
