function breakPalindrome( palindrome: string ): string {
    const N = palindrome.length;
    if ( N === 1 ) return '';
    const arr = palindrome.split( '' );
    for ( let i = 0; i < N >> 1; i++ ) {
        if ( arr[i] === 'a' ) continue;
        arr[i] = 'a';
        return arr.join( '' );
    }
    arr[N - 1] = 'b';
    return arr.join( '' );
}

describe( '1328.break-a-palindrome', () => {
    it( 'case 1', () => {
        expect( breakPalindrome( 'abccba' ) ).toEqual( 'aaccba' );
    } );
    it( 'case 2', () => {
        expect( breakPalindrome( 'a' ) ).toEqual( '' );
    } );
} );
