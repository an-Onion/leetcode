function findRotation( mat: number[][], target: number[][] ): boolean {
    for ( let i = 0; i < 4; i++ ) {
        if ( isDeepEqual( mat, target ) ) {
            return true;
        }
        rotate( mat );
    }

    return false;

    function isDeepEqual( a: number[][], b: number[][] ): boolean {
        return a.every( ( row, i ) => row.every( ( cell, j ) => cell === b[i][j] ) );
    }

    function rotate( mat: number[][] ): void {
        const n = mat.length;
        // Transpose
        for ( let i = 0; i < n; i++ ) {
            for ( let j = i + 1; j < n; j++ ) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
        // Reverse each row
        for ( let i = 0; i < n; i++ ) {
            mat[i].reverse();
        }
    }
}

describe( '1886. Determine Whether Matrix Can Be Obtained By Rotation', () => {
    it( 'case 1', () => {
        const mat = [
                [0, 1],
                [1, 0],
            ],
            target = [
                [1, 0],
                [0, 1],
            ];
        expect( findRotation( mat, target ) ).toBe( true );
    } );

    it( 'case 2', () => {
        const mat = [
                [0, 1],
                [1, 1],
            ],
            target = [
                [1, 0],
                [0, 1],
            ];
        expect( findRotation( mat, target ) ).toBe( false );
    } );

    it( 'case 3', () => {
        const mat = [
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1],
            ],
            target = [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0],
            ];
        expect( findRotation( mat, target ) ).toBe( true );
    } );
} );
