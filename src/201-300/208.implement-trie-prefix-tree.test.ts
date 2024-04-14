class Trie {
    children: Record<string, Trie>;
    isLeaf: boolean;
    constructor() {
        this.children = {};
        this.isLeaf = false;
    }

    insert( word: string ): void {
        
        if( !word ) {
            this.isLeaf = true;
            return;
        }

        const c = word[0];

        if( !this.children[c] ){
            this.children[c] = new Trie();
        }
        const next = this.children[c];
        next.insert( word.slice( 1 ) );
    }

    search( word: string ): boolean {
        if( !word ) return this.isLeaf;
        const c = word[0];
        return this.children[c]?.search( word.slice( 1 ) ) ?? false;
    }

    startsWith( prefix: string ): boolean {
        if( !prefix ) return true;
        const c = prefix[0];
        return this.children[c]?.startsWith( prefix.slice( 1 ) ) ?? false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

describe( '208. Trie tree', ()=>{
    it( 'Example 1', () => {
        const trie = new Trie();
        trie.insert( 'apple' );
        expect( trie.search( 'apple' ) ).toBe( true );
        expect( trie.search( 'app' ) ).toBe( false );
        trie.insert( 'app' );
        expect( trie.search( 'app' ) ).toBe( true );
        expect( trie.startsWith( 'app' ) ).toBe( true );
        expect( trie.startsWith( 'ap' ) ).toBe( true );
    } );
} );