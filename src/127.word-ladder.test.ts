import * as test3 from './largeData/127.3.json';
import * as test4 from './largeData/127.4.json';

function ladderLength( beginWord: string, endWord: string, wordList: string[] ): number {

    const visited = new Set<string>();
    const words = new Set<string>( wordList );

    function getConnectedWords( word: string ): string[] {

        const connectedWords: string[] = [];

        for ( let i = 0; i < word.length; i++ ) {
            for ( let j = 0; j < 26; j++ ) {
                const c = String.fromCharCode( 97 + j );

                if ( c === word[i] ) continue; // don't change this character

                const neighbor = word.slice( 0, i ) + String.fromCharCode( 97 + j ) + word.slice( i + 1 );

                if ( visited.has( neighbor ) ) continue;
                visited.add( neighbor );

                if ( words.has( neighbor ) )
                    connectedWords.push( neighbor );
            }
        }
        return connectedWords;
    }

    function BFS() {

        const queue: string[] = [beginWord];

        let level = 1;

        while ( queue.length ) {

            let size = queue.length;

            while ( size-- ) {
                const top = queue.shift();
                visited.add( top );
                if ( top === endWord ) return level;

                const connectedWords = getConnectedWords( top );
                queue.push( ...connectedWords );
            }

            level++;
        }
        return 0;
    }

    return BFS();
}

describe( '127. word ladder', () => {
    it( 'example 1', () => {
        const beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
        expect( ladderLength( beginWord, endWord, wordList ) ).toEqual( 5 );
    } );

    it( 'example 2', () => {
        const beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
        expect( ladderLength( beginWord, endWord, wordList ) ).toEqual( 0 );
    } );


    it( 'example 3', () => {
        const beginWord = 'sand', endWord = 'acne', wordList = test3;
        expect( ladderLength( beginWord, endWord, wordList ) ).toBe( 11 );
        
    } );

    it( 'example 4', () =>{
        const beginWord = 'nanny', endWord = 'aloud';
        const wordList = test4;
        expect( ladderLength( beginWord, endWord, wordList ) ).toBe( 20 );
    } );
} );