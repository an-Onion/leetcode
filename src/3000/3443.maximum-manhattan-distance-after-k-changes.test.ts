function maxDistance( s: string, k: number ): number {
    let latitude = 0,
        longitude = 0,
        ans = 0;
    for ( let i = 0; i < s.length; i++ ) {
        switch ( s[i] ) {
            case 'N':
                latitude++;
                break;
            case 'S':
                latitude--;
                break;
            case 'E':
                longitude++;
                break;
            case 'W':
                longitude--;
                break;
        }
        ans = Math.max(
            ans,
            Math.min( Math.abs( latitude ) + Math.abs( longitude ) + k * 2, i + 1 ),
        );
    }
    return ans;
}

describe( '3443. Maximum Manhattan Distance After K Changes', () => {
    it( 'case 1', () => {
        const s = 'NWSE',
            k = 1;
        expect( maxDistance( s, k ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        const s = 'NSWWEW',
            k = 3;
        expect( maxDistance( s, k ) ).toBe( 6 );
    } );
} );
