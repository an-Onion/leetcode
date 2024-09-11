function findInteger( k: number, digit1: number, digit2: number ): number {
    if ( digit1 === 0 && digit2 === 0 ) return -1;
    if ( digit1 > digit2 ) {
        [digit1, digit2] = [digit2, digit1];
    }
    const Q: number[] = [digit1, digit2];
    while ( Q.length ) {
        const top = Q.shift();
        if ( top > 2 ** 31 - 1 ) break;
        if ( top > k && top % k === 0 ) return top;
        Q.push( top * 10 + digit1 );
        Q.push( top * 10 + digit2 );
    }
    return -1;
}

describe( '1999. Smallest Greater Multiple Made of Two Digits', () => {
    it( 'e.g. 1', () => {
        const k = 2,
            digit1 = 0,
            digit2 = 2;
        expect( findInteger( k, digit1, digit2 ) ).toEqual( 20 );
    } );
    it( 'e.g. 2', () => {
        const k = 3,
            digit1 = 4,
            digit2 = 2;
        expect( findInteger( k, digit1, digit2 ) ).toEqual( 24 );
    } );
    it( 'e.g. 3', () => {
        const k = 2,
            digit1 = 0,
            digit2 = 0;
        expect( findInteger( k, digit1, digit2 ) ).toEqual( -1 );
    } );
} );
