export function countCompleteDayPairs( hours: number[] ): number {
    const map = new Map<number, number>();
    let ret = 0;
    for ( const hour of hours ) {
        const quotient = hour % 24;
        ret += map.get( ( 24 - quotient ) % 24 ) ?? 0;
        const count = ( map.get( quotient ) ?? 0 ) + 1;
        map.set( quotient, count );
    }
    return ret;
}

describe( '3184. Count Pairs That Form a Complete Day I', () => {
    it( 'e.g. 1', () => {
        const hours = [12, 12, 30, 24, 24];
        expect( countCompleteDayPairs( hours ) ).toBe( 2 );
    } );

    it( 'e.g. 2', () => {
        const hours = [72, 48, 24, 3];
        expect( countCompleteDayPairs( hours ) ).toBe( 3 );
    } );
} );
