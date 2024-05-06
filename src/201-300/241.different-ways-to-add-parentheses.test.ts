function diffWaysToCompute( expression: string ): number[] {

    const operators = {
        '+': ( a: number, b: number ) => a + b,
        '-': ( a: number, b: number ) => a - b,
        '*': ( a: number, b: number ) => a * b,
    };

    function DFS( exp: string ) {
        const ret: number[] = [];
        for( let i = 0; i < exp.length; i++ ) {
            const c = exp[i];
            if( !['+', '-', '*'].includes( c ) ) continue;

            const op = operators[c];
            const left = DFS( exp.slice( 0, i ) );
            const right = DFS( exp.slice( i + 1 ) );

            for( const l of left ) {
                for( const r of right ) {
                    ret.push( op( l, r ) );
                }
            }
        }

        return ret.length ? ret : [parseInt( exp )];
    }
    return DFS( expression );
}

describe( '241. different-ways-to-add-parentheses', () => {
    it( '2-1-1', () => {
        expect( diffWaysToCompute( '2-1-1' ).sort() ).toStrictEqual( [ 0, 2 ].sort() );
    } );

    it( '2*3-4*5', () => {
        expect( diffWaysToCompute( '2*3-4*5' ).sort() ).toStrictEqual( [-34,-14,-10,-10,10].sort() );
    } );

    it( '11', () => {
        expect( diffWaysToCompute( '11' ).sort() ).toStrictEqual( [11].sort() );
    } );
} );