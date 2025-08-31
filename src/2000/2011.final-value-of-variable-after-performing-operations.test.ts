function finalValueAfterOperations( operations: string[] ): number {
    let x = 0;
    for ( const op of operations ) {
        op.includes( '++' ) ? x++ : x--;
    }
    return x;
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
