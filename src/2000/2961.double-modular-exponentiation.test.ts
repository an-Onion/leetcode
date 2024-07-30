function getGoodIndices( variables: number[][], target: number ): number[] {
    const ans = [];

    for ( let i = 0; i < variables.length; i++ ) {
        const [a, b, c, m] = variables[i];
        if ( pow( pow( a, b, 10 ), c, m ) === target ) {
            ans.push( i );
        }
    }

    return ans;

    function pow( x: number, y: number, mode: number ) {
        let ret = 1;

        while ( y ) {
            if ( ( y & 1 ) === 1 ) {
                ret = ( ret * x ) % mode;
            }

            x = ( x * x ) % mode;
            y >>= 1;
        }
        return ret;
    }
}

describe( '2961. Double Modular Exponentiation', () => {
    it( '[0,2]', () => {
        const variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]], target = 2;
        expect( getGoodIndices( variables, target ) ).toEqual( [0,2] );
    } );

    it( '[]', () => {
        const variables = [[39,3,1000,1000]], target = 17;
        expect( getGoodIndices( variables, target ) ).toEqual( [] );
    } );
} );
