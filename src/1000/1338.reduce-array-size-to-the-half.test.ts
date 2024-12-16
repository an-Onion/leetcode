function minSetSize( arr: number[] ): number {
    const occurrences = new Map<number, number>();

    for ( const a of arr ) {
        const occ = occurrences.get( a ) ?? 0;
        occurrences.set( a, occ + 1 );
    }

    const frequencies = Array.from( occurrences.values() ).sort( ( a, b ) => b - a );
    let ret = 0,
        cnt = 0;
    for ( const f of frequencies ) {
        ( cnt += f ), ret++;
        if ( 2 * cnt >= arr.length ) {
            break;
        }
    }
    return ret;
}

describe( '1338. reduce-array-size-to-the-half', () => {
    it( 'case 1', () => {
        const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
        expect( minSetSize( arr ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const arr = [7, 7, 7, 7, 7, 7];
        expect( minSetSize( arr ) ).toBe( 1 );
    } );
} );
