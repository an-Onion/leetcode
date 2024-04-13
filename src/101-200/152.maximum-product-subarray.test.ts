function maxProduct( nums: number[] ): number {
    let [ret, maxEnd, minEnd] = [nums[0], 1, 1];

    for( const num of nums ){
        [maxEnd, minEnd] = 
            [
                Math.max( maxEnd*num, minEnd*num ,num ),
                Math.min( maxEnd*num, minEnd*num ,num ),
            ];
        ret = Math.max( ret, maxEnd );
    }

    return ret;
}

describe( '152. maxProduct', () => {

    it( '[2,3,-2,4]', () => {
        const num = [2,3,-2,4];
        expect( maxProduct( num ) ).toStrictEqual( 6 );
    } );

    it( '[-2,0,-1]', () => {
        const num = [-2,0,-1];
        expect( maxProduct( num ) ).toStrictEqual( 0 );
    } );

    it( '[-2]', () => {
        const num = [-2];
        expect( maxProduct( num ) ).toStrictEqual( -2 );
    } );

    it( '[-4,-3,-2]', () => {
        const num = [-4,-3,-2];
        expect( maxProduct( num ) ).toStrictEqual( 12 );
    } );
    
} );