function maximumGain( s: string, x: number, y: number ): number {
    let a = 'a',
        b = 'b';
    if ( x < y ) {
        [x, y] = [y, x];
        [a, b] = [b, a];
    }
    let ans = 0,
        cnt1 = 0,
        cnt2 = 0;
    for ( const c of s ) {
        if ( c !== a && c !== b ) {
            ans += Math.min( cnt1, cnt2 ) * y;
            ( cnt1 = 0 ), ( cnt2 = 0 );
            continue;
        }
        if ( c === a ) {
            cnt1++;
            continue;
        }
        if ( cnt1 <= 0 ) {
            cnt2++;
            continue;
        }
        cnt1--;
        ans += x;
    }
    ans += Math.min( cnt1, cnt2 ) * y;
    return ans;
}

describe( '1717. maximum-score-from-removing-substrings', () => {
    it( 'case 1', () => {
        expect( maximumGain( 'cdbcbbaaabab', 4, 5 ) ).toBe( 19 );
    } );

    it( 'case 2', () => {
        expect( maximumGain( 'aabbaaxybbaabb', 5, 4 ) ).toBe( 20 );
    } );
} );
