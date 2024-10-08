function destCity( paths: string[][] ): string {
    const set = new Set<string>();

    for ( const [from] of paths ) {
        set.add( from );
    }
    for ( const [, to] of paths ) {
        if ( !set.has( to ) ) return to;
    }
    return '';
}

describe( '1436. Destination City', () => {
    it( 'should return destination city', () => {
        expect(
            destCity( [
                ['London', 'New York'],
                ['New York', 'Lima'],
                ['Lima', 'Sao Paulo'],
            ] ),
        ).toBe( 'Sao Paulo' );
        expect(
            destCity( [
                ['B', 'C'],
                ['D', 'B'],
                ['C', 'A'],
            ] ),
        ).toBe( 'A' );
        expect( destCity( [['A', 'Z']] ) ).toBe( 'Z' );
    } );
} );
