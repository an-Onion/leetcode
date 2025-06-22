function divideString( s: string, k: number, fill: string ): string[] {
    const result = [];
    for ( let i = 0; i < s.length; i += k ) {
        result.push( s.slice( i, i + k ).padEnd( k, fill ) );
    }

    return result;
}

describe( '2138. Divide a String Into Groups of Size k', () => {
    it( 'case 1', () => {
        expect( divideString( 'abcdefghi', 3, 'x' ) ).toEqual( [
            'abc',
            'def',
            'ghi',
        ] );
    } );

    it( 'case 2', () => {
        expect( divideString( 'abcdefghij', 3, 'x' ) ).toEqual( [
            'abc',
            'def',
            'ghi',
            'jxx',
        ] );
    } );
} );
