function addStrings( num1: string, num2: string ): string {
    const x = toIntegers( num1 ),
        y = toIntegers( num2 );

    const N = Math.max( x.length, y.length );

    const ret: number[] = [];
    let carry = 0;

    for ( let i = 0; i < N; ++i ) {
        const sum = carry + ( x[i] ?? 0 ) + ( y[i] ?? 0 );
        ret.push( sum % 10 );
        carry = ( sum / 10 ) | 0;
    }

    if ( carry === 1 ) ret.push( 1 );
    return ret.reverse().join( '' );

    function toIntegers( num: string ) {
        return num
            .split( '' )
            .reverse()
            .map( ( v ) => parseInt( v ) );
    }
}

describe( '415. Add Strings', () => {
    it( 'should work', () => {
        expect( addStrings( '11', '123' ) ).toEqual( '134' );
        expect( addStrings( '456', '77' ) ).toEqual( '533' );
        expect( addStrings( '0', '0' ) ).toEqual( '0' );
    } );
} );
