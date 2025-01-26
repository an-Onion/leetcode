function combinationSum2( candidates: number[], target: number ): number[][] {
    candidates.sort( ( a, b ) => a - b );

    return DFS( 0, target );

    function DFS( start: number, remaining: number ): number[][] {
        if ( remaining < 0 ) return [];
        if ( remaining === 0 ) return [[]];

        const result: number[][] = [];

        for ( let i = start; i < candidates.length; i++ ) {
            if ( i > start && candidates[i] === candidates[i - 1] ) continue; // skip duplicates
            const subs = DFS( i + 1, remaining - candidates[i] );
            subs.forEach( ( sub ) => result.push( [...sub, candidates[i]] ) );
        }
        return result;
    }
}

describe( 'Combination Sum II', () => {
    it( 'candidates = [10,1,2,7,6,1,5], target = 8', () => {
        expect( combinationSum2( [10, 1, 2, 7, 6, 1, 5], 8 ).sort() ).toStrictEqual(
            [
                [6, 1, 1],
                [5, 2, 1],
                [7, 1],
                [6, 2],
            ].sort(),
        );
    } );

    it( 'candidates = [2,5,2,1,2], target = 5', () => {
        expect( combinationSum2( [2, 5, 2, 1, 2], 5 ).sort() ).toStrictEqual(
            [[2, 2, 1], [5]].sort(),
        );
    } );
} );
