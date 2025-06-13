function removeDuplicates( s: string ): string {
    const stack: string[] = [];
    for ( let i = 0; i < s.length; ++i ) {
        if ( stack.at( -1 ) === s[i] ) {
            stack.pop();
            continue;
        }
        stack.push( s[i] );
    }
    return stack.join( '' );
}

describe( '1047. Remove All Adjacent Duplicates In String', () => {
    it( 'case 1', () => {
        expect( removeDuplicates( 'abbaca' ) ).toBe( 'ca' );
    } );
} );
