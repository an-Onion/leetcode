function countKeyChanges( s: string ): number {
    let ret = 0;
    for ( let i = 1; i < s.length; ++i ) {
        if ( s[i - 1].toLowerCase() === s[i].toLowerCase() ) continue;
        ret++;
    }
    return ret;
}

describe( '3019. Number of Changing Keys', () => {
    it( 'test case 1', () => {
        const s = 'abcde';
        expect( countKeyChanges( s ) ).toBe( 4 );
    } );

    it( 'test case 2', () => {
        const s = 'ABCD';
        expect( countKeyChanges( s ) ).toBe( 3 );
    } );

    it( 'test case 3', () => {
        const s = 'aAbBcC';
        expect( countKeyChanges( s ) ).toBe( 2 );
    } );

    it( 'test case 4', () => {
        const s = 'AaAaAaaA';
        expect( countKeyChanges( s ) ).toBe( 0 );
    } );
} );
