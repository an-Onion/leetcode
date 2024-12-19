function stableMountains( height: number[], threshold: number ): number[] {
    const ret = [];
    for ( let i = 0; i < height.length - 1; ++i ) {
        if ( height[i] > threshold ) {
            ret.push( i + 1 );
        }
    }

    return ret;
}

describe( '3285.find-indices-of-stable-mountains', () => {
    it( 'case 1', () => {
        const height = [1, 2, 3, 4, 5],
            threshold = 2;
        expect( stableMountains( height, threshold ) ).toEqual( [3, 4] );
    } );

    it( 'case 2', () => {
        const height = [10, 1, 10, 1, 10],
            threshold = 3;
        expect( stableMountains( height, threshold ) ).toEqual( [1, 3] );
    } );

    it( 'case 3', () => {
        const height = [10, 1, 10, 1, 10],
            threshold = 10;
        expect( stableMountains( height, threshold ) ).toEqual( [] );
    } );
} );
