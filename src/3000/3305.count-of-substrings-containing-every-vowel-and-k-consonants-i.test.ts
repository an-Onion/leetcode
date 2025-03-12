function countOfSubstrings( word: string, k: number ): number {
    const vowels = new Set( ['a', 'e', 'i', 'o', 'u'] );
    const count = ( m: number ): number => {
        const n = word.length;
        let consonants = 0,
            res = 0;
        const occur = new Map<string, number>();
        for ( let i = 0, j = 0; i < n; i++ ) {
            while ( j < n && ( consonants < m || occur.size < 5 ) ) {
                const ch = word[j++];
                if ( vowels.has( ch ) ) {
                    occur.set( ch, ( occur.get( ch ) || 0 ) + 1 );
                } else {
                    consonants++;
                }
            }
            if ( consonants >= m && occur.size === 5 ) {
                res += n - j + 1;
            }
            const left = word[i];
            if ( vowels.has( left ) ) {
                occur.set( left, occur.get( left )! - 1 );
                if ( occur.get( left ) === 0 ) {
                    occur.delete( left );
                }
            } else {
                consonants--;
            }
        }
        return res;
    };
    return count( k ) - count( k + 1 );
}

describe( '3305. count-of-substrings-containing-every-vowel-and-k-consonants-i', () => {
    it( 'case 1', () => {
        const word = 'aeioqq',
            k = 1;
        expect( countOfSubstrings( word, k ) ).toBe( 0 );
    } );

    it( 'case 2', () => {
        const word = 'aeiou',
            k = 0;
        expect( countOfSubstrings( word, k ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        const word = 'ieaouqqieaouqq',
            k = 1;
        expect( countOfSubstrings( word, k ) ).toBe( 3 );
    } );
} );
