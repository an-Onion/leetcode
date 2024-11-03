function shoppingOffers(
    price: number[],
    special: number[][],
    needs: number[],
): number {
    const memo = new Map<string, number>();

    return DFS( needs );

    function DFS( curNeeds: number[] ) {
        const key = curNeeds.toString();
        if ( memo.has( key ) ) {
            return memo.get( key );
        }
        let minPrice = curNeeds.reduce(
            ( sum, need, idx ) => sum + need * price[idx],
            0,
        );

        offer: for ( const items of special ) {
            const nextNeeds = [];
            for ( let i = 0; i < items.length - 1; i++ ) {
                if ( items[i] > curNeeds[i] ) {
                    continue offer;
                }
                nextNeeds.push( curNeeds[i] - items[i] );
            }

            minPrice = Math.min( minPrice, items.at( -1 ) + DFS( nextNeeds ) );
        }

        memo.set( key, minPrice );
        return memo.get( key );
    }
}

describe( '638.shopping-offers', () => {
    it( 'e.g. 1', () => {
        const price = [2, 5],
            special = [
                [3, 0, 5],
                [1, 2, 10],
            ],
            needs = [3, 2];
        expect( shoppingOffers( price, special, needs ) ).toEqual( 14 );
    } );

    it( 'e.g. 2', () => {
        const price = [2, 3, 4],
            special = [
                [1, 1, 0, 4],
                [2, 2, 1, 9],
            ],
            needs = [1, 2, 1];
        expect( shoppingOffers( price, special, needs ) ).toEqual( 11 );
    } );
} );
