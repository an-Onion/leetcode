function minPatches( nums: number[], n: number ): number {
    let x = 1, idx = 0, patches = 0;

    while( x <= n ) {
        if( nums[idx] <= x ){
            x += nums[idx++];
            continue;
        }
        x *= 2;
        patches++;
    }
    return patches;
}

describe( '330. patching-array', () => {

    it( 'nums = [1,3], n = 6', () => {
        expect( minPatches( [1,3], 6 ) ).toBe( 1 );
    } );

    it( 'nums = [1,5,10], n = 20', () => {
        expect( minPatches( [1,5,10], 20 ) ).toBe( 2 );
    } );

    it( 'nums = [1,2,2], n = 5', () => {
        expect( minPatches( [1,2,2], 5 ) ).toBe( 0 );
    } );
} );