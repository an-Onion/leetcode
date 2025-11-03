function minCost( colors: string, neededTime: number[] ): number {
    let ret = 0,
        maxT = 0;
    for ( let i = 0; i < colors.length; ++i ) {
        ret += neededTime[i];
        maxT = Math.max( maxT, neededTime[i] );
        if ( colors[i] !== colors[i + 1] ) {
            ret -= maxT;
            maxT = 0;
        }
    }

    return ret;
}

describe( '1578.minimum-time-to-make-rope-colorful', () => {
    it( 'case 1', () => {
        const colors = 'abaac',
            neededTime = [1, 2, 3, 4, 5];
        expect( minCost( colors, neededTime ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        const colors = 'abc',
            neededTime = [1, 2, 3];
        expect( minCost( colors, neededTime ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        const colors = 'aabaa',
            neededTime = [1, 2, 3, 4, 1];
        expect( minCost( colors, neededTime ) ).toBe( 2 );
    } );
} );
