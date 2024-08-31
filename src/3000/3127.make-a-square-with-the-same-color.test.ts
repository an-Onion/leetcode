function canMakeSquare( grid: string[][] ): boolean {
    for ( let i = 0; i <= 1; i++ ) {
        for ( let j = 0; j <= 1; j++ ) {
            if ( check( i, j ) ) {
                return true;
            }
        }
    }
    return false;

    function check( x: number, y: number ): boolean {
        let count = 0;
        for ( let i = 0; i <= 1; i++ ) {
            for ( let j = 0; j <= 1; j++ ) {
                if ( grid[x + i][y + j] === 'B' ) {
                    count++;
                }
            }
        }
        return count !== 2;
    }
}

describe( '3127. Make a Square With the Same Color', () => {
    it( 'e.g. 1', () => {
        const grid = [
            ['B', 'W', 'B'],
            ['B', 'W', 'W'],
            ['B', 'W', 'B'],
        ];
        expect( canMakeSquare( grid ) ).toBe( true );
    } );

    it( 'e.g. 2', () => {
        const grid = [
            ['B', 'W', 'B'],
            ['W', 'B', 'W'],
            ['B', 'W', 'B'],
        ];
        expect( canMakeSquare( grid ) ).toBe( false );
    } );

    it( 'e.g. 3', () => {
        const grid = [
            ['B', 'W', 'B'],
            ['B', 'W', 'W'],
            ['B', 'W', 'W'],
        ];
        expect( canMakeSquare( grid ) ).toBe( true );
    } );
} );
