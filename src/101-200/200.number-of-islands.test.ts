function numIslands( grid: string[][] ): number {

    const visited = Array.from( Array( grid.length ), () => new Array( grid[0].length ) );
    
    const DFS = ( i: number, j:number ) => {

        if( i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || visited[i][j] || grid[i][j] === '0' ) return;
        const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
        visited[i][j] = true;
        for( const dir of dirs ){
            DFS( i + dir[0], j + dir[1] );
        }
    };

    let count = 0;

    for( let i = 0; i < grid.length; i++ ){
        for( let j = 0; j < grid[0].length; j++ ){
            if( grid[i][j] === '1' && !visited[i][j] ){
                count++;
                DFS( i, j );
            }
        }
    }
    return count;
}

describe( '200. number-of-islands', () => {
    it( 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', () => {
        expect( numIslands( [
            ['1', '1', '1', '1', '0'], 
            ['1', '1', '0', '1', '0'], 
            ['1', '1', '0', '0', '0'], 
            ['0', '0', '0', '0', '0'],
        ] ) ).toEqual( 1 );
    } );

    it( 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', () =>{
        expect( numIslands( [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ] ) ).toEqual( 3 );
    } );
} );