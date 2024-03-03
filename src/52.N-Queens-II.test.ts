function totalNQueens( n: number ): number {

    type Props = {
        row: number;
        columns: number;
        left: number;
        right: number;
    }

    function DFS( { row, columns, left, right }: Props ):number {
        if( row === n ) {
            return 1;
        }
        let count = 0;
        let positions = ( ( 1 << n ) - 1 ) & ( ~( columns | left | right ) );
        while( positions ) {
            const next = positions & -positions;

            count += DFS( {
                row: row + 1,
                columns: columns | next,
                left: ( left | next ) >> 1,
                right: ( right | next ) << 1,
            } );

            positions = positions & ( positions - 1 );
        }

        return count;
    }
    return DFS( { row: 0,columns: 0,left: 0,right: 0 } );
}

describe( '52. N-Queens II', () => {
    
    it( '1', () => {
        expect( totalNQueens( 1 ) ).toStrictEqual( 1 );
    } );

    it( '2', () => {
        expect( totalNQueens( 2 ) ).toStrictEqual( 0 );
    } );

    it( '4', () => {
        expect( totalNQueens( 4 ) ).toStrictEqual( 2 );
    } );

} );