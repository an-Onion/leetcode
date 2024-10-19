function maxCount( banned: number[], n: number, maxSum: number ): number {
    const set = new Set( banned );
    let ret = 0,
        total = 0;
    for ( let i = 1; i <= n; i++ ) {
        if ( !set.has( i ) ) {
            total += i;
            if ( total > maxSum ) {
                break;
            }
            ret++;
        }
    }
    return ret;
}

describe( '2554. Maximum Number of Integers to Choose From a Range I', () => {
    it( 'e.g. 1', () => {
        const banned = [1, 6, 5],
            n = 5,
            maxSum = 6;
        expect( maxCount( banned, n, maxSum ) ).toEqual( 2 );
    } );

    it( 'e.g. 2', () => {
        const banned = [1, 2, 3, 4, 5, 6, 7],
            n = 8,
            maxSum = 1;
        expect( maxCount( banned, n, maxSum ) ).toEqual( 0 );
    } );

    it( 'e.g. 3', () => {
        const banned = [11],
            n = 7,
            maxSum = 50;
        expect( maxCount( banned, n, maxSum ) ).toEqual( 7 );
    } );
} );
