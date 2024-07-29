function calPoints( operations: string[] ): number {
    const stack = [];
    for( const op of operations ){

        if( op === '+' ){
            stack.push( stack.at( -1 ) + stack.at( -2 ) );
            continue;
        }
        if( op === 'D' ){
            stack.push( stack.at( -1 ) * 2 );
            continue;
        }
        if( op === 'C' ){
            stack.pop();
            continue;
        }

        stack.push( Number( op ) );
    }
    return stack.reduce( ( acc, n ) => acc + n, 0 );
}

describe( '682. Baseball Game', () => {
    it( 'example ', () => {
        expect( calPoints( ['5','2','C','D','+' ] ) ).toBe( 30 );
        expect( calPoints( ['5','-2','4','C','D','9','+','+' ] ) ).toBe( 27 );
    } );
} );