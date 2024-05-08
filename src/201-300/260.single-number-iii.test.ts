function singleNumber( nums: number[] ): number[] {

    const both = nums.reduce( ( acc, curr ) => acc ^ curr , 0 );

    const lb = both & ( -both );

    let [a, b] = [0, 0];

    for( let i = 0; i < nums.length; i++ ){
        if( ( lb & nums[i] ) ){
            a ^= nums[i];
        }else{
            b ^= nums[i];
        }
    }
    return [a, b];
}

describe( '260. single number iii', () => {

    it( '[1,2,1,3,2,5]', () => {
        expect( singleNumber( [1,2,1,3,2,5] ).sort() ).toStrictEqual( [3,5] );
    } );

    it( '[-1,0]', () => {
        expect( singleNumber( [-1,0] ).sort() ).toStrictEqual( [-1,0] );
    } );

    it( '[0,1]', () => {
        expect( singleNumber( [0,1] ).sort() ).toStrictEqual( [0,1] );
    } );

    it( '[2,1,2,3,4,1]', () => {
        expect( singleNumber( [2,1,2,3,4,1] ).sort() ).toStrictEqual( [3,4] );
    } );

} );