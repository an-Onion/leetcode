function maxDiff( num: number ): number {
    const s = num.toString();

    let sMax = s;
    const p9 = s.search( /[^9]/ );

    if ( p9 !== -1 ) {
        sMax = s.replaceAll( s[p9], '9' );
    }

    const regex = new RegExp( `[^0${s[0]}]` );
    const p0 = s.search( regex );

    let sMin = s;

    if ( s[0] === '1' && p0 !== -1 ) {
        sMin = s.replaceAll( s[p0], '0' );
    } else {
        sMin = s.replaceAll( s[0], '1' );
    }
    return parseInt( sMax, 10 ) - parseInt( sMin, 10 );
}

describe( '1432. Max Difference You Can Get From Changing an Integer', () => {
    it( 'case 1', () => {
        expect( maxDiff( 555 ) ).toEqual( 888 );
    } );

    it( 'case 2', () => {
        expect( maxDiff( 9 ) ).toEqual( 8 );
    } );

    it( 'case 3', () => {
        expect( maxDiff( 123456 ) ).toEqual( 820000 );
    } );

    it( 'case 4', () => {
        expect( maxDiff( 10000 ) ).toEqual( 80000 );
    } );

    it( 'case 5', () => {
        expect( maxDiff( 9288 ) ).toEqual( 8700 );
    } );
} );
