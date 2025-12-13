function validateCoupons(
    code: string[],
    businessLine: string[],
    isActive: boolean[],
): string[] {
    const groups: string[][] = [[], [], [], []];
    const ret: string[] = [];

    for ( let i = 0; i < code.length; i++ ) {
        if ( code[i] && check( code[i], isActive[i] ) ) {
            switch ( businessLine[i] ) {
                case 'electronics':
                    groups[0].push( code[i] );
                    break;
                case 'grocery':
                    groups[1].push( code[i] );
                    break;
                case 'pharmacy':
                    groups[2].push( code[i] );
                    break;
                case 'restaurant':
                    groups[3].push( code[i] );
                    break;
            }
        }
    }

    for ( const group of groups ) {
        group.sort();
        ret.push( ...group );
    }

    return ret;

    function check( code: string, isActive: boolean ): boolean {
        for ( const char of code ) {
            if ( !/[a-zA-Z0-9_]/.test( char ) ) {
                return false;
            }
        }
        return isActive;
    }
}

describe( '3606. Coupon Code Validator', () => {
    it( 'case 1', () => {
        const code = ['SAVE20', '', 'PHARMA5', 'SAVE@20'],
            businessLine = ['restaurant', 'grocery', 'pharmacy', 'restaurant'],
            isActive = [true, true, true, true];
        expect( validateCoupons( code, businessLine, isActive ) ).toEqual( [
            'PHARMA5',
            'SAVE20',
        ] );
    } );

    it( 'case 2', () => {
        const code = ['GROCERY15', 'ELECTRONICS_50', 'DISCOUNT10'],
            businessLine = ['grocery', 'electronics', 'invalid'],
            isActive = [false, true, true];
        expect( validateCoupons( code, businessLine, isActive ) ).toEqual( [
            'ELECTRONICS_50',
        ] );
    } );
} );
