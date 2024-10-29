export class _Node {
    val: boolean;
    isLeaf: boolean;
    topLeft: _Node | null;
    topRight: _Node | null;
    bottomLeft: _Node | null;
    bottomRight: _Node | null;
    constructor(
        val?: boolean,
        isLeaf?: boolean,
        topLeft?: _Node,
        topRight?: _Node,
        bottomLeft?: _Node,
        bottomRight?: _Node,
    ) {
        this.val = val === undefined ? false : val;
        this.isLeaf = isLeaf === undefined ? false : isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}

function construct( grid: number[][] ): _Node | null {
    return DFS( 0, 0, grid.length, grid.length );

    function DFS( r0: number, c0: number, r1: number, c1: number ) {
        for ( let i = r0; i < r1; ++i ) {
            for ( let j = c0; j < c1; ++j ) {
                if ( grid[i][j] !== grid[r0][c0] ) {
                    return new _Node(
                        true,
                        false,
                        DFS( r0, c0, ( r0 + r1 ) >> 1, ( c0 + c1 ) >> 1 ),
                        DFS( r0, ( c0 + c1 ) >> 1, ( r0 + r1 ) >> 1, c1 ),
                        DFS( ( r0 + r1 ) >> 1, c0, r1, ( c0 + c1 ) >> 1 ),
                        DFS( ( r0 + r1 ) >> 1, ( c0 + c1 ) >> 1, r1, c1 ),
                    );
                }
            }
        }
        return new _Node( grid[r0][c0] === 1, true );
    }
}

describe( '427.construct-quad-tree', () => {
    it( 'e.g. 1', () => {
        const grid = [
            [0, 1],
            [1, 0],
        ];

        const result = construct( grid );
        expect( result.val ).toEqual( true );
        expect( result.isLeaf ).toEqual( false );

        expect( result.topLeft!.val ).toEqual( false );
        expect( result.topLeft!.isLeaf ).toEqual( true );

        expect( result.topRight!.val ).toEqual( true );
        expect( result.topRight!.isLeaf ).toEqual( true );

        expect( result.bottomLeft!.val ).toEqual( true );
        expect( result.bottomLeft!.isLeaf ).toEqual( true );

        expect( result.bottomRight!.val ).toEqual( false );
        expect( result.bottomRight!.isLeaf ).toEqual( true );
    } );
} );
