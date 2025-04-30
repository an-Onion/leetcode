function findNumbers( nums: number[] ): number {
    let count = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( isEven( nums[i] ) ) {
            count++;
        }
    }
    return count;

    function isEven( num: number ): boolean {
        return Math.floor( Math.log10( num ) + 1 ) % 2 === 0;
    }
}

describe( '1295. findNumbers', () => {
    it( 'case 1', () => {
        expect( findNumbers( [12, 345, 2, 6, 7896] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( findNumbers( [555, 901, 482, 1771] ) ).toBe( 1 );
    } );
} );
