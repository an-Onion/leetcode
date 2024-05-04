function combinationSum3( k: number, n: number ): number[][] {
    const count1 = ( x: number ) => {
        let cnt = 0;
        while ( x ) {
            cnt++;
            x &= x - 1;
        }
        return cnt;

    };

    const sum = ( x: number[] ) => {
        return x.reduce( ( a, b ) => a + b, 0 );
    };

    // [0b000000011, 0b111111111]

    const ret = [];

    for( let i = 3; i < 1 << 9; i++ ){
        if( count1( i ) !== k ) continue;
        const p = [];
        for( let j = 0; j < 9; j++ ){
            if( ( i >> j & 1 ) === 0 ) continue;
            p.push( j + 1 );
        }
        if( sum( p ) === n ) {
            ret.push( p );
        }

    }
    return ret;
}

describe( '219. combination-sum-iii', () => {
    it( '3, 7', () => {
        const k = 3, n = 7;
        expect( combinationSum3( k, n ).sort() ).toStrictEqual( [[1,2,4]].sort() );
    } );

    it( '3, 9', () => {
        const k = 3, n = 9;
        expect( combinationSum3( k, n ).sort() ).toStrictEqual( [[1,2,6], [1,3,5], [2,3,4]].sort() );
    } );

    it( '4, 1', () => {
        const k = 4, n = 1;
        expect( combinationSum3( k, n ) ).toStrictEqual( [] );
    } );
} );