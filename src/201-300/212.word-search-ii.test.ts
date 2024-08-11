import * as case7 from '../largeData/212.json';

class TrieNode {
    children: Map<string, TrieNode>;
    word: string | null;

    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

function findWords( board: string[][], words: string[] ): string[] {
    const root = buildTrie( words );
    const result: string[] = [];

    for ( let i = 0; i < board.length; i++ ) {
        for ( let j = 0; j < board[0].length; j++ ) {
            dfs( board, i, j, root, result );
        }
    }

    return result;
}

function buildTrie( words: string[] ): TrieNode {
    const root = new TrieNode();

    for ( const word of words ) {
        let node = root;
        for ( const char of word ) {
            if ( !node.children.has( char ) ) {
                node.children.set( char, new TrieNode() );
            }
            node = node.children.get( char )!;
        }
        node.word = word;
    }

    return root;
}

function dfs(
    board: string[][],
    i: number,
    j: number,
    node: TrieNode,
    result: string[],
) {
    if ( i < 0 || i >= board.length || j < 0 || j >= board[0].length ) {
        return;
    }

    const char = board[i][j];

    if ( char === '#' || !node.children.has( char ) ) {
        return;
    }

    const nextNode = node.children.get( char )!;

    if ( nextNode.word ) {
        result.push( nextNode.word );
        nextNode.word = null; // Avoid duplicates
    }

    board[i][j] = '#'; // Mark as visited

    dfs( board, i + 1, j, nextNode, result );
    dfs( board, i - 1, j, nextNode, result );
    dfs( board, i, j + 1, nextNode, result );
    dfs( board, i, j - 1, nextNode, result );

    board[i][j] = char; // Reset the cell
}

describe( '212. word-search-ii', () => {
    it( 'case 1', () => {
        const board = [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v'],
        ];
        const words = ['oath', 'pea', 'eat', 'rain'];
        expect( findWords( board, words ).sort() ).toEqual( ['eat', 'oath'].sort() );
    } );

    it( 'case 2', () => {
        const board = [
            ['a', 'b'],
            ['c', 'd'],
        ];
        const words = ['abcb'];
        expect( findWords( board, words ) ).toEqual( [] );
    } );

    it( 'case 3', () => {
        const board = [
            ['o', 'a', 'b', 'n'],
            ['o', 't', 'a', 'e'],
            ['a', 'h', 'k', 'r'],
            ['a', 'f', 'l', 'v'],
        ];
        const words = ['oa', 'oaa'];
        expect( findWords( board, words ).sort() ).toEqual( ['oa', 'oaa'].sort() );
    } );

    it( 'case 4', () => {
        const board = [
            ['a', 'b', 'c', 'e'],
            ['x', 'x', 'c', 'd'],
            ['x', 'x', 'b', 'a'],
        ];
        const words = ['abc', 'abcd'];

        expect( findWords( board, words ).sort() ).toEqual( ['abc', 'abcd'].sort() );
    } );

    it( 'case 5', () => {
        const board = [
            ['c', 'd'],
            ['b', 'a'],
        ];
        const words = ['abc', 'abcd'];
        expect( findWords( board, words ).sort() ).toEqual( ['abc', 'abcd'].sort() );
    } );

    it( 'case 6', () => {
        const board = [
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ];
        const words = [
            'lllllll',
            'fffffff',
            'ssss',
            's',
            'rr',
            'xxxx',
            'ttt',
            'eee',
            'ppppppp',
            'iiiiiiiii',
            'xxxxxxxxxx',
            'pppppp',
            'xxxxxx',
            'yy',
            'jj',
            'ccc',
            'zzz',
            'ffffffff',
            'r',
            'mmmmmmmmm',
            'tttttttt',
            'mm',
            'ttttt',
            'qqqqqqqqqq',
            'z',
            'aaaaaaaa',
            'nnnnnnnnn',
            'v',
            'g',
            'ddddddd',
            'eeeeeeeee',
            'aaaaaaa',
            'ee',
            'n',
            'kkkkkkkkk',
            'ff',
            'qq',
            'vvvvv',
            'kkkk',
            'e',
            'nnn',
            'ooo',
            'kkkkk',
            'o',
            'ooooooo',
            'jjj',
            'lll',
            'ssssssss',
            'mmmm',
            'qqqqq',
            'gggggg',
            'rrrrrrrrrr',
            'iiii',
            'bbbbbbbbb',
            'aaaaaa',
            'hhhh',
            'qqq',
            'zzzzzzzzz',
            'xxxxxxxxx',
            'ww',
            'iiiiiii',
            'pp',
            'vvvvvvvvvv',
            'eeeee',
            'nnnnnnn',
            'nnnnnn',
            'nn',
            'nnnnnnnn',
            'wwwwwwww',
            'vvvvvvvv',
            'fffffffff',
            'aaa',
            'p',
            'ddd',
            'ppppppppp',
            'fffff',
            'aaaaaaaaa',
            'oooooooo',
            'jjjj',
            'xxx',
            'zz',
            'hhhhh',
            'uuuuu',
            'f',
            'ddddddddd',
            'zzzzzz',
            'cccccc',
            'kkkkkk',
            'bbbbbbbb',
            'hhhhhhhhhh',
            'uuuuuuu',
            'cccccccccc',
            'jjjjj',
            'gg',
            'ppp',
            'ccccccccc',
            'rrrrrr',
            'c',
            'cccccccc',
            'yyyyy',
            'uuuu',
            'jjjjjjjj',
            'bb',
            'hhh',
            'l',
            'u',
            'yyyyyy',
            'vvv',
            'mmm',
            'ffffff',
            'eeeeeee',
            'qqqqqqq',
            'zzzzzzzzzz',
            'ggg',
            'zzzzzzz',
            'dddddddddd',
            'jjjjjjj',
            'bbbbb',
            'ttttttt',
            'dddddddd',
            'wwwwwww',
            'vvvvvv',
            'iii',
            'ttttttttt',
            'ggggggg',
            'xx',
            'oooooo',
            'cc',
            'rrrr',
            'qqqq',
            'sssssss',
            'oooo',
            'lllllllll',
            'ii',
            'tttttttttt',
            'uuuuuu',
            'kkkkkkkk',
            'wwwwwwwwww',
            'pppppppppp',
            'uuuuuuuu',
            'yyyyyyy',
            'cccc',
            'ggggg',
            'ddddd',
            'llllllllll',
            'tttt',
            'pppppppp',
            'rrrrrrr',
            'nnnn',
            'x',
            'yyy',
            'iiiiiiiiii',
            'iiiiii',
            'llll',
            'nnnnnnnnnn',
            'aaaaaaaaaa',
            'eeeeeeeeee',
            'm',
            'uuu',
            'rrrrrrrr',
            'h',
            'b',
            'vvvvvvv',
            'll',
            'vv',
            'mmmmmmm',
            'zzzzz',
            'uu',
            'ccccccc',
            'xxxxxxx',
            'ss',
            'eeeeeeee',
            'llllllll',
            'eeee',
            'y',
            'ppppp',
            'qqqqqq',
            'mmmmmm',
            'gggg',
            'yyyyyyyyy',
            'jjjjjj',
            'rrrrr',
            'a',
            'bbbb',
            'ssssss',
            'sss',
            'ooooo',
            'ffffffffff',
            'kkk',
            'xxxxxxxx',
            'wwwwwwwww',
            'w',
            'iiiiiiii',
            'ffff',
            'dddddd',
            'bbbbbb',
            'uuuuuuuuu',
            'kkkkkkk',
            'gggggggggg',
            'qqqqqqqq',
            'vvvvvvvvv',
            'bbbbbbbbbb',
            'nnnnn',
            'tt',
            'wwww',
            'iiiii',
            'hhhhhhh',
            'zzzzzzzz',
            'ssssssssss',
            'j',
            'fff',
            'bbbbbbb',
            'aaaa',
            'mmmmmmmmmm',
            'jjjjjjjjjj',
            'sssss',
            'yyyyyyyy',
            'hh',
            'q',
            'rrrrrrrrr',
            'mmmmmmmm',
            'wwwww',
            'www',
            'rrr',
            'lllll',
            'uuuuuuuuuu',
            'oo',
            'jjjjjjjjj',
            'dddd',
            'pppp',
            'hhhhhhhhh',
            'kk',
            'gggggggg',
            'xxxxx',
            'vvvv',
            'd',
            'qqqqqqqqq',
            'dd',
            'ggggggggg',
            't',
            'yyyy',
            'bbb',
            'yyyyyyyyyy',
            'tttttt',
            'ccccc',
            'aa',
            'eeeeee',
            'llllll',
            'kkkkkkkkkk',
            'sssssssss',
            'i',
            'hhhhhh',
            'oooooooooo',
            'wwwwww',
            'ooooooooo',
            'zzzz',
            'k',
            'hhhhhhhh',
            'aaaaa',
            'mmmmm',
        ];
        expect( findWords( board, words ).sort() ).toStrictEqual( [
            'a',
            'aa',
            'aaa',
            'aaaa',
            'aaaaa',
            'aaaaaa',
            'aaaaaaa',
            'aaaaaaaa',
            'aaaaaaaaa',
            'aaaaaaaaaa',
        ] );
    } );

    it( 'case 7', () => {
        const board = [
            ['b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
            ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'],
            ['b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
            ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'],
            ['b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
            ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'],
            ['b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
            ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'],
            ['b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
            ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'],
        ];
        const words = case7;
        expect( findWords( board, words ).sort() ).toStrictEqual( ['ababababab'] );
    } );
} );
