function fourSum( nums: number[], target: number ): number[][] {
    nums.sort( ( a, b ) => a - b );

    return kSum( 4, target, 0 );

    function kSum( k: number, t: number, start: number ) {
        if ( k === 2 ) return twoSum( t, start );
        const ret: number[][] = [];

        for ( let i = start; i < nums.length - 1; ++i ) {
            if ( i !== start && nums[i] === nums[i - 1] ) continue;
            const next = kSum( k - 1, t - nums[i], i + 1 ).map( ( arr ) => [
                nums[i],
                ...arr,
            ] );
            ret.push( ...next );
        }

        return ret;
    }

    function twoSum( t: number, left: number ) {
        const ret: number[][] = [];
        let [low, up] = [left, nums.length - 1];
        while ( low < up ) {
            if ( low !== left && nums[low] === nums[low - 1] ) {
                low++;
                continue;
            }

            if ( up !== nums.length - 1 && nums[up] === nums[up + 1] ) {
                up--;
                continue;
            }

            const sum = nums[low] + nums[up];
            if ( sum === t ) {
                ret.push( [nums[low], nums[up]] );
                low++, up--;
            } else if ( sum < t ) low++;
            else up--;
        }

        return ret;
    }
}
describe( '4Sum', () => {
    it( 'e.g. 1', () => {
        expect( fourSum( [1, 0, -1, 0, -2, 2], 0 ) ).toStrictEqual( [
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1],
        ] );
    } );

    it( 'e.g. 2', () => {
        expect( fourSum( [2, 2, 2, 2, 2], 8 ) ).toStrictEqual( [[2, 2, 2, 2]] );
    } );
} );
