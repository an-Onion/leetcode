/**
 Do not return anything, modify s in-place instead.
 */
function reverseString( s: string[] ): void {

    let [l, r] = [0, s.length-1];

    while( l < r ) {
        [s[l], s[r]] = [s[r], s[l]];
        l++, r--;
    }
}

describe( '344. reverse-string', () => {

    it( 'hello', () => {
        const input = ['h', 'e', 'l', 'l', 'o'];
        reverseString( input );
        expect( input ).toStrictEqual( ['o', 'l', 'l', 'e', 'h'] );
    } );

    it( ' Hannah', () => {
        const input = ['H', 'a', 'n', 'n', 'a', 'H'];
        reverseString( input );
        expect( input ).toStrictEqual( ['H', 'a', 'n', 'n', 'a', 'H'] );
    } );
} );