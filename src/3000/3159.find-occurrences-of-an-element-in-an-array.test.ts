function occurrencesOfElement(
    nums: number[],
    queries: number[],
    x: number,
): number[] {
    const indices: number[] = [];

    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] !== x ) continue;
        indices.push( i );
    }

    return queries.map( ( query ) => indices[query - 1] ?? -1 );
}

describe( '3159. Find Occurrences of an Element in an Array', () => {
    it( 'case 1', () => {
        const nums = [1, 3, 1, 7],
            queries = [1, 3, 2, 4],
            x = 1;
        expect( occurrencesOfElement( nums, queries, x ) ).toStrictEqual( [
            0, -1, 2, -1,
        ] );
    } );

    it( 'case 2', () => {
        const nums = [1, 2, 3],
            queries = [10],
            x = 5;
        expect( occurrencesOfElement( nums, queries, x ) ).toStrictEqual( [-1] );
    } );
} );
