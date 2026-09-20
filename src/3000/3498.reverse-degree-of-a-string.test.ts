function reverseDegree( s: string ): number {
    return s
        .split( '' )
        .map( ( c ) => 123 - c.charCodeAt( 0 ) )
        .reduce( ( prev, cur, index ) => prev + cur * ( index + 1 ), 0 );
}

describe( '3498. reverse-degree-of-a-string', () => {
    it( 'case 1', () => {
        expect( reverseDegree( 'abc' ) ).toBe( 148 );
    } );

    it( 'case 2', () => {
        expect( reverseDegree( 'zaza' ) ).toBe( 160 );
    } );
} );
