function decodeString( s: string ): string {
    const alpha = [];
    const digit = [];

    let pre = '',
        i = 0,
        num = '';
    while ( i < s.length ) {
        while ( s[i] >= 'a' && s[i] <= 'z' ) {
            pre += s[i++];
        }

        while ( s[i] >= '0' && s[i] <= '9' ) {
            num += s[i++];
        }

        if ( s[i] === '[' ) {
            digit.push( parseInt( num ) );
            alpha.push( pre );
            pre = '', num = '', i++;
        }

        if ( s[i] === ']' ) {
            const count = digit.pop();
            const str = alpha.pop();
            pre = str + pre.repeat( count );
            i++;
        }
    }
    return pre;
}

describe( '394. decode string', () => {
    it( '3[a]2[bc]', () => {
        expect( decodeString( '3[a]2[bc]' ) ).toBe( 'aaabcbc' );
    } );

    it( '3[a2[c]]', () => {
        expect( decodeString( '3[a2[c]]' ) ).toBe( 'accaccacc' );
    } );

    it( '2[abc]3[cd]ef', () => {
        expect( decodeString( '2[abc]3[cd]ef' ) ).toBe( 'abcabccdcdcdef' );
    } );

    it( 'abc3[cd]xyz', () => {
        expect( decodeString( 'abc3[cd]xyz' ) ).toBe( 'abccdcdcdxyz' );
    } );
} );
