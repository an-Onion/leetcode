function numOfUnplacedFruits( fruits: number[], baskets: number[] ): number {
    let count = 0;
    for ( const fruit of fruits ) {
        const index = baskets.findIndex( ( basket ) => basket >= fruit );
        if ( index !== -1 ) {
            baskets[index] = 0;
        } else {
            count += 1;
        }
    }
    return count;
}

describe( '3477. fruits-into-baskets-ii', () => {
    it( 'case 1', () => {
        const fruits = [4, 2, 5],
            baskets = [3, 5, 4];
        expect( numOfUnplacedFruits( fruits, baskets ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const fruits = [3, 6, 1],
            baskets = [6, 4, 7];
        expect( numOfUnplacedFruits( fruits, baskets ) ).toBe( 0 );
    } );
} );
