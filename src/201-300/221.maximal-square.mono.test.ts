function maximalSquare( matrix: string[][] ): number {
    const M = matrix.length, N = matrix[0].length;
    const h = new Array( N ).fill( 0 );
    const mono: number[] = [-1];

    let ret = 0;

    for( let i = 0; i < M; i++ ) {
        for( let j = 0; j < N; j++ ){
            h[j] = matrix[i][j] === '1' ? h[j] + 1 : 0;

            while( h[j] < h[mono.at( -1 )] ){
                const top = mono.pop();
                const side = Math.min( h[top], j - mono.at( -1 ) - 1 );
                ret = Math.max( ret, side * side );
            }

            mono.push( j );
        }
        while( mono.length > 1 ){
            const top = mono.pop();
            const side = Math.min( h[top], N - mono.at( -1 ) - 1 );
            ret = Math.max( ret, side * side );
        }
    }

    return ret;
}

describe( '221. maximal-square', () => {

    it( 'case 1', () => {
        const matrix = [
            ['1','0','1','0','0'],
            ['1','0','1','1','1'],
            ['1','1','1','1','1'],
            ['1','0','0','1','0'],
        ];
        expect( maximalSquare( matrix ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const matrix = [['0','1'],['1','0']];
        expect( maximalSquare( matrix ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        const matrix = [['0']];
        expect( maximalSquare( matrix ) ).toBe( 0 );
    } );
} );