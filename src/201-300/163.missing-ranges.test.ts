function findMissingRanges(
    nums: number[],
    lower: number,
    upper: number,
): number[][] {
    const ranges: number[][] = [];
    for ( const num of nums ) {
        if ( lower < num ) {
            ranges.push( [lower, num - 1] );
        }
        lower = num + 1;
    }
    if ( lower <= upper ) {
        ranges.push( [lower, upper] );
    }
    return ranges;
}

describe( '163. Missing Ranges', () => {
    it( 'e.g. 1', () => {
        const nums = [0, 1, 3, 50, 75],
            lower = 0,
            upper = 99;
        expect( findMissingRanges( nums, lower, upper ) ).toEqual( [
            [2, 2],
            [4, 49],
            [51, 74],
            [76, 99],
        ] );
    } );

    it( 'e.g. 2', () => {
        const nums = [-1],
            lower = -1,
            upper = -1;
        expect( findMissingRanges( nums, lower, upper ) ).toEqual( [] );
    } );
} );
