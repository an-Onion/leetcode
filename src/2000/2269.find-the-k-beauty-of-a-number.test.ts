function divisorSubstrings( num: number, k: number ): number {
    const numStr = num.toString();

    let cnt = 0;
    for ( let i = 0; i <= numStr.length - k; i++ ) {
        const divisor = parseInt( numStr.substring( i, i + k ) );

        if ( divisor && num % divisor === 0 ) cnt++;
    }
    return cnt;
}

describe( '2269.find-the-k-beauty-of-a-number', () => {
    it( 'case 1', () => {
        expect( divisorSubstrings( 240, 2 ) ).toEqual( 2 );
    } );

    it( 'case 2', () => {
        expect( divisorSubstrings( 430043, 2 ) ).toEqual( 2 );
    } );

    it( 'case 3', () => {
        expect( divisorSubstrings( 20, 1 ) ).toEqual( 1 );
    } );
} );
