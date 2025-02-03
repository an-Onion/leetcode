function validPalindrome( s: string ): boolean {
    let low = 0,
        up = s.length - 1;

    while ( low < up ) {
        if ( s[low] !== s[up] ) {
            return (
                isPalindrome( s.substring( low + 1, up + 1 ) ) ||
                isPalindrome( s.substring( low, up ) )
            );
        }
        low++, up--;
    }
    return true;

    function isPalindrome( str: string ): boolean {
        let left = 0,
            right = str.length - 1;
        while ( left < right ) {
            if ( str[left] !== str[right] ) {
                return false;
            }
            left++, right--;
        }
        return true;
    }
}

describe( '680. Valid Palindrome II', () => {
    test( 'case 1', () => {
        expect( validPalindrome( 'aba' ) ).toBe( true );
    } );

    test( 'case 2', () => {
        expect( validPalindrome( 'abca' ) ).toBe( true );
    } );

    test( 'case 3', () => {
        expect( validPalindrome( 'abc' ) ).toBe( false );
    } );
} );
