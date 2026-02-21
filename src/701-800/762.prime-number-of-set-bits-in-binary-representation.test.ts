function countPrimeSetBits( left: number, right: number ): number {
    let count = 0;
    const PRIME = 0b10100010100010101100;
    for ( let i = left; i <= right; i++ ) {
        const bits = bitCount( i );
        if ( ( PRIME & ( 1 << bits ) ) !== 0 ) {
            count++;
        }
    }

    return count;

    function bitCount( n: number ): number {
        let count = 0;
        while ( n > 0 ) {
            count++;
            n &= n - 1;
        }
        return count;
    }
}

describe( '762. prime-number-of-set-bits-in-binary-representation', () => {
    it( 'case 1', () => {
        expect( countPrimeSetBits( 6, 10 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( countPrimeSetBits( 10, 15 ) ).toBe( 5 );
    } );
} );
