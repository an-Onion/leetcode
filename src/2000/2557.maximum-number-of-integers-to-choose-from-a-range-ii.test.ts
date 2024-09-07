function maxCount( banned: number[], n: number, maxSum: number ): number {
    const arr = [0, ...new Set( banned ), n + 1].sort( ( a, b ) => a - b );

    let ret = 0;

    for ( let i = 1; i < arr.length; i++ ) {
        const first = arr[i - 1] + 1;
        const cnt = arr[i] - first;
        const sum = first * cnt + ( cnt * ( cnt - 1 ) ) / 2;
        if ( sum < maxSum ) {
            maxSum -= sum;
            ret += cnt;
            continue;
        }
        const u = bs( first, arr[i] - 1, maxSum );
        ret += u - first + 1;
        break;
    }
    return ret;

    function bs( start: number, u: number, target: number ): number {
        let l = start;
        while ( l <= u ) {
            const m = Math.floor( ( l + u ) / 2 );
            const sum = ( ( start + m ) * ( m - start + 1 ) ) / 2;
            if ( sum <= target ) l = m + 1;
            else u = m - 1;
        }
        return u;
    }
}

describe( '2557. Maximum Number of Integers to Choose From a Range II', () => {
    it( 'should return 1', () => {
        const banned = [1, 4, 6],
            n = 6,
            maxSum = 4;
        expect( maxCount( banned, n, maxSum ) ).toBe( 1 );
    } );
    it( 'should return 3', () => {
        const banned = [4, 3, 5, 6],
            n = 7,
            maxSum = 18;
        expect( maxCount( banned, n, maxSum ) ).toBe( 3 );
    } );

    it( 'should return 37', () => {
        const banned = [
                23, 20, 10, 46, 16, 27, 5, 13, 38, 18, 11, 56, 51, 53, 42, 19,
                49, 9, 3,
            ],
            n = 56,
            maxSum = 1087;
        expect( maxCount( banned, n, maxSum ) ).toBe( 37 );
    } );
} );
