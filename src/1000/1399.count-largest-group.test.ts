function countLargestGroup( n: number ): number {
    let last = 0,
        max = 0;
    const sm = Array( 64 ).fill( 0 );
    for ( let i = 1; i <= n; ++i ) {
        let m = last + 1;
        let c = i;
        while ( c % 10 === 0 ) {
            m = m - 9;
            c = ( c / 10 ) | 0;
        }
        sm[m] += 1;
        max = Math.max( sm[m], max );
        last = m;
    }
    let count = 0;
    for ( let i = 1; i < 64; ++i ) {
        count += sm[i] === max ? 1 : 0;
    }
    return count;
}

describe( '1399. count largest group', () => {
    it( 'case 1', () => {
        expect( countLargestGroup( 13 ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        expect( countLargestGroup( 2 ) ).toBe( 2 );
    } );
    it( 'case 3', () => {
        expect( countLargestGroup( 15 ) ).toBe( 6 );
    } );
    it( 'case 4', () => {
        expect( countLargestGroup( 24 ) ).toBe( 5 );
    } );
} );
