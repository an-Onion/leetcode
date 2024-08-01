function maxmiumScore( cards: number[], cnt: number ): number {
    cards.sort( ( a, b ) => b - a );

    let sum = 0;
    let [odd, even] = [-1, -1];

    for ( let i = 0; i < cnt; ++i ) {
        const card = cards[i];

        if ( card % 2 === 0 ) {
            even = card;
        } else {
            odd = card;
        }

        sum += cards[i];
    }

    if ( sum % 2 === 0 ) return sum;

    let ret = 0;
    for ( let i = cards.length - 1; i >= cnt; i-- ) {
        const card = cards[i];
        if ( card % 2 === 1 && even !== -1 ) {
            ret = Math.max( ret, sum - even + card );
        }

        if ( card % 2 === 0 && odd !== -1 ) {
            ret = Math.max( ret, sum - odd + card );
        }
    }
    return ret;
}

describe( 'LCP 40', () => {
    it( 'should return 18', () => {
        const cards = [1,2,8,9], cnt = 3;
        expect( maxmiumScore( cards, cnt ) ).toBe( 18 );
    } );
} );