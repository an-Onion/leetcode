function minDeletionSize( strs: string[] ): number {
    let count = 0;
    for ( let i = 0; i < strs[0].length; i++ ) {
        for ( let j = 1; j < strs.length; j++ ) {
            if ( strs[j - 1][i] > strs[j][i] ) {
                count++;
                break;
            }
        }
    }
    return count;
}

describe( '944. Delete Columns to Make Sorted', () => {
    it( 'case 1', () => {
        expect( minDeletionSize( ['cba', 'daf', 'ghi'] ) ).toBe( 1 );
    } );
    it( 'case 2', () => {
        expect( minDeletionSize( ['a', 'b'] ) ).toBe( 0 );
    } );
    it( 'case 3', () => {
        expect( minDeletionSize( ['zyx', 'wvu', 'tsr'] ) ).toBe( 3 );
    } );
} );
