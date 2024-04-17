function minSubArrayLen( target: number, nums: number[] ): number {
    
    let [sofar, ret, ending, left] = [0, Infinity, 0, 0];

    for( let i = 0; i < nums.length; i++ ){
        ending += nums[i];
        sofar++;

        while( ending >= target ) {
            ret = Math.min( ret, sofar );
            ending -= nums[left++];
            sofar--;
        }
        
    }
    return ret === Infinity ? 0 : ret;
}

describe( '209 minimum-size-subarray-sum', () => {
    it( 'target = 7, nums = [2,3,1,2,4,3]', () => {
        expect( minSubArrayLen( 7, [2,3,1,2,4,3] ) ).toBe( 2 );
    } );

    it( 'target = 4, nums = [1,4,4]', () => {
        expect( minSubArrayLen( 4, [1,4,4] ) ).toBe( 1 );
    } );

    it( 'target = 11, nums = [1,1,1,1,1,1,1,1]', () => {
        expect( minSubArrayLen( 11, [1,1,1,1,1,1,1,1] ) ).toBe( 0 );
    } );

} );