function closestTarget(
    words: string[],
    target: string,
    startIndex: number,
): number {
    const n = words.length;
    let ans = n;
    for ( let i = 0; i < n; i++ ) {
        if ( words[i] === target ) {
            const d = Math.abs( i - startIndex );
            ans = Math.min( ans, d, n - d );
        }
    }
    return ans === n ? -1 : ans;
}

describe( '2515. shortest-distance-to-target-string-in-a-circular-array', () => {
    it( 'case 1', () => {
        expect(
            closestTarget(
                ['hello', 'i', 'am', 'leetcode', 'hello'],
                'hello',
                1,
            ),
        ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( closestTarget( ['i', 'eat', 'leetcode'], 'leetcode', 0 ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( closestTarget( ['i', 'eat', 'leetcode'], 'ate', 0 ) ).toBe( -1 );
    } );
} );
