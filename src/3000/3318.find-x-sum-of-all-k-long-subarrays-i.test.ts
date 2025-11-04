function findXSum( nums: number[], k: number, x: number ): number[] {
    const ret = [];

    for ( let i = 0; i < nums.length - k + 1; i++ ) {
        ret.push( getXSum( nums, i ) );
    }

    return ret;

    function getXSum( nums: number[], start: number ): number {
        const map = new Map<number, number>();
        for ( let i = start; i < start + k; i++ ) {
            map.set( nums[i], ( map.get( nums[i] ) || 0 ) + 1 );
        }

        const arr = Array.from( map.entries() );
        arr.sort( ( a, b ) => ( b[1] === a[1] ? b[0] - a[0] : b[1] - a[1] ) );

        let sum = 0;
        for ( let i = 0; i < Math.min( x, arr.length ); i++ ) {
            sum += arr[i][0] * arr[i][1];
        }

        return sum;
    }
}

describe( '3318.find-x-sum-of-all-k-long-subarrays-i', () => {
    it( 'case 1', () => {
        const nums = [1, 1, 2, 2, 3, 4, 2, 3],
            k = 6,
            x = 2;
        expect( findXSum( nums, k, x ) ).toEqual( [6, 10, 12] );
    } );

    it( 'case 2', () => {
        const nums = [3, 8, 7, 8, 7, 5],
            k = 2,
            x = 2;

        expect( findXSum( nums, k, x ) ).toEqual( [11, 15, 15, 15, 12] );
    } );

    it( 'case 3', () => {
        const nums = [9, 2, 2],
            k = 3,
            x = 3;
        expect( findXSum( nums, k, x ) ).toEqual( [13] );
    } );
} );
