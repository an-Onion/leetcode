function majorityElement( nums: number[] ): number {

    return nums.reduce( ( [majority, count], curr ) => {

        if( count === 0 )
            return [curr, 1];
        if( curr === majority )
            return [majority, count + 1];
        return [majority, count - 1];

    }, [Infinity, 0] )[0];

}

describe( '169. majority-element', () => {
    it( '[3,2,3]', () => {
        expect( majorityElement( [3,2,3] ) ).toBe( 3 );
    } );

    it( '[2,2,1,1,1,2,2]', () => {
        expect( majorityElement( [2,2,1,1,1,2,2] ) ).toBe( 2 );
    } );
} );