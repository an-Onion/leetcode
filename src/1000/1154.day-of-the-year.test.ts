function dayOfYear( date: string ): number {
    const year = +date.slice( 0, 4 );
    const month = +date.slice( 5, 7 );
    const day = +date.slice( 8 );

    const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ) {
        ++amount[1];
    }

    let res = 0;
    for ( let i = 0; i < month - 1; ++i ) {
        res += amount[i];
    }
    return res + day;
}

describe( '1154. day-of-the-year', () => {
    it( 'case 1', () => {
        expect( dayOfYear( '2019-01-09' ) ).toBe( 9 );
    } );
    it( 'case 2', () => {
        expect( dayOfYear( '2019-02-10' ) ).toBe( 41 );
    } );
} );
