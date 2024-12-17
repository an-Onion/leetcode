type Fn = ( accum: number, curr: number ) => number;

function reduce( nums: number[], fn: Fn, init: number ): number {
    let acc = init;
    for ( const num of nums ) {
        acc = fn( acc, num );
    }
    return acc;
}

describe( '2626.array-reduce-transformation', () => {
    it( 'case 1', () => {
        expect( reduce( [1, 2, 3, 4], ( acc, curr ) => acc + curr, 0 ) ).toBe( 10 );
    } );

    it( 'case 2', () => {
        expect(
            reduce( [1, 2, 3, 4], ( acc, curr ) => acc + curr * curr, 100 ),
        ).toBe( 130 );
    } );

    it( 'case 3', () => {
        expect( reduce( [], () => 0, 25 ) ).toBe( 25 );
    } );
} );
