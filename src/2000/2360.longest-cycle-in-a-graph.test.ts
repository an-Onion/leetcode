function longestCycle( edges ): number {
    const n = edges.length;
    const visTime = Array( n ).fill( 0 );
    let curTime = 1;
    let ans = -1;
    for ( let i = 0; i < n; i++ ) {
        let x = i;
        const startTime = curTime;
        while ( x !== -1 && visTime[x] === 0 ) {
            visTime[x] = curTime++;
            x = edges[x];
        }
        if ( x !== -1 && visTime[x] >= startTime ) {
            ans = Math.max( ans, curTime - visTime[x] );
        }
    }
    return ans;
}

describe( '2360. Longest Cycle in a Graph', () => {
    it( 'case 1', () => {
        expect( longestCycle( [3, 3, 4, 2, 3] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( longestCycle( [2, -1, 3, 1] ) ).toBe( -1 );
    } );
} );
