function minDominoRotations( tops: number[], bottoms: number[] ): number {
    const rotation = check( tops[0] );
    if ( rotation !== -1 || tops[0] === bottoms[0] ) {
        return rotation;
    }
    return check( bottoms[0] );

    function check( target: number ) {
        let rotationA = 0,
            rotationB = 0;
        for ( let i = 0; i < tops.length; ++i ) {
            if ( tops[i] !== target && bottoms[i] !== target ) {
                return -1;
            }
            if ( tops[i] !== target ) {
                rotationA++;
            }
            if ( bottoms[i] !== target ) {
                rotationB++;
            }
        }
        return Math.min( rotationA, rotationB );
    }
}

describe( '1007. Minimum Domino Rotations For Equal Row', () => {
    it( 'case 1', () => {
        expect( minDominoRotations( [2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2] ) ).toBe(
            2,
        );
    } );

    it( 'case 2', () => {
        expect( minDominoRotations( [3, 5, 1, 2, 3], [3, 6, 3, 3, 4] ) ).toBe( -1 );
    } );
} );
