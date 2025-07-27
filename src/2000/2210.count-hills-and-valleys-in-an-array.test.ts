function countHillValley( nums: number[] ): number {
    let ret = 0,
        preState = 0;

    for ( let i = 0; i < nums.length - 1; i++ ) {
        const curState = Math.sign( nums[i] - nums[i + 1] );
        if ( curState === 0 ) {
            continue;
        }

        if ( curState === -preState ) {
            ret++;
        }
        preState = curState;
    }
    return ret;
}

describe( '2210.count-hills-and-valleys-in-an-array', () => {
    it( 'case 1', () => {
        expect( countHillValley( [6, 6, 5, 5, 4, 1] ) ).toBe( 0 );
    } );
} );
