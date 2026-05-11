function separateDigits( nums: number[] ): number[] {
    nums.reverse();

    const ret: number[] = [];
    for ( let num of nums ) {
        while ( num !== 0 ) {
            ret.push( num % 10 );
            num = Math.floor( num / 10 );
        }
    }
    return ret.reverse();
}

describe( '2553. separate the digits in an array', () => {
    it( 'case 1', () => {
        expect( separateDigits( [13, 25, 83, 77] ) ).toStrictEqual( [
            1, 3, 2, 5, 8, 3, 7, 7,
        ] );
    } );

    it( 'case 2', () => {
        expect( separateDigits( [7, 1, 3, 9] ) ).toStrictEqual( [7, 1, 3, 9] );
    } );
} );
