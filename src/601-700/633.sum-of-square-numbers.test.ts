function judgeSquareSum( c: number ): boolean {
    let l = 0,
        r = Math.floor( Math.sqrt( c ) );

    while ( l <= r ) {
        const sum = l * l + r * r;
        if ( sum === c ) return true;
        sum > c ? r-- : l++;
    }

    return false;
}

describe( '633.sum-of-square-numbers', () => {
    it( 'case 1', () => {
        expect( judgeSquareSum( 5 ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( judgeSquareSum( 3 ) ).toBe( false );
    } );
} );
