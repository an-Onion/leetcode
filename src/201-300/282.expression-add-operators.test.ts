function addOperators( num: string, target: number ): string[] {

    const ret: string[] = [];

    function DFS( exp: Array<number | string>, idx: number, res: number, multi: number ) {
        if( idx === num.length ){
            if( res !== target ) return;
            ret.push( exp.join( '' ) );
            return;
        }

        let val = 0;
        for( let j = idx; j < num.length; j++ ){
           if( j !== idx && num[ idx ] === '0' ) break;

           val = val * 10 + ( +num[ j ] );

           if( !exp.length ){
              DFS( [ val ], j + 1, val, val );
              continue;
           }
           DFS( [ ...exp, '+', val ], j + 1, res + val, val );
           DFS( [ ...exp, '-', val ], j + 1, res - val, -val );
           DFS( [ ...exp, '*', val ], j + 1, res - multi + multi * val, multi * val );
        }
    }

    DFS( [ ], 0, 0, 0 );

    return ret;
}

describe( '282.expression-add-operators', () => {

    it( '123, 6', () => {
        expect( addOperators( '123', 6 ).sort() ).toStrictEqual( ['1+2+3', '1*2*3'].sort() );
    } );

    it( '232, 8', () => {
        expect( addOperators( '232', 8 ).sort() ).toStrictEqual( ['2*3+2', '2+3*2'].sort() );
    } );

    it( '105, 5', () => {
        expect( addOperators( '105', 5 ) ).toStrictEqual( ['1*0+5', '10-5'].sort() );
    } );

    it( '3456237490, 9191', () => {
        expect( addOperators( '3456237490', 9191 ).sort() ).toStrictEqual( [] );
    } );
} );