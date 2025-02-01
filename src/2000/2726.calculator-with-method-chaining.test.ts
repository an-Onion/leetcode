class Calculator {
    result: number;

    constructor( value: number ) {
        this.result = value;
    }

    add( value: number ): Calculator {
        this.result += value;
        return this;
    }

    subtract( value: number ): Calculator {
        this.result -= value;
        return this;
    }

    multiply( value: number ): Calculator {
        this.result *= value;
        return this;
    }

    divide( value: number ): Calculator {
        if ( value === 0 ) {
            throw Error( 'Division by zero is not allowed' );
        }
        this.result /= value;
        return this;
    }

    power( value: number ): Calculator {
        this.result **= value;
        return this;
    }

    getResult(): number {
        return this.result;
    }
}

describe( '2726. Calculator with Method Chaining', () => {
    it( 'case 1', () => {
        expect( new Calculator( 10 ).add( 5 ).subtract( 7 ).getResult() ).toBe( 8 );
    } );

    it( 'case 2', () => {
        expect( new Calculator( 2 ).multiply( 5 ).power( 2 ).getResult() ).toBe( 100 );
    } );

    it( 'case 3', () => {
        expect( () => new Calculator( 20 ).divide( 0 ).getResult() ).toThrow(
            'Division by zero is not allowed',
        );
    } );
} );
