function subsetsWithDup( nums: number[] ): number[][] {
    const res: number[][] = [];
    nums.sort( ( a, b ) => a - b );

    DFS( 0, [] );
    return res;

    function DFS( start: number, path: number[] ) {
        if ( start === nums.length ) {
            res.push( [...path] );
            return;
        }

        DFS( start + 1, [...path, nums[start]] );

        while ( nums[start] === nums[start + 1] ) start++;
        DFS( start + 1, [...path] );
    }
}

describe( 'Subsets II', () => {
    it( '[1,2,2]', () => {
        const output = subsetsWithDup( [1, 2, 2] ).sort();
        expect( output ).toStrictEqual(
            [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]].sort(),
        );
    } );

    it( '[1,2]', () => {
        const output = subsetsWithDup( [1, 2] ).sort();
        expect( output ).toStrictEqual( [[], [1], [2], [1, 2]].sort() );
    } );

    it( '[2,2]', () => {
        const output = subsetsWithDup( [2, 2] ).sort();
        expect( output ).toStrictEqual( [[], [2], [2, 2]].sort() );
    } );

    it( '[0]', () => {
        expect( subsetsWithDup( [0] ).sort() ).toStrictEqual( [[], [0]] );
    } );
} );
