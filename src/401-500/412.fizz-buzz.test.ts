function fizzBuzz( n: number ): string[] {
    const ret: string[] = [];
    for ( let i = 1; i <= n; i++ ) {
        if ( i % 15 === 0 ) {
            ret.push( 'FizzBuzz' );
        } else if ( i % 3 === 0 ) {
            ret.push( 'Fizz' );
        } else if ( i % 5 === 0 ) {
            ret.push( 'Buzz' );
        } else {
            ret.push( i.toString() );
        }
    }

    return ret;
}

describe( '412. Fizz Buzz', () => {
    it( '3', () => {
        expect( fizzBuzz( 3 ) ).toEqual( ['1', '2', 'Fizz'] );
    } );
    it( '5', () => {
        expect( fizzBuzz( 5 ) ).toEqual( ['1', '2', 'Fizz', '4', 'Buzz'] );
    } );

    it( '15', () => {
        expect( fizzBuzz( 15 ) ).toEqual( [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ] );
    } );
} );
