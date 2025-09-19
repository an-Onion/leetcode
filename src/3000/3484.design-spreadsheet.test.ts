class Spreadsheet {
    cellValues: Record<string, number>;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor( rows: number ) {
        this.cellValues = {};
    }

    setCell( cell: string, value: number ): void {
        this.cellValues[cell] = value;
    }

    resetCell( cell: string ): void {
        delete this.cellValues[cell];
    }

    getValue( formula: string ): number {
        const [, cell1, cell2] = formula.split( /[=+]/ );
        const value1 = this.getCellValue( cell1 );
        const value2 = this.getCellValue( cell2 );
        return value1 + value2;
    }

    getCellValue( cell: string ): number {
        return /[a-z]/i.test( cell )
            ? ( this.cellValues[cell] ?? 0 )
            : parseInt( cell );
    }
}

describe( '3484. Design Spreadsheet', () => {
    it( 'case 1', () => {
        const spreadsheet = new Spreadsheet( 3 );
        expect( spreadsheet.getValue( '=5+7' ) ).toBe( 12 );
        spreadsheet.setCell( 'A1', 10 );
        expect( spreadsheet.getValue( '=A1+6' ) ).toBe( 16 );
        spreadsheet.setCell( 'B2', 15 );
        expect( spreadsheet.getValue( '=A1+B2' ) ).toBe( 25 );
        spreadsheet.resetCell( 'A1' );
        expect( spreadsheet.getValue( '=A1+B2' ) ).toBe( 15 );
    } );
} );
