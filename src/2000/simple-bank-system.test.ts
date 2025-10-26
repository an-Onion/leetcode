class Bank {
    #balance: number[];

    constructor( balance: number[] ) {
        this.#balance = balance;
    }

    transfer( account1: number, account2: number, money: number ): boolean {
        if (
            !this.#isValidAccount( --account1 ) ||
            !this.#isValidAccount( --account2 ) ||
            money < 0 ||
            money > this.#balance[account1]
        ) {
            return false;
        }
        this.#balance[account1] -= money;
        this.#balance[account2] += money;
        return true;
    }

    deposit( account: number, money: number ): boolean {
        if ( !this.#isValidAccount( --account ) || money < 0 ) {
            return false;
        }
        this.#balance[account] += money;
        return true;
    }

    withdraw( account: number, money: number ): boolean {
        if (
            !this.#isValidAccount( --account ) ||
            money < 0 ||
            money > this.#balance[account]
        ) {
            return false;
        }
        this.#balance[account] -= money;
        return true;
    }

    #isValidAccount( account: number ): boolean {
        return account >= 0 && account < this.#balance.length;
    }
}

describe( '2000. simple-bank-system', () => {
    it( 'case 1', () => {
        const bank = new Bank( [10, 100, 20, 50, 30] );
        expect( bank.withdraw( 3, 10 ) ).toBe( true );
        expect( bank.transfer( 5, 1, 20 ) ).toBe( true );
        expect( bank.deposit( 5, 20 ) ).toBe( true );
        expect( bank.transfer( 3, 4, 15 ) ).toBe( false );
        expect( bank.withdraw( 10, 50 ) ).toBe( false );
    } );
} );
