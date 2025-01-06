function maxConsecutive(
    bottom: number,
    top: number,
    special: number[],
): number {
    special.push( bottom - 1, top + 1 );
    special.sort( ( a, b ) => a - b );
    let ret = 0;

    for ( let i = 1; i < special.length; i++ ) {
        ret = Math.max( ret, special[i] - special[i - 1] - 1 );
    }
    return ret;
}

describe( '2274. Maximum Consecutive Floors Without Special Floors', () => {
    it( 'test case 1', () => {
        const bottom = 2,
            top = 9,
            special = [4, 6];
        expect( maxConsecutive( bottom, top, special ) ).toBe( 3 );
    } );

    it( 'test case 2', () => {
        const bottom = 6,
            top = 8,
            special = [7, 6, 8];
        expect( maxConsecutive( bottom, top, special ) ).toBe( 0 );
    } );
} );
