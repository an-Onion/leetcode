function findLadders( beginWord: string, endWord: string, wordList: string[] ): string[][] {
    const visited = new Set<string>();
    const words = new Set<string>( wordList );

    const adj = new Map<string, string[]>();

    const isExisted = BFS();

    if ( !isExisted ) return [];
    return DFS( endWord );

    function getConnectedWords( word: string ): string[] {

        const connectedWords: string[] = [];

        for ( let i = 0; i < word.length; i++ ) {
            for ( let j = 0; j < 26; j++ ) {
                const c = String.fromCharCode( 97 + j );

                if ( c === word[ i ] ) continue;

                const neighbor = word.slice( 0, i ) + c + word.slice( i + 1 );

                if ( visited.has( neighbor ) ) continue;

                if ( words.has( neighbor ) )
                    connectedWords.push( neighbor );
            }
        }
        return connectedWords;
    }

    function BFS(): boolean {

        const queue: string[] = [beginWord];

        while ( queue.length ) {

            let size = queue.length;
            const level = new Set<string>( queue );

            while ( size-- ) {
                const top = queue.shift();

                if ( visited.has( top ) ) continue; // already visited

                visited.add( top );

                if ( top === endWord ) {
                    return true;
                }

                const connectedWords = getConnectedWords( top );

                for ( const node of connectedWords ) {
                    if( level.has( node ) ) continue;
                    adj.set( node, [...( adj.get( node ) ?? [] ), top] );
                }

                queue.push( ...connectedWords );
            }
        }
        return false;
    }

    function DFS( node: string ): string[][] {
        if( node === beginWord ) return [[beginWord]];
        return adj.get( node )?.flatMap( ( parent ) => {
            return DFS( parent ).map( ( path ) => [...path, node] );
        } );
    }
}

describe( '126. Word Ladder II', () => {

    it( 'Example 1', () => {
        const beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog'];
        const result = findLadders( beginWord, endWord, wordList );
        expect( result.sort() ).toEqual(
            [
                ['hit','hot','dot','dog','cog'],
                ['hit','hot','lot','log','cog'],
            ]
            .sort()
        );
    } );

    it( 'Example 2', () => {
        const beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log'];
        const result = findLadders( beginWord, endWord, wordList );
        expect( result.sort() ).toEqual( [] );
    } );
} );