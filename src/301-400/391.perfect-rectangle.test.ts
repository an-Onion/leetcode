function isRectangleCover( rectangles: number[][] ): boolean {
    const area = rectangles.reduce( ( acc, [x1, y1, x2, y2] ) => {
        return acc + ( x2 - x1 ) * ( y2 - y1 );
    }, 0 );

    const map = new Map<string, number>();

    const setPoint = ( x, y ) => {
        map.set( [x, y].join( ',' ), ( map.get( [x, y].join( ',' ) ) ?? 0 ) + 1 );
    };

    const getPoint = ( x, y ) => {
        return map.get( [x, y].join( ',' ) ) ?? 0;
    };

    let [minX, minY, maxX, maxY] = rectangles[0];

    for ( const [x, y, a, b] of rectangles ) {
        minX = Math.min( minX, x );
        minY = Math.min( minY, y );
        maxX = Math.max( maxX, a );
        maxY = Math.max( maxY, b );
        setPoint( x, y );
        setPoint( a, b );
        setPoint( x, b );
        setPoint( a, y );
    }

    if ( area !== ( maxX - minX ) * ( maxY - minY ) ) return false;

    if (
        getPoint( minX, minY ) !== 1 ||
        getPoint( minX, maxY ) !== 1 ||
        getPoint( maxX, minY ) !== 1 ||
        getPoint( maxX, maxY ) !== 1
    ) {
        return false;
    }

    map.delete( [minX, minY].join( ',' ) );
    map.delete( [minX, maxY].join( ',' ) );
    map.delete( [maxX, minY].join( ',' ) );
    map.delete( [maxX, maxY].join( ',' ) );

    for ( const [, count] of map.entries() ) {
        if ( count !== 2 && count !== 4 ) return false;
    }

    return true;
}

describe( '391. Perfect Rectangle', () => {
    it( 'e.g. 1', () => {
        expect(
            isRectangleCover( [
                [1, 1, 3, 3],
                [3, 1, 4, 2],
                [3, 2, 4, 4],
                [1, 3, 2, 4],
                [2, 3, 3, 4],
            ] ),
        ).toBeTruthy();
    } );

    it( 'e.g. 2', () => {
        expect(
            isRectangleCover( [
                [1, 1, 2, 3],
                [1, 3, 2, 4],
                [3, 1, 4, 2],
                [3, 2, 4, 4],
            ] ),
        ).toBeFalsy();
    } );

    it( 'e.g. 3', () => {
        expect(
            isRectangleCover( [
                [1, 1, 3, 3],
                [3, 1, 4, 2],
                [1, 3, 2, 4],
                [2, 2, 4, 4],
            ] ),
        ).toBeFalsy();
    } );
} );
