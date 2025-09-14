function spellchecker( wordlist: string[], queries: string[] ): string[] {
    const wordMap = new Map<string, string>();
    const capMap = new Map<string, string>();
    const vowelMap = new Map<string, string>();

    for ( const word of wordlist ) {
        wordMap.set( word, word );

        const lowerWord = word.toLowerCase();
        if ( !capMap.has( lowerWord ) ) {
            capMap.set( lowerWord, word );
        }
        const vowelWord = word.toLowerCase().replaceAll( /[aeiou]/gi, '*' );
        if ( !vowelMap.has( vowelWord ) ) {
            vowelMap.set( vowelWord, word );
        }
    }

    return queries.map( ( query ) => {
        if ( wordMap.has( query ) ) {
            return wordMap.get( query )!;
        }

        const lowerQuery = query.toLowerCase();
        if ( capMap.has( lowerQuery ) ) {
            return capMap.get( lowerQuery )!;
        }
        const vowelQuery = query.toLowerCase().replaceAll( /[aeiou]/gi, '*' );
        if ( vowelMap.has( vowelQuery ) ) {
            return vowelMap.get( vowelQuery )!;
        }
        return '';
    } );
}

describe( '966. Vowel Spellchecker', () => {
    it( 'case 1', () => {
        const wordlist = ['KiTe', 'kite', 'hare', 'Hare'];
        const queries = [
            'kite',
            'Kite',
            'KiTe',
            'Hare',
            'HARE',
            'Hear',
            'hear',
            'keti',
            'keet',
            'keto',
        ];
        const result = spellchecker( wordlist, queries );
        expect( result ).toEqual( [
            'kite',
            'KiTe',
            'KiTe',
            'Hare',
            'hare',
            '',
            '',
            'KiTe',
            '',
            'KiTe',
        ] );
    } );

    it( 'case 2', () => {
        const wordlist = ['yellow'];
        const queries = ['YellOw'];
        const result = spellchecker( wordlist, queries );
        expect( result ).toEqual( ['yellow'] );
    } );
} );
