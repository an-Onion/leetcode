function canMeasureWater( x: number, y: number, target: number ): boolean {
    return target % gcd( x, y ) === 0 && target <= x + y;

    function gcd( y: number, x: number ): number {
        if ( x === 0 ) return y;
        return gcd( x, y % x );
    }
}

describe( '365. water-and-jug-problem', () => {
    it( '3,5,4', () => {
        expect( canMeasureWater( 3, 5, 4 ) ).toBeTruthy();
    } );
    it( '2,6,5', () => {
        expect( canMeasureWater( 2, 6, 5 ) ).toBeFalsy();
    } );
    it( '1,2,3', () => {
        expect( canMeasureWater( 1, 2, 3 ) ).toBeTruthy();
    } );
} );
