function findEvenNumbers( digits: number[] ): number[] {
    const freq = Array( 10 ).fill( 0 );
    for ( const digit of digits ) {
        freq[digit]++;
    }

    const ret = [];
    for ( let i = 100; i < 1000; i += 2 ) {
        const [a, b, c] = [i % 10, ( ( i / 10 ) | 0 ) % 10, ( i / 100 ) | 0];
        freq[a]--, freq[b]--, freq[c]--;
        if ( freq[a] >= 0 && freq[b] >= 0 && freq[c] >= 0 ) {
            ret.push( i );
        }
        freq[a]++, freq[b]++, freq[c]++;
    }
    return ret;
}

describe( '2094. findEvenNumbers', () => {
    it( 'case 1', () => {
        const digits = [2, 1, 3, 0];
        expect( findEvenNumbers( digits ) ).toEqual( [
            102, 120, 130, 132, 210, 230, 302, 310, 312, 320,
        ] );
    } );

    it( 'case 2', () => {
        const digits = [2, 2, 8, 8, 2];
        expect( findEvenNumbers( digits ) ).toEqual( [
            222, 228, 282, 288, 822, 828, 882,
        ] );
    } );

    it( 'case 3', () => {
        const digits = [3, 7, 5];
        expect( findEvenNumbers( digits ) ).toEqual( [] );
    } );
} );
