function removeStars( s: string ): string {
    const stack = [];

    for ( const c of s ) {
        if ( c === '*' ) stack.pop();
        else stack.push( c );
    }
    return stack.join( '' );
}

describe( '2390. Removing Stars From a String', () => {
    it( 'e.g. 1', () => {
        expect( removeStars( 'leet**cod*e' ) ).toEqual( 'lecoe' );
    } );

    it( 'e.g. 2', () => {
        expect( removeStars( 'erase*****' ) ).toEqual( '' );
    } );
} );
