function countOperations( num1: number, num2: number ): number {
    if ( num2 === 0 ) return 0;

    return Math.floor( num1 / num2 ) + countOperations( num2, num1 % num2 );
}

describe( '2169.count-operations-to-obtain-zero', () => {
    it( 'case 1', () => {
        expect( countOperations( 2, 3 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( countOperations( 10, 10 ) ).toBe( 1 );
    } );
} );
