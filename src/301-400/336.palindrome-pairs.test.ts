function palindromePairs( words: string[] ): number[][] {
    const reversedWords = new Map();
    for ( let i = 0; i < words.length; i++ ) {
        const reversed = words[i].split( '' ).reverse().join( '' );
        reversedWords.set( reversed, i );
    }
    const res = [];
    for ( let i = 0; i < words.length; i++ ) {
        const curWord = words[i];
        if ( isPalindrome( curWord ) && reversedWords.has( '' ) && curWord !== '' ) {
            res.push( [reversedWords.get( '' ), i] );
        }
        for ( let j = 0; j < curWord.length; j++ ) {
            const prefix = curWord.substring( 0, j );
            const suffix = curWord.substring( j );
            if (
                isPalindrome( prefix ) &&
                reversedWords.has( suffix ) &&
                reversedWords.get( suffix ) !== i
            ) {
                res.push( [reversedWords.get( suffix ), i] );
            }
            if (
                isPalindrome( suffix ) &&
                reversedWords.has( prefix ) &&
                reversedWords.get( prefix ) !== i
            ) {
                res.push( [i, reversedWords.get( prefix )] );
            }
        }
    }
    return res;

    function isPalindrome( str: string ): boolean {
        let l = 0,
            r = str.length - 1;
        while ( l < r ) {
            if ( str[l++] !== str[r--] ) return false;
        }
        return true;
    }
}

describe( '336. palindrome pairs', () => {
    it( 'case 1', () => {
        const words = ['abcd', 'dcba', 'lls', 's', 'sssll'];
        expect( palindromePairs( words ).sort() ).toStrictEqual(
            [
                [0, 1],
                [1, 0],
                [3, 2],
                [2, 4],
            ].sort(),
        );
    } );

    it( 'case 2', () => {
        const words = ['bat', 'tab', 'cat'];
        expect( palindromePairs( words ).sort() ).toStrictEqual(
            [
                [0, 1],
                [1, 0],
            ].sort(),
        );
    } );

    it( 'case 3', () => {
        const words = ['a', ''];
        expect( palindromePairs( words ).sort() ).toStrictEqual(
            [
                [1, 0],
                [0, 1],
            ].sort(),
        );
    } );

    it( 'case 4', () => {
        const words = ['a', 'abc', 'aba', ''];
        expect( palindromePairs( words ).sort() ).toStrictEqual(
            [
                [0, 3],
                [3, 0],
                [2, 3],
                [3, 2],
            ].sort(),
        );
    } );
} );
