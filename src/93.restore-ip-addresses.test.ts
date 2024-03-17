function restoreIpAddresses( s: string ): string[] {

    const ret: string[] = [];

    DFS( 0, [] );

    return ret;

    function DFS( start: number, path: number[] ): void | number {
        if( path.length === 4 ){
            if( start < s.length ) return;
            return ret.push( path.join( '.' ) );
        }

        for( let i = start; i < start + 3 && i < s.length; i++ ){

            if( s[start] === '0' && i > start ){
                continue;
            }

            const digit = parseInt( s.substring( start, i + 1 ) );
            
            if( digit > 255 ) continue;

            DFS( i + 1, [...path, digit] );
        }
    }
}

describe( '93. Restore ip addresses', () => {
    it( '25525511135', () => {
        const output = restoreIpAddresses( '25525511135' ).sort();
        expect( output ).toEqual( [ '255.255.11.135', '255.255.111.35' ].sort() );
    } );

    it ( '0000', () => {
      const output = restoreIpAddresses( '0000' ).sort();
      expect( output ).toEqual( [ '0.0.0.0' ].sort() );
    } );

    it( '101023', () => {
      const output = restoreIpAddresses( '101023' ).sort();
      expect( output ).toEqual( [
        '1.0.10.23',
        '1.0.102.3',
        '10.1.0.23',
        '10.10.2.3',
        '101.0.2.3',
    ].sort() );
    } );
} );