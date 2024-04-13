function wordBreak( s: string, wordDict: string[] ): boolean {
    const dp: boolean[] = Array( s.length + 1 ).fill( false );

    dp[0] = true;
    
    const dict = new Set( wordDict );

    for( let end = 1; end <= s.length; ++end ){
        for( let start = end-1; start >= 0; --start ){
            const sub = s.substring( start, end );
            if( dp[start] && dict.has( sub ) ){
                dp[end] = true;
                break;
            }
        }
        
    }
    return dp[s.length];
}   

describe( '139. word break', () => {
    it( '"leetcode"', () =>{
        const s = 'leetcode';
        const wordDict = [ 'leet', 'code' ];
        const output = wordBreak( s, wordDict );
        expect( output ).toBeTruthy();
    } );

    it( '"applepenapple"', () =>{
        const s = 'applepenapple';
        const wordDict = [ 'apple', 'pen' ];
        const output = wordBreak( s, wordDict );
        expect( output ).toBeTruthy();
    } );

    it( '"catsandog"', () =>{
        const s = 'catsandog';
        const wordDict = [ 'cats', 'dog', 'sand', 'and', 'cat'];
        const output = wordBreak( s, wordDict );
        expect( output ).toBeFalsy();
    } );

} );