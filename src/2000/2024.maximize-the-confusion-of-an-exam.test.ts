function maxConsecutiveAnswers( answerKey: string, k: number ): number {
    return Math.max( maxConsecutiveChar( 'T' ), maxConsecutiveChar( 'F' ) );

    function maxConsecutiveChar( char: string ) {
        let max = 0,
            left = 0,
            right = 0,
            sofar = 0;
        for ( const c of answerKey ) {
            if ( c !== char ) {
                sofar++;
            }

            while ( sofar > k ) {
                if ( answerKey[left++] !== char ) {
                    sofar--;
                    break;
                }
            }
            max = Math.max( max, right - left + 1 );
            right++;
        }
        return max;
    }
}

describe( '2024. Maximize the Confusion of an Exam', () => {
    it( 'should work', () => {
        expect( maxConsecutiveAnswers( 'TTFF', 2 ) ).toBe( 4 );
        expect( maxConsecutiveAnswers( 'TFFT', 1 ) ).toBe( 3 );
        expect( maxConsecutiveAnswers( 'TTFTTFTT', 1 ) ).toBe( 5 );
    } );
} );
