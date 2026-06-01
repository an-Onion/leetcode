function minimumCost( cost: number[] ): number {
    cost.sort( ( a, b ) => a - b );

    let sum = 0;
    while ( cost.length > 0 ) {
        sum += cost.pop();
        sum += cost.pop() ?? 0;
        cost.pop();
    }

    return sum;
}

describe( '2144. Minimum Cost of Buying Candies With Discount', () => {
    it( 'case 1', () => {
        const cost = [1, 2, 3];
        expect( minimumCost( cost ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        const cost = [6, 5, 7, 9, 2, 2];
        expect( minimumCost( cost ) ).toBe( 23 );
    } );

    it( 'case 3', () => {
        const cost = [5, 5];
        expect( minimumCost( cost ) ).toBe( 10 );
    } );
} );
