function containsDuplicate( nums: number[] ): boolean {
    const set = new Set<number>();

    for( const num of nums ){
        if( set.has( num ) ){
            return true;
        }
        set.add( num );
    }
    return false;
}

describe( '217. contains-duplicate', () => {
    it( '[1,2,3,1]', () => {
        const nums = [1,2,3,1];
        const output = containsDuplicate( nums );
        expect( output ).toBe( true );
    } );

    it( '[1,2,3,4]', () => {
        const nums = [1,2,3,4];
        const output = containsDuplicate( nums );
        expect( output ).toBe( false );
    } );

    it( '[1,1,1,3,3,4,3,2,4,2]', () => {
        const nums = [1,1,1,3,3,4,3,2,4,2];
        const output = containsDuplicate( nums );
        expect( output ).toBe( true );
    } );
} );