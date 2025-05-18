function sortColors( nums: number[] ): void {
    let [red, blue] = [0, nums.length - 1];

    for ( let i = 0; i <= blue; i++ ) {
        while ( i <= blue && nums[i] === 2 ) swap( i, blue-- );
        if ( nums[i] === 0 ) swap( i, red++ );
    }
    function swap( a: number, b: number ) {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
}

describe( '75. Sort Colors', () => {
    it( '[1,2,0]', () => {
        const nums = [1, 2, 0];
        sortColors( nums );
        expect( nums ).toStrictEqual( [0, 1, 2] );
    } );

    it( '[2,0,2,1,1,0]', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        sortColors( nums );
        expect( nums ).toStrictEqual( [0, 0, 1, 1, 2, 2] );
    } );

    it( '[2,0,1]', () => {
        const nums = [2, 0, 1];
        sortColors( nums );
        expect( nums ).toStrictEqual( [0, 1, 2] );
    } );

    it( '[0,0,1]', () => {
        const nums = [0, 0, 1];
        sortColors( nums );
        expect( nums ).toStrictEqual( [0, 0, 1] );
    } );

    it( '[2]', () => {
        const nums = [2];
        sortColors( nums );
        expect( nums ).toStrictEqual( [2] );
    } );
} );
