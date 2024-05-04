function isNumber( s: string ): boolean {

    s = s.toLocaleLowerCase();

    if( !s.includes( 'e' ) )
        return isDecimal( s );

    const divisions = s.split( 'e' );

    if( divisions.length !== 2 ) return false;

    const [decimal, integer] = divisions;

    if( !isInteger( integer ) ) return false;

    return isDecimal( decimal );

    function isInteger( s: string ): boolean {

        if( ['-','+'].includes( s[0] ) ){
            s = s.slice( 1 );
        }

        if( s === '' ) return false;
        for( let i = 0; i < s.length; i++ ){
            if( s.charCodeAt( i ) < 48 || s.charCodeAt( i ) > 57 )
                return false;
        }
        return true;
    }

    function isDecimal( s: string ): boolean {

        if( !s.includes( '.' ) ) {
            return isInteger( s );
        }

        const divisions = s.split( '.' );

        if( divisions.length > 2 ) return false;

        const [ integer, decimal ] = divisions;


        if( !isInteger( integer ) && !['+', '-', ''].includes( integer ) ) {
            return false;
        }


        if( ['-','+'].includes( decimal[0] ) ) return false;

        if( !isInteger( decimal ) && decimal !== '' ) {
            return false;
        }
        return !( ['+', '-', ''].includes( integer ) && [''].includes( decimal ) );

    }

}

describe( '65. Valid Number', () => {

    it( '".-4"', () => {
        expect( isNumber( '.-4' ) ).toBe( false );
    } );

    it( '"0"', () => {
        expect( isNumber( '0' ) ).toBe( true );
    } );

    it( '"0.."', () => {
        expect( isNumber( '0..' ) ).toBe( false );
    } );

    it( '" e "', () => {
        expect( isNumber( 'e' ) ).toBe( false );
    } );

    it( '"e3"', () => {
        expect( isNumber( 'e3' ) ).toBe( false );
    } );

    it( '"3."', () => {
        expect( isNumber( '3.' ) ).toBe( true );
    } );

    it( '.', () => {
        expect( isNumber( '.' ) ).toBe( false );
    } );

    it( 'all true', () => {
        const testCases = ['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789']
        .map( ( s ) => isNumber( s ) )
        .filter( b => b === false );
        expect( testCases.length ).toBe( 0 ); // all true
    } );

    it( 'all false', () => {
        const testCases = ['abc', '1a', '1e', 'e3', '99e2.5', '--5', '-+3', '95a54e53']
        .map( ( s ) => isNumber( s ) )
        .filter( b => b === true );

        expect( testCases.length ).toBe( 0 ); // all false

    } );
} );