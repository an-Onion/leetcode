function countBalls( lowLimit: number, highLimit: number ): number {
    const map = new Map<number, number>();
    let max = 0;

    for ( let i = lowLimit; i <= highLimit; i++ ) {
        const key = getSum( i );
        const value = map.get( key ) || 0;
        map.set( key, value + 1 );
        max = Math.max( max, value + 1 );
    }

    return max;

    function getSum( num: number ): number {
        let sum = 0;
        while ( num > 0 ) {
            sum += num % 10;
            num = Math.floor( num / 10 );
        }
        return sum;
    }
}

describe( '1742. Maximum Number of Balls in a Box', () => {
    it( 'Test case 1', () => {
        expect( countBalls( 1, 10 ) ).toBe( 2 );
    } );

    it( 'Test case 2', () => {
        expect( countBalls( 5, 15 ) ).toBe( 2 );
    } );

    it( 'Test case 3', () => {
        expect( countBalls( 19, 28 ) ).toBe( 2 );
    } );
} );
