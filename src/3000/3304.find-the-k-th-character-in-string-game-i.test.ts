function kthCharacter( k: number ): string {
    const bitCount = countSetBits( k - 1 );
    // Map to corresponding lowercase letter (a-z)
    return String.fromCharCode( 'a'.charCodeAt( 0 ) + ( bitCount % 26 ) );

    function countSetBits( n: number ): number {
        let count = 0;
        while ( n > 0 ) {
            count += n & 1;
            n = n >> 1;
        }
        return count;
    }
}

describe( '3304. find-the-k-th-character-in-string-game-i', () => {
    it( 'case 1', () => {
        expect( kthCharacter( 5 ) ).toBe( 'b' );
    } );

    it( 'case 2', () => {
        expect( kthCharacter( 10 ) ).toBe( 'c' );
    } );
} );
