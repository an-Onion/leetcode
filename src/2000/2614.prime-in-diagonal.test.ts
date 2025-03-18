function diagonalPrime( nums: number[][] ): number {
    let max = 0;
    for ( let i = 0; i < nums.length; ++i ) {
        if ( isPrime( nums[i][i] ) ) max = Math.max( max, nums[i][i] );
        if ( isPrime( nums[i][nums.length - i - 1] ) )
            max = Math.max( max, nums[i][nums.length - i - 1] );
    }

    return max;

    function isPrime( n: number ): boolean {
        if ( n <= 1 ) return false;
        let factor = 2;
        while ( factor * factor <= n ) {
            if ( n % factor === 0 ) return false;
            factor++;
        }
        return true;
    }
}

describe( '2614.prime-in-diagonal', () => {
    it( 'case 1', () => {
        expect(
            diagonalPrime( [
                [1, 2, 3],
                [5, 6, 7],
                [9, 10, 11],
            ] ),
        ).toEqual( 11 );
    } ),
        it( 'case 2', () => {
            expect(
                diagonalPrime( [
                    [1, 2, 3],
                    [5, 17, 7],
                    [9, 11, 10],
                ] ),
            ).toEqual( 17 );
        } );
} );
