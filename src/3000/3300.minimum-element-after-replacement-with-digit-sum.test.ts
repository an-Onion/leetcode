function minElement( nums: number[] ): number {
    return Math.min( ...nums.map( ( v ) => getDigitSum( v ) ) );

    function getDigitSum( num: number ): number {
        let sum = 0;
        while ( num > 0 ) {
            sum += num % 10;
            num = Math.floor( num / 10 );
        }
        return sum;
    }
}

describe( '3300. Minimum Element After Replacement With Digit Sum', () => {
    it( 'case 1', () => {
        const nums = [10, 12, 13, 14];
        expect( minElement( nums ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const nums = [1, 2, 3, 4];
        expect( minElement( nums ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        const nums = [999, 19, 199];
        expect( minElement( nums ) ).toBe( 10 );
    } );
} );
