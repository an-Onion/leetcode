function isStrobogrammatic( num: string ): boolean {
    const rotate = new Map( [
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6'],
    ] );

    let left = 0,
        right = num.length - 1;

    while ( left <= right ) {
        if ( !rotate.has( num[left] ) || !rotate.has( num[right] ) ) {
            return false;
        }
        if ( rotate.get( num[left] ) !== num[right] ) {
            return false;
        }
        left++, right--;
    }
    return true;
}

describe( '246. Strobogrammatic Number', () => {
    it( 'Example 1', () => {
        expect( isStrobogrammatic( '69' ) ).toBe( true );
    } );

    it( 'Example 2', () => {
        expect( isStrobogrammatic( '88' ) ).toBe( true );
    } );

    it( 'Example 3', () => {
        expect( isStrobogrammatic( '962' ) ).toBe( false );
    } );

    it( 'Example 4', () => {
        expect( isStrobogrammatic( '1' ) ).toBe( true );
    } );
} );
