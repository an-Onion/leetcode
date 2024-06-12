function accountBalanceAfterPurchase( purchaseAmount: number ): number {
    return 100 -  ( ( purchaseAmount+5 ) / 10 | 0 ) * 10;
}

describe( '2806. account-balance-after-rounded-purchase', () => {

    it( '9', () => {
        expect( accountBalanceAfterPurchase( 9 ) ).toEqual( 90 );
    } );

    it( '15', () => {
        expect( accountBalanceAfterPurchase( 15 ) ).toEqual( 80 );
    } );

} );