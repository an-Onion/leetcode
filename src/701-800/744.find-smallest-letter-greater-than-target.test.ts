function nextGreatestLetter( letters: string[], target: string ): string {
    if ( target >= letters[letters.length - 1] ) return letters[0];

    let l = 0,
        u = letters.length - 1;

    while ( l <= u ) {
        const m = l + ( ( u - l ) >> 1 );
        if ( letters[m] > target ) u = m - 1;
        else l = m + 1;
    }

    return letters[l];
}

describe( '744. Find Smallest Letter Greater Than Target', () => {
    it( 'should return the smallest letter greater than target', () => {
        expect( nextGreatestLetter( ['c', 'f', 'j'], 'a' ) ).toBe( 'c' );
    } );
    it( 'should return the smallest letter greater than target when target is the last letter', () => {
        expect( nextGreatestLetter( ['c', 'f', 'j'], 'c' ) ).toBe( 'f' );
    } );
    it( 'should return the first letter when target is greater than all letters', () => {
        expect( nextGreatestLetter( ['x', 'x', 'y', 'y'], 'z' ) ).toBe( 'x' );
    } );
} );
