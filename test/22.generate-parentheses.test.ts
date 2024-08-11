import { generateParenthesis } from '../src/1-100/22.generate-parentheses';

describe( 'Generate Parentheses', () => {
    it( '1', () => {
        expect( generateParenthesis( 1 ) ).toStrictEqual( ['()'] );
    } );

    it( '2', () => {
        expect( generateParenthesis( 2 ).sort() ).toStrictEqual(
            ['(())', '()()'].sort(),
        );
    } );

    it( '3', () => {
        expect( generateParenthesis( 3 ).sort() ).toStrictEqual(
            ['((()))', '(()())', '(())()', '()(())', '()()()'].sort(),
        );
    } );

    it( '4', () => {
        expect( generateParenthesis( 4 ).sort() ).toStrictEqual(
            [
                '(((())))',
                '((()()))',
                '((())())',
                '((()))()',
                '(()(()))',
                '(()()())',
                '(()())()',
                '(())(())',
                '(())()()',
                '()((()))',
                '()(()())',
                '()(())()',
                '()()(())',
                '()()()()',
            ].sort(),
        );
    } );
} );
