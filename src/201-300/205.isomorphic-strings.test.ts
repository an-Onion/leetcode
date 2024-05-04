function isIsomorphic( s: string, t: string ): boolean {
    const mapS = new Map<string, string>();
    const mapT = new Map<string, string>();

    for( let i = 0; i < s.length; i++ ){
        const x = s[i], y = t[i];
        if( !mapS.has( x ) && !mapT.has( y ) ){
            mapS.set( x, y ), mapT.set( y, x );
            continue;
        }
        if( mapS.get( x ) === y && mapT.get( y ) === x ) {
            continue;
        }
        return false;
    }
    return true;
}

describe( '205. isomorphic strings', ()=> {
    it( 's = "egg", t = "add"', () => {
        expect( isIsomorphic( 'egg', 'add' ) ).toBe( true );
    } );

    it( 's = "foo", t = "bar"', () => {
        expect( isIsomorphic( 'foo', 'bar' ) ).toBe( false );
    } );

    it( 's = "paper", t = "title"', () => {
        expect( isIsomorphic( 'paper', 'title' ) ).toBe( true );
    } );

    it( 's="badc", t="baba"', () => {
        expect( isIsomorphic( 'badc', 'baba' ) ).toBeFalsy();
    } );
} );