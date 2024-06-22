function isSelfCrossing( distance: number[] ): boolean {
    for ( let i = 3; i < distance.length; i++ ) {
        // Case 1: current line crosses the line 3 steps ahead of it
        if (
            distance[i] >= distance[i - 2] &&
            distance[i - 1] <= distance[i - 3]
        ) {
            return true;
        }
        // Case 2: current line crosses the line 4 steps ahead of it
        if (
            i >= 4 &&
            distance[i - 1] === distance[i - 3] &&
            distance[i] + distance[i - 4] >= distance[i - 2]
        ) {
            return true;
        }
        // Case 3: current line crosses the line 6 steps ahead of it
        if (
            i >= 5 &&
            distance[i - 2] >= distance[i - 4] &&
            distance[i] + distance[i - 4] >= distance[i - 2] &&
            distance[i - 1] <= distance[i - 3] &&
            distance[i - 1] + distance[i - 5] >= distance[i - 3]
        ) {
            return true;
        }
    }
    return false;
}

describe( '335. self crossing', () => {
    it( '[2,1,1,2]', () => {
        expect( isSelfCrossing( [2, 1, 1, 2] ) ).toBeTruthy();
    } );

    it( '[1,2,3,4]', () => {
        expect( isSelfCrossing( [1, 2, 3, 4] ) ).toBeFalsy();
    } );

    it( '[1,1,1,1]', () => {
        expect( isSelfCrossing( [1, 1, 1, 1] ) ).toBeTruthy();
    } );
} );
