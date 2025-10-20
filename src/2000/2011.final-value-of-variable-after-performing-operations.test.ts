function finalValueAfterOperations( operations: string[] ): number {
    return operations.reduce(
        ( acc, cur ) => ( cur.includes( '++' ) ? ++acc : --acc ),
        0,
    );
}

describe( '2011. final-value-of-variable-after-performing-operations', () => {
    it( 'case 1', () => {
        expect( finalValueAfterOperations( ['--X', 'X++', 'X++'] ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( finalValueAfterOperations( ['++X', '++X', 'X++'] ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        expect( finalValueAfterOperations( ['X++', '++X', '--X', 'X--'] ) ).toBe( 0 );
    } );
} );
