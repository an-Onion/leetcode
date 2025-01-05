class ATM {
    banknotes: number[];
    constructor() {
        this.banknotes = [0, 0, 0, 0, 0];
    }

    deposit( banknotesCount: number[] ): void {
        for ( let i = 0; i < banknotesCount.length; i++ ) {
            this.banknotes[i] += banknotesCount[i];
        }
    }

    withdraw( amount: number ): number[] {
        const ret = [];
        const values = [500, 200, 100, 50, 20];
        for ( let i = 0; i < values.length; i++ ) {
            const cnt = Math.min(
                this.banknotes[4 - i],
                Math.floor( amount / values[i] ),
            );
            ret.push( cnt );
            amount -= cnt * values[i];
        }
        if ( amount > 0 ) {
            return [-1];
        }
        ret.reverse();
        for ( let i = 0; i < ret.length; i++ ) {
            this.banknotes[i] -= ret[i];
        }
        return ret;
    }
}

describe( '2241. Design an ATM Machine', () => {
    it( 'test case 1', () => {
        const atm = new ATM();
        atm.deposit( [0, 0, 1, 2, 1] );
        expect( atm.withdraw( 600 ) ).toStrictEqual( [0, 0, 1, 0, 1] );
        atm.deposit( [0, 1, 0, 1, 1] );
        expect( atm.withdraw( 600 ) ).toStrictEqual( [-1] );
        expect( atm.withdraw( 550 ) ).toStrictEqual( [0, 1, 0, 0, 1] );
    } );
} );
