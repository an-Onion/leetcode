type MultidimensionalArray = ( MultidimensionalArray | number )[];

function* inorderTraversal(
    arr: MultidimensionalArray,
): Generator<number, void, unknown> {
    for ( const item of arr ) {
        if ( Array.isArray( item ) ) {
            yield* inorderTraversal( item );
        } else {
            yield item;
        }
    }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

describe( '2649. Nested Array Generator', () => {
    it( 'case 1', () => {
        const gen = inorderTraversal( [[[6]], [1, 3], []] );
        expect( gen.next().value ).toBe( 6 );
        expect( gen.next().value ).toBe( 1 );
        expect( gen.next().value ).toBe( 3 );
        expect( gen.next().value ).toBe( undefined );
    } );

    it( 'case 2', () => {
        const gen = inorderTraversal( [] );
        expect( gen.next().value ).toBe( undefined );
    } );
} );
