function makeTheIntegerZero( num1: number, num2: number ): number {
    let k = 1;

    while ( true ) {
        const x: bigint = BigInt( num1 ) - BigInt( k ) * BigInt( num2 );

        if ( x < BigInt( k ) ) {
            return -1;
        }

        const bitCount = countBit( x );
        if ( k >= bitCount ) {
            return k;
        }

        k++;
    }

    function countBit( x: bigint ) {
        let count = 0;
        while ( x !== 0n ) {
            x &= x - 1n;
            count++;
        }
        return count;
    }
}

describe( '2749. minimum-operations-to-make-the-integer-zero', () => {
    it( 'case 1', () => {
        expect( makeTheIntegerZero( 3, -2 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( makeTheIntegerZero( 5, 7 ) ).toBe( -1 );
    } );
} );
