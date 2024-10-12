function duplicateNumbersXOR( nums: number[] ): number {
    const set = new Set<number>();
    let ret = 0;
    for ( const num of nums ) {
        if ( set.has( num ) ) {
            ret ^= num;
        }
        set.add( num );
    }
    return ret;
}

describe( '3158. find-the-xor-of-numbers-which-appear-twice', () => {
    it( '[1,2,1,3]', () => {
        expect( duplicateNumbersXOR( [1, 2, 1, 3] ) ).toBe( 1 );
    } );
    it( '[1,2,3]', () => {
        expect( duplicateNumbersXOR( [1, 2, 3] ) ).toBe( 0 );
    } );

    it( '[1,2,2,1]', () => {
        expect( duplicateNumbersXOR( [1, 2, 2, 1] ) ).toBe( 3 );
    } );
} );
