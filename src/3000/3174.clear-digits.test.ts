function clearDigits( s: string ): string {
    const stack: string[] = [];

    for ( const c of s ) {
        if ( !isDigit( c ) ) {
            stack.push( c );
            continue;
        }
        if ( stack.length === 0 ) {
            stack.push( c );
            continue;
        }
        stack.pop();
    }
    return stack.join( '' );

    function isDigit( c: string ) {
        return c >= '0' && c <= '9';
    }
}

describe( '3174. clear digits', () => {
    it( 'abc', () => {
        expect( clearDigits( 'abc' ) ).toEqual( 'abc' );
    } );
    it( 'cb34', () => {
        expect( clearDigits( 'cb34' ) ).toEqual( '' );
    } );
} );
