function addOperators( num: string, target: number ): string[] {
    const ret: string[] = [];
    DFS( 0, 0, 0, [] );
    return ret;

    function DFS( start: number, res: number, acc: number, expr: Array<string> ) {
        if ( start === num.length ) {
            if ( res === target ) {
                ret.push( expr.join( '' ) );
            }
            return;
        }
        for ( let i = start; i < num.length; i++ ) {
            const val = num.substring( start, i + 1 );
            if ( i !== start && val[0] === '0' ) break;
            if ( expr.length === 0 ) {
                DFS( i + 1, +val, +val, [val] );
                continue;
            }

            DFS( i + 1, res + +val, +val, [...expr, '+', val] );
            DFS( i + 1, res - +val, -val, [...expr, '-', val] );
            DFS( i + 1, res - acc + acc * +val, acc * +val, [...expr, '*', val] );
        }
    }
}

describe( '282.expression-add-operators', () => {
    it( '123, 6', () => {
        expect( addOperators( '123', 6 ).sort() ).toStrictEqual(
            ['1+2+3', '1*2*3'].sort(),
        );
    } );

    it( '232, 8', () => {
        expect( addOperators( '232', 8 ).sort() ).toStrictEqual(
            ['2*3+2', '2+3*2'].sort(),
        );
    } );

    it( '105, 5', () => {
        expect( addOperators( '105', 5 ) ).toStrictEqual( ['1*0+5', '10-5'].sort() );
    } );

    it( '3456237490, 9191', () => {
        expect( addOperators( '3456237490', 9191 ).sort() ).toStrictEqual( [] );
    } );
} );
