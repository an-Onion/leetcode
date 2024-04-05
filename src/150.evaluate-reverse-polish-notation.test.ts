function evalRPN( tokens: string[] ): number {

    const operators = {
        '+': ( a: number, b: number ) => a + b,
        '-': ( a: number, b: number ) => a - b,
        '*': ( a: number, b: number ) => a * b,
        '/': ( a: number, b: number ) => Math.trunc( a / b ),
    };

    const stack: number[] = [];
    for( const token of tokens ){
        if( !['+', '-', '*', '/'].includes( token ) ){
            stack.push( parseInt( token, 10 ) );
            continue;
        }
        const b = stack.pop()!;
        const a = stack.pop()!;
        stack.push( operators[token]( a, b ) );
    }
    return stack.pop();
}

describe( '150. evaluate-reverse-polish-notation', () => {
    it( '["2","1","+","3","*"]', () => {
        const tokens = ['2','1','+','3','*'];
        expect( evalRPN( tokens ) ).toEqual( 9 );
    } );

    it( '["4","13","5","/","+"]', () => {
        const tokens = ['4','13','5','/','+'];
        expect( evalRPN( tokens ) ).toEqual( 6 );
    } );

    it( '["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
        const tokens = ['10','6','9','3','+','-11','*','/','*','17','+','5','+'];
        expect( evalRPN( tokens ) ).toEqual( 22 );
    } );

} );