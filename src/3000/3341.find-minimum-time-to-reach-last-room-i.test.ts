function minTimeToReach( moveTime: number[][] ): number {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = moveTime.length;
    const m = moveTime[0].length;
    const dist: number[][] = Array.from( { length: n }, () =>
        Array( m ).fill( Infinity ),
    );
    const Q: [number, number][] = [];
    Q.push( [0, 0] );
    dist[0][0] = 0;

    while ( Q.length > 0 ) {
        const cur = Q.shift()!;
        const x = cur[0];
        const y = cur[1];

        for ( let i = 0; i < 4; i++ ) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 &&
                nx < n &&
                ny >= 0 &&
                ny < m &&
                dist[nx][ny] > Math.max( dist[x][y], moveTime[nx][ny] ) + 1
            ) {
                dist[nx][ny] = Math.max( dist[x][y], moveTime[nx][ny] ) + 1;
                Q.push( [nx, ny] );
            }
        }
    }

    return dist[n - 1][m - 1];
}

describe( '3314. find minimum time to reach last room', () => {
    it( 'case 1', () => {
        const moveTime = [
            [0, 4],
            [4, 4],
        ];
        expect( minTimeToReach( moveTime ) ).toBe( 6 );
    } );
    it( 'case 2', () => {
        const moveTime = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        expect( minTimeToReach( moveTime ) ).toBe( 3 );
    } );
} );
