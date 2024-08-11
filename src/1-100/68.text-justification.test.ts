function fullJustify( words: string[], maxWidth: number ): string[] {
    const rows: string[][] = [];
    let i = 0;
    while ( i < words.length ) {
        const row = [];
        let sum = 0;

        do {
            row.push( words[i] );
            sum += words[i].length + 1;
            i++;
        } while ( i < words.length && sum + words[i].length <= maxWidth );
        rows.push( row );
    }

    return rows.map( ( row, i ) => justify( row, i === rows.length - 1 ) );

    function justify( row: string[], end: boolean ): string {
        if ( end || row.length === 1 ) {
            return row.join( ' ' ).padEnd( maxWidth, ' ' );
        }

        const total = row.reduce( ( a, b ) => a + b.length, 0 );
        let gap = maxWidth - total;

        const ret: string[] = [row.pop()];

        while ( row.length > 0 ) {
            const space = Math.floor( gap / row.length );
            gap -= space;
            ret.push( ' '.repeat( space ), row.pop() );
        }
        return ret.reverse().join( '' );
    }
}

describe( '68. Text Justification', () => {
    it( 'Example 1', () => {
        expect(
            fullJustify(
                ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
                16,
            ),
        ).toStrictEqual( [
            'This    is    an',
            'example  of text',
            'justification.  ',
        ] );
    } );

    it( 'Example 2', () => {
        expect(
            fullJustify(
                ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
                16,
            ),
        ).toStrictEqual( [
            'What   must   be',
            'acknowledgment  ',
            'shall be        ',
        ] );
    } );

    it( 'Example 3', () => {
        const words = [
            'ask',
            'not',
            'what',
            'your',
            'country',
            'can',
            'do',
            'for',
            'you',
            'ask',
            'what',
            'you',
            'can',
            'do',
            'for',
            'your',
            'country',
        ];
        expect( fullJustify( words, 16 ) ).toStrictEqual( [
            'ask   not   what',
            'your country can',
            'do  for  you ask',
            'what  you can do',
            'for your country',
        ] );
    } );
} );
