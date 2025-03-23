function canBeValid( s: string, locked: string ): boolean {
    const n = s.length;
    if ( n % 2 ) return false;

    let left = 0,
        right = 0;
    for ( let i = 1; i <= n; ++i ) {
        if ( locked[i - 1] === '1' && s[i - 1] === ')' ) {
            right++;
        }
        if ( locked[n - i] === '1' && s[n - i] === '(' ) {
            left++;
        }

        if ( left > i / 2 || right > i / 2 ) {
            return false;
        }
    }

    return true;
}

describe( '2116.check-if-a-parentheses-string-can-be-valid', () => {
    it( 'case 1', () => {
        expect( canBeValid( '))()))', '010100' ) ).toEqual( true );
    } );
    it( 'case 2', () => {
        expect( canBeValid( '()()', '0000' ) ).toEqual( true );
    } );
    it( 'case 3', () => {
        expect( canBeValid( ')', '0' ) ).toEqual( false );
    } );
} );
