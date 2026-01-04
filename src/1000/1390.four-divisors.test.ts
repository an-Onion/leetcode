function sumFourDivisors( nums: number[] ): number {
    let ret = 0;

    for ( const num of nums ) {
        let divisors = 0,
            sum = 0;
        for ( let i = 1; i * i <= num; i++ ) {
            if ( num % i !== 0 ) continue;

            divisors++, ( sum += i );

            if ( i * i === num ) continue;

            divisors++, ( sum += num / i );
        }
        if ( divisors === 4 ) {
            ret += sum;
        }
    }

    return ret;
}

describe( '1390. Four Divisors', () => {
    it( 'case 1', () => {
        expect( sumFourDivisors( [21, 4, 7] ) ).toBe( 32 );
    } );

    it( 'case 2', () => {
        expect( sumFourDivisors( [21, 21] ) ).toBe( 64 );
    } );

    it( 'case 3', () => {
        expect( sumFourDivisors( [1, 2, 3, 4, 5] ) ).toBe( 0 );
    } );
} );
