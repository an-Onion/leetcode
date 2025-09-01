function recoverOrder( order: number[], friends: number[] ): number[] {
    const isFriend = Array( order.length + 1 ).fill( false );
    friends.forEach( ( friend ) => {
        isFriend[friend] = true;
    } );

    return order.reduce( ( acc, cur ) => {
        if ( isFriend[cur] ) {
            acc.push( cur );
        }
        return acc;
    }, [] );
}

describe( '3668. restore-finishing-order', () => {
    it( 'case 1', () => {
        const order = [3, 1, 2, 5, 4],
            friends = [1, 3, 4];
        expect( recoverOrder( order, friends ) ).toEqual( [3, 1, 4] );
    } );

    it( 'case 2', () => {
        const order = [1, 4, 5, 3, 2],
            friends = [2, 5];
        expect( recoverOrder( order, friends ) ).toEqual( [5, 2] );
    } );
} );
