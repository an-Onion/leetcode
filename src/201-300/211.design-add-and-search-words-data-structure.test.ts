class WordDictionary {

    val: string;
    children: Map<string, WordDictionary>;
    isEndOfWord: boolean;

    constructor( c: string = '' ) {
        this.val = c;
        this.children = new Map<string, WordDictionary>();
        this.isEndOfWord = false;
    }

    addWord( word: string ): void {

        if( !word ){
            this.isEndOfWord = true;
            return;
        }

        const c = word[0];

        if( !this.children.has( c ) ){
            this.children.set( c, new WordDictionary( c ) );
        }
        const next = this.children.get( c );
        next!.addWord( word.slice( 1 ) );
    }

    search( word: string ): boolean {

        if( !word ) {
            return this.isEndOfWord;
        }
        const c = word[0];

        if( c !== '.' ) {
            const next = this.children.get( c );
            return  next?.search( word.slice( 1 ) ) ?? false;
        }

        for( const child of this.children.values() ){
            if( child.search( word.slice( 1 ) ) ){
                return true;
            }
        }
        return false;

    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

describe( '211, design-add-and-search-words-data-structure', () => {
    it( 'case 1', () => {
        const obj = new WordDictionary();
        obj.addWord( 'bad' );
        obj.addWord( 'dad' );
        obj.addWord( 'mad' );
        expect( obj.search( 'pad' ) ).toBe( false );
        expect( obj.search( 'bad' ) ).toBe( true );
        expect( obj.search( '.ad' ) ).toBe( true );
        expect( obj.search( 'b..' ) ).toBe( true );
    } );
} );