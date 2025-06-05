function smallestEquivalentString(
    s1: string,
    s2: string,
    baseStr: string,
): string {
    const parent = Array( 26 ).fill( -1 );

    for ( let i = 0; i < s1.length; i++ ) {
        const x = s1.charCodeAt( i ) - 97;
        const y = s2.charCodeAt( i ) - 97;
        union( x, y );
    }

    return baseStr
        .split( '' )
        .map( ( c ) => {
            const x = c.charCodeAt( 0 ) - 97;
            return String.fromCharCode( find( x ) + 97 );
        } )
        .join( '' );

    function find( x: number ): number {
        if ( parent[x] === -1 ) return x;
        return ( parent[x] = find( parent[x] ) );
    }
    function union( x: number, y: number ): void {
        const rootX = find( x );
        const rootY = find( y );
        if ( rootX !== rootY ) {
            parent[Math.max( rootX, rootY )] = Math.min( rootX, rootY );
        }
    }
}

describe( '1061. Lexicographically Smallest Equivalent String', () => {
    it( 'case 1', () => {
        expect( smallestEquivalentString( 'parker', 'morris', 'parser' ) ).toBe(
            'makkek',
        );
    } );

    it( 'case 2', () => {
        expect( smallestEquivalentString( 'hello', 'world', 'hold' ) ).toBe( 'hdld' );
    } );
    it( 'case 3', () => {
        expect(
            smallestEquivalentString( 'leetcode', 'programs', 'sourcecode' ),
        ).toBe( 'aauaaaaada' );
    } );
} );
