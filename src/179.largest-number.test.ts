function largestNumber( nums: number[] ): string {

    const sorted = nums.sort( ( a,b ) => `${a}${b}` < `${b}${a}` ? 1 : -1 );
    if( sorted[0] === 0 ) return '0';
    return sorted.join( '' );
}

describe( '179. largest-number', () => {
    it( '[10,2]', () => {
        expect( largestNumber( [10, 2] ) ).toBe( '210' );
    } );

    it( '[3,30,34,5,9]', () => {
        expect( largestNumber( [3, 30, 34, 5, 9] ) ).toBe( '9534330' );
    } );

    it( '[0,0]', () => {
        expect( largestNumber( [0,0] ) ).toBe( '0' );
    } );

} );