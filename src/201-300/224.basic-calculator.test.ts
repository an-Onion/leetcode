function calculate( s: string ): number {

    const stack: Array<number | string> = [];

    const method = {
        '+': ( a: number, b: number ) => a + b,
        '-': ( a: number, b: number ) => a - b,
    };

    let num = 0, res = 0, op = '+';

    for( let i = 0; i < s.length; i++ ){

        if( s[i] === ' ' ) continue;

        if( s[i] >= '0' && s[i] <= '9' ){
            num = num * 10 + Number( s[i] );
            continue;
        }

        if( ['+', '-'].includes( s[i] ) ){
            res = method[op]( res, num );
            op = s[i];
            num = 0;
            continue;
        }

        if( s[i] === '(' ){
            stack.push( res, op );
            op = '+';
            res = 0;
            continue;
        }

        if( s[i] === ')' ){
            res = method[op]( res, num );
            op = stack.pop() as '+' | '-';
            res = method[op]( stack.pop(), res );
            num = 0;
            continue;
        }

    }
    return res = method[op]( res, num );
}

describe( '224. basic calculator', () => {
    it( '1 + 1', () => {
        const s = '1 + 1';
        expect( calculate( s ) ).toBe( 2 );
    } );

    it( ' 2-1 + 2 ', () => {
        const s = ' 2-1 + 2 ';
        expect( calculate( s ) ).toBe( 3 );
    } );

    it( '(1+(4+5+2)-3)+(6+8)', () => {
        const s = '(1+(4+5+2)-3)+(6+8)';
        expect( calculate( s ) ).toBe( 23 );
    } );

} );