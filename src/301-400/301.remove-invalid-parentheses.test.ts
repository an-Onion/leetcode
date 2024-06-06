function removeInvalidParentheses( s: string ): string[] {

    let [l, r] = [0, 0];

    for ( const c of s ) {
        if ( c === '(' ) l++;
        else if ( c === ')' ) r++;
    }

    const Max = Math.min( l, r );

    const ret = new Set<string>();
    let Length = 0;

    function DFS( idx: number, cur: string, score: number ): void {

        if ( score < 0 || score > Max ) return;

        if ( idx === s.length ) {
            if ( score !== 0 || Length > cur.length ) return;

            if ( Length < cur.length ) {
                ret.clear();
            }
            Length = cur.length;
            ret.add( cur );
            return;
        }

        const c = s[idx++];

        if ( c === '(' ) {
            DFS( idx, cur + c, score + 1 );
            DFS( idx, cur, score );
        } else if ( c === ')' ) {
            DFS( idx, cur + c, score - 1 );
            DFS( idx, cur, score );
        } else {
            DFS( idx, cur + c, score );
        }
    }
    DFS( 0, '', 0 );
    return Array.from( ret );
}

describe( '301. remove invalid parentheses', () => {

    it( '()())()', () => {
        expect( removeInvalidParentheses( '()())()' ) ).toStrictEqual( ['()()()', '(())()'] );
    } );

} );