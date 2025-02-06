function permuteUnique( nums: number[] ): number[][] {
    const ret: number[][] = [];
    DFS();
    return ret;

    function DFS( start: number = 0 ) {
        if ( start === nums.length - 1 ) {
            return ret.push( [...nums] );
        }

        const set = new Set<number>();

        for ( let i = start; i < nums.length; i++ ) {
            if ( set.has( nums[i] ) ) continue;
            set.add( nums[i] );
            [nums[start], nums[i]] = [nums[i], nums[start]];
            DFS( start + 1 );
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
}
describe( '47. Permutations II', () => {
    it( '1,1,2', () => {
        expect( permuteUnique( [1, 1, 2] ).sort() ).toStrictEqual(
            [
                [1, 1, 2],
                [1, 2, 1],
                [2, 1, 1],
            ].sort(),
        );
    } );

    it( '1,2,3', () => {
        expect( permuteUnique( [1, 2, 3] ).sort() ).toStrictEqual(
            [
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1],
            ].sort(),
        );
    } );

    it( '0,1,0,0,9', () => {
        expect( permuteUnique( [0, 1, 0, 0, 9] ).sort() ).toStrictEqual(
            [
                [0, 0, 0, 1, 9],
                [0, 0, 0, 9, 1],
                [0, 0, 1, 0, 9],
                [0, 0, 1, 9, 0],
                [0, 0, 9, 0, 1],
                [0, 0, 9, 1, 0],
                [0, 1, 0, 0, 9],
                [0, 1, 0, 9, 0],
                [0, 1, 9, 0, 0],
                [0, 9, 0, 0, 1],
                [0, 9, 0, 1, 0],
                [0, 9, 1, 0, 0],
                [1, 0, 0, 0, 9],
                [1, 0, 0, 9, 0],
                [1, 0, 9, 0, 0],
                [1, 9, 0, 0, 0],
                [9, 0, 0, 0, 1],
                [9, 0, 0, 1, 0],
                [9, 0, 1, 0, 0],
                [9, 1, 0, 0, 0],
            ].sort(),
        );
    } );

    it( '2,2,1,1', () => {
        expect( permuteUnique( [2, 2, 1, 1] ).sort() ).toStrictEqual(
            [
                [1, 1, 2, 2],
                [1, 2, 1, 2],
                [1, 2, 2, 1],
                [2, 1, 1, 2],
                [2, 1, 2, 1],
                [2, 2, 1, 1],
            ].sort(),
        );
    } );

    it( '1,1,2', () => {
        expect( permuteUnique( [1, 1, 2] ).sort() ).toStrictEqual(
            [
                [1, 1, 2],
                [1, 2, 1],
                [2, 1, 1],
            ].sort(),
        );
    } );

    it( '1,2,3', () => {
        expect( permuteUnique( [1, 2, 3] ).sort() ).toStrictEqual(
            [
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1],
            ].sort(),
        );
    } );
} );
