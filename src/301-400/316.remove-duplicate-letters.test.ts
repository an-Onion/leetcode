function removeDuplicateLetters( s: string ): string {

    const count = Array( 26 ).fill( 0 );
    for ( let i = 0; i < s.length; i++ ) {
        count[ s.charCodeAt( i ) - 97 ]++;
    }

    const stack = [];
    const visited = Array( 26 ).fill( false );

    for ( const ch of s ) {
        const c = ch.charCodeAt( 0 ) - 97;
        count[ c ]--;
        if ( visited[ c ] ) {
            continue;
        }

        while( stack.at( -1 ) > c ){
            if( count[ stack.at( -1 ) ] === 0 ){
                break;
            }
            visited[ stack.pop()! ] = false;
        }
        visited[ c ] = true;
        stack.push( c );
    }

    return stack.map( ( c ) => String.fromCharCode( c + 97 ) ).join( '' );
}

describe( '316. Remove Duplicate Letters', () => {

    it( 'bcabc', () => {
        expect( removeDuplicateLetters( 'bcabc' ) ).toEqual( 'abc' );
    } );

    it( 'cbacdcbc', () => {
        expect( removeDuplicateLetters( 'cbacdcbc' ) ).toEqual( 'acdb' );
    } );
} );