function maxProduct( words: string[] ): number {
    const bits = Array<number>( words.length ).fill( 0 );

    for ( let i = 0; i < words.length; i++ ) {
        for ( const c of words[i] ) {
            bits[i] |= 1 << ( c.charCodeAt( 0 ) - 97 );
        }
    }

    let ret = 0;

    for ( let i = 0; i < words.length; i++ ) {
        for ( let j = i + 1; j < words.length; j++ ) {
            if ( ( bits[i] & bits[j] ) === 0 ) {
                ret = Math.max( words[i].length * words[j].length, ret );
            }
        }
    }
    return ret;
}

describe( '318. maximum-product-of-word-lengths', () => {

    it( 'case 1', () => {
        const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
        expect( maxProduct( words ) ).toBe( 16 );
    } );

    it( 'case 2', () => {
        const words = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'];
        expect( maxProduct( words ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( maxProduct( ['a', 'aa', 'aaa', 'aaaa'] ) ).toBe( 0 );
    } );


} );