function countOfSubstrings( word: string, k: number ): number {
    const vowels = new Set( ['a', 'e', 'i', 'o', 'u'] );
    return count( k ) - count( k + 1 );

    function count( m: number ): number {
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
    }
}

describe( '3306. count-of-substrings-containing-every-vowel-and-k-consonants-ii', () => {
    it( 'case 1', () => {
        expect( countOfSubstrings( 'aeiouaa', 1 ) ).toBe( 0 );
    } );

    it( 'case 2', () => {
        expect( countOfSubstrings( 'aeiou', 0 ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( countOfSubstrings( 'ieaouqqieaouqq', 1 ) ).toBe( 3 );
    } );
} );
