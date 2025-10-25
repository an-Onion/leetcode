function totalMoney( n: number ): number {
    const week = Math.floor( n / 7 );
    const day = n % 7;

    return ( 7 * ( 7 + week ) * week + day * ( 2 * week + day + 1 ) ) / 2;
}

describe( '1716. calculate-money-in-leetcode-bank', () => {
    it( 'case 1', () => {
        expect( totalMoney( 4 ) ).toBe( 10 );
    } );

    it( 'case 2', () => {
        expect( totalMoney( 10 ) ).toBe( 37 );
    } );

    it( 'case 3', () => {
        expect( totalMoney( 20 ) ).toBe( 96 );
    } );
} );
