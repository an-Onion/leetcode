function maximalRectangle( matrix: string[][] ): number {
    const [rows, cols] = [matrix.length, matrix[0].length];

    const left = Array.from( { length: rows + 1 }, () => Array( cols ).fill( 0 ) );

    for ( let i = 0; i < rows; i++ ) {
        for ( let j = 0; j < cols; j++ ) {
            if ( matrix[i][j] === '1' ) {
                left[i][j] = ( left[i][j - 1] ?? 0 ) + 1;
            }
        }
    }
    let maxArea = 0;

    for ( let j = 0; j < cols; j++ ) {
        const mono: number[] = [-1];

        for ( let i = 0; i <= rows; i++ ) {
            while ( left[mono.at( -1 )]?.[j] >= left[i][j] ) {
                const width = left[mono.pop()!][j];
                const area = width * ( i - mono.at( -1 )! - 1 );
                maxArea = Math.max( maxArea, area );
            }
            mono.push( i );
        }
    }
    return maxArea;
}

describe( '85. Maximal rectangle', () => {
    it( 'case 1', () => {
        const matrix = [
            ['1', '0', '1', '0', '0'],
            ['1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '1'],
            ['1', '0', '0', '1', '0'],
        ];
        expect( maximalRectangle( matrix ) ).toEqual( 6 );
    } );

    it( 'case 2', () => {
        const matrix = [['0']];
        expect( maximalRectangle( matrix ) ).toEqual( 0 );
    } );

    it( 'case 3', () => {
        const matrix = [['1']];
        expect( maximalRectangle( matrix ) ).toEqual( 1 );
    } );
} );
