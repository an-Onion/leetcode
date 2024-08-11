function longestConsecutive( nums: number[] ): number {
    const map = new Map<number, number>();

    for ( const num of nums ) {
        map.set( num, 0 );
    }

    let ret = 0;
    for ( const num of nums ) {
        if ( map.get( num ) > 0 ) continue;

        let acc = 0;

        for ( let i = num; map.has( i ); i++ ) {
            if ( map.get( i ) === 0 ) {
                map.set( i, ++acc );
                continue;
            }
            acc += map.get( i );
            break;
        }
        map.set( num, acc );
        ret = Math.max( ret, acc );
    }

    return ret;
}

describe( '128. longestConsecutive', () => {
    it( '[100, 4, 200, 1, 3, 2]', () => {
        // :
        expect( longestConsecutive( [100, 4, 200, 1, 3, 2] ) ).toBe( 4 );
    } );

    it( '[0, -1]', () => {
        // Test case 2:
        expect( longestConsecutive( [0, -1] ) ).toBe( 2 );
    } );

    it( '[0,3,7,2,5,8,4,6,0,1]', () => {
        // Test case 3:
        expect( longestConsecutive( [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] ) ).toBe( 9 );
    } );
} );
