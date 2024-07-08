function lastRemaining( n: number ): number {
    let [head, step, left] = [1, 1, true];
    while ( n > 1 ) {
        if ( left || n % 2 === 1 ) {
            head += step;
        }
        step <<= 1;
        n >>= 1;
        left = !left;
    }
    return head;
}

describe( '390. Elimination Game', () => {
    it( 'it should work', () => {
        expect( lastRemaining( 9 ) ).toBe( 6 );
        expect( lastRemaining( 1 ) ).toBe( 1 );
    } );
} );