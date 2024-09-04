function vowelStrings( words: string[], left: number, right: number ): number {
    let count = 0;
    for ( let i = left; i <= right; ++i ) {
        if ( isVowelString( words[i] ) ) {
            count++;
        }
    }
    return count;

    function isVowelString( str: string ) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes( str.at( 0 ) ) && vowels.includes( str.at( -1 ) );
    }
}

describe( '2586. Count the Number of Vowel Strings in Range', () => {
    it( 'Example 1', () => {
        const words = ['are', 'amy', 'u'],
            left = 0,
            right = 2;
        expect( vowelStrings( words, left, right ) ).toBe( 2 );
    } );

    it( 'Example 2', () => {
        const words = ['hey', 'aeo', 'mu', 'ooo', 'artro'],
            left = 1,
            right = 4;
        expect( vowelStrings( words, left, right ) ).toBe( 3 );
    } );
} );
