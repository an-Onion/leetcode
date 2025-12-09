function specialTriplets( nums: number[] ): number {
    const left = new Map<number, number>();
    const right = new Map<number, number>();

    for ( const num of nums ) {
        right.set( num, ( right.get( num ) || 0 ) + 1 );
    }

    let ret = 0;
    const MODE = 1e9 + 7;

    for ( const num of nums ) {
        right.set( num, right.get( num ) - 1 );
        ret += ( ( left.get( num * 2 ) || 0 ) * ( right.get( num * 2 ) || 0 ) ) % MODE;
        left.set( num, ( left.get( num ) || 0 ) + 1 );
    }

    return ret % MODE;
}

describe( '3583. Count Special Triplets', () => {
    it( 'case 1', () => {
        expect( specialTriplets( [6, 3, 6] ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( specialTriplets( [0, 1, 0, 0] ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( specialTriplets( [8, 4, 2, 8, 4] ) ).toBe( 2 );
    } );
} );
