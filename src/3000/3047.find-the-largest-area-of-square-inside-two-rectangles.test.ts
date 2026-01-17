function largestSquareArea(
    bottomLeft: number[][],
    topRight: number[][],
): number {
    let maxSide = 0;

    for ( let i = 0; i < bottomLeft.length; ++i ) {
        const [bx, by] = bottomLeft[i];
        const [tx, ty] = topRight[i];
        for ( let j = i + 1; j < bottomLeft.length; ++j ) {
            const [bx2, by2] = bottomLeft[j];
            const [tx2, ty2] = topRight[j];
            const width = Math.min( tx, tx2 ) - Math.max( bx, bx2 ); // 右上横坐标 - 左下横坐标
            const height = Math.min( ty, ty2 ) - Math.max( by, by2 ); // 右上纵坐标 - 左下纵坐标
            const side = Math.min( width, height );
            maxSide = Math.max( maxSide, side );
        }
    }

    return maxSide * maxSide;
}

describe( '3047. find-the-largest-area-of-square-inside-two-rectangles', () => {
    it( 'case 1', () => {
        const bottomLeft = [
                [1, 1],
                [2, 2],
                [3, 1],
            ],
            topRight = [
                [3, 3],
                [4, 4],
                [6, 6],
            ];
        expect( largestSquareArea( bottomLeft, topRight ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const bottomLeft = [
                [1, 1],
                [2, 2],
                [1, 2],
            ],
            topRight = [
                [3, 3],
                [4, 4],
                [3, 4],
            ];
        expect( largestSquareArea( bottomLeft, topRight ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        const bottomLeft = [
                [1, 1],
                [3, 3],
                [3, 1],
            ],
            topRight = [
                [2, 2],
                [4, 4],
                [4, 2],
            ];
        expect( largestSquareArea( bottomLeft, topRight ) ).toBe( 0 );
    } );
} );
