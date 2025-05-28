function numberOfSteps( num: number ): number {
    let count = Math.log2( num ) | 0;
    while ( num ) {
        count++;
        num &= num - 1;
    }
    return count;
}

describe( '1342. Number of Steps to Reduce a Number to Zero', () => {
    it( 'case 1', () => {
        expect( numberOfSteps( 14 ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( numberOfSteps( 8 ) ).toBe( 4 );
    } );
    it( 'case 3', () => {
        expect( numberOfSteps( 123 ) ).toBe( 12 );
    } );
} );
