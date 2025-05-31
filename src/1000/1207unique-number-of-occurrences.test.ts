function uniqueOccurrences( arr: number[] ): boolean {
    const map = new Map<number, number>();

    for ( const num of arr ) {
        const pre = map.get( num ) ?? 0;
        map.set( num, pre + 1 );
    }
    const times = new Set();

    for ( const [, val] of map.entries() ) {
        times.add( val );
    }
    return times.size === map.size;
}

describe( '1207. Unique Number of Occurrences', () => {
    it( 'case 1', () => {
        expect( uniqueOccurrences( [1, 2, 2, 1, 1, 3] ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( uniqueOccurrences( [1, 2] ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( uniqueOccurrences( [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0] ) ).toBe(
            true,
        );
    } );
} );
