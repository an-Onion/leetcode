function closestMeetingNode(
    edges: number[],
    node1: number,
    node2: number,
): number {
    const dist1 = getDistance( node1 );
    const dist2 = getDistance( node2 );
    let minDistance = Number.MAX_SAFE_INTEGER;
    let ans = -1;

    for ( let i = 0; i < edges.length; i++ ) {
        if ( dist1[i] === -1 || dist2[i] === -1 ) continue;
        const curDistance = Math.max( dist1[i], dist2[i] );
        if ( curDistance < minDistance ) {
            ans = i;
            minDistance = curDistance;
        }
    }

    return ans;

    function getDistance( cur: number ): number[] {
        const distance = Array( edges.length ).fill( -1 );
        let cnt = 0;
        while ( cur !== -1 && distance[cur] === -1 ) {
            distance[cur] = cnt++;
            cur = edges[cur];
        }
        return distance;
    }
}

describe( '2359. find closest node to given two nodes', () => {
    it( 'case 1', () => {
        expect( closestMeetingNode( [2, 2, 3, -1], 0, 1 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( closestMeetingNode( [1, 2, -1], 0, 2 ) ).toBe( 2 );
    } );
} );
