function isGood( nums: number[] ): boolean {
    const cnt = Array( nums.length - 1 ).fill( 0 );

    for ( const num of nums ) {
        cnt[num - 1]++;
    }

    if ( cnt[nums.length - 2] !== 2 ) {
        return false;
    }

    for ( let i = 0; i < nums.length - 2; ++i ) {
        if ( cnt[i] !== 1 ) {
            return false;
        }
    }

    return true;
}

describe( '2784. check-if-array-is-good', () => {
    it( 'case 1', () => {
        expect( isGood( [2, 1, 3] ) ).toBe( false );
    } );

    it( 'case 2', () => {
        expect( isGood( [1, 3, 3, 2] ) ).toBe( true );
    } );

    it( 'case 3', () => {
        expect( isGood( [1, 1] ) ).toBe( true );
    } );

    it( 'case 4', () => {
        expect( isGood( [3, 4, 4, 1, 2, 1] ) ).toBe( false );
    } );
} );
