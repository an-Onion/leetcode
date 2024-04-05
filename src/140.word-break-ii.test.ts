function wordBreak( s: string, wordDict: string[] ): string[] {

    const dict = new Set( wordDict );
    const N = s.length;
    const dp = Array.from( { length: N+1 }, () => [] );
    dp[N].push( '' );

    for( let end = N; end > 0; --end ){
        if( !dp[end].length ) continue;

        for( let len = 1; len <= 10; ++len ){
            const start = end - len;
            if( start < 0 ) break;
            const word = s.substring( start, end );
            if( dict.has( word ) ){
                dp[start].push( word );
            }
        }
    }
    const ret: string[] = [];

    function DFS( start: number = 0, path: string[] = [] ) {
        if( start === N ){
            return ret.push( path.join( ' ' ) );
        }
        for( const word of dp[start] ){
            DFS( start + word.length, [...path, word] );
        }
    }

    return DFS(), ret;
}

describe( '140. word break', () => {

    it( '"catsanddog"', () => {
        const s = 'catsanddog', wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
        expect( wordBreak( s, wordDict ) ).toStrictEqual( ['cats and dog', 'cat sand dog'] );
    } );

    it( '"pineapplepenapple"', () => {
        const s = 'pineapplepenapple', wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
        expect( wordBreak( s, wordDict ).sort() ).toStrictEqual(
            [
                'pine apple pen apple',
                'pineapple pen apple',
                'pine applepen apple',
            ].sort() );
    } );

    it( '"catsandog"', () => {
        const s = 'catsandog', wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
        expect( wordBreak( s, wordDict ) ).toStrictEqual( [] );
    } );

} );