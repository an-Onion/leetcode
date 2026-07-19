function smallestSubsequence( s: string ): string {
    const stack: number[] = [];
    const alphabet = Array( 26 ).fill( 0 );
    const visited = Array( 26 ).fill( false );

    for ( const char of s ) {
        alphabet[char.charCodeAt( 0 ) - 97]++;
    }

    for ( const char of s ) {
        const code = char.charCodeAt( 0 ) - 97;
        alphabet[code]--;
        if ( visited[code] ) {
            continue;
        }
        while (
            stack.length > 0 &&
            stack.at( -1 )! > code &&
            alphabet[stack.at( -1 )!] > 0
        ) {
            visited[stack.pop()!] = false;
        }
        stack.push( code );
        visited[code] = true;
    }

    return stack.map( ( code ) => String.fromCharCode( code + 97 ) ).join( '' );
}

describe( '1081. smallest-subsequence-of-distinct-characters', () => {
    it( 'case 1', () => {
        expect( smallestSubsequence( 'bcabc' ) ).toBe( 'abc' );
    } );

    it( 'case 2', () => {
        expect( smallestSubsequence( 'cbacdcbc' ) ).toBe( 'acdb' );
    } );
} );
