function makeSmallestPalindrome( s: string ): string {
    let l = 0,
        r = s.length - 1;
    const arr = s.split( '' );
    while ( l < r ) {
        if ( arr[l] !== arr[r] ) {
            if ( arr[l] < arr[r] ) {
                arr[r] = arr[l];
            } else {
                arr[l] = arr[r];
            }
        }
        l++, r--;
    }
    return arr.join( '' );
}

describe( '2697. Lexicographically Smallest Palindrome', () => {
    it( 'case 1', () => {
        expect( makeSmallestPalindrome( 'egcfe' ) ).toBe( 'efcfe' );
    } );
    it( 'case 2', () => {
        expect( makeSmallestPalindrome( 'abcd' ) ).toBe( 'abba' );
    } );
    it( 'case 3', () => {
        expect( makeSmallestPalindrome( 'seven' ) ).toBe( 'neven' );
    } );
} );
