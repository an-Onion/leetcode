function rob( nums: number[] ): number {

    let [n_1, n_2] =[0, 0];

    for( const num of nums ){
        const curr = Math.max( num + n_2, n_1 );
        [n_1, n_2] = [curr, n_1];
    }

    return n_1;
}

describe( '198. house-robber', () => {
    it( '[1,2,3,1]', () => {
        expect( rob( [1,2,3,1] ) ).toEqual( 4 );
    } );

    it( '[2,7,9,3,1]', () => {
        expect( rob( [2,7,9,3,1] ) ).toEqual( 12 );
    } );
} );