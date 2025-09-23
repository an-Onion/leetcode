function compareVersion( version1: string, version2: string ): number {
    const version1Arr = version1.split( '.' );
    const version2Arr = version2.split( '.' );

    const N = Math.max( version1Arr.length, version2Arr.length );

    for ( let i = 0; i < N; i++ ) {
        const v1 = parseInt( version1Arr[i] || '0' );
        const v2 = parseInt( version2Arr[i] || '0' );
        if ( v1 > v2 ) return 1;
        if ( v1 < v2 ) return -1;
    }
    return 0;
}

describe( '165. compare-version-numbers', () => {
    it( 'case 1', () => {
        expect( compareVersion( '1.01', '1.001' ) ).toBe( 0 );
    } );

    it( 'case 2', () => {
        expect( compareVersion( '1.0', '1.0.0' ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( compareVersion( '0.1', '1.0' ) ).toBe( -1 );
    } );
} );
