function largeGroupPositions( s: string ): number[][] {
    const result: number[][] = [];
    let num = 0;
    for ( let i = 0; i < s.length; i++ ) {
        if ( i === s.length - 1 || s[i] !== s[i + 1] ) {
            if ( num >= 2 ) {
                result.push( [i - num, i] );
            }
            num = 0;
            continue;
        }
        num++;
    }
    return result;
}

describe( '830. Positions of Large Groups', () => {
    it( 'case 1', () => {
        expect( largeGroupPositions( 'abbxxxxzzy' ) ).toStrictEqual( [[3, 6]] );
    } );

    it( 'case 2', () => {
        expect( largeGroupPositions( 'abc' ) ).toStrictEqual( [] );
    } );

    it( 'case 3', () => {
        expect( largeGroupPositions( 'abcdddeeeeaabbbcd' ) ).toStrictEqual( [
            [3, 5],
            [6, 9],
            [12, 14],
        ] );
    } );

    it( 'case 4', () => {
        expect( largeGroupPositions( 'aaa' ) ).toStrictEqual( [[0, 2]] );
    } );
} );
