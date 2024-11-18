const imageSmoother = function ( img ) {
    const M = img.length,
        N = img[0].length;
    const ret = Array.from( { length: M }, () => Array( N ).fill( 0 ) );
    for ( let i = 0; i < M; i++ ) {
        for ( let j = 0; j < N; j++ ) {
            let num = 0,
                sum = 0;
            for ( let x = i - 1; x <= i + 1; x++ ) {
                for ( let y = j - 1; y <= j + 1; y++ ) {
                    if ( x < 0 || x >= M || y < 0 || y >= N ) continue;
                    num++;
                    sum += img[x][y];
                }
            }
            ret[i][j] = ( sum / num ) | 0;
        }
    }
    return ret;
};

describe( '661.image-smoother', () => {
    it( 'case 1', () => {
        expect(
            imageSmoother( [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ] ),
        ).toEqual( [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ] );
    } );

    it( 'case 2', () => {
        expect(
            imageSmoother( [
                [100, 200, 100],
                [200, 50, 200],
                [100, 200, 100],
            ] ),
        ).toEqual( [
            [137, 141, 137],
            [141, 138, 141],
            [137, 141, 137],
        ] );
    } );
} );
