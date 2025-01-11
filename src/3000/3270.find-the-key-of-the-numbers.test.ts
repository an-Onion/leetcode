function generateKey( num1: number, num2: number, num3: number ): number {
    const ret = [];
    while ( num1 | num2 | num3 ) {
        ret.push( Math.min( num1 % 10, num2 % 10, num3 % 10 ) );
        num1 = ( num1 / 10 ) | 0;
        num2 = ( num2 / 10 ) | 0;
        num3 = ( num3 / 10 ) | 0;
    }
    return ret.reverse().reduce( ( acc, cur ) => acc * 10 + cur, 0 );
}

describe( '3270. Find the Key of the Numbers', () => {
    it( 'case 1', () => {
        expect( generateKey( 1, 10, 1000 ) ).toBe( 0 );
    } );

    it( 'case 2', () => {
        const num1 = 987,
            num2 = 879,
            num3 = 798;
        expect( generateKey( num1, num2, num3 ) ).toBe( 777 );
    } );

    it( 'case 3', () => {
        expect( generateKey( 1, 2, 3 ) ).toBe( 1 );
    } );

    it( 'case 4', () => {
        expect( generateKey( 282, 718, 1028 ) ).toBe( 12 );
    } );
} );
