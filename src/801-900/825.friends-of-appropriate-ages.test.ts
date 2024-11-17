function numFriendRequests( ages: number[] ): number {
    const count = new Array( 121 ).fill( 0 );
    for ( let i = 0; i < ages.length; i++ ) {
        count[ages[i]]++;
    }

    let ans = 0,
        window = 0;
    for ( let r = 0, l = 0; r <= 120; r++ ) {
        window += count[r];
        if ( l * 2 <= r + 14 ) {
            window -= count[l];
            l++;
        }
        if ( window > 0 ) {
            ans += count[r] * ( window - 1 );
        }
    }
    return ans;
}

describe( '825.friends-of-appropriate-ages', () => {
    it( 'should', () => {
        expect( numFriendRequests( [16, 16] ) ).toBe( 2 );
        expect( numFriendRequests( [16, 17, 18] ) ).toBe( 2 );
        expect( numFriendRequests( [20, 30, 100, 110, 120] ) ).toBe( 3 );
    } );
} );
